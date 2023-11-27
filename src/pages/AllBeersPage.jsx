
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AllBeersPage() {

    const [beerList, setBeerList] = useState (null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchBeer, setSearchBeer] = useState ("");



    const handleFind = (event)=>{

        event.preventDefault()
        setSearchBeer(event.target.value)
        console.log(event.target.value)


    }


    useEffect(() => {

        const endPoint = (searchBeer.length > 0 ) ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`:"https://ih-beers-api2.herokuapp.com/beers"

      axios
        .get(endPoint)
        .then((response) => {
          setBeerList(response.data);
        //   console.log(response.data)
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    if(isLoading){

        return (
      
          <div style={{paddingTop:"200px"}}>
      
          {/* <ScaleLoader color="fuchsia" size={20}/> */}
          <h3>loading...</h3>
      
          </div>
        )
      }

      if(beerList.length === 0){

return(

<div>

    <input type="text" placeholder="Encuentra la birra que más te gusta" onChange={handleFind} value={searchBeer}/>

    <h2> Sorry, we don't have the {searchBeer} you are looking for</h2>


</div>


)

      }

      return (

            <div>

            <input type="text" placeholder="Encuentra la birra que más te gusta" onChange={handleFind} value={searchBeer}/>
            <div className="beer-container">

                {beerList.map((eachBeer)=>{

                    return(

                        <Link to={`/beers/${eachBeer._id}`}>


                        <img src={eachBeer.image_url} alt={eachBeer.name} width={50}/>
                        <h2>{eachBeer.name}</h2>
                        <p>{eachBeer.tagline}</p>
                        <p><b>Contributed By: </b>{eachBeer.contributed_by}</p>

                        </Link>

                    )

                })}
                
                
                
            </div>    






                
            </div>








      )






}
























export default AllBeersPage;
