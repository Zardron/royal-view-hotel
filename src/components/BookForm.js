import React, { useContext } from "react";
// Components
import AdultsDropdown from "../components/AdultsDropdown";
import ChildrenDropdown from "./ChildrenDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import { RoomContext } from "../context/RoomContext";
import Fade from "react-awesome-reveal";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <Fade>
      <form className="h-[300px]  w-full lg:h-[70px]">
        <div className="flex flex-col w-full h-full lg:flex-row">
          <div className="flex-1 border-t border-l border-r">
            <CheckIn />
          </div>
          <div className="flex-1 border-t border-r">
            <CheckOut />
          </div>
          <div className="flex-1 border-t border-r">
            <AdultsDropdown />
          </div>
          <div className="flex-1 border-t border-r">
            <ChildrenDropdown />
          </div>
          {/* Button */}
          <button
            type="submit"
            onClick={(e) => handleClick(e)}
            className="btn btn-primary"
          >
            Check Now
          </button>
        </div>
      </form>
    </Fade>
  );
};

export default BookForm;
