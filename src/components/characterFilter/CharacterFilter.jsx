import {useDispatch, useSelector} from "react-redux";

import {updateCharacterStatus, updateCharacterGender, clearFilters} from '../../redux/slices/charactersSlice';

import './characterFilter.scss';

const CharacterFilter = () => {

    const {status, gender} = useSelector(state => state.characters.filters)
    const dispatch = useDispatch();

    const selectFilter = (filter, type) => {
        switch (type) {
            case 'status':
                dispatch(updateCharacterStatus(filter));
                break;
            case 'gender':
                dispatch(updateCharacterGender(filter));
                break;
            default:
                break;
        }
    }

    const resetFilters = () => {
        dispatch(clearFilters());
    }

    return (
        <div className='character-filter'>
            <select
                className='character-filter__select select'
                name="status"
                value={status}
                onChange={e => selectFilter(e.target.value, e.target.name)}>
                <option value="" disabled>Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>
            <select
                className='character-filter__select select'
                name="gender"
                value={gender}
                onChange={e => selectFilter(e.target.value, e.target.name)}>
                <option value="" disabled>Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <button className='character-filter__btn btn'
                    type='button'
                    onClick={resetFilters}
                    disabled={!(status || gender)}
            >
                Reset
            </button>
        </div>
    )
}

export default CharacterFilter;