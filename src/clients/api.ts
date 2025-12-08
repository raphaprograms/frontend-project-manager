import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBjZTUyNWZmYTNjYjRjY2Q2MGYxNCIsInVzZXJuYW1lIjoiVXNlcjEiLCJlbWFpbCI6InVzZXIxQHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MjIxMzUyLCJleHAiOjE3NjUzMDc3NTJ9.Ir6C1GCOxlSYW_AAIqqxUi5A7m8_d2Bqz2w6KYSZbL0'
    }
});

export default apiClient;