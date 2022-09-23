import { Option } from './GiftCardForm';

export const getCountryOptions = (data: any) => {
	const countriesList: Option[] = [];

	data.map((item: any) => {
		item.countries.forEach((country: any) => {
			countriesList.push({
				label: country.label,
				value: country.value
			});
		});
	});

	return countriesList;
};

export const findCountry = (country: string | Record<any, unknown>, data: any) => {
	return data.find((item: any) => {
		if (item.countries.length === 1) return item.countries[0].value === country;
	});
};

export const getAmountOptions = (country: string | Record<any, unknown>, data: any) => {
	const amountList: Option[] = [];

	const foundCountry = findCountry(country, data);
	if (foundCountry) {
		const currency = foundCountry.currency.iso_symbol;

		if (foundCountry.digital_denominations?.length) {
			foundCountry.digital_denominations.forEach((denominator: number) => {
				amountList.push({
					label: `${denominator} ${currency}`,
					value: {
						denominator,
						currency
					}
				});
			});
		}
	}

	return amountList.length ? amountList : [{ label: 'No Options', value: null }];
};

export const sortArrayAsc = (array: Option[]) => array.sort((a, b) => (a.label > b.label ? 1 : -1));
