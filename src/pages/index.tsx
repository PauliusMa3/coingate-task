import MainLayout from '@/components/Layout/MainLayout';
import GiftCardBox from '@/modules/gift-card/Box/GiftCardBox';
import Faq from '@/modules/gift-card/Faq/Faq';
import ProductList from '@/modules/gift-card/ProductList/ProductList';
import { axiosFetch } from '@/utils/axios';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import { EXTERNAL_ROUTES } from 'src/routes';

const DISPLAY_BRAND_ITEMS = 5;

export async function getServerSideProps(context: NextPageContext) {
	const brandName = (context.query?.brandName as string) ?? 'amazon';

	const singleBrand = await axiosFetch(EXTERNAL_ROUTES.brandGroup(brandName));

	if (!singleBrand) {
		return {
			notFound: true
		};
	}

	const similarBrands = await axiosFetch(EXTERNAL_ROUTES.similarBrands);

	return { props: { singleBrand, similarBrands } };
}

const Home = ({
	singleBrand,
	similarBrands
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<MainLayout>
			<GiftCardBox data={singleBrand} />
			<ProductList
				title="Similar Products"
				items={similarBrands?.brands.slice(0, DISPLAY_BRAND_ITEMS) ?? []}
			/>
			<ProductList
				title="More Popular Products"
				items={
					similarBrands?.brands.slice(
						DISPLAY_BRAND_ITEMS,
						DISPLAY_BRAND_ITEMS + DISPLAY_BRAND_ITEMS
					) ?? []
				}
			/>
			<Faq />
		</MainLayout>
	);
};

export default Home;
