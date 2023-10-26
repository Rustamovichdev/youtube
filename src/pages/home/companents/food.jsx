import FoodIcon from '../../../assets/icons/FoodIcon.jsx'
import cardData from '../../../ulils/card-data';


const FoodDrink = () => {
    return <div className="food__drink">
        <div className="food__header">
            <div className="food__icon">
                <img src={FoodIcon} alt="Food Avatar" />
            </div>
            <h1 className="food__title">Food & Drink</h1>
            <p className="food__text">Recommended channel for you</p>
        </div>
        <div className="food__list">

        {
        cardData.map(item => ( 
          <div className="card__item" key={item.id}>
            <div className="card__img">
              <img src={item.image} alt={item.name} />
            </div>
            <h1 className="img__title">{item.title}</h1>
              <div className="card__info">
                <div className="card__date">
                  {item.view}k views. {item.date} days ago  Food & Drink
                </div>
              </div>
          </div>
        ))
      }

        </div>
    </div>
}

export default FoodDrink