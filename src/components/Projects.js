import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Media,
  MediaOverlay,
} from 'react-md';


import Mountains from '../assets/Mountains.jpg';

// const nature = Mountains({ width: 600, height: 337, section: 'nature' });

const Projects = () => (
  <div className="md-grid">
    <Card className="card">
      <Media>
        {/* <img src={Mountains} alt="Nature from lorempixel" /> */}
        <MediaOverlay>
          <CardTitle title="Such nature" subtitle="Wow!">
          </CardTitle>
        </MediaOverlay>
      </Media>
      <CardText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
        </p>
        <p>
          Maecenas lacinia enim ut risus pellentesque euismod. Vestibulum gravida, risus non
        </p>
      </CardText>
    </Card>
    <Card className="card">
      <Media>
        <iframe allowFullScreen src="https://youtu.be/KM4jNYUOg7Y" />
      </Media>
      <CardTitle title="Riders for Life" subtitle="Demo Presentation" />
      <CardText>
        <h5>DISCLAIMER</h5>
        <p>
          Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made
        </p>
      </CardText>
    </Card>
  </div>
);
export default Projects;