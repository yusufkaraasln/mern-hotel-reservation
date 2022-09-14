import React from "react";
import "./searchItem.scss";
function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/76566021.webp?k=9963cdd98906f06a2317e7cfdef9c8c350981f17f0d6e278e6317f54e0e24f88&o=&s=1"
        className="searchItemImg"
        alt=""
      />
      <div className="searchItemDesc">
        <h1 className="searchItemDescTitle">Tower Streets Apertmenat</h1>
        <span className="searchItemDescDistance">Merkeze 500m</span>
        <span className="searchItemDescTaxiOp">Ücretsiz Taksi</span>
        <span className="searchItemDescSubtitle">Klimali studio daire</span>

        <span className="searchItemDescFeatures">
          1 banyo * 1 yatak odası * 23 m2
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
                <button>9.2</button>
            </div>
            <div className="searchItemDetailsTexts">
                <span className="searchItemDetailsTextPrice">1.745₺</span>
                <span className="searchItemDetailsTextOp">Vergi ve Ücretler Dahil</span>
                <button className="searchItemDetailsTextButton">Yer Durumuna Bak</button>
            </div>

      </div>
    </div>
  );
}

export default SearchItem;
