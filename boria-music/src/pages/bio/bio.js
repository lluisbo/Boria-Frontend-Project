import { BsEnvelopeOpen } from 'react-icons/bs'
import './bio.css'

export const Bio = () => {

    return (
        <div className='grid-bio'>
            <div className='navbar2 '>
                <button className='vertical-button '>TOURDATES</button>
                  </div> 

            <div className='navbar3' >
                <button className='vertical-button'>SHOP</button>
                  </div> 
               
            <div className='bio-text'>
                <p className='p3'>"A singer/songwriter and guitarist born in Barcelona, BORIA makes a blending dark indie-folk with synthesizer and pedal effects right through his acoustic guitar painting melancholy portraits of life, death, and love."</p>
            </div>
            <div className='contact-icon'>
                <BsEnvelopeOpen />
            </div>
        </div>
    )
}