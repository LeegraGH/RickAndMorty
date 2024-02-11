import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {updateCharacter} from "../../redux/slices/charactersSlice";

import './characterSearch.scss';

const CharacterSearch = () => {
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const search = setTimeout(() => {
            dispatch(updateCharacter(name));
        }, 300);

        return () => clearTimeout(search);
    }, [name]);

    return (
        <div className='character-search'>
            <h3 className='character-search__title'>Search: </h3>
            <input className='character-search__input'
                   type="text"
                   placeholder='Enter the character`s name'
                   value={name}
                   onChange={e => setName(e.target.value)}
            />
        </div>
    )
}

export default CharacterSearch;