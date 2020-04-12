import React, { useState, useEffect, useRef } from "react";
import RenderGridItem from "./gridItem";

const MovieList = ({ movieData, selectedLanguage }) => {
  const [movieList, setmovieList] = useState({});

  console.log("movieData" + movieData);
  console.log("selectedLanguage" + selectedLanguage);
  const childRef = useRef();

  useEffect(() => {
    if (selectedLanguage !== undefined || selectedLanguage !== "") {
      changeMovieList(selectedLanguage);
    }
  }, [selectedLanguage, movieData]);

  const changeMovieList = (dropdownValue) => {
    const newMovieData = [...movieData];
    const filteredMovieList = newMovieData.filter(
      (item) => item.EventLanguage === dropdownValue
    );
    setmovieList(filteredMovieList);
  };

  return (
    <div>
      <RenderGridItem movieList={movieList} ref={childRef} />
    </div>
  );
};

export default MovieList;
