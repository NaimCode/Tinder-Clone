import React from "react";
import "./TinderCards.css";
import { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Jeff Bezoz",
      url:
        "https://robbreport.com/wp-content/uploads/2020/08/jeff-bezos1.jpg?w=1000",
    },
    {
      name: "Elon Musk",
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spacex-founder-elon-musk-addresses-the-media-during-a-press-news-photo-1585058537.jpg",
    },
  ]);
  const swipe = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen ");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipe(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
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
