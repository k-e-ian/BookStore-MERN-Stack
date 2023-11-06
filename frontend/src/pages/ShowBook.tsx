import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { BookDetails } from "../types";

const ShowBook = () => {
  const [book, setBook] = React.useState<BookDetails | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    axios
      .get<BookDetails>(`http://127.0.0.1:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Include 'id' as a dependency to re-fetch data when the 'id' changes.

  return (
    <div className="show-profile">
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {book ? (
              <div>
                <h2 className="book-title">{book.title}</h2>
                <hr />
                <p>
                  <strong>Author: </strong>
                  {book.author}
                </p>
                <p>
                  <strong>Publish Year: </strong>
                  {book.publishYear}
                </p>
                <p>
                  <strong>Create Time: </strong>{" "}
                  {book.createdAt && new Date(book.createdAt).toString()}
                </p>
                <p>
                  <strong>Last Update Time:</strong>{" "}
                  {book.updatedAt && new Date(book.updatedAt).toString()}{" "}
                </p>
              </div>
            ) : (
              <p>Book not found</p>
            )}
          </div>
        )}
      </div>
      <div className="back-button">
        <BackButton />
      </div>
    </div>
  );
};

export default ShowBook;
