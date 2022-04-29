import CartIcon from "../CartIcon/CartIcon"

export default function NavBar () {
    return (
        <header className="header">
            <div className="logo">
                <img src="img/pet.png" />
            </div>
            <ul className="links">
                <li><a href="#">Productos Perros</a></li>
                <li><a href="#">Productos Gatos</a></li>
                <li><a href="#">Otras mascotas</a></li>
                <li><a href="#"><CartIcon /></a></li>
            </ul>
            
        </header>
    );
}