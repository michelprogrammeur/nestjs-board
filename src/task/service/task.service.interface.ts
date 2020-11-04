import {TasksArgs} from "../dto/tasks.args";
import {TaskInterface} from "../type/task.interface";

export interface TaskServiceInterface {
    findAll(args: TasksArgs): Promise<TaskInterface[]>
}
