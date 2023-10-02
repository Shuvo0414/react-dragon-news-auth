import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo png" />
      <p className=" text-base font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className=" text-xl font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
