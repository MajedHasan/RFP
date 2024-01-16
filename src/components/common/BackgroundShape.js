const BackgroundShape = ({className, svgColor}) => {
    
  return (
    <div className={`${className} absolute -top-[20px] w-full -rotate-180`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="10 0 990 110"
        preserveAspectRatio="none"
        className={`${svgColor} fill-[#F4F5F6]`}
      >
        <path
          class="elementor-shape-fill"
          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97"
          
        ></path>
      </svg>
    </div>
  );
};

export default BackgroundShape;
