import PropTypes from "prop-types";

const SearchBar = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-full w-full p-3 outline-none bg-transparent rounded font-poppins text-slate-500 "
    />
  );
};

export default SearchBar;
