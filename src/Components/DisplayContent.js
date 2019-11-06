import React, {Component} from 'react'
import { Accordion, ListGroup, Card, Button, CardDeck} from 'react-bootstrap'

export default class DisplayContent extends Component {
	render() {
		let gameCards = this.props.games.map((e,i) => 
			<Card key={i} bg="dark" text="white">
				<Accordion className="moreInfo">
		            <Card.Img variant="top" src={e.background_image} />
		            <Card.Body>
		              <Card.Title>{e.name}</Card.Title>
			            <ListGroup>
			              <hr/>
				          <p>Release date</p>
				          <p>{e.released}</p>
				          <Accordion.Collapse eventKey={i.toString(10)}>
		    				<div>
			    				<hr/>
			    				<p className="">Genres:</p>
			    				<p className="">{e.genres.map((e, i) => <li key={i}>{e.name}</li>)}</p>
			    				<hr/>
			    				<p className="">Platforms:</p>
			    				<p className="">{e.platforms.map((e, i) => <li key={i}>{e.platform.name}</li>)}</p>
		    				</div>
		    		      </Accordion.Collapse>
						</ListGroup>
		              </Card.Body>
		              <Card.Footer>
			            <Accordion.Toggle as={Button} variant="link" eventKey={i.toString(10)}>
			              More Info!
	      		        </Accordion.Toggle>
	      		      </Card.Footer>
		            </Accordion>
	          </Card>)
		
		return (
		  <div>
		  	<CardDeck>
		  	{gameCards}
		  	</CardDeck>
	        <br/>
	      </div>
		)
	}
}