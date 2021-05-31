import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'black' | 'white' | 'gold'
  icon?: boolean
}

export const Heading = ({
  children,
  size = 'small',
  color = 'black',
  icon = false
}: HeadingProps) => (
  <S.HeadingWrapper color={color} size={size}>
    {icon && <p>:</p>}
    {children}
  </S.HeadingWrapper>
)

export default Heading
