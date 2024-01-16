import Button from '../common/Button/Button';
import Title from '../common/Title';

const Discover = () => {
    return (
        <div className='container flex flex-col items-center justify-center py-12 mb-12'>
            <Title h2="Discover the Responsive difference" />
             <p className='md:w-[604px] w-full text-[#002c48] text-center text-[16px] mb-3 -mt-[1.5rem]'>Find out why leading response teams across the world depend on our strategic response management software. </p>
             <Button button="REQUEST DEMO" />
        </div>
    );
};

export default Discover;