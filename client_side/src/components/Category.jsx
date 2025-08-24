import React from "react";

const Category = ({ category }) => {
  const { name, img } = category;

  return (
    <>
      <figure className="rounded-full overflow-hidden shadow-[-0.4rem_0.6rem] shadow-sky-200/60 group-hover:shadow-sky-200 transition-[--tw-shadow-color] duration-500">
        <img src={img} alt="" />
      </figure>
      <div className="font-semibold mt-5">{name}</div>
    </>
  );
};

export default Category;
