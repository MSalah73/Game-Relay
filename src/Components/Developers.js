import React, {Component} from 'react'
import {Card, Container} from "react-bootstrap"
export default class Developers extends Component {
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