import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { LuContactRound } from "react-icons/lu";
import { Link } from "react-router";

const ReadBookCard = ({ book }) => {
  const {
    author,
    bookId,
    yearOfPublishing,
    bookName,
    category,
    image,
    tags,
    rating,
    publisher,
    totalPages,
  } = book;
  console.log(book);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 p-6 border border-[#13131326]  mt-8 rounded-2xl shadow-sm">
      {/* image  */}
      <div className="bg-[#1313130D] w-[230px] rounded-2xl flex justify-center items-center ">
        <img className="h-[175px] py-5  px-6" src={image} alt={bookName} />
      </div>
      {/* details  */}
      <div className="w-full flex flex-col  items-center lg:items-baseline">
        <h1 className="lg:text-2xl text-lg font-bold">{book.bookName}</h1>
        <p>By: {author}</p>
        {/* tags and yearOfPublishing */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-2 ">
          <div className="flex items-center gap-2 ">
            <p className="font-bold font-work">Tags</p>
            <div>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-primary text-[#23BE0A] font-work text-sm lg:text-xl mr-2  "
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>
          <div className="font-work text-lg text-[#131313CC] flex justify-baseline items-center ">
            <span>
              <CiLocationOn className="m-0" />
            </span>{" "}
            <span> Year of publishing: {yearOfPublishing}</span>
          </div>
        </div>
        {/* publisher and pages*/}
        <div className="flex items-center gap-4 font-work text-[#13131399] lg:my-2 my-1">
          <div className="flex items-center gap-2">
            <LuContactRound /> Publisher: {publisher}
          </div>
          {/* pages */}
          <div className="flex items-center gap-2">
            <IoBookOutline /> Pages: {totalPages}
          </div>
        </div>
        {/* hr                */}
        <div className="py-2 lg:py-4 w-full">
          <hr className="text-[#13131326]" />
        </div>
        {/* actions  */}
        <div className="w-fit font-work flex gap-2">
          <div className="bg-[#328EFF26] rounded-4xl flex items-center justify-center ">
            <p className="text-[#328EFF]   lg:py-3  px-2 lg:px-5 font-work ">
              Category{category}
            </p>
          </div>
          <div className="bg-[#FFAC3326] rounded-4xl  flex items-center justify-center ">
            <p className="text-[#FFAC33] py-3 px-5 font-work text-center">
              Ratings{rating}
            </p>
          </div>
          <div className="bg-[#23BE0A] rounded-4xl  flex items-center justify-center ">
            <Link
              to={`/books/${bookId}`}
              className="text-white font-medium py-3 px-5 font-work text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
