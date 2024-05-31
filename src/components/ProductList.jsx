import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
    console.log(data);
    return(
        <div className="grid grid-cols-3 gap-8 mt-10">
            {
                data.map((coffee) => (
                    <ProductCard 
                        key={ coffee.id }
                        name={ coffee.name }
                        picture={ coffee.image }
                        price={ coffee.price }
                        popular={ coffee.popular }
                        rating={ coffee.rating }
                        votes={ coffee.votes }
                        available={ coffee.available }
                    />
                    )
                )
            }
        </div>
    );
};

export default ProductList;