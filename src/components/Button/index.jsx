import React from 'react'

import { ButtonContainer } from './styles';

function Button({title, onClick, height, width, variant = "primary"}) {
  return (
    <ButtonContainer onClick={onClick} type="button" variant = {variant} height={height} width={width}>
      {title}
    </ButtonContainer>
  )
}

export default Button
