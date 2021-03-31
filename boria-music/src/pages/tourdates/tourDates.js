import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { NavBar } from '../../components/navbar/navBar'
import { Contact } from '../../components/contact/contact'
import { Footer } from '../../components/footer/footer'

export const TourDates = () =>{
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

   return (
   
   <div id='container'>
      <header id='header'>
         <Contact />
      </header>
       <main className='main'>
         <h4>TOURDATES:</h4>
            {datesList.length === 0 ? <p>No Events Scheduled at this time Submit to our Mailing List to keep up to date with upcoming events.</p>
            : datesList.map(
               (item) => (
               <div key={item.id}>
                   {item.date}
                   {item.city}
                   {item.venue}
                   {item.time}
                   {item.tickets}
               </div>
            ))}
        </main>
        <aside id='aside'>
           <NavBar />
        </aside>
       <div id='section2'>

       </div>
       <footer id='footer'>
          <Footer />
       </footer>
      </div>
    );
 }

 