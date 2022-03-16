export default function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`text-black bg-[#FED530] px-[46px] py-[13px] rounded-[27px] font-bold text-[21px] leading-[27px] ${className}`}>{children}</button>
  )
}