import { useSpring, animated} from 'react-spring'
import './home.css'
import { Footer } from '../../components/footer/footer'
import { NavBar } from '../../components/navbar/navBar'
import {IoIosArrowDown } from 'react-icons/io'
export const Home = () => {
    
    const fadeInSubtitle = useSpring({config: { duration: 4000}, from: { opacity: 1 }, to: { opacity: 0 }})
    const fadeInHome = useSpring({config: { duration: 4000}, from: { opacity: 0 }, to: { opacity: 1 }, delay: 2500})
    const fadeInLinks = useSpring({config: { duration: 3000}, from: { opacity: 0 }, to: { opacity: 1 }, delay: 3500})
    
    return (
        <div className='grid-home'>
            <animated.div  style={fadeInLinks} className='navbar p2'>
                <NavBar   />
            </animated.div>
            <div className='boria'>
                <animated.h2 style={fadeInHome} >BORIA</animated.h2>
            </div>

            <div className=' boria subtitle'>
                <animated.p className='p2' style={fadeInSubtitle}>WELCOME! TO THE OFFICAL WEBSITE.</animated.p>
            </div>

            <animated.div  style={fadeInLinks} className='social-links'>
                <Footer  ></Footer>
            </animated.div>
            <div className='go-to-album'>
                <IoIosArrowDown className='arrow-down'></IoIosArrowDown>
            </div>
        </div>
    )
}