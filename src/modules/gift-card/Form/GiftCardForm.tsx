import SelectInput, { Option } from '@/components/Form/Select';
import { Formik, FormikHelpers } from 'formik';
import { findCountry, getAmountOptions, getCountryOptions, sortArrayAsc } from './helpers';
import * as S from './styled';
import { GiftCardFormSchema } from './validationSchema';

export enum QuantityButtonVariant {
	INCREASE = 'increase',
	DECREASE = 'decrease'
}

interface FormValues {
	country: Option;
	amount: Option;
	quantity: number;
}

const GiftCardForm = ({ data }: any) => {
	const giftCardData = data.gift_cards;
	const sortedCountryOptions = sortArrayAsc(getCountryOptions(giftCardData));

	const intialCountry =
		findCountry(data.ip_country, giftCardData)?.countries[0] ?? sortedCountryOptions[0];

	return (
		<Formik
			initialValues={{
				country: intialCountry,
				amount: getAmountOptions(intialCountry.value, giftCardData),
				quantity: 1
			}}
			onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 500);
			}}
			validationSchema={GiftCardFormSchema}>
			{({ values, setFieldValue, isValid, isSubmitting }) => {
				const amountOptions = getAmountOptions(values.country.value, giftCardData);

				return (
					<S.StyledForm>
						<SelectInput
							label="Country"
							name="country"
							options={sortedCountryOptions}
							isDisabled={isSubmitting}
							value={values.country}
							onChange={(option: any) => {
								setFieldValue('country', option);
								setFieldValue('amount', { label: 'Select amount', value: null });
							}}
						/>
						<SelectInput
							label="Value"
							name="amount"
							options={amountOptions}
							onChange={(option: any) => {
								setFieldValue('amount', option);
							}}
							value={values.amount}
							isDisabled={isSubmitting}
						/>
						<S.ButtonGroup>
							<S.QuantityButton
								type="button"
								variant={QuantityButtonVariant.DECREASE}
								onClick={() => {
									if (values.quantity > 1) {
										setFieldValue('quantity', values.quantity - 1);
									}
								}}>
								-
							</S.QuantityButton>
							<S.Button
								disabled={!isValid || isSubmitting}
								type="submit">{`Add ${values.quantity} to Basket`}</S.Button>
							<S.QuantityButton
								variant={QuantityButtonVariant.INCREASE}
								type="button"
								onClick={() => setFieldValue('quantity', values.quantity + 1)}>
								+
							</S.QuantityButton>
						</S.ButtonGroup>
					</S.StyledForm>
				);
			}}
		</Formik>
	);
};

export default GiftCardForm;
