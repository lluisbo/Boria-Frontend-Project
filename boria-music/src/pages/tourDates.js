import Axios from 'axios'
import React, {useEffect, useState} from 'react';



const TourDates = () =>{
   const [datesList, setTourDatesList] = useState([]);
   
   useEffect(() => {
      Axios({
         url: process.env.REACT_APP_BASE_URL
      }).then((response) => {
         setTourDatesList(response.data)
      }).catch((error) => {
         console.log(error)
      })
   }, [setTourDatesList])


   return(
      <div className='tour'>
      
       <div className='tourdates'>
         <h4>TOURDATES:</h4>
            {datesList.length === 0 ? <p>No Events Scheduled at this time Submit to our Mailing List to keep up to date with upcoming events.</p>
            : datesList.map(
               (item) => (
               <div  key={item.id}>
                
                    <p>{item.date}</p>
                    <p>{item.city}</p>
                    <p>{item.venue}</p>
                    <p>{item.time}</p>
                    
                     {item.tickets}
                   
                  
                  </div>

                ))}
            </div>
        
      </div>
    );
 }

 export default TourDates;