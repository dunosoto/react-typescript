import { useEffect, useState } from "react";
import { getGifsResponse } from "../helpers/getGifs";
import { Gif } from "../helpers/gif-search-respone.model";



export const 
useFetchGifs = (category: string): {gifs: Gif[], isLoading: boolean} => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getGifs = async() => {
    const newImages: Gif[] = await getGifsResponse(category);
    setGifs(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getGifs();
  }, []);

  return { gifs, isLoading };
}
