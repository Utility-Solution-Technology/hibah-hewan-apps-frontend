import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';

function AboutUs() {
  const people = [
    {
      id: 1, name: 'Ibrahim', univ: 'Universitas Budi Luhur', role: 'Full-Stack Developer', github: 'https://github.com/Ibrahimyunel', image: 'images/people/me.jpeg',
    },
    {
      id: 2, name: 'Farhan Hafizh', univ: 'Universitas Gunadarma', role: 'UI/UX Designer & Front-End Developer', github: 'https://github.com/hanhafizh', image: 'images/people/farhan.jpeg',
    },
    {
      id: 3, name: 'Muhammad Annafi Fakhruddin', univ: 'Universitas Dinamika Surabaya', role: 'System Analyst', github: 'https://github.com/annafkh', image: 'images/people/fahru.jpeg',
    },
    {
      id: 4, name: 'Dwi Wahyu Riani', univ: 'Universitas Pendidikan Indonesia', role: 'System Analyst & Project Manager', github: 'https://github.com/yannriani', image: 'images/people/riani.jpeg',
    },
  ];

  const createCard = people.map(({
    id, name, univ, role, github, image,
  }) => (
    <div key={id} className="C-person">
      <Card>
        <Card.Img variant="top" className="C-people-img" src={process.env.PUBLIC_URL + image} alt="people" />
        <Card.Body className="caption-people">
          <h2>{name}</h2>
          <h3>{univ}</h3>
          <h3>{role}</h3>
        </Card.Body>
        <div className="d-flex align-items-end justify-content-center mb-2">
          <Link className="C-link C-link-btn C-link-blue" to={github} target="_blank">Github</Link>
        </div>
      </Card>
    </div>
  ));

  return (
    <>
      <main>
        <h1 className="text-center mt-4">Humble Developers</h1>
        <div className="C-people-wrapper container">
          {createCard}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
