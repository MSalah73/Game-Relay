import React from 'react'
import {Container, Card} from 'react-bootstrap'

const Error = () => {

		return (
			<div>
				<Container className="creator">
						<Card bg="dark" text="white">
								<Card.Header>
										404 page does not exist.
								</Card.Header>
						</Card>
				</Container>
			</div>
		)
}

export default Error