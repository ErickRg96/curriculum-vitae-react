import { useState, useEffect } from 'react';
const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

const useGetData = () => {
   const [myData, setData] = useState([]);
   // const [estado, funcion que actualiza nuestro estado] = useState(estado inicial)

   // Se encarga de hacer la peticion
   useEffect( () => {
      fetch(api)
         .then(response => response.json())
         .then(data => setData(data))
   }, []);

   return myData;
}

export default useGetData;