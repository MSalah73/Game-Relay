import React, {Component} from 'react'
import {Nav, Card, CardDeck, Container} from 'react-bootstrap'

export default class Home extends Component {
	render() {
		return (
			<Container className="home">
				<h1 className="project-title">Game Relay</h1>
		        <CardDeck>
		          <Card bg="dark" text="white">
		            <Card.Body>
		              <Card.Title>
		                <Nav>
		                  <Nav.Link className="whiteText center" href="/gamelibrary">Game Library</Nav.Link>
		                </Nav>
		              </Card.Title>
		            </Card.Body>
		          </Card>
		          <Card bg="dark" text="white">
		            <Card.Body>
		              <Card.Title>
		                <Nav>
		                  <Nav.Link className="whiteText center" href="/developers">Developers</Nav.Link>
		                </Nav>
		              </Card.Title>
		            </Card.Body>
		          </Card>
		          <Card bg="dark" text="white">
		            <Card.Body>
		              <Card.Title>
		                <Nav>
		                  <Nav.Link className="whiteText center" href="/creators">Creators</Nav.Link>
		                </Nav>
		              </Card.Title>
		            </Card.Body>
		          </Card>
		        </CardDeck>
       		</Container>

		)
	}
}