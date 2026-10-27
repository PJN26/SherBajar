import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5">
        <div className="col p-3">
          <img src="media/images/smallcaselogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col p-3">
          <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col p-3">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">options trading platform</p>
        </div>
      </div>
      <div className="row">
        <div className="col p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col p-3">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Bomds trading platform</p>
        </div>
        <div className="col p-3">
          <img src="media/images/dittoLogo.png" style={{ width: "35%" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>
      </div>
      <div>
        <button className="p-2 mb-5 btn btn-primary fs-5" style={{width: "20%", margin: "0 auto"}}>Signup now</button>
      </div>
    </div>
  );
}

export default Universe;
