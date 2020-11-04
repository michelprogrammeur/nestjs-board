import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
