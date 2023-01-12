import React from "react";
import "./Ordersummary.css";
import headersvg from "../assests/images/illustration-hero.svg";
import musicimg from "../assests/images/icon-music.svg";
function OrderSummary() {
  return (
    <section>
      <div className="ordercomp flex">
        <div>
          <img src={headersvg} alt="header-hero" className="headerHero" />
        </div>
        <div className="summary flex">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!{" "}
          </p>
          <div className="pricingCard">
            <img src={musicimg} alt="musicimage" />
            <div className="plan">
              <h2>
                <b>Annual Plan</b>
              </h2>
              <h3>$59.99/year</h3>
            </div>
            <a href="http://localhost:3000/"> change</a>
          </div>
          <button className="btn-payment">Proceed to Payment</button>
          <h4>Cancel Order</h4>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
