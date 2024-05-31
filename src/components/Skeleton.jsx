const Skeleton = () => {
    return(
        <div className="skeleton">
            <div className="w-[260px] h-[160px] bg-[#E5E4E2]/80 rounded-xl"></div>
            <div className="w-full h-5 bg-[#E5E4E2]/80 mt-3 rounded"></div>
            <div className="w-1/2 h-5 bg-[#E5E4E2]/80 mt-3 rounded"></div>
        </div>
    );
};

export default Skeleton;