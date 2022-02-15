import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ca6344V3cg2yeIl90xWaFCalHffBCN4p`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs);
    }

  return (
    <div>
        <h3>{category}</h3>
        {
            images.map( img => (
                <GifGridItem key={img.id} {...img} />
            ))
        }
    </div>
  )
}
