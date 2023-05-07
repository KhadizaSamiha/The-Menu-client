import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1683481866~exp=1683482466~hmac=9d8fedb9136d439db2d4856078edb61c3d38f2d963d5f5ff7d3f10f20cf978f0)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl  font-semibold">Welcome to <br/><span className='text-yellow-500'>The Menu</span></h1>
                        <p className="mb-5 font-medium text-lg">The culinary expert that your fine dining restaurant has been waiting for. Set the table for a successful online venture with ease!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;