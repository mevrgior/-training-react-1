import uglyImg from '../../assets/react-core-concepts.png';
import './Header.css'

const descriptions = ['Fundamental', 'Good', 'Crucial'];

function randomIndex(max){
  return Math.floor(Math.random() * (max + 1 ));
}
export default function Header() {
  const randomDescription = descriptions[randomIndex(2)];
  return (
    <header>
    <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out">
      <circle cx="0" cy="0" r="2" fill="#087ea4"></circle>
      <g stroke="#087ea4" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
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
