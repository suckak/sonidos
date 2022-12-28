import './Footer.scss';

function Footer() {
  return (
    <footer className='social-footer'>
      <div className='social-footer-left'>
        <p>Daniel Gutiérrez</p>
      </div>
      <div className='social-footer-icons'>
        <ul className='menu simple'>
          <li>
            <a href='https://www.instagram.com/suckak/'>
              <i className='fa fa-instagram' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/suckak'>
              <i className='fa fa-github' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/Suckak'>
              <i className='fa fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
