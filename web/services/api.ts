import axios from 'axios';

console.log('NEXT_PUBLIC_SUPABASE_BASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_BASE_URL);
console.log('NEXT_PUBLIC_SUPABASE_API_KEY:', process.env.NEXT_PUBLIC_SUPABASE_API_KEY);

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUPABASE_BASE_URL
});

api.defaults.headers.common['apikey'] = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
api.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`;

export { api };