import AvatarImg from '../../../assets/image/Oval.png'
import cardData from '../../../ulils/card-data';

const ProfilComp = () => {
  return <div className="pofilComp">
    <div className="profilComp__header">
      <div className="profil__avatar">
        <div className="avatar__img">
          <img src={AvatarImg} alt="avatar img" />
        </div>
        <h1 className="avatar__title">Dollie Blair</h1>
      </div>
      <button>Salom</button>
    </div>
    <div className="card__list">

      {
        cardData.map(item => ( 
          <div className="card__item" key={item.id}>
            <div className="card__img">
              <img src={item.image} alt={item.name} />
            </div>
            <h1 className="img__title">{item.title}</h1>
              <div className="card__info">
                <div className="card__date">
                  {item.view}k views. {item.date} days ago
                </div>
              </div>
          </div>
        ))
      }
    </div>
  </div>
}
export default ProfilComp;