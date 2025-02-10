import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
export const UploadFileDocument = gql`
    mutation uploadFile($file: File!) {
  uploadFile(file: $file)
}
    `;
export const UpdateUserProfileDocument = gql`
    mutation updateUserProfile($bio: String, $gender: Gender, $username: String!) {
  updateUserProfile(
    userProfileData: {bio: $bio, gender: $gender, username: $username}
  ) {
    userId
  }
}
    `;
export const UpdateUserProfilePictureDocument = gql`
    mutation updateUserProfilePicture($pictureFile: File!) {
  updateUserProfilePicture(pictureFile: $pictureFile)
}
    `;
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getHealth(variables?: GetHealthQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHealthQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHealthQuery>(GetHealthDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHealth', 'query', variables);
    },
    uploadFile(variables: UploadFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UploadFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UploadFileMutation>(UploadFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'uploadFile', 'mutation', variables);
    },
    updateUserProfile(variables: UpdateUserProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateUserProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserProfileMutation>(UpdateUserProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserProfile', 'mutation', variables);
    },
    updateUserProfilePicture(variables: UpdateUserProfilePictureMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateUserProfilePictureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserProfilePictureMutation>(UpdateUserProfilePictureDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserProfilePicture', 'mutation', variables);
    },
    getUserProfile(variables?: GetUserProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserProfileQuery>(GetUserProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserProfile', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;