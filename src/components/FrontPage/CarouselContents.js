import Card from 'react-bootstrap/Card';
import Brand from './Brand';
function CarouselContents(props) {
  const res = props.datas.map((page_content, index) => {
    const a = index == 0 ? 'active' : '';
    return (
      <div className={`carousel-item ${a}`}>
        <div className="all-logo d-flex justify-content-between">
          {page_content.map((content) => (
            <Brand {...content} />
          ))}
        </div>
      </div>
    );
  });
  return <>{res}</>;
}
export default CarouselContents;
