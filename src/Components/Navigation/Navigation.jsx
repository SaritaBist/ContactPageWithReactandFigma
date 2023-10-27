import logo from "/Images/logo.png";
import  styles from "./Navigation.module.css"
import {BiMessageDetail} from "react-icons/bi"
function Navigation()
{
    return(
        <nav className={`${styles.Navigation} container `}>
            <div>
                <img src={logo} alt="..."/>
            </div>
          
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}
export default Navigation;