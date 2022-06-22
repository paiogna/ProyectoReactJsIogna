import CartIcon from "../CartIcon/CartIcon"
import {Link} from "react-router-dom"

export default function NavBar () {
    return (
        <header className="header font">
            <div className="logo">
            <Link to="/" >
                <img src="/img/pet.png" />
            </Link>
            </div>
            <ul className="links">
                <li className="links1"><Link to="/category/1" >Productos Royal Canin</Link></li>
                <li className="links1" ><Link to="/category/2" >Productos Eukanuba</Link></li>
                <li><CartIcon /></li>
            </ul>
            
        </header>
    );
}