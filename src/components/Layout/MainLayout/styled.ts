import styled from 'styled-components';

const Page = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background: linear-gradient(
		180deg,
		var(--color-background-primary) 13.54%,
		rgba(238, 246, 253, 0) 58.33%
	);
	z-index: 0;
	min-height: 100%;
	overflow: hidden;
`;

const PageContent = styled.main`
	max-width: min(95vw, var(--max-width-page));
	display: flex;
	align-items: center;
	padding-top: 7.2rem;
	flex-direction: column;
	flex: 1;
	margin: 0 auto;
	width: 100%;
`;

export { Page, PageContent };
