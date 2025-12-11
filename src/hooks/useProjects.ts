import { useState, useEffect, useCallback } from "react";
import apiClient from "../clients/api";
import type { Project } from "../types";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await apiClient.get("/api/projects");
      setProjects(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const createProject = async (name: string, description: string) => {
    const res = await apiClient.post("/api/projects", { name, description });
    setProjects((prev) => [...prev, res.data]);
    return res.data;
  };

  const updateProject = async (id: string, name: string, description: string) => {
    await apiClient.put(`/api/projects/${id}`, { name, description });

    setProjects((prev) =>
      prev.map((p) => (p._id === id ? { ...p, name, description } : p))
    );
  };

  const deleteProject = async (id: string) => {
    await apiClient.delete(`/api/projects/${id}`);
    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  return { projects, loading, error, createProject, updateProject, deleteProject };
}