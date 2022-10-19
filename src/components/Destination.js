import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Travelling unleash your soul and mind, gives you unparallel exposure.</p>
            
            <DestinationData
                class="first-des"
                heading ="Neque porro, quisquam"
                text= "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                img1="https://images.unsplash.com/photo-1664374128459-f4592389a14b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                img2 ="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"

                
            />
            <br></br> 
            <br></br>
            <DestinationData 
                class="first-des-reverse"
                heading ="Slovenščina Español Svenska"
                text= "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard."
                img1="https://images.unsplash.com/photo-1542003488933-7cfa7453807a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                img2 ="https://images.unsplash.com/photo-1623612175509-30e97f5aa195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

                
            /> 
        </div>
    );
};

export default Destination;