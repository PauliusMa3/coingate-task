export const addQueryToUrl = (url: string, query: any) => {
	const paramsString = new URLSearchParams(query).toString();
	return `${url}${paramsString ? `?${paramsString}` : ''}`;
};
