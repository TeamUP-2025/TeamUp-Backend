
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model application
 * 
 */
export type application = $Result.DefaultSelection<Prisma.$applicationPayload>
/**
 * Model donation
 * 
 */
export type donation = $Result.DefaultSelection<Prisma.$donationPayload>
/**
 * Model goal
 * 
 */
export type goal = $Result.DefaultSelection<Prisma.$goalPayload>
/**
 * Model goose_db_version
 * 
 */
export type goose_db_version = $Result.DefaultSelection<Prisma.$goose_db_versionPayload>
/**
 * Model license
 * 
 */
export type license = $Result.DefaultSelection<Prisma.$licensePayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model projectTag
 * 
 */
export type projectTag = $Result.DefaultSelection<Prisma.$projectTagPayload>
/**
 * Model repo
 * 
 */
export type repo = $Result.DefaultSelection<Prisma.$repoPayload>
/**
 * Model roadmap
 * 
 */
export type roadmap = $Result.DefaultSelection<Prisma.$roadmapPayload>
/**
 * Model tag
 * 
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>
/**
 * Model teammember
 * 
 */
export type teammember = $Result.DefaultSelection<Prisma.$teammemberPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model userTag
 * 
 */
export type userTag = $Result.DefaultSelection<Prisma.$userTagPayload>
/**
 * Model ChatMessage
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.application`: Exposes CRUD operations for the **application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.applicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.donationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.goalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goose_db_version`: Exposes CRUD operations for the **goose_db_version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goose_db_versions
    * const goose_db_versions = await prisma.goose_db_version.findMany()
    * ```
    */
  get goose_db_version(): Prisma.goose_db_versionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **license** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.licenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTag`: Exposes CRUD operations for the **projectTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTags
    * const projectTags = await prisma.projectTag.findMany()
    * ```
    */
  get projectTag(): Prisma.projectTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repo`: Exposes CRUD operations for the **repo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repos
    * const repos = await prisma.repo.findMany()
    * ```
    */
  get repo(): Prisma.repoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadmap`: Exposes CRUD operations for the **roadmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roadmaps
    * const roadmaps = await prisma.roadmap.findMany()
    * ```
    */
  get roadmap(): Prisma.roadmapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teammember`: Exposes CRUD operations for the **teammember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teammembers
    * const teammembers = await prisma.teammember.findMany()
    * ```
    */
  get teammember(): Prisma.teammemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTag`: Exposes CRUD operations for the **userTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTags
    * const userTags = await prisma.userTag.findMany()
    * ```
    */
  get userTag(): Prisma.userTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    application: 'application',
    donation: 'donation',
    goal: 'goal',
    goose_db_version: 'goose_db_version',
    license: 'license',
    project: 'project',
    projectTag: 'projectTag',
    repo: 'repo',
    roadmap: 'roadmap',
    tag: 'tag',
    teammember: 'teammember',
    user: 'user',
    userTag: 'userTag',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "application" | "donation" | "goal" | "goose_db_version" | "license" | "project" | "projectTag" | "repo" | "roadmap" | "tag" | "teammember" | "user" | "userTag" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      application: {
        payload: Prisma.$applicationPayload<ExtArgs>
        fields: Prisma.applicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          findFirst: {
            args: Prisma.applicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          findMany: {
            args: Prisma.applicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[]
          }
          create: {
            args: Prisma.applicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          createMany: {
            args: Prisma.applicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.applicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[]
          }
          delete: {
            args: Prisma.applicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          update: {
            args: Prisma.applicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          deleteMany: {
            args: Prisma.applicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.applicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[]
          }
          upsert: {
            args: Prisma.applicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.applicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.applicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      donation: {
        payload: Prisma.$donationPayload<ExtArgs>
        fields: Prisma.donationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.donationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.donationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          findFirst: {
            args: Prisma.donationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.donationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          findMany: {
            args: Prisma.donationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[]
          }
          create: {
            args: Prisma.donationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          createMany: {
            args: Prisma.donationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.donationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[]
          }
          delete: {
            args: Prisma.donationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          update: {
            args: Prisma.donationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          deleteMany: {
            args: Prisma.donationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.donationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.donationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[]
          }
          upsert: {
            args: Prisma.donationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.donationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.donationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      goal: {
        payload: Prisma.$goalPayload<ExtArgs>
        fields: Prisma.goalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          findFirst: {
            args: Prisma.goalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          findMany: {
            args: Prisma.goalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[]
          }
          create: {
            args: Prisma.goalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          createMany: {
            args: Prisma.goalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[]
          }
          delete: {
            args: Prisma.goalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          update: {
            args: Prisma.goalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          deleteMany: {
            args: Prisma.goalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[]
          }
          upsert: {
            args: Prisma.goalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.goalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.goalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      goose_db_version: {
        payload: Prisma.$goose_db_versionPayload<ExtArgs>
        fields: Prisma.goose_db_versionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goose_db_versionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goose_db_versionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>
          }
          findFirst: {
            args: Prisma.goose_db_versionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goose_db_versionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>
          }
          findMany: {
            args: Prisma.goose_db_versionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>[]
          }
          create: {
            args: Prisma.goose_db_versionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>
          }
          createMany: {
            args: Prisma.goose_db_versionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goose_db_versionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>[]
          }
          delete: {
            args: Prisma.goose_db_versionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>
          }
          update: {
            args: Prisma.goose_db_versionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>
          }
          deleteMany: {
            args: Prisma.goose_db_versionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goose_db_versionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goose_db_versionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>[]
          }
          upsert: {
            args: Prisma.goose_db_versionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goose_db_versionPayload>
          }
          aggregate: {
            args: Prisma.Goose_db_versionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoose_db_version>
          }
          groupBy: {
            args: Prisma.goose_db_versionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goose_db_versionGroupByOutputType>[]
          }
          count: {
            args: Prisma.goose_db_versionCountArgs<ExtArgs>
            result: $Utils.Optional<Goose_db_versionCountAggregateOutputType> | number
          }
        }
      }
      license: {
        payload: Prisma.$licensePayload<ExtArgs>
        fields: Prisma.licenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.licenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.licenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>
          }
          findFirst: {
            args: Prisma.licenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.licenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>
          }
          findMany: {
            args: Prisma.licenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>[]
          }
          create: {
            args: Prisma.licenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>
          }
          createMany: {
            args: Prisma.licenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.licenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>[]
          }
          delete: {
            args: Prisma.licenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>
          }
          update: {
            args: Prisma.licenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>
          }
          deleteMany: {
            args: Prisma.licenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.licenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.licenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>[]
          }
          upsert: {
            args: Prisma.licenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.licenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.licenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      projectTag: {
        payload: Prisma.$projectTagPayload<ExtArgs>
        fields: Prisma.projectTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>
          }
          findFirst: {
            args: Prisma.projectTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>
          }
          findMany: {
            args: Prisma.projectTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>[]
          }
          create: {
            args: Prisma.projectTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>
          }
          createMany: {
            args: Prisma.projectTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>[]
          }
          delete: {
            args: Prisma.projectTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>
          }
          update: {
            args: Prisma.projectTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>
          }
          deleteMany: {
            args: Prisma.projectTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>[]
          }
          upsert: {
            args: Prisma.projectTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectTagPayload>
          }
          aggregate: {
            args: Prisma.ProjectTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTag>
          }
          groupBy: {
            args: Prisma.projectTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagCountAggregateOutputType> | number
          }
        }
      }
      repo: {
        payload: Prisma.$repoPayload<ExtArgs>
        fields: Prisma.repoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.repoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.repoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>
          }
          findFirst: {
            args: Prisma.repoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.repoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>
          }
          findMany: {
            args: Prisma.repoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>[]
          }
          create: {
            args: Prisma.repoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>
          }
          createMany: {
            args: Prisma.repoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.repoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>[]
          }
          delete: {
            args: Prisma.repoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>
          }
          update: {
            args: Prisma.repoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>
          }
          deleteMany: {
            args: Prisma.repoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.repoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.repoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>[]
          }
          upsert: {
            args: Prisma.repoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repoPayload>
          }
          aggregate: {
            args: Prisma.RepoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepo>
          }
          groupBy: {
            args: Prisma.repoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepoGroupByOutputType>[]
          }
          count: {
            args: Prisma.repoCountArgs<ExtArgs>
            result: $Utils.Optional<RepoCountAggregateOutputType> | number
          }
        }
      }
      roadmap: {
        payload: Prisma.$roadmapPayload<ExtArgs>
        fields: Prisma.roadmapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roadmapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roadmapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>
          }
          findFirst: {
            args: Prisma.roadmapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roadmapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>
          }
          findMany: {
            args: Prisma.roadmapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>[]
          }
          create: {
            args: Prisma.roadmapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>
          }
          createMany: {
            args: Prisma.roadmapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roadmapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>[]
          }
          delete: {
            args: Prisma.roadmapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>
          }
          update: {
            args: Prisma.roadmapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>
          }
          deleteMany: {
            args: Prisma.roadmapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roadmapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roadmapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>[]
          }
          upsert: {
            args: Prisma.roadmapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roadmapPayload>
          }
          aggregate: {
            args: Prisma.RoadmapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadmap>
          }
          groupBy: {
            args: Prisma.roadmapGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadmapGroupByOutputType>[]
          }
          count: {
            args: Prisma.roadmapCountArgs<ExtArgs>
            result: $Utils.Optional<RoadmapCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      teammember: {
        payload: Prisma.$teammemberPayload<ExtArgs>
        fields: Prisma.teammemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teammemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teammemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          findFirst: {
            args: Prisma.teammemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teammemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          findMany: {
            args: Prisma.teammemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          create: {
            args: Prisma.teammemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          createMany: {
            args: Prisma.teammemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teammemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          delete: {
            args: Prisma.teammemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          update: {
            args: Prisma.teammemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          deleteMany: {
            args: Prisma.teammemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teammemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teammemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          upsert: {
            args: Prisma.teammemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          aggregate: {
            args: Prisma.TeammemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeammember>
          }
          groupBy: {
            args: Prisma.teammemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeammemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.teammemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeammemberCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      userTag: {
        payload: Prisma.$userTagPayload<ExtArgs>
        fields: Prisma.userTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>
          }
          findFirst: {
            args: Prisma.userTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>
          }
          findMany: {
            args: Prisma.userTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>[]
          }
          create: {
            args: Prisma.userTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>
          }
          createMany: {
            args: Prisma.userTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>[]
          }
          delete: {
            args: Prisma.userTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>
          }
          update: {
            args: Prisma.userTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>
          }
          deleteMany: {
            args: Prisma.userTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>[]
          }
          upsert: {
            args: Prisma.userTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTagPayload>
          }
          aggregate: {
            args: Prisma.UserTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTag>
          }
          groupBy: {
            args: Prisma.userTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.userTagCountArgs<ExtArgs>
            result: $Utils.Optional<UserTagCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    application?: applicationOmit
    donation?: donationOmit
    goal?: goalOmit
    goose_db_version?: goose_db_versionOmit
    license?: licenseOmit
    project?: projectOmit
    projectTag?: projectTagOmit
    repo?: repoOmit
    roadmap?: roadmapOmit
    tag?: tagOmit
    teammember?: teammemberOmit
    user?: userOmit
    userTag?: userTagOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    project: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | LicenseCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ChatMessage: number
    application: number
    donation: number
    goal: number
    projectTag: number
    roadmap: number
    teammember: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | ProjectCountOutputTypeCountChatMessageArgs
    application?: boolean | ProjectCountOutputTypeCountApplicationArgs
    donation?: boolean | ProjectCountOutputTypeCountDonationArgs
    goal?: boolean | ProjectCountOutputTypeCountGoalArgs
    projectTag?: boolean | ProjectCountOutputTypeCountProjectTagArgs
    roadmap?: boolean | ProjectCountOutputTypeCountRoadmapArgs
    teammember?: boolean | ProjectCountOutputTypeCountTeammemberArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDonationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectTagWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRoadmapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roadmapWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTeammemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
  }


  /**
   * Count Type RepoCountOutputType
   */

  export type RepoCountOutputType = {
    project: number
  }

  export type RepoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | RepoCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * RepoCountOutputType without action
   */
  export type RepoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoCountOutputType
     */
    select?: RepoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepoCountOutputType without action
   */
  export type RepoCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    projectTag: number
    userTag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectTag?: boolean | TagCountOutputTypeCountProjectTagArgs
    userTag?: boolean | TagCountOutputTypeCountUserTagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProjectTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountUserTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userTagWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ChatMessage: number
    application: number
    donation: number
    repo: number
    teammember: number
    userTag: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | UserCountOutputTypeCountChatMessageArgs
    application?: boolean | UserCountOutputTypeCountApplicationArgs
    donation?: boolean | UserCountOutputTypeCountDonationArgs
    repo?: boolean | UserCountOutputTypeCountRepoArgs
    teammember?: boolean | UserCountOutputTypeCountTeammemberArgs
    userTag?: boolean | UserCountOutputTypeCountUserTagArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeammemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    appid: string | null
    uid: string | null
    projectid: string | null
    coverletter: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    appid: string | null
    uid: string | null
    projectid: string | null
    coverletter: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    appid: number
    uid: number
    projectid: number
    coverletter: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    appid?: true
    uid?: true
    projectid?: true
    coverletter?: true
  }

  export type ApplicationMaxAggregateInputType = {
    appid?: true
    uid?: true
    projectid?: true
    coverletter?: true
  }

  export type ApplicationCountAggregateInputType = {
    appid?: true
    uid?: true
    projectid?: true
    coverletter?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application to aggregate.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithAggregationInput | applicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: applicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    appid: string
    uid: string
    projectid: string
    coverletter: string | null
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appid?: boolean
    uid?: boolean
    projectid?: boolean
    coverletter?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type applicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appid?: boolean
    uid?: boolean
    projectid?: boolean
    coverletter?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type applicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appid?: boolean
    uid?: boolean
    projectid?: boolean
    coverletter?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type applicationSelectScalar = {
    appid?: boolean
    uid?: boolean
    projectid?: boolean
    coverletter?: boolean
  }

  export type applicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"appid" | "uid" | "projectid" | "coverletter", ExtArgs["result"]["application"]>
  export type applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type applicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type applicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "application"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      appid: string
      uid: string
      projectid: string
      coverletter: string | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type applicationGetPayload<S extends boolean | null | undefined | applicationDefaultArgs> = $Result.GetResult<Prisma.$applicationPayload, S>

  type applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['application'], meta: { name: 'application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {applicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicationFindUniqueArgs>(args: SelectSubset<T, applicationFindUniqueArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicationFindUniqueOrThrowArgs>(args: SelectSubset<T, applicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicationFindFirstArgs>(args?: SelectSubset<T, applicationFindFirstArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicationFindFirstOrThrowArgs>(args?: SelectSubset<T, applicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `appid`
     * const applicationWithAppidOnly = await prisma.application.findMany({ select: { appid: true } })
     * 
     */
    findMany<T extends applicationFindManyArgs>(args?: SelectSubset<T, applicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {applicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends applicationCreateArgs>(args: SelectSubset<T, applicationCreateArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {applicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicationCreateManyArgs>(args?: SelectSubset<T, applicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {applicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `appid`
     * const applicationWithAppidOnly = await prisma.application.createManyAndReturn({
     *   select: { appid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends applicationCreateManyAndReturnArgs>(args?: SelectSubset<T, applicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {applicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends applicationDeleteArgs>(args: SelectSubset<T, applicationDeleteArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {applicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicationUpdateArgs>(args: SelectSubset<T, applicationUpdateArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {applicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicationDeleteManyArgs>(args?: SelectSubset<T, applicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicationUpdateManyArgs>(args: SelectSubset<T, applicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {applicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `appid`
     * const applicationWithAppidOnly = await prisma.application.updateManyAndReturn({
     *   select: { appid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends applicationUpdateManyAndReturnArgs>(args: SelectSubset<T, applicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {applicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends applicationUpsertArgs>(args: SelectSubset<T, applicationUpsertArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends applicationCountArgs>(
      args?: Subset<T, applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationGroupByArgs['orderBy'] }
        : { orderBy?: applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the application model
   */
  readonly fields: applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the application model
   */ 
  interface applicationFieldRefs {
    readonly appid: FieldRef<"application", 'String'>
    readonly uid: FieldRef<"application", 'String'>
    readonly projectid: FieldRef<"application", 'String'>
    readonly coverletter: FieldRef<"application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * application findUnique
   */
  export type applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application findUniqueOrThrow
   */
  export type applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application findFirst
   */
  export type applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * application findFirstOrThrow
   */
  export type applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * application findMany
   */
  export type applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applications.
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * application create
   */
  export type applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * The data needed to create a application.
     */
    data: XOR<applicationCreateInput, applicationUncheckedCreateInput>
  }

  /**
   * application createMany
   */
  export type applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationCreateManyInput | applicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * application createManyAndReturn
   */
  export type applicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * The data used to create many applications.
     */
    data: applicationCreateManyInput | applicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * application update
   */
  export type applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * The data needed to update a application.
     */
    data: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>
    /**
     * Choose, which application to update.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application updateMany
   */
  export type applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
  }

  /**
   * application updateManyAndReturn
   */
  export type applicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * The data used to update applications.
     */
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * application upsert
   */
  export type applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * The filter to search for the application to update in case it exists.
     */
    where: applicationWhereUniqueInput
    /**
     * In case the application found by the `where` argument doesn't exist, create a new application with this data.
     */
    create: XOR<applicationCreateInput, applicationUncheckedCreateInput>
    /**
     * In case the application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>
  }

  /**
   * application delete
   */
  export type applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter which application to delete.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application deleteMany
   */
  export type applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationWhereInput
    /**
     * Limit how many applications to delete.
     */
    limit?: number
  }

  /**
   * application without action
   */
  export type applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
  }


  /**
   * Model donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationMinAggregateOutputType = {
    donationid: string | null
    uid: string | null
    projectid: string | null
    created_at: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    donationid: string | null
    uid: string | null
    projectid: string | null
    created_at: Date | null
  }

  export type DonationCountAggregateOutputType = {
    donationid: number
    uid: number
    projectid: number
    created_at: number
    _all: number
  }


  export type DonationMinAggregateInputType = {
    donationid?: true
    uid?: true
    projectid?: true
    created_at?: true
  }

  export type DonationMaxAggregateInputType = {
    donationid?: true
    uid?: true
    projectid?: true
    created_at?: true
  }

  export type DonationCountAggregateInputType = {
    donationid?: true
    uid?: true
    projectid?: true
    created_at?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donation to aggregate.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type donationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationWhereInput
    orderBy?: donationOrderByWithAggregationInput | donationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: donationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    donationid: string
    uid: string
    projectid: string
    created_at: Date | null
    _count: DonationCountAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends donationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type donationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donationid?: boolean
    uid?: boolean
    projectid?: boolean
    created_at?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type donationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donationid?: boolean
    uid?: boolean
    projectid?: boolean
    created_at?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type donationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donationid?: boolean
    uid?: boolean
    projectid?: boolean
    created_at?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type donationSelectScalar = {
    donationid?: boolean
    uid?: boolean
    projectid?: boolean
    created_at?: boolean
  }

  export type donationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"donationid" | "uid" | "projectid" | "created_at", ExtArgs["result"]["donation"]>
  export type donationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type donationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type donationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $donationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "donation"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      donationid: string
      uid: string
      projectid: string
      created_at: Date | null
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type donationGetPayload<S extends boolean | null | undefined | donationDefaultArgs> = $Result.GetResult<Prisma.$donationPayload, S>

  type donationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<donationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface donationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['donation'], meta: { name: 'donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {donationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends donationFindUniqueArgs>(args: SelectSubset<T, donationFindUniqueArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {donationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends donationFindUniqueOrThrowArgs>(args: SelectSubset<T, donationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends donationFindFirstArgs>(args?: SelectSubset<T, donationFindFirstArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends donationFindFirstOrThrowArgs>(args?: SelectSubset<T, donationFindFirstOrThrowArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `donationid`
     * const donationWithDonationidOnly = await prisma.donation.findMany({ select: { donationid: true } })
     * 
     */
    findMany<T extends donationFindManyArgs>(args?: SelectSubset<T, donationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {donationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends donationCreateArgs>(args: SelectSubset<T, donationCreateArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {donationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends donationCreateManyArgs>(args?: SelectSubset<T, donationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {donationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `donationid`
     * const donationWithDonationidOnly = await prisma.donation.createManyAndReturn({
     *   select: { donationid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends donationCreateManyAndReturnArgs>(args?: SelectSubset<T, donationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {donationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends donationDeleteArgs>(args: SelectSubset<T, donationDeleteArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {donationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends donationUpdateArgs>(args: SelectSubset<T, donationUpdateArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {donationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends donationDeleteManyArgs>(args?: SelectSubset<T, donationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends donationUpdateManyArgs>(args: SelectSubset<T, donationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {donationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `donationid`
     * const donationWithDonationidOnly = await prisma.donation.updateManyAndReturn({
     *   select: { donationid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends donationUpdateManyAndReturnArgs>(args: SelectSubset<T, donationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {donationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends donationUpsertArgs>(args: SelectSubset<T, donationUpsertArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends donationCountArgs>(
      args?: Subset<T, donationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends donationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donationGroupByArgs['orderBy'] }
        : { orderBy?: donationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, donationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the donation model
   */
  readonly fields: donationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the donation model
   */ 
  interface donationFieldRefs {
    readonly donationid: FieldRef<"donation", 'String'>
    readonly uid: FieldRef<"donation", 'String'>
    readonly projectid: FieldRef<"donation", 'String'>
    readonly created_at: FieldRef<"donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * donation findUnique
   */
  export type donationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation findUniqueOrThrow
   */
  export type donationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation findFirst
   */
  export type donationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donations.
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * donation findFirstOrThrow
   */
  export type donationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donations.
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * donation findMany
   */
  export type donationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing donations.
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * donation create
   */
  export type donationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * The data needed to create a donation.
     */
    data: XOR<donationCreateInput, donationUncheckedCreateInput>
  }

  /**
   * donation createMany
   */
  export type donationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many donations.
     */
    data: donationCreateManyInput | donationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * donation createManyAndReturn
   */
  export type donationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * The data used to create many donations.
     */
    data: donationCreateManyInput | donationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * donation update
   */
  export type donationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * The data needed to update a donation.
     */
    data: XOR<donationUpdateInput, donationUncheckedUpdateInput>
    /**
     * Choose, which donation to update.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation updateMany
   */
  export type donationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update donations.
     */
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyInput>
    /**
     * Filter which donations to update
     */
    where?: donationWhereInput
    /**
     * Limit how many donations to update.
     */
    limit?: number
  }

  /**
   * donation updateManyAndReturn
   */
  export type donationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * The data used to update donations.
     */
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyInput>
    /**
     * Filter which donations to update
     */
    where?: donationWhereInput
    /**
     * Limit how many donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * donation upsert
   */
  export type donationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * The filter to search for the donation to update in case it exists.
     */
    where: donationWhereUniqueInput
    /**
     * In case the donation found by the `where` argument doesn't exist, create a new donation with this data.
     */
    create: XOR<donationCreateInput, donationUncheckedCreateInput>
    /**
     * In case the donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donationUpdateInput, donationUncheckedUpdateInput>
  }

  /**
   * donation delete
   */
  export type donationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter which donation to delete.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation deleteMany
   */
  export type donationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donations to delete
     */
    where?: donationWhereInput
    /**
     * Limit how many donations to delete.
     */
    limit?: number
  }

  /**
   * donation without action
   */
  export type donationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
  }


  /**
   * Model goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalMinAggregateOutputType = {
    projectid: string | null
    name: string | null
    goalid: string | null
    description: string | null
  }

  export type GoalMaxAggregateOutputType = {
    projectid: string | null
    name: string | null
    goalid: string | null
    description: string | null
  }

  export type GoalCountAggregateOutputType = {
    projectid: number
    name: number
    goalid: number
    description: number
    _all: number
  }


  export type GoalMinAggregateInputType = {
    projectid?: true
    name?: true
    goalid?: true
    description?: true
  }

  export type GoalMaxAggregateInputType = {
    projectid?: true
    name?: true
    goalid?: true
    description?: true
  }

  export type GoalCountAggregateInputType = {
    projectid?: true
    name?: true
    goalid?: true
    description?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goal to aggregate.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type goalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalWhereInput
    orderBy?: goalOrderByWithAggregationInput | goalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: goalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    projectid: string | null
    name: string
    goalid: string
    description: string | null
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends goalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type goalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    name?: boolean
    goalid?: boolean
    description?: boolean
    project?: boolean | goal$projectArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type goalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    name?: boolean
    goalid?: boolean
    description?: boolean
    project?: boolean | goal$projectArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type goalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    name?: boolean
    goalid?: boolean
    description?: boolean
    project?: boolean | goal$projectArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type goalSelectScalar = {
    projectid?: boolean
    name?: boolean
    goalid?: boolean
    description?: boolean
  }

  export type goalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectid" | "name" | "goalid" | "description", ExtArgs["result"]["goal"]>
  export type goalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | goal$projectArgs<ExtArgs>
  }
  export type goalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | goal$projectArgs<ExtArgs>
  }
  export type goalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | goal$projectArgs<ExtArgs>
  }

  export type $goalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goal"
    objects: {
      project: Prisma.$projectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      projectid: string | null
      name: string
      goalid: string
      description: string | null
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type goalGetPayload<S extends boolean | null | undefined | goalDefaultArgs> = $Result.GetResult<Prisma.$goalPayload, S>

  type goalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface goalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goal'], meta: { name: 'goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {goalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goalFindUniqueArgs>(args: SelectSubset<T, goalFindUniqueArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goalFindUniqueOrThrowArgs>(args: SelectSubset<T, goalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goalFindFirstArgs>(args?: SelectSubset<T, goalFindFirstArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goalFindFirstOrThrowArgs>(args?: SelectSubset<T, goalFindFirstOrThrowArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `projectid`
     * const goalWithProjectidOnly = await prisma.goal.findMany({ select: { projectid: true } })
     * 
     */
    findMany<T extends goalFindManyArgs>(args?: SelectSubset<T, goalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {goalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends goalCreateArgs>(args: SelectSubset<T, goalCreateArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {goalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goalCreateManyArgs>(args?: SelectSubset<T, goalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {goalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `projectid`
     * const goalWithProjectidOnly = await prisma.goal.createManyAndReturn({
     *   select: { projectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goalCreateManyAndReturnArgs>(args?: SelectSubset<T, goalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {goalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends goalDeleteArgs>(args: SelectSubset<T, goalDeleteArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {goalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goalUpdateArgs>(args: SelectSubset<T, goalUpdateArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {goalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goalDeleteManyArgs>(args?: SelectSubset<T, goalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goalUpdateManyArgs>(args: SelectSubset<T, goalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {goalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `projectid`
     * const goalWithProjectidOnly = await prisma.goal.updateManyAndReturn({
     *   select: { projectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goalUpdateManyAndReturnArgs>(args: SelectSubset<T, goalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {goalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends goalUpsertArgs>(args: SelectSubset<T, goalUpsertArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends goalCountArgs>(
      args?: Subset<T, goalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goalGroupByArgs['orderBy'] }
        : { orderBy?: goalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goal model
   */
  readonly fields: goalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends goal$projectArgs<ExtArgs> = {}>(args?: Subset<T, goal$projectArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goal model
   */ 
  interface goalFieldRefs {
    readonly projectid: FieldRef<"goal", 'String'>
    readonly name: FieldRef<"goal", 'String'>
    readonly goalid: FieldRef<"goal", 'String'>
    readonly description: FieldRef<"goal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * goal findUnique
   */
  export type goalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput
  }

  /**
   * goal findUniqueOrThrow
   */
  export type goalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput
  }

  /**
   * goal findFirst
   */
  export type goalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * goal findFirstOrThrow
   */
  export type goalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * goal findMany
   */
  export type goalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goals.
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * goal create
   */
  export type goalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * The data needed to create a goal.
     */
    data: XOR<goalCreateInput, goalUncheckedCreateInput>
  }

  /**
   * goal createMany
   */
  export type goalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goals.
     */
    data: goalCreateManyInput | goalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goal createManyAndReturn
   */
  export type goalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * The data used to create many goals.
     */
    data: goalCreateManyInput | goalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * goal update
   */
  export type goalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * The data needed to update a goal.
     */
    data: XOR<goalUpdateInput, goalUncheckedUpdateInput>
    /**
     * Choose, which goal to update.
     */
    where: goalWhereUniqueInput
  }

  /**
   * goal updateMany
   */
  export type goalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goals.
     */
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyInput>
    /**
     * Filter which goals to update
     */
    where?: goalWhereInput
    /**
     * Limit how many goals to update.
     */
    limit?: number
  }

  /**
   * goal updateManyAndReturn
   */
  export type goalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * The data used to update goals.
     */
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyInput>
    /**
     * Filter which goals to update
     */
    where?: goalWhereInput
    /**
     * Limit how many goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * goal upsert
   */
  export type goalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * The filter to search for the goal to update in case it exists.
     */
    where: goalWhereUniqueInput
    /**
     * In case the goal found by the `where` argument doesn't exist, create a new goal with this data.
     */
    create: XOR<goalCreateInput, goalUncheckedCreateInput>
    /**
     * In case the goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goalUpdateInput, goalUncheckedUpdateInput>
  }

  /**
   * goal delete
   */
  export type goalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter which goal to delete.
     */
    where: goalWhereUniqueInput
  }

  /**
   * goal deleteMany
   */
  export type goalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goals to delete
     */
    where?: goalWhereInput
    /**
     * Limit how many goals to delete.
     */
    limit?: number
  }

  /**
   * goal.project
   */
  export type goal$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
  }

  /**
   * goal without action
   */
  export type goalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
  }


  /**
   * Model goose_db_version
   */

  export type AggregateGoose_db_version = {
    _count: Goose_db_versionCountAggregateOutputType | null
    _avg: Goose_db_versionAvgAggregateOutputType | null
    _sum: Goose_db_versionSumAggregateOutputType | null
    _min: Goose_db_versionMinAggregateOutputType | null
    _max: Goose_db_versionMaxAggregateOutputType | null
  }

  export type Goose_db_versionAvgAggregateOutputType = {
    id: number | null
    version_id: number | null
  }

  export type Goose_db_versionSumAggregateOutputType = {
    id: number | null
    version_id: bigint | null
  }

  export type Goose_db_versionMinAggregateOutputType = {
    id: number | null
    version_id: bigint | null
    is_applied: boolean | null
    tstamp: Date | null
  }

  export type Goose_db_versionMaxAggregateOutputType = {
    id: number | null
    version_id: bigint | null
    is_applied: boolean | null
    tstamp: Date | null
  }

  export type Goose_db_versionCountAggregateOutputType = {
    id: number
    version_id: number
    is_applied: number
    tstamp: number
    _all: number
  }


  export type Goose_db_versionAvgAggregateInputType = {
    id?: true
    version_id?: true
  }

  export type Goose_db_versionSumAggregateInputType = {
    id?: true
    version_id?: true
  }

  export type Goose_db_versionMinAggregateInputType = {
    id?: true
    version_id?: true
    is_applied?: true
    tstamp?: true
  }

  export type Goose_db_versionMaxAggregateInputType = {
    id?: true
    version_id?: true
    is_applied?: true
    tstamp?: true
  }

  export type Goose_db_versionCountAggregateInputType = {
    id?: true
    version_id?: true
    is_applied?: true
    tstamp?: true
    _all?: true
  }

  export type Goose_db_versionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goose_db_version to aggregate.
     */
    where?: goose_db_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goose_db_versions to fetch.
     */
    orderBy?: goose_db_versionOrderByWithRelationInput | goose_db_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goose_db_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goose_db_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goose_db_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goose_db_versions
    **/
    _count?: true | Goose_db_versionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goose_db_versionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goose_db_versionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goose_db_versionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goose_db_versionMaxAggregateInputType
  }

  export type GetGoose_db_versionAggregateType<T extends Goose_db_versionAggregateArgs> = {
        [P in keyof T & keyof AggregateGoose_db_version]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoose_db_version[P]>
      : GetScalarType<T[P], AggregateGoose_db_version[P]>
  }




  export type goose_db_versionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goose_db_versionWhereInput
    orderBy?: goose_db_versionOrderByWithAggregationInput | goose_db_versionOrderByWithAggregationInput[]
    by: Goose_db_versionScalarFieldEnum[] | Goose_db_versionScalarFieldEnum
    having?: goose_db_versionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goose_db_versionCountAggregateInputType | true
    _avg?: Goose_db_versionAvgAggregateInputType
    _sum?: Goose_db_versionSumAggregateInputType
    _min?: Goose_db_versionMinAggregateInputType
    _max?: Goose_db_versionMaxAggregateInputType
  }

  export type Goose_db_versionGroupByOutputType = {
    id: number
    version_id: bigint
    is_applied: boolean
    tstamp: Date
    _count: Goose_db_versionCountAggregateOutputType | null
    _avg: Goose_db_versionAvgAggregateOutputType | null
    _sum: Goose_db_versionSumAggregateOutputType | null
    _min: Goose_db_versionMinAggregateOutputType | null
    _max: Goose_db_versionMaxAggregateOutputType | null
  }

  type GetGoose_db_versionGroupByPayload<T extends goose_db_versionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goose_db_versionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goose_db_versionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goose_db_versionGroupByOutputType[P]>
            : GetScalarType<T[P], Goose_db_versionGroupByOutputType[P]>
        }
      >
    >


  export type goose_db_versionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version_id?: boolean
    is_applied?: boolean
    tstamp?: boolean
  }, ExtArgs["result"]["goose_db_version"]>

  export type goose_db_versionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version_id?: boolean
    is_applied?: boolean
    tstamp?: boolean
  }, ExtArgs["result"]["goose_db_version"]>

  export type goose_db_versionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version_id?: boolean
    is_applied?: boolean
    tstamp?: boolean
  }, ExtArgs["result"]["goose_db_version"]>

  export type goose_db_versionSelectScalar = {
    id?: boolean
    version_id?: boolean
    is_applied?: boolean
    tstamp?: boolean
  }

  export type goose_db_versionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version_id" | "is_applied" | "tstamp", ExtArgs["result"]["goose_db_version"]>

  export type $goose_db_versionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goose_db_version"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version_id: bigint
      is_applied: boolean
      tstamp: Date
    }, ExtArgs["result"]["goose_db_version"]>
    composites: {}
  }

  type goose_db_versionGetPayload<S extends boolean | null | undefined | goose_db_versionDefaultArgs> = $Result.GetResult<Prisma.$goose_db_versionPayload, S>

  type goose_db_versionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goose_db_versionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goose_db_versionCountAggregateInputType | true
    }

  export interface goose_db_versionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goose_db_version'], meta: { name: 'goose_db_version' } }
    /**
     * Find zero or one Goose_db_version that matches the filter.
     * @param {goose_db_versionFindUniqueArgs} args - Arguments to find a Goose_db_version
     * @example
     * // Get one Goose_db_version
     * const goose_db_version = await prisma.goose_db_version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goose_db_versionFindUniqueArgs>(args: SelectSubset<T, goose_db_versionFindUniqueArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goose_db_version that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goose_db_versionFindUniqueOrThrowArgs} args - Arguments to find a Goose_db_version
     * @example
     * // Get one Goose_db_version
     * const goose_db_version = await prisma.goose_db_version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goose_db_versionFindUniqueOrThrowArgs>(args: SelectSubset<T, goose_db_versionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goose_db_version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goose_db_versionFindFirstArgs} args - Arguments to find a Goose_db_version
     * @example
     * // Get one Goose_db_version
     * const goose_db_version = await prisma.goose_db_version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goose_db_versionFindFirstArgs>(args?: SelectSubset<T, goose_db_versionFindFirstArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goose_db_version that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goose_db_versionFindFirstOrThrowArgs} args - Arguments to find a Goose_db_version
     * @example
     * // Get one Goose_db_version
     * const goose_db_version = await prisma.goose_db_version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goose_db_versionFindFirstOrThrowArgs>(args?: SelectSubset<T, goose_db_versionFindFirstOrThrowArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goose_db_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goose_db_versionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goose_db_versions
     * const goose_db_versions = await prisma.goose_db_version.findMany()
     * 
     * // Get first 10 Goose_db_versions
     * const goose_db_versions = await prisma.goose_db_version.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goose_db_versionWithIdOnly = await prisma.goose_db_version.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends goose_db_versionFindManyArgs>(args?: SelectSubset<T, goose_db_versionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goose_db_version.
     * @param {goose_db_versionCreateArgs} args - Arguments to create a Goose_db_version.
     * @example
     * // Create one Goose_db_version
     * const Goose_db_version = await prisma.goose_db_version.create({
     *   data: {
     *     // ... data to create a Goose_db_version
     *   }
     * })
     * 
     */
    create<T extends goose_db_versionCreateArgs>(args: SelectSubset<T, goose_db_versionCreateArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goose_db_versions.
     * @param {goose_db_versionCreateManyArgs} args - Arguments to create many Goose_db_versions.
     * @example
     * // Create many Goose_db_versions
     * const goose_db_version = await prisma.goose_db_version.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goose_db_versionCreateManyArgs>(args?: SelectSubset<T, goose_db_versionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goose_db_versions and returns the data saved in the database.
     * @param {goose_db_versionCreateManyAndReturnArgs} args - Arguments to create many Goose_db_versions.
     * @example
     * // Create many Goose_db_versions
     * const goose_db_version = await prisma.goose_db_version.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goose_db_versions and only return the `id`
     * const goose_db_versionWithIdOnly = await prisma.goose_db_version.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goose_db_versionCreateManyAndReturnArgs>(args?: SelectSubset<T, goose_db_versionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goose_db_version.
     * @param {goose_db_versionDeleteArgs} args - Arguments to delete one Goose_db_version.
     * @example
     * // Delete one Goose_db_version
     * const Goose_db_version = await prisma.goose_db_version.delete({
     *   where: {
     *     // ... filter to delete one Goose_db_version
     *   }
     * })
     * 
     */
    delete<T extends goose_db_versionDeleteArgs>(args: SelectSubset<T, goose_db_versionDeleteArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goose_db_version.
     * @param {goose_db_versionUpdateArgs} args - Arguments to update one Goose_db_version.
     * @example
     * // Update one Goose_db_version
     * const goose_db_version = await prisma.goose_db_version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goose_db_versionUpdateArgs>(args: SelectSubset<T, goose_db_versionUpdateArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goose_db_versions.
     * @param {goose_db_versionDeleteManyArgs} args - Arguments to filter Goose_db_versions to delete.
     * @example
     * // Delete a few Goose_db_versions
     * const { count } = await prisma.goose_db_version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goose_db_versionDeleteManyArgs>(args?: SelectSubset<T, goose_db_versionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goose_db_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goose_db_versionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goose_db_versions
     * const goose_db_version = await prisma.goose_db_version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goose_db_versionUpdateManyArgs>(args: SelectSubset<T, goose_db_versionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goose_db_versions and returns the data updated in the database.
     * @param {goose_db_versionUpdateManyAndReturnArgs} args - Arguments to update many Goose_db_versions.
     * @example
     * // Update many Goose_db_versions
     * const goose_db_version = await prisma.goose_db_version.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goose_db_versions and only return the `id`
     * const goose_db_versionWithIdOnly = await prisma.goose_db_version.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goose_db_versionUpdateManyAndReturnArgs>(args: SelectSubset<T, goose_db_versionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goose_db_version.
     * @param {goose_db_versionUpsertArgs} args - Arguments to update or create a Goose_db_version.
     * @example
     * // Update or create a Goose_db_version
     * const goose_db_version = await prisma.goose_db_version.upsert({
     *   create: {
     *     // ... data to create a Goose_db_version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goose_db_version we want to update
     *   }
     * })
     */
    upsert<T extends goose_db_versionUpsertArgs>(args: SelectSubset<T, goose_db_versionUpsertArgs<ExtArgs>>): Prisma__goose_db_versionClient<$Result.GetResult<Prisma.$goose_db_versionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goose_db_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goose_db_versionCountArgs} args - Arguments to filter Goose_db_versions to count.
     * @example
     * // Count the number of Goose_db_versions
     * const count = await prisma.goose_db_version.count({
     *   where: {
     *     // ... the filter for the Goose_db_versions we want to count
     *   }
     * })
    **/
    count<T extends goose_db_versionCountArgs>(
      args?: Subset<T, goose_db_versionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goose_db_versionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goose_db_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goose_db_versionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goose_db_versionAggregateArgs>(args: Subset<T, Goose_db_versionAggregateArgs>): Prisma.PrismaPromise<GetGoose_db_versionAggregateType<T>>

    /**
     * Group by Goose_db_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goose_db_versionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goose_db_versionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goose_db_versionGroupByArgs['orderBy'] }
        : { orderBy?: goose_db_versionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goose_db_versionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoose_db_versionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goose_db_version model
   */
  readonly fields: goose_db_versionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goose_db_version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goose_db_versionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goose_db_version model
   */ 
  interface goose_db_versionFieldRefs {
    readonly id: FieldRef<"goose_db_version", 'Int'>
    readonly version_id: FieldRef<"goose_db_version", 'BigInt'>
    readonly is_applied: FieldRef<"goose_db_version", 'Boolean'>
    readonly tstamp: FieldRef<"goose_db_version", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * goose_db_version findUnique
   */
  export type goose_db_versionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * Filter, which goose_db_version to fetch.
     */
    where: goose_db_versionWhereUniqueInput
  }

  /**
   * goose_db_version findUniqueOrThrow
   */
  export type goose_db_versionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * Filter, which goose_db_version to fetch.
     */
    where: goose_db_versionWhereUniqueInput
  }

  /**
   * goose_db_version findFirst
   */
  export type goose_db_versionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * Filter, which goose_db_version to fetch.
     */
    where?: goose_db_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goose_db_versions to fetch.
     */
    orderBy?: goose_db_versionOrderByWithRelationInput | goose_db_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goose_db_versions.
     */
    cursor?: goose_db_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goose_db_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goose_db_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goose_db_versions.
     */
    distinct?: Goose_db_versionScalarFieldEnum | Goose_db_versionScalarFieldEnum[]
  }

  /**
   * goose_db_version findFirstOrThrow
   */
  export type goose_db_versionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * Filter, which goose_db_version to fetch.
     */
    where?: goose_db_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goose_db_versions to fetch.
     */
    orderBy?: goose_db_versionOrderByWithRelationInput | goose_db_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goose_db_versions.
     */
    cursor?: goose_db_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goose_db_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goose_db_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goose_db_versions.
     */
    distinct?: Goose_db_versionScalarFieldEnum | Goose_db_versionScalarFieldEnum[]
  }

  /**
   * goose_db_version findMany
   */
  export type goose_db_versionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * Filter, which goose_db_versions to fetch.
     */
    where?: goose_db_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goose_db_versions to fetch.
     */
    orderBy?: goose_db_versionOrderByWithRelationInput | goose_db_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goose_db_versions.
     */
    cursor?: goose_db_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goose_db_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goose_db_versions.
     */
    skip?: number
    distinct?: Goose_db_versionScalarFieldEnum | Goose_db_versionScalarFieldEnum[]
  }

  /**
   * goose_db_version create
   */
  export type goose_db_versionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * The data needed to create a goose_db_version.
     */
    data: XOR<goose_db_versionCreateInput, goose_db_versionUncheckedCreateInput>
  }

  /**
   * goose_db_version createMany
   */
  export type goose_db_versionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goose_db_versions.
     */
    data: goose_db_versionCreateManyInput | goose_db_versionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goose_db_version createManyAndReturn
   */
  export type goose_db_versionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * The data used to create many goose_db_versions.
     */
    data: goose_db_versionCreateManyInput | goose_db_versionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goose_db_version update
   */
  export type goose_db_versionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * The data needed to update a goose_db_version.
     */
    data: XOR<goose_db_versionUpdateInput, goose_db_versionUncheckedUpdateInput>
    /**
     * Choose, which goose_db_version to update.
     */
    where: goose_db_versionWhereUniqueInput
  }

  /**
   * goose_db_version updateMany
   */
  export type goose_db_versionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goose_db_versions.
     */
    data: XOR<goose_db_versionUpdateManyMutationInput, goose_db_versionUncheckedUpdateManyInput>
    /**
     * Filter which goose_db_versions to update
     */
    where?: goose_db_versionWhereInput
    /**
     * Limit how many goose_db_versions to update.
     */
    limit?: number
  }

  /**
   * goose_db_version updateManyAndReturn
   */
  export type goose_db_versionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * The data used to update goose_db_versions.
     */
    data: XOR<goose_db_versionUpdateManyMutationInput, goose_db_versionUncheckedUpdateManyInput>
    /**
     * Filter which goose_db_versions to update
     */
    where?: goose_db_versionWhereInput
    /**
     * Limit how many goose_db_versions to update.
     */
    limit?: number
  }

  /**
   * goose_db_version upsert
   */
  export type goose_db_versionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * The filter to search for the goose_db_version to update in case it exists.
     */
    where: goose_db_versionWhereUniqueInput
    /**
     * In case the goose_db_version found by the `where` argument doesn't exist, create a new goose_db_version with this data.
     */
    create: XOR<goose_db_versionCreateInput, goose_db_versionUncheckedCreateInput>
    /**
     * In case the goose_db_version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goose_db_versionUpdateInput, goose_db_versionUncheckedUpdateInput>
  }

  /**
   * goose_db_version delete
   */
  export type goose_db_versionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
    /**
     * Filter which goose_db_version to delete.
     */
    where: goose_db_versionWhereUniqueInput
  }

  /**
   * goose_db_version deleteMany
   */
  export type goose_db_versionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goose_db_versions to delete
     */
    where?: goose_db_versionWhereInput
    /**
     * Limit how many goose_db_versions to delete.
     */
    limit?: number
  }

  /**
   * goose_db_version without action
   */
  export type goose_db_versionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goose_db_version
     */
    select?: goose_db_versionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goose_db_version
     */
    omit?: goose_db_versionOmit<ExtArgs> | null
  }


  /**
   * Model license
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    licenseid: string | null
    name: string | null
    description: string | null
    permission: string | null
    condition: string | null
    limitation: string | null
  }

  export type LicenseMaxAggregateOutputType = {
    licenseid: string | null
    name: string | null
    description: string | null
    permission: string | null
    condition: string | null
    limitation: string | null
  }

  export type LicenseCountAggregateOutputType = {
    licenseid: number
    name: number
    description: number
    permission: number
    condition: number
    limitation: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    licenseid?: true
    name?: true
    description?: true
    permission?: true
    condition?: true
    limitation?: true
  }

  export type LicenseMaxAggregateInputType = {
    licenseid?: true
    name?: true
    description?: true
    permission?: true
    condition?: true
    limitation?: true
  }

  export type LicenseCountAggregateInputType = {
    licenseid?: true
    name?: true
    description?: true
    permission?: true
    condition?: true
    limitation?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which license to aggregate.
     */
    where?: licenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licenses to fetch.
     */
    orderBy?: licenseOrderByWithRelationInput | licenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: licenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type licenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: licenseWhereInput
    orderBy?: licenseOrderByWithAggregationInput | licenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: licenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    licenseid: string
    name: string
    description: string
    permission: string | null
    condition: string | null
    limitation: string
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends licenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type licenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    licenseid?: boolean
    name?: boolean
    description?: boolean
    permission?: boolean
    condition?: boolean
    limitation?: boolean
    project?: boolean | license$projectArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type licenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    licenseid?: boolean
    name?: boolean
    description?: boolean
    permission?: boolean
    condition?: boolean
    limitation?: boolean
  }, ExtArgs["result"]["license"]>

  export type licenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    licenseid?: boolean
    name?: boolean
    description?: boolean
    permission?: boolean
    condition?: boolean
    limitation?: boolean
  }, ExtArgs["result"]["license"]>

  export type licenseSelectScalar = {
    licenseid?: boolean
    name?: boolean
    description?: boolean
    permission?: boolean
    condition?: boolean
    limitation?: boolean
  }

  export type licenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"licenseid" | "name" | "description" | "permission" | "condition" | "limitation", ExtArgs["result"]["license"]>
  export type licenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | license$projectArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type licenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type licenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $licensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "license"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      licenseid: string
      name: string
      description: string
      permission: string | null
      condition: string | null
      limitation: string
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type licenseGetPayload<S extends boolean | null | undefined | licenseDefaultArgs> = $Result.GetResult<Prisma.$licensePayload, S>

  type licenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<licenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface licenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['license'], meta: { name: 'license' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {licenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends licenseFindUniqueArgs>(args: SelectSubset<T, licenseFindUniqueArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {licenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends licenseFindUniqueOrThrowArgs>(args: SelectSubset<T, licenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends licenseFindFirstArgs>(args?: SelectSubset<T, licenseFindFirstArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends licenseFindFirstOrThrowArgs>(args?: SelectSubset<T, licenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `licenseid`
     * const licenseWithLicenseidOnly = await prisma.license.findMany({ select: { licenseid: true } })
     * 
     */
    findMany<T extends licenseFindManyArgs>(args?: SelectSubset<T, licenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {licenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends licenseCreateArgs>(args: SelectSubset<T, licenseCreateArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {licenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends licenseCreateManyArgs>(args?: SelectSubset<T, licenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {licenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `licenseid`
     * const licenseWithLicenseidOnly = await prisma.license.createManyAndReturn({
     *   select: { licenseid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends licenseCreateManyAndReturnArgs>(args?: SelectSubset<T, licenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {licenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends licenseDeleteArgs>(args: SelectSubset<T, licenseDeleteArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {licenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends licenseUpdateArgs>(args: SelectSubset<T, licenseUpdateArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {licenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends licenseDeleteManyArgs>(args?: SelectSubset<T, licenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends licenseUpdateManyArgs>(args: SelectSubset<T, licenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {licenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `licenseid`
     * const licenseWithLicenseidOnly = await prisma.license.updateManyAndReturn({
     *   select: { licenseid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends licenseUpdateManyAndReturnArgs>(args: SelectSubset<T, licenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {licenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends licenseUpsertArgs>(args: SelectSubset<T, licenseUpsertArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends licenseCountArgs>(
      args?: Subset<T, licenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends licenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: licenseGroupByArgs['orderBy'] }
        : { orderBy?: licenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, licenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the license model
   */
  readonly fields: licenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for license.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__licenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends license$projectArgs<ExtArgs> = {}>(args?: Subset<T, license$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the license model
   */ 
  interface licenseFieldRefs {
    readonly licenseid: FieldRef<"license", 'String'>
    readonly name: FieldRef<"license", 'String'>
    readonly description: FieldRef<"license", 'String'>
    readonly permission: FieldRef<"license", 'String'>
    readonly condition: FieldRef<"license", 'String'>
    readonly limitation: FieldRef<"license", 'String'>
  }
    

  // Custom InputTypes
  /**
   * license findUnique
   */
  export type licenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * Filter, which license to fetch.
     */
    where: licenseWhereUniqueInput
  }

  /**
   * license findUniqueOrThrow
   */
  export type licenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * Filter, which license to fetch.
     */
    where: licenseWhereUniqueInput
  }

  /**
   * license findFirst
   */
  export type licenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * Filter, which license to fetch.
     */
    where?: licenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licenses to fetch.
     */
    orderBy?: licenseOrderByWithRelationInput | licenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for licenses.
     */
    cursor?: licenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * license findFirstOrThrow
   */
  export type licenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * Filter, which license to fetch.
     */
    where?: licenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licenses to fetch.
     */
    orderBy?: licenseOrderByWithRelationInput | licenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for licenses.
     */
    cursor?: licenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * license findMany
   */
  export type licenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * Filter, which licenses to fetch.
     */
    where?: licenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licenses to fetch.
     */
    orderBy?: licenseOrderByWithRelationInput | licenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing licenses.
     */
    cursor?: licenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * license create
   */
  export type licenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * The data needed to create a license.
     */
    data: XOR<licenseCreateInput, licenseUncheckedCreateInput>
  }

  /**
   * license createMany
   */
  export type licenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many licenses.
     */
    data: licenseCreateManyInput | licenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * license createManyAndReturn
   */
  export type licenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * The data used to create many licenses.
     */
    data: licenseCreateManyInput | licenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * license update
   */
  export type licenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * The data needed to update a license.
     */
    data: XOR<licenseUpdateInput, licenseUncheckedUpdateInput>
    /**
     * Choose, which license to update.
     */
    where: licenseWhereUniqueInput
  }

  /**
   * license updateMany
   */
  export type licenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update licenses.
     */
    data: XOR<licenseUpdateManyMutationInput, licenseUncheckedUpdateManyInput>
    /**
     * Filter which licenses to update
     */
    where?: licenseWhereInput
    /**
     * Limit how many licenses to update.
     */
    limit?: number
  }

  /**
   * license updateManyAndReturn
   */
  export type licenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * The data used to update licenses.
     */
    data: XOR<licenseUpdateManyMutationInput, licenseUncheckedUpdateManyInput>
    /**
     * Filter which licenses to update
     */
    where?: licenseWhereInput
    /**
     * Limit how many licenses to update.
     */
    limit?: number
  }

  /**
   * license upsert
   */
  export type licenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * The filter to search for the license to update in case it exists.
     */
    where: licenseWhereUniqueInput
    /**
     * In case the license found by the `where` argument doesn't exist, create a new license with this data.
     */
    create: XOR<licenseCreateInput, licenseUncheckedCreateInput>
    /**
     * In case the license was found with the provided `where` argument, update it with this data.
     */
    update: XOR<licenseUpdateInput, licenseUncheckedUpdateInput>
  }

  /**
   * license delete
   */
  export type licenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    /**
     * Filter which license to delete.
     */
    where: licenseWhereUniqueInput
  }

  /**
   * license deleteMany
   */
  export type licenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which licenses to delete
     */
    where?: licenseWhereInput
    /**
     * Limit how many licenses to delete.
     */
    limit?: number
  }

  /**
   * license.project
   */
  export type license$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * license without action
   */
  export type licenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    projectid: string | null
    title: string | null
    description: string | null
    repoid: string | null
    status: string | null
    created_at: Date | null
    licenseid: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    projectid: string | null
    title: string | null
    description: string | null
    repoid: string | null
    status: string | null
    created_at: Date | null
    licenseid: string | null
  }

  export type ProjectCountAggregateOutputType = {
    projectid: number
    title: number
    description: number
    repoid: number
    status: number
    created_at: number
    licenseid: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    projectid?: true
    title?: true
    description?: true
    repoid?: true
    status?: true
    created_at?: true
    licenseid?: true
  }

  export type ProjectMaxAggregateInputType = {
    projectid?: true
    title?: true
    description?: true
    repoid?: true
    status?: true
    created_at?: true
    licenseid?: true
  }

  export type ProjectCountAggregateInputType = {
    projectid?: true
    title?: true
    description?: true
    repoid?: true
    status?: true
    created_at?: true
    licenseid?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    projectid: string
    title: string
    description: string
    repoid: string | null
    status: string | null
    created_at: Date | null
    licenseid: string | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    title?: boolean
    description?: boolean
    repoid?: boolean
    status?: boolean
    created_at?: boolean
    licenseid?: boolean
    ChatMessage?: boolean | project$ChatMessageArgs<ExtArgs>
    application?: boolean | project$applicationArgs<ExtArgs>
    donation?: boolean | project$donationArgs<ExtArgs>
    goal?: boolean | project$goalArgs<ExtArgs>
    license?: boolean | project$licenseArgs<ExtArgs>
    repo?: boolean | project$repoArgs<ExtArgs>
    projectTag?: boolean | project$projectTagArgs<ExtArgs>
    roadmap?: boolean | project$roadmapArgs<ExtArgs>
    teammember?: boolean | project$teammemberArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    title?: boolean
    description?: boolean
    repoid?: boolean
    status?: boolean
    created_at?: boolean
    licenseid?: boolean
    license?: boolean | project$licenseArgs<ExtArgs>
    repo?: boolean | project$repoArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    title?: boolean
    description?: boolean
    repoid?: boolean
    status?: boolean
    created_at?: boolean
    licenseid?: boolean
    license?: boolean | project$licenseArgs<ExtArgs>
    repo?: boolean | project$repoArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    projectid?: boolean
    title?: boolean
    description?: boolean
    repoid?: boolean
    status?: boolean
    created_at?: boolean
    licenseid?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectid" | "title" | "description" | "repoid" | "status" | "created_at" | "licenseid", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | project$ChatMessageArgs<ExtArgs>
    application?: boolean | project$applicationArgs<ExtArgs>
    donation?: boolean | project$donationArgs<ExtArgs>
    goal?: boolean | project$goalArgs<ExtArgs>
    license?: boolean | project$licenseArgs<ExtArgs>
    repo?: boolean | project$repoArgs<ExtArgs>
    projectTag?: boolean | project$projectTagArgs<ExtArgs>
    roadmap?: boolean | project$roadmapArgs<ExtArgs>
    teammember?: boolean | project$teammemberArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | project$licenseArgs<ExtArgs>
    repo?: boolean | project$repoArgs<ExtArgs>
  }
  export type projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | project$licenseArgs<ExtArgs>
    repo?: boolean | project$repoArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
      application: Prisma.$applicationPayload<ExtArgs>[]
      donation: Prisma.$donationPayload<ExtArgs>[]
      goal: Prisma.$goalPayload<ExtArgs>[]
      license: Prisma.$licensePayload<ExtArgs> | null
      repo: Prisma.$repoPayload<ExtArgs> | null
      projectTag: Prisma.$projectTagPayload<ExtArgs>[]
      roadmap: Prisma.$roadmapPayload<ExtArgs>[]
      teammember: Prisma.$teammemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projectid: string
      title: string
      description: string
      repoid: string | null
      status: string | null
      created_at: Date | null
      licenseid: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `projectid`
     * const projectWithProjectidOnly = await prisma.project.findMany({ select: { projectid: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `projectid`
     * const projectWithProjectidOnly = await prisma.project.createManyAndReturn({
     *   select: { projectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `projectid`
     * const projectWithProjectidOnly = await prisma.project.updateManyAndReturn({
     *   select: { projectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatMessage<T extends project$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, project$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    application<T extends project$applicationArgs<ExtArgs> = {}>(args?: Subset<T, project$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donation<T extends project$donationArgs<ExtArgs> = {}>(args?: Subset<T, project$donationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goal<T extends project$goalArgs<ExtArgs> = {}>(args?: Subset<T, project$goalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    license<T extends project$licenseArgs<ExtArgs> = {}>(args?: Subset<T, project$licenseArgs<ExtArgs>>): Prisma__licenseClient<$Result.GetResult<Prisma.$licensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repo<T extends project$repoArgs<ExtArgs> = {}>(args?: Subset<T, project$repoArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projectTag<T extends project$projectTagArgs<ExtArgs> = {}>(args?: Subset<T, project$projectTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roadmap<T extends project$roadmapArgs<ExtArgs> = {}>(args?: Subset<T, project$roadmapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teammember<T extends project$teammemberArgs<ExtArgs> = {}>(args?: Subset<T, project$teammemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */ 
  interface projectFieldRefs {
    readonly projectid: FieldRef<"project", 'String'>
    readonly title: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly repoid: FieldRef<"project", 'String'>
    readonly status: FieldRef<"project", 'String'>
    readonly created_at: FieldRef<"project", 'DateTime'>
    readonly licenseid: FieldRef<"project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.ChatMessage
   */
  export type project$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * project.application
   */
  export type project$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    cursor?: applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * project.donation
   */
  export type project$donationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    where?: donationWhereInput
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    cursor?: donationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * project.goal
   */
  export type project$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null
    where?: goalWhereInput
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    cursor?: goalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * project.license
   */
  export type project$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the license
     */
    select?: licenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the license
     */
    omit?: licenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenseInclude<ExtArgs> | null
    where?: licenseWhereInput
  }

  /**
   * project.repo
   */
  export type project$repoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    where?: repoWhereInput
  }

  /**
   * project.projectTag
   */
  export type project$projectTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    where?: projectTagWhereInput
    orderBy?: projectTagOrderByWithRelationInput | projectTagOrderByWithRelationInput[]
    cursor?: projectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * project.roadmap
   */
  export type project$roadmapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    where?: roadmapWhereInput
    orderBy?: roadmapOrderByWithRelationInput | roadmapOrderByWithRelationInput[]
    cursor?: roadmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * project.teammember
   */
  export type project$teammemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    cursor?: teammemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model projectTag
   */

  export type AggregateProjectTag = {
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  export type ProjectTagMinAggregateOutputType = {
    projectid: string | null
    tagid: string | null
  }

  export type ProjectTagMaxAggregateOutputType = {
    projectid: string | null
    tagid: string | null
  }

  export type ProjectTagCountAggregateOutputType = {
    projectid: number
    tagid: number
    _all: number
  }


  export type ProjectTagMinAggregateInputType = {
    projectid?: true
    tagid?: true
  }

  export type ProjectTagMaxAggregateInputType = {
    projectid?: true
    tagid?: true
  }

  export type ProjectTagCountAggregateInputType = {
    projectid?: true
    tagid?: true
    _all?: true
  }

  export type ProjectTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectTag to aggregate.
     */
    where?: projectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectTags to fetch.
     */
    orderBy?: projectTagOrderByWithRelationInput | projectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectTags
    **/
    _count?: true | ProjectTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTagMaxAggregateInputType
  }

  export type GetProjectTagAggregateType<T extends ProjectTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTag[P]>
      : GetScalarType<T[P], AggregateProjectTag[P]>
  }




  export type projectTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectTagWhereInput
    orderBy?: projectTagOrderByWithAggregationInput | projectTagOrderByWithAggregationInput[]
    by: ProjectTagScalarFieldEnum[] | ProjectTagScalarFieldEnum
    having?: projectTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTagCountAggregateInputType | true
    _min?: ProjectTagMinAggregateInputType
    _max?: ProjectTagMaxAggregateInputType
  }

  export type ProjectTagGroupByOutputType = {
    projectid: string
    tagid: string
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  type GetProjectTagGroupByPayload<T extends projectTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
        }
      >
    >


  export type projectTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    tagid?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type projectTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    tagid?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type projectTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    tagid?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type projectTagSelectScalar = {
    projectid?: boolean
    tagid?: boolean
  }

  export type projectTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectid" | "tagid", ExtArgs["result"]["projectTag"]>
  export type projectTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }
  export type projectTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }
  export type projectTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }

  export type $projectTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectTag"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      tag: Prisma.$tagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectid: string
      tagid: string
    }, ExtArgs["result"]["projectTag"]>
    composites: {}
  }

  type projectTagGetPayload<S extends boolean | null | undefined | projectTagDefaultArgs> = $Result.GetResult<Prisma.$projectTagPayload, S>

  type projectTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTagCountAggregateInputType | true
    }

  export interface projectTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectTag'], meta: { name: 'projectTag' } }
    /**
     * Find zero or one ProjectTag that matches the filter.
     * @param {projectTagFindUniqueArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectTagFindUniqueArgs>(args: SelectSubset<T, projectTagFindUniqueArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectTagFindUniqueOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectTagFindUniqueOrThrowArgs>(args: SelectSubset<T, projectTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectTagFindFirstArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectTagFindFirstArgs>(args?: SelectSubset<T, projectTagFindFirstArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectTagFindFirstOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectTagFindFirstOrThrowArgs>(args?: SelectSubset<T, projectTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTags
     * const projectTags = await prisma.projectTag.findMany()
     * 
     * // Get first 10 ProjectTags
     * const projectTags = await prisma.projectTag.findMany({ take: 10 })
     * 
     * // Only select the `projectid`
     * const projectTagWithProjectidOnly = await prisma.projectTag.findMany({ select: { projectid: true } })
     * 
     */
    findMany<T extends projectTagFindManyArgs>(args?: SelectSubset<T, projectTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTag.
     * @param {projectTagCreateArgs} args - Arguments to create a ProjectTag.
     * @example
     * // Create one ProjectTag
     * const ProjectTag = await prisma.projectTag.create({
     *   data: {
     *     // ... data to create a ProjectTag
     *   }
     * })
     * 
     */
    create<T extends projectTagCreateArgs>(args: SelectSubset<T, projectTagCreateArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTags.
     * @param {projectTagCreateManyArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectTagCreateManyArgs>(args?: SelectSubset<T, projectTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTags and returns the data saved in the database.
     * @param {projectTagCreateManyAndReturnArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTags and only return the `projectid`
     * const projectTagWithProjectidOnly = await prisma.projectTag.createManyAndReturn({
     *   select: { projectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectTagCreateManyAndReturnArgs>(args?: SelectSubset<T, projectTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTag.
     * @param {projectTagDeleteArgs} args - Arguments to delete one ProjectTag.
     * @example
     * // Delete one ProjectTag
     * const ProjectTag = await prisma.projectTag.delete({
     *   where: {
     *     // ... filter to delete one ProjectTag
     *   }
     * })
     * 
     */
    delete<T extends projectTagDeleteArgs>(args: SelectSubset<T, projectTagDeleteArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTag.
     * @param {projectTagUpdateArgs} args - Arguments to update one ProjectTag.
     * @example
     * // Update one ProjectTag
     * const projectTag = await prisma.projectTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectTagUpdateArgs>(args: SelectSubset<T, projectTagUpdateArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTags.
     * @param {projectTagDeleteManyArgs} args - Arguments to filter ProjectTags to delete.
     * @example
     * // Delete a few ProjectTags
     * const { count } = await prisma.projectTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectTagDeleteManyArgs>(args?: SelectSubset<T, projectTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectTagUpdateManyArgs>(args: SelectSubset<T, projectTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags and returns the data updated in the database.
     * @param {projectTagUpdateManyAndReturnArgs} args - Arguments to update many ProjectTags.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTags and only return the `projectid`
     * const projectTagWithProjectidOnly = await prisma.projectTag.updateManyAndReturn({
     *   select: { projectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectTagUpdateManyAndReturnArgs>(args: SelectSubset<T, projectTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTag.
     * @param {projectTagUpsertArgs} args - Arguments to update or create a ProjectTag.
     * @example
     * // Update or create a ProjectTag
     * const projectTag = await prisma.projectTag.upsert({
     *   create: {
     *     // ... data to create a ProjectTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTag we want to update
     *   }
     * })
     */
    upsert<T extends projectTagUpsertArgs>(args: SelectSubset<T, projectTagUpsertArgs<ExtArgs>>): Prisma__projectTagClient<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectTagCountArgs} args - Arguments to filter ProjectTags to count.
     * @example
     * // Count the number of ProjectTags
     * const count = await prisma.projectTag.count({
     *   where: {
     *     // ... the filter for the ProjectTags we want to count
     *   }
     * })
    **/
    count<T extends projectTagCountArgs>(
      args?: Subset<T, projectTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTagAggregateArgs>(args: Subset<T, ProjectTagAggregateArgs>): Prisma.PrismaPromise<GetProjectTagAggregateType<T>>

    /**
     * Group by ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectTagGroupByArgs['orderBy'] }
        : { orderBy?: projectTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectTag model
   */
  readonly fields: projectTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectTag model
   */ 
  interface projectTagFieldRefs {
    readonly projectid: FieldRef<"projectTag", 'String'>
    readonly tagid: FieldRef<"projectTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * projectTag findUnique
   */
  export type projectTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * Filter, which projectTag to fetch.
     */
    where: projectTagWhereUniqueInput
  }

  /**
   * projectTag findUniqueOrThrow
   */
  export type projectTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * Filter, which projectTag to fetch.
     */
    where: projectTagWhereUniqueInput
  }

  /**
   * projectTag findFirst
   */
  export type projectTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * Filter, which projectTag to fetch.
     */
    where?: projectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectTags to fetch.
     */
    orderBy?: projectTagOrderByWithRelationInput | projectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectTags.
     */
    cursor?: projectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * projectTag findFirstOrThrow
   */
  export type projectTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * Filter, which projectTag to fetch.
     */
    where?: projectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectTags to fetch.
     */
    orderBy?: projectTagOrderByWithRelationInput | projectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectTags.
     */
    cursor?: projectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * projectTag findMany
   */
  export type projectTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * Filter, which projectTags to fetch.
     */
    where?: projectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectTags to fetch.
     */
    orderBy?: projectTagOrderByWithRelationInput | projectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectTags.
     */
    cursor?: projectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectTags.
     */
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * projectTag create
   */
  export type projectTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * The data needed to create a projectTag.
     */
    data: XOR<projectTagCreateInput, projectTagUncheckedCreateInput>
  }

  /**
   * projectTag createMany
   */
  export type projectTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectTags.
     */
    data: projectTagCreateManyInput | projectTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectTag createManyAndReturn
   */
  export type projectTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * The data used to create many projectTags.
     */
    data: projectTagCreateManyInput | projectTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectTag update
   */
  export type projectTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * The data needed to update a projectTag.
     */
    data: XOR<projectTagUpdateInput, projectTagUncheckedUpdateInput>
    /**
     * Choose, which projectTag to update.
     */
    where: projectTagWhereUniqueInput
  }

  /**
   * projectTag updateMany
   */
  export type projectTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectTags.
     */
    data: XOR<projectTagUpdateManyMutationInput, projectTagUncheckedUpdateManyInput>
    /**
     * Filter which projectTags to update
     */
    where?: projectTagWhereInput
    /**
     * Limit how many projectTags to update.
     */
    limit?: number
  }

  /**
   * projectTag updateManyAndReturn
   */
  export type projectTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * The data used to update projectTags.
     */
    data: XOR<projectTagUpdateManyMutationInput, projectTagUncheckedUpdateManyInput>
    /**
     * Filter which projectTags to update
     */
    where?: projectTagWhereInput
    /**
     * Limit how many projectTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectTag upsert
   */
  export type projectTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * The filter to search for the projectTag to update in case it exists.
     */
    where: projectTagWhereUniqueInput
    /**
     * In case the projectTag found by the `where` argument doesn't exist, create a new projectTag with this data.
     */
    create: XOR<projectTagCreateInput, projectTagUncheckedCreateInput>
    /**
     * In case the projectTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectTagUpdateInput, projectTagUncheckedUpdateInput>
  }

  /**
   * projectTag delete
   */
  export type projectTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    /**
     * Filter which projectTag to delete.
     */
    where: projectTagWhereUniqueInput
  }

  /**
   * projectTag deleteMany
   */
  export type projectTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectTags to delete
     */
    where?: projectTagWhereInput
    /**
     * Limit how many projectTags to delete.
     */
    limit?: number
  }

  /**
   * projectTag without action
   */
  export type projectTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
  }


  /**
   * Model repo
   */

  export type AggregateRepo = {
    _count: RepoCountAggregateOutputType | null
    _avg: RepoAvgAggregateOutputType | null
    _sum: RepoSumAggregateOutputType | null
    _min: RepoMinAggregateOutputType | null
    _max: RepoMaxAggregateOutputType | null
  }

  export type RepoAvgAggregateOutputType = {
    star: number | null
    fork: number | null
  }

  export type RepoSumAggregateOutputType = {
    star: number | null
    fork: number | null
  }

  export type RepoMinAggregateOutputType = {
    repoid: string | null
    uid: string | null
    name: string | null
    url: string | null
    description: string | null
    star: number | null
    fork: number | null
    last_updated: Date | null
    language: string | null
    updated_at: Date | null
  }

  export type RepoMaxAggregateOutputType = {
    repoid: string | null
    uid: string | null
    name: string | null
    url: string | null
    description: string | null
    star: number | null
    fork: number | null
    last_updated: Date | null
    language: string | null
    updated_at: Date | null
  }

  export type RepoCountAggregateOutputType = {
    repoid: number
    uid: number
    name: number
    url: number
    description: number
    star: number
    fork: number
    last_updated: number
    language: number
    updated_at: number
    _all: number
  }


  export type RepoAvgAggregateInputType = {
    star?: true
    fork?: true
  }

  export type RepoSumAggregateInputType = {
    star?: true
    fork?: true
  }

  export type RepoMinAggregateInputType = {
    repoid?: true
    uid?: true
    name?: true
    url?: true
    description?: true
    star?: true
    fork?: true
    last_updated?: true
    language?: true
    updated_at?: true
  }

  export type RepoMaxAggregateInputType = {
    repoid?: true
    uid?: true
    name?: true
    url?: true
    description?: true
    star?: true
    fork?: true
    last_updated?: true
    language?: true
    updated_at?: true
  }

  export type RepoCountAggregateInputType = {
    repoid?: true
    uid?: true
    name?: true
    url?: true
    description?: true
    star?: true
    fork?: true
    last_updated?: true
    language?: true
    updated_at?: true
    _all?: true
  }

  export type RepoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repo to aggregate.
     */
    where?: repoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repos to fetch.
     */
    orderBy?: repoOrderByWithRelationInput | repoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: repoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned repos
    **/
    _count?: true | RepoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepoMaxAggregateInputType
  }

  export type GetRepoAggregateType<T extends RepoAggregateArgs> = {
        [P in keyof T & keyof AggregateRepo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepo[P]>
      : GetScalarType<T[P], AggregateRepo[P]>
  }




  export type repoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repoWhereInput
    orderBy?: repoOrderByWithAggregationInput | repoOrderByWithAggregationInput[]
    by: RepoScalarFieldEnum[] | RepoScalarFieldEnum
    having?: repoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepoCountAggregateInputType | true
    _avg?: RepoAvgAggregateInputType
    _sum?: RepoSumAggregateInputType
    _min?: RepoMinAggregateInputType
    _max?: RepoMaxAggregateInputType
  }

  export type RepoGroupByOutputType = {
    repoid: string
    uid: string | null
    name: string
    url: string
    description: string | null
    star: number | null
    fork: number | null
    last_updated: Date | null
    language: string | null
    updated_at: Date | null
    _count: RepoCountAggregateOutputType | null
    _avg: RepoAvgAggregateOutputType | null
    _sum: RepoSumAggregateOutputType | null
    _min: RepoMinAggregateOutputType | null
    _max: RepoMaxAggregateOutputType | null
  }

  type GetRepoGroupByPayload<T extends repoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepoGroupByOutputType[P]>
            : GetScalarType<T[P], RepoGroupByOutputType[P]>
        }
      >
    >


  export type repoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repoid?: boolean
    uid?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    star?: boolean
    fork?: boolean
    last_updated?: boolean
    language?: boolean
    updated_at?: boolean
    project?: boolean | repo$projectArgs<ExtArgs>
    user?: boolean | repo$userArgs<ExtArgs>
    _count?: boolean | RepoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repo"]>

  export type repoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repoid?: boolean
    uid?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    star?: boolean
    fork?: boolean
    last_updated?: boolean
    language?: boolean
    updated_at?: boolean
    user?: boolean | repo$userArgs<ExtArgs>
  }, ExtArgs["result"]["repo"]>

  export type repoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repoid?: boolean
    uid?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    star?: boolean
    fork?: boolean
    last_updated?: boolean
    language?: boolean
    updated_at?: boolean
    user?: boolean | repo$userArgs<ExtArgs>
  }, ExtArgs["result"]["repo"]>

  export type repoSelectScalar = {
    repoid?: boolean
    uid?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    star?: boolean
    fork?: boolean
    last_updated?: boolean
    language?: boolean
    updated_at?: boolean
  }

  export type repoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"repoid" | "uid" | "name" | "url" | "description" | "star" | "fork" | "last_updated" | "language" | "updated_at", ExtArgs["result"]["repo"]>
  export type repoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | repo$projectArgs<ExtArgs>
    user?: boolean | repo$userArgs<ExtArgs>
    _count?: boolean | RepoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type repoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | repo$userArgs<ExtArgs>
  }
  export type repoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | repo$userArgs<ExtArgs>
  }

  export type $repoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "repo"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      repoid: string
      uid: string | null
      name: string
      url: string
      description: string | null
      star: number | null
      fork: number | null
      last_updated: Date | null
      language: string | null
      updated_at: Date | null
    }, ExtArgs["result"]["repo"]>
    composites: {}
  }

  type repoGetPayload<S extends boolean | null | undefined | repoDefaultArgs> = $Result.GetResult<Prisma.$repoPayload, S>

  type repoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<repoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepoCountAggregateInputType | true
    }

  export interface repoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['repo'], meta: { name: 'repo' } }
    /**
     * Find zero or one Repo that matches the filter.
     * @param {repoFindUniqueArgs} args - Arguments to find a Repo
     * @example
     * // Get one Repo
     * const repo = await prisma.repo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends repoFindUniqueArgs>(args: SelectSubset<T, repoFindUniqueArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {repoFindUniqueOrThrowArgs} args - Arguments to find a Repo
     * @example
     * // Get one Repo
     * const repo = await prisma.repo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends repoFindUniqueOrThrowArgs>(args: SelectSubset<T, repoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repoFindFirstArgs} args - Arguments to find a Repo
     * @example
     * // Get one Repo
     * const repo = await prisma.repo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends repoFindFirstArgs>(args?: SelectSubset<T, repoFindFirstArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repoFindFirstOrThrowArgs} args - Arguments to find a Repo
     * @example
     * // Get one Repo
     * const repo = await prisma.repo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends repoFindFirstOrThrowArgs>(args?: SelectSubset<T, repoFindFirstOrThrowArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repos
     * const repos = await prisma.repo.findMany()
     * 
     * // Get first 10 Repos
     * const repos = await prisma.repo.findMany({ take: 10 })
     * 
     * // Only select the `repoid`
     * const repoWithRepoidOnly = await prisma.repo.findMany({ select: { repoid: true } })
     * 
     */
    findMany<T extends repoFindManyArgs>(args?: SelectSubset<T, repoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repo.
     * @param {repoCreateArgs} args - Arguments to create a Repo.
     * @example
     * // Create one Repo
     * const Repo = await prisma.repo.create({
     *   data: {
     *     // ... data to create a Repo
     *   }
     * })
     * 
     */
    create<T extends repoCreateArgs>(args: SelectSubset<T, repoCreateArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repos.
     * @param {repoCreateManyArgs} args - Arguments to create many Repos.
     * @example
     * // Create many Repos
     * const repo = await prisma.repo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends repoCreateManyArgs>(args?: SelectSubset<T, repoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repos and returns the data saved in the database.
     * @param {repoCreateManyAndReturnArgs} args - Arguments to create many Repos.
     * @example
     * // Create many Repos
     * const repo = await prisma.repo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repos and only return the `repoid`
     * const repoWithRepoidOnly = await prisma.repo.createManyAndReturn({
     *   select: { repoid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends repoCreateManyAndReturnArgs>(args?: SelectSubset<T, repoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repo.
     * @param {repoDeleteArgs} args - Arguments to delete one Repo.
     * @example
     * // Delete one Repo
     * const Repo = await prisma.repo.delete({
     *   where: {
     *     // ... filter to delete one Repo
     *   }
     * })
     * 
     */
    delete<T extends repoDeleteArgs>(args: SelectSubset<T, repoDeleteArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repo.
     * @param {repoUpdateArgs} args - Arguments to update one Repo.
     * @example
     * // Update one Repo
     * const repo = await prisma.repo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends repoUpdateArgs>(args: SelectSubset<T, repoUpdateArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repos.
     * @param {repoDeleteManyArgs} args - Arguments to filter Repos to delete.
     * @example
     * // Delete a few Repos
     * const { count } = await prisma.repo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends repoDeleteManyArgs>(args?: SelectSubset<T, repoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repos
     * const repo = await prisma.repo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends repoUpdateManyArgs>(args: SelectSubset<T, repoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repos and returns the data updated in the database.
     * @param {repoUpdateManyAndReturnArgs} args - Arguments to update many Repos.
     * @example
     * // Update many Repos
     * const repo = await prisma.repo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repos and only return the `repoid`
     * const repoWithRepoidOnly = await prisma.repo.updateManyAndReturn({
     *   select: { repoid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends repoUpdateManyAndReturnArgs>(args: SelectSubset<T, repoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repo.
     * @param {repoUpsertArgs} args - Arguments to update or create a Repo.
     * @example
     * // Update or create a Repo
     * const repo = await prisma.repo.upsert({
     *   create: {
     *     // ... data to create a Repo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repo we want to update
     *   }
     * })
     */
    upsert<T extends repoUpsertArgs>(args: SelectSubset<T, repoUpsertArgs<ExtArgs>>): Prisma__repoClient<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repoCountArgs} args - Arguments to filter Repos to count.
     * @example
     * // Count the number of Repos
     * const count = await prisma.repo.count({
     *   where: {
     *     // ... the filter for the Repos we want to count
     *   }
     * })
    **/
    count<T extends repoCountArgs>(
      args?: Subset<T, repoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepoAggregateArgs>(args: Subset<T, RepoAggregateArgs>): Prisma.PrismaPromise<GetRepoAggregateType<T>>

    /**
     * Group by Repo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends repoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: repoGroupByArgs['orderBy'] }
        : { orderBy?: repoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, repoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the repo model
   */
  readonly fields: repoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for repo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__repoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends repo$projectArgs<ExtArgs> = {}>(args?: Subset<T, repo$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends repo$userArgs<ExtArgs> = {}>(args?: Subset<T, repo$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the repo model
   */ 
  interface repoFieldRefs {
    readonly repoid: FieldRef<"repo", 'String'>
    readonly uid: FieldRef<"repo", 'String'>
    readonly name: FieldRef<"repo", 'String'>
    readonly url: FieldRef<"repo", 'String'>
    readonly description: FieldRef<"repo", 'String'>
    readonly star: FieldRef<"repo", 'Int'>
    readonly fork: FieldRef<"repo", 'Int'>
    readonly last_updated: FieldRef<"repo", 'DateTime'>
    readonly language: FieldRef<"repo", 'String'>
    readonly updated_at: FieldRef<"repo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * repo findUnique
   */
  export type repoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * Filter, which repo to fetch.
     */
    where: repoWhereUniqueInput
  }

  /**
   * repo findUniqueOrThrow
   */
  export type repoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * Filter, which repo to fetch.
     */
    where: repoWhereUniqueInput
  }

  /**
   * repo findFirst
   */
  export type repoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * Filter, which repo to fetch.
     */
    where?: repoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repos to fetch.
     */
    orderBy?: repoOrderByWithRelationInput | repoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repos.
     */
    cursor?: repoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repos.
     */
    distinct?: RepoScalarFieldEnum | RepoScalarFieldEnum[]
  }

  /**
   * repo findFirstOrThrow
   */
  export type repoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * Filter, which repo to fetch.
     */
    where?: repoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repos to fetch.
     */
    orderBy?: repoOrderByWithRelationInput | repoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repos.
     */
    cursor?: repoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repos.
     */
    distinct?: RepoScalarFieldEnum | RepoScalarFieldEnum[]
  }

  /**
   * repo findMany
   */
  export type repoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * Filter, which repos to fetch.
     */
    where?: repoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repos to fetch.
     */
    orderBy?: repoOrderByWithRelationInput | repoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing repos.
     */
    cursor?: repoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repos.
     */
    skip?: number
    distinct?: RepoScalarFieldEnum | RepoScalarFieldEnum[]
  }

  /**
   * repo create
   */
  export type repoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * The data needed to create a repo.
     */
    data: XOR<repoCreateInput, repoUncheckedCreateInput>
  }

  /**
   * repo createMany
   */
  export type repoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many repos.
     */
    data: repoCreateManyInput | repoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * repo createManyAndReturn
   */
  export type repoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * The data used to create many repos.
     */
    data: repoCreateManyInput | repoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * repo update
   */
  export type repoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * The data needed to update a repo.
     */
    data: XOR<repoUpdateInput, repoUncheckedUpdateInput>
    /**
     * Choose, which repo to update.
     */
    where: repoWhereUniqueInput
  }

  /**
   * repo updateMany
   */
  export type repoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update repos.
     */
    data: XOR<repoUpdateManyMutationInput, repoUncheckedUpdateManyInput>
    /**
     * Filter which repos to update
     */
    where?: repoWhereInput
    /**
     * Limit how many repos to update.
     */
    limit?: number
  }

  /**
   * repo updateManyAndReturn
   */
  export type repoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * The data used to update repos.
     */
    data: XOR<repoUpdateManyMutationInput, repoUncheckedUpdateManyInput>
    /**
     * Filter which repos to update
     */
    where?: repoWhereInput
    /**
     * Limit how many repos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * repo upsert
   */
  export type repoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * The filter to search for the repo to update in case it exists.
     */
    where: repoWhereUniqueInput
    /**
     * In case the repo found by the `where` argument doesn't exist, create a new repo with this data.
     */
    create: XOR<repoCreateInput, repoUncheckedCreateInput>
    /**
     * In case the repo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<repoUpdateInput, repoUncheckedUpdateInput>
  }

  /**
   * repo delete
   */
  export type repoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    /**
     * Filter which repo to delete.
     */
    where: repoWhereUniqueInput
  }

  /**
   * repo deleteMany
   */
  export type repoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repos to delete
     */
    where?: repoWhereInput
    /**
     * Limit how many repos to delete.
     */
    limit?: number
  }

  /**
   * repo.project
   */
  export type repo$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * repo.user
   */
  export type repo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * repo without action
   */
  export type repoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
  }


  /**
   * Model roadmap
   */

  export type AggregateRoadmap = {
    _count: RoadmapCountAggregateOutputType | null
    _min: RoadmapMinAggregateOutputType | null
    _max: RoadmapMaxAggregateOutputType | null
  }

  export type RoadmapMinAggregateOutputType = {
    projectid: string | null
    roadmap: string | null
    description: string | null
    status: string | null
  }

  export type RoadmapMaxAggregateOutputType = {
    projectid: string | null
    roadmap: string | null
    description: string | null
    status: string | null
  }

  export type RoadmapCountAggregateOutputType = {
    projectid: number
    roadmap: number
    description: number
    status: number
    _all: number
  }


  export type RoadmapMinAggregateInputType = {
    projectid?: true
    roadmap?: true
    description?: true
    status?: true
  }

  export type RoadmapMaxAggregateInputType = {
    projectid?: true
    roadmap?: true
    description?: true
    status?: true
  }

  export type RoadmapCountAggregateInputType = {
    projectid?: true
    roadmap?: true
    description?: true
    status?: true
    _all?: true
  }

  export type RoadmapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roadmap to aggregate.
     */
    where?: roadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roadmaps to fetch.
     */
    orderBy?: roadmapOrderByWithRelationInput | roadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roadmaps
    **/
    _count?: true | RoadmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapMaxAggregateInputType
  }

  export type GetRoadmapAggregateType<T extends RoadmapAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmap[P]>
      : GetScalarType<T[P], AggregateRoadmap[P]>
  }




  export type roadmapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roadmapWhereInput
    orderBy?: roadmapOrderByWithAggregationInput | roadmapOrderByWithAggregationInput[]
    by: RoadmapScalarFieldEnum[] | RoadmapScalarFieldEnum
    having?: roadmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapCountAggregateInputType | true
    _min?: RoadmapMinAggregateInputType
    _max?: RoadmapMaxAggregateInputType
  }

  export type RoadmapGroupByOutputType = {
    projectid: string
    roadmap: string
    description: string
    status: string
    _count: RoadmapCountAggregateOutputType | null
    _min: RoadmapMinAggregateOutputType | null
    _max: RoadmapMaxAggregateOutputType | null
  }

  type GetRoadmapGroupByPayload<T extends roadmapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapGroupByOutputType[P]>
        }
      >
    >


  export type roadmapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    roadmap?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type roadmapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    roadmap?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type roadmapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    roadmap?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type roadmapSelectScalar = {
    projectid?: boolean
    roadmap?: boolean
    description?: boolean
    status?: boolean
  }

  export type roadmapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectid" | "roadmap" | "description" | "status", ExtArgs["result"]["roadmap"]>
  export type roadmapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type roadmapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type roadmapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $roadmapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roadmap"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectid: string
      roadmap: string
      description: string
      status: string
    }, ExtArgs["result"]["roadmap"]>
    composites: {}
  }

  type roadmapGetPayload<S extends boolean | null | undefined | roadmapDefaultArgs> = $Result.GetResult<Prisma.$roadmapPayload, S>

  type roadmapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roadmapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadmapCountAggregateInputType | true
    }

  export interface roadmapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roadmap'], meta: { name: 'roadmap' } }
    /**
     * Find zero or one Roadmap that matches the filter.
     * @param {roadmapFindUniqueArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roadmapFindUniqueArgs>(args: SelectSubset<T, roadmapFindUniqueArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roadmap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roadmapFindUniqueOrThrowArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roadmapFindUniqueOrThrowArgs>(args: SelectSubset<T, roadmapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roadmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roadmapFindFirstArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roadmapFindFirstArgs>(args?: SelectSubset<T, roadmapFindFirstArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roadmap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roadmapFindFirstOrThrowArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roadmapFindFirstOrThrowArgs>(args?: SelectSubset<T, roadmapFindFirstOrThrowArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roadmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roadmapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roadmaps
     * const roadmaps = await prisma.roadmap.findMany()
     * 
     * // Get first 10 Roadmaps
     * const roadmaps = await prisma.roadmap.findMany({ take: 10 })
     * 
     * // Only select the `projectid`
     * const roadmapWithProjectidOnly = await prisma.roadmap.findMany({ select: { projectid: true } })
     * 
     */
    findMany<T extends roadmapFindManyArgs>(args?: SelectSubset<T, roadmapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roadmap.
     * @param {roadmapCreateArgs} args - Arguments to create a Roadmap.
     * @example
     * // Create one Roadmap
     * const Roadmap = await prisma.roadmap.create({
     *   data: {
     *     // ... data to create a Roadmap
     *   }
     * })
     * 
     */
    create<T extends roadmapCreateArgs>(args: SelectSubset<T, roadmapCreateArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roadmaps.
     * @param {roadmapCreateManyArgs} args - Arguments to create many Roadmaps.
     * @example
     * // Create many Roadmaps
     * const roadmap = await prisma.roadmap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roadmapCreateManyArgs>(args?: SelectSubset<T, roadmapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roadmaps and returns the data saved in the database.
     * @param {roadmapCreateManyAndReturnArgs} args - Arguments to create many Roadmaps.
     * @example
     * // Create many Roadmaps
     * const roadmap = await prisma.roadmap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roadmaps and only return the `projectid`
     * const roadmapWithProjectidOnly = await prisma.roadmap.createManyAndReturn({
     *   select: { projectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roadmapCreateManyAndReturnArgs>(args?: SelectSubset<T, roadmapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roadmap.
     * @param {roadmapDeleteArgs} args - Arguments to delete one Roadmap.
     * @example
     * // Delete one Roadmap
     * const Roadmap = await prisma.roadmap.delete({
     *   where: {
     *     // ... filter to delete one Roadmap
     *   }
     * })
     * 
     */
    delete<T extends roadmapDeleteArgs>(args: SelectSubset<T, roadmapDeleteArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roadmap.
     * @param {roadmapUpdateArgs} args - Arguments to update one Roadmap.
     * @example
     * // Update one Roadmap
     * const roadmap = await prisma.roadmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roadmapUpdateArgs>(args: SelectSubset<T, roadmapUpdateArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roadmaps.
     * @param {roadmapDeleteManyArgs} args - Arguments to filter Roadmaps to delete.
     * @example
     * // Delete a few Roadmaps
     * const { count } = await prisma.roadmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roadmapDeleteManyArgs>(args?: SelectSubset<T, roadmapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roadmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roadmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roadmaps
     * const roadmap = await prisma.roadmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roadmapUpdateManyArgs>(args: SelectSubset<T, roadmapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roadmaps and returns the data updated in the database.
     * @param {roadmapUpdateManyAndReturnArgs} args - Arguments to update many Roadmaps.
     * @example
     * // Update many Roadmaps
     * const roadmap = await prisma.roadmap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roadmaps and only return the `projectid`
     * const roadmapWithProjectidOnly = await prisma.roadmap.updateManyAndReturn({
     *   select: { projectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roadmapUpdateManyAndReturnArgs>(args: SelectSubset<T, roadmapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roadmap.
     * @param {roadmapUpsertArgs} args - Arguments to update or create a Roadmap.
     * @example
     * // Update or create a Roadmap
     * const roadmap = await prisma.roadmap.upsert({
     *   create: {
     *     // ... data to create a Roadmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roadmap we want to update
     *   }
     * })
     */
    upsert<T extends roadmapUpsertArgs>(args: SelectSubset<T, roadmapUpsertArgs<ExtArgs>>): Prisma__roadmapClient<$Result.GetResult<Prisma.$roadmapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roadmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roadmapCountArgs} args - Arguments to filter Roadmaps to count.
     * @example
     * // Count the number of Roadmaps
     * const count = await prisma.roadmap.count({
     *   where: {
     *     // ... the filter for the Roadmaps we want to count
     *   }
     * })
    **/
    count<T extends roadmapCountArgs>(
      args?: Subset<T, roadmapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roadmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoadmapAggregateArgs>(args: Subset<T, RoadmapAggregateArgs>): Prisma.PrismaPromise<GetRoadmapAggregateType<T>>

    /**
     * Group by Roadmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roadmapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roadmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roadmapGroupByArgs['orderBy'] }
        : { orderBy?: roadmapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roadmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roadmap model
   */
  readonly fields: roadmapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roadmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roadmapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roadmap model
   */ 
  interface roadmapFieldRefs {
    readonly projectid: FieldRef<"roadmap", 'String'>
    readonly roadmap: FieldRef<"roadmap", 'String'>
    readonly description: FieldRef<"roadmap", 'String'>
    readonly status: FieldRef<"roadmap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roadmap findUnique
   */
  export type roadmapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * Filter, which roadmap to fetch.
     */
    where: roadmapWhereUniqueInput
  }

  /**
   * roadmap findUniqueOrThrow
   */
  export type roadmapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * Filter, which roadmap to fetch.
     */
    where: roadmapWhereUniqueInput
  }

  /**
   * roadmap findFirst
   */
  export type roadmapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * Filter, which roadmap to fetch.
     */
    where?: roadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roadmaps to fetch.
     */
    orderBy?: roadmapOrderByWithRelationInput | roadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roadmaps.
     */
    cursor?: roadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * roadmap findFirstOrThrow
   */
  export type roadmapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * Filter, which roadmap to fetch.
     */
    where?: roadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roadmaps to fetch.
     */
    orderBy?: roadmapOrderByWithRelationInput | roadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roadmaps.
     */
    cursor?: roadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * roadmap findMany
   */
  export type roadmapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * Filter, which roadmaps to fetch.
     */
    where?: roadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roadmaps to fetch.
     */
    orderBy?: roadmapOrderByWithRelationInput | roadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roadmaps.
     */
    cursor?: roadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roadmaps.
     */
    skip?: number
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * roadmap create
   */
  export type roadmapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * The data needed to create a roadmap.
     */
    data: XOR<roadmapCreateInput, roadmapUncheckedCreateInput>
  }

  /**
   * roadmap createMany
   */
  export type roadmapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roadmaps.
     */
    data: roadmapCreateManyInput | roadmapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roadmap createManyAndReturn
   */
  export type roadmapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * The data used to create many roadmaps.
     */
    data: roadmapCreateManyInput | roadmapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * roadmap update
   */
  export type roadmapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * The data needed to update a roadmap.
     */
    data: XOR<roadmapUpdateInput, roadmapUncheckedUpdateInput>
    /**
     * Choose, which roadmap to update.
     */
    where: roadmapWhereUniqueInput
  }

  /**
   * roadmap updateMany
   */
  export type roadmapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roadmaps.
     */
    data: XOR<roadmapUpdateManyMutationInput, roadmapUncheckedUpdateManyInput>
    /**
     * Filter which roadmaps to update
     */
    where?: roadmapWhereInput
    /**
     * Limit how many roadmaps to update.
     */
    limit?: number
  }

  /**
   * roadmap updateManyAndReturn
   */
  export type roadmapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * The data used to update roadmaps.
     */
    data: XOR<roadmapUpdateManyMutationInput, roadmapUncheckedUpdateManyInput>
    /**
     * Filter which roadmaps to update
     */
    where?: roadmapWhereInput
    /**
     * Limit how many roadmaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * roadmap upsert
   */
  export type roadmapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * The filter to search for the roadmap to update in case it exists.
     */
    where: roadmapWhereUniqueInput
    /**
     * In case the roadmap found by the `where` argument doesn't exist, create a new roadmap with this data.
     */
    create: XOR<roadmapCreateInput, roadmapUncheckedCreateInput>
    /**
     * In case the roadmap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roadmapUpdateInput, roadmapUncheckedUpdateInput>
  }

  /**
   * roadmap delete
   */
  export type roadmapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
    /**
     * Filter which roadmap to delete.
     */
    where: roadmapWhereUniqueInput
  }

  /**
   * roadmap deleteMany
   */
  export type roadmapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roadmaps to delete
     */
    where?: roadmapWhereInput
    /**
     * Limit how many roadmaps to delete.
     */
    limit?: number
  }

  /**
   * roadmap without action
   */
  export type roadmapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roadmap
     */
    select?: roadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roadmap
     */
    omit?: roadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roadmapInclude<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    tagid: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    tagid: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    tagid: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    tagid?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    tagid?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    tagid?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    tagid: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagid?: boolean
    name?: boolean
    projectTag?: boolean | tag$projectTagArgs<ExtArgs>
    userTag?: boolean | tag$userTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagid?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagid?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectScalar = {
    tagid?: boolean
    name?: boolean
  }

  export type tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tagid" | "name", ExtArgs["result"]["tag"]>
  export type tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectTag?: boolean | tag$projectTagArgs<ExtArgs>
    userTag?: boolean | tag$userTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {
      projectTag: Prisma.$projectTagPayload<ExtArgs>[]
      userTag: Prisma.$userTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tagid: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagFindUniqueArgs>(args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(args: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagFindFirstArgs>(args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `tagid`
     * const tagWithTagidOnly = await prisma.tag.findMany({ select: { tagid: true } })
     * 
     */
    findMany<T extends tagFindManyArgs>(args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends tagCreateArgs>(args: SelectSubset<T, tagCreateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagCreateManyArgs>(args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `tagid`
     * const tagWithTagidOnly = await prisma.tag.createManyAndReturn({
     *   select: { tagid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagCreateManyAndReturnArgs>(args?: SelectSubset<T, tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends tagDeleteArgs>(args: SelectSubset<T, tagDeleteArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagUpdateArgs>(args: SelectSubset<T, tagUpdateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagDeleteManyArgs>(args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagUpdateManyArgs>(args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `tagid`
     * const tagWithTagidOnly = await prisma.tag.updateManyAndReturn({
     *   select: { tagid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagUpdateManyAndReturnArgs>(args: SelectSubset<T, tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends tagUpsertArgs>(args: SelectSubset<T, tagUpsertArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectTag<T extends tag$projectTagArgs<ExtArgs> = {}>(args?: Subset<T, tag$projectTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTag<T extends tag$userTagArgs<ExtArgs> = {}>(args?: Subset<T, tag$userTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tag model
   */ 
  interface tagFieldRefs {
    readonly tagid: FieldRef<"tag", 'String'>
    readonly name: FieldRef<"tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag createManyAndReturn
   */
  export type tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag updateManyAndReturn
   */
  export type tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tag.projectTag
   */
  export type tag$projectTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectTag
     */
    select?: projectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectTag
     */
    omit?: projectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectTagInclude<ExtArgs> | null
    where?: projectTagWhereInput
    orderBy?: projectTagOrderByWithRelationInput | projectTagOrderByWithRelationInput[]
    cursor?: projectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * tag.userTag
   */
  export type tag$userTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    where?: userTagWhereInput
    orderBy?: userTagOrderByWithRelationInput | userTagOrderByWithRelationInput[]
    cursor?: userTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTagScalarFieldEnum | UserTagScalarFieldEnum[]
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
  }


  /**
   * Model teammember
   */

  export type AggregateTeammember = {
    _count: TeammemberCountAggregateOutputType | null
    _min: TeammemberMinAggregateOutputType | null
    _max: TeammemberMaxAggregateOutputType | null
  }

  export type TeammemberMinAggregateOutputType = {
    projectid: string | null
    uid: string | null
    role: string | null
  }

  export type TeammemberMaxAggregateOutputType = {
    projectid: string | null
    uid: string | null
    role: string | null
  }

  export type TeammemberCountAggregateOutputType = {
    projectid: number
    uid: number
    role: number
    _all: number
  }


  export type TeammemberMinAggregateInputType = {
    projectid?: true
    uid?: true
    role?: true
  }

  export type TeammemberMaxAggregateInputType = {
    projectid?: true
    uid?: true
    role?: true
  }

  export type TeammemberCountAggregateInputType = {
    projectid?: true
    uid?: true
    role?: true
    _all?: true
  }

  export type TeammemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teammember to aggregate.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teammembers
    **/
    _count?: true | TeammemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeammemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeammemberMaxAggregateInputType
  }

  export type GetTeammemberAggregateType<T extends TeammemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeammember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeammember[P]>
      : GetScalarType<T[P], AggregateTeammember[P]>
  }




  export type teammemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithAggregationInput | teammemberOrderByWithAggregationInput[]
    by: TeammemberScalarFieldEnum[] | TeammemberScalarFieldEnum
    having?: teammemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeammemberCountAggregateInputType | true
    _min?: TeammemberMinAggregateInputType
    _max?: TeammemberMaxAggregateInputType
  }

  export type TeammemberGroupByOutputType = {
    projectid: string
    uid: string
    role: string
    _count: TeammemberCountAggregateOutputType | null
    _min: TeammemberMinAggregateOutputType | null
    _max: TeammemberMaxAggregateOutputType | null
  }

  type GetTeammemberGroupByPayload<T extends teammemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeammemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeammemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeammemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeammemberGroupByOutputType[P]>
        }
      >
    >


  export type teammemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    uid?: boolean
    role?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    uid?: boolean
    role?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectid?: boolean
    uid?: boolean
    role?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectScalar = {
    projectid?: boolean
    uid?: boolean
    role?: boolean
  }

  export type teammemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectid" | "uid" | "role", ExtArgs["result"]["teammember"]>
  export type teammemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type teammemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type teammemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $teammemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teammember"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectid: string
      uid: string
      role: string
    }, ExtArgs["result"]["teammember"]>
    composites: {}
  }

  type teammemberGetPayload<S extends boolean | null | undefined | teammemberDefaultArgs> = $Result.GetResult<Prisma.$teammemberPayload, S>

  type teammemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teammemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeammemberCountAggregateInputType | true
    }

  export interface teammemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teammember'], meta: { name: 'teammember' } }
    /**
     * Find zero or one Teammember that matches the filter.
     * @param {teammemberFindUniqueArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teammemberFindUniqueArgs>(args: SelectSubset<T, teammemberFindUniqueArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teammember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teammemberFindUniqueOrThrowArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teammemberFindUniqueOrThrowArgs>(args: SelectSubset<T, teammemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teammember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindFirstArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teammemberFindFirstArgs>(args?: SelectSubset<T, teammemberFindFirstArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teammember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindFirstOrThrowArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teammemberFindFirstOrThrowArgs>(args?: SelectSubset<T, teammemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teammembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teammembers
     * const teammembers = await prisma.teammember.findMany()
     * 
     * // Get first 10 Teammembers
     * const teammembers = await prisma.teammember.findMany({ take: 10 })
     * 
     * // Only select the `projectid`
     * const teammemberWithProjectidOnly = await prisma.teammember.findMany({ select: { projectid: true } })
     * 
     */
    findMany<T extends teammemberFindManyArgs>(args?: SelectSubset<T, teammemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teammember.
     * @param {teammemberCreateArgs} args - Arguments to create a Teammember.
     * @example
     * // Create one Teammember
     * const Teammember = await prisma.teammember.create({
     *   data: {
     *     // ... data to create a Teammember
     *   }
     * })
     * 
     */
    create<T extends teammemberCreateArgs>(args: SelectSubset<T, teammemberCreateArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teammembers.
     * @param {teammemberCreateManyArgs} args - Arguments to create many Teammembers.
     * @example
     * // Create many Teammembers
     * const teammember = await prisma.teammember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teammemberCreateManyArgs>(args?: SelectSubset<T, teammemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teammembers and returns the data saved in the database.
     * @param {teammemberCreateManyAndReturnArgs} args - Arguments to create many Teammembers.
     * @example
     * // Create many Teammembers
     * const teammember = await prisma.teammember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teammembers and only return the `projectid`
     * const teammemberWithProjectidOnly = await prisma.teammember.createManyAndReturn({
     *   select: { projectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teammemberCreateManyAndReturnArgs>(args?: SelectSubset<T, teammemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teammember.
     * @param {teammemberDeleteArgs} args - Arguments to delete one Teammember.
     * @example
     * // Delete one Teammember
     * const Teammember = await prisma.teammember.delete({
     *   where: {
     *     // ... filter to delete one Teammember
     *   }
     * })
     * 
     */
    delete<T extends teammemberDeleteArgs>(args: SelectSubset<T, teammemberDeleteArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teammember.
     * @param {teammemberUpdateArgs} args - Arguments to update one Teammember.
     * @example
     * // Update one Teammember
     * const teammember = await prisma.teammember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teammemberUpdateArgs>(args: SelectSubset<T, teammemberUpdateArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teammembers.
     * @param {teammemberDeleteManyArgs} args - Arguments to filter Teammembers to delete.
     * @example
     * // Delete a few Teammembers
     * const { count } = await prisma.teammember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teammemberDeleteManyArgs>(args?: SelectSubset<T, teammemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teammembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teammembers
     * const teammember = await prisma.teammember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teammemberUpdateManyArgs>(args: SelectSubset<T, teammemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teammembers and returns the data updated in the database.
     * @param {teammemberUpdateManyAndReturnArgs} args - Arguments to update many Teammembers.
     * @example
     * // Update many Teammembers
     * const teammember = await prisma.teammember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teammembers and only return the `projectid`
     * const teammemberWithProjectidOnly = await prisma.teammember.updateManyAndReturn({
     *   select: { projectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teammemberUpdateManyAndReturnArgs>(args: SelectSubset<T, teammemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teammember.
     * @param {teammemberUpsertArgs} args - Arguments to update or create a Teammember.
     * @example
     * // Update or create a Teammember
     * const teammember = await prisma.teammember.upsert({
     *   create: {
     *     // ... data to create a Teammember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teammember we want to update
     *   }
     * })
     */
    upsert<T extends teammemberUpsertArgs>(args: SelectSubset<T, teammemberUpsertArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teammembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberCountArgs} args - Arguments to filter Teammembers to count.
     * @example
     * // Count the number of Teammembers
     * const count = await prisma.teammember.count({
     *   where: {
     *     // ... the filter for the Teammembers we want to count
     *   }
     * })
    **/
    count<T extends teammemberCountArgs>(
      args?: Subset<T, teammemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeammemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teammember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeammemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeammemberAggregateArgs>(args: Subset<T, TeammemberAggregateArgs>): Prisma.PrismaPromise<GetTeammemberAggregateType<T>>

    /**
     * Group by Teammember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teammemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teammemberGroupByArgs['orderBy'] }
        : { orderBy?: teammemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teammemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeammemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teammember model
   */
  readonly fields: teammemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teammember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teammemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teammember model
   */ 
  interface teammemberFieldRefs {
    readonly projectid: FieldRef<"teammember", 'String'>
    readonly uid: FieldRef<"teammember", 'String'>
    readonly role: FieldRef<"teammember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * teammember findUnique
   */
  export type teammemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember findUniqueOrThrow
   */
  export type teammemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember findFirst
   */
  export type teammemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teammembers.
     */
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember findFirstOrThrow
   */
  export type teammemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teammembers.
     */
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember findMany
   */
  export type teammemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammembers to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember create
   */
  export type teammemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The data needed to create a teammember.
     */
    data: XOR<teammemberCreateInput, teammemberUncheckedCreateInput>
  }

  /**
   * teammember createMany
   */
  export type teammemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teammembers.
     */
    data: teammemberCreateManyInput | teammemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teammember createManyAndReturn
   */
  export type teammemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * The data used to create many teammembers.
     */
    data: teammemberCreateManyInput | teammemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * teammember update
   */
  export type teammemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The data needed to update a teammember.
     */
    data: XOR<teammemberUpdateInput, teammemberUncheckedUpdateInput>
    /**
     * Choose, which teammember to update.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember updateMany
   */
  export type teammemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teammembers.
     */
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyInput>
    /**
     * Filter which teammembers to update
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to update.
     */
    limit?: number
  }

  /**
   * teammember updateManyAndReturn
   */
  export type teammemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * The data used to update teammembers.
     */
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyInput>
    /**
     * Filter which teammembers to update
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * teammember upsert
   */
  export type teammemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The filter to search for the teammember to update in case it exists.
     */
    where: teammemberWhereUniqueInput
    /**
     * In case the teammember found by the `where` argument doesn't exist, create a new teammember with this data.
     */
    create: XOR<teammemberCreateInput, teammemberUncheckedCreateInput>
    /**
     * In case the teammember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teammemberUpdateInput, teammemberUncheckedUpdateInput>
  }

  /**
   * teammember delete
   */
  export type teammemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter which teammember to delete.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember deleteMany
   */
  export type teammemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teammembers to delete
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to delete.
     */
    limit?: number
  }

  /**
   * teammember without action
   */
  export type teammemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    followers: number | null
    following: number | null
    public_repos: number | null
    total_private_repos: number | null
  }

  export type UserSumAggregateOutputType = {
    followers: number | null
    following: number | null
    public_repos: number | null
    total_private_repos: number | null
  }

  export type UserMinAggregateOutputType = {
    uid: string | null
    login: string | null
    name: string | null
    avatar: string | null
    location: string | null
    token: string | null
    bio: string | null
    followers: number | null
    following: number | null
    public_repos: number | null
    total_private_repos: number | null
    html_url: string | null
    last_updated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uid: string | null
    login: string | null
    name: string | null
    avatar: string | null
    location: string | null
    token: string | null
    bio: string | null
    followers: number | null
    following: number | null
    public_repos: number | null
    total_private_repos: number | null
    html_url: string | null
    last_updated: Date | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    login: number
    name: number
    avatar: number
    location: number
    token: number
    bio: number
    followers: number
    following: number
    public_repos: number
    total_private_repos: number
    html_url: number
    last_updated: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    followers?: true
    following?: true
    public_repos?: true
    total_private_repos?: true
  }

  export type UserSumAggregateInputType = {
    followers?: true
    following?: true
    public_repos?: true
    total_private_repos?: true
  }

  export type UserMinAggregateInputType = {
    uid?: true
    login?: true
    name?: true
    avatar?: true
    location?: true
    token?: true
    bio?: true
    followers?: true
    following?: true
    public_repos?: true
    total_private_repos?: true
    html_url?: true
    last_updated?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    login?: true
    name?: true
    avatar?: true
    location?: true
    token?: true
    bio?: true
    followers?: true
    following?: true
    public_repos?: true
    total_private_repos?: true
    html_url?: true
    last_updated?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    login?: true
    name?: true
    avatar?: true
    location?: true
    token?: true
    bio?: true
    followers?: true
    following?: true
    public_repos?: true
    total_private_repos?: true
    html_url?: true
    last_updated?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: string
    login: string
    name: string
    avatar: string | null
    location: string | null
    token: string
    bio: string | null
    followers: number | null
    following: number | null
    public_repos: number | null
    total_private_repos: number | null
    html_url: string | null
    last_updated: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    login?: boolean
    name?: boolean
    avatar?: boolean
    location?: boolean
    token?: boolean
    bio?: boolean
    followers?: boolean
    following?: boolean
    public_repos?: boolean
    total_private_repos?: boolean
    html_url?: boolean
    last_updated?: boolean
    ChatMessage?: boolean | user$ChatMessageArgs<ExtArgs>
    application?: boolean | user$applicationArgs<ExtArgs>
    donation?: boolean | user$donationArgs<ExtArgs>
    repo?: boolean | user$repoArgs<ExtArgs>
    teammember?: boolean | user$teammemberArgs<ExtArgs>
    userTag?: boolean | user$userTagArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    login?: boolean
    name?: boolean
    avatar?: boolean
    location?: boolean
    token?: boolean
    bio?: boolean
    followers?: boolean
    following?: boolean
    public_repos?: boolean
    total_private_repos?: boolean
    html_url?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    login?: boolean
    name?: boolean
    avatar?: boolean
    location?: boolean
    token?: boolean
    bio?: boolean
    followers?: boolean
    following?: boolean
    public_repos?: boolean
    total_private_repos?: boolean
    html_url?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    uid?: boolean
    login?: boolean
    name?: boolean
    avatar?: boolean
    location?: boolean
    token?: boolean
    bio?: boolean
    followers?: boolean
    following?: boolean
    public_repos?: boolean
    total_private_repos?: boolean
    html_url?: boolean
    last_updated?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "login" | "name" | "avatar" | "location" | "token" | "bio" | "followers" | "following" | "public_repos" | "total_private_repos" | "html_url" | "last_updated", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | user$ChatMessageArgs<ExtArgs>
    application?: boolean | user$applicationArgs<ExtArgs>
    donation?: boolean | user$donationArgs<ExtArgs>
    repo?: boolean | user$repoArgs<ExtArgs>
    teammember?: boolean | user$teammemberArgs<ExtArgs>
    userTag?: boolean | user$userTagArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
      application: Prisma.$applicationPayload<ExtArgs>[]
      donation: Prisma.$donationPayload<ExtArgs>[]
      repo: Prisma.$repoPayload<ExtArgs>[]
      teammember: Prisma.$teammemberPayload<ExtArgs>[]
      userTag: Prisma.$userTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      login: string
      name: string
      avatar: string | null
      location: string | null
      token: string
      bio: string | null
      followers: number | null
      following: number | null
      public_repos: number | null
      total_private_repos: number | null
      html_url: string | null
      last_updated: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatMessage<T extends user$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, user$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    application<T extends user$applicationArgs<ExtArgs> = {}>(args?: Subset<T, user$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donation<T extends user$donationArgs<ExtArgs> = {}>(args?: Subset<T, user$donationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repo<T extends user$repoArgs<ExtArgs> = {}>(args?: Subset<T, user$repoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teammember<T extends user$teammemberArgs<ExtArgs> = {}>(args?: Subset<T, user$teammemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTag<T extends user$userTagArgs<ExtArgs> = {}>(args?: Subset<T, user$userTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly uid: FieldRef<"user", 'String'>
    readonly login: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly location: FieldRef<"user", 'String'>
    readonly token: FieldRef<"user", 'String'>
    readonly bio: FieldRef<"user", 'String'>
    readonly followers: FieldRef<"user", 'Int'>
    readonly following: FieldRef<"user", 'Int'>
    readonly public_repos: FieldRef<"user", 'Int'>
    readonly total_private_repos: FieldRef<"user", 'Int'>
    readonly html_url: FieldRef<"user", 'String'>
    readonly last_updated: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.ChatMessage
   */
  export type user$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * user.application
   */
  export type user$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    cursor?: applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * user.donation
   */
  export type user$donationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    where?: donationWhereInput
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    cursor?: donationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * user.repo
   */
  export type user$repoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repo
     */
    select?: repoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repo
     */
    omit?: repoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repoInclude<ExtArgs> | null
    where?: repoWhereInput
    orderBy?: repoOrderByWithRelationInput | repoOrderByWithRelationInput[]
    cursor?: repoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepoScalarFieldEnum | RepoScalarFieldEnum[]
  }

  /**
   * user.teammember
   */
  export type user$teammemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    cursor?: teammemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * user.userTag
   */
  export type user$userTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    where?: userTagWhereInput
    orderBy?: userTagOrderByWithRelationInput | userTagOrderByWithRelationInput[]
    cursor?: userTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTagScalarFieldEnum | UserTagScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model userTag
   */

  export type AggregateUserTag = {
    _count: UserTagCountAggregateOutputType | null
    _min: UserTagMinAggregateOutputType | null
    _max: UserTagMaxAggregateOutputType | null
  }

  export type UserTagMinAggregateOutputType = {
    uid: string | null
    tagid: string | null
  }

  export type UserTagMaxAggregateOutputType = {
    uid: string | null
    tagid: string | null
  }

  export type UserTagCountAggregateOutputType = {
    uid: number
    tagid: number
    _all: number
  }


  export type UserTagMinAggregateInputType = {
    uid?: true
    tagid?: true
  }

  export type UserTagMaxAggregateInputType = {
    uid?: true
    tagid?: true
  }

  export type UserTagCountAggregateInputType = {
    uid?: true
    tagid?: true
    _all?: true
  }

  export type UserTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userTag to aggregate.
     */
    where?: userTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTags to fetch.
     */
    orderBy?: userTagOrderByWithRelationInput | userTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userTags
    **/
    _count?: true | UserTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTagMaxAggregateInputType
  }

  export type GetUserTagAggregateType<T extends UserTagAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTag[P]>
      : GetScalarType<T[P], AggregateUserTag[P]>
  }




  export type userTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userTagWhereInput
    orderBy?: userTagOrderByWithAggregationInput | userTagOrderByWithAggregationInput[]
    by: UserTagScalarFieldEnum[] | UserTagScalarFieldEnum
    having?: userTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTagCountAggregateInputType | true
    _min?: UserTagMinAggregateInputType
    _max?: UserTagMaxAggregateInputType
  }

  export type UserTagGroupByOutputType = {
    uid: string
    tagid: string
    _count: UserTagCountAggregateOutputType | null
    _min: UserTagMinAggregateOutputType | null
    _max: UserTagMaxAggregateOutputType | null
  }

  type GetUserTagGroupByPayload<T extends userTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTagGroupByOutputType[P]>
            : GetScalarType<T[P], UserTagGroupByOutputType[P]>
        }
      >
    >


  export type userTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    tagid?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTag"]>

  export type userTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    tagid?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTag"]>

  export type userTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    tagid?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTag"]>

  export type userTagSelectScalar = {
    uid?: boolean
    tagid?: boolean
  }

  export type userTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "tagid", ExtArgs["result"]["userTag"]>
  export type userTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type userTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type userTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $userTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userTag"
    objects: {
      tag: Prisma.$tagPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      tagid: string
    }, ExtArgs["result"]["userTag"]>
    composites: {}
  }

  type userTagGetPayload<S extends boolean | null | undefined | userTagDefaultArgs> = $Result.GetResult<Prisma.$userTagPayload, S>

  type userTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTagCountAggregateInputType | true
    }

  export interface userTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userTag'], meta: { name: 'userTag' } }
    /**
     * Find zero or one UserTag that matches the filter.
     * @param {userTagFindUniqueArgs} args - Arguments to find a UserTag
     * @example
     * // Get one UserTag
     * const userTag = await prisma.userTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userTagFindUniqueArgs>(args: SelectSubset<T, userTagFindUniqueArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userTagFindUniqueOrThrowArgs} args - Arguments to find a UserTag
     * @example
     * // Get one UserTag
     * const userTag = await prisma.userTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userTagFindUniqueOrThrowArgs>(args: SelectSubset<T, userTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTagFindFirstArgs} args - Arguments to find a UserTag
     * @example
     * // Get one UserTag
     * const userTag = await prisma.userTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userTagFindFirstArgs>(args?: SelectSubset<T, userTagFindFirstArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTagFindFirstOrThrowArgs} args - Arguments to find a UserTag
     * @example
     * // Get one UserTag
     * const userTag = await prisma.userTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userTagFindFirstOrThrowArgs>(args?: SelectSubset<T, userTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTags
     * const userTags = await prisma.userTag.findMany()
     * 
     * // Get first 10 UserTags
     * const userTags = await prisma.userTag.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userTagWithUidOnly = await prisma.userTag.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends userTagFindManyArgs>(args?: SelectSubset<T, userTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTag.
     * @param {userTagCreateArgs} args - Arguments to create a UserTag.
     * @example
     * // Create one UserTag
     * const UserTag = await prisma.userTag.create({
     *   data: {
     *     // ... data to create a UserTag
     *   }
     * })
     * 
     */
    create<T extends userTagCreateArgs>(args: SelectSubset<T, userTagCreateArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTags.
     * @param {userTagCreateManyArgs} args - Arguments to create many UserTags.
     * @example
     * // Create many UserTags
     * const userTag = await prisma.userTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userTagCreateManyArgs>(args?: SelectSubset<T, userTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTags and returns the data saved in the database.
     * @param {userTagCreateManyAndReturnArgs} args - Arguments to create many UserTags.
     * @example
     * // Create many UserTags
     * const userTag = await prisma.userTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTags and only return the `uid`
     * const userTagWithUidOnly = await prisma.userTag.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userTagCreateManyAndReturnArgs>(args?: SelectSubset<T, userTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTag.
     * @param {userTagDeleteArgs} args - Arguments to delete one UserTag.
     * @example
     * // Delete one UserTag
     * const UserTag = await prisma.userTag.delete({
     *   where: {
     *     // ... filter to delete one UserTag
     *   }
     * })
     * 
     */
    delete<T extends userTagDeleteArgs>(args: SelectSubset<T, userTagDeleteArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTag.
     * @param {userTagUpdateArgs} args - Arguments to update one UserTag.
     * @example
     * // Update one UserTag
     * const userTag = await prisma.userTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userTagUpdateArgs>(args: SelectSubset<T, userTagUpdateArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTags.
     * @param {userTagDeleteManyArgs} args - Arguments to filter UserTags to delete.
     * @example
     * // Delete a few UserTags
     * const { count } = await prisma.userTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userTagDeleteManyArgs>(args?: SelectSubset<T, userTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTags
     * const userTag = await prisma.userTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userTagUpdateManyArgs>(args: SelectSubset<T, userTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTags and returns the data updated in the database.
     * @param {userTagUpdateManyAndReturnArgs} args - Arguments to update many UserTags.
     * @example
     * // Update many UserTags
     * const userTag = await prisma.userTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTags and only return the `uid`
     * const userTagWithUidOnly = await prisma.userTag.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userTagUpdateManyAndReturnArgs>(args: SelectSubset<T, userTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTag.
     * @param {userTagUpsertArgs} args - Arguments to update or create a UserTag.
     * @example
     * // Update or create a UserTag
     * const userTag = await prisma.userTag.upsert({
     *   create: {
     *     // ... data to create a UserTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTag we want to update
     *   }
     * })
     */
    upsert<T extends userTagUpsertArgs>(args: SelectSubset<T, userTagUpsertArgs<ExtArgs>>): Prisma__userTagClient<$Result.GetResult<Prisma.$userTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTagCountArgs} args - Arguments to filter UserTags to count.
     * @example
     * // Count the number of UserTags
     * const count = await prisma.userTag.count({
     *   where: {
     *     // ... the filter for the UserTags we want to count
     *   }
     * })
    **/
    count<T extends userTagCountArgs>(
      args?: Subset<T, userTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTagAggregateArgs>(args: Subset<T, UserTagAggregateArgs>): Prisma.PrismaPromise<GetUserTagAggregateType<T>>

    /**
     * Group by UserTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userTagGroupByArgs['orderBy'] }
        : { orderBy?: userTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userTag model
   */
  readonly fields: userTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userTag model
   */ 
  interface userTagFieldRefs {
    readonly uid: FieldRef<"userTag", 'String'>
    readonly tagid: FieldRef<"userTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userTag findUnique
   */
  export type userTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * Filter, which userTag to fetch.
     */
    where: userTagWhereUniqueInput
  }

  /**
   * userTag findUniqueOrThrow
   */
  export type userTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * Filter, which userTag to fetch.
     */
    where: userTagWhereUniqueInput
  }

  /**
   * userTag findFirst
   */
  export type userTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * Filter, which userTag to fetch.
     */
    where?: userTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTags to fetch.
     */
    orderBy?: userTagOrderByWithRelationInput | userTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userTags.
     */
    cursor?: userTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userTags.
     */
    distinct?: UserTagScalarFieldEnum | UserTagScalarFieldEnum[]
  }

  /**
   * userTag findFirstOrThrow
   */
  export type userTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * Filter, which userTag to fetch.
     */
    where?: userTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTags to fetch.
     */
    orderBy?: userTagOrderByWithRelationInput | userTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userTags.
     */
    cursor?: userTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userTags.
     */
    distinct?: UserTagScalarFieldEnum | UserTagScalarFieldEnum[]
  }

  /**
   * userTag findMany
   */
  export type userTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * Filter, which userTags to fetch.
     */
    where?: userTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTags to fetch.
     */
    orderBy?: userTagOrderByWithRelationInput | userTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userTags.
     */
    cursor?: userTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTags.
     */
    skip?: number
    distinct?: UserTagScalarFieldEnum | UserTagScalarFieldEnum[]
  }

  /**
   * userTag create
   */
  export type userTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * The data needed to create a userTag.
     */
    data: XOR<userTagCreateInput, userTagUncheckedCreateInput>
  }

  /**
   * userTag createMany
   */
  export type userTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userTags.
     */
    data: userTagCreateManyInput | userTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userTag createManyAndReturn
   */
  export type userTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * The data used to create many userTags.
     */
    data: userTagCreateManyInput | userTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userTag update
   */
  export type userTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * The data needed to update a userTag.
     */
    data: XOR<userTagUpdateInput, userTagUncheckedUpdateInput>
    /**
     * Choose, which userTag to update.
     */
    where: userTagWhereUniqueInput
  }

  /**
   * userTag updateMany
   */
  export type userTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userTags.
     */
    data: XOR<userTagUpdateManyMutationInput, userTagUncheckedUpdateManyInput>
    /**
     * Filter which userTags to update
     */
    where?: userTagWhereInput
    /**
     * Limit how many userTags to update.
     */
    limit?: number
  }

  /**
   * userTag updateManyAndReturn
   */
  export type userTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * The data used to update userTags.
     */
    data: XOR<userTagUpdateManyMutationInput, userTagUncheckedUpdateManyInput>
    /**
     * Filter which userTags to update
     */
    where?: userTagWhereInput
    /**
     * Limit how many userTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * userTag upsert
   */
  export type userTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * The filter to search for the userTag to update in case it exists.
     */
    where: userTagWhereUniqueInput
    /**
     * In case the userTag found by the `where` argument doesn't exist, create a new userTag with this data.
     */
    create: XOR<userTagCreateInput, userTagUncheckedCreateInput>
    /**
     * In case the userTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userTagUpdateInput, userTagUncheckedUpdateInput>
  }

  /**
   * userTag delete
   */
  export type userTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
    /**
     * Filter which userTag to delete.
     */
    where: userTagWhereUniqueInput
  }

  /**
   * userTag deleteMany
   */
  export type userTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userTags to delete
     */
    where?: userTagWhereInput
    /**
     * Limit how many userTags to delete.
     */
    limit?: number
  }

  /**
   * userTag without action
   */
  export type userTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTag
     */
    select?: userTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTag
     */
    omit?: userTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTagInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    messageId: string | null
    projectId: string | null
    login: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    messageId: string | null
    projectId: string | null
    login: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    messageId: number
    projectId: number
    login: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    messageId?: true
    projectId?: true
    login?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    messageId?: true
    projectId?: true
    login?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    messageId?: true
    projectId?: true
    login?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    messageId: string
    projectId: string
    login: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    projectId?: boolean
    login?: boolean
    content?: boolean
    createdAt?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    projectId?: boolean
    login?: boolean
    content?: boolean
    createdAt?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    projectId?: boolean
    login?: boolean
    content?: boolean
    createdAt?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    messageId?: boolean
    projectId?: boolean
    login?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"messageId" | "projectId" | "login" | "content" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      messageId: string
      projectId: string
      login: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `messageId`
     * const chatMessageWithMessageIdOnly = await prisma.chatMessage.findMany({ select: { messageId: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `messageId`
     * const chatMessageWithMessageIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { messageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `messageId`
     * const chatMessageWithMessageIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { messageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly messageId: FieldRef<"ChatMessage", 'String'>
    readonly projectId: FieldRef<"ChatMessage", 'String'>
    readonly login: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApplicationScalarFieldEnum: {
    appid: 'appid',
    uid: 'uid',
    projectid: 'projectid',
    coverletter: 'coverletter'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    donationid: 'donationid',
    uid: 'uid',
    projectid: 'projectid',
    created_at: 'created_at'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    projectid: 'projectid',
    name: 'name',
    goalid: 'goalid',
    description: 'description'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const Goose_db_versionScalarFieldEnum: {
    id: 'id',
    version_id: 'version_id',
    is_applied: 'is_applied',
    tstamp: 'tstamp'
  };

  export type Goose_db_versionScalarFieldEnum = (typeof Goose_db_versionScalarFieldEnum)[keyof typeof Goose_db_versionScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    licenseid: 'licenseid',
    name: 'name',
    description: 'description',
    permission: 'permission',
    condition: 'condition',
    limitation: 'limitation'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    projectid: 'projectid',
    title: 'title',
    description: 'description',
    repoid: 'repoid',
    status: 'status',
    created_at: 'created_at',
    licenseid: 'licenseid'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectTagScalarFieldEnum: {
    projectid: 'projectid',
    tagid: 'tagid'
  };

  export type ProjectTagScalarFieldEnum = (typeof ProjectTagScalarFieldEnum)[keyof typeof ProjectTagScalarFieldEnum]


  export const RepoScalarFieldEnum: {
    repoid: 'repoid',
    uid: 'uid',
    name: 'name',
    url: 'url',
    description: 'description',
    star: 'star',
    fork: 'fork',
    last_updated: 'last_updated',
    language: 'language',
    updated_at: 'updated_at'
  };

  export type RepoScalarFieldEnum = (typeof RepoScalarFieldEnum)[keyof typeof RepoScalarFieldEnum]


  export const RoadmapScalarFieldEnum: {
    projectid: 'projectid',
    roadmap: 'roadmap',
    description: 'description',
    status: 'status'
  };

  export type RoadmapScalarFieldEnum = (typeof RoadmapScalarFieldEnum)[keyof typeof RoadmapScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tagid: 'tagid',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TeammemberScalarFieldEnum: {
    projectid: 'projectid',
    uid: 'uid',
    role: 'role'
  };

  export type TeammemberScalarFieldEnum = (typeof TeammemberScalarFieldEnum)[keyof typeof TeammemberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    login: 'login',
    name: 'name',
    avatar: 'avatar',
    location: 'location',
    token: 'token',
    bio: 'bio',
    followers: 'followers',
    following: 'following',
    public_repos: 'public_repos',
    total_private_repos: 'total_private_repos',
    html_url: 'html_url',
    last_updated: 'last_updated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTagScalarFieldEnum: {
    uid: 'uid',
    tagid: 'tagid'
  };

  export type UserTagScalarFieldEnum = (typeof UserTagScalarFieldEnum)[keyof typeof UserTagScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    messageId: 'messageId',
    projectId: 'projectId',
    login: 'login',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type applicationWhereInput = {
    AND?: applicationWhereInput | applicationWhereInput[]
    OR?: applicationWhereInput[]
    NOT?: applicationWhereInput | applicationWhereInput[]
    appid?: UuidFilter<"application"> | string
    uid?: UuidFilter<"application"> | string
    projectid?: UuidFilter<"application"> | string
    coverletter?: StringNullableFilter<"application"> | string | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type applicationOrderByWithRelationInput = {
    appid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    coverletter?: SortOrderInput | SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type applicationWhereUniqueInput = Prisma.AtLeast<{
    appid?: string
    AND?: applicationWhereInput | applicationWhereInput[]
    OR?: applicationWhereInput[]
    NOT?: applicationWhereInput | applicationWhereInput[]
    uid?: UuidFilter<"application"> | string
    projectid?: UuidFilter<"application"> | string
    coverletter?: StringNullableFilter<"application"> | string | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "appid">

  export type applicationOrderByWithAggregationInput = {
    appid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    coverletter?: SortOrderInput | SortOrder
    _count?: applicationCountOrderByAggregateInput
    _max?: applicationMaxOrderByAggregateInput
    _min?: applicationMinOrderByAggregateInput
  }

  export type applicationScalarWhereWithAggregatesInput = {
    AND?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[]
    OR?: applicationScalarWhereWithAggregatesInput[]
    NOT?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[]
    appid?: UuidWithAggregatesFilter<"application"> | string
    uid?: UuidWithAggregatesFilter<"application"> | string
    projectid?: UuidWithAggregatesFilter<"application"> | string
    coverletter?: StringNullableWithAggregatesFilter<"application"> | string | null
  }

  export type donationWhereInput = {
    AND?: donationWhereInput | donationWhereInput[]
    OR?: donationWhereInput[]
    NOT?: donationWhereInput | donationWhereInput[]
    donationid?: UuidFilter<"donation"> | string
    uid?: UuidFilter<"donation"> | string
    projectid?: UuidFilter<"donation"> | string
    created_at?: DateTimeNullableFilter<"donation"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type donationOrderByWithRelationInput = {
    donationid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    created_at?: SortOrderInput | SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type donationWhereUniqueInput = Prisma.AtLeast<{
    donationid?: string
    AND?: donationWhereInput | donationWhereInput[]
    OR?: donationWhereInput[]
    NOT?: donationWhereInput | donationWhereInput[]
    uid?: UuidFilter<"donation"> | string
    projectid?: UuidFilter<"donation"> | string
    created_at?: DateTimeNullableFilter<"donation"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "donationid">

  export type donationOrderByWithAggregationInput = {
    donationid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: donationCountOrderByAggregateInput
    _max?: donationMaxOrderByAggregateInput
    _min?: donationMinOrderByAggregateInput
  }

  export type donationScalarWhereWithAggregatesInput = {
    AND?: donationScalarWhereWithAggregatesInput | donationScalarWhereWithAggregatesInput[]
    OR?: donationScalarWhereWithAggregatesInput[]
    NOT?: donationScalarWhereWithAggregatesInput | donationScalarWhereWithAggregatesInput[]
    donationid?: UuidWithAggregatesFilter<"donation"> | string
    uid?: UuidWithAggregatesFilter<"donation"> | string
    projectid?: UuidWithAggregatesFilter<"donation"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"donation"> | Date | string | null
  }

  export type goalWhereInput = {
    AND?: goalWhereInput | goalWhereInput[]
    OR?: goalWhereInput[]
    NOT?: goalWhereInput | goalWhereInput[]
    projectid?: UuidNullableFilter<"goal"> | string | null
    name?: StringFilter<"goal"> | string
    goalid?: UuidFilter<"goal"> | string
    description?: StringNullableFilter<"goal"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, projectWhereInput> | null
  }

  export type goalOrderByWithRelationInput = {
    projectid?: SortOrderInput | SortOrder
    name?: SortOrder
    goalid?: SortOrder
    description?: SortOrderInput | SortOrder
    project?: projectOrderByWithRelationInput
  }

  export type goalWhereUniqueInput = Prisma.AtLeast<{
    goalid?: string
    AND?: goalWhereInput | goalWhereInput[]
    OR?: goalWhereInput[]
    NOT?: goalWhereInput | goalWhereInput[]
    projectid?: UuidNullableFilter<"goal"> | string | null
    name?: StringFilter<"goal"> | string
    description?: StringNullableFilter<"goal"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, projectWhereInput> | null
  }, "goalid">

  export type goalOrderByWithAggregationInput = {
    projectid?: SortOrderInput | SortOrder
    name?: SortOrder
    goalid?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: goalCountOrderByAggregateInput
    _max?: goalMaxOrderByAggregateInput
    _min?: goalMinOrderByAggregateInput
  }

  export type goalScalarWhereWithAggregatesInput = {
    AND?: goalScalarWhereWithAggregatesInput | goalScalarWhereWithAggregatesInput[]
    OR?: goalScalarWhereWithAggregatesInput[]
    NOT?: goalScalarWhereWithAggregatesInput | goalScalarWhereWithAggregatesInput[]
    projectid?: UuidNullableWithAggregatesFilter<"goal"> | string | null
    name?: StringWithAggregatesFilter<"goal"> | string
    goalid?: UuidWithAggregatesFilter<"goal"> | string
    description?: StringNullableWithAggregatesFilter<"goal"> | string | null
  }

  export type goose_db_versionWhereInput = {
    AND?: goose_db_versionWhereInput | goose_db_versionWhereInput[]
    OR?: goose_db_versionWhereInput[]
    NOT?: goose_db_versionWhereInput | goose_db_versionWhereInput[]
    id?: IntFilter<"goose_db_version"> | number
    version_id?: BigIntFilter<"goose_db_version"> | bigint | number
    is_applied?: BoolFilter<"goose_db_version"> | boolean
    tstamp?: DateTimeFilter<"goose_db_version"> | Date | string
  }

  export type goose_db_versionOrderByWithRelationInput = {
    id?: SortOrder
    version_id?: SortOrder
    is_applied?: SortOrder
    tstamp?: SortOrder
  }

  export type goose_db_versionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: goose_db_versionWhereInput | goose_db_versionWhereInput[]
    OR?: goose_db_versionWhereInput[]
    NOT?: goose_db_versionWhereInput | goose_db_versionWhereInput[]
    version_id?: BigIntFilter<"goose_db_version"> | bigint | number
    is_applied?: BoolFilter<"goose_db_version"> | boolean
    tstamp?: DateTimeFilter<"goose_db_version"> | Date | string
  }, "id">

  export type goose_db_versionOrderByWithAggregationInput = {
    id?: SortOrder
    version_id?: SortOrder
    is_applied?: SortOrder
    tstamp?: SortOrder
    _count?: goose_db_versionCountOrderByAggregateInput
    _avg?: goose_db_versionAvgOrderByAggregateInput
    _max?: goose_db_versionMaxOrderByAggregateInput
    _min?: goose_db_versionMinOrderByAggregateInput
    _sum?: goose_db_versionSumOrderByAggregateInput
  }

  export type goose_db_versionScalarWhereWithAggregatesInput = {
    AND?: goose_db_versionScalarWhereWithAggregatesInput | goose_db_versionScalarWhereWithAggregatesInput[]
    OR?: goose_db_versionScalarWhereWithAggregatesInput[]
    NOT?: goose_db_versionScalarWhereWithAggregatesInput | goose_db_versionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"goose_db_version"> | number
    version_id?: BigIntWithAggregatesFilter<"goose_db_version"> | bigint | number
    is_applied?: BoolWithAggregatesFilter<"goose_db_version"> | boolean
    tstamp?: DateTimeWithAggregatesFilter<"goose_db_version"> | Date | string
  }

  export type licenseWhereInput = {
    AND?: licenseWhereInput | licenseWhereInput[]
    OR?: licenseWhereInput[]
    NOT?: licenseWhereInput | licenseWhereInput[]
    licenseid?: UuidFilter<"license"> | string
    name?: StringFilter<"license"> | string
    description?: StringFilter<"license"> | string
    permission?: StringNullableFilter<"license"> | string | null
    condition?: StringNullableFilter<"license"> | string | null
    limitation?: StringFilter<"license"> | string
    project?: ProjectListRelationFilter
  }

  export type licenseOrderByWithRelationInput = {
    licenseid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permission?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    limitation?: SortOrder
    project?: projectOrderByRelationAggregateInput
  }

  export type licenseWhereUniqueInput = Prisma.AtLeast<{
    licenseid?: string
    name?: string
    AND?: licenseWhereInput | licenseWhereInput[]
    OR?: licenseWhereInput[]
    NOT?: licenseWhereInput | licenseWhereInput[]
    description?: StringFilter<"license"> | string
    permission?: StringNullableFilter<"license"> | string | null
    condition?: StringNullableFilter<"license"> | string | null
    limitation?: StringFilter<"license"> | string
    project?: ProjectListRelationFilter
  }, "licenseid" | "name">

  export type licenseOrderByWithAggregationInput = {
    licenseid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permission?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    limitation?: SortOrder
    _count?: licenseCountOrderByAggregateInput
    _max?: licenseMaxOrderByAggregateInput
    _min?: licenseMinOrderByAggregateInput
  }

  export type licenseScalarWhereWithAggregatesInput = {
    AND?: licenseScalarWhereWithAggregatesInput | licenseScalarWhereWithAggregatesInput[]
    OR?: licenseScalarWhereWithAggregatesInput[]
    NOT?: licenseScalarWhereWithAggregatesInput | licenseScalarWhereWithAggregatesInput[]
    licenseid?: UuidWithAggregatesFilter<"license"> | string
    name?: StringWithAggregatesFilter<"license"> | string
    description?: StringWithAggregatesFilter<"license"> | string
    permission?: StringNullableWithAggregatesFilter<"license"> | string | null
    condition?: StringNullableWithAggregatesFilter<"license"> | string | null
    limitation?: StringWithAggregatesFilter<"license"> | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    projectid?: UuidFilter<"project"> | string
    title?: StringFilter<"project"> | string
    description?: StringFilter<"project"> | string
    repoid?: UuidNullableFilter<"project"> | string | null
    status?: StringNullableFilter<"project"> | string | null
    created_at?: DateTimeNullableFilter<"project"> | Date | string | null
    licenseid?: UuidNullableFilter<"project"> | string | null
    ChatMessage?: ChatMessageListRelationFilter
    application?: ApplicationListRelationFilter
    donation?: DonationListRelationFilter
    goal?: GoalListRelationFilter
    license?: XOR<LicenseNullableScalarRelationFilter, licenseWhereInput> | null
    repo?: XOR<RepoNullableScalarRelationFilter, repoWhereInput> | null
    projectTag?: ProjectTagListRelationFilter
    roadmap?: RoadmapListRelationFilter
    teammember?: TeammemberListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    projectid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    repoid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    licenseid?: SortOrderInput | SortOrder
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
    application?: applicationOrderByRelationAggregateInput
    donation?: donationOrderByRelationAggregateInput
    goal?: goalOrderByRelationAggregateInput
    license?: licenseOrderByWithRelationInput
    repo?: repoOrderByWithRelationInput
    projectTag?: projectTagOrderByRelationAggregateInput
    roadmap?: roadmapOrderByRelationAggregateInput
    teammember?: teammemberOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    projectid?: string
    title?: string
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    description?: StringFilter<"project"> | string
    repoid?: UuidNullableFilter<"project"> | string | null
    status?: StringNullableFilter<"project"> | string | null
    created_at?: DateTimeNullableFilter<"project"> | Date | string | null
    licenseid?: UuidNullableFilter<"project"> | string | null
    ChatMessage?: ChatMessageListRelationFilter
    application?: ApplicationListRelationFilter
    donation?: DonationListRelationFilter
    goal?: GoalListRelationFilter
    license?: XOR<LicenseNullableScalarRelationFilter, licenseWhereInput> | null
    repo?: XOR<RepoNullableScalarRelationFilter, repoWhereInput> | null
    projectTag?: ProjectTagListRelationFilter
    roadmap?: RoadmapListRelationFilter
    teammember?: TeammemberListRelationFilter
  }, "projectid" | "title">

  export type projectOrderByWithAggregationInput = {
    projectid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    repoid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    licenseid?: SortOrderInput | SortOrder
    _count?: projectCountOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    projectid?: UuidWithAggregatesFilter<"project"> | string
    title?: StringWithAggregatesFilter<"project"> | string
    description?: StringWithAggregatesFilter<"project"> | string
    repoid?: UuidNullableWithAggregatesFilter<"project"> | string | null
    status?: StringNullableWithAggregatesFilter<"project"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"project"> | Date | string | null
    licenseid?: UuidNullableWithAggregatesFilter<"project"> | string | null
  }

  export type projectTagWhereInput = {
    AND?: projectTagWhereInput | projectTagWhereInput[]
    OR?: projectTagWhereInput[]
    NOT?: projectTagWhereInput | projectTagWhereInput[]
    projectid?: UuidFilter<"projectTag"> | string
    tagid?: UuidFilter<"projectTag"> | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
  }

  export type projectTagOrderByWithRelationInput = {
    projectid?: SortOrder
    tagid?: SortOrder
    project?: projectOrderByWithRelationInput
    tag?: tagOrderByWithRelationInput
  }

  export type projectTagWhereUniqueInput = Prisma.AtLeast<{
    projectid_tagid?: projectTagProjectidTagidCompoundUniqueInput
    AND?: projectTagWhereInput | projectTagWhereInput[]
    OR?: projectTagWhereInput[]
    NOT?: projectTagWhereInput | projectTagWhereInput[]
    projectid?: UuidFilter<"projectTag"> | string
    tagid?: UuidFilter<"projectTag"> | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
  }, "projectid_tagid">

  export type projectTagOrderByWithAggregationInput = {
    projectid?: SortOrder
    tagid?: SortOrder
    _count?: projectTagCountOrderByAggregateInput
    _max?: projectTagMaxOrderByAggregateInput
    _min?: projectTagMinOrderByAggregateInput
  }

  export type projectTagScalarWhereWithAggregatesInput = {
    AND?: projectTagScalarWhereWithAggregatesInput | projectTagScalarWhereWithAggregatesInput[]
    OR?: projectTagScalarWhereWithAggregatesInput[]
    NOT?: projectTagScalarWhereWithAggregatesInput | projectTagScalarWhereWithAggregatesInput[]
    projectid?: UuidWithAggregatesFilter<"projectTag"> | string
    tagid?: UuidWithAggregatesFilter<"projectTag"> | string
  }

  export type repoWhereInput = {
    AND?: repoWhereInput | repoWhereInput[]
    OR?: repoWhereInput[]
    NOT?: repoWhereInput | repoWhereInput[]
    repoid?: UuidFilter<"repo"> | string
    uid?: UuidNullableFilter<"repo"> | string | null
    name?: StringFilter<"repo"> | string
    url?: StringFilter<"repo"> | string
    description?: StringNullableFilter<"repo"> | string | null
    star?: IntNullableFilter<"repo"> | number | null
    fork?: IntNullableFilter<"repo"> | number | null
    last_updated?: DateTimeNullableFilter<"repo"> | Date | string | null
    language?: StringNullableFilter<"repo"> | string | null
    updated_at?: DateTimeNullableFilter<"repo"> | Date | string | null
    project?: ProjectListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type repoOrderByWithRelationInput = {
    repoid?: SortOrder
    uid?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    fork?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    project?: projectOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type repoWhereUniqueInput = Prisma.AtLeast<{
    repoid?: string
    uid_name?: repoUidNameCompoundUniqueInput
    AND?: repoWhereInput | repoWhereInput[]
    OR?: repoWhereInput[]
    NOT?: repoWhereInput | repoWhereInput[]
    uid?: UuidNullableFilter<"repo"> | string | null
    name?: StringFilter<"repo"> | string
    url?: StringFilter<"repo"> | string
    description?: StringNullableFilter<"repo"> | string | null
    star?: IntNullableFilter<"repo"> | number | null
    fork?: IntNullableFilter<"repo"> | number | null
    last_updated?: DateTimeNullableFilter<"repo"> | Date | string | null
    language?: StringNullableFilter<"repo"> | string | null
    updated_at?: DateTimeNullableFilter<"repo"> | Date | string | null
    project?: ProjectListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "repoid" | "uid_name">

  export type repoOrderByWithAggregationInput = {
    repoid?: SortOrder
    uid?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    fork?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: repoCountOrderByAggregateInput
    _avg?: repoAvgOrderByAggregateInput
    _max?: repoMaxOrderByAggregateInput
    _min?: repoMinOrderByAggregateInput
    _sum?: repoSumOrderByAggregateInput
  }

  export type repoScalarWhereWithAggregatesInput = {
    AND?: repoScalarWhereWithAggregatesInput | repoScalarWhereWithAggregatesInput[]
    OR?: repoScalarWhereWithAggregatesInput[]
    NOT?: repoScalarWhereWithAggregatesInput | repoScalarWhereWithAggregatesInput[]
    repoid?: UuidWithAggregatesFilter<"repo"> | string
    uid?: UuidNullableWithAggregatesFilter<"repo"> | string | null
    name?: StringWithAggregatesFilter<"repo"> | string
    url?: StringWithAggregatesFilter<"repo"> | string
    description?: StringNullableWithAggregatesFilter<"repo"> | string | null
    star?: IntNullableWithAggregatesFilter<"repo"> | number | null
    fork?: IntNullableWithAggregatesFilter<"repo"> | number | null
    last_updated?: DateTimeNullableWithAggregatesFilter<"repo"> | Date | string | null
    language?: StringNullableWithAggregatesFilter<"repo"> | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"repo"> | Date | string | null
  }

  export type roadmapWhereInput = {
    AND?: roadmapWhereInput | roadmapWhereInput[]
    OR?: roadmapWhereInput[]
    NOT?: roadmapWhereInput | roadmapWhereInput[]
    projectid?: UuidFilter<"roadmap"> | string
    roadmap?: StringFilter<"roadmap"> | string
    description?: StringFilter<"roadmap"> | string
    status?: StringFilter<"roadmap"> | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type roadmapOrderByWithRelationInput = {
    projectid?: SortOrder
    roadmap?: SortOrder
    description?: SortOrder
    status?: SortOrder
    project?: projectOrderByWithRelationInput
  }

  export type roadmapWhereUniqueInput = Prisma.AtLeast<{
    projectid_roadmap?: roadmapProjectidRoadmapCompoundUniqueInput
    AND?: roadmapWhereInput | roadmapWhereInput[]
    OR?: roadmapWhereInput[]
    NOT?: roadmapWhereInput | roadmapWhereInput[]
    projectid?: UuidFilter<"roadmap"> | string
    roadmap?: StringFilter<"roadmap"> | string
    description?: StringFilter<"roadmap"> | string
    status?: StringFilter<"roadmap"> | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "projectid_roadmap">

  export type roadmapOrderByWithAggregationInput = {
    projectid?: SortOrder
    roadmap?: SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: roadmapCountOrderByAggregateInput
    _max?: roadmapMaxOrderByAggregateInput
    _min?: roadmapMinOrderByAggregateInput
  }

  export type roadmapScalarWhereWithAggregatesInput = {
    AND?: roadmapScalarWhereWithAggregatesInput | roadmapScalarWhereWithAggregatesInput[]
    OR?: roadmapScalarWhereWithAggregatesInput[]
    NOT?: roadmapScalarWhereWithAggregatesInput | roadmapScalarWhereWithAggregatesInput[]
    projectid?: UuidWithAggregatesFilter<"roadmap"> | string
    roadmap?: StringWithAggregatesFilter<"roadmap"> | string
    description?: StringWithAggregatesFilter<"roadmap"> | string
    status?: StringWithAggregatesFilter<"roadmap"> | string
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    tagid?: UuidFilter<"tag"> | string
    name?: StringFilter<"tag"> | string
    projectTag?: ProjectTagListRelationFilter
    userTag?: UserTagListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    tagid?: SortOrder
    name?: SortOrder
    projectTag?: projectTagOrderByRelationAggregateInput
    userTag?: userTagOrderByRelationAggregateInput
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    tagid?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    name?: StringFilter<"tag"> | string
    projectTag?: ProjectTagListRelationFilter
    userTag?: UserTagListRelationFilter
  }, "tagid">

  export type tagOrderByWithAggregationInput = {
    tagid?: SortOrder
    name?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    tagid?: UuidWithAggregatesFilter<"tag"> | string
    name?: StringWithAggregatesFilter<"tag"> | string
  }

  export type teammemberWhereInput = {
    AND?: teammemberWhereInput | teammemberWhereInput[]
    OR?: teammemberWhereInput[]
    NOT?: teammemberWhereInput | teammemberWhereInput[]
    projectid?: UuidFilter<"teammember"> | string
    uid?: UuidFilter<"teammember"> | string
    role?: StringFilter<"teammember"> | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type teammemberOrderByWithRelationInput = {
    projectid?: SortOrder
    uid?: SortOrder
    role?: SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type teammemberWhereUniqueInput = Prisma.AtLeast<{
    projectid_uid?: teammemberProjectidUidCompoundUniqueInput
    AND?: teammemberWhereInput | teammemberWhereInput[]
    OR?: teammemberWhereInput[]
    NOT?: teammemberWhereInput | teammemberWhereInput[]
    projectid?: UuidFilter<"teammember"> | string
    uid?: UuidFilter<"teammember"> | string
    role?: StringFilter<"teammember"> | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "projectid_uid">

  export type teammemberOrderByWithAggregationInput = {
    projectid?: SortOrder
    uid?: SortOrder
    role?: SortOrder
    _count?: teammemberCountOrderByAggregateInput
    _max?: teammemberMaxOrderByAggregateInput
    _min?: teammemberMinOrderByAggregateInput
  }

  export type teammemberScalarWhereWithAggregatesInput = {
    AND?: teammemberScalarWhereWithAggregatesInput | teammemberScalarWhereWithAggregatesInput[]
    OR?: teammemberScalarWhereWithAggregatesInput[]
    NOT?: teammemberScalarWhereWithAggregatesInput | teammemberScalarWhereWithAggregatesInput[]
    projectid?: UuidWithAggregatesFilter<"teammember"> | string
    uid?: UuidWithAggregatesFilter<"teammember"> | string
    role?: StringWithAggregatesFilter<"teammember"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    uid?: UuidFilter<"user"> | string
    login?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    token?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    followers?: IntNullableFilter<"user"> | number | null
    following?: IntNullableFilter<"user"> | number | null
    public_repos?: IntNullableFilter<"user"> | number | null
    total_private_repos?: IntNullableFilter<"user"> | number | null
    html_url?: StringNullableFilter<"user"> | string | null
    last_updated?: DateTimeNullableFilter<"user"> | Date | string | null
    ChatMessage?: ChatMessageListRelationFilter
    application?: ApplicationListRelationFilter
    donation?: DonationListRelationFilter
    repo?: RepoListRelationFilter
    teammember?: TeammemberListRelationFilter
    userTag?: UserTagListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    uid?: SortOrder
    login?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    token?: SortOrder
    bio?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    public_repos?: SortOrderInput | SortOrder
    total_private_repos?: SortOrderInput | SortOrder
    html_url?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
    application?: applicationOrderByRelationAggregateInput
    donation?: donationOrderByRelationAggregateInput
    repo?: repoOrderByRelationAggregateInput
    teammember?: teammemberOrderByRelationAggregateInput
    userTag?: userTagOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    login?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    token?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    followers?: IntNullableFilter<"user"> | number | null
    following?: IntNullableFilter<"user"> | number | null
    public_repos?: IntNullableFilter<"user"> | number | null
    total_private_repos?: IntNullableFilter<"user"> | number | null
    html_url?: StringNullableFilter<"user"> | string | null
    last_updated?: DateTimeNullableFilter<"user"> | Date | string | null
    ChatMessage?: ChatMessageListRelationFilter
    application?: ApplicationListRelationFilter
    donation?: DonationListRelationFilter
    repo?: RepoListRelationFilter
    teammember?: TeammemberListRelationFilter
    userTag?: UserTagListRelationFilter
  }, "uid" | "login">

  export type userOrderByWithAggregationInput = {
    uid?: SortOrder
    login?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    token?: SortOrder
    bio?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    public_repos?: SortOrderInput | SortOrder
    total_private_repos?: SortOrderInput | SortOrder
    html_url?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    uid?: UuidWithAggregatesFilter<"user"> | string
    login?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    location?: StringNullableWithAggregatesFilter<"user"> | string | null
    token?: StringWithAggregatesFilter<"user"> | string
    bio?: StringNullableWithAggregatesFilter<"user"> | string | null
    followers?: IntNullableWithAggregatesFilter<"user"> | number | null
    following?: IntNullableWithAggregatesFilter<"user"> | number | null
    public_repos?: IntNullableWithAggregatesFilter<"user"> | number | null
    total_private_repos?: IntNullableWithAggregatesFilter<"user"> | number | null
    html_url?: StringNullableWithAggregatesFilter<"user"> | string | null
    last_updated?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type userTagWhereInput = {
    AND?: userTagWhereInput | userTagWhereInput[]
    OR?: userTagWhereInput[]
    NOT?: userTagWhereInput | userTagWhereInput[]
    uid?: UuidFilter<"userTag"> | string
    tagid?: UuidFilter<"userTag"> | string
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type userTagOrderByWithRelationInput = {
    uid?: SortOrder
    tagid?: SortOrder
    tag?: tagOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type userTagWhereUniqueInput = Prisma.AtLeast<{
    uid_tagid?: userTagUidTagidCompoundUniqueInput
    AND?: userTagWhereInput | userTagWhereInput[]
    OR?: userTagWhereInput[]
    NOT?: userTagWhereInput | userTagWhereInput[]
    uid?: UuidFilter<"userTag"> | string
    tagid?: UuidFilter<"userTag"> | string
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "uid_tagid">

  export type userTagOrderByWithAggregationInput = {
    uid?: SortOrder
    tagid?: SortOrder
    _count?: userTagCountOrderByAggregateInput
    _max?: userTagMaxOrderByAggregateInput
    _min?: userTagMinOrderByAggregateInput
  }

  export type userTagScalarWhereWithAggregatesInput = {
    AND?: userTagScalarWhereWithAggregatesInput | userTagScalarWhereWithAggregatesInput[]
    OR?: userTagScalarWhereWithAggregatesInput[]
    NOT?: userTagScalarWhereWithAggregatesInput | userTagScalarWhereWithAggregatesInput[]
    uid?: UuidWithAggregatesFilter<"userTag"> | string
    tagid?: UuidWithAggregatesFilter<"userTag"> | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    messageId?: UuidFilter<"ChatMessage"> | string
    projectId?: UuidFilter<"ChatMessage"> | string
    login?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    messageId?: SortOrder
    projectId?: SortOrder
    login?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    messageId?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    projectId?: UuidFilter<"ChatMessage"> | string
    login?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "messageId">

  export type ChatMessageOrderByWithAggregationInput = {
    messageId?: SortOrder
    projectId?: SortOrder
    login?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    messageId?: UuidWithAggregatesFilter<"ChatMessage"> | string
    projectId?: UuidWithAggregatesFilter<"ChatMessage"> | string
    login?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type applicationCreateInput = {
    appid?: string
    coverletter?: string | null
    project: projectCreateNestedOneWithoutApplicationInput
    user: userCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateInput = {
    appid?: string
    uid: string
    projectid: string
    coverletter?: string | null
  }

  export type applicationUpdateInput = {
    appid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUpdateOneRequiredWithoutApplicationNestedInput
    user?: userUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateInput = {
    appid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type applicationCreateManyInput = {
    appid?: string
    uid: string
    projectid: string
    coverletter?: string | null
  }

  export type applicationUpdateManyMutationInput = {
    appid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type applicationUncheckedUpdateManyInput = {
    appid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationCreateInput = {
    donationid?: string
    created_at?: Date | string | null
    project: projectCreateNestedOneWithoutDonationInput
    user: userCreateNestedOneWithoutDonationInput
  }

  export type donationUncheckedCreateInput = {
    donationid?: string
    uid: string
    projectid: string
    created_at?: Date | string | null
  }

  export type donationUpdateInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: projectUpdateOneRequiredWithoutDonationNestedInput
    user?: userUpdateOneRequiredWithoutDonationNestedInput
  }

  export type donationUncheckedUpdateInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type donationCreateManyInput = {
    donationid?: string
    uid: string
    projectid: string
    created_at?: Date | string | null
  }

  export type donationUpdateManyMutationInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type donationUncheckedUpdateManyInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type goalCreateInput = {
    name: string
    goalid?: string
    description?: string | null
    project?: projectCreateNestedOneWithoutGoalInput
  }

  export type goalUncheckedCreateInput = {
    projectid?: string | null
    name: string
    goalid?: string
    description?: string | null
  }

  export type goalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUpdateOneWithoutGoalNestedInput
  }

  export type goalUncheckedUpdateInput = {
    projectid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type goalCreateManyInput = {
    projectid?: string | null
    name: string
    goalid?: string
    description?: string | null
  }

  export type goalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type goalUncheckedUpdateManyInput = {
    projectid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type goose_db_versionCreateInput = {
    version_id: bigint | number
    is_applied: boolean
    tstamp?: Date | string
  }

  export type goose_db_versionUncheckedCreateInput = {
    id?: number
    version_id: bigint | number
    is_applied: boolean
    tstamp?: Date | string
  }

  export type goose_db_versionUpdateInput = {
    version_id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_applied?: BoolFieldUpdateOperationsInput | boolean
    tstamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goose_db_versionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version_id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_applied?: BoolFieldUpdateOperationsInput | boolean
    tstamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goose_db_versionCreateManyInput = {
    id?: number
    version_id: bigint | number
    is_applied: boolean
    tstamp?: Date | string
  }

  export type goose_db_versionUpdateManyMutationInput = {
    version_id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_applied?: BoolFieldUpdateOperationsInput | boolean
    tstamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goose_db_versionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version_id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_applied?: BoolFieldUpdateOperationsInput | boolean
    tstamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type licenseCreateInput = {
    licenseid?: string
    name: string
    description: string
    permission?: string | null
    condition?: string | null
    limitation: string
    project?: projectCreateNestedManyWithoutLicenseInput
  }

  export type licenseUncheckedCreateInput = {
    licenseid?: string
    name: string
    description: string
    permission?: string | null
    condition?: string | null
    limitation: string
    project?: projectUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type licenseUpdateInput = {
    licenseid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    limitation?: StringFieldUpdateOperationsInput | string
    project?: projectUpdateManyWithoutLicenseNestedInput
  }

  export type licenseUncheckedUpdateInput = {
    licenseid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    limitation?: StringFieldUpdateOperationsInput | string
    project?: projectUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type licenseCreateManyInput = {
    licenseid?: string
    name: string
    description: string
    permission?: string | null
    condition?: string | null
    limitation: string
  }

  export type licenseUpdateManyMutationInput = {
    licenseid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    limitation?: StringFieldUpdateOperationsInput | string
  }

  export type licenseUncheckedUpdateManyInput = {
    licenseid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    limitation?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
  }

  export type projectUpdateManyMutationInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectUncheckedUpdateManyInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectTagCreateInput = {
    project: projectCreateNestedOneWithoutProjectTagInput
    tag: tagCreateNestedOneWithoutProjectTagInput
  }

  export type projectTagUncheckedCreateInput = {
    projectid: string
    tagid: string
  }

  export type projectTagUpdateInput = {
    project?: projectUpdateOneRequiredWithoutProjectTagNestedInput
    tag?: tagUpdateOneRequiredWithoutProjectTagNestedInput
  }

  export type projectTagUncheckedUpdateInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type projectTagCreateManyInput = {
    projectid: string
    tagid: string
  }

  export type projectTagUpdateManyMutationInput = {

  }

  export type projectTagUncheckedUpdateManyInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type repoCreateInput = {
    repoid?: string
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
    project?: projectCreateNestedManyWithoutRepoInput
    user?: userCreateNestedOneWithoutRepoInput
  }

  export type repoUncheckedCreateInput = {
    repoid?: string
    uid?: string | null
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
    project?: projectUncheckedCreateNestedManyWithoutRepoInput
  }

  export type repoUpdateInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: projectUpdateManyWithoutRepoNestedInput
    user?: userUpdateOneWithoutRepoNestedInput
  }

  export type repoUncheckedUpdateInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: projectUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type repoCreateManyInput = {
    repoid?: string
    uid?: string | null
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
  }

  export type repoUpdateManyMutationInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type repoUncheckedUpdateManyInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roadmapCreateInput = {
    roadmap: string
    description: string
    status: string
    project: projectCreateNestedOneWithoutRoadmapInput
  }

  export type roadmapUncheckedCreateInput = {
    projectid: string
    roadmap: string
    description: string
    status: string
  }

  export type roadmapUpdateInput = {
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    project?: projectUpdateOneRequiredWithoutRoadmapNestedInput
  }

  export type roadmapUncheckedUpdateInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type roadmapCreateManyInput = {
    projectid: string
    roadmap: string
    description: string
    status: string
  }

  export type roadmapUpdateManyMutationInput = {
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type roadmapUncheckedUpdateManyInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type tagCreateInput = {
    tagid?: string
    name: string
    projectTag?: projectTagCreateNestedManyWithoutTagInput
    userTag?: userTagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateInput = {
    tagid?: string
    name: string
    projectTag?: projectTagUncheckedCreateNestedManyWithoutTagInput
    userTag?: userTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagUpdateInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectTag?: projectTagUpdateManyWithoutTagNestedInput
    userTag?: userTagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectTag?: projectTagUncheckedUpdateManyWithoutTagNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagCreateManyInput = {
    tagid?: string
    name: string
  }

  export type tagUpdateManyMutationInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateManyInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberCreateInput = {
    role: string
    project: projectCreateNestedOneWithoutTeammemberInput
    user: userCreateNestedOneWithoutTeammemberInput
  }

  export type teammemberUncheckedCreateInput = {
    projectid: string
    uid: string
    role: string
  }

  export type teammemberUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    project?: projectUpdateOneRequiredWithoutTeammemberNestedInput
    user?: userUpdateOneRequiredWithoutTeammemberNestedInput
  }

  export type teammemberUncheckedUpdateInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberCreateManyInput = {
    projectid: string
    uid: string
    role: string
  }

  export type teammemberUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUncheckedUpdateManyInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
    application?: applicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    repo?: repoCreateNestedManyWithoutUserInput
    teammember?: teammemberCreateNestedManyWithoutUserInput
    userTag?: userTagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    repo?: repoUncheckedCreateNestedManyWithoutUserInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutUserInput
    userTag?: userTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
    application?: applicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    repo?: repoUpdateManyWithoutUserNestedInput
    teammember?: teammemberUpdateManyWithoutUserNestedInput
    userTag?: userTagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    repo?: repoUncheckedUpdateManyWithoutUserNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutUserNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userTagCreateInput = {
    tag: tagCreateNestedOneWithoutUserTagInput
    user: userCreateNestedOneWithoutUserTagInput
  }

  export type userTagUncheckedCreateInput = {
    uid: string
    tagid: string
  }

  export type userTagUpdateInput = {
    tag?: tagUpdateOneRequiredWithoutUserTagNestedInput
    user?: userUpdateOneRequiredWithoutUserTagNestedInput
  }

  export type userTagUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type userTagCreateManyInput = {
    uid: string
    tagid: string
  }

  export type userTagUpdateManyMutationInput = {

  }

  export type userTagUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateInput = {
    messageId?: string
    content: string
    createdAt?: Date | string
    project: projectCreateNestedOneWithoutChatMessageInput
    user: userCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateInput = {
    messageId?: string
    projectId: string
    login: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutChatMessageNestedInput
    user?: userUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    messageId?: string
    projectId: string
    login: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type applicationCountOrderByAggregateInput = {
    appid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    coverletter?: SortOrder
  }

  export type applicationMaxOrderByAggregateInput = {
    appid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    coverletter?: SortOrder
  }

  export type applicationMinOrderByAggregateInput = {
    appid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    coverletter?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type donationCountOrderByAggregateInput = {
    donationid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    created_at?: SortOrder
  }

  export type donationMaxOrderByAggregateInput = {
    donationid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    created_at?: SortOrder
  }

  export type donationMinOrderByAggregateInput = {
    donationid?: SortOrder
    uid?: SortOrder
    projectid?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: projectWhereInput | null
    isNot?: projectWhereInput | null
  }

  export type goalCountOrderByAggregateInput = {
    projectid?: SortOrder
    name?: SortOrder
    goalid?: SortOrder
    description?: SortOrder
  }

  export type goalMaxOrderByAggregateInput = {
    projectid?: SortOrder
    name?: SortOrder
    goalid?: SortOrder
    description?: SortOrder
  }

  export type goalMinOrderByAggregateInput = {
    projectid?: SortOrder
    name?: SortOrder
    goalid?: SortOrder
    description?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type goose_db_versionCountOrderByAggregateInput = {
    id?: SortOrder
    version_id?: SortOrder
    is_applied?: SortOrder
    tstamp?: SortOrder
  }

  export type goose_db_versionAvgOrderByAggregateInput = {
    id?: SortOrder
    version_id?: SortOrder
  }

  export type goose_db_versionMaxOrderByAggregateInput = {
    id?: SortOrder
    version_id?: SortOrder
    is_applied?: SortOrder
    tstamp?: SortOrder
  }

  export type goose_db_versionMinOrderByAggregateInput = {
    id?: SortOrder
    version_id?: SortOrder
    is_applied?: SortOrder
    tstamp?: SortOrder
  }

  export type goose_db_versionSumOrderByAggregateInput = {
    id?: SortOrder
    version_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type licenseCountOrderByAggregateInput = {
    licenseid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permission?: SortOrder
    condition?: SortOrder
    limitation?: SortOrder
  }

  export type licenseMaxOrderByAggregateInput = {
    licenseid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permission?: SortOrder
    condition?: SortOrder
    limitation?: SortOrder
  }

  export type licenseMinOrderByAggregateInput = {
    licenseid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permission?: SortOrder
    condition?: SortOrder
    limitation?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: applicationWhereInput
    some?: applicationWhereInput
    none?: applicationWhereInput
  }

  export type DonationListRelationFilter = {
    every?: donationWhereInput
    some?: donationWhereInput
    none?: donationWhereInput
  }

  export type GoalListRelationFilter = {
    every?: goalWhereInput
    some?: goalWhereInput
    none?: goalWhereInput
  }

  export type LicenseNullableScalarRelationFilter = {
    is?: licenseWhereInput | null
    isNot?: licenseWhereInput | null
  }

  export type RepoNullableScalarRelationFilter = {
    is?: repoWhereInput | null
    isNot?: repoWhereInput | null
  }

  export type ProjectTagListRelationFilter = {
    every?: projectTagWhereInput
    some?: projectTagWhereInput
    none?: projectTagWhereInput
  }

  export type RoadmapListRelationFilter = {
    every?: roadmapWhereInput
    some?: roadmapWhereInput
    none?: roadmapWhereInput
  }

  export type TeammemberListRelationFilter = {
    every?: teammemberWhereInput
    some?: teammemberWhereInput
    none?: teammemberWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type applicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type donationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type goalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roadmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teammemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectCountOrderByAggregateInput = {
    projectid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    repoid?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    licenseid?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    projectid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    repoid?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    licenseid?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    projectid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    repoid?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    licenseid?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type projectTagProjectidTagidCompoundUniqueInput = {
    projectid: string
    tagid: string
  }

  export type projectTagCountOrderByAggregateInput = {
    projectid?: SortOrder
    tagid?: SortOrder
  }

  export type projectTagMaxOrderByAggregateInput = {
    projectid?: SortOrder
    tagid?: SortOrder
  }

  export type projectTagMinOrderByAggregateInput = {
    projectid?: SortOrder
    tagid?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type repoUidNameCompoundUniqueInput = {
    uid: string
    name: string
  }

  export type repoCountOrderByAggregateInput = {
    repoid?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    star?: SortOrder
    fork?: SortOrder
    last_updated?: SortOrder
    language?: SortOrder
    updated_at?: SortOrder
  }

  export type repoAvgOrderByAggregateInput = {
    star?: SortOrder
    fork?: SortOrder
  }

  export type repoMaxOrderByAggregateInput = {
    repoid?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    star?: SortOrder
    fork?: SortOrder
    last_updated?: SortOrder
    language?: SortOrder
    updated_at?: SortOrder
  }

  export type repoMinOrderByAggregateInput = {
    repoid?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    star?: SortOrder
    fork?: SortOrder
    last_updated?: SortOrder
    language?: SortOrder
    updated_at?: SortOrder
  }

  export type repoSumOrderByAggregateInput = {
    star?: SortOrder
    fork?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type roadmapProjectidRoadmapCompoundUniqueInput = {
    projectid: string
    roadmap: string
  }

  export type roadmapCountOrderByAggregateInput = {
    projectid?: SortOrder
    roadmap?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type roadmapMaxOrderByAggregateInput = {
    projectid?: SortOrder
    roadmap?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type roadmapMinOrderByAggregateInput = {
    projectid?: SortOrder
    roadmap?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type UserTagListRelationFilter = {
    every?: userTagWhereInput
    some?: userTagWhereInput
    none?: userTagWhereInput
  }

  export type userTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagCountOrderByAggregateInput = {
    tagid?: SortOrder
    name?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    tagid?: SortOrder
    name?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    tagid?: SortOrder
    name?: SortOrder
  }

  export type teammemberProjectidUidCompoundUniqueInput = {
    projectid: string
    uid: string
  }

  export type teammemberCountOrderByAggregateInput = {
    projectid?: SortOrder
    uid?: SortOrder
    role?: SortOrder
  }

  export type teammemberMaxOrderByAggregateInput = {
    projectid?: SortOrder
    uid?: SortOrder
    role?: SortOrder
  }

  export type teammemberMinOrderByAggregateInput = {
    projectid?: SortOrder
    uid?: SortOrder
    role?: SortOrder
  }

  export type RepoListRelationFilter = {
    every?: repoWhereInput
    some?: repoWhereInput
    none?: repoWhereInput
  }

  export type repoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    uid?: SortOrder
    login?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    token?: SortOrder
    bio?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    public_repos?: SortOrder
    total_private_repos?: SortOrder
    html_url?: SortOrder
    last_updated?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    followers?: SortOrder
    following?: SortOrder
    public_repos?: SortOrder
    total_private_repos?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    uid?: SortOrder
    login?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    token?: SortOrder
    bio?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    public_repos?: SortOrder
    total_private_repos?: SortOrder
    html_url?: SortOrder
    last_updated?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    uid?: SortOrder
    login?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    location?: SortOrder
    token?: SortOrder
    bio?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    public_repos?: SortOrder
    total_private_repos?: SortOrder
    html_url?: SortOrder
    last_updated?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    followers?: SortOrder
    following?: SortOrder
    public_repos?: SortOrder
    total_private_repos?: SortOrder
  }

  export type userTagUidTagidCompoundUniqueInput = {
    uid: string
    tagid: string
  }

  export type userTagCountOrderByAggregateInput = {
    uid?: SortOrder
    tagid?: SortOrder
  }

  export type userTagMaxOrderByAggregateInput = {
    uid?: SortOrder
    tagid?: SortOrder
  }

  export type userTagMinOrderByAggregateInput = {
    uid?: SortOrder
    tagid?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    messageId?: SortOrder
    projectId?: SortOrder
    login?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    messageId?: SortOrder
    projectId?: SortOrder
    login?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    messageId?: SortOrder
    projectId?: SortOrder
    login?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type projectCreateNestedOneWithoutApplicationInput = {
    create?: XOR<projectCreateWithoutApplicationInput, projectUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: projectCreateOrConnectWithoutApplicationInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutApplicationInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type projectUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<projectCreateWithoutApplicationInput, projectUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: projectCreateOrConnectWithoutApplicationInput
    upsert?: projectUpsertWithoutApplicationInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutApplicationInput, projectUpdateWithoutApplicationInput>, projectUncheckedUpdateWithoutApplicationInput>
  }

  export type userUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput
    upsert?: userUpsertWithoutApplicationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutApplicationInput, userUpdateWithoutApplicationInput>, userUncheckedUpdateWithoutApplicationInput>
  }

  export type projectCreateNestedOneWithoutDonationInput = {
    create?: XOR<projectCreateWithoutDonationInput, projectUncheckedCreateWithoutDonationInput>
    connectOrCreate?: projectCreateOrConnectWithoutDonationInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutDonationInput = {
    create?: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
    connectOrCreate?: userCreateOrConnectWithoutDonationInput
    connect?: userWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type projectUpdateOneRequiredWithoutDonationNestedInput = {
    create?: XOR<projectCreateWithoutDonationInput, projectUncheckedCreateWithoutDonationInput>
    connectOrCreate?: projectCreateOrConnectWithoutDonationInput
    upsert?: projectUpsertWithoutDonationInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutDonationInput, projectUpdateWithoutDonationInput>, projectUncheckedUpdateWithoutDonationInput>
  }

  export type userUpdateOneRequiredWithoutDonationNestedInput = {
    create?: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
    connectOrCreate?: userCreateOrConnectWithoutDonationInput
    upsert?: userUpsertWithoutDonationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDonationInput, userUpdateWithoutDonationInput>, userUncheckedUpdateWithoutDonationInput>
  }

  export type projectCreateNestedOneWithoutGoalInput = {
    create?: XOR<projectCreateWithoutGoalInput, projectUncheckedCreateWithoutGoalInput>
    connectOrCreate?: projectCreateOrConnectWithoutGoalInput
    connect?: projectWhereUniqueInput
  }

  export type projectUpdateOneWithoutGoalNestedInput = {
    create?: XOR<projectCreateWithoutGoalInput, projectUncheckedCreateWithoutGoalInput>
    connectOrCreate?: projectCreateOrConnectWithoutGoalInput
    upsert?: projectUpsertWithoutGoalInput
    disconnect?: projectWhereInput | boolean
    delete?: projectWhereInput | boolean
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutGoalInput, projectUpdateWithoutGoalInput>, projectUncheckedUpdateWithoutGoalInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectCreateNestedManyWithoutLicenseInput = {
    create?: XOR<projectCreateWithoutLicenseInput, projectUncheckedCreateWithoutLicenseInput> | projectCreateWithoutLicenseInput[] | projectUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: projectCreateOrConnectWithoutLicenseInput | projectCreateOrConnectWithoutLicenseInput[]
    createMany?: projectCreateManyLicenseInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<projectCreateWithoutLicenseInput, projectUncheckedCreateWithoutLicenseInput> | projectCreateWithoutLicenseInput[] | projectUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: projectCreateOrConnectWithoutLicenseInput | projectCreateOrConnectWithoutLicenseInput[]
    createMany?: projectCreateManyLicenseInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<projectCreateWithoutLicenseInput, projectUncheckedCreateWithoutLicenseInput> | projectCreateWithoutLicenseInput[] | projectUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: projectCreateOrConnectWithoutLicenseInput | projectCreateOrConnectWithoutLicenseInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutLicenseInput | projectUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: projectCreateManyLicenseInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutLicenseInput | projectUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: projectUpdateManyWithWhereWithoutLicenseInput | projectUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<projectCreateWithoutLicenseInput, projectUncheckedCreateWithoutLicenseInput> | projectCreateWithoutLicenseInput[] | projectUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: projectCreateOrConnectWithoutLicenseInput | projectCreateOrConnectWithoutLicenseInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutLicenseInput | projectUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: projectCreateManyLicenseInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutLicenseInput | projectUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: projectUpdateManyWithWhereWithoutLicenseInput | projectUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type ChatMessageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ChatMessageCreateWithoutProjectInput, ChatMessageUncheckedCreateWithoutProjectInput> | ChatMessageCreateWithoutProjectInput[] | ChatMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutProjectInput | ChatMessageCreateOrConnectWithoutProjectInput[]
    createMany?: ChatMessageCreateManyProjectInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type applicationCreateNestedManyWithoutProjectInput = {
    create?: XOR<applicationCreateWithoutProjectInput, applicationUncheckedCreateWithoutProjectInput> | applicationCreateWithoutProjectInput[] | applicationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutProjectInput | applicationCreateOrConnectWithoutProjectInput[]
    createMany?: applicationCreateManyProjectInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type donationCreateNestedManyWithoutProjectInput = {
    create?: XOR<donationCreateWithoutProjectInput, donationUncheckedCreateWithoutProjectInput> | donationCreateWithoutProjectInput[] | donationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: donationCreateOrConnectWithoutProjectInput | donationCreateOrConnectWithoutProjectInput[]
    createMany?: donationCreateManyProjectInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type goalCreateNestedManyWithoutProjectInput = {
    create?: XOR<goalCreateWithoutProjectInput, goalUncheckedCreateWithoutProjectInput> | goalCreateWithoutProjectInput[] | goalUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: goalCreateOrConnectWithoutProjectInput | goalCreateOrConnectWithoutProjectInput[]
    createMany?: goalCreateManyProjectInputEnvelope
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
  }

  export type licenseCreateNestedOneWithoutProjectInput = {
    create?: XOR<licenseCreateWithoutProjectInput, licenseUncheckedCreateWithoutProjectInput>
    connectOrCreate?: licenseCreateOrConnectWithoutProjectInput
    connect?: licenseWhereUniqueInput
  }

  export type repoCreateNestedOneWithoutProjectInput = {
    create?: XOR<repoCreateWithoutProjectInput, repoUncheckedCreateWithoutProjectInput>
    connectOrCreate?: repoCreateOrConnectWithoutProjectInput
    connect?: repoWhereUniqueInput
  }

  export type projectTagCreateNestedManyWithoutProjectInput = {
    create?: XOR<projectTagCreateWithoutProjectInput, projectTagUncheckedCreateWithoutProjectInput> | projectTagCreateWithoutProjectInput[] | projectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutProjectInput | projectTagCreateOrConnectWithoutProjectInput[]
    createMany?: projectTagCreateManyProjectInputEnvelope
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
  }

  export type roadmapCreateNestedManyWithoutProjectInput = {
    create?: XOR<roadmapCreateWithoutProjectInput, roadmapUncheckedCreateWithoutProjectInput> | roadmapCreateWithoutProjectInput[] | roadmapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: roadmapCreateOrConnectWithoutProjectInput | roadmapCreateOrConnectWithoutProjectInput[]
    createMany?: roadmapCreateManyProjectInputEnvelope
    connect?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
  }

  export type teammemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<teammemberCreateWithoutProjectInput, teammemberUncheckedCreateWithoutProjectInput> | teammemberCreateWithoutProjectInput[] | teammemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutProjectInput | teammemberCreateOrConnectWithoutProjectInput[]
    createMany?: teammemberCreateManyProjectInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ChatMessageCreateWithoutProjectInput, ChatMessageUncheckedCreateWithoutProjectInput> | ChatMessageCreateWithoutProjectInput[] | ChatMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutProjectInput | ChatMessageCreateOrConnectWithoutProjectInput[]
    createMany?: ChatMessageCreateManyProjectInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type applicationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<applicationCreateWithoutProjectInput, applicationUncheckedCreateWithoutProjectInput> | applicationCreateWithoutProjectInput[] | applicationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutProjectInput | applicationCreateOrConnectWithoutProjectInput[]
    createMany?: applicationCreateManyProjectInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type donationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<donationCreateWithoutProjectInput, donationUncheckedCreateWithoutProjectInput> | donationCreateWithoutProjectInput[] | donationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: donationCreateOrConnectWithoutProjectInput | donationCreateOrConnectWithoutProjectInput[]
    createMany?: donationCreateManyProjectInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type goalUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<goalCreateWithoutProjectInput, goalUncheckedCreateWithoutProjectInput> | goalCreateWithoutProjectInput[] | goalUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: goalCreateOrConnectWithoutProjectInput | goalCreateOrConnectWithoutProjectInput[]
    createMany?: goalCreateManyProjectInputEnvelope
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
  }

  export type projectTagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<projectTagCreateWithoutProjectInput, projectTagUncheckedCreateWithoutProjectInput> | projectTagCreateWithoutProjectInput[] | projectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutProjectInput | projectTagCreateOrConnectWithoutProjectInput[]
    createMany?: projectTagCreateManyProjectInputEnvelope
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
  }

  export type roadmapUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<roadmapCreateWithoutProjectInput, roadmapUncheckedCreateWithoutProjectInput> | roadmapCreateWithoutProjectInput[] | roadmapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: roadmapCreateOrConnectWithoutProjectInput | roadmapCreateOrConnectWithoutProjectInput[]
    createMany?: roadmapCreateManyProjectInputEnvelope
    connect?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
  }

  export type teammemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<teammemberCreateWithoutProjectInput, teammemberUncheckedCreateWithoutProjectInput> | teammemberCreateWithoutProjectInput[] | teammemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutProjectInput | teammemberCreateOrConnectWithoutProjectInput[]
    createMany?: teammemberCreateManyProjectInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type ChatMessageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ChatMessageCreateWithoutProjectInput, ChatMessageUncheckedCreateWithoutProjectInput> | ChatMessageCreateWithoutProjectInput[] | ChatMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutProjectInput | ChatMessageCreateOrConnectWithoutProjectInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutProjectInput | ChatMessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ChatMessageCreateManyProjectInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutProjectInput | ChatMessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutProjectInput | ChatMessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type applicationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<applicationCreateWithoutProjectInput, applicationUncheckedCreateWithoutProjectInput> | applicationCreateWithoutProjectInput[] | applicationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutProjectInput | applicationCreateOrConnectWithoutProjectInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutProjectInput | applicationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: applicationCreateManyProjectInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutProjectInput | applicationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutProjectInput | applicationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type donationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<donationCreateWithoutProjectInput, donationUncheckedCreateWithoutProjectInput> | donationCreateWithoutProjectInput[] | donationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: donationCreateOrConnectWithoutProjectInput | donationCreateOrConnectWithoutProjectInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutProjectInput | donationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: donationCreateManyProjectInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutProjectInput | donationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: donationUpdateManyWithWhereWithoutProjectInput | donationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type goalUpdateManyWithoutProjectNestedInput = {
    create?: XOR<goalCreateWithoutProjectInput, goalUncheckedCreateWithoutProjectInput> | goalCreateWithoutProjectInput[] | goalUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: goalCreateOrConnectWithoutProjectInput | goalCreateOrConnectWithoutProjectInput[]
    upsert?: goalUpsertWithWhereUniqueWithoutProjectInput | goalUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: goalCreateManyProjectInputEnvelope
    set?: goalWhereUniqueInput | goalWhereUniqueInput[]
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[]
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    update?: goalUpdateWithWhereUniqueWithoutProjectInput | goalUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: goalUpdateManyWithWhereWithoutProjectInput | goalUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[]
  }

  export type licenseUpdateOneWithoutProjectNestedInput = {
    create?: XOR<licenseCreateWithoutProjectInput, licenseUncheckedCreateWithoutProjectInput>
    connectOrCreate?: licenseCreateOrConnectWithoutProjectInput
    upsert?: licenseUpsertWithoutProjectInput
    disconnect?: licenseWhereInput | boolean
    delete?: licenseWhereInput | boolean
    connect?: licenseWhereUniqueInput
    update?: XOR<XOR<licenseUpdateToOneWithWhereWithoutProjectInput, licenseUpdateWithoutProjectInput>, licenseUncheckedUpdateWithoutProjectInput>
  }

  export type repoUpdateOneWithoutProjectNestedInput = {
    create?: XOR<repoCreateWithoutProjectInput, repoUncheckedCreateWithoutProjectInput>
    connectOrCreate?: repoCreateOrConnectWithoutProjectInput
    upsert?: repoUpsertWithoutProjectInput
    disconnect?: repoWhereInput | boolean
    delete?: repoWhereInput | boolean
    connect?: repoWhereUniqueInput
    update?: XOR<XOR<repoUpdateToOneWithWhereWithoutProjectInput, repoUpdateWithoutProjectInput>, repoUncheckedUpdateWithoutProjectInput>
  }

  export type projectTagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<projectTagCreateWithoutProjectInput, projectTagUncheckedCreateWithoutProjectInput> | projectTagCreateWithoutProjectInput[] | projectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutProjectInput | projectTagCreateOrConnectWithoutProjectInput[]
    upsert?: projectTagUpsertWithWhereUniqueWithoutProjectInput | projectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: projectTagCreateManyProjectInputEnvelope
    set?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    disconnect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    delete?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    update?: projectTagUpdateWithWhereUniqueWithoutProjectInput | projectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: projectTagUpdateManyWithWhereWithoutProjectInput | projectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: projectTagScalarWhereInput | projectTagScalarWhereInput[]
  }

  export type roadmapUpdateManyWithoutProjectNestedInput = {
    create?: XOR<roadmapCreateWithoutProjectInput, roadmapUncheckedCreateWithoutProjectInput> | roadmapCreateWithoutProjectInput[] | roadmapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: roadmapCreateOrConnectWithoutProjectInput | roadmapCreateOrConnectWithoutProjectInput[]
    upsert?: roadmapUpsertWithWhereUniqueWithoutProjectInput | roadmapUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: roadmapCreateManyProjectInputEnvelope
    set?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    disconnect?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    delete?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    connect?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    update?: roadmapUpdateWithWhereUniqueWithoutProjectInput | roadmapUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: roadmapUpdateManyWithWhereWithoutProjectInput | roadmapUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: roadmapScalarWhereInput | roadmapScalarWhereInput[]
  }

  export type teammemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<teammemberCreateWithoutProjectInput, teammemberUncheckedCreateWithoutProjectInput> | teammemberCreateWithoutProjectInput[] | teammemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutProjectInput | teammemberCreateOrConnectWithoutProjectInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutProjectInput | teammemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: teammemberCreateManyProjectInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutProjectInput | teammemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutProjectInput | teammemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ChatMessageCreateWithoutProjectInput, ChatMessageUncheckedCreateWithoutProjectInput> | ChatMessageCreateWithoutProjectInput[] | ChatMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutProjectInput | ChatMessageCreateOrConnectWithoutProjectInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutProjectInput | ChatMessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ChatMessageCreateManyProjectInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutProjectInput | ChatMessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutProjectInput | ChatMessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type applicationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<applicationCreateWithoutProjectInput, applicationUncheckedCreateWithoutProjectInput> | applicationCreateWithoutProjectInput[] | applicationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutProjectInput | applicationCreateOrConnectWithoutProjectInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutProjectInput | applicationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: applicationCreateManyProjectInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutProjectInput | applicationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutProjectInput | applicationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type donationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<donationCreateWithoutProjectInput, donationUncheckedCreateWithoutProjectInput> | donationCreateWithoutProjectInput[] | donationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: donationCreateOrConnectWithoutProjectInput | donationCreateOrConnectWithoutProjectInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutProjectInput | donationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: donationCreateManyProjectInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutProjectInput | donationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: donationUpdateManyWithWhereWithoutProjectInput | donationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type goalUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<goalCreateWithoutProjectInput, goalUncheckedCreateWithoutProjectInput> | goalCreateWithoutProjectInput[] | goalUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: goalCreateOrConnectWithoutProjectInput | goalCreateOrConnectWithoutProjectInput[]
    upsert?: goalUpsertWithWhereUniqueWithoutProjectInput | goalUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: goalCreateManyProjectInputEnvelope
    set?: goalWhereUniqueInput | goalWhereUniqueInput[]
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[]
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    update?: goalUpdateWithWhereUniqueWithoutProjectInput | goalUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: goalUpdateManyWithWhereWithoutProjectInput | goalUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[]
  }

  export type projectTagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<projectTagCreateWithoutProjectInput, projectTagUncheckedCreateWithoutProjectInput> | projectTagCreateWithoutProjectInput[] | projectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutProjectInput | projectTagCreateOrConnectWithoutProjectInput[]
    upsert?: projectTagUpsertWithWhereUniqueWithoutProjectInput | projectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: projectTagCreateManyProjectInputEnvelope
    set?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    disconnect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    delete?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    update?: projectTagUpdateWithWhereUniqueWithoutProjectInput | projectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: projectTagUpdateManyWithWhereWithoutProjectInput | projectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: projectTagScalarWhereInput | projectTagScalarWhereInput[]
  }

  export type roadmapUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<roadmapCreateWithoutProjectInput, roadmapUncheckedCreateWithoutProjectInput> | roadmapCreateWithoutProjectInput[] | roadmapUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: roadmapCreateOrConnectWithoutProjectInput | roadmapCreateOrConnectWithoutProjectInput[]
    upsert?: roadmapUpsertWithWhereUniqueWithoutProjectInput | roadmapUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: roadmapCreateManyProjectInputEnvelope
    set?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    disconnect?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    delete?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    connect?: roadmapWhereUniqueInput | roadmapWhereUniqueInput[]
    update?: roadmapUpdateWithWhereUniqueWithoutProjectInput | roadmapUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: roadmapUpdateManyWithWhereWithoutProjectInput | roadmapUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: roadmapScalarWhereInput | roadmapScalarWhereInput[]
  }

  export type teammemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<teammemberCreateWithoutProjectInput, teammemberUncheckedCreateWithoutProjectInput> | teammemberCreateWithoutProjectInput[] | teammemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutProjectInput | teammemberCreateOrConnectWithoutProjectInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutProjectInput | teammemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: teammemberCreateManyProjectInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutProjectInput | teammemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutProjectInput | teammemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutProjectTagInput = {
    create?: XOR<projectCreateWithoutProjectTagInput, projectUncheckedCreateWithoutProjectTagInput>
    connectOrCreate?: projectCreateOrConnectWithoutProjectTagInput
    connect?: projectWhereUniqueInput
  }

  export type tagCreateNestedOneWithoutProjectTagInput = {
    create?: XOR<tagCreateWithoutProjectTagInput, tagUncheckedCreateWithoutProjectTagInput>
    connectOrCreate?: tagCreateOrConnectWithoutProjectTagInput
    connect?: tagWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutProjectTagNestedInput = {
    create?: XOR<projectCreateWithoutProjectTagInput, projectUncheckedCreateWithoutProjectTagInput>
    connectOrCreate?: projectCreateOrConnectWithoutProjectTagInput
    upsert?: projectUpsertWithoutProjectTagInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutProjectTagInput, projectUpdateWithoutProjectTagInput>, projectUncheckedUpdateWithoutProjectTagInput>
  }

  export type tagUpdateOneRequiredWithoutProjectTagNestedInput = {
    create?: XOR<tagCreateWithoutProjectTagInput, tagUncheckedCreateWithoutProjectTagInput>
    connectOrCreate?: tagCreateOrConnectWithoutProjectTagInput
    upsert?: tagUpsertWithoutProjectTagInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutProjectTagInput, tagUpdateWithoutProjectTagInput>, tagUncheckedUpdateWithoutProjectTagInput>
  }

  export type projectCreateNestedManyWithoutRepoInput = {
    create?: XOR<projectCreateWithoutRepoInput, projectUncheckedCreateWithoutRepoInput> | projectCreateWithoutRepoInput[] | projectUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: projectCreateOrConnectWithoutRepoInput | projectCreateOrConnectWithoutRepoInput[]
    createMany?: projectCreateManyRepoInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutRepoInput = {
    create?: XOR<userCreateWithoutRepoInput, userUncheckedCreateWithoutRepoInput>
    connectOrCreate?: userCreateOrConnectWithoutRepoInput
    connect?: userWhereUniqueInput
  }

  export type projectUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<projectCreateWithoutRepoInput, projectUncheckedCreateWithoutRepoInput> | projectCreateWithoutRepoInput[] | projectUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: projectCreateOrConnectWithoutRepoInput | projectCreateOrConnectWithoutRepoInput[]
    createMany?: projectCreateManyRepoInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectUpdateManyWithoutRepoNestedInput = {
    create?: XOR<projectCreateWithoutRepoInput, projectUncheckedCreateWithoutRepoInput> | projectCreateWithoutRepoInput[] | projectUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: projectCreateOrConnectWithoutRepoInput | projectCreateOrConnectWithoutRepoInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutRepoInput | projectUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: projectCreateManyRepoInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutRepoInput | projectUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: projectUpdateManyWithWhereWithoutRepoInput | projectUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type userUpdateOneWithoutRepoNestedInput = {
    create?: XOR<userCreateWithoutRepoInput, userUncheckedCreateWithoutRepoInput>
    connectOrCreate?: userCreateOrConnectWithoutRepoInput
    upsert?: userUpsertWithoutRepoInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRepoInput, userUpdateWithoutRepoInput>, userUncheckedUpdateWithoutRepoInput>
  }

  export type projectUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<projectCreateWithoutRepoInput, projectUncheckedCreateWithoutRepoInput> | projectCreateWithoutRepoInput[] | projectUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: projectCreateOrConnectWithoutRepoInput | projectCreateOrConnectWithoutRepoInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutRepoInput | projectUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: projectCreateManyRepoInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutRepoInput | projectUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: projectUpdateManyWithWhereWithoutRepoInput | projectUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutRoadmapInput = {
    create?: XOR<projectCreateWithoutRoadmapInput, projectUncheckedCreateWithoutRoadmapInput>
    connectOrCreate?: projectCreateOrConnectWithoutRoadmapInput
    connect?: projectWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutRoadmapNestedInput = {
    create?: XOR<projectCreateWithoutRoadmapInput, projectUncheckedCreateWithoutRoadmapInput>
    connectOrCreate?: projectCreateOrConnectWithoutRoadmapInput
    upsert?: projectUpsertWithoutRoadmapInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutRoadmapInput, projectUpdateWithoutRoadmapInput>, projectUncheckedUpdateWithoutRoadmapInput>
  }

  export type projectTagCreateNestedManyWithoutTagInput = {
    create?: XOR<projectTagCreateWithoutTagInput, projectTagUncheckedCreateWithoutTagInput> | projectTagCreateWithoutTagInput[] | projectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutTagInput | projectTagCreateOrConnectWithoutTagInput[]
    createMany?: projectTagCreateManyTagInputEnvelope
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
  }

  export type userTagCreateNestedManyWithoutTagInput = {
    create?: XOR<userTagCreateWithoutTagInput, userTagUncheckedCreateWithoutTagInput> | userTagCreateWithoutTagInput[] | userTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutTagInput | userTagCreateOrConnectWithoutTagInput[]
    createMany?: userTagCreateManyTagInputEnvelope
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
  }

  export type projectTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<projectTagCreateWithoutTagInput, projectTagUncheckedCreateWithoutTagInput> | projectTagCreateWithoutTagInput[] | projectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutTagInput | projectTagCreateOrConnectWithoutTagInput[]
    createMany?: projectTagCreateManyTagInputEnvelope
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
  }

  export type userTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<userTagCreateWithoutTagInput, userTagUncheckedCreateWithoutTagInput> | userTagCreateWithoutTagInput[] | userTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutTagInput | userTagCreateOrConnectWithoutTagInput[]
    createMany?: userTagCreateManyTagInputEnvelope
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
  }

  export type projectTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<projectTagCreateWithoutTagInput, projectTagUncheckedCreateWithoutTagInput> | projectTagCreateWithoutTagInput[] | projectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutTagInput | projectTagCreateOrConnectWithoutTagInput[]
    upsert?: projectTagUpsertWithWhereUniqueWithoutTagInput | projectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: projectTagCreateManyTagInputEnvelope
    set?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    disconnect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    delete?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    update?: projectTagUpdateWithWhereUniqueWithoutTagInput | projectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: projectTagUpdateManyWithWhereWithoutTagInput | projectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: projectTagScalarWhereInput | projectTagScalarWhereInput[]
  }

  export type userTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<userTagCreateWithoutTagInput, userTagUncheckedCreateWithoutTagInput> | userTagCreateWithoutTagInput[] | userTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutTagInput | userTagCreateOrConnectWithoutTagInput[]
    upsert?: userTagUpsertWithWhereUniqueWithoutTagInput | userTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: userTagCreateManyTagInputEnvelope
    set?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    disconnect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    delete?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    update?: userTagUpdateWithWhereUniqueWithoutTagInput | userTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: userTagUpdateManyWithWhereWithoutTagInput | userTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: userTagScalarWhereInput | userTagScalarWhereInput[]
  }

  export type projectTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<projectTagCreateWithoutTagInput, projectTagUncheckedCreateWithoutTagInput> | projectTagCreateWithoutTagInput[] | projectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: projectTagCreateOrConnectWithoutTagInput | projectTagCreateOrConnectWithoutTagInput[]
    upsert?: projectTagUpsertWithWhereUniqueWithoutTagInput | projectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: projectTagCreateManyTagInputEnvelope
    set?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    disconnect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    delete?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    connect?: projectTagWhereUniqueInput | projectTagWhereUniqueInput[]
    update?: projectTagUpdateWithWhereUniqueWithoutTagInput | projectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: projectTagUpdateManyWithWhereWithoutTagInput | projectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: projectTagScalarWhereInput | projectTagScalarWhereInput[]
  }

  export type userTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<userTagCreateWithoutTagInput, userTagUncheckedCreateWithoutTagInput> | userTagCreateWithoutTagInput[] | userTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutTagInput | userTagCreateOrConnectWithoutTagInput[]
    upsert?: userTagUpsertWithWhereUniqueWithoutTagInput | userTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: userTagCreateManyTagInputEnvelope
    set?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    disconnect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    delete?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    update?: userTagUpdateWithWhereUniqueWithoutTagInput | userTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: userTagUpdateManyWithWhereWithoutTagInput | userTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: userTagScalarWhereInput | userTagScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutTeammemberInput = {
    create?: XOR<projectCreateWithoutTeammemberInput, projectUncheckedCreateWithoutTeammemberInput>
    connectOrCreate?: projectCreateOrConnectWithoutTeammemberInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutTeammemberInput = {
    create?: XOR<userCreateWithoutTeammemberInput, userUncheckedCreateWithoutTeammemberInput>
    connectOrCreate?: userCreateOrConnectWithoutTeammemberInput
    connect?: userWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutTeammemberNestedInput = {
    create?: XOR<projectCreateWithoutTeammemberInput, projectUncheckedCreateWithoutTeammemberInput>
    connectOrCreate?: projectCreateOrConnectWithoutTeammemberInput
    upsert?: projectUpsertWithoutTeammemberInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutTeammemberInput, projectUpdateWithoutTeammemberInput>, projectUncheckedUpdateWithoutTeammemberInput>
  }

  export type userUpdateOneRequiredWithoutTeammemberNestedInput = {
    create?: XOR<userCreateWithoutTeammemberInput, userUncheckedCreateWithoutTeammemberInput>
    connectOrCreate?: userCreateOrConnectWithoutTeammemberInput
    upsert?: userUpsertWithoutTeammemberInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTeammemberInput, userUpdateWithoutTeammemberInput>, userUncheckedUpdateWithoutTeammemberInput>
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type applicationCreateNestedManyWithoutUserInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type donationCreateNestedManyWithoutUserInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type repoCreateNestedManyWithoutUserInput = {
    create?: XOR<repoCreateWithoutUserInput, repoUncheckedCreateWithoutUserInput> | repoCreateWithoutUserInput[] | repoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: repoCreateOrConnectWithoutUserInput | repoCreateOrConnectWithoutUserInput[]
    createMany?: repoCreateManyUserInputEnvelope
    connect?: repoWhereUniqueInput | repoWhereUniqueInput[]
  }

  export type teammemberCreateNestedManyWithoutUserInput = {
    create?: XOR<teammemberCreateWithoutUserInput, teammemberUncheckedCreateWithoutUserInput> | teammemberCreateWithoutUserInput[] | teammemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutUserInput | teammemberCreateOrConnectWithoutUserInput[]
    createMany?: teammemberCreateManyUserInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type userTagCreateNestedManyWithoutUserInput = {
    create?: XOR<userTagCreateWithoutUserInput, userTagUncheckedCreateWithoutUserInput> | userTagCreateWithoutUserInput[] | userTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutUserInput | userTagCreateOrConnectWithoutUserInput[]
    createMany?: userTagCreateManyUserInputEnvelope
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type applicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type donationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type repoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<repoCreateWithoutUserInput, repoUncheckedCreateWithoutUserInput> | repoCreateWithoutUserInput[] | repoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: repoCreateOrConnectWithoutUserInput | repoCreateOrConnectWithoutUserInput[]
    createMany?: repoCreateManyUserInputEnvelope
    connect?: repoWhereUniqueInput | repoWhereUniqueInput[]
  }

  export type teammemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<teammemberCreateWithoutUserInput, teammemberUncheckedCreateWithoutUserInput> | teammemberCreateWithoutUserInput[] | teammemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutUserInput | teammemberCreateOrConnectWithoutUserInput[]
    createMany?: teammemberCreateManyUserInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type userTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userTagCreateWithoutUserInput, userTagUncheckedCreateWithoutUserInput> | userTagCreateWithoutUserInput[] | userTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutUserInput | userTagCreateOrConnectWithoutUserInput[]
    createMany?: userTagCreateManyUserInputEnvelope
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type applicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type donationUpdateManyWithoutUserNestedInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutUserInput | donationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutUserInput | donationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: donationUpdateManyWithWhereWithoutUserInput | donationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type repoUpdateManyWithoutUserNestedInput = {
    create?: XOR<repoCreateWithoutUserInput, repoUncheckedCreateWithoutUserInput> | repoCreateWithoutUserInput[] | repoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: repoCreateOrConnectWithoutUserInput | repoCreateOrConnectWithoutUserInput[]
    upsert?: repoUpsertWithWhereUniqueWithoutUserInput | repoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: repoCreateManyUserInputEnvelope
    set?: repoWhereUniqueInput | repoWhereUniqueInput[]
    disconnect?: repoWhereUniqueInput | repoWhereUniqueInput[]
    delete?: repoWhereUniqueInput | repoWhereUniqueInput[]
    connect?: repoWhereUniqueInput | repoWhereUniqueInput[]
    update?: repoUpdateWithWhereUniqueWithoutUserInput | repoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: repoUpdateManyWithWhereWithoutUserInput | repoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: repoScalarWhereInput | repoScalarWhereInput[]
  }

  export type teammemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<teammemberCreateWithoutUserInput, teammemberUncheckedCreateWithoutUserInput> | teammemberCreateWithoutUserInput[] | teammemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutUserInput | teammemberCreateOrConnectWithoutUserInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutUserInput | teammemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teammemberCreateManyUserInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutUserInput | teammemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutUserInput | teammemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type userTagUpdateManyWithoutUserNestedInput = {
    create?: XOR<userTagCreateWithoutUserInput, userTagUncheckedCreateWithoutUserInput> | userTagCreateWithoutUserInput[] | userTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutUserInput | userTagCreateOrConnectWithoutUserInput[]
    upsert?: userTagUpsertWithWhereUniqueWithoutUserInput | userTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userTagCreateManyUserInputEnvelope
    set?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    disconnect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    delete?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    update?: userTagUpdateWithWhereUniqueWithoutUserInput | userTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userTagUpdateManyWithWhereWithoutUserInput | userTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userTagScalarWhereInput | userTagScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type applicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type donationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutUserInput | donationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutUserInput | donationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: donationUpdateManyWithWhereWithoutUserInput | donationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type repoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<repoCreateWithoutUserInput, repoUncheckedCreateWithoutUserInput> | repoCreateWithoutUserInput[] | repoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: repoCreateOrConnectWithoutUserInput | repoCreateOrConnectWithoutUserInput[]
    upsert?: repoUpsertWithWhereUniqueWithoutUserInput | repoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: repoCreateManyUserInputEnvelope
    set?: repoWhereUniqueInput | repoWhereUniqueInput[]
    disconnect?: repoWhereUniqueInput | repoWhereUniqueInput[]
    delete?: repoWhereUniqueInput | repoWhereUniqueInput[]
    connect?: repoWhereUniqueInput | repoWhereUniqueInput[]
    update?: repoUpdateWithWhereUniqueWithoutUserInput | repoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: repoUpdateManyWithWhereWithoutUserInput | repoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: repoScalarWhereInput | repoScalarWhereInput[]
  }

  export type teammemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<teammemberCreateWithoutUserInput, teammemberUncheckedCreateWithoutUserInput> | teammemberCreateWithoutUserInput[] | teammemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutUserInput | teammemberCreateOrConnectWithoutUserInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutUserInput | teammemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teammemberCreateManyUserInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutUserInput | teammemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutUserInput | teammemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type userTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userTagCreateWithoutUserInput, userTagUncheckedCreateWithoutUserInput> | userTagCreateWithoutUserInput[] | userTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userTagCreateOrConnectWithoutUserInput | userTagCreateOrConnectWithoutUserInput[]
    upsert?: userTagUpsertWithWhereUniqueWithoutUserInput | userTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userTagCreateManyUserInputEnvelope
    set?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    disconnect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    delete?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    connect?: userTagWhereUniqueInput | userTagWhereUniqueInput[]
    update?: userTagUpdateWithWhereUniqueWithoutUserInput | userTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userTagUpdateManyWithWhereWithoutUserInput | userTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userTagScalarWhereInput | userTagScalarWhereInput[]
  }

  export type tagCreateNestedOneWithoutUserTagInput = {
    create?: XOR<tagCreateWithoutUserTagInput, tagUncheckedCreateWithoutUserTagInput>
    connectOrCreate?: tagCreateOrConnectWithoutUserTagInput
    connect?: tagWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUserTagInput = {
    create?: XOR<userCreateWithoutUserTagInput, userUncheckedCreateWithoutUserTagInput>
    connectOrCreate?: userCreateOrConnectWithoutUserTagInput
    connect?: userWhereUniqueInput
  }

  export type tagUpdateOneRequiredWithoutUserTagNestedInput = {
    create?: XOR<tagCreateWithoutUserTagInput, tagUncheckedCreateWithoutUserTagInput>
    connectOrCreate?: tagCreateOrConnectWithoutUserTagInput
    upsert?: tagUpsertWithoutUserTagInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutUserTagInput, tagUpdateWithoutUserTagInput>, tagUncheckedUpdateWithoutUserTagInput>
  }

  export type userUpdateOneRequiredWithoutUserTagNestedInput = {
    create?: XOR<userCreateWithoutUserTagInput, userUncheckedCreateWithoutUserTagInput>
    connectOrCreate?: userCreateOrConnectWithoutUserTagInput
    upsert?: userUpsertWithoutUserTagInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserTagInput, userUpdateWithoutUserTagInput>, userUncheckedUpdateWithoutUserTagInput>
  }

  export type projectCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<projectCreateWithoutChatMessageInput, projectUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: projectCreateOrConnectWithoutChatMessageInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<userCreateWithoutChatMessageInput, userUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: userCreateOrConnectWithoutChatMessageInput
    connect?: userWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<projectCreateWithoutChatMessageInput, projectUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: projectCreateOrConnectWithoutChatMessageInput
    upsert?: projectUpsertWithoutChatMessageInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutChatMessageInput, projectUpdateWithoutChatMessageInput>, projectUncheckedUpdateWithoutChatMessageInput>
  }

  export type userUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<userCreateWithoutChatMessageInput, userUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: userCreateOrConnectWithoutChatMessageInput
    upsert?: userUpsertWithoutChatMessageInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChatMessageInput, userUpdateWithoutChatMessageInput>, userUncheckedUpdateWithoutChatMessageInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type projectCreateWithoutApplicationInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutApplicationInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutApplicationInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutApplicationInput, projectUncheckedCreateWithoutApplicationInput>
  }

  export type userCreateWithoutApplicationInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    repo?: repoCreateNestedManyWithoutUserInput
    teammember?: teammemberCreateNestedManyWithoutUserInput
    userTag?: userTagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutApplicationInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    repo?: repoUncheckedCreateNestedManyWithoutUserInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutUserInput
    userTag?: userTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutApplicationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
  }

  export type projectUpsertWithoutApplicationInput = {
    update: XOR<projectUpdateWithoutApplicationInput, projectUncheckedUpdateWithoutApplicationInput>
    create: XOR<projectCreateWithoutApplicationInput, projectUncheckedCreateWithoutApplicationInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutApplicationInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutApplicationInput, projectUncheckedUpdateWithoutApplicationInput>
  }

  export type projectUpdateWithoutApplicationInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutApplicationInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type userUpsertWithoutApplicationInput = {
    update: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutApplicationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>
  }

  export type userUpdateWithoutApplicationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    repo?: repoUpdateManyWithoutUserNestedInput
    teammember?: teammemberUpdateManyWithoutUserNestedInput
    userTag?: userTagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutApplicationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    repo?: repoUncheckedUpdateManyWithoutUserNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutUserNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectCreateWithoutDonationInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutDonationInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutDonationInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutDonationInput, projectUncheckedCreateWithoutDonationInput>
  }

  export type userCreateWithoutDonationInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
    application?: applicationCreateNestedManyWithoutUserInput
    repo?: repoCreateNestedManyWithoutUserInput
    teammember?: teammemberCreateNestedManyWithoutUserInput
    userTag?: userTagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDonationInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
    repo?: repoUncheckedCreateNestedManyWithoutUserInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutUserInput
    userTag?: userTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDonationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
  }

  export type projectUpsertWithoutDonationInput = {
    update: XOR<projectUpdateWithoutDonationInput, projectUncheckedUpdateWithoutDonationInput>
    create: XOR<projectCreateWithoutDonationInput, projectUncheckedCreateWithoutDonationInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutDonationInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutDonationInput, projectUncheckedUpdateWithoutDonationInput>
  }

  export type projectUpdateWithoutDonationInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutDonationInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type userUpsertWithoutDonationInput = {
    update: XOR<userUpdateWithoutDonationInput, userUncheckedUpdateWithoutDonationInput>
    create: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDonationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDonationInput, userUncheckedUpdateWithoutDonationInput>
  }

  export type userUpdateWithoutDonationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
    application?: applicationUpdateManyWithoutUserNestedInput
    repo?: repoUpdateManyWithoutUserNestedInput
    teammember?: teammemberUpdateManyWithoutUserNestedInput
    userTag?: userTagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDonationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
    repo?: repoUncheckedUpdateManyWithoutUserNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutUserNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectCreateWithoutGoalInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutGoalInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutGoalInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutGoalInput, projectUncheckedCreateWithoutGoalInput>
  }

  export type projectUpsertWithoutGoalInput = {
    update: XOR<projectUpdateWithoutGoalInput, projectUncheckedUpdateWithoutGoalInput>
    create: XOR<projectCreateWithoutGoalInput, projectUncheckedCreateWithoutGoalInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutGoalInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutGoalInput, projectUncheckedUpdateWithoutGoalInput>
  }

  export type projectUpdateWithoutGoalInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutGoalInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateWithoutLicenseInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutLicenseInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutLicenseInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutLicenseInput, projectUncheckedCreateWithoutLicenseInput>
  }

  export type projectCreateManyLicenseInputEnvelope = {
    data: projectCreateManyLicenseInput | projectCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutLicenseInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutLicenseInput, projectUncheckedUpdateWithoutLicenseInput>
    create: XOR<projectCreateWithoutLicenseInput, projectUncheckedCreateWithoutLicenseInput>
  }

  export type projectUpdateWithWhereUniqueWithoutLicenseInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutLicenseInput, projectUncheckedUpdateWithoutLicenseInput>
  }

  export type projectUpdateManyWithWhereWithoutLicenseInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutLicenseInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    projectid?: UuidFilter<"project"> | string
    title?: StringFilter<"project"> | string
    description?: StringFilter<"project"> | string
    repoid?: UuidNullableFilter<"project"> | string | null
    status?: StringNullableFilter<"project"> | string | null
    created_at?: DateTimeNullableFilter<"project"> | Date | string | null
    licenseid?: UuidNullableFilter<"project"> | string | null
  }

  export type ChatMessageCreateWithoutProjectInput = {
    messageId?: string
    content: string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateWithoutProjectInput = {
    messageId?: string
    login: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutProjectInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutProjectInput, ChatMessageUncheckedCreateWithoutProjectInput>
  }

  export type ChatMessageCreateManyProjectInputEnvelope = {
    data: ChatMessageCreateManyProjectInput | ChatMessageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type applicationCreateWithoutProjectInput = {
    appid?: string
    coverletter?: string | null
    user: userCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateWithoutProjectInput = {
    appid?: string
    uid: string
    coverletter?: string | null
  }

  export type applicationCreateOrConnectWithoutProjectInput = {
    where: applicationWhereUniqueInput
    create: XOR<applicationCreateWithoutProjectInput, applicationUncheckedCreateWithoutProjectInput>
  }

  export type applicationCreateManyProjectInputEnvelope = {
    data: applicationCreateManyProjectInput | applicationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type donationCreateWithoutProjectInput = {
    donationid?: string
    created_at?: Date | string | null
    user: userCreateNestedOneWithoutDonationInput
  }

  export type donationUncheckedCreateWithoutProjectInput = {
    donationid?: string
    uid: string
    created_at?: Date | string | null
  }

  export type donationCreateOrConnectWithoutProjectInput = {
    where: donationWhereUniqueInput
    create: XOR<donationCreateWithoutProjectInput, donationUncheckedCreateWithoutProjectInput>
  }

  export type donationCreateManyProjectInputEnvelope = {
    data: donationCreateManyProjectInput | donationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type goalCreateWithoutProjectInput = {
    name: string
    goalid?: string
    description?: string | null
  }

  export type goalUncheckedCreateWithoutProjectInput = {
    name: string
    goalid?: string
    description?: string | null
  }

  export type goalCreateOrConnectWithoutProjectInput = {
    where: goalWhereUniqueInput
    create: XOR<goalCreateWithoutProjectInput, goalUncheckedCreateWithoutProjectInput>
  }

  export type goalCreateManyProjectInputEnvelope = {
    data: goalCreateManyProjectInput | goalCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type licenseCreateWithoutProjectInput = {
    licenseid?: string
    name: string
    description: string
    permission?: string | null
    condition?: string | null
    limitation: string
  }

  export type licenseUncheckedCreateWithoutProjectInput = {
    licenseid?: string
    name: string
    description: string
    permission?: string | null
    condition?: string | null
    limitation: string
  }

  export type licenseCreateOrConnectWithoutProjectInput = {
    where: licenseWhereUniqueInput
    create: XOR<licenseCreateWithoutProjectInput, licenseUncheckedCreateWithoutProjectInput>
  }

  export type repoCreateWithoutProjectInput = {
    repoid?: string
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
    user?: userCreateNestedOneWithoutRepoInput
  }

  export type repoUncheckedCreateWithoutProjectInput = {
    repoid?: string
    uid?: string | null
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
  }

  export type repoCreateOrConnectWithoutProjectInput = {
    where: repoWhereUniqueInput
    create: XOR<repoCreateWithoutProjectInput, repoUncheckedCreateWithoutProjectInput>
  }

  export type projectTagCreateWithoutProjectInput = {
    tag: tagCreateNestedOneWithoutProjectTagInput
  }

  export type projectTagUncheckedCreateWithoutProjectInput = {
    tagid: string
  }

  export type projectTagCreateOrConnectWithoutProjectInput = {
    where: projectTagWhereUniqueInput
    create: XOR<projectTagCreateWithoutProjectInput, projectTagUncheckedCreateWithoutProjectInput>
  }

  export type projectTagCreateManyProjectInputEnvelope = {
    data: projectTagCreateManyProjectInput | projectTagCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type roadmapCreateWithoutProjectInput = {
    roadmap: string
    description: string
    status: string
  }

  export type roadmapUncheckedCreateWithoutProjectInput = {
    roadmap: string
    description: string
    status: string
  }

  export type roadmapCreateOrConnectWithoutProjectInput = {
    where: roadmapWhereUniqueInput
    create: XOR<roadmapCreateWithoutProjectInput, roadmapUncheckedCreateWithoutProjectInput>
  }

  export type roadmapCreateManyProjectInputEnvelope = {
    data: roadmapCreateManyProjectInput | roadmapCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type teammemberCreateWithoutProjectInput = {
    role: string
    user: userCreateNestedOneWithoutTeammemberInput
  }

  export type teammemberUncheckedCreateWithoutProjectInput = {
    uid: string
    role: string
  }

  export type teammemberCreateOrConnectWithoutProjectInput = {
    where: teammemberWhereUniqueInput
    create: XOR<teammemberCreateWithoutProjectInput, teammemberUncheckedCreateWithoutProjectInput>
  }

  export type teammemberCreateManyProjectInputEnvelope = {
    data: teammemberCreateManyProjectInput | teammemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutProjectInput, ChatMessageUncheckedUpdateWithoutProjectInput>
    create: XOR<ChatMessageCreateWithoutProjectInput, ChatMessageUncheckedCreateWithoutProjectInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutProjectInput, ChatMessageUncheckedUpdateWithoutProjectInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutProjectInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    messageId?: UuidFilter<"ChatMessage"> | string
    projectId?: UuidFilter<"ChatMessage"> | string
    login?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type applicationUpsertWithWhereUniqueWithoutProjectInput = {
    where: applicationWhereUniqueInput
    update: XOR<applicationUpdateWithoutProjectInput, applicationUncheckedUpdateWithoutProjectInput>
    create: XOR<applicationCreateWithoutProjectInput, applicationUncheckedCreateWithoutProjectInput>
  }

  export type applicationUpdateWithWhereUniqueWithoutProjectInput = {
    where: applicationWhereUniqueInput
    data: XOR<applicationUpdateWithoutProjectInput, applicationUncheckedUpdateWithoutProjectInput>
  }

  export type applicationUpdateManyWithWhereWithoutProjectInput = {
    where: applicationScalarWhereInput
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutProjectInput>
  }

  export type applicationScalarWhereInput = {
    AND?: applicationScalarWhereInput | applicationScalarWhereInput[]
    OR?: applicationScalarWhereInput[]
    NOT?: applicationScalarWhereInput | applicationScalarWhereInput[]
    appid?: UuidFilter<"application"> | string
    uid?: UuidFilter<"application"> | string
    projectid?: UuidFilter<"application"> | string
    coverletter?: StringNullableFilter<"application"> | string | null
  }

  export type donationUpsertWithWhereUniqueWithoutProjectInput = {
    where: donationWhereUniqueInput
    update: XOR<donationUpdateWithoutProjectInput, donationUncheckedUpdateWithoutProjectInput>
    create: XOR<donationCreateWithoutProjectInput, donationUncheckedCreateWithoutProjectInput>
  }

  export type donationUpdateWithWhereUniqueWithoutProjectInput = {
    where: donationWhereUniqueInput
    data: XOR<donationUpdateWithoutProjectInput, donationUncheckedUpdateWithoutProjectInput>
  }

  export type donationUpdateManyWithWhereWithoutProjectInput = {
    where: donationScalarWhereInput
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyWithoutProjectInput>
  }

  export type donationScalarWhereInput = {
    AND?: donationScalarWhereInput | donationScalarWhereInput[]
    OR?: donationScalarWhereInput[]
    NOT?: donationScalarWhereInput | donationScalarWhereInput[]
    donationid?: UuidFilter<"donation"> | string
    uid?: UuidFilter<"donation"> | string
    projectid?: UuidFilter<"donation"> | string
    created_at?: DateTimeNullableFilter<"donation"> | Date | string | null
  }

  export type goalUpsertWithWhereUniqueWithoutProjectInput = {
    where: goalWhereUniqueInput
    update: XOR<goalUpdateWithoutProjectInput, goalUncheckedUpdateWithoutProjectInput>
    create: XOR<goalCreateWithoutProjectInput, goalUncheckedCreateWithoutProjectInput>
  }

  export type goalUpdateWithWhereUniqueWithoutProjectInput = {
    where: goalWhereUniqueInput
    data: XOR<goalUpdateWithoutProjectInput, goalUncheckedUpdateWithoutProjectInput>
  }

  export type goalUpdateManyWithWhereWithoutProjectInput = {
    where: goalScalarWhereInput
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyWithoutProjectInput>
  }

  export type goalScalarWhereInput = {
    AND?: goalScalarWhereInput | goalScalarWhereInput[]
    OR?: goalScalarWhereInput[]
    NOT?: goalScalarWhereInput | goalScalarWhereInput[]
    projectid?: UuidNullableFilter<"goal"> | string | null
    name?: StringFilter<"goal"> | string
    goalid?: UuidFilter<"goal"> | string
    description?: StringNullableFilter<"goal"> | string | null
  }

  export type licenseUpsertWithoutProjectInput = {
    update: XOR<licenseUpdateWithoutProjectInput, licenseUncheckedUpdateWithoutProjectInput>
    create: XOR<licenseCreateWithoutProjectInput, licenseUncheckedCreateWithoutProjectInput>
    where?: licenseWhereInput
  }

  export type licenseUpdateToOneWithWhereWithoutProjectInput = {
    where?: licenseWhereInput
    data: XOR<licenseUpdateWithoutProjectInput, licenseUncheckedUpdateWithoutProjectInput>
  }

  export type licenseUpdateWithoutProjectInput = {
    licenseid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    limitation?: StringFieldUpdateOperationsInput | string
  }

  export type licenseUncheckedUpdateWithoutProjectInput = {
    licenseid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    limitation?: StringFieldUpdateOperationsInput | string
  }

  export type repoUpsertWithoutProjectInput = {
    update: XOR<repoUpdateWithoutProjectInput, repoUncheckedUpdateWithoutProjectInput>
    create: XOR<repoCreateWithoutProjectInput, repoUncheckedCreateWithoutProjectInput>
    where?: repoWhereInput
  }

  export type repoUpdateToOneWithWhereWithoutProjectInput = {
    where?: repoWhereInput
    data: XOR<repoUpdateWithoutProjectInput, repoUncheckedUpdateWithoutProjectInput>
  }

  export type repoUpdateWithoutProjectInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutRepoNestedInput
  }

  export type repoUncheckedUpdateWithoutProjectInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectTagUpsertWithWhereUniqueWithoutProjectInput = {
    where: projectTagWhereUniqueInput
    update: XOR<projectTagUpdateWithoutProjectInput, projectTagUncheckedUpdateWithoutProjectInput>
    create: XOR<projectTagCreateWithoutProjectInput, projectTagUncheckedCreateWithoutProjectInput>
  }

  export type projectTagUpdateWithWhereUniqueWithoutProjectInput = {
    where: projectTagWhereUniqueInput
    data: XOR<projectTagUpdateWithoutProjectInput, projectTagUncheckedUpdateWithoutProjectInput>
  }

  export type projectTagUpdateManyWithWhereWithoutProjectInput = {
    where: projectTagScalarWhereInput
    data: XOR<projectTagUpdateManyMutationInput, projectTagUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectTagScalarWhereInput = {
    AND?: projectTagScalarWhereInput | projectTagScalarWhereInput[]
    OR?: projectTagScalarWhereInput[]
    NOT?: projectTagScalarWhereInput | projectTagScalarWhereInput[]
    projectid?: UuidFilter<"projectTag"> | string
    tagid?: UuidFilter<"projectTag"> | string
  }

  export type roadmapUpsertWithWhereUniqueWithoutProjectInput = {
    where: roadmapWhereUniqueInput
    update: XOR<roadmapUpdateWithoutProjectInput, roadmapUncheckedUpdateWithoutProjectInput>
    create: XOR<roadmapCreateWithoutProjectInput, roadmapUncheckedCreateWithoutProjectInput>
  }

  export type roadmapUpdateWithWhereUniqueWithoutProjectInput = {
    where: roadmapWhereUniqueInput
    data: XOR<roadmapUpdateWithoutProjectInput, roadmapUncheckedUpdateWithoutProjectInput>
  }

  export type roadmapUpdateManyWithWhereWithoutProjectInput = {
    where: roadmapScalarWhereInput
    data: XOR<roadmapUpdateManyMutationInput, roadmapUncheckedUpdateManyWithoutProjectInput>
  }

  export type roadmapScalarWhereInput = {
    AND?: roadmapScalarWhereInput | roadmapScalarWhereInput[]
    OR?: roadmapScalarWhereInput[]
    NOT?: roadmapScalarWhereInput | roadmapScalarWhereInput[]
    projectid?: UuidFilter<"roadmap"> | string
    roadmap?: StringFilter<"roadmap"> | string
    description?: StringFilter<"roadmap"> | string
    status?: StringFilter<"roadmap"> | string
  }

  export type teammemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: teammemberWhereUniqueInput
    update: XOR<teammemberUpdateWithoutProjectInput, teammemberUncheckedUpdateWithoutProjectInput>
    create: XOR<teammemberCreateWithoutProjectInput, teammemberUncheckedCreateWithoutProjectInput>
  }

  export type teammemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: teammemberWhereUniqueInput
    data: XOR<teammemberUpdateWithoutProjectInput, teammemberUncheckedUpdateWithoutProjectInput>
  }

  export type teammemberUpdateManyWithWhereWithoutProjectInput = {
    where: teammemberScalarWhereInput
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type teammemberScalarWhereInput = {
    AND?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
    OR?: teammemberScalarWhereInput[]
    NOT?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
    projectid?: UuidFilter<"teammember"> | string
    uid?: UuidFilter<"teammember"> | string
    role?: StringFilter<"teammember"> | string
  }

  export type projectCreateWithoutProjectTagInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutProjectTagInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutProjectTagInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutProjectTagInput, projectUncheckedCreateWithoutProjectTagInput>
  }

  export type tagCreateWithoutProjectTagInput = {
    tagid?: string
    name: string
    userTag?: userTagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateWithoutProjectTagInput = {
    tagid?: string
    name: string
    userTag?: userTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagCreateOrConnectWithoutProjectTagInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutProjectTagInput, tagUncheckedCreateWithoutProjectTagInput>
  }

  export type projectUpsertWithoutProjectTagInput = {
    update: XOR<projectUpdateWithoutProjectTagInput, projectUncheckedUpdateWithoutProjectTagInput>
    create: XOR<projectCreateWithoutProjectTagInput, projectUncheckedCreateWithoutProjectTagInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutProjectTagInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutProjectTagInput, projectUncheckedUpdateWithoutProjectTagInput>
  }

  export type projectUpdateWithoutProjectTagInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutProjectTagInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type tagUpsertWithoutProjectTagInput = {
    update: XOR<tagUpdateWithoutProjectTagInput, tagUncheckedUpdateWithoutProjectTagInput>
    create: XOR<tagCreateWithoutProjectTagInput, tagUncheckedCreateWithoutProjectTagInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutProjectTagInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutProjectTagInput, tagUncheckedUpdateWithoutProjectTagInput>
  }

  export type tagUpdateWithoutProjectTagInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userTag?: userTagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateWithoutProjectTagInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userTag?: userTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type projectCreateWithoutRepoInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutRepoInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutRepoInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutRepoInput, projectUncheckedCreateWithoutRepoInput>
  }

  export type projectCreateManyRepoInputEnvelope = {
    data: projectCreateManyRepoInput | projectCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutRepoInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
    application?: applicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    teammember?: teammemberCreateNestedManyWithoutUserInput
    userTag?: userTagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRepoInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutUserInput
    userTag?: userTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRepoInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRepoInput, userUncheckedCreateWithoutRepoInput>
  }

  export type projectUpsertWithWhereUniqueWithoutRepoInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutRepoInput, projectUncheckedUpdateWithoutRepoInput>
    create: XOR<projectCreateWithoutRepoInput, projectUncheckedCreateWithoutRepoInput>
  }

  export type projectUpdateWithWhereUniqueWithoutRepoInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutRepoInput, projectUncheckedUpdateWithoutRepoInput>
  }

  export type projectUpdateManyWithWhereWithoutRepoInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutRepoInput>
  }

  export type userUpsertWithoutRepoInput = {
    update: XOR<userUpdateWithoutRepoInput, userUncheckedUpdateWithoutRepoInput>
    create: XOR<userCreateWithoutRepoInput, userUncheckedCreateWithoutRepoInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRepoInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRepoInput, userUncheckedUpdateWithoutRepoInput>
  }

  export type userUpdateWithoutRepoInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
    application?: applicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    teammember?: teammemberUpdateManyWithoutUserNestedInput
    userTag?: userTagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRepoInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutUserNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectCreateWithoutRoadmapInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutRoadmapInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutRoadmapInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutRoadmapInput, projectUncheckedCreateWithoutRoadmapInput>
  }

  export type projectUpsertWithoutRoadmapInput = {
    update: XOR<projectUpdateWithoutRoadmapInput, projectUncheckedUpdateWithoutRoadmapInput>
    create: XOR<projectCreateWithoutRoadmapInput, projectUncheckedCreateWithoutRoadmapInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutRoadmapInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutRoadmapInput, projectUncheckedUpdateWithoutRoadmapInput>
  }

  export type projectUpdateWithoutRoadmapInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutRoadmapInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectTagCreateWithoutTagInput = {
    project: projectCreateNestedOneWithoutProjectTagInput
  }

  export type projectTagUncheckedCreateWithoutTagInput = {
    projectid: string
  }

  export type projectTagCreateOrConnectWithoutTagInput = {
    where: projectTagWhereUniqueInput
    create: XOR<projectTagCreateWithoutTagInput, projectTagUncheckedCreateWithoutTagInput>
  }

  export type projectTagCreateManyTagInputEnvelope = {
    data: projectTagCreateManyTagInput | projectTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type userTagCreateWithoutTagInput = {
    user: userCreateNestedOneWithoutUserTagInput
  }

  export type userTagUncheckedCreateWithoutTagInput = {
    uid: string
  }

  export type userTagCreateOrConnectWithoutTagInput = {
    where: userTagWhereUniqueInput
    create: XOR<userTagCreateWithoutTagInput, userTagUncheckedCreateWithoutTagInput>
  }

  export type userTagCreateManyTagInputEnvelope = {
    data: userTagCreateManyTagInput | userTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type projectTagUpsertWithWhereUniqueWithoutTagInput = {
    where: projectTagWhereUniqueInput
    update: XOR<projectTagUpdateWithoutTagInput, projectTagUncheckedUpdateWithoutTagInput>
    create: XOR<projectTagCreateWithoutTagInput, projectTagUncheckedCreateWithoutTagInput>
  }

  export type projectTagUpdateWithWhereUniqueWithoutTagInput = {
    where: projectTagWhereUniqueInput
    data: XOR<projectTagUpdateWithoutTagInput, projectTagUncheckedUpdateWithoutTagInput>
  }

  export type projectTagUpdateManyWithWhereWithoutTagInput = {
    where: projectTagScalarWhereInput
    data: XOR<projectTagUpdateManyMutationInput, projectTagUncheckedUpdateManyWithoutTagInput>
  }

  export type userTagUpsertWithWhereUniqueWithoutTagInput = {
    where: userTagWhereUniqueInput
    update: XOR<userTagUpdateWithoutTagInput, userTagUncheckedUpdateWithoutTagInput>
    create: XOR<userTagCreateWithoutTagInput, userTagUncheckedCreateWithoutTagInput>
  }

  export type userTagUpdateWithWhereUniqueWithoutTagInput = {
    where: userTagWhereUniqueInput
    data: XOR<userTagUpdateWithoutTagInput, userTagUncheckedUpdateWithoutTagInput>
  }

  export type userTagUpdateManyWithWhereWithoutTagInput = {
    where: userTagScalarWhereInput
    data: XOR<userTagUpdateManyMutationInput, userTagUncheckedUpdateManyWithoutTagInput>
  }

  export type userTagScalarWhereInput = {
    AND?: userTagScalarWhereInput | userTagScalarWhereInput[]
    OR?: userTagScalarWhereInput[]
    NOT?: userTagScalarWhereInput | userTagScalarWhereInput[]
    uid?: UuidFilter<"userTag"> | string
    tagid?: UuidFilter<"userTag"> | string
  }

  export type projectCreateWithoutTeammemberInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutProjectInput
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutTeammemberInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutTeammemberInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutTeammemberInput, projectUncheckedCreateWithoutTeammemberInput>
  }

  export type userCreateWithoutTeammemberInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
    application?: applicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    repo?: repoCreateNestedManyWithoutUserInput
    userTag?: userTagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTeammemberInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    repo?: repoUncheckedCreateNestedManyWithoutUserInput
    userTag?: userTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTeammemberInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTeammemberInput, userUncheckedCreateWithoutTeammemberInput>
  }

  export type projectUpsertWithoutTeammemberInput = {
    update: XOR<projectUpdateWithoutTeammemberInput, projectUncheckedUpdateWithoutTeammemberInput>
    create: XOR<projectCreateWithoutTeammemberInput, projectUncheckedCreateWithoutTeammemberInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutTeammemberInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutTeammemberInput, projectUncheckedUpdateWithoutTeammemberInput>
  }

  export type projectUpdateWithoutTeammemberInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutTeammemberInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type userUpsertWithoutTeammemberInput = {
    update: XOR<userUpdateWithoutTeammemberInput, userUncheckedUpdateWithoutTeammemberInput>
    create: XOR<userCreateWithoutTeammemberInput, userUncheckedCreateWithoutTeammemberInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTeammemberInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTeammemberInput, userUncheckedUpdateWithoutTeammemberInput>
  }

  export type userUpdateWithoutTeammemberInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
    application?: applicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    repo?: repoUpdateManyWithoutUserNestedInput
    userTag?: userTagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTeammemberInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    repo?: repoUncheckedUpdateManyWithoutUserNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageCreateWithoutUserInput = {
    messageId?: string
    content: string
    createdAt?: Date | string
    project: projectCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    messageId?: string
    projectId: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type applicationCreateWithoutUserInput = {
    appid?: string
    coverletter?: string | null
    project: projectCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateWithoutUserInput = {
    appid?: string
    projectid: string
    coverletter?: string | null
  }

  export type applicationCreateOrConnectWithoutUserInput = {
    where: applicationWhereUniqueInput
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
  }

  export type applicationCreateManyUserInputEnvelope = {
    data: applicationCreateManyUserInput | applicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type donationCreateWithoutUserInput = {
    donationid?: string
    created_at?: Date | string | null
    project: projectCreateNestedOneWithoutDonationInput
  }

  export type donationUncheckedCreateWithoutUserInput = {
    donationid?: string
    projectid: string
    created_at?: Date | string | null
  }

  export type donationCreateOrConnectWithoutUserInput = {
    where: donationWhereUniqueInput
    create: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput>
  }

  export type donationCreateManyUserInputEnvelope = {
    data: donationCreateManyUserInput | donationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type repoCreateWithoutUserInput = {
    repoid?: string
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
    project?: projectCreateNestedManyWithoutRepoInput
  }

  export type repoUncheckedCreateWithoutUserInput = {
    repoid?: string
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
    project?: projectUncheckedCreateNestedManyWithoutRepoInput
  }

  export type repoCreateOrConnectWithoutUserInput = {
    where: repoWhereUniqueInput
    create: XOR<repoCreateWithoutUserInput, repoUncheckedCreateWithoutUserInput>
  }

  export type repoCreateManyUserInputEnvelope = {
    data: repoCreateManyUserInput | repoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type teammemberCreateWithoutUserInput = {
    role: string
    project: projectCreateNestedOneWithoutTeammemberInput
  }

  export type teammemberUncheckedCreateWithoutUserInput = {
    projectid: string
    role: string
  }

  export type teammemberCreateOrConnectWithoutUserInput = {
    where: teammemberWhereUniqueInput
    create: XOR<teammemberCreateWithoutUserInput, teammemberUncheckedCreateWithoutUserInput>
  }

  export type teammemberCreateManyUserInputEnvelope = {
    data: teammemberCreateManyUserInput | teammemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userTagCreateWithoutUserInput = {
    tag: tagCreateNestedOneWithoutUserTagInput
  }

  export type userTagUncheckedCreateWithoutUserInput = {
    tagid: string
  }

  export type userTagCreateOrConnectWithoutUserInput = {
    where: userTagWhereUniqueInput
    create: XOR<userTagCreateWithoutUserInput, userTagUncheckedCreateWithoutUserInput>
  }

  export type userTagCreateManyUserInputEnvelope = {
    data: userTagCreateManyUserInput | userTagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type applicationUpsertWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput
    update: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
  }

  export type applicationUpdateWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput
    data: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>
  }

  export type applicationUpdateManyWithWhereWithoutUserInput = {
    where: applicationScalarWhereInput
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutUserInput>
  }

  export type donationUpsertWithWhereUniqueWithoutUserInput = {
    where: donationWhereUniqueInput
    update: XOR<donationUpdateWithoutUserInput, donationUncheckedUpdateWithoutUserInput>
    create: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput>
  }

  export type donationUpdateWithWhereUniqueWithoutUserInput = {
    where: donationWhereUniqueInput
    data: XOR<donationUpdateWithoutUserInput, donationUncheckedUpdateWithoutUserInput>
  }

  export type donationUpdateManyWithWhereWithoutUserInput = {
    where: donationScalarWhereInput
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyWithoutUserInput>
  }

  export type repoUpsertWithWhereUniqueWithoutUserInput = {
    where: repoWhereUniqueInput
    update: XOR<repoUpdateWithoutUserInput, repoUncheckedUpdateWithoutUserInput>
    create: XOR<repoCreateWithoutUserInput, repoUncheckedCreateWithoutUserInput>
  }

  export type repoUpdateWithWhereUniqueWithoutUserInput = {
    where: repoWhereUniqueInput
    data: XOR<repoUpdateWithoutUserInput, repoUncheckedUpdateWithoutUserInput>
  }

  export type repoUpdateManyWithWhereWithoutUserInput = {
    where: repoScalarWhereInput
    data: XOR<repoUpdateManyMutationInput, repoUncheckedUpdateManyWithoutUserInput>
  }

  export type repoScalarWhereInput = {
    AND?: repoScalarWhereInput | repoScalarWhereInput[]
    OR?: repoScalarWhereInput[]
    NOT?: repoScalarWhereInput | repoScalarWhereInput[]
    repoid?: UuidFilter<"repo"> | string
    uid?: UuidNullableFilter<"repo"> | string | null
    name?: StringFilter<"repo"> | string
    url?: StringFilter<"repo"> | string
    description?: StringNullableFilter<"repo"> | string | null
    star?: IntNullableFilter<"repo"> | number | null
    fork?: IntNullableFilter<"repo"> | number | null
    last_updated?: DateTimeNullableFilter<"repo"> | Date | string | null
    language?: StringNullableFilter<"repo"> | string | null
    updated_at?: DateTimeNullableFilter<"repo"> | Date | string | null
  }

  export type teammemberUpsertWithWhereUniqueWithoutUserInput = {
    where: teammemberWhereUniqueInput
    update: XOR<teammemberUpdateWithoutUserInput, teammemberUncheckedUpdateWithoutUserInput>
    create: XOR<teammemberCreateWithoutUserInput, teammemberUncheckedCreateWithoutUserInput>
  }

  export type teammemberUpdateWithWhereUniqueWithoutUserInput = {
    where: teammemberWhereUniqueInput
    data: XOR<teammemberUpdateWithoutUserInput, teammemberUncheckedUpdateWithoutUserInput>
  }

  export type teammemberUpdateManyWithWhereWithoutUserInput = {
    where: teammemberScalarWhereInput
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyWithoutUserInput>
  }

  export type userTagUpsertWithWhereUniqueWithoutUserInput = {
    where: userTagWhereUniqueInput
    update: XOR<userTagUpdateWithoutUserInput, userTagUncheckedUpdateWithoutUserInput>
    create: XOR<userTagCreateWithoutUserInput, userTagUncheckedCreateWithoutUserInput>
  }

  export type userTagUpdateWithWhereUniqueWithoutUserInput = {
    where: userTagWhereUniqueInput
    data: XOR<userTagUpdateWithoutUserInput, userTagUncheckedUpdateWithoutUserInput>
  }

  export type userTagUpdateManyWithWhereWithoutUserInput = {
    where: userTagScalarWhereInput
    data: XOR<userTagUpdateManyMutationInput, userTagUncheckedUpdateManyWithoutUserInput>
  }

  export type tagCreateWithoutUserTagInput = {
    tagid?: string
    name: string
    projectTag?: projectTagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateWithoutUserTagInput = {
    tagid?: string
    name: string
    projectTag?: projectTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagCreateOrConnectWithoutUserTagInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutUserTagInput, tagUncheckedCreateWithoutUserTagInput>
  }

  export type userCreateWithoutUserTagInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
    application?: applicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    repo?: repoCreateNestedManyWithoutUserInput
    teammember?: teammemberCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserTagInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    repo?: repoUncheckedCreateNestedManyWithoutUserInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserTagInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserTagInput, userUncheckedCreateWithoutUserTagInput>
  }

  export type tagUpsertWithoutUserTagInput = {
    update: XOR<tagUpdateWithoutUserTagInput, tagUncheckedUpdateWithoutUserTagInput>
    create: XOR<tagCreateWithoutUserTagInput, tagUncheckedCreateWithoutUserTagInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutUserTagInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutUserTagInput, tagUncheckedUpdateWithoutUserTagInput>
  }

  export type tagUpdateWithoutUserTagInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectTag?: projectTagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateWithoutUserTagInput = {
    tagid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectTag?: projectTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type userUpsertWithoutUserTagInput = {
    update: XOR<userUpdateWithoutUserTagInput, userUncheckedUpdateWithoutUserTagInput>
    create: XOR<userCreateWithoutUserTagInput, userUncheckedCreateWithoutUserTagInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserTagInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserTagInput, userUncheckedUpdateWithoutUserTagInput>
  }

  export type userUpdateWithoutUserTagInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
    application?: applicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    repo?: repoUpdateManyWithoutUserNestedInput
    teammember?: teammemberUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserTagInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    repo?: repoUncheckedUpdateManyWithoutUserNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectCreateWithoutChatMessageInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    application?: applicationCreateNestedManyWithoutProjectInput
    donation?: donationCreateNestedManyWithoutProjectInput
    goal?: goalCreateNestedManyWithoutProjectInput
    license?: licenseCreateNestedOneWithoutProjectInput
    repo?: repoCreateNestedOneWithoutProjectInput
    projectTag?: projectTagCreateNestedManyWithoutProjectInput
    roadmap?: roadmapCreateNestedManyWithoutProjectInput
    teammember?: teammemberCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutChatMessageInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
    application?: applicationUncheckedCreateNestedManyWithoutProjectInput
    donation?: donationUncheckedCreateNestedManyWithoutProjectInput
    goal?: goalUncheckedCreateNestedManyWithoutProjectInput
    projectTag?: projectTagUncheckedCreateNestedManyWithoutProjectInput
    roadmap?: roadmapUncheckedCreateNestedManyWithoutProjectInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutChatMessageInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutChatMessageInput, projectUncheckedCreateWithoutChatMessageInput>
  }

  export type userCreateWithoutChatMessageInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    application?: applicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    repo?: repoCreateNestedManyWithoutUserInput
    teammember?: teammemberCreateNestedManyWithoutUserInput
    userTag?: userTagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutChatMessageInput = {
    uid?: string
    login: string
    name: string
    avatar?: string | null
    location?: string | null
    token: string
    bio?: string | null
    followers?: number | null
    following?: number | null
    public_repos?: number | null
    total_private_repos?: number | null
    html_url?: string | null
    last_updated?: Date | string | null
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    repo?: repoUncheckedCreateNestedManyWithoutUserInput
    teammember?: teammemberUncheckedCreateNestedManyWithoutUserInput
    userTag?: userTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutChatMessageInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChatMessageInput, userUncheckedCreateWithoutChatMessageInput>
  }

  export type projectUpsertWithoutChatMessageInput = {
    update: XOR<projectUpdateWithoutChatMessageInput, projectUncheckedUpdateWithoutChatMessageInput>
    create: XOR<projectCreateWithoutChatMessageInput, projectUncheckedCreateWithoutChatMessageInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutChatMessageInput, projectUncheckedUpdateWithoutChatMessageInput>
  }

  export type projectUpdateWithoutChatMessageInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutChatMessageInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type userUpsertWithoutChatMessageInput = {
    update: XOR<userUpdateWithoutChatMessageInput, userUncheckedUpdateWithoutChatMessageInput>
    create: XOR<userCreateWithoutChatMessageInput, userUncheckedCreateWithoutChatMessageInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChatMessageInput, userUncheckedUpdateWithoutChatMessageInput>
  }

  export type userUpdateWithoutChatMessageInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application?: applicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    repo?: repoUpdateManyWithoutUserNestedInput
    teammember?: teammemberUpdateManyWithoutUserNestedInput
    userTag?: userTagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutChatMessageInput = {
    uid?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableIntFieldUpdateOperationsInput | number | null
    public_repos?: NullableIntFieldUpdateOperationsInput | number | null
    total_private_repos?: NullableIntFieldUpdateOperationsInput | number | null
    html_url?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    repo?: repoUncheckedUpdateManyWithoutUserNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutUserNestedInput
    userTag?: userTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectCreateManyLicenseInput = {
    projectid?: string
    title: string
    description: string
    repoid?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type projectUpdateWithoutLicenseInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    repo?: repoUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutLicenseInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutLicenseInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    repoid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageCreateManyProjectInput = {
    messageId?: string
    login: string
    content: string
    createdAt?: Date | string
  }

  export type applicationCreateManyProjectInput = {
    appid?: string
    uid: string
    coverletter?: string | null
  }

  export type donationCreateManyProjectInput = {
    donationid?: string
    uid: string
    created_at?: Date | string | null
  }

  export type goalCreateManyProjectInput = {
    name: string
    goalid?: string
    description?: string | null
  }

  export type projectTagCreateManyProjectInput = {
    tagid: string
  }

  export type roadmapCreateManyProjectInput = {
    roadmap: string
    description: string
    status: string
  }

  export type teammemberCreateManyProjectInput = {
    uid: string
    role: string
  }

  export type ChatMessageUpdateWithoutProjectInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutProjectInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutProjectInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicationUpdateWithoutProjectInput = {
    appid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateWithoutProjectInput = {
    appid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type applicationUncheckedUpdateManyWithoutProjectInput = {
    appid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationUpdateWithoutProjectInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutDonationNestedInput
  }

  export type donationUncheckedUpdateWithoutProjectInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type donationUncheckedUpdateManyWithoutProjectInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type goalUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type goalUncheckedUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type goalUncheckedUpdateManyWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    goalid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectTagUpdateWithoutProjectInput = {
    tag?: tagUpdateOneRequiredWithoutProjectTagNestedInput
  }

  export type projectTagUncheckedUpdateWithoutProjectInput = {
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type projectTagUncheckedUpdateManyWithoutProjectInput = {
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type roadmapUpdateWithoutProjectInput = {
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type roadmapUncheckedUpdateWithoutProjectInput = {
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type roadmapUncheckedUpdateManyWithoutProjectInput = {
    roadmap?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUpdateWithoutProjectInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutTeammemberNestedInput
  }

  export type teammemberUncheckedUpdateWithoutProjectInput = {
    uid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUncheckedUpdateManyWithoutProjectInput = {
    uid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateManyRepoInput = {
    projectid?: string
    title: string
    description: string
    status?: string | null
    created_at?: Date | string | null
    licenseid?: string | null
  }

  export type projectUpdateWithoutRepoInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatMessage?: ChatMessageUpdateManyWithoutProjectNestedInput
    application?: applicationUpdateManyWithoutProjectNestedInput
    donation?: donationUpdateManyWithoutProjectNestedInput
    goal?: goalUpdateManyWithoutProjectNestedInput
    license?: licenseUpdateOneWithoutProjectNestedInput
    projectTag?: projectTagUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutRepoInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput
    application?: applicationUncheckedUpdateManyWithoutProjectNestedInput
    donation?: donationUncheckedUpdateManyWithoutProjectNestedInput
    goal?: goalUncheckedUpdateManyWithoutProjectNestedInput
    projectTag?: projectTagUncheckedUpdateManyWithoutProjectNestedInput
    roadmap?: roadmapUncheckedUpdateManyWithoutProjectNestedInput
    teammember?: teammemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutRepoInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    licenseid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectTagCreateManyTagInput = {
    projectid: string
  }

  export type userTagCreateManyTagInput = {
    uid: string
  }

  export type projectTagUpdateWithoutTagInput = {
    project?: projectUpdateOneRequiredWithoutProjectTagNestedInput
  }

  export type projectTagUncheckedUpdateWithoutTagInput = {
    projectid?: StringFieldUpdateOperationsInput | string
  }

  export type projectTagUncheckedUpdateManyWithoutTagInput = {
    projectid?: StringFieldUpdateOperationsInput | string
  }

  export type userTagUpdateWithoutTagInput = {
    user?: userUpdateOneRequiredWithoutUserTagNestedInput
  }

  export type userTagUncheckedUpdateWithoutTagInput = {
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type userTagUncheckedUpdateManyWithoutTagInput = {
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateManyUserInput = {
    messageId?: string
    projectId: string
    content: string
    createdAt?: Date | string
  }

  export type applicationCreateManyUserInput = {
    appid?: string
    projectid: string
    coverletter?: string | null
  }

  export type donationCreateManyUserInput = {
    donationid?: string
    projectid: string
    created_at?: Date | string | null
  }

  export type repoCreateManyUserInput = {
    repoid?: string
    name: string
    url: string
    description?: string | null
    star?: number | null
    fork?: number | null
    last_updated?: Date | string | null
    language?: string | null
    updated_at?: Date | string | null
  }

  export type teammemberCreateManyUserInput = {
    projectid: string
    role: string
  }

  export type userTagCreateManyUserInput = {
    tagid: string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicationUpdateWithoutUserInput = {
    appid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateWithoutUserInput = {
    appid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type applicationUncheckedUpdateManyWithoutUserInput = {
    appid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    coverletter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationUpdateWithoutUserInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: projectUpdateOneRequiredWithoutDonationNestedInput
  }

  export type donationUncheckedUpdateWithoutUserInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type donationUncheckedUpdateManyWithoutUserInput = {
    donationid?: StringFieldUpdateOperationsInput | string
    projectid?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type repoUpdateWithoutUserInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: projectUpdateManyWithoutRepoNestedInput
  }

  export type repoUncheckedUpdateWithoutUserInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: projectUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type repoUncheckedUpdateManyWithoutUserInput = {
    repoid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableIntFieldUpdateOperationsInput | number | null
    fork?: NullableIntFieldUpdateOperationsInput | number | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teammemberUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    project?: projectUpdateOneRequiredWithoutTeammemberNestedInput
  }

  export type teammemberUncheckedUpdateWithoutUserInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUncheckedUpdateManyWithoutUserInput = {
    projectid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userTagUpdateWithoutUserInput = {
    tag?: tagUpdateOneRequiredWithoutUserTagNestedInput
  }

  export type userTagUncheckedUpdateWithoutUserInput = {
    tagid?: StringFieldUpdateOperationsInput | string
  }

  export type userTagUncheckedUpdateManyWithoutUserInput = {
    tagid?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}