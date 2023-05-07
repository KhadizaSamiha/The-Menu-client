import React from 'react';

const History = () => {
    return (
        <div className="hero min-h-screen bg-yellow-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://img.freepik.com/free-photo/studio-portrait-cook-man-with-fresh-vegetables-table_613910-9893.jpg?w=740&t=st=1683483493~exp=1683484093~hmac=969d145814cb4f324fdb10cd9e8c6133eace15c28f7b135f36290e157ea59374" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Our History</h1>
                    <p className="py-6 text-2xl font-normal">Traditional & morder service from<br/> <span className='text-4xl text-yellow-800 font-bold'>1970</span>.</p>
                    <button className="btn btn-warning rounded-2xl">Our Story</button>
                </div>
            </div>
        </div>
    );
};

export default History;