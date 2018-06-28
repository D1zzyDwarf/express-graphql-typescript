import { Resolver, Query, Arg } from 'type-graphql';
import { Faculty } from '../model';

export default class FacultyResolver {

    @Query(returns => Faculty)
    faculty(@Arg('name') name: string): Faculty {
        let faculty = new Faculty();
        faculty.name = name || 'Faculty of Science';
        faculty.description = 'Some faculty descriptions';
        return faculty;
    }

    @Query(returns => [Faculty])
    faculties() {
        return []
    }

}