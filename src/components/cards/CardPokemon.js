import React from 'react'
import { useFetch } from '../useFetch'

export const CardPokemon = ({url}) => {
    const estado = useFetch(url)
    const {cargando,data} = estado
    
    return (
        <>
            {
                cargando ? <h2>Cargando...</h2>
                :

                <div className="card" style={{width:'14rem'}}>
                        <div className="card-header">
                            <h5 className="card-title"> {data.id} </h5>
                        </div>
                        <div className="card-body">
                            <img src={data.sprites.front_default} alt="pokemon" />

                        </div>
                        <div className="card-footer">
                            <p className="card-text text-capitalize">

                                {data.forms[0].name}
                            </p>

                        </div>

                </div>
            }
        </>
    )
}
