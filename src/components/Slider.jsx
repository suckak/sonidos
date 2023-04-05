import { useState, useEffect } from 'react';
import { Howler } from 'howler';

const Slider = () => {
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  return (
    <input
      type='range'
      min={0}
      max={1}
      step={0.02}
      value={volume}
      onChange={(event) => {
        setVolume(event.target.valueAsNumber);
      }}
    />
  );
};

export default Slider;
