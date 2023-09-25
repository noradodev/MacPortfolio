const ButtonX = (props) => {
  return (
    <>
      <div className="mt-4">
        <a
          href={props.link}
          className="font-bold text-2xl border border-black p-2 bg-[#c4c4c4] border-2 hover:bg-[#d8d7d7]"
        >
          {props.name}{" "}
          <span className="inline-block align-middle px-5">{props.icon}</span>
        </a>
      </div>
    </>
  );
};
export default ButtonX;
