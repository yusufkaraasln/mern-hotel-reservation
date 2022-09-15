import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.scss";
function SearchItem({item}) {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/76566021.webp?k=9963cdd98906f06a2317e7cfdef9c8c350981f17f0d6e278e6317f54e0e24f88&o=&s=1"
        className="searchItemImg"
        alt=""
      />
      <div className="searchItemDesc">
        <h1 className="searchItemDescTitle">{item.name}</h1>
        <span className="searchItemDescDistance">Merkeze {item.distance}m</span>
        <span className="searchItemDescTaxiOp">Ücretsiz Taksi</span>
        <span className="searchItemDescSubtitle">Klimali studio daire</span>

        <span className="searchItemDescFeatures">
          {item.desc}
        </span>
        <span className="searchItemDescCancelOp">Ücretsiz iptal</span>
        <span className="searchItemDescOpSubtitle">
          Sonra iptal edebilirsiniz, ve ödemeyi istediğiniz zaman
          yapabilirsiniz.
        </span>
      </div>
      <div className="searchItemDetails">

            <div className="searchItemDetailsRating">
                <span>Mükemmel</span>
                <button>{item.rating}</button>
            </div>
            <div className="searchItemDetailsTexts">
                <span className="searchItemDetailsTextPrice">{item.cheapestPrice}₺</span>
                <span className="searchItemDetailsTextOp">Vergi ve Ücretler Dahil</span>
                <Link to={`/hotels/${item._id}`}>
                <button className="searchItemDetailsTextButton">Yer Durumuna Bak</button>
                
                </Link>
            </div>

      </div>
    </div>
  );
}

export default SearchItem;
