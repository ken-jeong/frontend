// components/Menu.jsx
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/interest">Interest</Link></li>
                <li><Link to="/analysis">Ajax</Link></li>
                <li><Link to="/digital">Digital</Link></li>
                <li><Link to="/culture">Culture</Link></li>
            </ul>
        </nav>
    );
}
export default Menu;