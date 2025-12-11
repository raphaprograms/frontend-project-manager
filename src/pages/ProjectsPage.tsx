import { useState } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";
import type { Project } from "../types";

function ProjectsPage() {
  const { projects, loading, error, createProject, updateProject, deleteProject } = useProjects();
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateProject(editingId, name, description);
        setEditingId(null);
      } else {
        await createProject(name, description);
      }
      setName("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (project: Project) => {
    setEditingId(project._id);
    setName(project.name);
    setDescription(project.description);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName("");
    setDescription("");
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this project?")) {
      await deleteProject(id);
    }
  };

  if (loading) return <div className="text-3xl text-white">Loading...</div>;

  return (
    <div className="text-white">

      <form onSubmit={handleSubmit} className="border p-4 mt-10 flex flex-col gap-2 rounded max-w-md">

        <label>Project Name:</label>

        <input
          type="text"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Project Description:</label>

        <input
          type="text"
          className="border p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit" className="bg-sky-500 rounded p-2">
          {editingId ? "Update Project" : "Create Project"}
        </button>
        
        {editingId && (
          <button type="button" onClick={cancelEdit} className="bg-gray-600 rounded p-2">
            Cancel
          </button>
        )}
      </form>

      {error && <div className="text-red-500 mt-4">{error}</div>}
      
      {projects.length === 0 && !loading && (
        <p className="mt-10 text-gray-400">No projects yet. Create your first one!</p>
      )}

      <div className="flex flex-wrap gap-5 mt-10">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-64 flex flex-col border border-gray-600 p-4 rounded"
          >
            <div className="font-bold text-lg">{project.name}</div>
            <div className="text-gray-400 flex-1">{project.description}</div>
            <div className="flex gap-2 mt-4">
              <Link
                to={`/projects/${project._id}`}
                className="bg-sky-500 px-3 py-1 rounded text-sm"
              >
                View
              </Link>
              <button
                onClick={() => startEdit(project)}
                className="bg-yellow-600 px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="bg-red-600 px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;