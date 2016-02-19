import { Store } from 'flummox';

export default class TaskStore extends Store {
    
    constructor(flux) {
        super();

        const taskActionIds = flux.getActionIds('tasks');
        this.register(taskActionIds.createTask, this.handleNewTask);
        this.register(taskActionIds.deleteTask, this.handleDeleteTask);

        this.state = {
            tasks: [
                'Don\'t let your dreams be dreams',
                'Just do it',
                'Nothing is impossible',
            ],
        };
    }

    handleNewTask(newTask) {
        const { tasks } = this.state;
        const { taskName } = newTask;

        this.setState({
            tasks: [...tasks, taskName],
        });
    }

    handleDeleteTask(indexObj) {
        const { index } = indexObj;
        const { tasks } = this.state;

        this.setState({
            tasks: tasks.filter((task, key) => index !== key),
        });
    }
}
