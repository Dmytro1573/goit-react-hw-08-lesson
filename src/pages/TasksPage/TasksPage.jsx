import { useEffect } from "react";
import { selectLoading } from "../../redux/tasks/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/tasks/operations.js";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import TaskEditor from "../../components/TaskEditor/TaskEditor.jsx";
import TaskList from "../../components/TaskList/TaskList.jsx";

export default function TasksPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <PageTitle>Your title</PageTitle>
        <TaskEditor />
        <div>{isLoading && <p>Loading in progress...</p>}</div>
        <TaskList />
      </div>
    </>
  );
}
