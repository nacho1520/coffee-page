import star from "../assets/Star_fill.svg";
import emptyStar from "../assets/Star.svg";

const Rating = ({ rating, votes }) => {
    return(
        <div className="inline-flex items-end flex-wrap gap-1">
            <img 
                src={ rating ? star.src : emptyStar.src }
                width={ 24 }
                height={ 24 }
            />
            {
                rating ? (
                    <div className="inline-flex flex-wrap gap-1">
                        <p className="text-sm font-bold text-[#FEF7EE]">{ rating }</p>
                        <p className="text-sm font-bold text-[#6F757C]">({votes} votes)</p>
                    </div>
                ) : 
                (
                    <p className="text-sm font-bold text-[#6F757C]">
                        No ratings
                    </p>
                )
            }
            
        </div>
    );
    
};


const ProductCard = ({ name, picture, price, rating, votes, popular, available }) => {
    return(
        <div>
            <div className="w-[260px] h-[160px] relative">
                <img 
                    src={ picture }
                    className="rounded-xl"
                />
                {
                    popular &&
                    <span className="absolute top-1 left-1 bg-coffee-yellow rounded-xl text-popular-dark font-bold text-[10px] px-3 py-1">
                        Popular
                    </span> 
                }
            </div>
            <div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-[#FEF7EE] font-bold text-base">{ name }</p>
                    <p className="bg-light-green rounded text-list-bg font-bold text-xs px-2 py-1">{ price }</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <Rating rating={ rating } votes={ votes }/>
                    {
                        !available ? (
                            <p className="text-sm font-bold text-coffee-red">Sold out</p>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;