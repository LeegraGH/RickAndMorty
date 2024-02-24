import {useParams} from "react-router-dom";

import Base from "../components/base/Base";
import SingleCharacter from "../components/singleCharacter/SingleCharacter";

const SinglePage = ({Component}) => {

    const {id} = useParams();

    return (
        <Base>
            <Component id={id}/>
        </Base>
    )
}

export default SinglePage;