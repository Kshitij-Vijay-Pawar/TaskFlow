import ShowTask from "../ui/ShowTask";
import { useTodoContext } from "../../context/useTodoContext";
import { useParams } from "react-router";

const Tags = () => {
  const { tag } = useParams();
  const { todos } = useTodoContext();

  const filtered = todos.filter((todo) => todo.tags?.includes(tag));
  console.log(filtered);

  return (
    <div>
      <ShowTask tasks={filtered} />{" "}
    </div>
  );
};

export default Tags;
