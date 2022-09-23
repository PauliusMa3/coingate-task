import { useField } from 'formik';
import * as S from './styled';

const customStyles = {
	menu: (base: any) => ({
		...base,
		fontSize: 16,
		boxShadow: '0px 4px 4px rgba(153, 153, 153, 0.16)',
		color: '#4F4F4F'
	}),
	control: (base: any, state: any) => ({
		...base,
		borderRadius: 24,
		borderColor: state.isFocused ? '#5022ED' : '#E9E9E9',
		boxShadow: 'none',
		fontSize: 16,
		lineHeight: 1.75,
		padding: '7px 12px',
		color: '#4F4F4F',
		'&:hover, &:focus': {
			borderColor: '#5022ED'
		}
	}),
	option: (base: any, state: any) => ({
		...base,
		backgroundColor: state.isSelected ? '#5022ED' : '',
		'&:hover': {
			background: '#F5F5F5'
		}
	})
};

export interface Option {
	label: string;
	value: string | Record<any, {}>;
}

interface IProps {
	label: string;
	name: string;
	options: unknown[];
	isDisabled: boolean;
	value: unknown;
	onChange: (option: Option) => void;
}

const SelectInput: React.FunctionComponent<IProps> = ({
	label,
	name,
	options,
	isDisabled,
	value,
	onChange
}) => {
	const [field, meta, helpers] = useField(name);
	const { error, touched } = meta;

	return (
		<S.SelectContainer>
			<S.Label htmlFor={name}>{label}</S.Label>
			<S.StyledSelect
				className="react-select-container"
				options={options}
				name={name}
				onChange={onChange}
				value={value}
				styles={customStyles}
				isDisabled={isDisabled}
			/>
			{touched && error ? <div className="error">{meta.error}</div> : null}
		</S.SelectContainer>
	);
};

export default SelectInput;
