import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../Model/Task';
import { fetchTasks } from '../redux/operations/task-operation';
import { TaskSliceActions } from '../redux/slices/task-slice';
import TaskCardHome from './TaskCardHome';

const DashboardHome = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const tasks = useSelector((state) => state.task.filteredTask);

  const fetchT = async () => {
    if (tasks.length == 0) {
      dispatch(fetchTasks(token));
    }
  };

  const onChangeStatus = (e) => {
    dispatch(TaskSliceActions.filterStatus(e.target.value));
  };

  useEffect(() => {
    fetchT();
  }, [dispatch]);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          {/* sidebar */}

          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2'>Dashboard</h1>

              <div className='mb-2 mb-md-0'>
                <div className='d-flex align-items-center ms-3 ms-lg-4'></div>
                <div className='d-flex align-items-center ms-3 ms-lg-4'></div>
              </div>

              <ul className='list-inline'>
                <li className='list-inline-item'>
                  <select
                    className='dropdown form-control pull-right'
                    placeholder='Filter By status'
                    onChange={onChangeStatus}
                    autoComplete='off'>
                    <option value='all'>all</option>
                    <option value='inProgress'>in Progress</option>
                    <option value='complete'>Complete</option>
                    <option value='waiting'>Waiting</option>
                    <option value='canceled'>Canceled</option>
                  </select>
                </li>
                {/* <li className='list-inline-item mt-3'>
                  <select
                    className='dropdown form-control pull-right'
                    placeholder='Filter By status'
                    autoComplete='off'>
                    <option value=''>Filter By category</option>
                    <option value='4'>Category 1</option>
                    <option value='1'>Category 2</option>
                    <option value='3'>Category 3</option>
                    <option value='5'>Category 4</option>
                  </select>
                </li> */}
              </ul>
            </div>

            <div className='row mt-5'>
              {tasks.length == 0 && <h1>No Tasks Available</h1>}
              {tasks.map((task) => {
                return <TaskCardHome key={task.id} task={task} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
