import React, {Component} from "react";

const GiftList = (props) => {
  return (
    <div>
      <ul>
      {props.giflist.map( gif => {
        return <li key={gif.id}><img src={gif.images.downsized_medium.url}</li>
      }
    )}
      </ul>
      </div>
  )
}

export default GifList;
