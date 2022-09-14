import React from "react";
import "./header.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
function Header({ type }) {
  const [open, setOpen] = React.useState(false);
  const [destination, setDestination] = React.useState("");
  const navigate = useNavigate();

  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = React.useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleClick = (model, type) => {
    setOptions((prev) => {
      return {
        ...prev,
        [model]: type === "inc" ? options[model] + 1 : options[model] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className="headercontainer"
        style={{
          margin: type === "list" ? "20px 0 0 0" : "20px 0 100px 0",
        }}
      >
        <div className="headerlist">
          <div className="headerlistitem active">
            <i class="fa-solid fa-bed"></i>
            <span>Konaklama</span>
          </div>
          <div className="headerlistitem">
            <i class="fa-solid fa-plane"></i>
            <span>Uçak Biletleri</span>
          </div>
          <div className="headerlistitem">
            <i class="fa-solid fa-car"></i>
            <span>Araba Kiralama</span>
          </div>
          <div className="headerlistitem">
            <i class="fa-solid fa-bed"></i>
            <span>Turistik Noktalar</span>
          </div>
          <div className="headerlistitem">
            <i class="fa-solid fa-taxi"></i>
            <span>Havaalanı Taksileri</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headertitle">Sıradaki konaklamanızı bulun</h1>
            <p className="headerdesc">
              Oteller, evler ve çok daha fazlasındaki fırsatları arayın...
            </p>
            <button className="headerbutton">Giriş Yap / Kayıt Ol</button>

            <div className="headersearch">
              <div className="headersearchitem">
                <i className="fa-solid fa-bed"></i>
                <input
                  type="text"
                  placeholder="Nereye gidiyorsunuz?"
                  className="headersearchinput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headersearchitem">
                <i className="fa-solid fa-calendar-days"></i>
                <span
                  onClick={() => setOpen(!open)}
                  className="headersearchtext"
                >
                  {format(date[0].startDate, "dd/MM/yyyy")} to{" "}
                  {format(date[0].endDate, "dd/MM/yyyy")}{" "}
                </span>
                {open && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headersearchitem">
                <i className="fa-solid fa-person"></i>
                <span
                  className="headersearchtext"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {options.adult} yetişkin {options.children} çocuk{" "}
                  {options.room} oda
                </span>
                {openOptions && (
                  <div
                    style={{
                      right: open ? "9rem" : "10rem",
                    }}
                    className="options"
                  >
                    <div className="optionsitem">
                      <div className="optionstext">Yetişkin</div>
                      <div className="optioncounter">
                        <button
                          disabled={options.adult === 1}
                          onClick={() => handleClick("adult", "dec")}
                          className="optioncounterbutton"
                        >
                          -
                        </button>
                        <span className="optioncounternumber">
                          {options.adult}
                        </span>
                        <button
                          onClick={() => handleClick("adult", "inc")}
                          className="optioncounterbutton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsitem">
                      <div className="optionstext">Çocuk</div>
                      <div className="optioncounter">
                        <button
                          disabled={options.children === 1}
                          onClick={() => handleClick("children", "dec")}
                          className="optioncounterbutton"
                        >
                          -
                        </button>
                        <span className="optioncounternumber">
                          {options.children}
                        </span>
                        <button
                          onClick={() => handleClick("children", "inc")}
                          className="optioncounterbutton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsitem">
                      <div className="optionstext">Oda</div>
                      <div className="optioncounter">
                        <button
                          disabled={options.room === 1}
                          onClick={() => handleClick("room", "dec")}
                          className="optioncounterbutton"
                        >
                          -
                        </button>
                        <span className="optioncounternumber">
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleClick("room", "inc")}
                          className="optioncounterbutton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headersearchitem">
                <button onClick={handleSearch} className="headerbutton">
                  Arama Yap
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
