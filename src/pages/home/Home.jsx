import BottomSelector from "../../components/bottomSelector/BottomSelector";
import BottomSlider from "../../components/bottomSlider/BottomSlider";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Notifications from "../../components/notifications/Notifications";
import Slider from "../../components/slider/Slider";
import TopSelector from "../../components/topSelector/TopSelector";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Chart />
      <Notifications />
      <Slider />
      <TopSelector />
      <BottomSelector />
      <BottomSlider />
    </div>
  );
};

export default Home;
