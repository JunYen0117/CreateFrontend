import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as NoLogin } from '../../img/header/nologin.svg';

function LoginDropDown() {
  return (
    <Dropdown className="header_dropdown">
      <Dropdown.Toggle className="header_dropdown_btn" variant="success" id="dropdown-basic">
        <NoLogin/>
      </Dropdown.Toggle>


      <Dropdown.Menu className="header_dropdown_menu">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LoginDropDown;