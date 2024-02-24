import Base from "../components/base/Base";
import FiltersPanel from "../components/filtersPanel/FiltersPanel";
import ItemList from "../components/itemList/ItemList";

import '../styles/home.scss';

const ListPage = ({updateName, category, fetch, Component}) => {

    return (
        <Base>
            <FiltersPanel
                updateName={updateName}
                category={category}
            />
            <ItemList fetch={fetch} category={category} Component={Component}/>
        </Base>
    )
}

export default ListPage;