import { Gif } from "../helpers/gif-search-respone.model";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

interface GifGridProps {
  category: string;
}

export const GifGrid = ({category}: GifGridProps): JSX.Element => {

  const {gifs, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      { isLoading && ( <h2>Cargando...</h2> ) }
      <div className="card-grid">
        {
          gifs.map((gif: Gif) => (
            <GifItem key={gif.id} {...gif} />
          ))
        }
      </div>
    </>
  );
}
