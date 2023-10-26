import recommendedData from "../../../ulils/recommended-data";

const Recommend = () => {
  return <div className="recommend">
    <div className="recommend__header">
    <h1>Recommended</h1>
    </div>
    <div className="recommended__list">

     {
      recommendedData.map(item => (
        <div className="recommended__item">
        <div className="recommended__img">
              <img src={item.image} alt={item.name} />
            </div>
            <h1 className="img__text">{item.title}</h1>
              <div className="recommended__info">
                <div className="recommended__date">
                  {item.view}k views. {item.date} months ago
                </div>
              </div>
       </div>
      ))
     }

    </div>
  </div>
}
export default Recommend;