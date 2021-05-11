import axios from "axios";
import Post from "../models/Post";

const calculateTimeToRead = (words: string) : string => {
  const WPM = 275;
  return `${Math.ceil(words.split(" ").length/WPM)} min`;
}

export {
  calculateTimeToRead
}