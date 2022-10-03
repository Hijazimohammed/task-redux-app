import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { showDialog } from '../helpers';
import { deleteTask, updateTask } from '../redux/operations/task-operation';
import { TaskSliceActions } from '../redux/slices/task-slice';
import Image from '../Resources/img/2.png';

const TaskDetailsPage = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const taskDetails = tasks.filter((task) => task.id == id)[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeStatus = (status) => {
    try {
      dispatch(updateTask(token, id, status));
    } catch (error) {}
  };

  const onDeleteHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(deleteTask(token, id));
          showDialog('Success', 'Task deleted successfully', 'success');
          navigate('/dashboard', { replace: true });
        } catch (error) {
          showDialog('Error', 'Failed delete task', 'error');
        }
      }
    });
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2'>Dashboard</h1>

              <div className=' mb-2 mb-md-0'>
                <div className='d-flex align-items-center ms-3 ms-lg-4'></div>
                <div className='d-flex align-items-center ms-3 ms-lg-4'></div>
              </div>

              <div className='btn-toolbar mb-2 mb-md-0'>
                <div className='btn-group me-2'>
                  <button
                    type='button'
                    className={
                      taskDetails.status == 'inProgress'
                        ? `btn btn-sm btn-outline-secondary active`
                        : 'btn btn-sm btn-outline-secondary'
                    }
                    onClick={() => changeStatus('inProgress')}>
                    in progress
                  </button>
                  <button
                    type='button'
                    className={
                      taskDetails.status == 'complete'
                        ? `btn btn-sm btn-outline-secondary active`
                        : 'btn btn-sm btn-outline-secondary'
                    }
                    onClick={() => changeStatus('complete')}>
                    Complete
                  </button>
                  <button
                    type='button'
                    className={
                      taskDetails.status == 'waiting'
                        ? `btn btn-sm btn-outline-secondary active`
                        : 'btn btn-sm btn-outline-secondary'
                    }
                    onClick={() => changeStatus('waiting')}>
                    Waiting
                  </button>
                  <button
                    type='button'
                    className={
                      taskDetails.status == 'canceled'
                        ? `btn btn-sm btn-outline-secondary active`
                        : 'btn btn-sm btn-outline-secondary'
                    }
                    onClick={() => changeStatus('canceled')}>
                    Canceled
                  </button>
                </div>
                <button
                  type='button'
                  className='btn btn-primary-main btn-primary'
                  onClick={onDeleteHandler}>
                  <span data-feather='edit-3'></span> Delete
                </button>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-6'>
                <img src={Image} className='img-fluid rounded de-img' alt='' />
              </div>
              <div className='col-md-6  mt-5'>
                <div className=' mb-3'>
                  <span data-feather='bookmark' className='main-color'></span>{' '}
                  <strong>Title:</strong> {taskDetails.name}
                </div>
                {/* <div className='mb-3'>
                  <span data-feather='layers' className='main-color'></span>{' '}
                  <strong>Category:</strong> category title
                </div> */}
                <div className=''>
                  <span data-feather='calendar' className='main-color'></span>{' '}
                  <strong>Date:</strong> {taskDetails.startDate} to{' '}
                  {taskDetails.endDate}
                </div>
              </div>

              <div className='row mt-5'>
                <div className='task-info'>
                  <p>{taskDetails.description}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TaskDetailsPage;
