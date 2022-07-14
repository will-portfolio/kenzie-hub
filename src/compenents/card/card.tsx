import {
	CardConteiner,
	DiscripitionConteiner,
	IconConteiner,
} from './styled';
import { FiGitPullRequest, FiCodesandbox } from 'react-icons/fi';
import { ICardProps } from './interfaces';

const Card = ({
	name,
	status,
	type,
	opemRemuveTech,
	id,
	opemRemuveTrab,
}: ICardProps) => {
	return (
		<CardConteiner>
			<IconConteiner type={type}>
				{type === 'techs' ? (
					<FiCodesandbox onClick={() => opemRemuveTech(id)} />
				) : (
					<FiGitPullRequest onClick={() => opemRemuveTrab(id)} />
				)}
			</IconConteiner>
			<DiscripitionConteiner type={type}>
				<h1>{name}</h1>
				<p>{status}</p>
			</DiscripitionConteiner>
		</CardConteiner>
	);
};

export default Card;
