import { FC, memo } from "react";

import cancelImg from "../../../../../static/imgs/cancel.svg";

import "../searchByLocation.scss";

interface SearchInputProps {
	city: string;
	handleChange: () => void;
	handleCleanInput: () => void;
}

export const SearchInputView: FC<SearchInputProps> = memo(
	({ handleChange, handleCleanInput, city }) => {
		return (
			<form onSubmit={e => e.preventDefault()} className="search">
				<input
					className="search__input"
					type="text"
					name="searchByLocation"
					placeholder="Enter your location"
					onChange={handleChange}
					value={city}
				/>
				<img
					className="search__cancel"
					onClick={handleCleanInput}
					src={cancelImg}
					alt="cancel"
				/>
			</form>
		);
	}
);
