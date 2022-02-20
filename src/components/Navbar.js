import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="link">
          Take me Home
        </Link>
      </ul>
    </div>
  );
};
