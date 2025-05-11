import useAxios from 'axios-hooks';

export function useHero(id) {
	const [{ data, loading, error }, getHero] = useAxios(
		id ? `/${id}` : null
	);

	function setHeroAvaliation(hero) {
		const all = JSON.parse(localStorage.getItem('heroRatings')) || {};
		all[hero.id] = hero;
		localStorage.setItem('heroRatings', JSON.stringify(all));
	}

	function getHeroAvaliation(heroId) {
		const all = JSON.parse(localStorage.getItem('heroRatings')) || {};
		return all[heroId];
	}

	return {
		hero: data,
		isLoading: loading,
		error,
		getHero,
		getHeroAvaliation,
		setHeroAvaliation,
	};
}

export function getAllHeroAvaliations() {
	const stored = JSON.parse(localStorage.getItem('heroRatings'));
	if (!stored) return [];
	return Object.values(stored);
}

