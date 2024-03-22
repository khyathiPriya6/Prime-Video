import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-btn"
              data-testid="closeButton"
              onClick={() => close()}
              type="button"
            >
              <IoMdClose size={20} color="#231f20" className="close-icon" />
            </button>
            <div className="modal-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
