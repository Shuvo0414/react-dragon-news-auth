import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl p-5 my-8">
      <h2 className="card-title text-xl font-bold">{title}</h2>
      <figure className=" mt-5">
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        {details.length > 200 ? (
          <p className=" text-base font-normal mt-8">
            {details.slice(0, 200)} <br></br>{" "}
            <Link to={`/news/${_id}`} className="text-[#FF8C47]">
              Read More....
            </Link>
          </p>
        ) : (
          <p className=" text-base font-normal mt-8">{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
