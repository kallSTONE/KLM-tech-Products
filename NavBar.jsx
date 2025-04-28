import logo from "./Components/ProductImages/logo-removebg-preview.png"
import { Link } from "react-router-dom";

export default function Header() {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      window.onClick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }


    return (
        <header className="header">
            <div className="logoCont">            
                <a href="#"><img className="myLogo" src={logo} alt="klm logo"/></a>
            </div>

            <nav>
                <div className="navigate">
                    <ul>
                        <Link className="navLink" to="/"> HOME</Link>
                        <Link className="navLink" to="/CheckoutPage"> CHECKOUT</Link>
                        <li > <a href="#product-section">PRODUCTS</a> </li>
                        <li > <a href="#contact">CONTACT</a> </li>
                        <li > <a href="./careerPage.html">CAREER</a> </li>
                    </ul>

                    <div className="dropdown">
                        <button className="dropbtn" onClick={myFunction}> SERVICES
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content" id="myDropdown">
                            <div className="dropdownContentOver">
                                <a href="https://example.com/"rel="noreferrer" target = "_blank">Apple smart watch</a>
                                <a href="https://example.com/"rel="noreferrer" target = "_blank">I-phone 15</a>
                                <a href="https://example.com/"rel="noreferrer" target = "_blank">razer gaming headset</a>
                            </div>
                        </div>
                    </div> 
                    
                </div>                
            </nav> 

            <input className="searchFromHeader" type="search" placeholder="search products"></input>

        </header>
        
    )
  }
