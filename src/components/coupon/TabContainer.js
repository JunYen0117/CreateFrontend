import Tab from 'react-bootstrap/Tab';
import Card from './Card';

function TabContainer(props) {
  return (
    <Tab.Container
      defaultActiveKey="coupon"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="available">
        <Card />
      </Tab>
      <Tab eventKey="profile" title="receiveList">
        <Card />
      </Tab>
      <Tab eventKey="contact" title="invalid">
        <Card />
      </Tab>
    </Tab.Container>
  );
}

export default TabContainer;
