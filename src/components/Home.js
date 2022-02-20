import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <Link to="/nasaphoto" className="home-link">
        see into the stars
      </Link>
    </div>
  );
};
