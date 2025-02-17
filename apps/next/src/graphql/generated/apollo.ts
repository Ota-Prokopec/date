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
  Coords: { input: {lat: number, lng: number}; output: {lat: number, lng: number}; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  Date: { input: Date; output: Date; }
  File: { input: File; output: File; }
  Gender: { input: "male" | "female"; output: "male" | "female"; }
  GraphQLHealth: { input: {ok: boolean}; output: {ok: boolean}; }
  Socials: { input: {instagram: {
        profileId: string;
        link: string;
  }}; output: {instagram: {
        profileId: string;
        link: string;
  }}; }
};

export type Account = {
  __typename?: 'Account';
  bio?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  coords?: Maybe<Scalars['Coords']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  lookingForGender?: Maybe<Scalars['Gender']['output']>;
  profilePictureURL?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['Socials']['output']>;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  setHealth?: Maybe<Scalars['GraphQLHealth']['output']>;
  test?: Maybe<Scalars['Boolean']['output']>;
  updateAccount?: Maybe<Scalars['Boolean']['output']>;
  updateAccountPicture?: Maybe<Scalars['Boolean']['output']>;
  uploadFile?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationTestArgs = {
  gender: Scalars['Gender']['input'];
};


export type MutationUpdateAccountArgs = {
  userProfileData: UpdateAccountArgs;
};


export type MutationUpdateAccountPictureArgs = {
  pictureFile: Scalars['File']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['File']['input'];
};

export type Query = {
  __typename?: 'Query';
  getHealth?: Maybe<Scalars['GraphQLHealth']['output']>;
  getUserProfile?: Maybe<User>;
};


export type QueryGetUserProfileArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAccountArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  lookingForGender?: InputMaybe<Scalars['Gender']['input']>;
  socials?: InputMaybe<Scalars['Socials']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  lookingForGender?: Maybe<Scalars['Gender']['output']>;
  profilePictureURL?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['Socials']['output']>;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
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


export type SaveNewUserInformationMutation = { __typename?: 'Mutation', updateAccount?: boolean | null | undefined };

export type GetHealthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHealthStatusQuery = { __typename?: 'Query', getHealth?: {ok: boolean} | null | undefined };

export type GetUserProfileQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile?: { __typename?: 'User', age?: number | null | undefined, bio?: string | null | undefined, gender?: "male" | "female" | null | undefined, lookingForGender?: "male" | "female" | null | undefined, profilePictureURL?: string | null | undefined, socials?: {instagram: {
          profileId: string;
          link: string;
    }} | null | undefined, userId: string, username?: string | null | undefined } | null | undefined };


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
export const GetUserProfileDocument = gql`
    query getUserProfile($userId: String) {
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
export function useGetUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
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