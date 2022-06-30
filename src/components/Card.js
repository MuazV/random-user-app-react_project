import React from "react";
import "./Card.scss";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";

const Card = ({ user }) => {
  const {
    picture: { medium },
    name: { title, first, last },
    email,
    cell,
    location: { city, country },
    dob: { age },
    registered: { date },
  } = user;

  return (
    <div className="content">
      <div className="image">
        <img src={medium} alt="" />
      </div>
      <h3>
        <span>{title}</span> <span>{first}</span> <span>{last}</span>
      </h3>
      <div className="mail-icon">
        <HiOutlineMailOpen />
      </div>
      <h4>{user.email}</h4>
      <div className="phone-icon">
        <AiFillPhone />
      </div>
      <h4>{cell}</h4>
      <div className="location-icon">
        <GrMapLocation />
      </div>
      
    </div>
  );
};

export default Card;
