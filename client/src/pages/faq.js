import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock" style={{backgroundColor : "#75cfb8"}}>
      <div className="container-fluid">
        <div className="titleHolder" style={{textAlign: "center" , paddingTop:"20px"}}>
          <h2>Frequently Asked Questions</h2>
          <p>some of the basic questions ask by user</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
        <Panel header="How long does it take to ship my order?" key="1">
            <p>Orders are usually shipped within 1-2 business days after placing the order.</p>
          </Panel>
          <Panel header="When will my order arrive?" key="2">
            <p> Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation email you’ve received.</p>
          </Panel>
          <Panel header="How do I track my order" key="3">
            <p>Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.</p>
          </Panel>
          <Panel header="What’s your return policy?" key="4">
            <p>We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.</p>
          </Panel>
          <Panel header="How do I make changes to an existing order?" key="5">
            <p>Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require</p>
          </Panel>
          <Panel header="Can I receive a refund?" key="6">
            <p>If you are unhappy with the product you’ve received, you can get a refund.</p>
          </Panel>


        </Collapse>
        <br />
        <br />

        <div className="quickSupport">
          <h3>Want quick support?</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p> */}
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question on  <strong> info@hypekar.com</strong></Button>
        <br />
        </div>
      </div>
    </div> 
     
  );
}

export default AppFaq;