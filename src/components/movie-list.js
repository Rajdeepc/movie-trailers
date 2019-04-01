import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import {RenderGridItem} from './gridItem';
import { NavBar } from './navbar';

const proxyToBypassCors = "https://cors-anywhere.herokuapp.com/";
const api = "https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs";
const bookmyshowUrl = `${proxyToBypassCors+api}`;

const mock =  "http://demo6727947.mockable.io/getdata"
export const MovieList = () => {
  const [languageList, setlanguageList] = useState([]);
  const [movieList, setmovieList] = useState({});

  useEffect(() => {
    axios
      .get(bookmyshowUrl)
      .then(data => {
        setlanguageList(data.data[0]);
        setmovieList(data.data[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const GetMovieData = () => {
    let newMovieListArray = [];
    for (var key in movieList) {
      newMovieListArray.push(movieList[key]);
    }
    return newMovieListArray;
  };

  const childRef = useRef();


  return (
    <div>
        <NavBar languageList={languageList} ref={childRef}></NavBar>
      <div className="gridWrapper">
            <RenderGridItem movieList={GetMovieData()} ref={childRef} />
      </div>
    </div>
  );
};
