import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";


function Home() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1622064440259-5b5bfc7efafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                title="Your Journey Predicts Your Destination"
                text="Choose The One You Love."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
            
        </>
    )
}

export default Home;