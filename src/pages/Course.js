import CourseSidebar from '../components/Course/CourseSidebar';
import CourseText from '../components/Course/CourseText';
import CourseCarousel from '../components/Course/CourseCarousel';
import CourseDate from '../components/Course/CourseDate';
function Course() {
  return (
    <>
      <div className="container">
        <CourseCarousel />
      </div>
      <div className="container d-flex position">
        <CourseText />
        <CourseSidebar />
      </div>
      <div className="container">
        <CourseDate />
      </div>
    </>
  );
}

export default Course;
