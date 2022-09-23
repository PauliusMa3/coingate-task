import { Form } from 'formik';
import styled, { css } from 'styled-components';
import { QuantityButtonVariant } from './GiftCardForm';

const QuantityButton = styled.button<{ variant: QuantityButtonVariant }>`
	background: var(--color-green);
	width: 4.8rem;
	cursor: pointer;
	${(props) => variantStyles(props.variant)};
`;

const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	color: var(--color-white);
	padding-top: 4.8rem;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 3.2rem;
	}
`;

const Button = styled.button`
	background: var(--color-green);
	margin: 0 3px;
	flex: 1;
	font-size: 1.8rem;
	height: 5rem;
	cursor: pointer;

	&:disabled {
		opacity: 0.7;
		pointer-events: none;
	}
`;

const StyledForm = styled(Form)`
	> div:nth-child(-n + 2) {
		padding-top: 2.9rem;

		@media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
			padding-top: 1.4rem;
		}
	}
`;

const variantStyles = (variant: QuantityButtonVariant) =>
	({
		[QuantityButtonVariant.INCREASE]: css`
			border-radius: 0px 50px 50px 0px;
		`,
		[QuantityButtonVariant.DECREASE]: css`
			border-radius: 4px 0px 0px 30px;
		`
	}[variant]);

export { ButtonGroup, Button, QuantityButton, StyledForm };
