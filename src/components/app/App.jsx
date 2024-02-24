import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "../header/Header";
import {HomePage, ListPage, SinglePage, Page404} from '../../pages';
import SingleCharacter from "../singleCharacter/SingleCharacter";
import SingleEpisode from "../singleEpisode/SingleEpisode";
import {fetchEpisodes, updateEpisodeName} from "../../redux/slices/episodesSlice";
import {fetchCharacters, updateCharacter} from "../../redux/slices/charactersSlice";
import CharacterItem from "../characterItem/CharacterItem";
import EpisodeItem from "../episodeItem/EpisodeItem";


const App = () => {

    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/characters' element={<ListPage key="characters" updateName={updateCharacter} category={'characters'} fetch={fetchCharacters} Component={CharacterItem}/>}/>
                    <Route path='/characters/:id' element={<SinglePage Component={SingleCharacter}/>}/>
                    <Route path='/episodes' element={<ListPage key="episodes" updateName={updateEpisodeName} category={'episodes'} fetch={fetchEpisodes} Component={EpisodeItem}/>}/>
                    <Route path='/episodes/:id' element={<SinglePage Component={SingleEpisode}/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;