import backgroundImage from '../../assets/Images/darkBackground.png'
import Model from '../../assets/Images/Modelling/ML-Model.png'
import Button from '../ui/Button'

function ModellingPageTwo() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="md:min-h-screen overflow-hidden w-full font-['Inter'] px-8 py-12 md:p-20 flex flex-col md:flex-row">
        <div className='flex border-[1.2vw] border-dark-pink'>
            <div className='w-1/2'>
                <img src={Model} alt="Not Available" />
            </div>
            <div className='flex flex-col justify-center w-1/2'>
                <h1 className='text-[5vw] font-extrabold leading-[6vw]'>Do you want to <br /> become a <br /> model?</h1>
                <div>
                    <Button backColor={"dark-pink"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModellingPageTwo