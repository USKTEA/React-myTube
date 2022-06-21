import { useEffect, useState } from "react";
import Button from "./Button";
import Side from "./Side";
import Comments from "./Comments";

function Stream(props) {
  const [comments, setComments] = useState("");
  const {
    videoid,
    videotitle,
    view,
    like,
    publishdate,
    channeltitle,
    channeldescription,
    channelthumbnail,
  } = props.videoInfo;
  const date = publishdate.slice(0, 10);
  const views = [...view]
    .map((letter, index) => {
      if ((view.length - index) % 3 === 0 && view.length > 3 && index !== 0) {
        letter = `,${letter}`;
      }

      return letter;
    })
    .reduce((total, curr) => total + curr, "");

  const likes = [...like]
    .map((letter, index) => {
      if ((like.length - index) % 3 === 0 && like.length > 3 && index !== 0) {
        letter = `,${letter}`;
      }

      return letter;
    })
    .reduce((total, curr) => total + curr, "");

  useEffect(() => {
    const fetchData = async () => {
      const option = {
        method: "GET",
        mode: "cors",
      };
      const API_KEY = process.env.REACT_APP_FIRST_SECRET;
      const resposne = await fetch(
        `/commentThreads?part=snippet&maxResults=16&videoId=${videoid}&key=${API_KEY}`,
        option
      );

      const data = await resposne.json();

      setComments(() => data.items);
    };

    fetchData();
  }, [videoid]);

  return (
    <>
      <div className="video-page">
        <div className="video-comment-wrapper">
          <iframe
            className="video"
            title="video"
            src={`https://www.youtube-nocookie.com/embed/${videoid}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-presentation"
          ></iframe>
          <div className="stream-title-view-wrapper">
            <h2 className="stream-video-title">{videotitle}</h2>
            <div className="stream-view-favorite-wrapper">
              <span>{`조회수 : ${views}회 / 업로드 날짜 : ${date}`}</span>
              <span>{`👍${likes} likes`}</span>
            </div>
          </div>
          <div className="stream-channel-wrapper">
            <div className="stream-channel-thumbnail">
              <img alt="channel-thumbnail" src={channelthumbnail}></img>
            </div>
            <div className="stream-channel-info">
              <h3 className="stream-channel-title">{channeltitle}</h3>
              <div className="stream-channel-description-wrapper">
                <span>{channeldescription}</span>
              </div>
            </div>
            <div className="stream-channel-previouspage-wrapper">
              <Button handleClick={props.handleClick}>🔙</Button>
            </div>
          </div>
          {comments && <Comments videoComments={comments}></Comments>}
        </div>
        <Side
          handlePlayListClick={props.handlePlayListClick}
          cssTag="right-side"
          videoid={videoid}
          videoList={props.videoList}
          windowWidth={props.windowWidth}
        ></Side>
      </div>
    </>
  );
}

export default Stream;
