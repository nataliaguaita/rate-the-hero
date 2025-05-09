import styled from 'styled-components';
import { Card } from '../../commom-components/Card/Card';
import { Caption } from '../../commom-components/Caption/Caption';
import { Description } from '../../commom-components/Description/Description';
import { HeadingTwo } from '../../commom-components/HeadingTwo/HeadingTwo';
import { BorderRadiuses, Colors, Spaces } from '../../shared/DesignTokens';
import Skeleton from 'react-loading-skeleton';

const InformationGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
	padding: ${Spaces.TWO};
	margin-bottom: ${Spaces.ONE_HALF};
`;

const HeroAvatarSkeleton = styled(Skeleton)`
	width: 70px; /* Tamanho controlado */
	height: 70px;
	border-radius: ${BorderRadiuses.ONE};
`;

const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${Spaces.ONE_HALF};
`;

const SkeletonGroup = styled.div`
	margin-bottom: ${Spaces.ONE};
`;

const BottomSkeletonContainer = styled.div`
	width: 87px;
	padding: ${Spaces.ONE} ${Spaces.TWO};
`;

export function HeroCardLoader() {
	return (
		<Card>
			<InformationGrid>
				<TextGroup>
					<Caption as="div" color={Colors.GRAY_600}>
						<Skeleton delay={1000} /> {/* Delay de 1 segundo */}
					</Caption>
					<SkeletonGroup>
						<HeadingTwo>
							<Skeleton delay={1000} /> {/* Delay de 1 segundo */}
						</HeadingTwo>
					</SkeletonGroup>
					<Description as="div" color={Colors.GRAY_700}>
						<Skeleton delay={1000} /> {/* Delay de 1 segundo */}
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						<Skeleton delay={1000} /> {/* Delay de 1 segundo */}
					</Description>
				</TextGroup>
				<HeroAvatarSkeleton delay={1000} /> {/* Delay de 1 segundo */}
			</InformationGrid>
			<BottomSkeletonContainer>
				<Skeleton delay={1000} /> {/* Delay de 1 segundo */}
			</BottomSkeletonContainer>
		</Card>
	);
}
