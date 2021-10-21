export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EntireFieldWrapper<T> = T | (() => T | Promise<T>);
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Account = {
  __typename?: 'Account';
  id: EntireFieldWrapper<Scalars['Int']>;
  emailAddress: EntireFieldWrapper<Scalars['String']>;
  phone: EntireFieldWrapper<Scalars['String']>;
  firstName: EntireFieldWrapper<Scalars['String']>;
  lastName: EntireFieldWrapper<Scalars['String']>;
  createdAt: EntireFieldWrapper<Scalars['String']>;
  lastLoggedInAt?: EntireFieldWrapper<Maybe<Scalars['String']>>;
  role: EntireFieldWrapper<Role>;
};

export type AccountCreation = {
  emailAddress: Scalars['String'];
  phone: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type Assignment = {
  __typename?: 'Assignment';
  id: EntireFieldWrapper<Scalars['Int']>;
  title: EntireFieldWrapper<Scalars['String']>;
  subject: EntireFieldWrapper<Scalars['String']>;
  instructions?: EntireFieldWrapper<Maybe<Scalars['String']>>;
};

export type Cohort = {
  __typename?: 'Cohort';
  id: EntireFieldWrapper<Scalars['Int']>;
  name: EntireFieldWrapper<Scalars['String']>;
  startDate: EntireFieldWrapper<Scalars['Date']>;
  endDate: EntireFieldWrapper<Scalars['Date']>;
  scheduledDays: EntireFieldWrapper<Array<DayOfTheWeek>>;
};

export type CohortCreation = {
  name: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  scheduledDays: Array<DayOfTheWeek>;
};


export enum DayOfTheWeek {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}

export type Grade = {
  __typename?: 'Grade';
  id: EntireFieldWrapper<Scalars['Int']>;
  assignment: EntireFieldWrapper<Assignment>;
  grade: EntireFieldWrapper<Scalars['Int']>;
  cohort: EntireFieldWrapper<Cohort>;
  notes?: EntireFieldWrapper<Maybe<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: EntireFieldWrapper<Maybe<Account>>;
  createAssignment?: EntireFieldWrapper<Maybe<MutationResult>>;
  editAssignment?: EntireFieldWrapper<Maybe<MutationResult>>;
  deleteAssignment?: EntireFieldWrapper<Maybe<MutationResult>>;
  createCohort?: EntireFieldWrapper<Maybe<MutationResult>>;
  removeCohort?: EntireFieldWrapper<Maybe<MutationResult>>;
  addStudentToCohort?: EntireFieldWrapper<Maybe<MutationResult>>;
  removeStudentFromCohort?: EntireFieldWrapper<Maybe<MutationResult>>;
  createGrade?: EntireFieldWrapper<Maybe<MutationResult>>;
  editGrade?: EntireFieldWrapper<Maybe<MutationResult>>;
  createStudent?: EntireFieldWrapper<Maybe<MutationResult>>;
};


export type MutationCreateAccountArgs = {
  account: AccountCreation;
};


export type MutationCreateAssignmentArgs = {
  title: Scalars['String'];
  subject: Scalars['String'];
  instructions?: Maybe<Scalars['String']>;
};


export type MutationEditAssignmentArgs = {
  assignmentId: Scalars['Int'];
  title: Scalars['String'];
  subject: Scalars['String'];
  instructions?: Maybe<Scalars['String']>;
};


export type MutationDeleteAssignmentArgs = {
  assignmentId: Scalars['Int'];
};


export type MutationCreateCohortArgs = {
  name: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  scheduledDays: Array<DayOfTheWeek>;
};


export type MutationRemoveCohortArgs = {
  id: Scalars['Int'];
};


export type MutationAddStudentToCohortArgs = {
  cohortId: Scalars['Int'];
  studentId: Scalars['Int'];
};


export type MutationRemoveStudentFromCohortArgs = {
  cohortId: Scalars['Int'];
  studentId: Scalars['Int'];
};


export type MutationCreateGradeArgs = {
  assignment: Scalars['Int'];
  cohortId: Scalars['Int'];
  grade: Scalars['Int'];
  assignmentId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};


export type MutationEditGradeArgs = {
  gradeId: Scalars['Int'];
  cohortId: Scalars['Int'];
  grade: Scalars['Int'];
  assignmentId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};


export type MutationCreateStudentArgs = {
  student: StudentCreation;
  cohortId?: Maybe<Scalars['Int']>;
};

export type MutationResult = {
  __typename?: 'MutationResult';
  status: EntireFieldWrapper<Scalars['Int']>;
  message?: EntireFieldWrapper<Maybe<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  account?: EntireFieldWrapper<Maybe<Account>>;
  accountByEmail?: EntireFieldWrapper<Maybe<Account>>;
  assignment: EntireFieldWrapper<Assignment>;
  assignments: EntireFieldWrapper<Array<Assignment>>;
  assignmentsBySubject: EntireFieldWrapper<Array<Assignment>>;
  cohort: EntireFieldWrapper<Cohort>;
  cohorts: EntireFieldWrapper<Array<Cohort>>;
  grade?: EntireFieldWrapper<Maybe<Grade>>;
  gradesByAssignment?: EntireFieldWrapper<Maybe<Array<Maybe<Grade>>>>;
  gradesByStudent?: EntireFieldWrapper<Maybe<Array<Maybe<Grade>>>>;
  student: EntireFieldWrapper<Student>;
  students: EntireFieldWrapper<Array<Student>>;
  studentByEmail: EntireFieldWrapper<Student>;
  studentsByCohort: EntireFieldWrapper<Array<Student>>;
};


export type QueryAccountArgs = {
  id: Scalars['Int'];
};


export type QueryAccountByEmailArgs = {
  emailAddress: Scalars['String'];
};


export type QueryAssignmentArgs = {
  id: Scalars['Int'];
};


export type QueryAssignmentsBySubjectArgs = {
  subject: Scalars['String'];
};


export type QueryCohortArgs = {
  id: Scalars['Int'];
};


export type QueryGradeArgs = {
  id: Scalars['Int'];
};


export type QueryGradesByAssignmentArgs = {
  assignmentId: Scalars['Int'];
  cohortId: Scalars['Int'];
};


export type QueryGradesByStudentArgs = {
  studentId: Scalars['Int'];
  cohortId?: Maybe<Scalars['Int']>;
};


export type QueryStudentArgs = {
  id: Scalars['Int'];
};


export type QueryStudentsArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryStudentByEmailArgs = {
  emailAddress: Scalars['String'];
};


export type QueryStudentsByCohortArgs = {
  id: Scalars['Int'];
};

export enum Role {
  Admin = 'admin',
  Instructor = 'instructor',
  Student = 'student'
}

export type Student = {
  __typename?: 'Student';
  id: EntireFieldWrapper<Scalars['Int']>;
  emailAddress: EntireFieldWrapper<Scalars['String']>;
  phone: EntireFieldWrapper<Scalars['String']>;
  firstName: EntireFieldWrapper<Scalars['String']>;
  lastName: EntireFieldWrapper<Scalars['String']>;
  createdAt: EntireFieldWrapper<Scalars['String']>;
  updatedAt: EntireFieldWrapper<Scalars['String']>;
  githubUsername?: EntireFieldWrapper<Maybe<Scalars['String']>>;
  cohort?: EntireFieldWrapper<Maybe<Cohort>>;
};

export type StudentCreation = {
  emailAddress: Scalars['String'];
  phone: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  githubUsername?: Maybe<Scalars['String']>;
};
