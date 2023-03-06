import { XIcon } from "@heroicons/react/outline";
import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "atoms/modalAtom";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useRecoilState, useRecoilValue } from "recoil";
import { Element, Genre } from "typings";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [trailer,setTrailer]=useState('')
  const [genre,setGenre]=useState<Genre[]>([])
  const [muted,setMuted]=useState(true)
  const handleClose = () => {
    setShowModal(false);
  };
  const [movie, setMovie] = useRecoilState(movieState);
  useEffect(() => {
    if (!movie) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      console.log(data);
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data?.videos.results[index]?.key)
      }
      if (data?.genres) {
        setGenre(data.genres)
      }
    }
    fetchMovie();
  }, [movie]);

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton h-9 w-9 !z-40 bg-[#181818] border-none absolute right-5 top-5 hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6"></XIcon>
        </button>
        <div className="">
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
