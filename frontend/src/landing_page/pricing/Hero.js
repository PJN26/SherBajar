import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <div className="row border-bottom p-5">
        <h1>Pricing</h1>
        <p className="text-muted mt-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row p-5">
        <div className="col p-5">
          <img src="media/images/pricing0.svg" style={{ width: "80%" }} />
          <h1 className="fs-2">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="media/images/intradayTrades.svg" style={{ width: "80%" }} />
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="media/images/pricing0.svg" style={{ width: "80%" }} />
          <h1 className="fs-2">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
