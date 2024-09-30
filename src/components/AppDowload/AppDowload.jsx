import { assets } from "../../assets/assets";
import "./AppDowload.css";

const AppDowload = () => {
  return (
    <div className="app-dowload" id="app-dowload">
      <p>
        For Better Experience Dowload <br /> Tomato App
      </p>
      <div className="app-dowload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDowload;
