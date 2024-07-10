import SectionHeading from "../SectionHeading/SectionHeading";
import "./Page404.scss";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="st-page-not-found st-flex-center text-center">
      <div className="">
        <h3>4<span>0</span>4</h3>
        <h4>Page Not Found</h4>
        <p>oops, the page you are looking for can't be found!</p>
        <Link to='/' className="st-btn st-style1 st-color1">Go to Home</Link>
      </div>
    </div>
  )
}

export default Page404
