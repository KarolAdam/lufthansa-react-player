import styled, { css } from 'styled-components'


interface Props {
    primary: boolean
}
export const MyInput = styled.input<Props>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem .5rem;
  text-align:center;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #ebebeb;
  color: #b1abab;
  border: 2px solid #b1abab;

  &:hover{
    color:#b1abab;
    border: 2px solid #1d1d1d;
  }

  /* The GitHub button is a primary button
  * edit this to target it specifically! */

  ${props => props.primary === true && css`
    background: ${props.theme.primary.background};
    color: ${props.theme.primary.color};
  `}
`