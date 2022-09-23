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

export const findGiftCardByCountry = (countryValue: string | Record<any, unknown>, data: any) => {
	let foundCountry;
	const foundGiftCard = data.find((item: any) => {
		const foundEntryCountry = item.countries.find((country: any) => {
			if (country.value === countryValue) {
				foundCountry = { ...country };
				return true;
			}
		});

		if (foundEntryCountry) {
			return true;
		}
	});

	return {
		foundCountry,
		foundGiftCard
	};
};

export const getAmountOptions = (country: string | Record<any, unknown>, data: any) => {
	const amountList: Option[] = [];

	const { foundGiftCard } = findGiftCardByCountry(country, data);

	if (foundGiftCard) {
		const currency = foundGiftCard.currency.iso_symbol;

		if (foundGiftCard.digital_denominations?.length) {
			foundGiftCard.digital_denominations.forEach((denominator: number) => {
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
