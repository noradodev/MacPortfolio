import ButtonX from "./ButtonX";
const BlogCard = (props) => {
  return (
    <>
      <div>
        <div className="blogcard border border-black border-4 w-[400px] shadow-[10px_6px_black]">
          <div className="author bg-[#c4c4c4] ">
            <p className="text-2xl font-bold">{props.author}</p>
          </div>
          <div className="image-container border-b-4 border-black">
            <img
              src="https://placekitten.com/100/30"
              alt=""
              className="w-full grayscale"
            />
          </div>
          <div className="content bg-white p-6">
            <h1 className="text-2xl font-extrabold">{props.title}</h1>
            <p className="text-xl">{props.content}</p>
            <div className="my-10">
              <ButtonX name="View More" link="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
