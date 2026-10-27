import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 border-top p-5">
      <div className="row">
        <div className="col-8">
          <a href="#" style={{ textDecoration: "none" }}>
            <h5 className="text-center text-primary">Brokerage Calculator</h5>
          </a>
          <ul className="text-muted mt-4 fs-7" style={{lineHeight: "2"}}>
            <li className="text-small m-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>

            <li className="text-small m-2">
              Digital contract notes will be sent via e-mail.
            </li>

            <li className="text-small m-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>

            <li className="text-small m-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>

            <li className="text-small m-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li className="text-small m-2">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="#" style={{textDecoration: "none"}}>
            <h5 className="text-center text-primary">List of charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
