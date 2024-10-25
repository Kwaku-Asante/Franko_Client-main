import { Layout, Row, Col, Typography, Card, Divider, Tabs } from 'antd';
import { DollarOutlined, RocketOutlined, CustomerServiceOutlined, VerifiedOutlined } from '@ant-design/icons';
import './About.css';
import franko from "../../assets/frankos.png";
import franco from "../../assets/franco.png";

/**
 * About page component
 * @returns {JSX.Element} The About page
 */
const About = () => {
  const { Content } = Layout;
  const { Title, Paragraph } = Typography;
  const { TabPane } = Tabs;

  /**
   * Handles tab change
   * @param {string} key - The key of the tab
   */
  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <>
      <Layout>
        <Content className="site-layout-content" style={{ padding: '0 50px', marginTop: "5%" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={16}>
              <Title level={2}>About Us</Title>
              <Paragraph>
                Franko Trading Enterprise is the leading retail and wholesale company of Mobile phones, Computers, Laptops, Televisions, Accessories etc. The Company is amongst the first to bring in modern technological gadgets into Ghana since its establishment in 2004 with earlier branches in Kumasi & Accra. The Head Office currently located at Adabraka Opposite Roxy Cinema in Accra.
              </Paragraph>
              <Paragraph>
                Our company provides the best devices and products at affordable prices for Ghanaians to 
                afford. Due to this, we are known as phone papa fie, which translates as Home of Quality Phones.
              </Paragraph>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <img src={franko} alt="Store Front" className="store-image" style={{ marginTop: "20px" }} />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8}>
              <img src={franco} alt="Store Front" className="store-image1" style={{ marginTop: "20px" }} />
            </Col>
            <Col xs={24} sm={24} md={16} style={{ marginTop: "20px" }} >
              <Tabs onChange={onChange} type="card" style={{color:"green"}}>
                <TabPane tab="Vision" key="1">
                  <Title level={4} style={{color:"green"}}>Vision</Title>
                  <Paragraph>
                    To devote our human and technological resources to create superior household electronics and mobile 
                    phones market through research and innovation in Ghana and the West African Sub-region.
                  </Paragraph>
                </TabPane>
                <TabPane tab="Mission" key="2">
                  <Title level={4} style={{color:"green"}}>Mission</Title>
                  <Paragraph>
                    To be the leader to inspire Africa and the world with innovative products and design to 
                    revolutionise the household electronic and mobile phone market.
                  </Paragraph>
                </TabPane>
                <TabPane tab="Values" key="3" >
                  <Title level={4} style={{color:"green"}}>Values</Title>
                  <Paragraph>
                    Integrity
                  </Paragraph>
                  <Paragraph>
                    Accountability
                  </Paragraph>
                  <Paragraph>
                    Customer Satisfaction
                  </Paragraph>
                  <Paragraph>
                    Teamwork
                  </Paragraph>
                </TabPane>
              </Tabs>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[16, 16]} style={{ marginTop: "40px" ,marginBotto:"40px" }}>
            <Col xs={24}>
              <Title level={3}>Why Choose Us</Title>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                  <Card hoverable>
                    <VerifiedOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <Paragraph><strong>Quality Products</strong></Paragraph>
                    <Paragraph>We offer only the best electronics from top brands.</Paragraph>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card hoverable>
                    <DollarOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <Paragraph><strong>Competitive Prices</strong></Paragraph>
                    <Paragraph>Get the best deals and discounts on top products.</Paragraph>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card hoverable>
                    <RocketOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <Paragraph><strong>Fast Shipping</strong></Paragraph>
                    <Paragraph>Quick and reliable delivery to your doorstep.</Paragraph>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Card hoverable>
                    <CustomerServiceOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <Paragraph><strong>Excellent Support</strong></Paragraph>
                    <Paragraph>On-timely customer support to assist you with your needs.</Paragraph>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default About;