import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBjZTUyNWZmYTNjYjRjY2Q2MGYxNCIsInVzZXJuYW1lIjoiVXNlcjEiLCJlbWFpbCI6InVzZXIxQHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY0OTU2NTUyLCJleHAiOjE3NjQ5NjM3NTJ9.WAZkVjoP-Xv_ZvmSdeQb2UKJ-YRq5NM5sIfMzif8QGc'
    }
});

export default apiClient;