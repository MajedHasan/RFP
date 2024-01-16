

const Button = ({button}) => {
    return (
        <div>
            <button className="mt-4 uppercase py-[10px] px-[30px] text-primaryColor font-bold text-[14px] text-center bg-[#00283b] hover:bg-[#00375E] rounded-[25px]">{button}</button>
        </div>
    );
};

export default Button;