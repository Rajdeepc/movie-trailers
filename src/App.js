import React, { useEffect, useState, Suspense } from "react";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";
import Loader from './components/loader'
import axios from "axios";
const MovieList = React.lazy(() => import ("./components/movie-list"))


const api = "http://demo6727947.mockable.io/trailers";

let languageList = [];

function App() {
  const [selectedDropDownValue, setDropDownValue] = useState("Hindi");
  const [movieData, setMovieListData] = useState([]);

  const getDropDownValueToRender = (value) => {
    console.log("language value" + value);
    setDropDownValue(value);
  };

  /**
   * @method getMovieDataFromResponse
   * @param {*} movies
   */
  const getMovieDataFromResponse = (movies) => {
    let newMovieListArray = [];
    for (var key in movies) {
      newMovieListArray.push(movies[key]);
    }
    return newMovieListArray;
  };

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        languageList = response.data[0];
        setMovieListData(getMovieDataFromResponse(response.data[1]));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar
        languageList={languageList}
        getDropdownValue={getDropDownValueToRender}
      ></NavBar>
      <div className="gridWrapper">
        <Suspense fallback={<Loader/>}>
        <MovieList
          movieData={movieData}
          selectedLanguage={selectedDropDownValue}
        ></MovieList>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
