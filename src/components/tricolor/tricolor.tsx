import './tricolor.css'
const TriColor = () =>{
    return (
        <div className="wrapper">
            <div className="tricolor-content-container">
                <div className="tricolor-content">
                    <h1>Join Us!</h1>
                    <p className="mb-2">Join over 500 hackers, speakers and mentors
                        to create, learn and share your ideas. Attend our workshops
                        and hacker challenges and meet industry professionals.
                    </p>
                    <p>Innovators and creatives from all faculties and skill levels
                        are encouraged to attend!
                    </p>
                    <p></p>
                </div>
                <div className="tricolor-container">
                    <div id='tricolor' className='tri-1'>
                        <p className='font-bold text-xl'>500+</p>
                        <p className='font-bold text-lg'>Hackers</p>
                    </div>
                    <div id='tricolor' className='tri-3'>
                        <p className='font-bold text-xl'>75+</p>
                        <p className='font-bold text-lg'>Projects</p>
                    </div>
                    <div id='tricolor' className='tri-5'>
                        <p className='font-bold text-xl'>25+</p>
                        <p className='font-bold text-lg'>Mentors</p>
                    </div>
                    <div id='tricolor' className='tri-2'>
                        <p className='font-bold text-xl'>1000+</p>
                        <p className='font-bold text-sm'>Applicants</p>
                    </div>
                    <div id='tricolor' className='tri-4'>
                        <p className='font-bold text-xl'>25+</p>
                        <p className='font-bold text-lg'>Schools</p>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default TriColor