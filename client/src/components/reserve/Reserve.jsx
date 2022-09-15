import React from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import "./reserve.scss";
import axios from "axios";
function Reserve({ hotelID, setOpen }) {
  const { data, isPending, error } = useFetch(`/hotels/room/${hotelID}`);
  const [selectedRooms, setSelectedRooms] = React.useState([]);

  const { date } = useSelector((state) => state.search);

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      selected
        ? [...selectedRooms, value]
        : selectedRooms.filter((room) => room !== value)
    );
  };

  const getDates = (startD, endD) => {
    const start = new Date(startD);
    const end = new Date(endD);
    const date = new Date(startD.getTime());

    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDates(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavaibleDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleReserve = async() => {
        try {
            
        await Promise.all(selectedRooms.map(roomId=>{

            const res = axios.put(`/rooms/available/${roomId}`,{
                dates:allDates
            })
            return res.data


        }))


        } catch (error) {
            console.log(error);
        }


  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <i
          class="fa-solid fa-xmark"
          style={{
            color: "black",
            right: "20px",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(false)}
        ></i>
        <span className="">Odanızı seçiniz:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                En Fazla Misafir: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
            {item.roomNumbers.map((number) => (
              <div className="room">
                <label htmlFor="">{number.number}</label>
                <input
                  type="checkbox"
                  value={number._id}
                  onChange={(e) => handleSelect(e)}
                  disabled={!isAvailable(number)}
                />
              </div>
            ))}
            </div>
          </div>
        ))}
        <button className="rButton" onClick={handleReserve}>
          Rezerve Et
        </button>
      </div>
    </div>
  );
}

export default Reserve;
