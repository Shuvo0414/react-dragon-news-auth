import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className=" mb-5">
      <div>
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full mt-6">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full mt-2">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <a
          className=" p-4 flex items-center mt-5 text-base font-medium border rounded-t-md"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a
          className=" p-4 flex items-center  text-base font-medium border-x "
          href=""
        >
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          className=" p-4 flex items-center  text-base font-medium border rounded-b-md "
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>
      {/* Q zone */}
      <div className=" mt-5 space-y-7 bg-[#F3F3F3] p-4">
        <h2 className="text-xl font-semibold">Q-Zone</h2>
        <img src={qZone1} alt="qzone picture" />
        <img src={qZone2} alt="qzone picture" />
        <img src={qZone3} alt="qzone picture" />
      </div>
    </div>
  );
};

export default RightSideNav;
