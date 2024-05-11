import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => {
            return (
              <SongItem
                key={index}
                name={song.name}
                desc={song.desc}
                image={song.image}
                id={song.id}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">English Top 8</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => {
            return (
              <SongItem
                key={index}
                name={song.name}
                desc={song.desc}
                image={song.image}
                id={song.id}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Telugu Top 8</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => {
            return (
              <SongItem
                key={index}
                name={song.name}
                desc={song.desc}
                image={song.image}
                id={song.id}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Hindi Top 8</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => {
            return (
              <SongItem
                key={index}
                name={song.name}
                desc={song.desc}
                image={song.image}
                id={song.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
