import { TaskSliceActions } from '../slices/task-slice';

export const fetchTasks = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://task-app-be8da-default-rtdb.firebaseio.com/tasks.json?auth=${token}`
      );
      if (!res.ok) {
        throw new Error("Could't fetch data");
      }
      const data = res.json();
      return data;
    };
    try {
      const result = await fetchData();
      const tasks = [];
      for (const key in result) {
        const task = result[key];
        task.id = key;
        tasks.push(task);
      }
      dispatch(TaskSliceActions.refreshTasks(tasks));
    } catch (error) {}
  };
};

export const saveTask = (token, task) => {
  return async (dispatch) => {
    const saveHandler = async () => {
      const res = await fetch(
        `https://task-app-be8da-default-rtdb.firebaseio.com/tasks.json?auth=${token}`,
        {
          method: 'POST',
          body: JSON.stringify(task),
        }
      );
      if (!res.ok) {
        throw new Error("Could't save data");
      }
      const data = res.json();
      return data;
    };
    try {
      const result = await saveHandler();
      task.id = result.name;
      dispatch(TaskSliceActions.addNewTask(task));
    } catch (error) {}
  };
};

export const deleteTask = (token, id) => {
  return async (dispatch) => {
    const deleteHandler = async () => {
      const res = await fetch(
        `https://task-app-be8da-default-rtdb.firebaseio.com/tasks/${id}.json?auth=${token}`,
        {
          method: 'Delete',
        }
      );
      if (!res.ok) {
        throw new Error("Could't delete data");
      }
      const data = res.json();
      return data;
    };
    try {
      await deleteHandler();
      dispatch(TaskSliceActions.deleteTask(id));
    } catch (error) {}
  };
};
export const updateTask = (token, id, status) => {
  return async (dispatch) => {
    const updateHandler = async () => {
      const res = await fetch(
        `https://task-app-be8da-default-rtdb.firebaseio.com/tasks/${id}.json?auth=${token}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ status: status }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!res.ok) {
        throw new Error("Could't delete data");
      }
      const data = res.json();
      return data;
    };
    try {
      const res = await updateHandler();
      dispatch(TaskSliceActions.updateTask({ id: id, status: status }));
    } catch (error) {}
  };
};
