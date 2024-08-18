import AppBar from "../components/AppBar";
import HeroPage from "../components/HeroPage";

export const Hero = ()=> {

    return (
      <div>
        <div>
          <AppBar />
        </div>
        <div className='flex justify-center'>
          <div className='w-[94%] h-screen'>
            <HeroPage />
          </div>
        </div>
      </div>
    )
}
