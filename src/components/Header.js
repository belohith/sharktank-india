import stilogo from "./stilogo.png";
import styles from "./style.css"

import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#0f8bb9",
          fontFamily: "Impact",
          paddingBottom: "5px",
          paddingTop: "5px",
          fontSize: "150%",
        }}
      >
        <Link to='#home' className= "nav-item">HOME</Link>
        <Link to='#seasons' className= "nav-item">SEASONS</Link>
        <Link to='#sharks' className= "nav-item">SHARKS</Link>
      </div>
    </div>
  );
}

export default Header;
