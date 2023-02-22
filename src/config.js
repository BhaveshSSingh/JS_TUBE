export const key = "AIzaSyBDbwERy-VhX1FhWHIiPdxUYbTCK7mzIyc";
export const key2 = "AIzaSyDnlz0tCI_ISktcSMzRAhC0XrNqGD7aYbc";

export const baseURL = "https://youtube.googleapis.com/youtube/v3";

export const fetchSearchedVids = async (
  setSearchVideos,
  query,
  selectedTag
) => {
  const result = await fetch(
    `${baseURL}/search?part=snippet&maxResults=25&q=${
      query || selectedTag
    }&key=${key2}`
  );
  const data = await result.json();
  setSearchVideos(data);
};
