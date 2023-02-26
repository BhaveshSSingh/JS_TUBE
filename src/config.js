export const baseURL = "https://youtube.googleapis.com/youtube/v3";

export const fetchSearchedVids = async (
  setSearchVideos,
  query,
  selectedTag
) => {
  const result = await fetch(
    `${baseURL}/search?part=snippet&maxResults=25&q=${
      query || selectedTag
    }&key=${import.meta.env.VITE_REACT_APP_API_KEY}`
  );
  const data = await result.json();
  setSearchVideos(data);
};

export const fetchRecommendedVids = async (setRecommendedVids, id) => {
  const result = await fetch(
    `${baseURL}/search?part=snippet&maxResults=25&relatedToVideoId=${id}&type=video&key=${
      import.meta.env.VITE_REACT_APP_API_KEY
    }`
  );
  const data = await result.json();
  setRecommendedVids(data);
};

export const avatars = [
  "micah",
  "avataaars",
  "adventurer",
  "big-ears",
  "big-smile",
  "bottts",
  "croodles",
  "fun-emoji",
  "lorelei",
  "miniavs",
  "open-peeps",
  "personas",
  "pixel-art",
  "thumbs",
];
