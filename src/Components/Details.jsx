import React from "react";
import { icons } from "../constants";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: icons.bodyPartImg,
      name: bodyPart,
    },
    {
      icon: icons.targetImg,
      name: target,
    },
    {
      icon: icons.equipmentImg,
      name: equipment,
    },
  ];

  return (
    <div className="flex md:flex-row flex-col justify-between items-center md:space-x-4 space-x-0 md:items-left md:px-6 px-2 md:py-12 py-20 ">
      <div className="">
        <img
          src={gifUrl}
          alt={name}
          loading="Lazy"
          className="rounded-lg md:w-[450px] md:h-[310px] w-[250px] h-[220px] xl:h-[550px] xl:w-[700px]"
        />
      </div>
      <div className="items-center py-4 xl:w-3/6 lg:w-4/6 md:w-3/4">
        <p className="capitalize text-center font-bold text-5xl py-2">{name}</p>
        <p className="rounded-lg border-4 border-transparent text-center text-lg  xl:text-4xl">
          We have all heard it many times before - regular exercise is good for
          you, and it can help you lose weight while also keeping you strong.{" "}
          <span className="capitalize">{name}</span> bup is one of the best{" "}
          exercises to target your {target}. It will help you improve your mood
          and gain energy.
        </p>
        <div className="flex flex-row justify-around items-center md:px-4">
          {extraDetail.map((item) => (
            <div
              key={item.name}
              className="flex flex-col md:flex-row justify-center items-center py-2 px-4"
            >
              <div className="items-center justify-center">
                <img
                  src={item.icon}
                  className="w-[50px] rounded-lg items-center"
                />
              </div>
              <div>
                <p className="capitalize items-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
