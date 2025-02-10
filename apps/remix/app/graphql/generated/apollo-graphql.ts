import { gql } from '@apollo/client/core/index';
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
  File: { input: any; output: any; }
  Gender: { input: "male"|"female"; output: "male"|"female"; }
  GraphQLHealth: { input: {ok: boolean}; output: {ok: boolean}; }
};

export type Account = {
  __typename?: 'Account';
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setHealth: Scalars['GraphQLHealth']['output'];
  updateUserProfile: UpdateUserProfile;
  updateUserProfilePicture: Scalars['Boolean']['output'];
  uploadFile: Scalars['Boolean']['output'];
};


export type MutationUpdateUserProfileArgs = {
  userProfileData: UpdateUserProfileArgs;
};


export type MutationUpdateUserProfilePictureArgs = {
  pictureFile: Scalars['File']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['File']['input'];
};

export type Query = {
  __typename?: 'Query';
  getHealth: Scalars['GraphQLHealth']['output'];
  getUserProfile: UserProfile;
};


export type QueryGetUserProfileArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfile = {
  __typename?: 'UpdateUserProfile';
  userId: Scalars['String']['output'];
};

export type UpdateUserProfileArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  username: Scalars['String']['input'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  userAge?: Maybe<Scalars['Int']['output']>;
  userBio?: Maybe<Scalars['String']['output']>;
  userGender?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
  userPictureUrl?: Maybe<Scalars['String']['output']>;
};

export type Coords = {
  __typename?: 'coords';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type GetHealthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHealthQuery = { __typename?: 'Query', getHealth: {ok: boolean} };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['File']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: boolean };

export type UpdateUserProfileMutationVariables = Exact<{
  bio?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  username: Scalars['String']['input'];
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UpdateUserProfile', userId: string } };

export type UpdateUserProfilePictureMutationVariables = Exact<{
  pictureFile: Scalars['File']['input'];
}>;


export type UpdateUserProfilePictureMutation = { __typename?: 'Mutation', updateUserProfilePicture: boolean };

export type GetUserProfileQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile: { __typename?: 'UserProfile', userAge?: number | null | undefined, userBio?: string | null | undefined, userGender?: string | null | undefined, userId: string, userName: string, userPictureUrl?: string | null | undefined } };


export const GetHealthDocument = gql`
    query getHealth {
  getHealth
}
    `;

/**
 * __useGetHealthQuery__
 *
 * To run a query within a React component, call `useGetHealthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHealthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHealthQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHealthQuery(baseOptions?: Apollo.QueryHookOptions<GetHealthQuery, GetHealthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHealthQuery, GetHealthQueryVariables>(GetHealthDocument, options);
      }
export function useGetHealthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHealthQuery, GetHealthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHealthQuery, GetHealthQueryVariables>(GetHealthDocument, options);
        }
export function useGetHealthSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHealthQuery, GetHealthQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHealthQuery, GetHealthQueryVariables>(GetHealthDocument, options);
        }
export type GetHealthQueryHookResult = ReturnType<typeof useGetHealthQuery>;
export type GetHealthLazyQueryHookResult = ReturnType<typeof useGetHealthLazyQuery>;
export type GetHealthSuspenseQueryHookResult = ReturnType<typeof useGetHealthSuspenseQuery>;
export type GetHealthQueryResult = Apollo.QueryResult<GetHealthQuery, GetHealthQueryVariables>;
export const UploadFileDocument = gql`
    mutation uploadFile($file: File!) {
  uploadFile(file: $file)
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation updateUserProfile($bio: String, $gender: Gender, $username: String!) {
  updateUserProfile(
    userProfileData: {bio: $bio, gender: $gender, username: $username}
  ) {
    userId
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      bio: // value for 'bio'
 *      gender: // value for 'gender'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const UpdateUserProfilePictureDocument = gql`
    mutation updateUserProfilePicture($pictureFile: File!) {
  updateUserProfilePicture(pictureFile: $pictureFile)
}
    `;
export type UpdateUserProfilePictureMutationFn = Apollo.MutationFunction<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>;

/**
 * __useUpdateUserProfilePictureMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfilePictureMutation, { data, loading, error }] = useUpdateUserProfilePictureMutation({
 *   variables: {
 *      pictureFile: // value for 'pictureFile'
 *   },
 * });
 */
export function useUpdateUserProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>(UpdateUserProfilePictureDocument, options);
      }
export type UpdateUserProfilePictureMutationHookResult = ReturnType<typeof useUpdateUserProfilePictureMutation>;
export type UpdateUserProfilePictureMutationResult = Apollo.MutationResult<UpdateUserProfilePictureMutation>;
export type UpdateUserProfilePictureMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>;
export const GetUserProfileDocument = gql`
    query getUserProfile($userId: String) {
  getUserProfile(userId: $userId) {
    userAge
    userBio
    userGender
    userId
    userName
    userPictureUrl
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