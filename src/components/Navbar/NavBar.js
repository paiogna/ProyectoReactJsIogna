import CartIcon from "../CartIcon/CartIcon"
import {Link} from "react-router-dom"

export default function NavBar () {
    return (
        <header className="header">
            <div className="logo">
            <Link to="/" >
                <img src="/img/pet.png" />
            </Link>
            </div>
            <ul className="links">
                <li><Link to="/category/1" >Productos Royal Canin</Link></li>
                <li><Link to="/category/2" >Productos Eukanuba</Link></li>
                <li><CartIcon /></li>
            </ul>
            
        </header>
    );
}