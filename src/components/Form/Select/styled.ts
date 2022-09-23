import Select from 'react-select';
import styled from 'styled-components';

const SelectContainer = styled.div`
	display: grid;
	gap: 1.2rem;
`;

const Label = styled.label`
	font-size: 1.6rem;
	line-height: 1.6rem;
	text-transform: uppercase;
	color: var(--color-text-label);
`;

const StyledSelect = styled(Select)`
	.Select__menu {
		color: red;
	}
`;

export { SelectContainer, Label, StyledSelect };
