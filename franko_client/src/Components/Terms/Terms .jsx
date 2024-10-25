import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

// import './Policies.css'; // Make sure to add any additional custom styling here

const { Title, Paragraph } = Typography;

function Policies() {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <Card bordered={false} className="text-center">
            <Title level={3}>FRANKO TRADING LIMITED</Title>
            <Title level={4}>RETURN POLICY</Title>
            <Paragraph>
              Subject to Terms and Conditions, Franko Trading Enterprise offers
              returns and/or exchange or refund for items purchased within 7 DAYS OF PURCHASE.
              We do not accept returns and or exchange for any reason whatsoever after the
              stated period has elapsed.
            </Paragraph>

            <Title level={5}>ELIGIBILITY FOR REFUND, RETURN AND OR EXCHANGE</Title>
            <Card bordered={true} className="mb-4">
              <Title level={5}>WRONG ITEM DELIVERED</Title>
              <ul>
                <li>The seals on the box must not be broken/opened.</li>
                <li>There should be no dents and liquid intrusion on the item.</li>
                <li>Proof of Purchase/Receipt must be provided.</li>
              </ul>
            </Card>

            <Card bordered={true} className="mb-4">
              <Title level={5}>MANUFACTURING DEFECTS</Title>
              <ul>
                <li>Within the 7 days, defective items would be replaced with the same piece/unit (depending on stock availability).</li>
                <li>All items shall go through inspection and diagnosis on return to verify the reason provided.</li>
                <li>Returns (defective items) after 7 days would be sent to the Brand’s Service Centre for repairs under the Manufacturer Warranty.</li>
              </ul>
            </Card>

            <Card bordered={true} className="mb-4">
              <Title level={5}>INCOMPLETE PACKAGE</Title>
              <ul>
                <li>Incomplete package or missing complementary items must be reported within 7 days for immediate redress.</li>
              </ul>
            </Card>

            <Title level={4}>REFUND/CHARGE BACK POLICY</Title>
            <Card bordered={true} className="mb-4">
              <Title level={5}>UNDELIVERED ORDER/PACKAGE</Title>
              <ul>
                <li>Refund/charge back request for undelivered orders will go through vetting and approval, with refunds made within 30 days.</li>
                <li>Charge back requests must be initiated through customer’s bank for payments made via credit card or other banking platforms.</li>
                <li>Refunds will be made by cheque for accounting purposes.</li>
              </ul>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Policies;
