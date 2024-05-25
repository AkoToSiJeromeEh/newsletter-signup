import PropTypes from "prop-types";
import { iconSuccess } from "../assets";
export const List = ({ label }) => {
  return (
    <li className="flex flex-row gap-4 leading-5  items-center">
		<img className="w-6 h-5 " src={iconSuccess} alt="icon" /> {label}
    </li>

  );
};
List.propTypes = {
  label: PropTypes.string,
};
