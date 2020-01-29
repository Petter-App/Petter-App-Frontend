import React from "react";
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import "./Swiper.css";

function Swiper() {
  return (
    <div className="Swiper">
      <SwipeableList>
        <SwipeableListItem
          swipeLeft={{
            content: <div>You swiped left</div>,
            action: () => console.info("swipe action triggered")
          }}
          swipeRight={{
            content: <div>You swiped right</div>,
            action: () => console.info("swipe action triggered")
          }}
        >
          <div>
            <div
              className="AnimalContainer"
              style={{
                backgroundImage: `url(/static/cat.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  );
}

export default Swiper;
