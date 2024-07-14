// import { AppError } from '@utils/AppError';
import axios from 'axios';

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const api = axios.create({
    baseURL: 'https://asedgfjqgxilnfhnokvr.supabase.co/'
});
          
api.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZWRnZmpxZ3hpbG5maG5va3ZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDU5NTU3MywiZXhwIjoxOTg2MTcxNTczfQ.j9jcef_A0E9zpCNNsvKKldbnoJWSmGGj7NXSORMgaiA';

api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZWRnZmpxZ3hpbG5maG5va3ZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDU5NTU3MywiZXhwIjoxOTg2MTcxNTczfQ.j9jcef_A0E9zpCNNsvKKldbnoJWSmGGj7NXSORMgaiA';

// api.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     if(error.response && error.response.data) {
//         return Promise.reject(new AppError(error.response.data.message));
//     } else {
//         return Promise.reject(error);
//     }
// })

export { api };