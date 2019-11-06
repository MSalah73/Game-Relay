import React, {Component} from 'react'
import {Card, Nav, Dropdown} from 'react-bootstrap'
export default class extends Component {
	render() {
		let menu = [["Action","Strategy","RPG","Shooter", "Adventure", "Puzzle", "Racing", "Sports"],
					["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "IOS", "Android"],
					["Last 30 days", "This week", "Next week"]
					]
		let dropdowns = ["Genres", "Platforms", "Releases"].map( (e, i) =>
		<Nav.Item key={i} className="buttons">
		<Dropdown >
		  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
		  		{e}
		  </Dropdown.Toggle>
		  <Dropdown.Menu>
		    {menu[i].map((e, i) => <Dropdown.Item key={i} onSelect={() => {!i?this.props.genreHandler(e):i === 1? this.props.platformHandler(e) : this.props.releaseHandler(e)  }}>{e}</Dropdown.Item>)}
		  </Dropdown.Menu>
		</Dropdown>
	    </Nav.Item>
	    )
		return (
			<div>
			<Card bg="dark" text="white">
	          <Card.Header>
	            <Nav variant="pills" defaultActiveKey="#first">
	            {dropdowns}
	            </Nav>
	          </Card.Header>
	        </Card>
	        <br />
			</div>
		)
	}
}