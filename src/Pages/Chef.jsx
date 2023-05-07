import React from 'react';
const Chef = ({chef}) => {
    const {id, name, experience, likes, image, recipes} = chef;
    return (
        <div className="card w-80 bg-base-100 shadow-xl text-white mx-auto ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body bg-slate-500">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>Experience : {experience} years</p>
                <p>Recipies : {recipes}</p>
                <p>Likes : {likes} years</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-error">View Recipies</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;