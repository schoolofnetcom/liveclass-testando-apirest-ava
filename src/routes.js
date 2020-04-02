import tasks from './tasks';

export default (app) => {
    app.use('/tasks', tasks);
}