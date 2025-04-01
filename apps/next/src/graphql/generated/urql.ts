import { Coords } from '@repo/ts-types';
import { Gender } from '@repo/ts-types';
import { SocialsData } from '@repo/ts-types';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Coords: { input: Coords; output: Coords; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  Date: { input: Date; output: Date; }
  Gender: { input: Gender; output: Gender; }
  GraphQLHealth: { input: {ok: boolean}; output: {ok: boolean}; }
  Socials: { input: SocialsData; output: SocialsData; }
  Upload: { input: File; output: File; }
};

export type Account = {
  __typename?: 'Account';
  age?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  isAccountCompleted: Scalars['Boolean']['output'];
  lookingForGender?: Maybe<Scalars['Gender']['output']>;
  profilePictureURL?: Maybe<Scalars['String']['output']>;
  socials: Scalars['Socials']['output'];
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setHealth: Scalars['GraphQLHealth']['output'];
  test: Scalars['String']['output'];
  updateAccount: Scalars['Boolean']['output'];
  updateAccountPicture: Scalars['Boolean']['output'];
};


export type MutationTestArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpdateAccountArgs = {
  userProfileData: UpdateAccountArgs;
};


export type MutationUpdateAccountPictureArgs = {
  pictureFile: Scalars['Upload']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAccountProfile: Account;
  getHealth: Scalars['GraphQLHealth']['output'];
  getListOfRandomUsers: Array<User>;
  getUserProfile: User;
  test: T;
};


export type QueryGetListOfRandomUsersArgs = {
  limit: Scalars['Int']['input'];
};


export type QueryGetUserProfileArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type T = {
  __typename?: 'T';
  date: Scalars['Date']['output'];
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['String']['output'];
  res: Scalars['Int']['output'];
};

export type UpdateAccountArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  lookingForGender?: InputMaybe<Scalars['Gender']['input']>;
  socials?: InputMaybe<Scalars['Socials']['input']>;
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  gender: Scalars['Gender']['output'];
  lookingForGender: Scalars['Gender']['output'];
  profilePictureURL: Scalars['String']['output'];
  socials: Scalars['Socials']['output'];
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Coords = {
  __typename?: 'coords';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type SaveNewUserInformationMutationVariables = Exact<{
  birthDate: Scalars['Date']['input'];
  gender: Scalars['Gender']['input'];
  lookingForGender: Scalars['Gender']['input'];
  username: Scalars['String']['input'];
}>;


export type SaveNewUserInformationMutation = { __typename?: 'Mutation', updateAccount: boolean };

export type UpdateAccountMutationVariables = Exact<{
  userProfileData: UpdateAccountArgs;
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount: boolean };

export type UpdateAccountProfilePictureMutationVariables = Exact<{
  pictureFile: Scalars['Upload']['input'];
}>;


export type UpdateAccountProfilePictureMutation = { __typename?: 'Mutation', updateAccountPicture: boolean };

export type GetAccountProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountProfileQuery = { __typename?: 'Query', getAccountProfile: { __typename?: 'Account', bio?: string | null | undefined, birthDate?: Date | null | undefined, gender?: Gender | null | undefined, lookingForGender?: Gender | null | undefined, profilePictureURL?: string | null | undefined, socials: SocialsData, userId: string, username: string, age?: number | null | undefined, isAccountCompleted: boolean } };

export type GetHealthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHealthStatusQuery = { __typename?: 'Query', getHealth: {ok: boolean} };

export type TestMutationMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type TestMutationMutation = { __typename?: 'Mutation', test: string };

export type GetListOfRandomUsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetListOfRandomUsersQuery = { __typename?: 'Query', getListOfRandomUsers: Array<{ __typename?: 'User', age: number, gender: Gender, profilePictureURL: string, userId: string, username: string }> };

export type GetUserProfileQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile: { __typename?: 'User', age: number, bio?: string | null | undefined, gender: Gender, lookingForGender: Gender, profilePictureURL: string, socials: SocialsData, userId: string, username: string } };


export const SaveNewUserInformationDocument = gql`
    mutation saveNewUserInformation($birthDate: Date!, $gender: Gender!, $lookingForGender: Gender!, $username: String!) {
  updateAccount(
    userProfileData: {birthDate: $birthDate, gender: $gender, lookingForGender: $lookingForGender, username: $username}
  )
}
    `;

export function useSaveNewUserInformationMutation() {
  return Urql.useMutation<SaveNewUserInformationMutation, SaveNewUserInformationMutationVariables>(SaveNewUserInformationDocument);
};
export const UpdateAccountDocument = gql`
    mutation updateAccount($userProfileData: UpdateAccountArgs!) {
  updateAccount(userProfileData: $userProfileData)
}
    `;

export function useUpdateAccountMutation() {
  return Urql.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument);
};
export const UpdateAccountProfilePictureDocument = gql`
    mutation updateAccountProfilePicture($pictureFile: Upload!) {
  updateAccountPicture(pictureFile: $pictureFile)
}
    `;

export function useUpdateAccountProfilePictureMutation() {
  return Urql.useMutation<UpdateAccountProfilePictureMutation, UpdateAccountProfilePictureMutationVariables>(UpdateAccountProfilePictureDocument);
};
export const GetAccountProfileDocument = gql`
    query getAccountProfile {
  getAccountProfile {
    bio
    birthDate
    gender
    lookingForGender
    profilePictureURL
    socials
    userId
    username
    age
    isAccountCompleted
  }
}
    `;

export function useGetAccountProfileQuery(options?: Omit<Urql.UseQueryArgs<GetAccountProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAccountProfileQuery, GetAccountProfileQueryVariables>({ query: GetAccountProfileDocument, ...options });
};
export const GetHealthStatusDocument = gql`
    query getHealthStatus {
  getHealth
}
    `;

export function useGetHealthStatusQuery(options?: Omit<Urql.UseQueryArgs<GetHealthStatusQueryVariables>, 'query'>) {
  return Urql.useQuery<GetHealthStatusQuery, GetHealthStatusQueryVariables>({ query: GetHealthStatusDocument, ...options });
};
export const TestMutationDocument = gql`
    mutation testMutation($file: Upload!) {
  test(file: $file)
}
    `;

export function useTestMutationMutation() {
  return Urql.useMutation<TestMutationMutation, TestMutationMutationVariables>(TestMutationDocument);
};
export const GetListOfRandomUsersDocument = gql`
    query getListOfRandomUsers($limit: Int = 4) {
  getListOfRandomUsers(limit: $limit) {
    age
    gender
    profilePictureURL
    userId
    username
  }
}
    `;

export function useGetListOfRandomUsersQuery(options?: Omit<Urql.UseQueryArgs<GetListOfRandomUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>({ query: GetListOfRandomUsersDocument, ...options });
};
export const GetUserProfileDocument = gql`
    query getUserProfile($userId: String!) {
  getUserProfile(userId: $userId) {
    age
    bio
    gender
    lookingForGender
    profilePictureURL
    socials
    userId
    username
  }
}
    `;

export function useGetUserProfileQuery(options: Omit<Urql.UseQueryArgs<GetUserProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>({ query: GetUserProfileDocument, ...options });
};