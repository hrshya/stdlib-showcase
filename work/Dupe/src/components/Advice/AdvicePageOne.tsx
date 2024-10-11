import { Advice } from "../../Data/Advice"


function AdvicePageOne() {
  return (
    <div className="min-h-screen w-full p-12 md:px-28 md:py-28 mb-40 font-['Inter'] flex flex-col gap-28">
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037]">Advice For Parents</h1>
            <div className="text-[2vw] md:text-[1.1vw] font-medium flex flex-col gap-2 md:gap-6">
                <p>As parents, the safety and well-being of our children is always of the utmost importance. When it comes to the fast-paced and ever-changing world of fashion and modelling, it can be challenging to navigate and know where to turn for help. At Ventura Models, we understand the concerns that parents may have and are dedicated to providing a safe and supportive environment for aspiring models of all ages.</p>
                <p>We offer expert advice and guidance to parents who are considering allowing their child to pursue a career in modelling, helping to ensure that they are fully prepared for the industry and the expectations that come with it. Our team of professionals is well-versed in the dos and don'ts of the industry and can help you avoid scams, while also connecting you with the right directors and agencies to help your child succeed. Trust us to take the stress out of the process and help your child achieve their modelling dreams.</p>
                <p>In addition to our expert guidance and support, we also offer specialised training and classes for child models to help them develop the skills and confidence they need to succeed in the industry. This includes classes on runway walking, posing, and on-camera techniques, as well as workshops on health, nutrition, and personal grooming. Our goal is to help your child become the best version of themselves, both physically and mentally, so they can thrive in the modelling industry.</p>
                <p>At Dupe Model, we also understand the importance of a work-life balance for child models. We work closely with clients and agencies to ensure that their schedules are manageable and that they are not overworked or stressed. We also make sure that the child models are given adequate time for rest, homework, and other activities that are important for their growth and development.</p>
                <p>Don't miss out on this opportunity to give your child the best start in the modelling industry. Apply now and schedule a free consultation with our team to learn more about how we can help your child achieve their modelling dreams. Trust us to take the stress out of the process and guide you every step of the way.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#514957]">Research</h1>
            <div className="text-[2vw] md:text-[1.1vw] font-medium flex flex-col gap-2 md:gap-6">
                <p>Unfortunately, there are many illegitimate agencies and individuals looking to take advantage of aspiring models and their families. Before approaching any agency, it is crucial to conduct thorough research to ensure their legitimacy. Legitimate agencies do not charge any joining fees or ask for money upfront. Instead, they earn through commissions from the work your child receives.</p>
                <p>One way to research an agency is by using a simple Google search, checking out their website, and reading reviews from previous clients and models who have worked with them. Social media platforms can also provide valuable information and opportunities, but be wary of scams and fraudulent agencies lurking online.</p>
                <p>At Dupe Model, we are dedicated to providing a safe and reliable platform for modelling aspirations.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-[7vw] md:text-[5vw]  font-extrabold leading-none text-[#242037]">Avoid Scams: How to Identify Legitimate Modelling Agencies</h1>
            <div className="text-[2vw] md:text-[1.1vw] font-medium flex flex-col gap-2 md:gap-6">
                <p className="font-extrabold">As a parent, you want to ensure that your child is safe and protected while pursuing their dreams in the fashion and modelling industry. Unfortunately, the industry is fast-moving and can be overwhelming, making it easy for scam artists to prey on unsuspecting individuals. Here are some tips on how to identify and avoid scams:</p>
                <div className="flex flex-col gap-4 md:gap-8">
                    {Advice.map((item)=> (
                        <div className="flex items-center gap-4 md:gap-8 w-full">
                            <div className="h-[21px] w-[21px]">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="#F26C92"/>
                                </svg>
                            </div>

                            <p>{item}</p>
                        </div>
                    ) )}
                    <p>By keeping these tips in mind, you can help ensure that your child avoids any scam artists and instead finds a legitimate agency that will support their growth and success in the industry.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-[7vw] md:text-[5vw]  font-extrabold leading-none text-[#242037]">Connect with Dupe Model</h1>
            <div className="text-[2vw] md:text-[1.1vw] font-medium flex flex-col gap-2 md:gap-6">
                <p>Are you and your child considering entering the world of modeling? Look no further than Dupe Model, your go-to resource for launching a successful modeling career. We have years of experience in the industry and a team of experts to guide you every step of the way.</p>
                <p>We understand that the modeling industry can be overwhelming, especially for parents, which is why we strive to provide a safe and secure environment for your child to break into the industry. Our goal is to connect your child with reputable agencies that specialise in child modeling, ensuring that they are in the best hands.</p>
                <p>Before diving in, we'll make sure to educate both you and your child on the ins and outs of the business, and answer any questions you may have</p>
                <p>Don't hesitate to reach out to us, contact us today on 0330 133 6343 or apply now to get started on your child's modelling journey with Dupe Model.</p>
            </div>
        </div>
    </div>
  )
}

export default AdvicePageOne