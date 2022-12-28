import speaker from '../assets/speaker.svg';
import './Button.scss';

function Button(props) {
  const { name, onClick, isPlaying } = props;
  function handleClick() {
    onClick();
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
