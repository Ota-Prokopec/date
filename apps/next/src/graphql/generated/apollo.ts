import { Coords } from '@repo/ts-types';
import { Gender } from '@repo/ts-types';
import { SocialsData } from '@repo/ts-types';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
export type SaveNewUserInformationMutationFn = Apollo.MutationFunction<SaveNewUserInformationMutation, SaveNewUserInformationMutationVariables>;

/**
 * __useSaveNewUserInformationMutation__
 *
 * To run a mutation, you first call `useSaveNewUserInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNewUserInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNewUserInformationMutation, { data, loading, error }] = useSaveNewUserInformationMutation({
 *   variables: {
 *      birthDate: // value for 'birthDate'
 *      gender: // value for 'gender'
 *      lookingForGender: // value for 'lookingForGender'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSaveNewUserInformationMutation(baseOptions?: Apollo.MutationHookOptions<SaveNewUserInformationMutation, SaveNewUserInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNewUserInformationMutation, SaveNewUserInformationMutationVariables>(SaveNewUserInformationDocument, options);
      }
export type SaveNewUserInformationMutationHookResult = ReturnType<typeof useSaveNewUserInformationMutation>;
export type SaveNewUserInformationMutationResult = Apollo.MutationResult<SaveNewUserInformationMutation>;
export type SaveNewUserInformationMutationOptions = Apollo.BaseMutationOptions<SaveNewUserInformationMutation, SaveNewUserInformationMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation updateAccount($userProfileData: UpdateAccountArgs!) {
  updateAccount(userProfileData: $userProfileData)
}
    `;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      userProfileData: // value for 'userProfileData'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, options);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdateAccountProfilePictureDocument = gql`
    mutation updateAccountProfilePicture($pictureFile: Upload!) {
  updateAccountPicture(pictureFile: $pictureFile)
}
    `;
export type UpdateAccountProfilePictureMutationFn = Apollo.MutationFunction<UpdateAccountProfilePictureMutation, UpdateAccountProfilePictureMutationVariables>;

/**
 * __useUpdateAccountProfilePictureMutation__
 *
 * To run a mutation, you first call `useUpdateAccountProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountProfilePictureMutation, { data, loading, error }] = useUpdateAccountProfilePictureMutation({
 *   variables: {
 *      pictureFile: // value for 'pictureFile'
 *   },
 * });
 */
export function useUpdateAccountProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountProfilePictureMutation, UpdateAccountProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountProfilePictureMutation, UpdateAccountProfilePictureMutationVariables>(UpdateAccountProfilePictureDocument, options);
      }
export type UpdateAccountProfilePictureMutationHookResult = ReturnType<typeof useUpdateAccountProfilePictureMutation>;
export type UpdateAccountProfilePictureMutationResult = Apollo.MutationResult<UpdateAccountProfilePictureMutation>;
export type UpdateAccountProfilePictureMutationOptions = Apollo.BaseMutationOptions<UpdateAccountProfilePictureMutation, UpdateAccountProfilePictureMutationVariables>;
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

/**
 * __useGetAccountProfileQuery__
 *
 * To run a query within a React component, call `useGetAccountProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountProfileQuery, GetAccountProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountProfileQuery, GetAccountProfileQueryVariables>(GetAccountProfileDocument, options);
      }
export function useGetAccountProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountProfileQuery, GetAccountProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountProfileQuery, GetAccountProfileQueryVariables>(GetAccountProfileDocument, options);
        }
export function useGetAccountProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAccountProfileQuery, GetAccountProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAccountProfileQuery, GetAccountProfileQueryVariables>(GetAccountProfileDocument, options);
        }
export type GetAccountProfileQueryHookResult = ReturnType<typeof useGetAccountProfileQuery>;
export type GetAccountProfileLazyQueryHookResult = ReturnType<typeof useGetAccountProfileLazyQuery>;
export type GetAccountProfileSuspenseQueryHookResult = ReturnType<typeof useGetAccountProfileSuspenseQuery>;
export type GetAccountProfileQueryResult = Apollo.QueryResult<GetAccountProfileQuery, GetAccountProfileQueryVariables>;
export const GetHealthStatusDocument = gql`
    query getHealthStatus {
  getHealth
}
    `;

/**
 * __useGetHealthStatusQuery__
 *
 * To run a query within a React component, call `useGetHealthStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHealthStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHealthStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHealthStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetHealthStatusQuery, GetHealthStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHealthStatusQuery, GetHealthStatusQueryVariables>(GetHealthStatusDocument, options);
      }
export function useGetHealthStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHealthStatusQuery, GetHealthStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHealthStatusQuery, GetHealthStatusQueryVariables>(GetHealthStatusDocument, options);
        }
export function useGetHealthStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHealthStatusQuery, GetHealthStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHealthStatusQuery, GetHealthStatusQueryVariables>(GetHealthStatusDocument, options);
        }
export type GetHealthStatusQueryHookResult = ReturnType<typeof useGetHealthStatusQuery>;
export type GetHealthStatusLazyQueryHookResult = ReturnType<typeof useGetHealthStatusLazyQuery>;
export type GetHealthStatusSuspenseQueryHookResult = ReturnType<typeof useGetHealthStatusSuspenseQuery>;
export type GetHealthStatusQueryResult = Apollo.QueryResult<GetHealthStatusQuery, GetHealthStatusQueryVariables>;
export const TestMutationDocument = gql`
    mutation testMutation($file: Upload!) {
  test(file: $file)
}
    `;
export type TestMutationMutationFn = Apollo.MutationFunction<TestMutationMutation, TestMutationMutationVariables>;

/**
 * __useTestMutationMutation__
 *
 * To run a mutation, you first call `useTestMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testMutationMutation, { data, loading, error }] = useTestMutationMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useTestMutationMutation(baseOptions?: Apollo.MutationHookOptions<TestMutationMutation, TestMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TestMutationMutation, TestMutationMutationVariables>(TestMutationDocument, options);
      }
export type TestMutationMutationHookResult = ReturnType<typeof useTestMutationMutation>;
export type TestMutationMutationResult = Apollo.MutationResult<TestMutationMutation>;
export type TestMutationMutationOptions = Apollo.BaseMutationOptions<TestMutationMutation, TestMutationMutationVariables>;
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

/**
 * __useGetListOfRandomUsersQuery__
 *
 * To run a query within a React component, call `useGetListOfRandomUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListOfRandomUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListOfRandomUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetListOfRandomUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>(GetListOfRandomUsersDocument, options);
      }
export function useGetListOfRandomUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>(GetListOfRandomUsersDocument, options);
        }
export function useGetListOfRandomUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>(GetListOfRandomUsersDocument, options);
        }
export type GetListOfRandomUsersQueryHookResult = ReturnType<typeof useGetListOfRandomUsersQuery>;
export type GetListOfRandomUsersLazyQueryHookResult = ReturnType<typeof useGetListOfRandomUsersLazyQuery>;
export type GetListOfRandomUsersSuspenseQueryHookResult = ReturnType<typeof useGetListOfRandomUsersSuspenseQuery>;
export type GetListOfRandomUsersQueryResult = Apollo.QueryResult<GetListOfRandomUsersQuery, GetListOfRandomUsersQueryVariables>;
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

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserProfileQuery(baseOptions: Apollo.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables> & ({ variables: GetUserProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
      }
export function useGetUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export function useGetUserProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export type GetUserProfileQueryHookResult = ReturnType<typeof useGetUserProfileQuery>;
export type GetUserProfileLazyQueryHookResult = ReturnType<typeof useGetUserProfileLazyQuery>;
export type GetUserProfileSuspenseQueryHookResult = ReturnType<typeof useGetUserProfileSuspenseQuery>;
export type GetUserProfileQueryResult = Apollo.QueryResult<GetUserProfileQuery, GetUserProfileQueryVariables>;