const Experience = (props) => {
  return (
    <div className="w-full md:w-[60%] my-6 px-4 md:px-0">
      <div className="font-poppins text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl leading-7 mb-2 md:mb-0">
            {props.position}, {props.place}
          </h1>
          <p className="font-normal text-xs md:text-sm text-[#8491A0]">
            {props.date}{" "}
          </p>
        </div>
        <p className="font-normal text-xs md:text-sm text-[#8491A0] leading-6">
          {props.role}
        </p>
      </div>
    </div>
  );
};

export default Experience;
