import React, { useState } from 'react'
import { Card } from './cards/Card'
import './estyle.css'
import { useFetch } from './useFetch'

export const Poke = () => {

    const [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon')
    const estado = useFetch(url)
    const {cargando,data} = estado
    cargando ? console.log("Cargandi"): console.log(data.results);
    
    
    return (
        <div>
            <h1 className="text-center">Mundo pokemon</h1>
            <hr /><br />
              {
                  cargando?
                  <h1>Cargando...</h1>
                  :
                  <Card results={data.results} ></Card>
              }  

        </div>
    )
}
export default Poke;

