import styled from 'styled-components';

const BoxContainer = styled.div`
	width: 100%;
`;

const GiftCardContainer = styled.div`
	background: var(--color-white);
	border-radius: 4px;
	padding: 1.6rem 4.8rem 8.3rem;
	display: grid;
	grid-template-columns: max-content minmax(0, 55rem);
	gap: 3rem;
	box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y) var(--box-shadow-blur)
		var(--box-shadow-color);

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr;
		padding: 1.6rem;
	}
`;

const BenefitsContainer = styled.div`
	margin-top: 1.6rem;
	background: var(--color-white);
	box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y) var(--box-shadow-blur)
		var(--box-shadow-color);
	padding: 4.8rem 8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
		gap: 2rem;
		padding: 2.4rem;
	}
`;

const ImageContainer = styled.div`
	width: var(--main-card-width);
	height: var(--main-card-height);
	border-radius: 8px;
	position: relative;
	overflow: hidden;
`;

const BenefitText = styled.span`
	font-weight: 500;
	margin-left: 1.6rem;
`;

const Benefit = styled.div`
	display: flex;
`;

const CardDescription = styled.p`
	max-width: 53.5rem;
	padding: 2rem 0;
`;

export {
	BoxContainer,
	CardDescription,
	BenefitsContainer,
	GiftCardContainer,
	Benefit,
	BenefitText,
	ImageContainer
};
