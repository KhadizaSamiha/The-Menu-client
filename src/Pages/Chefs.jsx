import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className='p-10 bg-gray-700'>
            <h2 className='text-5xl font-medium text-center text-white'>Meet Our Chefs</h2>
            <div className='grid grid-cols-3 container mx-auto space-y-5'>
                {
                    chefs?.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;