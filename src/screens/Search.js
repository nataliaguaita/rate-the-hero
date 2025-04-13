import { Alert } from "../commom-components/Alert/Alert";
import { Button } from "../commom-components/Button/Button";
import { ButtonLink } from "../commom-components/ButtonLink/ButtonLink";
import { Caption } from "../commom-components/Caption/Caption";
import { Card } from "../commom-components/Card/Card";
import { Description } from "../commom-components/Description/Description";
import { Header } from "../commom-components/Header/Header";
import { HeadingOne } from "../commom-components/HeadingOne/HeadingOne";
import { HeadingTwo } from "../commom-components/HeadingTwo/HeadingTwo";
import { SearchField } from "../commom-components/SearchField/SearchField";
import { SelectField, Option } from "../commom-components/SelectField/SelectField";
import { Subtitle } from "../commom-components/Subtitle/Subtitle";
export function Search() {
	return (<div>
		<Header />
		<SearchField placeholder = "Digite um nome de herói ou heroína" />
		<Button>Buscar</Button>
		<Card>
			<HeadingOne>HeadingOne</HeadingOne>
			<HeadingTwo>HeadingTwo</HeadingTwo>
			<div>
				<Subtitle>Subtitle</Subtitle>
			</div>
			<Description>Description</Description>
			<div>
				<Caption>Capition</Caption>
			</div>
		</Card>
		<ButtonLink>Ver Mais</ButtonLink>
		<SelectField placeholder = "Nota">
			<Option>Opção 1</Option>
		</SelectField>
		<Alert type="info">Nenhum herói ou heroína encontrado</Alert>
		<Alert type="success" small={true}>Sua avaliação doi atribuída com sucesso!</Alert>
		<Alert type="error" smal={true}>Ocorreu um erro ao avaliar!</Alert>
	</div>
	);
}