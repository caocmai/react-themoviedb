import "./App.css";
import Header from "./components/header/Header";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./components/about/About";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route
          exact
          path='/'
          render={(props) => <MovieList {...props} movieType='upcoming' />}
        />
        <Route path='/movie_details/:id' component={MovieDetails} />
        <Route
          path='/popular'
          render={(props) => <MovieList {...props} movieType='popular' />}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
