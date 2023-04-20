import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

export type AdminRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid'];
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminRegistration?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "pizza_menu" */
  delete_pizza_menu?: Maybe<Pizza_Menu_Mutation_Response>;
  /** delete single row from the table: "pizza_menu" */
  delete_pizza_menu_by_pk?: Maybe<Pizza_Menu>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "pizza_menu" */
  insert_pizza_menu?: Maybe<Pizza_Menu_Mutation_Response>;
  /** insert a single row into the table: "pizza_menu" */
  insert_pizza_menu_one?: Maybe<Pizza_Menu>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "pizza_menu" */
  update_pizza_menu?: Maybe<Pizza_Menu_Mutation_Response>;
  /** update single row of the table: "pizza_menu" */
  update_pizza_menu_by_pk?: Maybe<Pizza_Menu>;
  /** update multiples rows of table: "pizza_menu" */
  update_pizza_menu_many?: Maybe<Array<Maybe<Pizza_Menu_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegistrationArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Pizza_MenuArgs = {
  where: Pizza_Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizza_Menu_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_MenuArgs = {
  objects: Array<Pizza_Menu_Insert_Input>;
  on_conflict?: InputMaybe<Pizza_Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizza_Menu_OneArgs = {
  object: Pizza_Menu_Insert_Input;
  on_conflict?: InputMaybe<Pizza_Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_MenuArgs = {
  _inc?: InputMaybe<Pizza_Menu_Inc_Input>;
  _set?: InputMaybe<Pizza_Menu_Set_Input>;
  where: Pizza_Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Menu_By_PkArgs = {
  _inc?: InputMaybe<Pizza_Menu_Inc_Input>;
  _set?: InputMaybe<Pizza_Menu_Set_Input>;
  pk_columns: Pizza_Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizza_Menu_ManyArgs = {
  updates: Array<Pizza_Menu_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pizza_menu" */
export type Pizza_Menu = {
  __typename?: 'pizza_menu';
  id: Scalars['Int'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  price: Scalars['numeric'];
  title: Scalars['String'];
  weight: Scalars['numeric'];
};

/** aggregated selection of "pizza_menu" */
export type Pizza_Menu_Aggregate = {
  __typename?: 'pizza_menu_aggregate';
  aggregate?: Maybe<Pizza_Menu_Aggregate_Fields>;
  nodes: Array<Pizza_Menu>;
};

/** aggregate fields of "pizza_menu" */
export type Pizza_Menu_Aggregate_Fields = {
  __typename?: 'pizza_menu_aggregate_fields';
  avg?: Maybe<Pizza_Menu_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pizza_Menu_Max_Fields>;
  min?: Maybe<Pizza_Menu_Min_Fields>;
  stddev?: Maybe<Pizza_Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Pizza_Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizza_Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Pizza_Menu_Sum_Fields>;
  var_pop?: Maybe<Pizza_Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Pizza_Menu_Var_Samp_Fields>;
  variance?: Maybe<Pizza_Menu_Variance_Fields>;
};


/** aggregate fields of "pizza_menu" */
export type Pizza_Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizza_Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pizza_Menu_Avg_Fields = {
  __typename?: 'pizza_menu_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pizza_menu". All fields are combined with a logical 'AND'. */
export type Pizza_Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Pizza_Menu_Bool_Exp>>;
  _not?: InputMaybe<Pizza_Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Pizza_Menu_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizza_menu" */
export enum Pizza_Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzaMenuPkey = 'pizza_menu_pkey'
}

/** input type for incrementing numeric columns in table "pizza_menu" */
export type Pizza_Menu_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "pizza_menu" */
export type Pizza_Menu_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Pizza_Menu_Max_Fields = {
  __typename?: 'pizza_menu_max_fields';
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Pizza_Menu_Min_Fields = {
  __typename?: 'pizza_menu_min_fields';
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "pizza_menu" */
export type Pizza_Menu_Mutation_Response = {
  __typename?: 'pizza_menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizza_Menu>;
};

/** on_conflict condition type for table "pizza_menu" */
export type Pizza_Menu_On_Conflict = {
  constraint: Pizza_Menu_Constraint;
  update_columns?: Array<Pizza_Menu_Update_Column>;
  where?: InputMaybe<Pizza_Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "pizza_menu". */
export type Pizza_Menu_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizza_menu */
export type Pizza_Menu_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pizza_menu" */
export enum Pizza_Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "pizza_menu" */
export type Pizza_Menu_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Pizza_Menu_Stddev_Fields = {
  __typename?: 'pizza_menu_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pizza_Menu_Stddev_Pop_Fields = {
  __typename?: 'pizza_menu_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pizza_Menu_Stddev_Samp_Fields = {
  __typename?: 'pizza_menu_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "pizza_menu" */
export type Pizza_Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pizza_Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pizza_Menu_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Pizza_Menu_Sum_Fields = {
  __typename?: 'pizza_menu_sum_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** update columns of table "pizza_menu" */
export enum Pizza_Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

export type Pizza_Menu_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pizza_Menu_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pizza_Menu_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pizza_Menu_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pizza_Menu_Var_Pop_Fields = {
  __typename?: 'pizza_menu_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pizza_Menu_Var_Samp_Fields = {
  __typename?: 'pizza_menu_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pizza_Menu_Variance_Fields = {
  __typename?: 'pizza_menu_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "pizza_menu" */
  pizza_menu: Array<Pizza_Menu>;
  /** fetch aggregated fields from the table: "pizza_menu" */
  pizza_menu_aggregate: Pizza_Menu_Aggregate;
  /** fetch data from the table: "pizza_menu" using primary key columns */
  pizza_menu_by_pk?: Maybe<Pizza_Menu>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPizza_MenuArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Menu_Order_By>>;
  where?: InputMaybe<Pizza_Menu_Bool_Exp>;
};


export type Query_RootPizza_Menu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Menu_Order_By>>;
  where?: InputMaybe<Pizza_Menu_Bool_Exp>;
};


export type Query_RootPizza_Menu_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "pizza_menu" */
  pizza_menu: Array<Pizza_Menu>;
  /** fetch aggregated fields from the table: "pizza_menu" */
  pizza_menu_aggregate: Pizza_Menu_Aggregate;
  /** fetch data from the table: "pizza_menu" using primary key columns */
  pizza_menu_by_pk?: Maybe<Pizza_Menu>;
  /** fetch data from the table in a streaming manner: "pizza_menu" */
  pizza_menu_stream: Array<Pizza_Menu>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootPizza_MenuArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Menu_Order_By>>;
  where?: InputMaybe<Pizza_Menu_Bool_Exp>;
};


export type Subscription_RootPizza_Menu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizza_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizza_Menu_Order_By>>;
  where?: InputMaybe<Pizza_Menu_Bool_Exp>;
};


export type Subscription_RootPizza_Menu_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPizza_Menu_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pizza_Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Pizza_Menu_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};


export const InsertAdminDocument = gql`
    mutation InsertAdmin($password: String, $username: String) {
  insert_admin_one(object: {password: $password, username: $username}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    InsertAdmin(variables?: InsertAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAdminMutation>(InsertAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAdmin', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type InsertAdminMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type InsertAdminMutation = { __typename?: 'mutation_root', insert_admin_one?: { __typename?: 'admin', id: any } | null };
