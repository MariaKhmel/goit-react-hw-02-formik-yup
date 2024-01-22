import { Box } from "./Box"
import { Component } from 'react';
import { Sticker } from "./Sticker";

export const StickerList = ({ stickers, onSelect }) => {
 
    return (
        <Box as='ul' display='flex' gridGap={4}>
  {stickers.map((sticker, index) => (
                <li key={index} >
          <Sticker sticker={sticker} onSelect={onSelect} />   
                </li>))}
        </Box>

    )
  
}
