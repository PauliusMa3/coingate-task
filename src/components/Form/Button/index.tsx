import React from 'react';
import * as S from './styled';

const Button = ({ variant, disabled, block, children, ...rest }) => {
	return (
		<S.Button disabled={disabled} {...rest}>
			{children}
		</S.Button>
	);
};

export default Button;
