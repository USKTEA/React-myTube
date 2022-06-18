import React from "react";

function Comments(props) {
  return (
    <div className="comments">
      {props.videoComments.map((item) => {
        return (
          <div key={item.etag} className="comments-wrapper">
            <img
              className="comments-author-profile"
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="comment-author-profile"
            />
            <div className="comments-comment">
              <span className="comments-comment-text">
                {item.snippet.topLevelComment.snippet.textOriginal}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
