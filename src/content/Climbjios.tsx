import { Icon } from '@iconify/react';
import Carousel from '../components/Carousel';

function Climbjios() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <div className="flex items-center w-full mb-4 px-8 sm:px-16">
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
        <h1 className="text-lg sm:text-4xl font-extrabold px-2">ClimbJios</h1>
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
      </div>
      <div className="w-full sm:w-11/12 self-center">
        <Carousel
          slides={[
            <img src="/images/climbjios.png" className="object-contain object-center" />,
            <img src="/images/climbjios-steps-poster.png" className="object-contain object-center min-w-[60vh] max-w-[60vh] min-h-[60vh] max-h-[60vh]" />
          ]}
        />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p className="text-xs sm:text-base">Co-founder</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p className="text-xs sm:text-base">Sep 2022 - Present</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:link-variant" />
          </span>
          <a href="https://www.climbjios.com" className="text-emerald-500 text-xs sm:text-base" target="_blank">climbjios.com</a>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">ClimbJios started as the final project for a module I was taking, CS3216 Software Product Engineering for Digital Markets. Built for the Singaporean climbing community in the short span of 6 weeks, we managed to get more than 643 sign-ups and more than 200 posts made on our app in less than a week of public release.</p>
      <p className="text-left mb-4 text-sm sm:text-base">I was in charge of frontend development, as well as marketing efforts like designing posters for advertising our product.</p>
      <p className="text-left mb-4 text-sm sm:text-base">At the end of the module, each team gets to showcase our product at the SoC Term Project Showcase (STePS) event, which is open to the public. Our team managed to obtain the best project award!</p>
      <p className="text-left mb-4 text-sm sm:text-base">ClimbJios is now an open source project. Check out our repository <a href="https://github.com/climbjios-sg/climbjios-app" className="text-emerald-500" target="_blank">here</a>!</p>
    </div>
  )
}

export default Climbjios
