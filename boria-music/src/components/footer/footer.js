import {IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { homeRoute } from '../../routes/routes'
import './footer.css'
export const Footer = () => {
    
    return (
        <div className='flex-footer'>
            <Link to={homeRoute}><IoIosArrowDown  className='icons'/></Link>
                </div>
    )
}