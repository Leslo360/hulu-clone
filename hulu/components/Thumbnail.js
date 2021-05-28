import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef, useState } from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import HoverVideoPlayer from "react-hover-video-player";
import { useToasts } from "react-toast-notifications";

const Thumbnail = forwardRef(({ result }, ref) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const { addToast } = useToasts();

  const handleClick = (result) => {
    console.log(result);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(result?.original_name || result?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(url);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          setTrailerUrl("");
          // alert("Trailer not available at the moment");
          addToast("Trailer not available at the moment", {
            appearance: "error",
          });
        });
    }
  };

  const opts = {
    height: "340",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50 "
    >
      <HoverVideoPlayer
        videoSrc=""
        pausedOverlay={
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            onMouseOver={() => handleClick(result)}
            layout="responsive"
            height={1080}
            width={1920}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
          </div>
        }
      />

      <div className="p-2">
        <p className="max-w-md truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} ▪️`}{" "}
          {result.release_date || result.first_air_date} ▪️{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
