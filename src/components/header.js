import Logo from "../img/logo.png";
import ShoppingCard from "../img/shopping-cart.png";
import Account from "../img/account.png";
import "./header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={Logo} className="logo" alt="logo" />
            </div>
            <div className="container-1">
                <span className="icon"><i className="Search"></i></span>
                <input  className="search" type="search" id="search" placeholder="O que está procurando?" />
            </div>
            <div className="account">
                <img src={Account} className="account" alt="account" />
                <span>Minha Conta</span>
            </div>
            <div className="container-2">
                <img src={ShoppingCard} className="shoppingCard" alt="shoppingCard" />
            </div>
        </header>
    )
}

export default Header;