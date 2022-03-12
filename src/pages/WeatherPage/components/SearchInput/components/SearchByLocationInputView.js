import cancelImg from "../../../../../static/imgs/cancel.svg";

import "../searchByLocation.scss";

export const SearchByLocationInputView = ({
	handleChange,
	city,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit} className="search">
			<input
				className="search__input"
				type="text"
				name="searchByLocation"
				placeholder="Enter your location"
				onChange={handleChange}
				value={city}
			/>
			<img className="search__cancel" src={cancelImg} alt="cancel" />
		</form>
	);
};
