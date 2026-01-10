import { NavLink } from 'react-router';
import { useTodoContext } from '../../context/useTodoContext';

const Priority = () => {
  const { todos } = useTodoContext();

  // ✅ derive counts (NO useEffect)
  const priorityCount = todos.reduce(
    (count, todo) => {
      if (todo.priority === "high") count.high += 1;
      if (todo.priority === "medium") count.medium += 1;
      if (todo.priority === "low") count.low += 1;
      if (todo.status === "completed") count.completed += 1;
      return count;
    },
    { high: 0, medium: 0, low: 0, completed: 0 }
  );

  return (
    <div className="p-2">
      {/* HIGH */}
      <NavLink to="/prioritys/high" className="flex justify-between pr-4 mb-1">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-(--high) rounded-md mr-3 border border-(--border)" />
          <p>High</p>
        </div>
        <div className="bg-(--surface) px-2 py-1 rounded text-xs">
          {priorityCount.high}
        </div>
      </NavLink>

      {/* MEDIUM */}
      <NavLink to="/prioritys/medium" className="flex justify-between pr-4 mb-1">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-(--medium) rounded-md mr-3 border border-(--border)" />
          <p>Medium</p>
        </div>
        <div className="bg-(--surface) px-2 py-1 rounded text-xs">
          {priorityCount.medium}
        </div>
      </NavLink>

      {/* LOW */}
      <NavLink to="/prioritys/low" className="flex justify-between pr-4 mb-1">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-(--low) rounded-md mr-3 border border-(--border)" />
          <p>Low</p>
        </div>
        <div className="bg-(--surface) px-2 py-1 rounded text-xs">
          {priorityCount.low}
        </div>
      </NavLink>

      {/* COMPLETED */}
      <NavLink to="/prioritys/completed" className="flex justify-between pr-4 mb-1">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-(--success) rounded-md mr-3 border border-(--border)" />
          <p>Completed</p>
        </div>
        <div className="bg-(--surface) px-2 py-1 rounded text-xs">
          {priorityCount.completed}
        </div>
      </NavLink>
    </div>
  );
};

export default Priority;
