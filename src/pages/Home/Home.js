import React from "react";
import Banner from "../../components/Shared/Banner/Banner";
import Contacts from "../Contact/Contacts";
import Services from "../Services/Services";

const Home=()=>{
    return(
   <div>
      <Banner></Banner>
      <Services></Services>
      <Contacts></Contacts>
   </div>
    )
}

export default Home;