import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';
import { Subject } from './'

@ObjectType()
export default class Course {

    @Field()
    name: string;

    @Field()
    code: string;

    @Field()
    description: string;

    @Field(type => [Course])
    prerequisite: Course[];

    @Field(type => Subject)
    subject: Subject;

}