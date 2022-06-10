export default function Character(props) {

    const {seleccion, setSeleccion} = props;

    const volver = () => {
        setSeleccion(null);
    }

    return(
        <div>
            <h1>Informacion de Personaje</h1>
            <div className="character-container">
                <div>
                    <img src={seleccion.image} alt = {seleccion.name}></img>
                </div>
                <div>
							<h3> {seleccion.name} </h3>
							<h6>
								{seleccion.status === "Alive" ? (
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
								<span> {seleccion.episode.length} </span>
							</p>
							<p>
								<span className="text-grey">Especie: </span>
								<span> {seleccion.species} </span>
							</p>
                            <p>
								<span className="text-grey">Género: </span>
								<span> {seleccion.gender} </span>
							</p>
                            <p>
								<span className="text-grey">Origen: </span>
								<span> {seleccion.origin.name} </span>
							</p>
                            <p>
								<span className="text-grey">Locación: </span>
								<span> {seleccion.location.name} </span>
							</p>
						</div>
            </div>
            
            <span className="back-home" onClick={volver}>Volver a Personajes</span>
        </div>
    )

}