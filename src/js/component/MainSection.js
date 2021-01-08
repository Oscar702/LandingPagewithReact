import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { MyCard } from "./mycard";
import PropTypes from "prop-types";

export function MainSection(props) {
	return (
		<Jumbotron>
			<h1>Bonjour Tout le Monde, Bonne Année</h1>
			<p>This is my 4Geeks academy landing page project usin react js.</p>
			<p>
				<Button variant="primary" href={props.button}>
					Learn about Jumbotron
				</Button>
			</p>
		</Jumbotron>
	);
}

MainSection.propTypes = {
	button: PropTypes.string
};
