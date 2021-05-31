import { CardNewsProps } from '.'
import { HeadingWrapper } from 'components/Heading/styles'
import Heading from 'components/Heading'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 80rem;
    height: 20rem;
    margin: 3rem 0 3rem 0;
  `}
`
export const ImageCamp = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: 29.5rem;
  `}
`
export const Image = styled.img`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `}
`
export const ContentCamp = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 2.5rem;
    ${HeadingWrapper} {
      margin: 1.5rem 0 1rem 0;
    }
  `}
`

export const NewsInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${HeadingWrapper} {
      padding-right: 1rem;
      border-right: 1px solid #000;
      margin: 0;
    }

    p {
      font-size: 1.3rem;
      margin-left: 1rem;
      color: #000;
    }
  `}
`
export const DescriptionNews = styled.p`
  ${({ theme }) => css`
    color: rgba(0, 0, 0, 0.65);
  `}
`
