import {ObjectType, Field} from "@nestjs/graphql";
import {Expose} from "class-transformer";
import { TaskInterface } from "./task.interface";

@ObjectType()
export class TaskType implements TaskInterface {
    @Field()
    @Expose()
    uuid: string;

    @Field({ nullable: true })
    @Expose()
    title: string;

    @Field({ nullable: true })
    @Expose()
    content: string;

    @Expose()
    @Field({ nullable: true })
    status: string;

    @Expose()
    @Field()
    createdAt: string;

    @Expose()
    @Field({ nullable: true })
    updatedAt?: string;
}
