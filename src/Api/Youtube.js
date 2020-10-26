import axios from "axios";

const Key = "AIzaSyAXRW9M8nugPhxOop7FQIxu6cZU1VA8gSY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxresults: 5,
    key: Key,
  },
});
