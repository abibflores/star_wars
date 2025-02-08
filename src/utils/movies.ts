const titles: { [key: number]: string } = {
  1: "Episode I",
  2: "Episode II",
  3: "Episode III",
  4: "Episode IV",
  5: "Episode V",
  6: "Episode VI",
};
export const buildPathImageUrl = (episodeId: number) => {
  const url = `/images/${episodeId}.webp`;

  return url;
};

export const getEpisodeNumber = (episodeId: number): string => {
  return titles[episodeId];
};

export const getMovieId = (url: string): string => {
  const id = url.match(/\d+/) || 1;
  return String(id);
};
