import { useState, useRef, useEffect } from "react";

const SearchableSelect = ({ options, onChange, placeholder = "Search...", isDisabled = false }) => {
	const [search, setSearch] = useState("");
	const [, setSelected] = useState("");
	const [open, setOpen] = useState(false);
	const inputRef = useRef(null);
	const dropdownRef = useRef(null);
	const containerRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		if (!open) return;
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [open]);

	useEffect(() => {
		if (isDisabled) {
			setOpen(false);
			setSearch("");
			onChange && onChange(null);
		}
	}, [isDisabled, onChange]);

	// Filtered options based on search input
	const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()) || opt.value.toString().toLowerCase().includes(search.toLowerCase()));

	// Handle focus to show the list
	const handleFocus = () => setOpen(true);

	// Set selected when search matches an option
	useEffect(() => {
		const match = options.find((opt) => opt.label === search);
		if (match) {
			setSelected(match.value);
			if (onChange) onChange(match.value);
		} else {
			setSelected("");
			onChange && onChange(null);
		}
	}, [search, options, onChange]);

	const handleSelect = (opt) => {
		setSelected(opt.value);
		setSearch(opt.label);
		setOpen(false);
		if (onChange) onChange(opt.value);
	};

	return (
		<div ref={containerRef} className="dropdown-search-container">
			<input
				ref={inputRef}
				type="text"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setOpen(true);
					setSelected("");
				}}
				onFocus={handleFocus}
				placeholder={placeholder}
				className="inputSearch"
				autoComplete="off"
				disabled={isDisabled ? true : false}
			/>
			{open && (
				<ul ref={dropdownRef} className="dropdown-search-results">
					{filteredOptions.length === 0 ? (
						<li style={{ padding: "8px", color: "#888" }}>Aucun résultat</li>
					) : (
						filteredOptions.map((opt) => (
							<li key={opt.value} onMouseDown={() => handleSelect(opt)}>
								{opt.label}
							</li>
						))
					)}
				</ul>
			)}
		</div>
	);
};

export default SearchableSelect;
