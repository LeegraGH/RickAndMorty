import {Link, NavLink} from 'react-router-dom';

import icon from '../../assets/images/icon.png';
import './header.scss';

const Header = () => {


    return (
        <header className='header'>
            <Link to='/' className='header__icon-link'><img src={icon} alt="icon" className='header__icon-img'/></Link>
            <div className="header__nav">
                <NavLink
                    to='/characters'
                    className={({isActive}) => `header__link ${isActive ? 'header__link_active' : null}`}
                >
                    characters
                </NavLink>
                <NavLink
                    to='/episodes'
                    className={({isActive}) => `header__link ${isActive ? 'header__link_active' : null}`}
                >
                    episodes
                </NavLink>
                <NavLink
                    to='/locations'
                    className={({isActive}) => `header__link ${isActive ? 'header__link_active' : null}`}
                >
                    locations
                </NavLink>
            </div>
        </header>
    )
}

export default Header;