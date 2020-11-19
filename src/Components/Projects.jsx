import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import '../Styles/Projects.css';


function Projects() {
  return (
    <div>
     <div className="Tagline-projects" id ='projects'>PROJECTS</div>
     <div className = "projects-info">
        <CardGroup data-aos="fade-up" data-aos-duration='2000'>
  <Card className='group'>
    <Card.Body>
      <Card.Title>Meme Generator Using React</Card.Title>
      <Card.Text>A piece of software which allows you to create those awesome memes and share it with your friends.Simply choose from some random pre - existing templates or just upload your own template according to your wish.Not in the mood to create memes ? Do not worry, we got you covered there too, just download the memes we have created for you.Just navigate to your preferred section using the navbar and get creative!
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Completed on 15th September, 2020</small>
    </Card.Footer>
  </Card>
  <Card className='group'>
    <Card.Body>
      <Card.Title>plasm-O-pheresis</Card.Title>
      <Card.Text>plasm-O-pheresis acts as a one stop solution to find the plasma donors. Its minimal pre-requisites enables an easy installation and usage.All it requires is installation of the software to maintain a record of people of both rural and urban ares who have recovered from Covid and can be potential plasma donors.
        {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Completed on 1st November,2020</small>
    </Card.Footer>
  </Card>
  <Card className='group'>
    <Card.Body>
      <Card.Title>Weather App in React</Card.Title>
      <Card.Text>
      This is a small weather app built using react.js and OpenWeather API
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Completed in August, 2020</small>
    </Card.Footer>
  </Card>
</CardGroup>
     </div>
    </div>
  );
}

export default Projects;