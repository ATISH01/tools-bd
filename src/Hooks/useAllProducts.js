import  { useEffect, useState } from 'react';

const useAllProducts = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://shrouded-sierra-24769.herokuapp.com/tools')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [products,setProducts]
};

export default useAllProducts;