import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="form-container">
            <form>
                <h1>We Would Love To Hear From You!</h1>
                <div className="person">
                    <input className="first" placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                </div>
                
                <input placeholder="Email-Id"></input>
                <input placeholder="Subject"></input>
                <textarea placeholder="Your Message" rows={"4"}></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;