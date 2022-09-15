import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import "./list.scss";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/searchItem/SearchItem";
import useFetch from "../hooks/useFetch";

function List() {
  const location = useLocation();
  const [destination, setDestination] = React.useState(
    location.state.destination
  );
  const [date, setDate] = React.useState(location.state.date);
  const [options, setOptions] = React.useState(location.state.options);
  const [openDate, setOpenDate] = React.useState(false);
  const [max, setMax] = React.useState(undefined);
  const [min, setMin] = React.useState(undefined);

  const { data, isPending, error, reFetch } = useFetch(
     `/hotels/?city=${destination}&min=${min || 1 }&max=${max || 9999999}`
  );
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listContainerWrapper">
          <div className="listContainerWrapperSearch">
            <h1 className="listContainerWrapperSearchTitle">Search</h1>
            <div className="listContainerWrapperSearchItem">
              <label htmlFor="">Seyahat noktası/tesis adı:</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listContainerWrapperSearchItem">
              <label htmlFor="">Check-in tarihi</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd MM yyyy"
              )} to ${format(date[0].endDate, "dd MM yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}

              <div className="listContainerWrapperSearchItem">
                <label htmlFor="">Seçenekler</label>
                <div className="listContainerWrapperSearchItemOption">
                  <div className="listContainerWrapperSearchItemOptionItem">
                    <span className="listContainerWrapperSearchItemOptionItemText">
                      En düşük fiyat <small>bir gecelik</small>
                    </span>
                    <input
                      onChange={(e) => setMin(e.target.value)}
                      type="number"
                      className="listContainerWrapperSearchItemOptionItemInput"
                    />
                  </div>
                  <div className="listContainerWrapperSearchItemOptionItem">
                    <span className="listContainerWrapperSearchItemOptionItemText">
                      En yüksek fiyat <small>bir gecelik</small>
                    </span>
                    <input
                      onChange={(e) => setMax(e.target.value)}
                      type="number"
                      className="listContainerWrapperSearchItemOptionItemInput"
                    />
                  </div>
                  <div className="listContainerWrapperSearchItemOptionItem">
                    <span className="listContainerWrapperSearchItemOptionItemText">
                      Yetişkin
                    </span>
                    <input
                      type="number"
                      placeholder={options.adult}
                      min={1}
                      className="listContainerWrapperSearchItemOptionItemInput"
                    />
                  </div>
                  <div className="listContainerWrapperSearchItemOptionItem">
                    <span className="listContainerWrapperSearchItemOptionItemText">
                      Çocuk
                    </span>
                    <input
                      type="number"
                      min={0}
                      placeholder={options.children}
                      className="listContainerWrapperSearchItemOptionItemInput"
                    />
                  </div>
                  <div className="listContainerWrapperSearchItemOptionItem">
                    <span className="listContainerWrapperSearchItemOptionItemText">
                      Oda
                    </span>
                    <input
                      placeholder={options.room}
                      min={1}
                      type="number"
                      className="listContainerWrapperSearchItemOptionItemInput"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Ara</button>
          </div>
          <div className="listContainerWrapperResult">
            {isPending ? (
              "Yükleniyor..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
