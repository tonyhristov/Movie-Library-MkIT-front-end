import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./index.module.css";
import Input from "../input";
import Button from "../button";

const Search = ({ type }) => {
  const [movie, setMovie] = useState("");
  const params = useParams()
  const history = useHistory()

  const handleSubmit = async (event) =>{
    event.preventDefault();
    history.push(`/${params.userId}/search/${movie}`)
  }

  return (
        <form onSubmit={handleSubmit} className={styles[`form-${type}`]}>
        <Input id="header-search" placeholder="search movies"
        onChange={(e) => setMovie(e.target.value)} 
        type="text" />
        <Button text="Search"/>
        </form>
  );
};

export default Search;