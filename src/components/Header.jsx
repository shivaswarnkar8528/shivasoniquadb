import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <ul className="navbar">
                <li><NavLink style={{color:"white",listStyle:"none",textDecoration:"none"}} to={'/'}>Movies Collection</NavLink></li>
                <li><NavLink  style={{color:"white",textDecoration:"none"}} to={'/moviesummary'}> Movie Summary</NavLink></li>
                <li><NavLink  style={{color:"white",textDecoration:"none"}} to={'/bookshow'}> Book Show</NavLink></li>

            </ul>
        </div>
    );
}
export default Header;