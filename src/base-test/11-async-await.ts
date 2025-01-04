
export const getImagen = async() => {
  try {

    const apiKey: string = 'ew8lnnoTuqmbtoIqlz34IA5TrYydPhCH';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json(); 

    const { url } = data.images.original;

    return url;

  } catch (error) {
    return 'Image not found.'
  }
    
}
getImagen();



