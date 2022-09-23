const EXTERNAL_ROUTES = {
	brandGroup: (name: string) => `/brand_group/${name}`,
	similarBrands: '/details?categories%5B%5D=2'
};

const APP_ROUTES = {
	HOME: '/'
};

export { EXTERNAL_ROUTES, APP_ROUTES };
