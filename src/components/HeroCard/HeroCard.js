import styled from 'styled-components';
import { Card } from '../../commom-components/Card/Card';
import { Caption } from '../../commom-components/Caption/Caption';
import { Description } from '../../commom-components/Description/Description';
import { HeadingTwo } from '../../commom-components/HeadingTwo/HeadingTwo';
import { ButtonLink } from '../../commom-components/ButtonLink/ButtonLink';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../../shared/DesignTokens';

// Container para exibir as informações do herói
const InformationGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
	padding: ${Spaces.ONE};
	margin: ${Spaces.ONE_HALF};
	`;

// Avatar do herói com estilo de imagem de fundo
const HeroAvatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	`;

// Botão "Ver Mais"
const ButtonWrapper = styled.div`
	width: 87px;
	margin-top: ${Spaces.ONE};
	`;

export function HeroCard({ secretIdentity, name, picture, universe, id }) {
	return (
		<Card>
			<InformationGrid>
				<div>
					<Caption as="div" color={Colors.GRAY_600}>
						{secretIdentity}
					</Caption>
					<div style={{ marginBottom: Spaces.ONE }}>
						<HeadingTwo>{name}</HeadingTwo>
					</div>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Universo:</strong> {universe}
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Nota atual:</strong> -
					</Description>
				</div>
				<HeroAvatar src={picture} />
			</InformationGrid>
			<ButtonWrapper>
				<ButtonLink to={`/detalhes/${id}`}>Ver Mais</ButtonLink>
			</ButtonWrapper>
		</Card>
	);
}
