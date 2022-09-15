import React from "react";
import useFetch from "../../hooks/useFetch";
import "./fprops.scss";
function FeaturesProps() {
  const { data, isPending, error } = useFetch("/hotels/?max=1000&min=300&limit=4");

  return (
    <div className="fp">
      {isPending ? (
        "Yükleniyor..."
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/177954582.webp?k=d67fb9245e8cf926fc217ffdfa86be220d76728e4c2f3e72b904639e705da70a&o=&s=1"
                alt=""
                className="fpItemImg"
              />
              <span className="fpItemName">{item.title}</span>
              <span className="fpItemCity">{item.city}</span>
              <span className="fpItemPrice">Başlangıç fiyatı - {item.cheapestPrice} ₺</span>
              <div className="fpItemRating">
                <button>{item.rating}</button>
                <span>Çok İyi</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturesProps;
