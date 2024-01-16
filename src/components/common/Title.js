
const Title = ({h2, subtitle}) => {
    return (
        <>
            <h2 className="font-extrabold text-[42px] text-headingColor text-center mt-[80px] mb-[40px]">{h2}</h2>
            <h3 className="font-extrabold text-[32px] text-headingColor ">{subtitle}</h3>
            {/* <p className="font-light font-titleFont text-[18px] "></p> */}
        </>
    );
};

export default Title;