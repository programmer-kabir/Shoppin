import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ setCurrentPage, pageCount }) => {
  const [currentButton, setCurrentButton] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect((_) => {
    const arr = [];

    for (let i = 1; i <= pageCount; i++) arr.push(i);

    setPages(arr);
  }, []);

  useEffect(
    (_) => {
      let dotsInit = "...";
      let dotsLeft = "... ";
      let dotsRight = " ...";
      let tempPages = [...buttons];

      if (pages.length < 6) {
        tempPages = pages;
      } else if (currentButton >= 1 && currentButton <= 3) {
        tempPages = [1, 2, 3, 4, dotsInit, pages.length];
      } else if (currentButton === 4) {
        const slicePages = pages.slice(0, 5);
        tempPages = [...slicePages, dotsInit, pages.length];
      } else if (currentButton > 4 && currentButton < pages.length - 2) {
        const slicePagesFirst = pages.slice(currentButton - 2, currentButton);
        const slicePagesSecond = pages.slice(currentButton, currentButton + 1);
        tempPages = [
          1,
          dotsLeft,
          ...slicePagesFirst,
          ...slicePagesSecond,
          dotsRight,
          pages.length,
        ];
      } else if (currentButton > pages.length - 3) {
        const slicePages = pages.slice(pages.length - 4);
        tempPages = [1, dotsLeft, ...slicePages];
      } else if (currentButton.toString() === dotsInit) {
        setCurrentButton(buttons[buttons.length - 3] + 1);
      } else if (currentButton.toString() === dotsRight) {
        setCurrentButton(buttons[3] + 2);
      } else if (currentButton.toString() === dotsLeft) {
        setCurrentButton(buttons[3] - 2);
      }

      setButtons(tempPages);
      setCurrentPage(currentButton);
    },
    [pages, currentButton]
  );

  return (
    <div className="flex justify-center mt-5">
      <div className="btn-group">
        {currentButton !== 1 ? (
          <button
            className="btn btn-sm bg-[#35bef0]/70 border-sky-50"
            onClick={(_) => setCurrentButton(currentButton - 1)}
          >
            <FaArrowLeft />
          </button>
        ) : null}
        {buttons.map((page, idx) => {
          return (
            <button
              key={idx}
              className={`btn btn-sm ${
                currentButton === page
                  ? "btn-active btn-disabled !bg-[#35bef0]"
                  : "bg-[#35bef0]/70"
              } !border-sky-50`}
              onClick={(_) => setCurrentButton(page)}
            >
              {page}
            </button>
          );
        })}
        {currentButton !== pages.length ? (
          <button
            className="btn btn-sm bg-[#35bef0]/70 border-sky-50"
            onClick={(_) => setCurrentButton(currentButton + 1)}
          >
            <FaArrowRight />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
