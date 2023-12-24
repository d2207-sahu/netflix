import React from 'react'
import Logo from '../globals/Logo';
import Container from '../globals/Container';

const Header = () => {
  return (
    <Container position='absolute' z_index="10">
      <Logo />
    </Container>
  )
}

export default Header