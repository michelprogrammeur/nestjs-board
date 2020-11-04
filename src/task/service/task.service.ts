import {HttpStatus, Injectable} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {TaskInterface} from "../type/task.interface";
import {TasksArgs} from "../dto/tasks.args";
import {tasksMock} from "../mock/tasks.mock";
import {TaskModel} from "../model/task.model";
import { TaskServiceException } from "./task.service.exception";
import {TaskServiceInterface} from "./task.service.interface";

@Injectable()
export class TaskService implements TaskServiceInterface {

    async findAll(args: TasksArgs): Promise<TaskInterface[]> {
        let tasks: TaskModel[];

        try {
            const result = Promise.resolve(tasksMock)
            tasks = await result
        } catch (e) {
            if (e.status === 404) {
                return null;
            }
            throw new TaskServiceException(
                `TaskService - Error on findAll ${e.message}`,
                HttpStatus.FORBIDDEN,
            );
        }

        return tasks.map((task) => plainToClass(TaskModel, task, {
            strategy: 'excludeAll',
            excludeExtraneousValues: true
        }));
    }

}
