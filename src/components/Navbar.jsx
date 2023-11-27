import { NavLink } from "react-router-dom"




function Navbar() {


    const checkActiveUrl = (navInfo) =>{

console.log(navInfo)
// retornar el valor del className

if(navInfo.isActive === true){

  return"link-active"
}else{
  return"link-inactive"
}


}
    return (

        <header>
        
        


  
    
        <nav>


        <NavLink to={"/"} className={checkActiveUrl }>Home </NavLink>
    
        <NavLink to={"/beers"} className={checkActiveUrl } >All Beers </NavLink>

        <NavLink to={"/random-beer"} className={checkActiveUrl } >Random Beer </NavLink>

        <NavLink to={"/new-beer"} className={checkActiveUrl } >New Beer </NavLink>


    </nav>



  
        
        

     </header>   
        



    )




}

export default Navbar;
