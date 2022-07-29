import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Form from "./components/Form";
import PopUp from "./components/popUp";

const API_URL = "http://localhost:3001/movies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const movies = await res.json();
      setMovies(movies);
      // console.log(movies);
      setLoading(false);
      setError("");
    } catch {
      setLoading(false);
      setError(error.message);
    }
  };
  const addMovie = (newMovie) => {
    let newArr = [];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    };
    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        newArr = [...movies, data];
        setMovies(newArr);
      });
  };

  function removeMovie(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getMovies();
      });
  }

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      <Form addMovie={(e) => addMovie(e)} />
      <div className="bottom">
        <h4 className="title">لیست فیلم</h4>
        <div className="bottomContainer">
          <table>
            <thead>
              <tr className="firstRow">
                <th>ردیف</th>
                <th>نام فیلم</th>
                <th>کارگردان</th>
                <th>ژانر فیلم</th>
                <th>سال ساخت</th>
                <th>توضیحات</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr className="secondRow" key={movie.id}>
                  <td></td>
                  <td>{movie.movieName}</td>
                  <td>{movie.director}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.productionYear}</td>
                  <td>
                    <button
                      className="explain"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      توضیحات
                    </button>
                  </td>
                  <td>
                    <button
                      className="omitBtn"
                      onClick={() => removeMovie(movie.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <PopUp />
    </div>
  );
};

export default App;
