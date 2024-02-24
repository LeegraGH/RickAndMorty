import {Link} from "react-router-dom";


import './episodeItem.scss';

const EpisodeItem = ({data}) => {
    return (
        <Link to={`/episodes/${data.id}`}>
            <div className='item episodes__item'>
                <h3>{data.name}</h3>
                <div>Episode: {data.episode}</div>
                <div>Air Date: {data.air_date}</div>
            </div>
        </Link>
    )
}

export default EpisodeItem;