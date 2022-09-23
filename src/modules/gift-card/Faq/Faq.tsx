import { FAQs } from './constants';
import * as S from './styled';
import { Faq } from './types';

const FAQ = () => {
	return (
		<S.FaqContainer>
			<S.Title>Frequently Asked Questions</S.Title>
			{FAQs.map((faq: Faq, index: number) => {
				return (
					<S.Item key={index}>
						<summary>{faq.question}</summary>
						<p>{faq.answer}</p>
					</S.Item>
				);
			})}
		</S.FaqContainer>
	);
};

export default FAQ;
