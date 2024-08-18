import Button from "./Button";
import Card from "./Card";

export default function HeroPage(){
    return <div className="h-full w-full bg-grey rounded-3xl p-12 pt-12">
        <div className="flex justify-between">
            <div className="font-semibold text-6xl text-slate-800 leading-[1.15]">
                Your Ultimate Restaurant <br /> Management Solution
            </div>
            <div className="flex flex-col gap-6 mt-6">
                <div className="flex gap-2">
                    <div className="h-10 w-10 p-2 rounded-full cursor-pointer bg-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                    </div>
                    <div className="h-10 w-10 p-2 rounded-full bg-white cursor-pointer flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                        </svg>
                    </div>
                    <div className="h-10 w-10 p-2 rounded-full bg-white cursor-pointer flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </div>
                </div>
                <div className="font-semibold">
                    All essential resturant management <br /> functions in one unified platform
                </div>
            </div>
        </div>
        <div className="flex gap-4 mt-8">
            <Card image="https://img.freepik.com/premium-photo/real-estate-property-industry-concept-simple-white-houses-white-background-3d-rendering_476612-11530.jpg?w=740" />
            <Card image="https://img.freepik.com/premium-photo/real-estate-concept-3d-house-white-background_476612-10607.jpg?w=740" />
            <Card image="https://img.freepik.com/premium-photo/modern-house-isolated-white-background_564692-50927.jpg?w=740" />
            <Card image="https://img.freepik.com/free-psd/close-up-house-isolated_23-2151616351.jpg?t=st=1723988841~exp=1723992441~hmac=490b46fc6b8611453c84be4573058de30f155216e0cf31b9a54cdf8c13220e3f&w=740" />
        </div>
        <div className="flex gap-4 mt-4">
            <div className="h-44 w-[280px] relative">
                <div className="flex justify-start items-end w-full h-full">
                    <div className="absolute mb-10">
                        <Button name="Try seamless" colour="black" backgroundColor="white" />
                    </div>
                    <Button name="operational control" colour="black" backgroundColor="white" />
                    <div className="ml-4 h-10 w-10 p-2 rounded-full bg-amber cursor-pointer flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>    
            </div>
            <Card image="https://img.freepik.com/premium-photo/modern-house-isolated-white-background_564692-50927.jpg?w=740" />
            <Card image="https://img.freepik.com/free-psd/close-up-house-isolated_23-2151616351.jpg?t=st=1723988841~exp=1723992441~hmac=490b46fc6b8611453c84be4573058de30f155216e0cf31b9a54cdf8c13220e3f&w=740" />
            <Card image="https://img.freepik.com/premium-photo/real-estate-concept-3d-house-white-background_476612-10607.jpg?w=740" />
        </div>
    </div>
}