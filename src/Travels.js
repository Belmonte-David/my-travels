import React from "react";
import Travel from "./Travel"
const travels = [
  {
    destination: "Tadoussac",
    country: "Canada",
    photo: "https://www.quebecvacances.com/images/photos/photos_600_400/croisieres_aml_tadoussac_11.jpg",
    distance: "5 431 km",
  },
  {
    destination: "Krabi",
    country: "Thaïlande",
    photo: "https://img.ev.mu/images/attractions/7690/600x400/435359.jpg",
    distance: "9.693,10 km",
  },
  {
    destination: "Mexico",
    country: "Mexique",
    photo: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2017-09/photoville_61.jpg?itok=yF--ufIc",
    distance: "9 494 km",
  },
  {
    destination: "Rome",
    country: "Italie",
    photo: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/roma2.jpg?itok=dwsNP75l",
    distance: "997,9 km",
  },
  {
    destination: "Barcelone",
    country: "Espagne",
    photo: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-07/visiter%20barcelone.PNG?itok=BugOpilA",
    distance: "638,9 km",
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
      ))}
  </div>
); 
 
export default Travels;