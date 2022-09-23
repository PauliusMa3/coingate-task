import { addQueryToUrl } from '@/utils/url';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { APP_ROUTES } from 'src/routes';
import * as S from './styled';

interface IProps {
	title: string;
	items: any[];
}

const ProductList = ({ title, items }: IProps) => {
	const router = useRouter();
	return (
		<S.ProductListContainer>
			<S.Title>{title}</S.Title>
			<S.ProductList>
				{items?.map((item) => {
					return (
						<S.ProductItem
							key={item.id}
							onClick={() =>
								router.push(
									addQueryToUrl(APP_ROUTES.HOME, { brandName: item.brand })
								)
							}>
							<S.ImageContainer>
								<Image
									src={item.card_image_url}
									layout="fill"
									alt={item.alt_text}
								/>
							</S.ImageContainer>

							<S.BrandTitle>{item.title}</S.BrandTitle>
						</S.ProductItem>
					);
				})}
			</S.ProductList>
		</S.ProductListContainer>
	);
};

export default ProductList;
