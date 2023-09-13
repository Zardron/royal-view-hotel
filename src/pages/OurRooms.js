import React, { useEffect, useState } from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom/dist";
import { GiSwan } from "react-icons/gi";
import { SlSizeActual } from "react-icons/sl";
import { PiMountainsFill } from "react-icons/pi";
import { FaCheck, FaCity, FaCocktail, FaSnowflake } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import axios from "axios";

const deluxeKingRoom = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436667/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/116577785_z9g00q.jpg",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436667/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/343023219_ago91a.jpg",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436666/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/168715615_dsgpxi.jpg",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436666/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/168715901_cmyaoa.jpg",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436666/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/123202886_l49lrx.jpg",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436666/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/314192162_rybves.jpg",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694436666/ROYAL%20VIEW%20HOTEL/DELUXE%20KING%20ROOM/116650553_abaksg.jpg",
  },
];

const deluxeRoom = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694446696/ROYAL%20VIEW%20HOTEL/DELUXE%20SUITE/401534771_cryuw9.jpg",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694446696/ROYAL%20VIEW%20HOTEL/DELUXE%20SUITE/116650257_dsmjhl.jpg",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694446697/ROYAL%20VIEW%20HOTEL/DELUXE%20SUITE/401534735_oa5fkz.jpg",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694446696/ROYAL%20VIEW%20HOTEL/DELUXE%20SUITE/314192162_z5keva.jpg",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694446696/ROYAL%20VIEW%20HOTEL/DELUXE%20SUITE/168715901_zl0pp7.jpg",
  },
];

const deluxeTwinRoom = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694451861/ROYAL%20VIEW%20HOTEL/DELUXE%20TWIN%20ROOM/401821613_ylwuig.jpg",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694451860/ROYAL%20VIEW%20HOTEL/DELUXE%20TWIN%20ROOM/401534881_vtwtya.jpg",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694451860/ROYAL%20VIEW%20HOTEL/DELUXE%20TWIN%20ROOM/314192162_sk6llu.jpg",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694451861/ROYAL%20VIEW%20HOTEL/DELUXE%20TWIN%20ROOM/401821613_ylwuig.jpg",
  },
];

const standardDoubleRoom = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694453035/ROYAL%20VIEW%20HOTEL/STANDARD%20DOUBLE%20ROOM/123202886_gigv3b.jpg",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694453035/ROYAL%20VIEW%20HOTEL/STANDARD%20DOUBLE%20ROOM/165843568_cd4t4c.jpg",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694453037/ROYAL%20VIEW%20HOTEL/STANDARD%20DOUBLE%20ROOM/165843422_rljggm.jpg",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694453037/ROYAL%20VIEW%20HOTEL/STANDARD%20DOUBLE%20ROOM/314192162_yaxfxr.jpg",
  },
];

const OurRooms = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/room/")
      .then((result) => {
        setRoomData(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [imageSrc, setImageSrc] = useState();
  const [isActiveIndex, setActiveIndex] = useState(0);

  const handleSelectedImage = (src, activeIndex) => {
    setImageSrc(src);
    setActiveIndex(activeIndex);
  };

  const [imageSrc2, setImageSrc2] = useState(deluxeRoom[0].src);
  const [isActiveIndex2, setActiveIndex2] = useState(0);

  const handleSelectedImage2 = (src, activeIndex) => {
    setImageSrc2(src);
    setActiveIndex2(isActiveIndex2);
  };

  const [imageSrc3, setImageSrc3] = useState(deluxeTwinRoom[0].src);
  const [isActiveIndex3, setActiveIndex3] = useState(0);

  const handleSelectedImage3 = (src, activeIndex) => {
    setImageSrc3(src);
    setActiveIndex3(isActiveIndex3);
  };

  const [imageSrc4, setImageSrc4] = useState(standardDoubleRoom[0].src);
  const [isActiveIndex4, setActiveIndex4] = useState(0);

  const handleSelectedImage4 = (src, activeIndex) => {
    setImageSrc4(src);
    setActiveIndex4(isActiveIndex4);
  };

  return (
    <section>
      {/* ScrollToTop */}
      <ScrollToTop />
      {/* Banner */}{" "}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
      </div>
      <div className="container mx-auto">
        <hr />
        <h2 className="font-primary text-[36px] lg:text-[45px] mb-10 p-2">
          Our Rooms
        </h2>

        <div className="max-w-sm mx-auto lg:max-w-none lg:mx-0 pb-10">
          {/* Deluxe King Room */}
          <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
            <div className="grid grid-cols-2">
              <div>
                <h3 className="h3 text-4xl font-tertiary">
                  {roomData[0]?.roomName}
                </h3>
                <div className="overflow-hidden">
                  <img
                    className="transition-all duration-300 w-full h-[320px]"
                    src={!imageSrc ? roomData[0]?.images[0]?.url : imageSrc}
                    alt="rooms"
                  />
                </div>
                <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                  <div className="flex justify-between w-[100%]">
                    <div className="grid grid-cols-5 gap-[5px]">
                      {roomData[0]?.images?.map((item, index) => (
                        <img
                          key={index}
                          className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                            index === isActiveIndex
                              ? "border-4 border-[#2dadc9]"
                              : ""
                          }`}
                          src={item.url}
                          alt="rooms"
                          onClick={() => handleSelectedImage(item.url, index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {/* <Link to={`/room/`}> */}
                {/* Amenities */}
                <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-2 px-6 py-2 pt-12">
                  {roomData[0]?.roomDetails?.map((item, index) => (
                    <>
                      {item.name === "Lake View" && (
                        <div className="flex flex-row items-center gap-x-2">
                          <GiSwan size={24} />
                          <span className="font-tertiary">Lake View</span>
                        </div>
                      )}

                      {item.name === "Mountain View" && (
                        <div className="flex flex-row items-center gap-x-2">
                          <PiMountainsFill size={24} />
                          <span className="font-tertiary">Mountain View</span>
                        </div>
                      )}

                      {item.name === "City View" && (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCity size={24} />
                          <span className="font-tertiary">City View</span>
                        </div>
                      )}

                      {item.name === "Air Condition" && (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaSnowflake size={20} />
                          <span className="font-tertiary">Air Condition</span>
                        </div>
                      )}

                      {item.name === "Flatscreen TV" && (
                        <div className="flex flex-row items-center gap-x-2">
                          <MdOutlineScreenshotMonitor size={24} />
                          <span className="font-tertiary">Flatscreen TV</span>
                        </div>
                      )}

                      {item.name === "Minibar" && (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCocktail size={22} />
                          <span className="font-tertiary">Minibar</span>
                        </div>
                      )}
                    </>
                  ))}
                </div>

                <div className="flex flex-row items-center px-6 pt-4">
                  <p className="text-lg font-tertiary font-semibold">
                    Room Size:{" "}
                    <span className="font-normal ml-2">
                      {roomData[0]?.roomSize} m<sup>2</sup>
                    </span>
                  </p>
                </div>

                <div className="flex flex-row items-center px-6">
                  <div className="text-lg font-tertiary text-justify">
                    The air-conditioned double room features a flat-screen TV
                    with cable channels, a mini-bar, a dining area, a wardrobe
                    as well as lake views. The unit has 1 bed.
                  </div>
                </div>

                <div className="flex flex-row items-center px-6 pt-4">
                  <p className="text-lg font-tertiary font-semibold">
                    In the bathroom:
                  </p>
                </div>

                <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                  {roomData[0]?.inBathroom?.map((item) => (
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row items-center px-6 pt-4">
                  <p className="text-lg font-tertiary font-semibold">View:</p>
                </div>

                <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                  {roomData[0]?.view?.map((item) => (
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row items-center px-6 pt-4">
                  <p className="text-lg font-tertiary font-semibold">
                    Room Facilities:
                  </p>
                </div>

                <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                  {roomData[0]?.facilities?.map((item) => (
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">{item.name}</span>
                    </div>
                  ))}
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>

          {/* Deluxe King Room */}
          <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex flex-row">
                  <h3 className="h3 text-4xl font-tertiary">
                    {roomData[1]?.roomName}
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="transition-all duration-300 w-full h-[320px]"
                    src={imageSrc2}
                    alt="rooms"
                  />
                </div>
                <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                  <div className="flex justify-between w-[100%]">
                    <div className="grid grid-cols-5 gap-[5px]">
                      {deluxeRoom.map((data, index) => (
                        <img
                          key={index}
                          className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                            index === isActiveIndex2
                              ? "border-4 border-[#2dadc9]"
                              : ""
                          }`}
                          src={data.src}
                          alt="rooms"
                          onClick={() => handleSelectedImage2(data.src, index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link to={`/room/`}>
                  {/* Amenities */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-2 px-6 py-2 pt-12">
                    <div className="flex flex-row items-center gap-x-2">
                      <SlSizeActual size={20} />
                      <span className="font-tertiary">
                        45 m<sup>2</sup>
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <GiSwan size={24} />
                      <span className="font-tertiary">Lake View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <PiMountainsFill size={24} />
                      <span className="font-tertiary">Mountain View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCity size={24} />
                      <span className="font-tertiary">City View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaSnowflake size={20} />
                      <span className="font-tertiary">Air Condition</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <MdOutlineScreenshotMonitor size={24} />
                      <span className="font-tertiary">Flatscreen TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCocktail size={22} />
                      <span className="font-tertiary">Mini Bar</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        45 m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="text-lg font-tertiary text-justify">
                      This suite consists of 1 living room, 1 separate bedroom
                      and 1 bathroom with a shower and free toiletries. The
                      air-conditioned suite provides a flat-screen TV with cable
                      channels, a mini-bar, a seating area, a dining area as
                      well as lake views. The unit offers 1 bed.
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Free toiletries</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Slippers</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Additional bathroom</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Hairdryer</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Toilet</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Guest bathroom</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Bathtub or shower</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Toilet paper</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Lake views</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">City view</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Mountain view</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Laptop safe</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Desk</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Linens</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Child safety socket covers
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Minibar</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Safe</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Carpeted</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Dining table</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Electric kettle</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Upper floors accessible by elevator
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Telephone</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Flat-screen TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Wardrobe or closet</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Extra long beds (> 6.5 ft)
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Cleaning products</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Wake-up service</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Interconnecting room(s) available
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Sofa</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Satellite channels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Towels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Air conditioning</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Ironing facilities</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Dining area</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Sitting area</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Clothes rack</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Socket near the bed</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Hand sanitizer</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 mt-2 mb-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Smoking:{" "}
                      <span className="font-normal ml-2">No Smoking</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Deluxe Twin Room */}
          <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
            <div className="grid grid-cols-2">
              <div>
                <h3 className="h3 text-4xl font-tertiary">Deluxe Twin Room</h3>
                <div className="overflow-hidden">
                  <img
                    className="transition-all duration-300 w-full h-[320px]"
                    src={imageSrc3}
                    alt="rooms"
                  />
                </div>
                <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                  <div className="flex justify-between w-[100%]">
                    <div className="grid grid-cols-5 gap-[5px]">
                      {deluxeTwinRoom.map((data, index) => (
                        <img
                          key={index}
                          className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                            index === isActiveIndex3
                              ? "border-4 border-[#2dadc9]"
                              : ""
                          }`}
                          src={data.src}
                          alt="rooms"
                          onClick={() => handleSelectedImage3(data.src, index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link to={`/room/`}>
                  {/* Amenities */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-2 px-6 py-2 pt-12">
                    <div className="flex flex-row items-center gap-x-2">
                      <SlSizeActual size={20} />
                      <span className="font-tertiary">
                        22 m<sup>2</sup>
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <GiSwan size={24} />
                      <span className="font-tertiary">Lake View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <PiMountainsFill size={24} />
                      <span className="font-tertiary">Mountain View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCity size={24} />
                      <span className="font-tertiary">City View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaSnowflake size={20} />
                      <span className="font-tertiary">Air Condition</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <MdOutlineScreenshotMonitor size={24} />
                      <span className="font-tertiary">Flatscreen TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCocktail size={22} />
                      <span className="font-tertiary">Mini Bar</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        22 m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="text-lg font-tertiary text-justify">
                      The air-conditioned twin room offers a flat-screen TV with
                      cable channels, a mini-bar, a dining area, a wardrobe as
                      well as lake views. The unit offers 2 beds.
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Free toiletries</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Bathtub or shower</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Toilet</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Toilet paper</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Lake views</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">City view</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Mountain view</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Laptop safe</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Minibar</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Desk</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Carpeted</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Child safety socket covers
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Electric kettle</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Safe</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Telephone</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Upper floors accessible by elevator
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Cable channels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Flat-screen TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Wardrobe or closet</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Extra long beds (> 6.5 ft)
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Cleaning products</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Wake-up service</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Interconnecting room(s) available
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Towels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Satellite channels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Socket near the bed</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Air conditioning</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Dining area</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Linens</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Clothes rack</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Deluxe Twin Room */}
          <div className="bg-white shadow-2xl h-auto group p-4">
            <div className="grid grid-cols-2">
              <div>
                <h3 className="h3 text-4xl font-tertiary">
                  Standard Double Room
                </h3>
                <div className="overflow-hidden">
                  <img
                    className="transition-all duration-300 w-full h-[320px]"
                    src={imageSrc4}
                    alt="rooms"
                  />
                </div>
                <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                  <div className="flex justify-between w-[100%]">
                    <div className="grid grid-cols-5 gap-[5px]">
                      {standardDoubleRoom.map((data, index) => (
                        <img
                          key={index}
                          className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                            index === isActiveIndex4
                              ? "border-4 border-[#2dadc9]"
                              : ""
                          }`}
                          src={data.src}
                          alt="rooms"
                          onClick={() => handleSelectedImage4(data.src, index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link to={`/room/`}>
                  {/* Amenities */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-2 px-6 py-2 pt-12">
                    <div className="flex flex-row items-center gap-x-2">
                      <SlSizeActual size={20} />
                      <span className="font-tertiary">
                        19 m<sup>2</sup>
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <GiSwan size={24} />
                      <span className="font-tertiary">Lake View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <PiMountainsFill size={24} />
                      <span className="font-tertiary">Mountain View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCity size={24} />
                      <span className="font-tertiary">City View</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaSnowflake size={20} />
                      <span className="font-tertiary">Air Condition</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <MdOutlineScreenshotMonitor size={24} />
                      <span className="font-tertiary">Flatscreen TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCocktail size={22} />
                      <span className="font-tertiary">Mini Bar</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        22 m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="text-lg font-tertiary text-justify">
                      The air-conditioned double room offers a flat-screen TV
                      with cable channels, a mini-bar, a dining area, a wardrobe
                      as well as lake views. The unit offers 1 bed.
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Free toiletries</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Bathtub or shower</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Toilet</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Toilet paper</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Balcony</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Lake views</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">City view</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Mountain view</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Laptop safe</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Linens</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Desk</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Minibar</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Child safety socket covers
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Carpeted</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Safe</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Electric kettle</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Upper floors accessible by elevator
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Telephone</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Flat-screen TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Cable channels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Extra long beds (> 6.5 ft)
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Wardrobe or closet</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Wake-up service</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">
                        Interconnecting room(s) available
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Cleaning products</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Towels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Satellite channels</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Socket near the bed</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Air conditioning</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">TV</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Dining area</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FaCheck size={16} className="font-thin" />
                      <span className="font-tertiary">Clothes rack</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRooms;
