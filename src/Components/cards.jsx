import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';
function Cards() {
  return (
    <div>
        <CardDeck data-aos='fade-right'  data-aos-duration="2000">
  <Card className='card-height'>
    <Card.Img className='images' variant="top" src="data:image/png;base64,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" />
    <Card.Body>
      <Card.Title>HTML 5</Card.Title>
    </Card.Body>
    
  </Card>
  <Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" />
    <Card.Body>
      <Card.Title>CSS 3</Card.Title>
    
    </Card.Body>
  </Card>
  <Card className='card-height'>
    <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png" />
    <Card.Body>
      <Card.Title>Javascript</Card.Title>
    </Card.Body>
    
  </Card>
   <Card className='card-height'>
    <Card.Img className='images' variant="top" src="data:image/png;base64,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" />
    <Card.Body>
      <Card.Title>ReactJS</Card.Title>
    
    </Card.Body>
  </Card>
   <Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png" />
    <Card.Body>
      <Card.Title>Bootstrap</Card.Title>
    
    </Card.Body>
  </Card><Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://material-ui.com/static/logo.png" />
    <Card.Body>
      <Card.Title>Material UI</Card.Title>
    
    </Card.Body>
  </Card><Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://bitsrc.imgix.net/3fb49197a90923920dcee2f4f5c36cea2c2a1f73.png" />
    <Card.Body>
      <Card.Title>React Btstrp</Card.Title>
    
    </Card.Body>
  </Card>
</CardDeck>
        <CardDeck data-aos='fade-left'  data-aos-duration="2000">
  <Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" />
    <Card.Body>
      <Card.Title>C++</Card.Title>
    </Card.Body>
    
  </Card>
  <Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle.png" />
    <Card.Body>
      <Card.Title>C</Card.Title>
    
    </Card.Body>
  </Card>
  <Card className='card-height'>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
    <Card.Body>
      <Card.Title>Python</Card.Title>
    </Card.Body>
    
  </Card>
   <Card className='card-height'>
    <Card.Img className='images' variant="top" src="data:image/png;base64,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" />
    <Card.Body>
      <Card.Title>Redux</Card.Title>
    
    </Card.Body>
  </Card>
   <Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" />
    <Card.Body>
      <Card.Title>TypeScript</Card.Title>
    
    </Card.Body>
  </Card><Card className='card-height'>
    <Card.Img className='images' variant="top" src="data:image/png;base64,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" />
    <Card.Body>
      <Card.Title>Node.js</Card.Title>
    
    </Card.Body>
  </Card><Card className='card-height'>
    <Card.Img className='images' variant="top" src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" />
    <Card.Body>
      <Card.Title>jQuery</Card.Title>
    
    </Card.Body>
  </Card>
</CardDeck>
    </div>
  );
}

export default Cards;