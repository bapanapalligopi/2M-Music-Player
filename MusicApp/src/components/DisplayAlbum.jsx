import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../content/PlayerContext";
import { SlLike } from "react-icons/sl";
import logo from "../assets/logo.png";
const DisplayAlbum = () => {
  const { playWithId } = useContext(PlayerContext);
  // /album/:id
  const { id } = useParams();
  const album = albumsData[id];
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={album.image} alt="" className="w-48 rounded " />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4 className="">{album.desc}</h4>
          <p className="mt-1">
            <div className="flex flex-row gap-1">
              <img src={logo} alt="" className="inline-block w-10" />
              <b> 2M Music</b>
              <SlLike className="bg-black mt-1" />
              1,323,154.
            </div>{" "}
            <p className="font-bold"> 50 songs, about 2hr 40 min play time.</p>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4 ">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => {
        return (
          <div
            onClick={() => playWithId(item.id)}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            key={index}
          >
            <p className="text-white ">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                src={item.image}
                alt=""
                className="inline w-10  mr-5 rounded"
              />
              {item.name}
            </p>
            <p className="text-[15px]">{album.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAlbum;
