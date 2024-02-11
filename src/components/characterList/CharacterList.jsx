import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import CharacterItem from "../characterItem/CharacterItem";
import Spinner from "../spinner/Spinner";
import NotFound from "../notFound/NotFound";
import {fetchCharacters} from "../../redux/slices/charactersSlice";

import './characterList.scss';

const CharacterList = () => {
    const [page, setPage] = useState(1);
    const [chars, setChars] = useState([]);

    const dispatch = useDispatch();
    const {data, loading, filters} = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters(1));
    }, [])

    useEffect(() => {
        if (loading === "success") {
            setChars(chars => [...chars, ...data.results]);
        }
    }, [loading]);

    useEffect(() => {
        if (data) {
            setPage(1);
            dispatch(fetchCharacters(1));
            setChars([]);
        }
    }, [filters]);

    const formatCharacters = (chars) => {
        return chars.map(({id, name, image, gender, status}) => <CharacterItem key={id}
                                                                               name={name}
                                                                               image={image}
                                                                               status={status}
                                                                               gender={gender}/>)
    }

    const incrementPage = () => {
        const nextPage = page + 1;
        dispatch(fetchCharacters(nextPage));
        setPage(nextPage);
    }

    const onLoadChars = (chars) => {
        if (loading === "loading" && !chars.length) {
            return <Spinner styles={{width: "150px"}} classList={'center-col'}/>;
        } else if (loading === "error") {
            return <NotFound styles={{width: "500px"}} classList={'center-col'}/>;
        }

        const characters = formatCharacters(chars);

        return (
            <>
                {characters}
                {loading === "loading"
                    ? <Spinner styles={{width: "100px"}} classList={'center-col'}/>
                    : data?.info?.next !== null
                    && <button
                        onClick={incrementPage}
                        className='characters-grid__btn btn center-col'
                        type='button'>
                        More characters
                    </button>
                }
            </>
        )
    }

    const content = onLoadChars(chars);

    return (
        <>
            <div className='characters-grid'>
                {content}
            </div>
        </>
    )
}

export default CharacterList;