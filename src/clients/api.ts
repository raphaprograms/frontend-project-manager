import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBjZTUyNWZmYTNjYjRjY2Q2MGYxNCIsInVzZXJuYW1lIjoiVXNlcjEiLCJlbWFpbCI6InVzZXIxQHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MjI0MTIyLCJleHAiOjE3NjUzMTA1MjJ9.OtndeueqLSCR3IpKCnn--PGhy1rhYEODP05oyokxXdc'
    }
});

export default apiClient;