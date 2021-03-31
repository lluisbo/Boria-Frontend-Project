import React from 'react'
import './modal.css'

export const Modal = ({onClose, children, linkToNewsLetter, linkToBooking, linkToPress }) => {
   
      return  (

    <div className='modal-grid'>
      
               <div className='div-bt-booking'>
                  <button className='p3 bt-modal'>
                  {linkToBooking} BOOKING
                  </button>
                  </div>

                  <div className='div-bt-news'>
                     <button className='p3 bt-modal'>
                  {linkToNewsLetter}NEWSLETTER
                  </button>
                  </div>

                  <div className='div-bt-press'>
                     <button className='p3 bt-modal'>
                  {linkToPress}PRESS
                  </button>
                  </div>
               
               <div className='div-children'>
                  {children}children
               </div>

               <div className='div-bt-close'>
                   <button className='p3 bt-modal'onClick={onClose}>CLOSE</button>
               </div>
           
    </div>
   )
};