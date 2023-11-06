import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BackButtonProps } from "../types";

const BackButton: React.FC<BackButtonProps> = ({ destination = "/" }) => {
  return (
    <div className="back-button-container">
      <Link to={destination} className="back-button">
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default BackButton;
