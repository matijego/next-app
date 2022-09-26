import { ContainerDashboard } from "../../components/ContainerDashboard";
import { ListaPersonajes } from "../../components/ListaPersonajes";
import React from "react";
import { MenuTwo } from "../../components/Menu2";
function Index(){
    const [persona, setPersona] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async() => {
        
        const data = await fetch('https://rickandmortyapi.com/api/character/7,8,9,10,11,12');
        const persona = await data.json()
        //Se debe colocar .body porque la funcion map solo toma arrays
        setPersona(persona);
        
    };

    return (
    <>
    <ContainerDashboard>
        <MenuTwo />
        <ListaPersonajes />
        <div className="row">
        {
            persona.map((item, index) => (
                    <div className="col-lg-4 col-sm-6 text-center" key={index}>
                        <img src={item.image} className="img-fluid" alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
            ))
        }
        </div>

    </ContainerDashboard>
    </>
    );
}

export default Index;