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


export type SaveNewUserInformationMutation = { __typename?: 'Mutation', updateAccount?: boolean | null | undefined };

export type GetHealthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHealthStatusQuery = { __typename?: 'Query', getHealth?: {ok: boolean} | null | undefined };

export type GetUserProfileQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile?: { __typename?: 'User', age: number, bio?: string | null | undefined, gender: "male" | "female", lookingForGender: "male" | "female", profilePictureURL: string, socials: {instagram: {
          profileId: string;
          link: string;
    }}, userId: string, username: string } | null | undefined };


export const SaveNewUserInformationDocument = gql`
    mutation saveNewUserInformation($birthDate: Date!, $gender: Gender!, $lookingForGender: Gender!, $username: String!) {
  updateAccount(
    userProfileData: {birthDate: $birthDate, gender: $gender, lookingForGender: $lookingForGender, username: $username}
  )
}
    `;
export const GetHealthStatusDocument = gql`
    query getHealthStatus {
  getHealth
}
    `;
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    saveNewUserInformation(variables: SaveNewUserInformationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SaveNewUserInformationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveNewUserInformationMutation>(SaveNewUserInformationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'saveNewUserInformation', 'mutation', variables);
    },
    getHealthStatus(variables?: GetHealthStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHealthStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHealthStatusQuery>(GetHealthStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHealthStatus', 'query', variables);
    },
    getUserProfile(variables?: GetUserProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserProfileQuery>(GetUserProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserProfile', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;