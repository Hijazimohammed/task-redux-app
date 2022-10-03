import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Resources/img/1.png';

const TaskCardHome = ({ task }) => {
  return (
    <>
      <div className='col-md-4'>
        <div className='card task card'>
          <img src={Image} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{task.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              <span data-feather='calendar'></span> {task.startDate}
              <span className='main-color'> To </span> {task.endDate}
            </h6>
            <p className='card-text'>{task.description}</p>
            <hr />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <span
                className={
                  task.status == 'waiting'
                    ? `btn badge-light-warning status-btn`
                    : task.status == 'canceled'
                    ? `btn badge-light-danger status-btn `
                    : task.status == 'inProgress'
                    ? `btn badge-light-warning status-btn `
                    : task.status == 'complete'
                    ? `btn badge-light-primary status-btn `
                    : ''
                }>
                {task.status}
              </span>
              <Link
                to={`/dashboard/${task.id}`}
                className='btn btn-bg-gray pull-right'>
                <span data-feather='arrow-right'>💨</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCardHome;
