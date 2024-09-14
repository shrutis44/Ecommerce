import React from 'react'
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="footer container">
        <hr />
        <div className="content">
            <div className="footer-top">
                <div className="footer-compo-i">
                    <div className="logo" >
                        <img src="/logo.webp" alt="logo-img" className="logo-img" />

                    </div>
                    <p>Tower A88, Sector 44<br />Block-D, South City<br />Gurgaon,Haryana-209810</p>
                </div>
                <div className="footer-compo-iii">
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>STAY IN TOUCH</h4>
                    <div className="footer-social">
                        <Link to={"www.instagram.com"} target="blank">
                            <img src="/ig.png" alt="" className="social-img" />
                        </Link>
                        <Link to={"www.youtube.com"} target="blank">
                            <img src="/yt.png" alt="" className="social-img" />
                        </Link>
                        <Link to={"www.facebook.com"} target="blank">
                            <img src="/fb.png" alt="" className="social-img" />
                        </Link>
                        <Link to={"www.x.com"} target="blank">
                            <img src="/x.png" alt="" className="social-img" />
                        </Link>
                    </div>

                </div>
                <div className="footer-component">
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>CONTACT</h4>
                    <div>
                        <FaPhone style={{ paddingRight: "8px" }} />
                        <span>999-999-9999</span>
                    </div>
                    <div>
                        <MdEmail style={{ paddingRight: "8px" }} />
                        <span>zeelab@gmail.com</span>
                    </div>

                </div>


            </div>
            <div className="footer-bottom">
                <ul className="menu">
                    <li className="menu-item">
                        <Link>Privacy Policy</Link>
                    </li>
                    <li className="menu-item">
                        <Link>Terms & Conditions</Link>
                    </li>
                    <li className="menu-item">
                        <Link>Online Payment & Refund Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p>&copy; www.ryan.com | All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</>
                
  )
}

export default Footer;