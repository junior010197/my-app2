import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "naturally",
      url:
        "https://images.pexels.com/photos/542517/pexels-photo-542517.jpeg?cs=srgb&dl=pexels-billel-moula-542517.jpg&fm=jpg",
    },
    {
      name: "naturally",
      url:
        "https://images.pexels.com/photos/620310/pexels-photo-620310.jpeg?cs=srgb&dl=pexels-henning-kesselhut-620310.jpg&fm=jpg",
    },
    {
      name: "naturally",
      url:
        "https://images.pexels.com/photos/2471455/pexels-photo-2471455.jpeg?cs=srgb&dl=pexels-aaron-burden-2471455.jpg&fm=jpg",
    },
    {
      name: "naturally",
      url:
        "https://images.pexels.com/photos/1373842/pexels-photo-1373842.jpeg?cs=srgb&dl=pexels-todd-trapani-1373842.jpg&fm=jpg",
    },
    {
      name: "naturally",
      url:
        "https://images.pexels.com/photos/1165036/pexels-photo-1165036.jpeg?cs=srgb&dl=pexels-alex-martin-1165036.jpg&fm=jpg",
    },
    {
      name: "naturally",
      url:
        "https://images.pexels.com/photos/345075/pexels-photo-345075.jpeg?cs=srgb&dl=pexels-david-orsborne-345075.jpg&fm=jpg",
    },
  ]);

  const Swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => Swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
            <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
