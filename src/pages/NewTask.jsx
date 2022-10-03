import React, { useRef } from 'react';
import { showDialog } from '../helpers';
import Task from '../Model/Task';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveTask } from '../redux/operations/task-operation';

const NewTask = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const clearFields = () => {
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    startDateRef.current.value = '';
    endDateRef.current.value = '';
  };

  const checkFields = () => {
    if (
      nameRef.current.value == '' &&
      descriptionRef.current.value == '' &&
      startDateRef.current.value == '' &&
      endDateRef.current.value == ''
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (checkFields()) {
      const task = new Task(
        nameRef.current.value,
        descriptionRef.current.value,
        startDateRef.current.value,
        endDateRef.current.value
      );

      try {
        dispatch(saveTask(token, task));
        clearFields();
        showDialog('Success', 'Task create successfully', 'success');
      } catch (error) {
        showDialog('Error', 'Failed create task', 'error');
      }
    } else {
      showDialog('Error', 'Enter all feilds', 'error');
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <form
            onSubmit={onSubmitHandler}
            className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2 mt-3'>Add New Task </h1>
            </div>

            <div className='row mt-5'></div>

            <div className='col-md-12'>
              <div className='form-outline mb-4'>
                <label className='form-label'>Task name</label>
                <input
                  ref={nameRef}
                  type='text'
                  id='loginName'
                  className='form-control'
                  placeholder='Task name'
                />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-outline mb-4'>
                <label className='form-label'>Description</label>
                <input
                  ref={descriptionRef}
                  type='text'
                  className='form-control'
                  placeholder='Task description'
                />
              </div>
            </div>
            {/* <div className='col-md-12'>
              <div className='form-outline mb-4'>
                <label className='form-label'>Task Category</label>
                <input
                  id='input-tags'
                  value='category 1,category 2, category 3 , name of category'
                  autoComplete='off'
                  placeholder='Add Category?'
                />
              </div>
            </div> */}
            <div className='col-md-12'>
              <div className='form-outline mb-4'>
                <label className='form-label'>Image For Task</label>
                <input className='form-control' type='file' id='formFile' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-outline mb-4'>
                <label className='form-label'>Start date</label>
                <input
                  ref={startDateRef}
                  type='date'
                  className='form-control'
                  placeholder='Task name'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>End date</label>
              <div className='form-outline mb-4'>
                <input
                  ref={endDateRef}
                  type='date'
                  className='form-control'
                  placeholder='Task name'
                />
              </div>
            </div>
            <div>
              <button type='submit' className='pull-right btn btn-main mb-4'>
                Add New Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTask;
