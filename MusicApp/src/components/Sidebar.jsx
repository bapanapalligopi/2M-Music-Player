import { useNavigate, useParams } from "react-router";
import { albumsData, assets } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../content/PlayerContext";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* home and search button */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home icon" />
          <p className="font-bold">Home</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Most Played Albums</p>
          </div>
        </div>
        <div className="p-4  m-2 w-[100%] rounded font-semibold flex flex-col justify-start items-start gap-1 pl-4 hover:bg-[#ffffff26]">
          <div
            className="flex flex-col w-[50%] h-[10%] cursor-pointer"
            onClick={() => navigate(`/album/${1}`)}
          >
            <img src={albumsData[0].image} alt="" className="w-[100%] h-[1%]" />
            <p className="font-bold text-justify text-center">
              {albumsData[0].name}
            </p>
          </div>
        </div>
        <div className="p-4  m-2 w-[100%] rounded font-semibold flex flex-col justify-start items-start gap-1 pl-4 hover:bg-[#ffffff26]">
          <div
            className="flex flex-col w-[50%] h-[10%] cursor-pointer"
            onClick={() => navigate(`/album/${4}`)}
          >
            <img src={albumsData[4].image} alt="" className="w-[100%] h-[1%]" />
            <p className="font-bold text-justify text-center">
              {albumsData[4].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
