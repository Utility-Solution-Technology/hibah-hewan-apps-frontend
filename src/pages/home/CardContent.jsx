/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import imghewan from '../../../public/images/hewan/hewan1.png'

function CardContent() {
  return (
    <div>
      <section className="product mt-5 section-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="bx bxs-check-square" />
              <h1 className="label-section ms-2">Kategori Populer</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/hewan/hewan1.png`} />
              <Card.Body>
                <Card.Title>Anabul Anjing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/hewan/hewan1.png`} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/hewan/hewan1.png`} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/hewan/hewan1.png`} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
