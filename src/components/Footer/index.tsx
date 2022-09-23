import { default as Logo } from '@/svg/common/logo.svg';
import { default as Facebook } from '@/svg/social/facebook.svg';
import { default as Instagram } from '@/svg/social/instagram.svg';
import { default as Linkedin } from '@/svg/social/linkedin.svg';
import { default as Twitter } from '@/svg/social/twitter.svg';
import * as S from './styled';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<S.Footer>
			<Logo />
			<>
				<span>{currentYear} &copy; CoinGate</span>
				<span>All Rights Reserved</span>
			</>
			<S.SocialIconContainer>
				<Instagram />
				<Facebook />
				<Twitter />
				<Linkedin />
			</S.SocialIconContainer>
		</S.Footer>
	);
};

export default Footer;
