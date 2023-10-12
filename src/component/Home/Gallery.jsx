
import { Link } from "react-router-dom";
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'

const Gallery = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-2xl text-center md:text-7xl text-emerald-400 font-bold'>Gallery</h1>
            <p className='text-center text-sm py-2 font-bold text-slate-500'>Our Recent project</p>
            <div className='max-w-screen-xl mx-auto grid md:grid-cols-3 gap-10 pt-20'>
                <img src={gal1} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal2} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal3} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal4} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal5} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal6} alt="" className='hover:p-10 h-[400px] rounded-lg' />

            </div>
            <div className="bg-emerald-400 mt-10 flex items-center justify-center py-5">
                <h1 className="text-white txt-2xl md:text-4xl font-semibold text-center">See Our Best Events Gallery !</h1>
               <Link to='/gallery' className="ml-6 block px-4 bg-yellow-400 py-2 rounded-full font-bold text-slate-600 md:text-base text-sm" >Visit Gallery</Link>
            </div>
        </div>
    );
};

export default Gallery;