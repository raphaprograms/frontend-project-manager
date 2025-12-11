import { useState, useEffect, useCallback } from 'react';
import apiClient from '../clients/api';
import type { Task } from '../types';
// import { title } from 'process'; 

export function useTask(projectId: string) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchTasks = useCallback(async () => {
        if (!projectId) return;

        try {
            setLoading(true);
            setError('');
            const res = await apiClient.get(`api/projects/${projectId}/tasks`);
            setTasks(res.data);

        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [projectId]);

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks]);

    const createTask = async (title: string, description: string, status: string) => {
        const res = await apiClient.post(`api/projects/${[projectId]}/tasks`, {
            title,
            description,
            status,
        });
        setTasks((prev) => [...prev, res.data]);
        return res.data;
    };

    const updateTask = async (taskId: string, data: Partial<Task>) => {
        await apiClient.put(`/api/projects/${projectId}/tasks/${taskId}`, data);

        setTasks((prev) =>
            prev.map((task) => (task._id === taskId ? { ...task, ...data } : task))
        );
    }

    const deleteTask = async (taskId: string) => {
        await apiClient.delete(`/api/projects/${projectId}/tasks/${taskId}`);
        setTasks((prev) => prev.filter((task) => task._id !== taskId));
    };

    const tasksByStatus = {
    'todo': tasks.filter((task) => task.status === 'todo'),
    'in-progress': tasks.filter((task) => task.status === 'in-progress'),
    'done': tasks.filter((task) => task.status === 'done'),
  };

  return { tasks, tasksByStatus, loading, error, createTask, updateTask, deleteTask };
}