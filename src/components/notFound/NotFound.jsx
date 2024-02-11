import Lottie from "lottie-react";
import classNames from 'classnames';

import notFound from "../../assets/json/not-found.json";
import './notFound.scss';

const NotFound = ({styles, classList}) => {
    return (
        <div className={classNames('not-found', classList)} style={styles}>
            <Lottie animationData={notFound}/>
        </div>
    )
}

export default NotFound;