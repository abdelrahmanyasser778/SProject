import React from 'react'
import About from "../Components/About";
import ContactUs from "../Components/ContactUs";
import Details from "../Components/Details";
import HeaderComponent from "../Components/HeaderComponent";
import LearnMore from "../Components/LearnMore";

import axios from "axios";
import { useEffect } from 'react';



const AllPage = () => {

  
  return (
    <div>
       <HeaderComponent/>
       <About/>
       <LearnMore/>
       <ContactUs/>
       <Details/>
    </div>
  )
}

export default AllPage
