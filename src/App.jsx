import './App.css';
import Button from './components/Button';

const sounds = [
  { name: 'Drum roll', soundDir: '/drum-roll.mp3' },
  { name: 'Felicidades', soundDir: '/felicidades.mp3' },
  { name: 'Aplauso', soundDir: '/short-claps.mp3' },
  { name: 'Aplausos', soundDir: '/long-claps.mp3' },
];

function App() {
  return (
    <>
      <div className='App'>
        <h1>Sonidos</h1>
        <div className='buttons-container'>
          {sounds.map((sound) => (
            <Button
              key={sound.soundDir}
              name={sound.name}
              soundDir={sound.soundDir}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
