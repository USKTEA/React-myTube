import Button from "./Button";
import Side from "./Side";

function Stream(props) {
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

  return (
    <>
      <div className="video-page">
        <div className="video-comment-wrapper">
          <iframe
            className="video"
            title="video"
            src={`https://www.youtube.com/embed/${videoid}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
        </div>
        <Side
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