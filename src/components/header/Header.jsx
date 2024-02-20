import {Link} from 'react-router-dom';

import icon from '../../assets/images/icon.png';
import './header.scss';

const Header = () => {


    return (
        <header className='header'>
            <Link to='/' className='header__icon-link'><img src={icon} alt="icon" className='header__icon-img'/></Link>
            <div className="header__nav">
                <a href="#">Characters</a>
                <a href="#">Locations</a>
                <a href="#">Episods</a>
            </div>
        </header>
    )
}

export default Header;