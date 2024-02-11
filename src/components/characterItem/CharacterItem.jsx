import './characterItem.scss';

const CharacterItem = ({name, image, gender, status}) => {

    const dryStatus = (status) => {
        switch (status) {
            case 'Alive':
                return "green";
            case 'Dead':
                return "red";
            case 'unknown':
                return 'yellow';
            default:
                return null;
        }
    }

    const colorStatus = dryStatus(status);

    return (
        <div className='character-item'>
            <img className='character-item__image' src={image} alt={name}/>
            <div className='character-item__info'>
                <h3 className='character-item__title'>{name}, <span className='character-item__gender'>{gender}</span>
                </h3>
                <div className='character-item__status' style={{color: colorStatus}}>{status}</div>
            </div>
        </div>
    )
}

export default CharacterItem;