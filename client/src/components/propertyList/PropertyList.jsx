import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.scss";
function PropertyList() {
  const { data, isPending, error } = useFetch("/hotels/countByType");
  console.log(data);
  const images = [
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/330614265.jpg?k=268bdf9f9fb7a3d0ef2f61d63285d184afcae93db5573d406ae446ec34200ff7&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/290857821.jpg?k=157b4145f167a21dfd32b46c82c24f7950bc8cefc5316f35bcfe1f05886e76c5&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/330616594.jpg?k=7ed9277605ec9c47ecaab1311bda6a6057257ce2a1b29dc6b6e0966f9977cef6&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/290857535.jpg?k=468e0ca186781dd4feec15c22c12b773ff50da4c358e74724543aaa40aa01749&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277881958.jpg?k=99da2c3c0c22606266bd618ef05168d45f25d81b0d8813e355630992dd9e61b3&o=&hp=1",
  ];
  return (
    <div className="pList">
      {isPending ? (
        "Yükleniyor..."
      ) : (
        <>
          {data &&
            images.map((image, i) => (
              <div className="pListItem" key={i}>
                <img src={image} alt="" className="pListItemImg" />
                <div className="pListTitles">
                  <h1 style={{
                    textTransform: "capitalize",
                  }}>{data[i]?.name}</h1>
                  <h2>
                    {data[i]?.value} {data[i]?.name}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
