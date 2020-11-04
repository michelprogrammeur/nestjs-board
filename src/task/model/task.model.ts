import {Expose} from "class-transformer";
import {TaskInterface} from "../type/task.interface";

export class TaskModel implements TaskInterface{
    @Expose()
    uuid: string;

    @Expose()
    title: string;

    @Expose()
    content: string;

    @Expose()
    status: string;

    @Expose()
    createdAt: string;

    @Expose()
    updatedAt?: string;
}
