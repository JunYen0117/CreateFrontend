import ActivityCard from '../components/Activity/ActivityCard';
import ActivityTitle from '../components/Activity/ActivityTitle';
import Sidebar from '../components/Sidebar';

function Avtivity() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>

          <div className="col-8">
            <ActivityTitle />
            <ActivityCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Avtivity;
