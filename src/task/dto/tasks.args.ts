import {ArgsType, Field, Int} from "@nestjs/graphql";

@ArgsType()
export class TasksArgs {
    @Field(type => Int)
    size: number | null;

    @Field(type => Int)
    offsetStart: number | null;
}
