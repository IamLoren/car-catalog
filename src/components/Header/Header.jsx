import React from 'react';
import Container from '../Container/Container';
import Contacts from './Contacts/Contacts';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header>
        <Container>
          <Contacts/>
          <Navigation/>
        </Container>
       </header>
  )
}

export default Header