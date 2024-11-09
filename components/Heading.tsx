import React from "react";

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div  data-aos="zoom-in-up" className="mb-10 text-center text-7xl pb-8 font-bold">
      <p  data-aos="zoom-in-up" className="inline-block pb-2">{title}</p>
    </div>
  );
};

export default Heading;
