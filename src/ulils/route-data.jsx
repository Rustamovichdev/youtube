import HomePage from "../pages/home";
import TrendPage from "../pages/trend";
import GussiePage from "../pages/Gussie";
import NoraPage from "../pages/Nora";
import BellePage from "../pages/Belle";

const routeData = [
    {
        id:1,
        path:"/",
        companent:<HomePage/>
    },
    {
        id:2,
        path:"/trend",
        companent:<TrendPage/>
    },
    {
        id:2,
        path:"/gussie",
        companent:<GussiePage/>
    },
    {
        id:2,
        path:"/nora",
        companent:<NoraPage/>
    },
    {
        id:2,
        path:"/belle",
        companent:<BellePage/>
    },
]

export default routeData;