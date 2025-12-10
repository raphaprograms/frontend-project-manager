import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBjZTUyNWZmYTNjYjRjY2Q2MGYxNCIsInVzZXJuYW1lIjoiVXNlcjEiLCJlbWFpbCI6InVzZXIxQHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MzkwMzM4LCJleHAiOjE3NjU0NzY3Mzh9.fkfRUsIq7NGmEGLzW8PKM6OMq7pTsWIrQvEtL6Gjow4'
    }
});

export default apiClient;