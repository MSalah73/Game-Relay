import React, {Component} from 'react'
import Header from'./Header'
import SideMenu from './SideMenu'
import DisplayContent from './DisplayContent'
import ContentHeader from './ContentHeader'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios';
import moment from 'moment'

export default class Library extends Component {
	constructor(props){
		super(props)
		this.clickGenreHandler= this.clickGenreHandler.bind(this);
		this.clickPlatformHandler = this.clickPlatformHandler.bind(this);
		this.clickReleaseHandler= this.clickReleaseHandler.bind(this);
		this.clickSearchHandler= this.clickSearchHandler.bind(this);
	}
	state = {
		data: null,
		originalData: null,
		originalLastMonthData: null
	}

	clickSearchHandler(search){
		search.preventDefault();

		let data = this.state.originalData.filter((e, i) => e !== undefined && e.name.toLowerCase().includes(search.target.value))
		this.setState({
			data: data
		})
	}
	clickGenreHandler(genre){
		let data = this.state.originalData.filter((e, i) => e !== undefined && e.genres !== undefined ? e.genres.some(e => e.name=== genre):false)
		this.setState({
			data: data
		})
	}
	clickPlatformHandler(platform){
		let data = this.state.originalData.filter((e, i) => e !== undefined && e.platforms !== undefined ? e.platforms.some(e => e.platform.name=== platform):false)
		this.setState({
			data: data
		})
	}
	clickReleaseHandler(releasePriod){
		if(releasePriod === "Last 30 days"){
			let filterDateLast30Days = moment(moment().subtract(30, 'days').format("YYYY-MM-DD")).valueOf()
			let filterDateToday =  moment(moment().format("YYYY-MM-DD").valueOf()).valueOf()
			let data = this.state.originalLastMonthData.filter((e, i) => e !== undefined &&  moment(e.released).valueOf() >= filterDateLast30Days && moment(e.released).valueOf() <= filterDateToday  )
			this.setState({
				data: data
			})
		}else{
			let filterDateThisWeek = moment(moment().add(7, 'days').format("YYYY-MM-DD").valueOf()).valueOf()
			let filterDateNextWeek =  moment(moment().add(14, 'days').format("YYYY-MM-DD").valueOf()).valueOf()
			let data = this.state.originalData.filter((e, i) => e !== undefined && releasePriod === "This week"? moment(e.released).valueOf() <= filterDateThisWeek: moment(e.released).valueOf() >= filterDateThisWeek && moment(e.released).valueOf() <= filterDateNextWeek )
			this.setState({
				data: data
			})
		}
	}
	componentDidMount(){
		let today = moment().format("YYYY-MM-DD")
		let nextmonth = moment().add(1, 'months').format("YYYY-MM-DD")
		let lastMonth =  moment().subtract(1, 'months').format("YYYY-MM-DD")

		axios.all([
			axios.get(`https://api.rawg.io/api/games?dates=${today},${nextmonth}&page=1`),
			axios.get(`https://api.rawg.io/api/games?dates=${today},${nextmonth}&page=2`),
			axios.get(`https://api.rawg.io/api/games?dates=${today},${nextmonth}&page=3`),
		])
		.then((res) => {
			let data = res.reduce( (total, current, i) => total = i === 1? [...total.data.results, ...current.data.results]: [...total, ...current.data.results])
			this.setState({data: data,
						   originalData: data})
		})
		.catch(e =>{
			console.log(e)
		})
		axios.all([
			axios.get(`https://api.rawg.io/api/games?dates=${lastMonth},${today}&page=1`),
			axios.get(`https://api.rawg.io/api/games?dates=${lastMonth},${today}&page=2`),
			axios.get(`https://api.rawg.io/api/games?dates=${lastMonth},${today}&page=3`),
		])
		.then((res) => {
			let data = res.reduce( (total, current, i) => total = i === 1? [...total.data.results, ...current.data.results]: [...total, ...current.data.results])
			this.setState({originalLastMonthData: data})
		})
		.catch(e =>{
			console.log(e)
		})

	}

	render() {
		let isLoaded = !this.state.data ? 
		null
		:
		<div>
			<Header searchHandler={this.clickSearchHandler}/>
			<Row>
				<Col lg="3" className="sidenav">
					<SideMenu releaseHandler={this.clickReleaseHandler} platformHandler={this.clickPlatformHandler}/>
				</Col>
				<Col lg="9">
					<ContentHeader releaseHandler={this.clickReleaseHandler} genreHandler={this.clickGenreHandler} platformHandler={this.clickPlatformHandler} />
					{!this.state.data.length?"":this.state.data.length === 1?<DisplayContent games={this.state.data} key={0}/>:
						this.state.data.reduce((total, currentItem, i) => {
						if(i === 1){
							if(this.state.data.length === 1){
								return <DisplayContent games={[currentItem]} key={i}/>
							}
							return this.state.data.length === 2? <DisplayContent games={[total, currentItem]} key={i}/>:{games:[total, currentItem]}
						}else if(i+1 === this.state.data.length){
							return total["toReturn"] === undefined? <DisplayContent games={[...total.games, currentItem]} key={i}/>: total["toReturn"] 
						}
						else if((i+1) % 3 === 0){
							total["toReturn"] = total["toReturn"] === undefined?[<DisplayContent games={[...total.games, currentItem]} key={i}/>] : [...total["toReturn"], [<DisplayContent games={[...total.games, currentItem]} key={i}/>]]
							total.games = [];
							return total;
						}else{
							total.games.push(currentItem)
							return total
						}
					})};

				</Col>
			</Row>
		</div>;

		return (
		<div>
			{isLoaded}
		</div>
		)
	}
}	