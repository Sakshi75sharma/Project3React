import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippo</h1>
                    <p></p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-youtube-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Our Services</h4>
                    <a href="/">Tours</a>
                    <a href="/">Accommodation</a>
                    <a href="/">Conveyance</a>
                    <a href="/">Tour Guide</a> 
                </div>
                <div>
                    <h4>Resources</h4>
                    <a href="/">Schedule Details</a>
                    <a href="/">My Account</a>
                    <a href="/">Find a location</a>
                    <a href="/">Holiday Calender</a> 
                </div>
                <div>
                    <h4>Need Help?</h4>
                    <a href="/">Customer Srevices</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>About Us</h4>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Services</a>
                    <a href="/">News and Events</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;