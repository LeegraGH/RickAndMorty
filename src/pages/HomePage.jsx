import Base from "../components/base/Base";

import bgImage from "../assets/images/bg.png";
import '../styles/home.scss';

const HomePage = () => {

    return (
        <Base>
            <div className='content'>
                <h1 className='content__title'>
                    The Rick And Morty Portal
                    <img className='content__bg-image' src={bgImage} alt="Rick and Morty"/>
                </h1>
            </div>
        </Base>
    )
}

export default HomePage;