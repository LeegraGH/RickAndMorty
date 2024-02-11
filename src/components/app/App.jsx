import '../characterList/CharacterList';
import CharacterList from "../characterList/CharacterList";
import CharacterSearch from "../characterSearch/CharacterSearch";
import CharacterFilter from "../characterFilter/CharacterFilter";

import bgImage from "../../assets/images/bg.png";
import './app.scss';
const App = () => {

    return (
        <div className="container">
            <div className='characters-layout'>
                <h1 className='characters-layout__title'>
                    The Rick And Morty Portal
                    <img className='characters-layout__bg-image' src={bgImage} alt="Rick and Morty"/>
                </h1>
                <div className='characters-layout__tabs'>
                    <CharacterSearch/>
                    <CharacterFilter/>
                </div>
                <CharacterList/>
            </div>
        </div>
    )
}

export default App;