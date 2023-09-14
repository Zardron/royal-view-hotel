import React, { useState } from "react";
// Components
import AdultsDropdown from "../components/AdultsDropdown";
import ChildrenDropdown from "./ChildrenDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import { AiFillCloseSquare } from "react-icons/ai";
import Modal from "react-modal";

import Visa from "./assets/visa.png";
import Mastercard from "./assets/masterCard.png";
import JCB from "./assets/JCB.png";
import Discover from "./assets/discover.png";
import Diners from "./assets/diners.png";
import Amex from "./assets/amex.png";

function getCardType(number) {
  const re = {
    electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    maestro:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    dankort: /^(5019)\d+$/,
    interpayment: /^(636)\d+$/,
    unionpay: /^(62|88)\d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard:
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (var key in re) {
    if (re[key].test(number)) {
      return key;
    }
  }

  return "unknown";
}

const customStyles = {
  content: {
    width: 450,
    maxHeight: 550,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99,
  },
};

const BookForm = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  adults,
  setAdults,
  childrens,
  setChildrens,
  roomId,
  roomPrice,
}) => {
  const checkIn = checkInDate;
  const checkOut = checkOutDate;
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((checkIn - checkOut) / oneDay));
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const totalPrice = roomPrice * diffDays;
  const [agree, setAgree] = useState(false);
  const [cardNo, setCardNo] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("body");

  return (
    <>
      <div className="h-[300px]  w-full lg:h-[70px]">
        <div className="flex flex-col w-full h-full">
          <div className="flex-1 border p-4">
            <CheckIn
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
            />
          </div>
          <div className="flex-1 border p-4">
            <CheckOut
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
            />
          </div>
          <div className="flex-1 border p-4">
            <AdultsDropdown adults={adults} setAdults={setAdults} />
          </div>
          <div className="flex-1 border p-4">
            <ChildrenDropdown
              childrens={childrens}
              setChildrens={setChildrens}
            />
          </div>
          {/* Button */}
          <button className="btn btn-primary py-4" onClick={openModal}>
            Book Now
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "2px solid gray",
            paddingBottom: "10px",
          }}
        >
          <div className="text-gray-500 font-extrabold text-2xl uppercase">
            Booking Details
          </div>
          <button onClick={closeModal}>
            <AiFillCloseSquare color={"red"} />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex flex-col gap-2 mb-4">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                CheckIn Date
              </label>
              <input
                class="cursor-not-allowed bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
                value={checkInDate?.toLocaleDateString("en-GB")}
                disabled
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                CheckOut Date
              </label>
              <input
                class="cursor-not-allowed bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
                value={checkOutDate?.toLocaleDateString("en-GB")}
                disabled
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                Adults
              </label>
              <input
                class="cursor-not-allowed bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
                value={adults}
                disabled
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                Children
              </label>
              <input
                class="cursor-not-allowed bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
                value={childrens}
                disabled
              />
            </div>
          </div>

          <div className="text-gray-500 font-extrabold text-sm uppercase mb-4 border-b-2 border-gray-500 pb-4">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                Total Price
              </label>
              <input
                class="cursor-not-allowed bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
                value={`${totalPrice}.00 AED ONLY`}
                disabled
              />
            </div>
          </div>

          <div className="text-gray-500 font-extrabold text-lg uppercase mb-4">
            Customer Details
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                Full Name
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                Contact #
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
                for="inline-full-name"
              >
                Address
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="text-gray-500 font-extrabold text-lg uppercase mb-4">
          Card Details
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label
              class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
              for="inline-full-name"
            >
              Card No.
            </label>
            <input
              class={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  ${
                getCardType(cardNo) === "unknown"
                  ? "focus:border-red-600"
                  : "focus:border-[#a07d48]"
              } focus:border-[#a07d48]`}
              id="inline-full-name"
              type="text"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label
              class="block text-gray-500 font-bold mb-1 md:mb-0 w-[125px]"
              for="inline-full-name"
            >
              Card Type.
            </label>

            <div className="flex flex-row items-center justify-between w-1/2">
              <img
                src={Visa}
                alt="card"
                width={"45"}
                className={`${
                  getCardType(cardNo) === "visa" ? "grayscale-0" : ""
                }grayscale`}
              />
              <img
                src={Mastercard}
                alt="card"
                width={"45"}
                className={`${
                  getCardType(cardNo) === "mastercard" ? "grayscale-0" : ""
                }grayscale`}
              />
              <img
                src={JCB}
                alt="card"
                width={"45"}
                className={`${
                  getCardType(cardNo) === "jcb" ? "grayscale-0" : ""
                }grayscale`}
              />
              <img
                src={Discover}
                alt="card"
                width={"45"}
                className={`${
                  getCardType(cardNo) === "discover" ? "grayscale-0" : ""
                }grayscale`}
              />
              <img
                src={Diners}
                alt="card"
                width={"45"}
                className={`${
                  getCardType(cardNo) === "diners" ? "grayscale-0" : ""
                }grayscale`}
              />
              <img
                src={Amex}
                alt="card"
                width={"45"}
                className={`${
                  getCardType(cardNo) === "amex" ? "grayscale-0" : ""
                }grayscale`}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label
              class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
              for="inline-full-name"
            >
              Expiration
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
              id="inline-full-name"
              type="text"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label
              class="block text-gray-500 font-bold mb-1 md:mb-0 w-1/2"
              for="inline-full-name"
            >
              CVV
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a07d48]"
              id="inline-full-name"
              type="password"
            />
          </div>
        </div>

        <div className="font-normal text-red-600 text-sm mb-4 text-justify">
          Condition: This is Free Cancellation, However if you were unable to
          honor your reservation on the mentioned date thats the time we will
          deduct half of the corresponding amount to your Card.
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setAgree(!agree)}
            checked={agree}
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-500"
          >
            I Agree on Condition Above.
          </label>
        </div>
        <button
          className={`w-full btn btn-primary py-4 ${
            !agree &&
            "bg-gray-400 cursor-not-allowed hover:bg-gray-400 hover:text-white"
          }`}
          disabled={!agree}
        >
          Submit
        </button>
      </Modal>
    </>
  );
};

export default BookForm;
