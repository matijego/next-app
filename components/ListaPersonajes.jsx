import React from "react";

function ListaPersonajes() {
    let cantidad = 0;
    let contenido;
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
    persona.map((item, index) => (
            contenido += (<h4 className="mt-2 mb-4 text-secondary">${item.name}</h4>),
            cantidad++
            ))


    return(
        <>
        <div className="row container-fluid">
            <div className="text-center border">
                {contenido}
                {cantidad}
            </div>
        </div>
        </>
    );
}

export {ListaPersonajes};