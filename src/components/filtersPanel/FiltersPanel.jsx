import {useLocation} from "react-router-dom";

import Search from "../search/Search";
import CharacterFilter from "../characterFilter/CharacterFilter";

import './filtersPanel.scss';

const FiltersPanel = ({updateName, category}) => {

    return (
        <div className='filters__panel'>
            <Search updateName={updateName} category={category}/>
            <CharacterFilter/>
        </div>
    )
}

export default FiltersPanel;