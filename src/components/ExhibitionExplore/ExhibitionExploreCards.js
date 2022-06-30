import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ExhibitionExploreCards(props) {
  const { exhibitions } = props;
  return (
    <>
      <div className="d-flex justify-content-center">
        <select className="m-3" defaultValue={'DEFAULT'}>
          <option value="DEFAULT">選擇地區</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="m-3" defaultValue={'DEFAULT'}>
          <option value="DEFAULT">選擇日期</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="m-3" defaultValue={'DEFAULT'}>
          <option value="DEFAULT">選擇價錢</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="card-scroll">
        {exhibitions.map((exhibition, index) => {
          return (
            <div key={exhibition.id} className="exhibition_card">
              <Link to={`/exhibition/${exhibition.id}`}>
                <div className="d-flex align-items-center">
                  <div className="img-date">
                    <div className="exhibition_img">
                      <img
                        src={`http://localhost:3003/images/exhibition/${exhibition.exhibition_img}`}
                        alt="..."
                      />
                    </div>
                    <div className="date">
                      <div>
                        {exhibition.start_date} - {exhibition.end_date}
                      </div>
                    </div>
                  </div>
                  <div className="mx-3 exhibition_text">
                    <h2 className="">{exhibition.exhibition_name}</h2>
                    <div className="line" />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${exhibition.exhibition_intro}`,
                      }}
                    ></p>
                    <div className="">
                      <div className="d-flex justify-content-between">
                        <div>{exhibition.city}</div>
                        <div>NT{exhibition.exhibition_price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ExhibitionExploreCards;
