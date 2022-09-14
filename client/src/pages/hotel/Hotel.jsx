import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import "./hotel.scss";
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

  }

  return (
    <div>
      {
       !showModal &&  <>
          <Navbar />
          <Header type="list" />
        </>
      }
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
            class="fa-solid fa-angle-left" onClick={()=>handleChange("left")}></i>

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
            
            class="fa-solid fa-angle-right" onClick={()=>handleChange("right")}></i>
          </div>
        )}

        <div className="hotelContainerWrapper">
          <button className="hotelContainerWrapperButton">
            Rezervasyon yap veya şimdi kirala
          </button>
          <h1 className="hotelContainerWrapperTitle">Ramada by Wyndham</h1>
          <div className="hotelContainerWrapperAddress">
            <i class="fa-solid fa-location-dot"></i>
            <span>Mecidiyeköy, Ulubatlı Sk.</span>
          </div>
          <span className="hotelContainerWrapperDistance">
            Mükammel konum - 0,1 km
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
                Mecidiyeköyün kalbinde yaşam
              </h1>
              <p className="hotelContainerWrapperDetailsTextsDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores accusantium placeat saepe vero amet, autem in.
                Laborum voluptatibus porro ea autem animi dolores similique eos
                veritatis impedit, saepe tenetur iusto, ratione error est magni
                officia hic! Magni eligendi necessitatibus pariatur rerum
                doloremque. Vitae perferendis non eos, quasi laborum esse ad?
              </p>
            </div>

            <div className="hotelContainerWrapperDetailsPricing">
              <h1>9 gece için mükemmel fiyat</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, temporibus?
              </span>
              <h2>
                <b>40.234₺</b> (9 gece)
              </h2>
              <button>Rezervasyon yap veya şimdi Kirala !</button>
            </div>
          </div>
        </div>
        {
          !showModal && <>
          <MailList />
        <Footer /></>
        }
      </div>
    </div>
  );
}

export default Hotel;
