import { useEffect, useState } from "react";
import "./notifications.scss";

const Notifications = () => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 6 ? -1 : prevIndex + 1)),
      // () => setIndex(index + 1),
      1000
    );
  }, [index]);

  return (
    <div className="notContainer">
      <div className="notWrapper">
        <div
          className="slide"
          style={{
            transform: `translate3d(0,${index < 0 || index > 5 ? 100 : 0}%,0)`
          }}
        >
          <span className="notText">
            Akinê assists conventional and tight oil producers to increase
            production and reduce operational costs through monitoring of well
            production, reservoir response and artificial lift performance.
          </span>
          <span className="notText">Our clients say it best:</span>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
