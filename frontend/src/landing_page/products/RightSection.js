import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <a style={{ textDecoration: "none" }} href={learnMore}>
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col">
          <img src={imageUrl} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
