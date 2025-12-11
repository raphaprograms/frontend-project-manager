import { useEffect, useState } from "react";
import apiClient from "../clients/api";
import { useParams, Link, useNavigate } from "react-router-dom";
import type { Project, Task } from '../types';
import { useTask } from "../hooks/useTasks";

type Status = "todo" | "in-progress" | "done";

const STATUSES = [
  { key: 'todo', label: 'To Do' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
] as const;

function ProjectDetailsPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const { tasksByStatus, loading: tasksLoading, error: tasksError, createTask, updateTask, deleteTask } = useTask(projectId!);

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("todo");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get(`/api/projects/${projectId}`);
        console.log(res.data);
        setProject(res.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId, navigate]);


  const openCreateForm = (defaultStatus: Status ='todo') => {
    setEditingTask(null);
    setTitle("");
    setDescription("");
    setStatus(defaultStatus);
    setShowForm(true);
  };

  const openEditForm = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await updateTask(editingTask._id, { title, description, status });
      } else {
        await createTask(title, description, status);
      }
      setShowForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (taskId: string) => {
    if (confirm("Delete this task?")) {
      await deleteTask(taskId);
    }
  };

  // useEffect(() => {
  //   // const fetchProjectTasks = async () => {
  //   //     try {
  //   //         const tasks = await apiClient.get(`/api/projects/${projectId}/tasks`);
  //   //         // state
  //   //         // loading error
  //   //     } catch (error) {
  //   //         console.error(error);

  //   //     }
  //   // }
  //   // fetchProjectTasks()
  // }, [projectId]);


  // if (loading) return <div className="text-3xl text-white">Loading...</div>;

  // if (error) return <div className="text-3xl text-white">Error loading Project</div>;

  if (loading || tasksLoading) {
    return <div className="text-3xl text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-3xl text-red-500">{error}</div>;
  }

  return (
     <div className="text-white mt-5">
    
      <Link to="/projects" className="text-sky-400 hover:underline">
        ← Back to Projects
      </Link>

    
      <h1 className="text-4xl font-bold mt-4">{project?.name}</h1>
      <p className="text-gray-400 text-xl mb-6">{project?.description}</p>

     
      <button
        onClick={() => openCreateForm()}
        className="bg-sky-500 px-4 py-2 rounded mb-6"
      >
        + New Task
      </button>

      {tasksError && <div className="text-red-500 mb-4">{tasksError}</div>}

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STATUSES.map(({ key, label }) => (
          <div key={key} className="bg-zinc-800 p-4 rounded min-h-48">
            <h3 className="font-bold text-sm uppercase text-gray-400 mb-3">
              {label} ({tasksByStatus[key]?.length || 0})
            </h3>

            {tasksByStatus[key]?.length === 0 && (
              <p className="text-gray-600 text-sm">No tasks</p>
            )}

            {tasksByStatus[key]?.map((task) => (
              <div key={task._id} className="bg-zinc-700 p-3 rounded mb-2">
                <div className="font-medium">{task.title}</div>
                <p className="text-gray-400 text-sm">{task.description}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => openEditForm(task)}
                    className="text-yellow-400 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-red-400 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => openCreateForm(key)}
              className="text-gray-500 text-sm mt-2 hover:text-white"
            >
              + Add task here
            </button>
          </div>
        ))}
      </div>

  
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-800 p-6 rounded w-80 flex flex-col gap-3"
          >
            <h2 className="text-xl font-bold">
              {editingTask ? "Edit Task" : "New Task"}
            </h2>
            
            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded bg-zinc-700"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            
            <input
              type="text"
              placeholder="Description"
              className="border p-2 rounded bg-zinc-700"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            
            <select
              className="border p-2 rounded bg-zinc-700"
              value={status}
              onChange={(e) => setStatus(e.target.value as Status)}
            >
              {STATUSES.map(({ key, label }) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            
            <button type="submit" className="bg-sky-500 p-2 rounded">
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-600 p-2 rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProjectDetailsPage;