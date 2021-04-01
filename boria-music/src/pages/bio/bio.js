import { NavBar } from '../../components/navbar/navBar'
import { Contact } from '../../components/contact/contact'
import {BioText} from '../../helpers/textBio';
import { MediaSociaLinks} from '../../components/mediaSociaLinks/mediaSociaLinks'
import {BandText} from '../../helpers/textBand';
import { Footer } from '../../components/footer/footer'
import './bio.css'

export const Bio = () => {
     
    return (
        <div  id='container'>
                   
            <header id='header'>
                <Contact className='contact' />
                    </header>        
            
            <aside id='aside'>
                <NavBar  className='navbar'/>   
                    </aside>

            <main id='main'>
                <div className='bio-text white'>
                    <BioText />
                        </div>
                
                            </main>

            <div id='section2' >
                <div className='socialinks' >
                    <MediaSociaLinks />
                        </div>  
                <div  className='band-text white'>
                    <BandText />
                        </div>    
                             </div>        

            <footer id='footer'>
                <Footer />
                </footer>
        </div>
    )
}