import React from 'react';

const SummerPromo = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center text-5xl text-yellow-500'>Check Our All Flavours Summer Promo</h1>
            <div className="hero  pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/premium-photo/group-fresh-vegetables-fruits_135427-235.jpg?w=826" className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Over <span className='text-yellow-500'>250</span> Delicious & Tasty Recipes</h1>
                        <p className="py-6 text-slate-600 font-semibold">The appetizers section features a variety of dips, spreads, and finger foods that are perfect for entertaining or snacking. From classic favorites like guacamole and spinach dip to more unique offerings like pomegranate salsa and stuffed mushrooms, these appetizers are sure to impress.</p>
                       
                    </div>
                </div>
            </div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/premium-photo/fresh-fruit-background-as-healthy-eating-dieting-concept-winter-assortment-top-view_501761-506.jpg?w=740" className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Healthy and Flavorful: <span className='text-yellow-500'>300</span> Nutritious and Delicious Recipes Over</h1>
                        <p className="py-6 text-slate-600 font-semibold">The recipes in this cookbook are easy to follow, with clear instructions and ingredients that are readily available in most grocery stores. Whether you're an experienced cook or just starting out, you'll find something new and exciting to try in this book.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummerPromo;