import React from 'react';
import styled from 'styled-components';
import useAxios from 'axios-hooks';
import { HeroCardLoader } from '../components/HeroCard/HeroCardLoader';
import { Button } from '../commom-components/Button/Button';
import { SearchField } from '../commom-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
import { HeroCard } from '../components/HeroCard/HeroCard';

const Container = styled.div`
	width: 100%;
	max-width: 600px;
	height: 50px;
	margin: ${Spaces.THREE} auto ${Spaces.FOUR} auto;
	padding: 0 ${Spaces.ONE};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeroesGrid = styled.div`
	padding: ${Spaces.ONE} ${Spaces.TWO};
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		gap: ${Spaces.TWO};
	}
`;

const SearchWrapper = styled.div`
	display: flex; 
	align-items: center;
`;

export function Search() {
	const [search, setSearch] = React.useState({
		value: 'captain',
	});

	// Configuração do useAxios com 'manual: true' para não disparar automaticamente
	const [{ data: heroes, loading: isLoadingHeroes }, executeSearch] = useAxios(
		`/search/${search.value}`,
		{ manual: true } // A requisição não será disparada automaticamente
	);

	// Atualizar o valor de busca
	function handleUpdateSearchValue({ target: { value } }) {
		setSearch({ value });
	}

	// Atualizar quando o botão de busca for clicado
	function handleSearch() {
		// Aqui você dispara a requisição manualmente
		executeSearch();
	}

	return (
		<>
			<Container>
				<SearchWrapper>
					<SearchField
						placeholder="Digite um nome de herói"
						onChange={handleUpdateSearchValue}
					/>
					<Button onClick={handleSearch}>Buscar</Button>
				</SearchWrapper>
			</Container>

			{!isLoadingHeroes && heroes?.error ? (
				<Container>
					<div style={{ color: '#666' }}>
						Nenhum registro de herói ou heroína foi encontrado.
					</div>
				</Container>
			) : (
				<HeroesGrid>
					{isLoadingHeroes && (
						<>
							<HeroCardLoader />
							<HeroCardLoader />
							<HeroCardLoader />
							<HeroCardLoader />
						</>
					)}
					{!isLoadingHeroes &&
						heroes?.results?.map((hero) => (
							<HeroCard
								key={hero.id}
								id={hero.id}
								secretIdentity={hero.biography['full-name']}
								name={hero.name}
								picture={hero.image.url}
								universe={hero.biography.publisher}
							/>
						))}
				</HeroesGrid>
			)}
		</>
	);
}
