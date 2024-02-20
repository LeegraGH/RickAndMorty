import Base from "../components/base/Base";
import CharacterSearch from "../components/characterSearch/CharacterSearch";
import CharacterFilter from "../components/characterFilter/CharacterFilter";
import CharacterList from "../components/characterList/CharacterList";


import bgImage from "../assets/images/bg.png";
import '../styles/home.scss';

const HomePage = () => {
    return (
        <Base>
            <div className='characters-content'>
                <h1 className='characters-content__title'>
                    The Rick And Morty Portal
                    <img className='characters-content__bg-image' src={bgImage} alt="Rick and Morty"/>
                </h1>
                <div className='characters-content__tabs'>
                    <CharacterSearch/>
                    <CharacterFilter/>
                </div>
                <CharacterList/>
            </div>
        </Base>
    )
}

export default HomePage;