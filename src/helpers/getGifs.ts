import { Data, Gif, SearchRespone } from "./gif-search-respone.model";

export const getGifsResponse = async(category: string): Promise<Gif[]> => {
  const apiKey = 'ew8lnnoTuqmbtoIqlz34IA5TrYydPhCH'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json() as SearchRespone;

  return data.map((img: Data): Gif => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  

}