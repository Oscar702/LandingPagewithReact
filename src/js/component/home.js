import React from "react";
import { MyCard } from "./mycard.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	return (
		<div>
			<h1>Hello World</h1>
			<h2>hiiii</h2> <MyCard />
		</div>
	);
}
