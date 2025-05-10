import React from 'react';
import useAxios from 'axios-hooks';

export function useHeroes(initialValue = 'captain') {
	const [search, setSearch] = React.useState({ value: initialValue });

	const [{ data, loading }, executeSearch] = useAxios(
		`/search/${search.value}`,
		{ manual: true }
	);

	function handleUpdateSearchValue({ target: { value } }) {
		setSearch({ value });
	}

	function handleSearch() {
		executeSearch();
	}

	return {
		heroes: data,
		isLoadingHeroes: loading,
		searchValue: search.value,
		handleUpdateSearchValue,
		handleSearch,
	};
}