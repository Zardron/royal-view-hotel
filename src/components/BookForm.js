import React from "react";
// Components
import AdultsDropdown from "../components/AdultsDropdown";
import ChildrenDropdown from "./ChildrenDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

const BookForm = () => {
  return (
    <form className="h-[300px]  w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full">
        <div className="flex-1 border p-4">
          <CheckIn />
        </div>
        <div className="flex-1 border p-4">
          <CheckOut />
        </div>
        <div className="flex-1 border p-4">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border p-4">
          <ChildrenDropdown />
        </div>
        {/* Button */}
        <button type="submit" className="btn btn-primary py-4">
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
