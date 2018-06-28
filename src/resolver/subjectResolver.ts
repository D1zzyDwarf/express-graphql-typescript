import { Resolver, Query, Arg } from 'type-graphql';
import { Subject } from '../model'

export default class SubjectResolver {
    @Query(returns => Subject)
    subject(@Arg('name') name: string): Subject {
        let subject = new Subject();
        subject.name = name || 'Computer Science';
        subject.description = 'Some subject descriptions';
        return subject;
    }

    @Query(returns => [Subject])
    subjects() {
        return []
    }
}