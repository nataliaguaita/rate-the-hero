import { Box, Flex, Grid } from '@chakra-ui/react';
import { HeroCardLoader } from '../components/HeroCard/HeroCardLoader';
import { SearchField } from '../common-components/SearchField/SearchField';
import { HeroCard } from '../components/HeroCard/HeroCard';
import { Alert } from '../common-components/Alert/Alert';
import { useHeroes } from '../hooks/useHeroes';
import { Button } from '../common-components/Button/Button';

export function Search() {
	const {
		heroes,
		isLoadingHeroes,
		handleUpdateSearchValue,
		handleSearch,
	} = useHeroes();

	return (
		<>
			{/* Container */}
			<Box width="100%" maxWidth="600px" height="50px" margin="3rem auto 4rem auto" padding="0 1rem">
				<Flex justifyContent="space-between" alignItems="center">
					{/* Search Input and Button */}
					<Flex alignItems="center">
						<SearchField
							placeholder="Digite um nome de herói"
							onChange={handleUpdateSearchValue}
						/>
						<Button onClick={handleSearch}>Buscar</Button>
					</Flex>
				</Flex>
			</Box>

			{/* Alert for no results */}
			{!isLoadingHeroes && heroes?.error ? (
				<Box width="100%" maxWidth="600px" margin="3rem auto 4rem auto">
					<Alert>
						Nenhum registro de herói ou heroína foi encontrado.
					</Alert>
				</Box>
			) : (
				// Heroes Grid
				<Grid
					templateColumns="1fr"
					gap="1.5rem"
					padding="1rem 2rem"
					// Responsividade para dispositivos maiores
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
				</Grid>
			)}
		</>
	);
}
