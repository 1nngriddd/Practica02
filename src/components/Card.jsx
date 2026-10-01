export function Card({peli}){
    return(
        <div className="Card">
            <h3>{peli.titol}</h3>
            <p>Any: {peli.any}</p>
            <p>Gènere: {peli.genere}</p>
            <p>Rating: {peli.rating}</p>
        </div>
    )
}

