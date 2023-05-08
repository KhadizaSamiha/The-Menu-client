import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Recipes = () => {
    const chefsData = useLoaderData();
    const { name, bio, experience, likes, recipes, recipes1, image } = chefsData;
    return (
        <div className=' bg-gray-500'>
            <div className="hero h-96">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 font-semibold">{bio}</p>
                        <p className='font-medium'>Experience : {experience} years</p>
                        <p className='font-medium'>Recipies : {recipes}</p>
                        <p className='font-medium'>Likes : {likes} years</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-5xl text-yellow-500'>Food Recipies</h2>
                {
                    recipes1.map(reci1 => <div>
                        <div className="hero mt-10 px-10 mx-auto" style={{ backgroundImage: `url(${reci1.image})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{reci1.name}</h1>
                                    <p className="mb-5">{reci1.instructions}</p>
                                    <button className="btn btn-warning">Add to favourite</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recipes;