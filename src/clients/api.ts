import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBjZTUyNWZmYTNjYjRjY2Q2MGYxNCIsInVzZXJuYW1lIjoiVXNlcjEiLCJlbWFpbCI6InVzZXIxQHRlc3QuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY1MzAyMzQ3LCJleHAiOjE3NjUzODg3NDd9.q0lrfx09tK2BhzrV0v2HUoiDv9w-OObH_rX9-9eWgvs'
    }
});

export default apiClient;