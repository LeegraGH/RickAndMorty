import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import './search.scss';

const Search = ({updateName, category}) => {
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const search = setTimeout(() => {
            dispatch(updateName(name));
        }, 300);

        return () => clearTimeout(search);
    }, [name]);

    return (
        <div className='search'>
            <input className='search__input'
                   type="text"
                   placeholder={`Enter the ${category}\`s name`}
                   value={name}
                   name='search'
                   onChange={e => setName(e.target.value)}
            />
        </div>
    )
}

export default Search;