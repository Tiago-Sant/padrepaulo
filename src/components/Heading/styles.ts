import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModiffiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
}

export const HeadingWrapper = styled.h1<Pick<HeadingProps, 'size' | 'color'>>`
  ${({ theme, size, color }) => css`
    display: flex;
    flex-direction: row;
    p{
      color: red;
      margin-right: 0.7rem;
    }
    color: ${theme.colors[color!]};
    ${!!size && wrapperModiffiers[size!](theme)};
  `}
`
