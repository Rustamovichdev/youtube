import ProfilComp from "./companents/profil";
import Recommend from "./companents/recom";
import FoodDrink from "./companents/food";

const HomePage = () => {
    return <div className="home">
        <ProfilComp/>
        <Recommend/>
       <FoodDrink/>
    </div>
}

export default HomePage;