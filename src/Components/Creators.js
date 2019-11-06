import React, {Component} from 'react'
import {Container, Card} from 'react-bootstrap'
export default class Creators extends Component {
	render() {
		return (
			<div>
				<Container className="creator">
						<Card bg="dark" text="white">
								<Card.Header>
										Coming Soon....<span className="notComing">Not!!!</span>
								</Card.Header>
						</Card>
				</Container>
			</div>
		)
	}
}