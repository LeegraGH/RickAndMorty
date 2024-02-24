import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Spinner from "../spinner/Spinner";
import NotFound from "../notFound/NotFound";

import './itemList.scss';

const ItemList = ({fetch, category, Component}) => {

    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);

    const dispatch = useDispatch();
    const {data, loading, filters} = useSelector(state => state[category]);

    useEffect(() => {
        dispatch(fetch(1));
    }, [])

    useEffect(() => {
        if (loading === "success") {
            setItems(items => [...items, ...data.results]);
        }
    }, [loading]);

    useEffect(() => {
        if (data) {
            setPage(1);
            dispatch(fetch(1));
            setItems([]);
        }
    }, [filters]);

    const incrementPage = () => {
        const nextPage = page + 1;
        dispatch(fetch(nextPage));
        setPage(nextPage);
    }

    const onLoadItems = (items) => {
        if (loading === "loading" && !items.length) {
            return <Spinner styles={{width: "150px"}} classList={'center-col'}/>;
        } else if (loading === "error") {
            return <NotFound classList={'center-col'}/>;
        }

        const listItems = items.map((item) => <Component key={item.id} data={item}/>);

        return (
            <>
                {listItems}
                {loading === "loading"
                    ? <Spinner styles={{width: "100px"}} classList={'center-col'}/>
                    : data?.info?.next !== null
                    && <button
                        onClick={incrementPage}
                        className='items-layout__btn btn center-col'
                        type='button'>
                        More
                    </button>
                }
            </>
        )
    }

    const content = onLoadItems(items);

    return (
        <>
            <div className='items-layout'>
                {content}
            </div>
        </>
    )
}

export default ItemList;