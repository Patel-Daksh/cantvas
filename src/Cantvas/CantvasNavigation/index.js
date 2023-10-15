import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
import '../Courses/CourseNavigation/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


function CantvasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" style={{color: 'red'}} />,
    Dashboard: <RiDashboard3Fill className="wd-icon" style={{color: 'red'}} />,
    Courses: <FaBook className="wd-icon" style={{color: 'red'}} />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" style={{color: 'red'}} />,
    Inbox: <BsFillCalendar2WeekFill className="wd-icon" style={{color: 'red'}} />,
    History: <BsFillCalendar2WeekFill className="wd-icon" style={{color: 'red'}} />,
    Studio: <BsFillCalendar2WeekFill className="wd-icon" style={{color: 'red'}} />,
    Commons: <BsFillCalendar2WeekFill className="wd-icon" style={{color: 'red'}} />,
    Help: <BsFillCalendar2WeekFill className="wd-icon" style={{color: 'red'}} />,
};


  const { pathname } = useLocation();
  return (
    <div className="list-group wd-cantvas-navigation" style={{ width: 100 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Cantvas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default CantvasNavigation;