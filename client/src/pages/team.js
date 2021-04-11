import React from 'react';

import image1 from './aboutus.png';
import image2 from './amogh.jpg';
import image3 from './raashi.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function Team() {
  return (
    <div id="feature" className="block featureBlock bgGray" style= {{backgroundColor : "#51E1ED"}}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} style = {{backgroundColor: "#51E1ED"}}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image2} 
              />}
            >
              <Meta title="Modern Design"  />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} style = {{backgroundColor: "#51E1ED"}}>
            <Card
              hoverable
              cover={<img alt="Test" src={image1}  />}
              
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}style = {{backgroundColor: "#51E1ED"}}>
            <Card
              hoverable
              cover={<img alt="Test" src={image1} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default Team;