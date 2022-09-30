import {useState, useEffect} from 'react';
import axios from 'axios';

function Characters({page = 1}) {
    const [characters, setCharacters] = useState([]);
    console.log(page);
    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async() => {
        const data = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setCharacters(characters = data.data.results);
    };

    return(
        <>
        <div className="row container-fluid">
        {
            characters.map((item, index) => (
                    <div className="col-lg-3 col-sm-6 p-4" key={index}>
                        <div className="text-center border rounded shadow">
                            <img src={item.image} className="img-fluid rounded-circle mt-4" alt={item.name} />
                            <h4 className="mt-2 mb-4 text-secondary">{item.name}</h4>
                        </div>
                    </div>
            ))
        }
        </div>
        </>
    );
}

export {Characters};