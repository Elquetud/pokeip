import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [resul, setresult] = useState({cargando:true,data:null})

    useEffect(() => {
            getDatos(url);
    }, [url])


   async function getDatos(url) {
    try {
       
      setresult({cargando:true, data:null});

       const resp = await fetch(url)
       const data= await resp.json();

       setresult({cargando:false, data})

    }
     catch (error) {
            console.log(error);
    }  
    }
    return resul;


}




