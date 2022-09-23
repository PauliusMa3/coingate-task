import styled from 'styled-components';

const Footer = styled.footer`
	display: flex;
	padding: 10.5rem;
	display: flex;
	gap: 1.6rem;
	align-items: center;
	flex-direction: column;
	background: var(--color-white);
	color: var(--color-gray-500);

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 4rem;
	}
`;

const SocialIconContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, auto);
	gap: 1.6rem;
	justify-content: center;
`;

export { Footer, SocialIconContainer };
