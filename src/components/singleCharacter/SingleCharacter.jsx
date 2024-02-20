import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import {dryStatus} from "../../utils/dryStatus";
import Spinner from "../spinner/Spinner";
import NotFound from "../notFound/NotFound";
import {fetchCharacter, clearCharacter} from "../../redux/slices/characterSlice";

import './singleCharacter.scss';

const SingleCharacter = ({id}) => {

    const dispatch = useDispatch();
    const {data, loading} = useSelector(state => state.character);

    useEffect(() => {
        dispatch(fetchCharacter(id));

        return () => dispatch(clearCharacter());
    }, []);

    const onLoadChar = (char) => {
        if (loading === "loading" || loading === "idle") {
            return <Spinner styles={{width: "250px"}} classList={'center-col'}/>;
        } else if (loading === "error") {
            return <NotFound classList={'center-col'}/>;
        }

        console.log(char.episode)

        return (
            <>
                <img className='character-layout__img' src={char.image} alt={char.name}/>
                <div className='character-layout__information'>
                    <h1 className='character-information__title'>
                        {char.name}
                        <div className='character-information__status'
                             style={{color: dryStatus(char.status)}}>{char.status}</div>
                    </h1>
                    <div className='character-information__descr'>
                        <div>Species: {char.species}</div>
                        {char.type ? <div>Type: {char.type}</div> : null}
                        <div>Gender: {char.gender}</div>
                        <div>The origin location: <Link to='/'>{char.origin.name}</Link></div>
                        <div>The last known location endpoint: <Link to='/'>{char.location.name}</Link></div>
                    </div>
                </div>
                <div className='character-layout__episodes'>
                    <h2>List of episodes in which this character appeared:</h2>
                    <div className='character-episodes__list'>
                        {/*{char.episode}*/}
                    </div>
                </div>
            </>
        )

    }

    const content = onLoadChar(data);

    return (
        <div className='character-layout'>
            {content}
        </div>
    )
}

export default SingleCharacter;