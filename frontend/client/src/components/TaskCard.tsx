import { Link } from 'react-router-dom';
import type { Task } from '../types';
import { Pencil, Trash2 } from 'lucide-react';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskCard = ({ task, onDelete }: Props) => {
  return (
    <div className="border p-4 rounded-xl shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <p className="text-sm text-gray-400">Created: {new Date(task.createdAt).toLocaleString()}</p>
      <div className="flex gap-3 mt-2">
        {/* Use Link instead of anchor tag to keep the React Router navigation */}
        <Link to={`/edit-task/${task._id}`} className="text-blue-500">
          <Pencil />
        </Link>
        <button onClick={() => onDelete(task._id)} className="text-red-500">
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;