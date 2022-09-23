import Footer from '@/components/Footer';
import Header from '@/components/Header';
import * as S from './styled';

interface IProps {
	children: any;
}

const MainLayout = ({ children }: IProps) => {
	return (
		<S.Page>
			<Header />
			<S.PageContent>{children}</S.PageContent>
			<Footer />
		</S.Page>
	);
};

export default MainLayout;
