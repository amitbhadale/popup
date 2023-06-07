import React from "react";
import "./Rewards.scss";

const Rewards = () => {
  return (
    <div>
      <div className="rew-cont">
        <div className="title">
          <h3>FORDPASS REWARDS</h3>
        </div>
        <div className="rew-box">
          <div className="text-box">
            <div className="text-wrap">
              <div className="head">
                <h2>EARN POINTS AND TURN THEM INTO FUN</h2>
              </div>
              <p>
                Become a FordPass® Rewards member and start earning Points that
                can be redeemed for discounts on awesome Ford Accessories.
              </p>
              {/* if user is logged in  */}
              {/*  <div className="btnz center"> */}
              <div className="btnz">
                <a href="#" className="join">
                  Join Now
                </a>
                <a href="" className="learn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="pic">
            <img
              src="https://cdn.shopify.com/s/files/1/0518/9563/2063/files/Homepage_UnauthenticatedFS_89c73b27-99b0-4912-916c-64e78003e2d9.jpg?v=1679318041"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
