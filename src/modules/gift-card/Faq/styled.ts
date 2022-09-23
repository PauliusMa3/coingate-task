import styled from 'styled-components';

const Title = styled.h3``;

const FaqContainer = styled.div`
	padding: 13.5rem 0;
	display: grid;
	gap: 1.6rem;
	width: 100%;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 8rem 0;
	}
`;

const Item = styled.details`
	box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y) var(--box-shadow-blur)
		var(--box-shadow-color);
	padding: 2rem 2.8rem;

	dsummay::-webkit-details-marker {
		display: none;
	}

	summary {
		display: flex;

		&::-webkit-details-marker {
			display: none;
		}
	}
`;

export { Title, FaqContainer, Item };
