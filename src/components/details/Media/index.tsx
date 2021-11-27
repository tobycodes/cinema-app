import React from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from 'services/movieService';
import { getVideoSource } from 'utils/getVideoSource';

import './index.scss';

const Media = () => {
  const movieImages = useSelector(({ movies }) => movies.movieImages.posters);
  const movieVideos = useSelector(({ movies }) => movies.movieVideos.results);

  return (
    <div className="media">
      <div>
        <div className="media-title">Watch Trailer</div>
        <div className="media-videos">
          {movieVideos
            .filter(({ type }) => type?.toLowerCase().includes('trailer'))
            .map(({ id, name, site, key }) => (
              <div key={id} className="video">
                <iframe
                  title={name}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={getVideoSource(site, key)}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="media-title">
          Photos ({movieImages.length > 20 ? '20' : movieImages.length})
        </div>
        <div className="media-images">
          {movieImages.slice(0, 20).map(({ file_path }) => (
            <div
              key={file_path}
              className="image-cell"
              style={{
                backgroundImage: `url(${IMAGE_URL + file_path})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
