import "../header/Header.css"
function Header() {
    return (
        <>
            <div className="header">
                <h2>PeliNet.all</h2>
                
                <div>
                    <img src="../../../public/icons/lupa.svg" width={"30px"} height={"30px"} alt="Buscador de peliculas" />
                    <input type="text" placeholder="Busca tu Pélicula Favorita"/>
                </div>
            </div>
        </>
    )
}


export default Header;