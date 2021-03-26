import { NavBar} from '../../components/navbar/navBar'
import lluis from '../../components/assets/lluis1.jpeg'
import './bio.css'
export const Bio = () => {

    return (
        <div className='grid-bio'>
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='bio-text'>
                <p className='p3'>A singer/songwriter and guitarist born in Barcelona, BORIA makes a blending dark indie-folk with synthesizer and pedal effects right through his acoustic guitar painting melancholy portraits of life, death, and love.</p>
            </div>
            <div className='image'>
                <img src={lluis} className='filtered' alt='lluis'></img>
            </div>
        </div>
    )
}