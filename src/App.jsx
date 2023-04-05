import { useState, useEffect } from 'react';
import { Howl } from 'howler';

import './App.css';
import Button from './components/Button';
import Slider from './components/Slider';
import { sounds } from './utils/constants';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const playAudio = (soundDir, index) => {
    if (sound && sound.playing()) {
      sound.stop();

      if (index === currentIndex) {
        setSound(null);
        setIsPlaying(false);
        return;
      }
    }

    setCurrentIndex(index);
    setSound(
      new Howl({
        src: [soundDir],
        html5: true,
        autoplay: false,
      })
    );
  };

  useEffect(() => {
    console.log('effe');
    if (sound) {
      console.log('effe sound');
      setIsPlaying(true);
      sound.play();
      sound.on('end', function () {
        setIsPlaying(false);
        setSound(null);
      });
      return () => {
        sound.off('end');
      };
    }
  }, [sound]);

  return (
    <>
      <div className='App'>
        <h1>Sonidos</h1>
        <Slider />
        <div className='buttons-container'>
          {sounds.map((sound, index) => (
            <Button
              isPlaying={isPlaying && index === currentIndex}
              key={sound.soundDir}
              name={sound.name}
              onClick={() => {
                playAudio(sound.soundDir, index);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
