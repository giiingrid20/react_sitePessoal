import React from 'react';

function Footer() {
    return (
        <footer>
            <div id="contatos" className="elementosFooter">
                <div className="footerdiv1">
                    <h2>Social</h2>
                    <div class="iconefooter">
                        <i class="fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com/gimakesss/">@gimakesss</a>
                    </div>
                    <div className="iconefooter">
                        <i className="fa-brands fa-tiktok"></i>
                        <a href='https://www.tiktok.com/@gimakessx'>@gimakessx</a>
                    </div>
                </div>
                <div className="footerdiv2"> 
                    <h2>Contato</h2>
                    <h6>84 99660-9330</h6>
                    <h6>giovanyny123321@gmail.com</h6>
                </div>
            </div>
        </footer>   
    );
}

export default Footer;