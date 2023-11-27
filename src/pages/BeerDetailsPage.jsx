
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";





function BeerDetailsPage(props) {

    const [beerDetails, setBeerDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()
    console.log(props)


  useEffect (()=>{

    getBeer()

  }, [params.beerId])


    const getBeer = async()=>{

        try {

            let beerParam = props.random === "true" ? "random":params.beerId //
            const response = await axios.get (`https://ih-beers-api2.herokuapp.com/beers/${beerParam}`)
            setBeerDetails(response.data) 
            setIsLoading(false)
            



        }catch(error){

        console.log(error)

        }


    }

    if (isLoading) {
        return <h3>...lodeando</h3>;
      }


      return (

        <div>


                        <img src={beerDetails.image_url} alt={beerDetails.name} width={50}/>
                        <h2>{beerDetails.name}</h2>
                        <p>{beerDetails.tagline}</p>
                        <p>{beerDetails.first_brewed}</p>
                        <p>{beerDetails.attenuation_level}</p>
                        <p>{beerDetails.description}</p>
                        <p><b>Contributed By: </b>{beerDetails.contributed_by}</p>
                        






        </div>










      )








}

export default BeerDetailsPage;
