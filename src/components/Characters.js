import { useState } from "react";
import Character from "./Character";

export default function Characters(props) {

	const {characters, setCharacters} = props;
	const [ seleccion, setSeleccion ] = useState(null);

	const volver = () => {
		setCharacters(null);
	}

	const seleccionar = (select) => {
		setSeleccion (select);
	}

	return(

		seleccion === null ? (
			<div className="characters">
			<h1>Personajes</h1>
			<span className="back-home" onClick={volver}>Volver a la home</span>
			<div className="container-characters">
				{characters.map((character, index) => (
					<div className="character-container" key={index} onClick={() => seleccionar(character)}>
						<div>
							<img src={character.image} alt={character.name} />
						</div>
						<div>
							<h3> {character.name} </h3>
							<h6>
								{character.status === "Alive" ? (
									<>
										<span className="alive"></span>
										Alive
									</>
								) : (
									<>
										<span className="dead"></span>
										Dead
									</>
								)}
							</h6>
							<p>
								<span className="text-grey">Episodios: </span>
								<span> {character.episode.length} </span>
							</p>
							<p>
								<span className="text-grey">Especie: </span>
								<span> {character.species} </span>
							</p>
						</div>
					</div>
				) )}
			</div>
			<span className="back-home" onClick={volver}>Volver a la home</span>
		</div>
		) : (
			<Character seleccion = {seleccion} setSeleccion = {setSeleccion}></Character>
		)	
		)

		
}
