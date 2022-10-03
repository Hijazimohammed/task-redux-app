class Task {
  id;
  name;
  description;
  startDate;
  endDate;
  status;

  constructor(name, description, startDate, endDate) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = 'waiting';
  }
}

export default Task;
