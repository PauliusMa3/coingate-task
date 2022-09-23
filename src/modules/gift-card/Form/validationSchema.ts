import * as Yup from 'yup';

const GiftCardFormSchema = Yup.object({
	country: Yup.object().shape({
		label: Yup.string().required(),
		value: Yup.string().required()
	}),
	amount: Yup.object().shape({
		label: Yup.string().required(),
		value: Yup.object().shape({
			denominator: Yup.number().required(),
			currency: Yup.string().required()
		})
	}),
	quantity: Yup.number().integer().required()
});

export { GiftCardFormSchema };
