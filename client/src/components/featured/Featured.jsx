import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.scss";
function Featured() {
  const { data, isPending, error } = useFetch(
    "/hotels/countByCity/?cities=istanbul,antep,sakarya"
  );
  console.log(isPending);
  return (
    <div className="featured">
      {isPending ? (
        "Lütfen Bekleyiniz..."
      ) : (
        <>
          <div className="featured-item">
            <img
              className="featured-item-img"
              src="https://t-cf.bstatic.com/xdata/images/city/360x240/613105.webp?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
              alt=""
            />
            <div className="featured-item-titles">
              <h1>İstanbul</h1>
              <h2>{data[0]} adet konaklama tipi</h2>
            </div>
          </div>
          <div className="featured-item">
            <img
              className="featured-item-img"
              src="https://t-cf.bstatic.com/xdata/images/city/360x240/613105.webp?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
              alt=""
            />
            <div className="featured-item-titles">
              <h1>Antep</h1>
              <h2>{data[1]} adet konaklama tipi</h2>
            </div>
          </div>
          <div className="featured-item">
            <img
              className="featured-item-img"
              src="https://t-cf.bstatic.com/xdata/images/city/360x240/613105.webp?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
              alt=""
            />
            <div className="featured-item-titles">
              <h1>Sakarya</h1>
              <h2>{data[2]} adet konaklama tipi</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
