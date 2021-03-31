import { Link } from 'react-router-dom';
import { bioRoute, shopRoute, tourRoute, } from '../../routes/routes'
import { Button } from '../customButton/customButton'
import './navbar.css';

export const NavBar = () => {
   
    return (
        <div  className='navbar'>
            
            <div>
                <Link to={bioRoute}><Button buttonStyle='btn--vertical--outline'>Bio</Button></Link>
                    </div>
           
            <div className='link-nav-2 '>
                <Link to={tourRoute}><Button buttonStyle='btn--vertical--outline'>Tour</Button></Link>
                    </div>
        
            <div className='link-nav-3 '>
                <Link to={shopRoute}><Button buttonStyle='btn--vertical--outline'>Shop</Button></Link>
                    </div>
        </div>
    )
}