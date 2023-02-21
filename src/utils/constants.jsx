import { 
  MdCode, 
  MdHome,
  MdLibraryMusic,
  MdCastForEducation,
  MdPodcasts,
  MdOutlineMovie,
  MdGames,
  MdLiveTv,
  MdSportsBar,
  MdMenu,
} from "react-icons/md";

export const categories = [
  { name: 'Home', icon: <MdHome className="text-2xl" /> },
  { name: 'Bogulz Tv', icon: <MdCode className="text-2xl" /> },
  { name: 'Coding', icon: <MdCode className="text-2xl" /> },
  { name: 'Music', icon: <MdLibraryMusic className="text-2xl" /> },
  { name: 'Education', icon: <MdCastForEducation className="text-2xl" /> },
  { name: 'Podcast', icon: <MdPodcasts className="text-2xl" /> },
  { name: 'Movie', icon: <MdOutlineMovie className="text-2xl" /> },
  { name: 'Gaming', icon: <MdGames className="text-2xl" /> },
  { name: 'Live', icon: <MdLiveTv className="text-2xl" /> },
  { name: 'Sport', icon: <MdSportsBar className="text-2xl" /> },
  { name: 'Fashion', icon: <MdSportsBar className="text-2xl" /> },
];
