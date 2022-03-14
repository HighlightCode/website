import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h3 className="display-5 pb-3 text-center">{heading}</h3>
      <p className="lead text-center pb-3">
        {message}, <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
