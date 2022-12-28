import { useState, useEffect } from 'react';
import { Howl } from 'howler';

import speaker from '../assets/speaker.svg';
import './Button.scss';

function Button(props) {
  const { name, soundDir } = props;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setSound(
      new Howl({
        src: [soundDir],
        html5: true,
        autoplay: false,
      })
    );
  }, []);

  useEffect(() => {
    if (sound) {
      sound.on('end', function () {
        setIsPlaying(false);
      });
      return () => {
        sound.off('end');
      };
    }
  }, [sound]);

  if (!sound) {
    return <p>loading...</p>;
  }

  function handleClick() {
    if (isPlaying) {
      setIsPlaying(false);
      sound.stop();
    } else {
      setIsPlaying(true);
      sound.play();
    }
  }

  return (
    <div className='button-container'>
      <img
        src={speaker}
        alt=''
        className={`honk ${isPlaying ? 'show' : 'hidden'}`}
      />
      <button onClick={handleClick} className='push--flat'></button>
      <p>{name}</p>
    </div>
  );
}

export default Button;
