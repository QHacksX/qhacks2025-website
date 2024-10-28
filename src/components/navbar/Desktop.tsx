// import ScrollIntoView from 'react-scroll-into-view';
const options = ['Home', 'About', 'Sponsors', 'Contact']
import './index.css'
export default function DeskTopNav(){
    const NavOptions = ()=>{
        return options.map(option =>{
            return <li key={option} className='font-bold px-3 text-white'>
                {option}
            </li>
        })
    }

    return(
        <div className='absolute top-0 w-screen'>
             <div className='box'>
                <ul className='absolute px-1 py-1 my-2 rounded-3xl bg-black flex justify-between'>
                    {NavOptions()}
                </ul>
            </div>
        </div>
        
        
    );
}