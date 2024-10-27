import "./tricolor.css";
const TriColor = () => {
  return (
    <div className='wrapper'>
      <div className='tricolor-content-container'>
        <div className='tricolor-content '>
          <h1 className='title'>Join Us!</h1>
          <p className='mb-2'>
            Join over 500 hackers, speakers and mentors to create, learn and
            share your ideas. Attend our workshops and hacker challenges and
            meet industry professionals.
          </p>
          <p>
            Innovators and creatives from all faculties and skill levels are
            encouraged to attend!
          </p>
          <p></p>
        </div>
        <div className='tricolor-container'>
          <div id='row1' className='duck-row'>
            <div className='tricolor' id='tri-1'>
              <img src='./ducks/red.svg' />
              <div className='text-overlay'>
                <p className='font-bold text-sm sm:text-lg'>500+</p>
                <p className='font-bold text-sm sm:text-lg'>Hackers</p>
              </div>
            </div>

            <div className='tricolor' id='tri-2'>
              <img src='./ducks/blue.svg' />
              <div className='text-overlay'>
                <p className='font-bold text-sm sm:text-lg'>75+</p>
                <p className='font-bold text-sm sm:text-lg'>Projects</p>
              </div>
            </div>

            <div className='tricolor' id='tri-3'>
              <img src='./ducks/red.svg' />
              <div className='text-overlay'>
                <p className='font-bold text-sm sm:text-lg'>25+</p>
                <p className='font-bold text-sm sm:text-lg'>Mentors</p>
              </div>
            </div>
          </div>

          <div id='row2' className='duck-row'>
            <div className='tricolor' id='tri-4'>
              <img src='./ducks/gold.svg' />
              <div className='text-overlay'>
                <p className='font-bold text-sm sm:text-lg'>1000+</p>
                <p className='font-bold text-sm sm:text-lg'>Applicants</p>
              </div>
            </div>

            <div className='tricolor' id='tri-5'>
              <img src='./ducks/blue.svg' />
              <div className='text-overlay'>
                <p className='font-bold text-sm sm:text-lg'>25+</p>
                <p className='font-bold text-sm sm:text-lg'>Schools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriColor;
