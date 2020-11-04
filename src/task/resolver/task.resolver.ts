import {Resolver, Query, Args} from "@nestjs/graphql";
import { TaskType } from "../type/task.type";
import { TasksArgs } from "../dto/tasks.args";
import { HttpStatus, Inject} from "@nestjs/common";
import { HttpTaskException } from "../exception/http-task.exception";
import {plainToClass} from "class-transformer";
import { TaskModel } from "../model/task.model";
import { TaskService } from "../service/task.service";

@Resolver(of => TaskType)
export class TaskResolver {

    constructor(@Inject(TaskService) private readonly taskService: TaskService) {}

    @Query(returns => [TaskType])
    async tasks(@Args() args: TasksArgs): Promise<TaskType[]> {
        let tasks: TaskModel[]

        try {
            tasks = await this.taskService.findAll(args)
        } catch (e) {
            throw new HttpTaskException(
                `Error on list tasks - ${e.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR
            )
        }

        return plainToClass(TaskType, tasks, {
            strategy: 'excludeAll',
            excludeExtraneousValues: true
        });
    }

}
