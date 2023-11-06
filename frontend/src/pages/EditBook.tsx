import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const [title, setTitle] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [publishYear, setPublishYear] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        alert("An error happened, Please check console");
        console.log(error.message);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error: any) => {
        setLoading(false);
        alert("An error happened. Please cheeck the console");
        console.log(error.message);
      });
  };

  return (
    <div className="show-profile">
      <div>
        <h1>Edit Book</h1>
        {loading ? <Spinner /> : ""}
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-title"
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input-title"
          />
        </div>
        <div>
          <label>Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) =>
              setPublishYear(e.target.value as unknown as number)
            }
            className="input-title"
          />
        </div>
        <button onClick={handleEditBook}>Edit</button>
      </div>
      <div className="back-button">
        <BackButton />
      </div>
    </div>
  );
};

export default EditBook;
