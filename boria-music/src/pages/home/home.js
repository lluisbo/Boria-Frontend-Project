import { useSpring, animated} from 'react-spring'
import { NavBar } from '../../components/navbar/navBar'
import { Contact} from '../../components/contact/contact'
import { Footer} from '../../components/footer/footer'
import { MediaSociaLinks} from '../../components/mediaSociaLinks/mediaSociaLinks'
import BORIA from '../../components/assets/BORIA.png'

import './home.css'

export const Home = () => {
    const fadeInGreetings = useSpring({config: { duration: 4000}, from: { opacity: 1 }, to: { opacity: 0 }})
    const fadeInHome = useSpring({config: { duration: 4000}, from: { opacity: 0 }, to: { opacity: 1 }, delay: 3700})
    const fadeInHeader = useSpring({config: { duration: 3000}, from: { opacity: 0 }, to: { opacity: 1 }, delay: 4500})
    const fadeInLinks = useSpring({config: { duration: 3000}, from: { opacity: 0 }, to: { opacity: 1 }, delay: 3500})
    
    return (
        <div id='container' >

            <animated.aside className=' aside ' style={fadeInHeader}>
                <NavBar />
                    </animated.aside> 

            <animated.header className=' header' style={fadeInHeader}>
                <Contact  />
                    </animated.header>
            <main className='main'>
                <div className= 'boria-logo'>             
                    <animated.img  className= 'boria'style={fadeInHome} src={BORIA}>
                        </animated.img>
                             </div>   
            </main>
            <div id='section2'>
            <animated.p  className='greetings' style={fadeInGreetings}>
                    WELCOME! TO THE OFFICAL WEBSITE.
                    </animated.p>
            <animated.div className='socialinks' style={fadeInLinks}>
                <MediaSociaLinks />
                </animated.div>         
                </div>
            <footer className='footer'>
                <Footer />
                </footer>
        </div>
    )
}