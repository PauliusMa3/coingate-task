import styled from 'styled-components';

const ProductListContainer = styled.div`
	padding-top: 4.3rem;
	width: 100%;
`;

const ProductList = styled.div`
	display: grid;
	grid-auto-columns: var(--image-card-width);
	grid-auto-rows: minmax(calc(var(--image-card-height) + 30px) auto);
	grid-auto-flow: column;
	overflow-x: scroll;
	gap: 1.8rem;
	overflow-x: auto;
	overscroll-behavior: contain;
`;

const ImageContainer = styled.div`
	width: var(--image-card-width);
	height: var(--image-card-height);
	border-radius: 8px;
	position: relative;
	overflow: hidden;
`;

const ProductItem = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
`;

const Title = styled.h3`
	padding-bottom: 1.6rem;
`;

const BrandTitle = styled.span`
	padding-top: 1.5rem;
	font-size: 1.5rem;
	line-height: 1.7rem;
`;

export { ProductListContainer, ProductList, Title, BrandTitle, ProductItem, ImageContainer };
