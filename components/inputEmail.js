export default function InputEmail(props) {
  return (
    <>
      <div className="text-white mb-[24px]">{props.label}</div>
      <div className="relative bg-[#525252] rounded-lg">
        <input
        type="email"
        autoComplete="true"
        placeholder={`${props.placeholder}`}
        className="pt-4 pb-4 pr-20 pl-4 text-[#9A9AB0] bg-transparent font-normal rounded-lg w-full focus:outline-none">
        </input>
        <button className="absolute bg-[#FED530] hover:bg-[#ebc21e] right-[6px] top-[6px] p-3 rounded-lg w-[44px] h-[44px]">
          <img src="images/arrow-right.svg" />
        </button>
      </div>
    </>
  )
}