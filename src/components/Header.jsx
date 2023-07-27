import TrollFace from "../assets/Troll Face.png";

export default function Header() {
  return (
    <header>
      <img className="header--image" src={TrollFace} alt="troll face" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">🥳 React Project 🥳</h4>
    </header>
  );
}
