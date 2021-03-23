import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock" >
      <div className="container-fluid titleHolder">
        <div  style={{textAlign: "center"}}>
         <strong> <h2 style={{fontSize : "3rem" , color : "black"}}>Contact Us</h2></strong>
         <br />
          <strong><p style = {{fontSize : "1rem" , fontFamily : "sans-serif" , color : "orange"}}>Do you have any questions? Please do not hesitate to contact us directly .Our team will come back to you within a matter of hours to help you.<i className="fas fa-grin-hearts" style={{color:'red' , margin : '5px', fontSize:'15px'}}></i></p>
        </strong>
          </div>
          <br />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;