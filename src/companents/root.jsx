import { Link, Route, Routes } from "react-router-dom"
import { menuData } from "../ulils/menu-data"
import SearchIcon from "../assets/icons/search"
import routeData from "../ulils/route-data"

const Root = () => {
    return <div className="root">
        <div className="root__bar">
            <div className="root__logo">
                logo
            </div>
            <ul className="root__list">
            {
                  menuData.map(item => (
                    <Link to={item.path} key={item.id} className="root__list_item">
                        <div className="root__list_icon">
                            {item.icon}
                        </div>
                        <p className="root__list_title">
                            {item.title}
                        </p>
                    </Link>
                  ))
                }
            </ul>
        </div>
        <div className="root__main">
            <div className="root__header">
                <div className="root__search">
                    <input type="text" placeholder="search"/>
                    <button><SearchIcon/></button>
                </div>
                <div className="root__profil">
                    profil
                </div>
            </div>
            <div className="root__page">
                {
                    routeData.map(item => (
                        <Routes key={item.id}>
                             <Route path={item.path} element={item.companent}/>
                        </Routes>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Root