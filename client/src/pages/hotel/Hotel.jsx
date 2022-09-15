import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import "./hotel.scss";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Reserve from "../../components/reserve/Reserve";
function Hotel() {
  const images = [
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/330614265.jpg?k=268bdf9f9fb7a3d0ef2f61d63285d184afcae93db5573d406ae446ec34200ff7&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/290857821.jpg?k=157b4145f167a21dfd32b46c82c24f7950bc8cefc5316f35bcfe1f05886e76c5&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/330616594.jpg?k=7ed9277605ec9c47ecaab1311bda6a6057257ce2a1b29dc6b6e0966f9977cef6&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/290857535.jpg?k=468e0ca186781dd4feec15c22c12b773ff50da4c358e74724543aaa40aa01749&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277881958.jpg?k=99da2c3c0c22606266bd618ef05168d45f25d81b0d8813e355630992dd9e61b3&o=&hp=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/177954582.jpg?k=ff6f19fa263f9b3afac23df3338d5858bc21639cbcc510c57223c1ae8a3ecd2d&o=&hp=1",
  ];

  const [currentImage, setCurrentImage] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = (i) => {
    setShowModal(true);
    setCurrentImage(i);
  };

  const location = useLocation().pathname.split("/")[2];
  console.log(location);

  const { data } = useFetch("/hotels/find/" + location);

  const handleChange = (route) => {
    if (route === "left") {
      if (currentImage === 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    } else {
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }
  };

  const search = useSelector((state) => state.search);
  console.log(search);

  const milliseconds = 1000 * 60 * 60 * 24;
  const dateCalculator = (date1, date2) => {
    const timediff = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(timediff / milliseconds);
    return diffDays;
  };

  const days = dateCalculator(search.date[0].startDate, search.date[0].endDate);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const handleClick = () => {
    if (user !== null) {
      setOpenModal(true);

    
    
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {!showModal && (
        <>
          <Navbar />
          <Header type="list" />
        </>
      )}
      <div className="hotelContainer">
        {showModal && (
          <div className="slider">
            <i
              class="fa-solid fa-xmark"
              style={{
                position: "absolute",
                top: "20px",
                right: "30px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(false)}
            ></i>
            <i
              style={{
                position: "absolute",
                left: "30px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              class="fa-solid fa-angle-left"
              onClick={() => handleChange("left")}
            ></i>

            <div className="sliderWrapper">
              <img src={images[currentImage]} alt="" />
            </div>

            <i
              style={{
                position: "absolute",
                right: "30px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              class="fa-solid fa-angle-right"
              onClick={() => handleChange("right")}
            ></i>
          </div>
        )}

        <div className="hotelContainerWrapper">
          <button onClick={handleClick} className="hotelContainerWrapperButton">
            Rezervasyon yap veya şimdi kirala
          </button>
          <h1 className="hotelContainerWrapperTitle">{data.name}</h1>
          <div className="hotelContainerWrapperAddress">
            <i class="fa-solid fa-location-dot"></i>
            <span>{data.address}</span>
          </div>
          <span className="hotelContainerWrapperDistance">
            Mükammel konum - {data.distance} km
          </span>
          <span className="hotelContainerWrapperPrice">
            Eksta 183 ₺ ödeyin, taksi sizi havaalanından ücretsiz olarak alsın.
          </span>
          <div className="hotelContainerWrapperImages">
            {images.map((item, i) => (
              <div className="ImageWrapper">
                <img
                  onClick={() => handleOpenModal(i)}
                  src={item}
                  className="ImageWrapperHotel"
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="hotelContainerWrapperDetails">
            <div className="hotelContainerWrapperDetailsTexts">
              <h1 className="hotelContainerWrapperDetailsTextsTitle">
                {data.title}
              </h1>
              <p className="hotelContainerWrapperDetailsTextsDesc">
                {data.desc}
              </p>
            </div>

            <div className="hotelContainerWrapperDetailsPricing">
              <h1>{days} gece için mükemmel fiyat</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, temporibus?
              </span>
              <h2>
                <b>{data.cheapestPrice * days * search.options.room}₺</b> (
                {days} gece)
              </h2>
              <button>Rezervasyon yap veya şimdi Kirala !</button>
            </div>
          </div>
        </div>
        {!showModal && (
          <>
            <MailList />
            <Footer />
          </>
        )}
      </div>
          {
            openModal && <Reserve setOpen={setOpenModal}
              hotelID={location}
            />
          }

    </div>
  );
}

export default Hotel;
