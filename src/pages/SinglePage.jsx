import {useParams} from "react-router-dom";

import Base from "../components/base/Base";
import SingleCharacter from "../components/singleCharacter/SingleCharacter";

const SinglePage = () => {

    const {id} = useParams();

    return (
        <Base>
            <SingleCharacter id={id}/>
        </Base>
    )
}

export default SinglePage;