import { json } from "remix";
const ogs = require('open-graph-scraper');
import ky from 'ky';

export async function loader({
  params,
  request,
}) {
  try {
    const options = { url: params.url };
    const { error, result } = await ogs(options)
    if (error) {
      return { statusCode: 500, body: JSON.stringify({message: error.toString()}) }
    } 

    const ogImage = result.ogImage
    let url;
    if (Array.isArray(ogImage)) url = ogImage[0].url
    else url = ogImage.url
    const imageType = result.ogImage?.type
    console.log(result)
    const image = await ky.get(url)

    return new Response(image.body, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  } catch (error: any) {
    return { statusCode: 500, body: JSON.stringify({message: error.toString()}) }
  }
}