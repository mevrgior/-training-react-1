import uglyImg from '../../assets/react-core-concepts.png';
import './Header.css'
import ReactIcon from './react-icon';

const descriptions = ['Fundamental', 'Good', 'Crucial'];

function randomIndex(max){
  return Math.floor(Math.random() * (max + 1 ));
}

export default function Header() {
  const randomDescription = descriptions[randomIndex(2)];
  return (
    <header>
      <ReactIcon />
    {/* <img src={uglyImg} alt="Stylized atom" /> */}
    <h1>React Essentials</h1>
    <p>{randomDescription}</p>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}
