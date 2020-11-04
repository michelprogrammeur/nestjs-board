import { Test, TestingModule } from '@nestjs/testing';
import {TaskResolver} from "./task.resolver";
import {TaskService} from "../service/task.service";
import {tasksMock} from "../mock/tasks.mock";

describe('AppController', () => {
    let taskResolver: TaskResolver;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [TaskResolver, TaskService],
        }).compile();

        taskResolver = app.get<TaskResolver>(TaskResolver);
    });

    describe('root', () => {
        it('should return task collection', () => {
            expect(taskResolver.tasks({ size: 10, offsetStart: 0 })).toBe(tasksMock);
        });
    });
});
