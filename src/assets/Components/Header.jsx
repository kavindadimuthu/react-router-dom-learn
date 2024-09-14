import { Link } from 'react-router-dom';

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  };
  
  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };
  
  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };
  
  const navItemStyle = {
    marginLeft: '20px',
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <h1>My Website</h1>
      </div>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}



