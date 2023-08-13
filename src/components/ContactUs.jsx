
import { Title } from './Title';
import { Form } from './Form';

import contactImage from '../assets/png/contactus.png';

export const ContactUs = () => {
    return (
        <section id='contactus' className='relative'>        
            <div className="flex justify-center items-center h-32 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${contactImage})` }}>
                <Title text={'Contact Us'} color={'white'} />
            </div>

            <div className='container max-w-[1000px] mx-auto md:-mt-28 bg-white p-20 shadow-md mb-16'>
                <p className="text-xl font-bold mb-5">Make your visión a reality with us</p>
                <p>Write to us, we will contact you soon</p>
                <Form/>
            </div>
        </section>
    )
}
