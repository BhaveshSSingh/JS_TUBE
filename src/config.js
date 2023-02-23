export const key = "AIzaSyBDbwERy-VhX1FhWHIiPdxUYbTCK7mzIyc";
export const key2 = "AIzaSyDnlz0tCI_ISktcSMzRAhC0XrNqGD7aYbc";
export const key3 = "AIzaSyC5H3wHXKl8D_skESdlo-JiTf--WxGPEKw";

export const baseURL = "https://youtube.googleapis.com/youtube/v3";

export const fetchSearchedVids = async (
  setSearchVideos,
  query,
  selectedTag
) => {
  const result = await fetch(
    `${baseURL}/search?part=snippet&maxResults=25&q=${
      query || selectedTag
    }&key=${key}`
  );
  const data = await result.json();
  setSearchVideos(data);
};
//
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
