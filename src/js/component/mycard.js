import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export function MyCard(props) {
	return (
		<Card style={{ width: "18rem", display: "inline-block" }}>
			<Card.Img variant="top" src={props.Img} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}
MyCard.propTypes = {
	Img: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};
