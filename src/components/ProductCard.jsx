import Image from "next/image";


const ProductCard = ({ name, picture, price, rating, votes }) => {
    return(
        <div>
            <Image 
                src={{ picture }}
            />
            <div>
                <div>
                    <p>{ name }</p>
                    <p>{ price }</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;