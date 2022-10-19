import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Service() {
    return(<>
        <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="Our Services"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;