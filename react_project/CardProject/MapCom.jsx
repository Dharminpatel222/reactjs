import React from "react";
import Card from "./Card";
import "./Card.css";

let data = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8xCtkOO_92HAFKYGXCc0pg7kSCNVz_2yHf_V3pgZ&s",
    BikeName: "KTM",
    Price: 225000,
    Description: "KTM",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8xCtkOO_92HAFKYGXCc0pg7kSCNVz_2yHf_V3pgZ&s",
    BikeName: "KTM",
    Price: 225000,
    Description: "KTM",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8xCtkOO_92HAFKYGXCc0pg7kSCNVz_2yHf_V3pgZ&s",
    BikeName: "KTM",
    Price: 225000,
    Description: "KTM",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8xCtkOO_92HAFKYGXCc0pg7kSCNVz_2yHf_V3pgZ&s",
    BikeName: "KTM",
    Price: 225000,
    Description: "KTM",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8xCtkOO_92HAFKYGXCc0pg7kSCNVz_2yHf_V3pgZ&s",
    BikeName: "KTM",
    Price: 225000,
    Description: "KTM",
  },
  {
    img: "https://images.pexels.com/photos/12036802/pexels-photo-12036802.jpeg?cs=srgb&dl=pexels-abhishek-patel-12036802.jpg&fm=jpg",
    BikeName: "Bullet",
    Price: 250000,
    Description: "Bullet",
  },
  {
    img: "https://thumbs.dreamstime.com/b/royal-enfield-bike-made-like-gun-goes-bullet-129494686.jpg",
    BikeName: "Duke",
    Price: 170000,
    Description: "Duke",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZmObm6SH30EPOfwY3P7LdtLPXr1GGlfjAuUwNkwN&s",
    BikeName: "MT-15",
    Price: 220000,
    Description: "MT-15",
  },
];

export default function MapCom() {
  return (
    <>
      <div className="con">
        {data.map((e, i) => {
          return <Card cardData={e} key={i} />;
        })}
      </div>
    </>
  );
}
