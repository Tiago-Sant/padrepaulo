import CardNews from 'components/CardNews'
import Heading from 'components/Heading'
import * as S from './styles'

const Main = ({
  title = 'Boilerplate Nextjs',
  description = 'TypeScript, ReactJS, NextJS e Styled Components, Storybook, Jest'
}) => (
  <S.Wrapper>
    
    <Heading color='gold'>Texto</Heading>
    <Heading color='black' icon size='large'>Texto</Heading>
    <CardNews title='São Bernardino de Sena, voz para um mundo em declínio' description='Quando parecia ter “acabado o vinho” da virtude e da graça, e a Cristandade, decaída, voltava-se ao paganismo, uma figura especialmente eleita se levantou...' image="https://padrepauloricardo.s3.amazonaws.com/uploads/destaque_do_blog/imagem/1597/bernardino-de-sena-relacionados.jpg" category="SANTOS & MÁRTIRES" date="20.Mai.2021"></CardNews>
    <CardNews title='BIBD' description='KJKHJ' image="https://padrepauloricardo.s3.amazonaws.com/uploads/destaque_do_blog/imagem/1596/rogai-por-nos-resposta-catolica-relacionados.jpg" category="YRGEY" date="07/05/2021"></CardNews>
    <CardNews title='dfsff' description='fgsg' image="https://padrepauloricardo.s3.amazonaws.com/uploads/destaque_do_blog/imagem/1595/ladainha-ao-espirito-santo-relacionados.jpg" category="dfgsdf" date="HVJG"></CardNews>
  </S.Wrapper>
)

export default Main
