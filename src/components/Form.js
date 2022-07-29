import { useState } from "react";

const initialData = {
  movieName: "",
  year: "",
  director: "",
  description: "",
  genre: "وحشت/هیجانی",
};
const Form = ({ addMovie }) => {
  const [FormData, setFormData] = useState(initialData);

  const clearInputs = (e) => {
    e.preventDefault();
    setFormData(initialData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    console.log("in handle submit");
    e.preventDefault();
    const newMovie = {
      movieName: movieName,
      director: director,
      genre: genre,
      productionYear: year,
    };
    addMovie(newMovie);
    setFormData(initialData);
  };

  const { movieName, year, director, description, genre } = FormData;
  return (
    <>
      <form>
        <div className="topColor"></div>
        <div className="container">
          <div className="firstCol">
            <div className="label">
              <div className="labelSign">
                {" "}
                <p className="inputSign"></p>
                <label className="desLabel"> توضیحات</label>
              </div>
              <textarea
                name="description"
                value={description}
                placeholder="توضیحات درباره فیلم"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="formBtn">
              <button className="cancel" onClick={(e) => clearInputs(e)}>
                انصراف
              </button>
              <button className="save" onClick={(e) => handleFormSubmit(e)}>
                ذخیره
              </button>
            </div>
          </div>
          <div className="secondCol">
            <div className="label">
              <div className="labelSign">
                <p className="inputSign"></p>
                <label>ژانر فیلم</label>
              </div>
              <select
                name="genre"
                value={genre}
                onChange={(e) => handleChange(e)}
              >
                <option>وحشت/هیجانی</option>
                <option>وحشت</option>
                <option>هیجانی</option>
              </select>
            </div>
            <div className="label">
              <div className="labelSign">
                <p className="inputSign"> </p>
                <label>کارگردان</label>
              </div>
              <input
                type="text"
                value={director}
                name="director"
                placeholder="نام کارگردان را وارد کنید"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
          <div className="thirdCol">
            <div className="label">
              <div className="labelSign">
                <p className="inputSign"></p>
                <label>نام فیلم</label>
              </div>
              <input
                type="text"
                value={movieName}
                name="movieName"
                placeholder="نام فیلم را بنوبسید"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="label">
              <div className="labelSign">
                <p className="inputSign"></p>
                <label>سال تولید</label>
              </div>
              <input
                type="text"
                value={year}
                name="year"
                placeholder="سال ساخت فیلم را وارد کنید"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
