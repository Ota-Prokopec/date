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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  File: { input: File; output: File; }
  Gender: { input: "male" | "female"; output: "male" | "female"; }
  GraphQLHealth: { input: {ok: boolean}; output: {ok: boolean}; }
  Socials: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  bio?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  coords?: Maybe<Scalars['Coords']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  lookigForGender?: Maybe<Scalars['Gender']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profilePictureURL?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['Socials']['output']>;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  setHealth?: Maybe<Scalars['GraphQLHealth']['output']>;
  updateUserProfile?: Maybe<Scalars['Boolean']['output']>;
  updateUserProfilePicture?: Maybe<Scalars['Boolean']['output']>;
  uploadFile?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationUpdateUserProfileArgs = {
  userProfileData: UpdateAccountArgs;
};


export type MutationUpdateUserProfilePictureArgs = {
  pictureFile: Scalars['File']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['File']['input'];
};

export type Query = {
  __typename?: 'Query';
  getHealth?: Maybe<Scalars['GraphQLHealth']['output']>;
  getUserProfile?: Maybe<UserProfile>;
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

export type SaveNewUserInformationMutationVariables = Exact<{
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  lookingForGender?: InputMaybe<Scalars['Gender']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type SaveNewUserInformationMutation = { __typename?: 'Mutation', updateUserProfile?: boolean | null | undefined };

export type GetHealthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHealthStatusQuery = { __typename?: 'Query', getHealth?: {ok: boolean} | null | undefined };


export const SaveNewUserInformationDocument = gql`
    mutation saveNewUserInformation($birthDate: Date = "", $gender: Gender = "", $lookingForGender: Gender = "", $username: String = "") {
  updateUserProfile(
    userProfileData: {birthDate: $birthDate, gender: $gender, lookingForGender: $lookingForGender, username: $username}
  )
}
    `;
export const GetHealthStatusDocument = gql`
    query getHealthStatus {
  getHealth
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    saveNewUserInformation(variables?: SaveNewUserInformationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SaveNewUserInformationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveNewUserInformationMutation>(SaveNewUserInformationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'saveNewUserInformation', 'mutation', variables);
    },
    getHealthStatus(variables?: GetHealthStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHealthStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHealthStatusQuery>(GetHealthStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHealthStatus', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;