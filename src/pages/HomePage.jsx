
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage"

function HomePage() {

    return (

        <div>


        <Link to={"/beers"}>
        
        <h2>All Beers</h2>
        
        
        
        </Link>



        
        <Link to={"/random-beer"}>
        
        <h2>Random Beer</h2>
        
        
        
        </Link>



          
        <Link to={"/new-beer"}>
        
        <h2>New Beer</h2>
        
        
        
        </Link>



        </div>






    )




}

export default HomePage;
