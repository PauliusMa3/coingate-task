import styled from 'styled-components';

const Header = styled.header`
	background: var(--color-white);
	padding: 3.8rem 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y) var(--box-shadow-blur)
		var(--box-shadow-color);

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 2.4rem 3.2rem;
	}
`;

export { Header };
