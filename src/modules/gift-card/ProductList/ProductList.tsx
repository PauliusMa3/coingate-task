import Image from 'next/image';
import * as S from './styled';

interface IProps {
	title: string;
	items: any[];
}

const ProductList = ({ title, items }: IProps) => {
	return (
		<S.ProductListContainer>
			<S.Title>{title}</S.Title>
			<S.ProductList>
				{items?.map((item) => {
					return (
						<S.ProductItem key={item.id}>
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
