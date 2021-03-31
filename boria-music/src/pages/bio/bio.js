import { NavBar } from '../../components/navbar/navBar'
import { Contact } from '../../components/contact/contact'
//import { BioText } from '../../helpers/text'
import { Footer } from '../../components/footer/footer'
import './bio.css'
import {BioText} from '../../helpers/textBio';
import {BandText} from '../../helpers/textBand';
export const Bio = () => {
     

    return (
        <div  id='container'>
            <aside id='aside'>
                <NavBar  className=' div-navbar'/>   
                    </aside>
                   
            <header id='header'>
                <Contact className=' div-contact' />
                    </header>        
            
            <main id='main'>
                <div className='bio-text white'>
                <BioText />
                </div>
                <div  className='band-text white'>
                    <BandText />
                    </div>
                    </main>

            <div id='section2' >
                     
                             </div>        

            <footer id='footer'>
                <Footer />
                </footer>
        </div>
    )
}