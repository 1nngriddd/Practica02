import {Card} from './Card'

export function Llistes({titolSeccio, pelicules}){
    return(
        <section className="LlistaContenidor">
            <h2>{titolSeccio}</h2>

            <div className="GraellaCards">
                {pelicules.map(peli => (
                <Card key={peli.id} peli={peli}/>
                ))}
            </div>
        </section>


    )
}

