import './App.css';
import Header from './components/header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/about/About';
import MovieList from './components/movie-list/MovieList';
import MovieDetails from './components/movie-details/MovieDetails';


function App() {
  return (
    <Router>

    <div className="App">
      <Header />
      {/* <h2>gitHUb pages</h2> */}
      <Route exact path="/" component={MovieList}/>
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={MovieDetails} />
    </div>
    </Router>

  );
}

export default App;
