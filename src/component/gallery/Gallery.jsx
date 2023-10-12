import { Link } from "react-router-dom";
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'
import gal7 from '../../assets/gal7.jpg'
import gal8 from '../../assets/gal8.jpg'
import gal9 from '../../assets/gal9.jpg'
import gal10 from '../../assets/gal10.jpg'
import gal11 from '../../assets/gal11.jpg'
import gal12 from '../../assets/gal12.jpg'
const Gallery = () => {
    return (
        <div className='my-10'>
            <h1 className='text-2xl text-center md:text-7xl text-emerald-400 font-bold'>Gallery</h1>
            <p className='text-center text-sm py-2 font-bold text-slate-500'>Our Recent project</p>
            <div className='max-w-screen-xl mx-auto grid md:grid-cols-3 gap-10 pt-20'>
                <img src={gal1} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal2} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal3} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal4} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal5} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal6} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal7} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal8} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal9} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal10} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal11} alt="" className='hover:p-10 h-[400px] rounded-lg' />
                <img src={gal12} alt="" className='hover:p-10 h-[400px] rounded-lg' />

            </div>
        </div>
    );
};

export default Gallery;