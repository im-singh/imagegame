import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomImage } from "../../redux/Api/api";
import { fetchImage } from "../../redux/Images/actionCreators";

function ImageBox() {
  const isPlaying = useSelector(({ gameState }) => gameState.isPlaying);
  const { imageUrl, needFetch } = useSelector(({ imageState }) => imageState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isPlaying && imageUrl === null) {
      dispatch(fetchImage());
    }
  }, []);

  useEffect(() => {
    if (needFetch) {
      dispatch(fetchImage());
    }
  }, [needFetch]);

  return (
    <div className="image-box">
      {/* <img src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" /> */}
      {imageUrl && <img data-testid="img-tag" src={imageUrl} />}
    </div>
  );
}

export default ImageBox;
