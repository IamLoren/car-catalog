import React from 'react'
import { StyledButton } from './BigButton.styled'

const BigButton = ({title, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>{title}</StyledButton>
  )
}

export default BigButton