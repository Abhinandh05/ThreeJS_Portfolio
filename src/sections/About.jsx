import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () =>{
        navigator.clipboard.writeText('abhinandhc31@gamil.com')
        setHasCopied(true)
        setTimeout(() =>{
            setHasCopied(false)
        }, 2000)
    }
    return (

        <section className='c-space my-20' id='about'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src='/assets/grid1.png' alt='grid-1'  className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                                <p className='grid-headtext'>Hi, I'm Abhinandh </p>
                            <p className='grid-subtext'>With in 3 years of experience, I have honed my skill in fronted and backend developed, with a focus of animated 3D website                       </p>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src='/assets/grid2.png' alt='grid-2 ' className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in JavaScript/TypeScript, primarily working within the React and Next.js ecosystem, and building scalable backend solutions with Node.js.</p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 12.5, lng:75.0 ,
                                    text:"I'm here",
                                    color:'white',
                                    size:50,
                                }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I work remotely across most time zone </p>
                            <p className='grid-subtext'>I'm based in India, with remote work available </p>
                            <Button name='ContactMe'  isBeam containerClass='w-full mt-10'/>
                        </div>
                    </div>

                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src='/assets/grid3.png' alt='grid-3 ' className="w-full sm:h-[266px] h-fit object-contain" />
                      <div>
                          <p className='grid-headtext'> My passion for coding</p>
                          <p className='grid-subtext'> I love solving problem and thing though code. Coding isn't just my profession - it is my passion.</p>
                      </div>
                  </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={ hasCopied ?'/assets/tick.svg' :'/assets/copy.svg'} alt='copy' />
                                  <p className='xl:text-2xl md:text-xl font-medium text-gray_gradient text-white '>abhinandhc31@gmail.com</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
