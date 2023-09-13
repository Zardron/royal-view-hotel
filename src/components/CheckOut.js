import React, { useState } from "react";
// Datepicker
import DatePicker from "react-datepicker";
// Datepicker CSS
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// Icons
import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full cursor-pointer">
      {/* Icon */}
      <div className="absolute z-10 pr-8 ">
        <div>
          <BsCalendar className="text-accent text-base " />
        </div>
      </div>
      <DatePicker
        className="w-full h-full cursor-pointer font-tertiary tracking-[3px]"
        selected={endDate}
        placeholderText="Check Out"
        minDate={new Date()}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
