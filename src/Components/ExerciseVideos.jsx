import React from "react";

const ExerciseVideos = ({ searchedVideos, name }) => {
  if (!searchedVideos.length) return "loading..";
  console.log(searchedVideos);
  return (
    <>
      <div className="text-white">{name}</div>
      <div className="flex md:grid md:grid-cols-3  xl:grid xl:grid-cols-6 flex-col">
        {searchedVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center"
          >
            <div className="bg-white flex flex-col  items-stretch rounded-xl shadow-lg md:space-y-2  m-2  ">
              <div className="items-center justify-center ">
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="w-100% h-100% object-cover rounded-t-lg"
                />
              </div>
              <div className="p-2 items-center justify-center ">
                <p className="text-center font-nav text-sm text-black">
                  {item.video.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ExerciseVideos;
