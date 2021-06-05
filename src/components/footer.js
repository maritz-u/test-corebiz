
import React from 'react';
import Mail from '../img/mail.png';
import Heatset from '../img/heatset.png';
import LogoAlt from '../img/logo_alt.png';
import Vtex from '../img/vtex.png';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="footerAddres">
                <p>Localizacao</p>
                <hr></hr>
                <p>Avenida Andromeda, 2000. Bloco 6 e 8.<br/> Alphavile SP <br/> brasil@corebiz.ag <br/> +55 11 3090 1039</p>
            </div>

            <div className="Footer">
                <button>
                    <img src={Mail} alt="mail"></img> ENTRE EN CONTACTO
                </button>
                <button>
                    <img src={Heatset} alt="heatset"></img> FALE CON O NOSSO CONSULTOR ONLINE
                </button>
            </div>

            <div className="Copyright">
                <div>
                    <span>Created by</span>
                    <img src={LogoAlt} alt="corebiz"></img>
                </div>
                <div>
                    <span>Powered by</span>
                    <img src={Vtex} alt="vtex"></img>
                </div>
            </div>
        </footer>
    )
}

export default Footer;