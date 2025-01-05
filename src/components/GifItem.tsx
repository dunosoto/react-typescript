import { Gif } from "../helpers/gif-search-respone.model"

interface GifProps extends Gif {};

export const GifItem = ({title, url}: GifProps): JSX.Element => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
