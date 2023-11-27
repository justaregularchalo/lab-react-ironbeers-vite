
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function AddBeerPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [tagline, setTagLine] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")






    const handleNameChange = (event) => setName (event.target.value)
    const handleTagLineChange = (event) => setTagLine (event.target.value)
    const handleDescriptionChange = (event) => setDescription (event.target.value)
    const handleFirstBrewedChange = (event) => setFirstBrewed (event.target.value)
    const handleBrewersTipsChange = (event) => setBrewersTips (event.target.value)
    const handleAttenuationLevelChange = (event) => setAttenuationLevel (Number (event.target.value))
    const handleContributedByChange = (event) => setContributedBy (event.target.value)


    const handleSubmit = async (event) =>{

        event.preventDefault()

        const newBeer = {

            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by




        }


        try {

            const response = await axios.post ("https://ih-beers-api2.herokuapp.com/beers/new",newBeer)
            console.log(response)
            console.log(newBeer)
            navigate("/beers")
            



        }catch(error){
            console.log(error)

        }




    }








 return (

    <div className="AddBeerPage">
      <h3>Agrega una birra nueva!</h3>

    <form onSubmit={handleSubmit} action="">

    <label htmlFor="name">Name</label>
    <input 
    type="text"
    name= "name"
    id="name" 
    onChange={handleNameChange}
    value={name}/>



<label htmlFor="tagline">Tagline</label>
    <input 
    type="text"
    name= "tagline"
    id="tagline"
    onChange={handleTagLineChange}
    value={tagline} />




<label htmlFor="description">Description</label>
    <textarea 
    name= "description"
    id="description"
    onChange={handleDescriptionChange}
    value={description} />



<label htmlFor="first_brewed">First Brewed</label>
    <input
    type="text"
    name= "first_brewed"
    id="first_brewed"
    onChange={handleFirstBrewedChange}
    value={first_brewed} />


<label htmlFor="brewers_tips">Brewer's Tips</label>
    <input
    type="text"
    name= "brewers_tips"
    id="brewers_tips"
    onChange={handleBrewersTipsChange }
    value={brewers_tips} />



<label htmlFor="attenuation_level">Attenuation Level</label>
    <input
    type="text"
    name= "attenuation_level"
    id="attenuation_level"
    onChange={handleAttenuationLevelChange }
    value={attenuation_level} />




<label htmlFor="contributed_by">Contributed By</label>
    <input
    type="text"
    name= "contributed_by"
    id="contributed_by"
    onChange={handleContributedByChange}
    value={contributed_by} />







<button type="submit">Add Beer</button>



    












    </form>


    </div>



 )






}

export default AddBeerPage;
