import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className=" flex mt-7 bg-[#F3F3F3] p-4">
      <button className=" bnt bg-[#D72050] py-2 px-6 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={200}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
