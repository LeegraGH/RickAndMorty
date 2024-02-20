import {Link} from "react-router-dom";

import {dryStatus} from "../../utils/dryStatus";

import './characterItem.scss';

const CharacterItem = ({data}) => {

    const {id, name, image, gender, status, species} = data;

    return (
        <Link to={`/characters/${id}`}>
            <div className='character-item'>
                <img className='character-item__image' src={image} alt={name}/>
                <div className='character-item__info'>
                    <h3 className='character-item__title'>{name}</h3>
                    <div className='character-item__status'>
                        {species},<span className='character-item__gender'> {gender.toLowerCase()}</span>
                    </div>
                    <div className='character-item__status' style={{color: dryStatus(status)}}>{status}</div>
                </div>
            </div>
        </Link>
    )
}

export default CharacterItem;