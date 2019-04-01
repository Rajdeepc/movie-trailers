import React, { useState } from 'react';
import {MovieList} from './components/movie-list';
function App() {
  // Declare a new state variable, which we'll call "count"
 // const [count, setCount] = useState(0);

  return (
    <div>
      
      <MovieList></MovieList>
    </div>
  );
}

export default App;