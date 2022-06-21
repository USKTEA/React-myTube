import React, { useEffect } from "react";

function Modal(props) {
  let clipTime;
  const error = "no url";
  switch (props.clickedIcon) {
    case "sword":
      clipTime =
        "clip=UgkxMi5Qd-P2xrgz3k0EFnUHwhMcM8WYnPrL&amp;clipt=ELifARiYngM";
      break;

    case "magicStick":
      clipTime =
        "clip=Ugkxlr0FLY3OrrOB9LroqmMcAM3jnJeOG-RI&amp;clipt=END6Bhjzywg";
      break;

    case "theif":
      clipTime =
        "clip=UgkxFDgtuvwHYhE0unNlAaju2nhNsPiT5wjU&amp;clipt=ELjTFBjZ-BU";
      break;

    case "bow":
      clipTime = "UgkxwzpIPHpzE-VVrkaZK_xH1MgVjrNsLxIT&amp;clipt=EKmEDhinzA8";
      break;

    case "pirate":
      clipTime = "UgkxIbiGGBoK_mkQsDj1iTfCrJu9rmA6P7gV&amp;clipt=EKOsFhjOgRg";
      break;

    default:
      throw error;
  }

  useEffect(() => {
    const modal = document.body.querySelector(".modal-wrapper");
    document.body.style.overflow = "hidden";
    modal.addEventListener("click", () => props.handleClick());

    return () => {
      document.body.style.overflow = "unset";
      modal.removeEventListener("click", () => props.handleClick());
    };
  }, [props]);

  const iconVideo = (
    <iframe
      className="video"
      title="video"
      src={`https://www.youtube.com/embed/fiOAuDbShbI?autoplay=1&controls=0&clip=${clipTime}/`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="modal-wrapper">
      <div className="modal-body">{iconVideo}</div>
      {props.children}
    </div>
  );
}

export default Modal;
