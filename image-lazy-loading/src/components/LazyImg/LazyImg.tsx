import React, { useState, FC } from 'react';
import classNames from 'classnames';
import './LazyImg.css';

type LazyImgProps = {
  src: string;
  className?: string;
  alt?: string;
  fallback: string;
};

const LazyImg: FC<LazyImgProps> = ({ src, className, alt, fallback }) => {
  const [imgLoaded, setLoaded] = useState(false);

  const handleImgLoaded = () => setLoaded(true);

  return (
    <picture className="lazy-img">
      {!imgLoaded && (
        <img
          src={fallback}
          className={classNames(className, 'lazy-img__fallback')}
          alt={alt}
        />
      )}
      <img src={src} className={className} alt={alt} onLoad={handleImgLoaded} />
    </picture>
  );
};

export default LazyImg;
