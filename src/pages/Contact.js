import React from 'react';
import { Row, Col } from '@smooth-ui/core-sc';

import PageTitle from '../components/PageTitle/PageTitle';
import P from '../components/ui/P';

const Contact = () => (
  <React.Fragment>
    <Row justifyContent="center">
      <Col xs={8}>
        <PageTitle text="Kontakt" />
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col xs={8}>
        <P>
          Zapraszam serdecznie do kontaktu. Niezależnie w jakiej kwestii - masz
          pytanie, problem czy chciałbyś / chciałabyś rozpocząć ze mną
          współpracę. Jestem otwarty na nowe wyzwania.
        </P>
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col xs={8}>
        <Row>
          <Col xs={6}>
            <PageTitle text="Zadzwoń" />
          </Col>
          <Col xs={6}>
            <PageTitle text="Napisz" />
          </Col>
          <Col xs={6}>
            <P>+48 794 566 403</P>
            <P>
              * pod telefonem jestem dostępny od poniedziałku do czwartku od
              15:00 do 19:00, natomiast w piątki od 8:00 do 19:00
            </P>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col xs={8}>
        <PageTitle text="Połącz się" />
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col xs={8}>
        <PageTitle text="Bądź na bieżąco" />
      </Col>
    </Row>
  </React.Fragment>
);

export default Contact;
