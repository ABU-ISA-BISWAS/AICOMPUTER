import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const {data:tools,isLoading,refetch}=useQuery('tools',()=>fetch(`https://sheltered-bayou-65908.herokuapp.com/tools`)
    .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-10'>
            
            {
                tools.map(tool=><Tool
                key={tool._id}
                tool={tool}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;