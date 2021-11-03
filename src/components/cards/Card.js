import React from 'react'
import { CardPokemon } from './CardPokemon'

export const Card = ({results}) => {

    return (
        <>  
                <div className="container">
                    <ul className="cards">
                        {
                            results.map(p =>
                                <li className="card-item" key={p.name}>
                                    <CardPokemon url={p.url}></CardPokemon>
                                </li>

                            )
                        }
                    </ul>
                </div>
        </>
    )
}
