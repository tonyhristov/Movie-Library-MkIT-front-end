import React, { useContext , useState} from "react";
import getNavigation from "../../utils/navigation";
import styles from "./index.module.css";
import LinkComponent from "../link";
import UserContext from "../../context";
import getMovies from "../../utils/getMovies";
import Input from "../input";
import Button from "../button";

const Header = () => {
  const [movie, setMovie] = useState("");
  const context = useContext(UserContext);
  const { user } = context;
  const links = getNavigation(user);

  const handleSubmit = async (event) =>{
    event.preventDefault();

   const MoviesPromise = await getMovies(movie)
    
  }

  return (
    <header className={styles.navigation}>
      <div >
        {links.map((navElement) => {
          return (
            <LinkComponent
              key={navElement.title}
              href={navElement.link}
              title={navElement.title}
              type={"header"}
            />
          );
        })}
      </div>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
        <Input id="header-search" placeholder="search movies"
        onChange={(e) => setMovie(e.target.value)} 
        type="text" />
        <Button text="Search"/>
        </form>
      </div>
      
    </header>
  );
};

export default Header;