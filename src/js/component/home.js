import React from "react";
import { MyCard } from "./mycard.js";
import { MyNavBar } from "./MyNavBar.js";
import { MainSection } from "./MainSection";

export function Home() {
	return (
		<div>
			<MyNavBar />
			<MainSection />
			<h1>Hello World</h1>
			<h2>hiiii</h2>
			<div>
				<MyCard Img="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
				<MyCard Img="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg" />
				<MyCard />
				<MyCard />
			</div>
		</div>
	);
}
