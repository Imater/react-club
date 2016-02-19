import { Actions } from 'flummox';

export default class TaskActions extends Actions {
    
    createTask(taskName) {
        return {
            taskName,
        };
    }

    deleteTask(index) {
        return {
            index,
        };
    }
}
