import React from "react";
import Button from "./Button";
import List from "./List";

function Side(props) {
  const iconsText = props.iconsText;

  return (
    <aside id={props.cssTag}>
      {props.cssTag === "left-side" ? (
        <>
          <div id="side-icon-container">
            {props.icons.map((img, index) => {
              return (
                <Button
                  className="side-icon"
                  key={img}
                  handleSideIconClick={props.handleSideIconClick}
                >
                  <img
                    className="left-side-icon"
                    src={img}
                    alt={iconsText[index]}
                  ></img>
                </Button>
              );
            })}
          </div>
        </>
      ) : (
        <List
          hanldePlayListClick={props.handlePlayListClick}
          className="stream-videosList"
          videoList={props.videoList}
          windowWidth={props.windowWidth}
          videoid={props.videoid}
        ></List>
      )}
    </aside>
  );
}

export default Side;
