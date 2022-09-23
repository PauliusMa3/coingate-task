import { default as Cart } from '@/svg/common/cart.svg';
import { default as Logo } from '@/svg/common/logo.svg';
import * as S from './styled';

const Header = () => {
	return (
		<S.Header>
			<Logo />
			<Cart />
		</S.Header>
	);
};

export default Header;
