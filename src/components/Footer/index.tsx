import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/prince-09" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/prince-sinha-90a83b180/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
        {/* <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Instagram
        </Styled.Link> */}
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
