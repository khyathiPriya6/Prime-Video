import './index.css'
import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  // console.log(actionMovies)
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-list-container">
        <div>
          <h1 className="movie-category">Action Movies</h1>
          <MovieSlider moviesList={actionMovies} />
        </div>
        <div>
          <h1 className="movie-category">Comedy Movies</h1>
          <MovieSlider moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
