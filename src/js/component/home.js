import React from "react";
import { MyCard } from "./mycard.js";
import { MyNavBar } from "./MyNavBar.js";
import { MainSection } from "./MainSection";

export function Home() {
	return (
		<div>
			<MyNavBar />
			<MainSection button="https://www.w3schools.com/bootstrap/bootstrap_jumbotron_header.asp#:~:text=A%20jumbotron%20indicates%20a%20big,including%20other%20Bootstrap%20elements%2Fclasses." />

			<div>
				<MyCard
					button="https://en.wikipedia.org/wiki/Medell%C3%ADn"
					title="Medellin"
					text="The city of eternal spring."
					Img="https://recommend.com/wp-content/uploads/2017/07/Palacio-de-la-Cultura-%E2%80%93-Plaza-Botero.jpg"
				/>
				<MyCard
					button="https://en.wikipedia.org/wiki/Machu_Picchu"
					title="Machu Pichu"
					text="Enchanment hidden in the Andes"
					Img="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/f2/64/89.jpg"
				/>
				<MyCard
					button="https://en.wikipedia.org/wiki/Bangkok"
					title="Bangkok"
					text="The land of a million smiles."
					Img="https://www.fodors.com/wp-content/uploads/2019/04/HERO_BangkokTips_Hero_shutterstock_367503629.jpg"
				/>
				<MyCard
					button="https://en.wikipedia.org/wiki/Canc%C3%BAn"
					title="Cancun"
					text="Beach,Sun and Fun"
					Img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F13%2Fcancun-mexico-coastline-CANCUNNOW0720.jpg"
				/>
			</div>
		</div>
	);
}
