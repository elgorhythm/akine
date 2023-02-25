import "./chart.scss";
import chart from "../../icons/chart.png";

const Chart = () => {
  return (
    <div className="chartContainer">
      <div className="chartWrapper">
        <div className="chartTop"></div>
        <div className="chartMid">
          <img className="chartChart" src={chart} alt="Chart" />
          <div className="imgBlock"></div>
          <div className="chartContent">
            <div className="chartText">
              <span className="chartName">akine</span>
              <span className="chartDesc">Lower Lifting Cost</span>
              <span className="chartDesc">Increase Production</span>
            </div>
            <div className="chartMedia">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VQojqjCKyU8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="chartBottom"></div>
      </div>
    </div>
  );
};

export default Chart;
