import { Button } from 'react-bootstrap';
import { FaShoppingCart, FaFireAlt } from 'react-icons/fa';
import FavactHeart from './FavactHeart';
import Mo from '../../img/Mo.JPG';

const FavActivity = (props) => {
  const { data } = props;

  return (
    <div className="Fac_card d-flex border p-0 mb-4 ms-2 rounded-3 w-100 position-relative">
      <FavactHeart data={data} />
      <div className="Fac_cardimg  col-4 p-0 me-3 ">
        <img src={Mo} alt="" className="Fac_img " />
      </div>
      <div className="col-8 pt-3">
        <h2>
          {data.exhibition_name} &nbsp;
          <FaFireAlt style={{ color: 'red' }} />
        </h2>

        <table className="Fac_table">
          <tr>
            <th>展覽日期</th>
            <td>
              {data.start_date} - {data.end_date}
            </td>
          </tr>
          <tr>
            <th>展覽時間</th>
            <td>
              {data.start_time} - {data.end_time}
            </td>
          </tr>
          <tr>
            <th>活動地點</th>
            <td>{data.exhibition_location}</td>
          </tr>
          <tr className="Fac_tr">
            <th>票價</th>
            <td>NT$ {data.exhibition_price}</td>
            <Button
              variant="primary"
              className="text-white  d-block Fac_button m-0"
            >
              <FaShoppingCart className="me-3 " />
              購票去
            </Button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FavActivity;
