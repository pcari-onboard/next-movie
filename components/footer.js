import InputEmail from './inputEmail'

export default function Footer() {
  return (
    <div className="footer__component container">
      <div className="grid grid-cols-3">
        <div className="footer__component-subleft col-span-1 bg-[#3D3D3D] pt-[93px] pl-[104px] pr-[107px] pb-[99px]">
          <h2 className="text-white text-[64px] mb-[32px]">PcariMovie</h2>
          <p className="text-[#E6E6E6] font-normal mb-[40px]">Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          <InputEmail
          label="Join Newsletter"
          placeholder="Insert your mail here"/>
        </div>
        <div className="footer__component-subright col-span-2 bg-[#2E2E2E] pt-[133px] pl-[104px] pr-[115px]">
          <div className="footer__component-list-items grid grid-cols-3">
            <ul className="text-white">
              <li className="font-bold">Product</li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Movies</a>
              </li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">TV Show</a>
              </li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Videos</a>
              </li>
            </ul>
            <ul className="text-white">
              <li className="font-bold">Media Group</li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Nice Studio</a>
              </li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Nice News</a>
              </li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Nice TV</a>
              </li>
            </ul>
            <ul className="text-white">
              <li className="font-bold">Sitemap</li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">About</a>
              </li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Careers</a>
              </li>
              <li className="mt-[24px]">
                <a href="" className="hover:underline">Press</a>
              </li>
            </ul>
          </div>
          <div className="footer__component-studio-information text-sm flex justify-between mt-[99px]">
            <div className="text-white">
              <img className="inline-block" alt="location" src="images/location.svg" />

              <a className="ml-[13px] hover:underline" href="https://goo.gl/maps/Kf1SQ1cmwQ1Zuddh6">8819 Ohio St. South Gate, California 90280</a>

            </div>
            <div className="text-white">
              <img className="inline-block" alt="location" src="images/email.svg" />

              <a className="ml-[13px] hover:underline" href="mailto:ourstudio@hello.com">ourstudio@hello.com</a>

            </div>
            <div className="text-white">
              <img className="inline-block" alt="location" src="images/phone.svg" />

              <a className="ml-[13px] hover:underline" href="tel:+2713866473637">+271 386-647-3637</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}