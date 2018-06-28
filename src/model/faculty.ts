import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Faculty {

    @Field()
    name: string;

    @Field()
    description: string;

}