import { Resolver, Query, Arg } from 'type-graphql';
import { Subject, Course } from '../model';

export default class CourseResolver {

    @Query(returns => Course)
    course(
        @Arg('name', { nullable: true }) name: string,
        @Arg('code', { nullable: true }) code: string): Course {
        let course = new Course();
        course.name = name || 'Computer Science 101';
        course.code = code || 'COMPSCI 101'
        course.description = 'Some course descriptions';
        course.prerequisite = [];
        let subject = new Subject();
        subject.name = 'Computer Science';
        subject.description = 'Some Computer Science Faculty description'
        course.subject = subject;
        return course;
    }

    @Query(returns => [Course])
    courses(): Course[] {
        return [];
    }

}