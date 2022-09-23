import { default as Fees } from '@/svg/common/fees.svg';
import { default as Letter } from '@/svg/common/letter.svg';
import { default as Private } from '@/svg/common/private.svg';
import Image from 'next/image';
import GiftCardForm from '../Form/GiftCardForm';
import { CardBenefits } from '../gift-card.enum';
import * as S from './styled';

const GiftCardBox = ({ data }: any) => {
	const dataItem = data.gift_cards?.[0];

	return (
		<S.BoxContainer>
			<S.GiftCardContainer>
				<S.ImageContainer>
					<Image src={dataItem.card_image_url} layout="fill" alt={dataItem.alt_text} />
				</S.ImageContainer>
				<div>
					<h2>{dataItem.alt_text}</h2>
					<S.CardDescription>{dataItem.short_description}</S.CardDescription>
					<GiftCardForm data={data} />
				</div>
			</S.GiftCardContainer>
			<S.BenefitsContainer>
				<S.Benefit>
					<Letter />
					<S.BenefitText>{CardBenefits.DELIVERY}</S.BenefitText>
				</S.Benefit>
				<S.Benefit>
					<Private />
					<S.BenefitText>{CardBenefits.PAYMENT}</S.BenefitText>
				</S.Benefit>
				<S.Benefit>
					<Fees />
					<S.BenefitText>{CardBenefits.FEES}</S.BenefitText>
				</S.Benefit>
			</S.BenefitsContainer>
		</S.BoxContainer>
	);
};

export default GiftCardBox;
