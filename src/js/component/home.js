import React from "react";
import { MyCard } from "./mycard.js";
import { MyNavBar } from "./MyNavBar.js";
import { MainSection } from "./MainSection";

export function Home() {
	return (
		<div>
			<MyNavBar />
			<MainSection />

			<div>
				<MyCard
					title="Medellin"
					text="The city of eternal spring."
					Img="https://recommend.com/wp-content/uploads/2017/07/Palacio-de-la-Cultura-%E2%80%93-Plaza-Botero.jpg"
				/>
				<MyCard
					title="Pyramids of Giza"
					text="The mystery is eternal"
					Img="https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg"
				/>
				<MyCard
					title="Bangkok"
					text="The land of a million smiles."
					Img="https://www.fodors.com/wp-content/uploads/2019/04/HERO_BangkokTips_Hero_shutterstock_367503629.jpg"
				/>
				<MyCard
					title="Cancun"
					text="Beach,Sun and Fun"
					Img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F13%2Fcancun-mexico-coastline-CANCUNNOW0720.jpg"
				/>
			</div>
		</div>
	);
}
