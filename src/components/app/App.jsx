import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "../header/Header";
import {HomePage, SinglePage, Page404} from '../../pages';

const App = () => {

    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/characters/:id' element={<SinglePage/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;