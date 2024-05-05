import { DatabaseType } from "../Dependencies";
import { StudentMongoDBRepository } from "./MongoDB/StudentRepository";
import { SubjectMongoDBRepository } from "./MongoDB/SubjectRepository";
import { TutorMongoDBRepository } from "./MongoDB/TutorRepository";
import { StudentMySQLRepository } from "./MySQL/StudentRepository";
import { SubjectMySQLRepository } from "./MySQL/SubjectRepository";
import { TutorMySQLRepository } from "./MySQL/TutorRepository";

export function GetStudentRepository(dbType:DatabaseType): StudentMySQLRepository | StudentMongoDBRepository {
    if (dbType === 'MySQL') return new StudentMySQLRepository();
    else return new StudentMongoDBRepository();
}

export function GetSubjectRepository(dbType:DatabaseType): SubjectMySQLRepository | SubjectMongoDBRepository {
    if (dbType === 'MySQL') return new SubjectMySQLRepository();
    else return new SubjectMongoDBRepository();
}

export function GetTutorRepository(dbType:DatabaseType): TutorMySQLRepository | TutorMongoDBRepository {
    if (dbType === 'MySQL') return new TutorMySQLRepository();
    else return new TutorMongoDBRepository();
}