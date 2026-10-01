import './Header.css'

export function Header({ onFilterAny, onFilterGenere, onFilterRating, onFilterAA }){
    return(
        <header className="Header">
            <span className="Logo">🎬</span>
            <h1>Pelis lEGALS sL</h1>
            {/* <div className="Filtres">
                <button className="ButtonAny" onClick={onFilterAny}>Pel·lícules d'aquest any</button>
                
                <select className="SelectGenere" onChange={(opcio) => onFilterGenere(opcio.target.value)}>
                <option value="Genere">Gènere</option>
                <option value="Terror">Terror</option>
                <option value="Romàntic">Romàntic</option>
                <option value="Acció">Acció</option>
                <option value="Drama">Drama</option>
                <option value="Comèdia">Comèdia</option>
                </select>

                <button className="ButtonAA" onClick={onFilterAA}>Pel·lícules amb dues A's</button>
                <button className="ButtonTop" onClick={onFilterTop}>Millors pel·lícules</button>
            </div> */}
        </header>
    )
}

//export default Header;
