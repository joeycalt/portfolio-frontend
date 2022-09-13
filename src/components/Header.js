import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1 className="main">My Portfolio</h1>
      <nav style={navStyle} className="nav">
        <Link to="/">
          <div className="nav-link">HOME</div>
        </Link>
        <Link to="/about">
          <div className="nav-link">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="nav-link">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;