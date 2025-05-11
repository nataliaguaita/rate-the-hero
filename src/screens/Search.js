import { useEffect, useState } from 'react';
import { Box, Container, Flex, Grid } from '@chakra-ui/react';
import { HeroCardLoader } from '../components/HeroCard/HeroCardLoader';
import { SearchField } from '../common-components/SearchField/SearchField';
import { HeroCard } from '../components/HeroCard/HeroCard';
import { Alert } from '../common-components/Alert/Alert';
import { useHeroes } from '../hooks/useHeroes';
import { Button } from '../common-components/Button/Button';
import { getAllHeroAvaliations } from '../hooks/useHero';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';

export function Search() {
	const {
		heroes,
		isLoadingHeroes,
		handleUpdateSearchValue,
		handleSearch,
	} = useHeroes();

	const [avaliatedHeroes, setAvaliatatedHeroes] = useState([]);

	useEffect(() => {
		const storedHeroes = getAllHeroAvaliations();
		setAvaliatatedHeroes(storedHeroes);
	}, []);

	const avaliatedIds = new Set(avaliatedHeroes.map((hero) => hero.id));
	const filteredSearchResults = heroes?.results?.filter(
		(hero) => !avaliatedIds.has(hero.id)
	);

	return (
		<>
			{/* Search Box */}
			<Box width="100%" maxWidth="600px" height="50px" margin="3rem auto 4rem auto" padding="0 1rem">
				<Flex justifyContent="space-between" alignItems="center">
					<Flex alignItems="center">
						<SearchField
							placeholder="Digite um nome de herói"
							onChange={handleUpdateSearchValue}
						/>
						<Button onClick={handleSearch}>Buscar</Button>
					</Flex>
				</Flex>
			</Box>

			{/* Heróis avaliados */}
			{avaliatedHeroes.length > 0 && (
				<>

				<Container>
					<HeadingTwo>Heróis avaliados recentemente</HeadingTwo>
				</Container>
					<Grid
						templateColumns="1fr"
						gap="1.5rem"
						padding="1rem 2rem"
						css={{
							'@media (min-width: 1024px)': {
								gridTemplateColumns: 'repeat(4, 1fr)',
								gap: '2rem',
							},
						}}
						>
						{avaliatedHeroes.map((hero) => {
							if (!hero?.id || !hero?.name || !hero?.image?.url) return null;

							return (
								<HeroCard
									key={hero.id}
									id={hero.id}
									secretIdentity={hero.biography?.['full-name'] || 'Desconhecido'}
									name={hero.name}
									picture={hero.image?.url || ''}
									universe={hero.biography?.publisher || 'N/A'}
								/>
							);
						})}
					</Grid>
				</>
			)}

			{/* Alerta ou resultados da busca */}
			{!isLoadingHeroes && heroes?.error ? (
				<Box width="100%" maxWidth="600px" margin="3rem auto 4rem auto">
					<Alert>
						Nenhum registro de herói ou heroína foi encontrado.
					</Alert>
				</Box>
			) : (
				<Grid
					templateColumns="1fr"
					gap="1.5rem"
					padding="1rem 2rem"
					css={{
						'@media (min-width: 1024px)': {
							gridTemplateColumns: 'repeat(4, 1fr)',
							gap: '2rem',
						},
					}}
				>
					{isLoadingHeroes && (
						<>
							<HeroCardLoader />
							<HeroCardLoader />
							<HeroCardLoader />
							<HeroCardLoader />
						</>
					)}

					{!isLoadingHeroes &&
						filteredSearchResults?.map((hero) => {
							if (!hero?.id || !hero?.name || !hero?.image?.url) return null;

							return (
								<HeroCard
									key={hero.id}
									id={hero.id}
									secretIdentity={hero.biography?.['full-name'] || 'Desconhecido'}
									name={hero.name}
									picture={hero.image?.url || ''}
									universe={hero.biography?.publisher || 'N/A'}
								/>
							);
						})}
				</Grid>
			)}
		</>
	);
}