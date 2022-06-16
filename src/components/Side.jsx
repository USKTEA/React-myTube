import React from "react";
import Button from "./Button";
import List from "./List";

function Side(props) {
  return (
    <aside id={props.cssTag}>
      {props.cssTag === "left-side" ? (
        <>
          <div id="side-icon-container">
            {props.icons.map((img) => {
              return (
                <Button>
                  <img
                    className="left-side-icon"
                    key={img}
                    src={img}
                    alt="icons"
                  ></img>
                </Button>
              );
            })}
          </div>
        </>
      ) : (
        <List
          className="stream-videosList"
          videoList={props.videoList}
          windowWidth={props.windowWidth}
          videoid={props.videoid}
        ></List>
      )}
    </aside>
  );
}
//직업별 검색이벤트 추가해야함
export default Side;
