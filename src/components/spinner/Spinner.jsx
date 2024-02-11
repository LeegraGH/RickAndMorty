import Lottie from "lottie-react";
import classNames from 'classnames';

import loading from '../../assets/json/loading.json';

const Spinner = ({styles, classList}) => {
    return (
        <div className={classNames('spinner', classList)} style={styles}>
            <Lottie animationData={loading}/>
        </div>
    )
}

export default Spinner;