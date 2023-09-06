import React from "react";
// Link
import { Link } from "react-router-dom";
// Icons
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <Zoom>
      <div className="bg-white shadow-2xl min-h-[500px] group">
        <div className="overflow-hidden">
          <img
            className="group-hover:scale-110 transition-all duration-300 w-full"
            src={image}
            alt="rooms"
          />
        </div>
        {/* Details */}
        <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
          <div className="flex justify-between w-[80%]">
            {/* Size */}
            <div className="flex items-center gap-x-2">
              <div className="text-accent">
                <BsArrowsFullscreen className="text-[15px]" />
              </div>
              <div className="flex gap-x-1">
                <div>size</div>
                <div>{size}</div>
              </div>
            </div>
            {/* Room Capacity */}
            <div className="flex items-center gap-x-2">
              <div className="text-accent">
                <BsPeople className="text-[18px]" />
              </div>
              <div className="flex gap-x-1">
                <div>Max People</div>
                <div>{maxPerson}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Name & Description */}
        <div className="text-center">
          <Link to={`/room/${id}`}>
            <h3 className="h3">{name}</h3>
            <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
              {description.slice(0, 56)}
            </p>
          </Link>
        </div>
        {/* Button */}
        <Link
          className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
          to={`/room/${id}`}
        >
          Book now from ${price}
        </Link>
      </div>
    </Zoom>
  );
};

export default Room;