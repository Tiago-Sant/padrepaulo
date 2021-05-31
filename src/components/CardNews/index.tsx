import * as S from './styles'
import Heading from 'components/Heading'

export type CardNewsProps = {
  title: string
  description: string
  date: string
  category: string
  image: string
  
}

const CardNews = ({
  title,
  description,
  image,
  category,
  date
}: CardNewsProps) => (
  <S.Wrapper>
    <S.ImageCamp>
        <S.Image src= {image}></S.Image>
    </S.ImageCamp>
<S.ContentCamp>
  <S.NewsInformation>
    <Heading color="gold" size="small">
      {category}
    </Heading>
    <p>{date}</p>
  </S.NewsInformation>
    <Heading color="black" size="large">
      {title}
    </Heading>
    <S.DescriptionNews>
      {description}
    </S.DescriptionNews>
</S.ContentCamp>
  </S.Wrapper>
)

export default CardNews
