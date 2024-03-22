import React from "react";

const Shimmer = () => {
  let shimmerCards = [];
  for (i = 0; i < 15; i++) shimmerCards.push(<ShimmerContent />);
  return <div className="shimmer-container">{shimmerCards}</div>;
};

function ShimmerContent() {
  return (
    <>
      <div className="shimmer-card">
        <div className="shimmer shimmer-image"></div>

        <div className="shimmer-info">
          <h3 className="shimmer"></h3>
          <p className="shimmer"></p>
          <div className="shimmer-group">
            <p className="shimmer"></p>
            <span></span>
            <p className="shimmer"></p>
            <span></span>
            <p className="shimmer"></p>
          </div>

          <button className="shimmer-btn shimmer"></button>
        </div>
      </div>
    </>
  );
}

export default Shimmer;
