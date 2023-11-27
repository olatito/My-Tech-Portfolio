function Button(props) {
  const text = props.text;
  const bgcolor = props.color;
  const onClick = props.onClick

  return (
    <div
      className={`${bgcolor} flex justify-center rounded-[50px] border-2  border-white text-${props.text_col} w-[192px] h-[64px] leading-8 text-[21.3px] sm:w-[240px] sm:h-[80px] sm:text-lg lg:w-[256px] lg:h-[96px] lg:text-xl mr-4 mb-4`}
    >
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
