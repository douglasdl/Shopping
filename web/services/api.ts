import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUPABASE_BASE_URL
});

api.defaults.headers.common['apikey'] = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
api.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`;

export { api };