import {Module} from "@nestjs/common";
import {TaskResolver} from "./resolver/task.resolver";
import {TaskService} from "./service/task.service";

@Module({
    providers: [TaskResolver, TaskService],
})
export class TaskModule {}
