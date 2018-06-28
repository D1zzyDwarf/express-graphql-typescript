import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';
import { Course, Faculty } from './'

@ObjectType()
export default class Subject {

    @Field()
    name: string;

    @Field(type => Faculty)
    faculty: Faculty;

    @Field()
    description: string;

    @Field(type => [Course])
    courses: Course[];

}