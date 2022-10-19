import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
    return(<>
        <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1528044166082-4159f1209b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                title="About Us"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
    </>
    )
}

export default About;