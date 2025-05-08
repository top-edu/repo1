
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
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model commoncontents
 * 
 */
export type commoncontents = $Result.DefaultSelection<Prisma.$commoncontentsPayload>
/**
 * Model credithistory
 * 
 */
export type credithistory = $Result.DefaultSelection<Prisma.$credithistoryPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model people
 * 
 */
export type people = $Result.DefaultSelection<Prisma.$peoplePayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model userquestions
 * 
 */
export type userquestions = $Result.DefaultSelection<Prisma.$userquestionsPayload>
/**
 * Model userquestionsets
 * 
 */
export type userquestionsets = $Result.DefaultSelection<Prisma.$userquestionsetsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
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
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commoncontents`: Exposes CRUD operations for the **commoncontents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commoncontents
    * const commoncontents = await prisma.commoncontents.findMany()
    * ```
    */
  get commoncontents(): Prisma.commoncontentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credithistory`: Exposes CRUD operations for the **credithistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credithistories
    * const credithistories = await prisma.credithistory.findMany()
    * ```
    */
  get credithistory(): Prisma.credithistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.people`: Exposes CRUD operations for the **people** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.people.findMany()
    * ```
    */
  get people(): Prisma.peopleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userquestions`: Exposes CRUD operations for the **userquestions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userquestions
    * const userquestions = await prisma.userquestions.findMany()
    * ```
    */
  get userquestions(): Prisma.userquestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userquestionsets`: Exposes CRUD operations for the **userquestionsets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userquestionsets
    * const userquestionsets = await prisma.userquestionsets.findMany()
    * ```
    */
  get userquestionsets(): Prisma.userquestionsetsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    categories: 'categories',
    commoncontents: 'commoncontents',
    credithistory: 'credithistory',
    messages: 'messages',
    people: 'people',
    questions: 'questions',
    userquestions: 'userquestions',
    userquestionsets: 'userquestionsets'
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
      modelProps: "categories" | "commoncontents" | "credithistory" | "messages" | "people" | "questions" | "userquestions" | "userquestionsets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      commoncontents: {
        payload: Prisma.$commoncontentsPayload<ExtArgs>
        fields: Prisma.commoncontentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commoncontentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commoncontentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>
          }
          findFirst: {
            args: Prisma.commoncontentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commoncontentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>
          }
          findMany: {
            args: Prisma.commoncontentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>[]
          }
          create: {
            args: Prisma.commoncontentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>
          }
          createMany: {
            args: Prisma.commoncontentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commoncontentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>
          }
          update: {
            args: Prisma.commoncontentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>
          }
          deleteMany: {
            args: Prisma.commoncontentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commoncontentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commoncontentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commoncontentsPayload>
          }
          aggregate: {
            args: Prisma.CommoncontentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommoncontents>
          }
          groupBy: {
            args: Prisma.commoncontentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommoncontentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commoncontentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommoncontentsCountAggregateOutputType> | number
          }
        }
      }
      credithistory: {
        payload: Prisma.$credithistoryPayload<ExtArgs>
        fields: Prisma.credithistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.credithistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.credithistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>
          }
          findFirst: {
            args: Prisma.credithistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.credithistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>
          }
          findMany: {
            args: Prisma.credithistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>[]
          }
          create: {
            args: Prisma.credithistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>
          }
          createMany: {
            args: Prisma.credithistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.credithistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>
          }
          update: {
            args: Prisma.credithistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>
          }
          deleteMany: {
            args: Prisma.credithistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.credithistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.credithistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credithistoryPayload>
          }
          aggregate: {
            args: Prisma.CredithistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredithistory>
          }
          groupBy: {
            args: Prisma.credithistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredithistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.credithistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CredithistoryCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      people: {
        payload: Prisma.$peoplePayload<ExtArgs>
        fields: Prisma.peopleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peopleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peopleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>
          }
          findFirst: {
            args: Prisma.peopleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peopleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>
          }
          findMany: {
            args: Prisma.peopleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>[]
          }
          create: {
            args: Prisma.peopleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>
          }
          createMany: {
            args: Prisma.peopleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.peopleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>
          }
          update: {
            args: Prisma.peopleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>
          }
          deleteMany: {
            args: Prisma.peopleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peopleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.peopleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplePayload>
          }
          aggregate: {
            args: Prisma.PeopleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeople>
          }
          groupBy: {
            args: Prisma.peopleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeopleGroupByOutputType>[]
          }
          count: {
            args: Prisma.peopleCountArgs<ExtArgs>
            result: $Utils.Optional<PeopleCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      userquestions: {
        payload: Prisma.$userquestionsPayload<ExtArgs>
        fields: Prisma.userquestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userquestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userquestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>
          }
          findFirst: {
            args: Prisma.userquestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userquestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>
          }
          findMany: {
            args: Prisma.userquestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>[]
          }
          create: {
            args: Prisma.userquestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>
          }
          createMany: {
            args: Prisma.userquestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userquestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>
          }
          update: {
            args: Prisma.userquestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>
          }
          deleteMany: {
            args: Prisma.userquestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userquestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userquestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsPayload>
          }
          aggregate: {
            args: Prisma.UserquestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserquestions>
          }
          groupBy: {
            args: Prisma.userquestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserquestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.userquestionsCountArgs<ExtArgs>
            result: $Utils.Optional<UserquestionsCountAggregateOutputType> | number
          }
        }
      }
      userquestionsets: {
        payload: Prisma.$userquestionsetsPayload<ExtArgs>
        fields: Prisma.userquestionsetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userquestionsetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userquestionsetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>
          }
          findFirst: {
            args: Prisma.userquestionsetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userquestionsetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>
          }
          findMany: {
            args: Prisma.userquestionsetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>[]
          }
          create: {
            args: Prisma.userquestionsetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>
          }
          createMany: {
            args: Prisma.userquestionsetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userquestionsetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>
          }
          update: {
            args: Prisma.userquestionsetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>
          }
          deleteMany: {
            args: Prisma.userquestionsetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userquestionsetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userquestionsetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userquestionsetsPayload>
          }
          aggregate: {
            args: Prisma.UserquestionsetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserquestionsets>
          }
          groupBy: {
            args: Prisma.userquestionsetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserquestionsetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.userquestionsetsCountArgs<ExtArgs>
            result: $Utils.Optional<UserquestionsetsCountAggregateOutputType> | number
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
    categories?: categoriesOmit
    commoncontents?: commoncontentsOmit
    credithistory?: credithistoryOmit
    messages?: messagesOmit
    people?: peopleOmit
    questions?: questionsOmit
    userquestions?: userquestionsOmit
    userquestionsets?: userquestionsetsOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    questions: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | CategoriesCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type CommoncontentsCountOutputType
   */

  export type CommoncontentsCountOutputType = {
    questions: number
  }

  export type CommoncontentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | CommoncontentsCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * CommoncontentsCountOutputType without action
   */
  export type CommoncontentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommoncontentsCountOutputType
     */
    select?: CommoncontentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommoncontentsCountOutputType without action
   */
  export type CommoncontentsCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type PeopleCountOutputType
   */

  export type PeopleCountOutputType = {
    credithistory_credithistory_addedCreditsFromUserIdTopeople: number
    credithistory_credithistory_userIdTopeople: number
    credithistory_credithistory_addedCreditsToUserIdTopeople: number
    messages_messages_fromIdTopeople: number
    messages_messages_toIdTopeople: number
    userquestions: number
    userquestionsets: number
  }

  export type PeopleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: boolean | PeopleCountOutputTypeCountCredithistory_credithistory_addedCreditsFromUserIdTopeopleArgs
    credithistory_credithistory_userIdTopeople?: boolean | PeopleCountOutputTypeCountCredithistory_credithistory_userIdTopeopleArgs
    credithistory_credithistory_addedCreditsToUserIdTopeople?: boolean | PeopleCountOutputTypeCountCredithistory_credithistory_addedCreditsToUserIdTopeopleArgs
    messages_messages_fromIdTopeople?: boolean | PeopleCountOutputTypeCountMessages_messages_fromIdTopeopleArgs
    messages_messages_toIdTopeople?: boolean | PeopleCountOutputTypeCountMessages_messages_toIdTopeopleArgs
    userquestions?: boolean | PeopleCountOutputTypeCountUserquestionsArgs
    userquestionsets?: boolean | PeopleCountOutputTypeCountUserquestionsetsArgs
  }

  // Custom InputTypes
  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleCountOutputType
     */
    select?: PeopleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountCredithistory_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credithistoryWhereInput
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountCredithistory_credithistory_userIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credithistoryWhereInput
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountCredithistory_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credithistoryWhereInput
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountMessages_messages_fromIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountMessages_messages_toIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountUserquestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userquestionsWhereInput
  }

  /**
   * PeopleCountOutputType without action
   */
  export type PeopleCountOutputTypeCountUserquestionsetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userquestionsetsWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    messages: number
    userquestions: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | QuestionsCountOutputTypeCountMessagesArgs
    userquestions?: boolean | QuestionsCountOutputTypeCountUserquestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountUserquestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userquestionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    category: string | null
    type: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    category: string | null
    type: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    category: number
    type: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    category?: true
    type?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    category?: true
    type?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    category?: true
    type?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    category: string
    type: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    type?: boolean
    questions?: boolean | categories$questionsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    id?: boolean
    category?: boolean
    type?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "type", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | categories$questionsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      type: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends categories$questionsArgs<ExtArgs> = {}>(args?: Subset<T, categories$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly category: FieldRef<"categories", 'String'>
    readonly type: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.questions
   */
  export type categories$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model commoncontents
   */

  export type AggregateCommoncontents = {
    _count: CommoncontentsCountAggregateOutputType | null
    _avg: CommoncontentsAvgAggregateOutputType | null
    _sum: CommoncontentsSumAggregateOutputType | null
    _min: CommoncontentsMinAggregateOutputType | null
    _max: CommoncontentsMaxAggregateOutputType | null
  }

  export type CommoncontentsAvgAggregateOutputType = {
    id: number | null
  }

  export type CommoncontentsSumAggregateOutputType = {
    id: number | null
  }

  export type CommoncontentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    lastModifiedTime: Date | null
  }

  export type CommoncontentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    lastModifiedTime: Date | null
  }

  export type CommoncontentsCountAggregateOutputType = {
    id: number
    content: number
    lastModifiedTime: number
    _all: number
  }


  export type CommoncontentsAvgAggregateInputType = {
    id?: true
  }

  export type CommoncontentsSumAggregateInputType = {
    id?: true
  }

  export type CommoncontentsMinAggregateInputType = {
    id?: true
    content?: true
    lastModifiedTime?: true
  }

  export type CommoncontentsMaxAggregateInputType = {
    id?: true
    content?: true
    lastModifiedTime?: true
  }

  export type CommoncontentsCountAggregateInputType = {
    id?: true
    content?: true
    lastModifiedTime?: true
    _all?: true
  }

  export type CommoncontentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commoncontents to aggregate.
     */
    where?: commoncontentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commoncontents to fetch.
     */
    orderBy?: commoncontentsOrderByWithRelationInput | commoncontentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commoncontentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commoncontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commoncontents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commoncontents
    **/
    _count?: true | CommoncontentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommoncontentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommoncontentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommoncontentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommoncontentsMaxAggregateInputType
  }

  export type GetCommoncontentsAggregateType<T extends CommoncontentsAggregateArgs> = {
        [P in keyof T & keyof AggregateCommoncontents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommoncontents[P]>
      : GetScalarType<T[P], AggregateCommoncontents[P]>
  }




  export type commoncontentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commoncontentsWhereInput
    orderBy?: commoncontentsOrderByWithAggregationInput | commoncontentsOrderByWithAggregationInput[]
    by: CommoncontentsScalarFieldEnum[] | CommoncontentsScalarFieldEnum
    having?: commoncontentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommoncontentsCountAggregateInputType | true
    _avg?: CommoncontentsAvgAggregateInputType
    _sum?: CommoncontentsSumAggregateInputType
    _min?: CommoncontentsMinAggregateInputType
    _max?: CommoncontentsMaxAggregateInputType
  }

  export type CommoncontentsGroupByOutputType = {
    id: number
    content: string
    lastModifiedTime: Date
    _count: CommoncontentsCountAggregateOutputType | null
    _avg: CommoncontentsAvgAggregateOutputType | null
    _sum: CommoncontentsSumAggregateOutputType | null
    _min: CommoncontentsMinAggregateOutputType | null
    _max: CommoncontentsMaxAggregateOutputType | null
  }

  type GetCommoncontentsGroupByPayload<T extends commoncontentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommoncontentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommoncontentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommoncontentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommoncontentsGroupByOutputType[P]>
        }
      >
    >


  export type commoncontentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    lastModifiedTime?: boolean
    questions?: boolean | commoncontents$questionsArgs<ExtArgs>
    _count?: boolean | CommoncontentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commoncontents"]>



  export type commoncontentsSelectScalar = {
    id?: boolean
    content?: boolean
    lastModifiedTime?: boolean
  }

  export type commoncontentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "lastModifiedTime", ExtArgs["result"]["commoncontents"]>
  export type commoncontentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | commoncontents$questionsArgs<ExtArgs>
    _count?: boolean | CommoncontentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $commoncontentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "commoncontents"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      lastModifiedTime: Date
    }, ExtArgs["result"]["commoncontents"]>
    composites: {}
  }

  type commoncontentsGetPayload<S extends boolean | null | undefined | commoncontentsDefaultArgs> = $Result.GetResult<Prisma.$commoncontentsPayload, S>

  type commoncontentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commoncontentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommoncontentsCountAggregateInputType | true
    }

  export interface commoncontentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['commoncontents'], meta: { name: 'commoncontents' } }
    /**
     * Find zero or one Commoncontents that matches the filter.
     * @param {commoncontentsFindUniqueArgs} args - Arguments to find a Commoncontents
     * @example
     * // Get one Commoncontents
     * const commoncontents = await prisma.commoncontents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commoncontentsFindUniqueArgs>(args: SelectSubset<T, commoncontentsFindUniqueArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commoncontents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commoncontentsFindUniqueOrThrowArgs} args - Arguments to find a Commoncontents
     * @example
     * // Get one Commoncontents
     * const commoncontents = await prisma.commoncontents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commoncontentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commoncontentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commoncontents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commoncontentsFindFirstArgs} args - Arguments to find a Commoncontents
     * @example
     * // Get one Commoncontents
     * const commoncontents = await prisma.commoncontents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commoncontentsFindFirstArgs>(args?: SelectSubset<T, commoncontentsFindFirstArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commoncontents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commoncontentsFindFirstOrThrowArgs} args - Arguments to find a Commoncontents
     * @example
     * // Get one Commoncontents
     * const commoncontents = await prisma.commoncontents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commoncontentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commoncontentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commoncontents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commoncontentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commoncontents
     * const commoncontents = await prisma.commoncontents.findMany()
     * 
     * // Get first 10 Commoncontents
     * const commoncontents = await prisma.commoncontents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commoncontentsWithIdOnly = await prisma.commoncontents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commoncontentsFindManyArgs>(args?: SelectSubset<T, commoncontentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commoncontents.
     * @param {commoncontentsCreateArgs} args - Arguments to create a Commoncontents.
     * @example
     * // Create one Commoncontents
     * const Commoncontents = await prisma.commoncontents.create({
     *   data: {
     *     // ... data to create a Commoncontents
     *   }
     * })
     * 
     */
    create<T extends commoncontentsCreateArgs>(args: SelectSubset<T, commoncontentsCreateArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commoncontents.
     * @param {commoncontentsCreateManyArgs} args - Arguments to create many Commoncontents.
     * @example
     * // Create many Commoncontents
     * const commoncontents = await prisma.commoncontents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commoncontentsCreateManyArgs>(args?: SelectSubset<T, commoncontentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commoncontents.
     * @param {commoncontentsDeleteArgs} args - Arguments to delete one Commoncontents.
     * @example
     * // Delete one Commoncontents
     * const Commoncontents = await prisma.commoncontents.delete({
     *   where: {
     *     // ... filter to delete one Commoncontents
     *   }
     * })
     * 
     */
    delete<T extends commoncontentsDeleteArgs>(args: SelectSubset<T, commoncontentsDeleteArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commoncontents.
     * @param {commoncontentsUpdateArgs} args - Arguments to update one Commoncontents.
     * @example
     * // Update one Commoncontents
     * const commoncontents = await prisma.commoncontents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commoncontentsUpdateArgs>(args: SelectSubset<T, commoncontentsUpdateArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commoncontents.
     * @param {commoncontentsDeleteManyArgs} args - Arguments to filter Commoncontents to delete.
     * @example
     * // Delete a few Commoncontents
     * const { count } = await prisma.commoncontents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commoncontentsDeleteManyArgs>(args?: SelectSubset<T, commoncontentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commoncontents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commoncontentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commoncontents
     * const commoncontents = await prisma.commoncontents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commoncontentsUpdateManyArgs>(args: SelectSubset<T, commoncontentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commoncontents.
     * @param {commoncontentsUpsertArgs} args - Arguments to update or create a Commoncontents.
     * @example
     * // Update or create a Commoncontents
     * const commoncontents = await prisma.commoncontents.upsert({
     *   create: {
     *     // ... data to create a Commoncontents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commoncontents we want to update
     *   }
     * })
     */
    upsert<T extends commoncontentsUpsertArgs>(args: SelectSubset<T, commoncontentsUpsertArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commoncontents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commoncontentsCountArgs} args - Arguments to filter Commoncontents to count.
     * @example
     * // Count the number of Commoncontents
     * const count = await prisma.commoncontents.count({
     *   where: {
     *     // ... the filter for the Commoncontents we want to count
     *   }
     * })
    **/
    count<T extends commoncontentsCountArgs>(
      args?: Subset<T, commoncontentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommoncontentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commoncontents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommoncontentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommoncontentsAggregateArgs>(args: Subset<T, CommoncontentsAggregateArgs>): Prisma.PrismaPromise<GetCommoncontentsAggregateType<T>>

    /**
     * Group by Commoncontents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commoncontentsGroupByArgs} args - Group by arguments.
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
      T extends commoncontentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commoncontentsGroupByArgs['orderBy'] }
        : { orderBy?: commoncontentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commoncontentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommoncontentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the commoncontents model
   */
  readonly fields: commoncontentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for commoncontents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commoncontentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends commoncontents$questionsArgs<ExtArgs> = {}>(args?: Subset<T, commoncontents$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the commoncontents model
   */
  interface commoncontentsFieldRefs {
    readonly id: FieldRef<"commoncontents", 'Int'>
    readonly content: FieldRef<"commoncontents", 'String'>
    readonly lastModifiedTime: FieldRef<"commoncontents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * commoncontents findUnique
   */
  export type commoncontentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * Filter, which commoncontents to fetch.
     */
    where: commoncontentsWhereUniqueInput
  }

  /**
   * commoncontents findUniqueOrThrow
   */
  export type commoncontentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * Filter, which commoncontents to fetch.
     */
    where: commoncontentsWhereUniqueInput
  }

  /**
   * commoncontents findFirst
   */
  export type commoncontentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * Filter, which commoncontents to fetch.
     */
    where?: commoncontentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commoncontents to fetch.
     */
    orderBy?: commoncontentsOrderByWithRelationInput | commoncontentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commoncontents.
     */
    cursor?: commoncontentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commoncontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commoncontents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commoncontents.
     */
    distinct?: CommoncontentsScalarFieldEnum | CommoncontentsScalarFieldEnum[]
  }

  /**
   * commoncontents findFirstOrThrow
   */
  export type commoncontentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * Filter, which commoncontents to fetch.
     */
    where?: commoncontentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commoncontents to fetch.
     */
    orderBy?: commoncontentsOrderByWithRelationInput | commoncontentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commoncontents.
     */
    cursor?: commoncontentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commoncontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commoncontents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commoncontents.
     */
    distinct?: CommoncontentsScalarFieldEnum | CommoncontentsScalarFieldEnum[]
  }

  /**
   * commoncontents findMany
   */
  export type commoncontentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * Filter, which commoncontents to fetch.
     */
    where?: commoncontentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commoncontents to fetch.
     */
    orderBy?: commoncontentsOrderByWithRelationInput | commoncontentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commoncontents.
     */
    cursor?: commoncontentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commoncontents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commoncontents.
     */
    skip?: number
    distinct?: CommoncontentsScalarFieldEnum | CommoncontentsScalarFieldEnum[]
  }

  /**
   * commoncontents create
   */
  export type commoncontentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * The data needed to create a commoncontents.
     */
    data: XOR<commoncontentsCreateInput, commoncontentsUncheckedCreateInput>
  }

  /**
   * commoncontents createMany
   */
  export type commoncontentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many commoncontents.
     */
    data: commoncontentsCreateManyInput | commoncontentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * commoncontents update
   */
  export type commoncontentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * The data needed to update a commoncontents.
     */
    data: XOR<commoncontentsUpdateInput, commoncontentsUncheckedUpdateInput>
    /**
     * Choose, which commoncontents to update.
     */
    where: commoncontentsWhereUniqueInput
  }

  /**
   * commoncontents updateMany
   */
  export type commoncontentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update commoncontents.
     */
    data: XOR<commoncontentsUpdateManyMutationInput, commoncontentsUncheckedUpdateManyInput>
    /**
     * Filter which commoncontents to update
     */
    where?: commoncontentsWhereInput
    /**
     * Limit how many commoncontents to update.
     */
    limit?: number
  }

  /**
   * commoncontents upsert
   */
  export type commoncontentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * The filter to search for the commoncontents to update in case it exists.
     */
    where: commoncontentsWhereUniqueInput
    /**
     * In case the commoncontents found by the `where` argument doesn't exist, create a new commoncontents with this data.
     */
    create: XOR<commoncontentsCreateInput, commoncontentsUncheckedCreateInput>
    /**
     * In case the commoncontents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commoncontentsUpdateInput, commoncontentsUncheckedUpdateInput>
  }

  /**
   * commoncontents delete
   */
  export type commoncontentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    /**
     * Filter which commoncontents to delete.
     */
    where: commoncontentsWhereUniqueInput
  }

  /**
   * commoncontents deleteMany
   */
  export type commoncontentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commoncontents to delete
     */
    where?: commoncontentsWhereInput
    /**
     * Limit how many commoncontents to delete.
     */
    limit?: number
  }

  /**
   * commoncontents.questions
   */
  export type commoncontents$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * commoncontents without action
   */
  export type commoncontentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
  }


  /**
   * Model credithistory
   */

  export type AggregateCredithistory = {
    _count: CredithistoryCountAggregateOutputType | null
    _avg: CredithistoryAvgAggregateOutputType | null
    _sum: CredithistorySumAggregateOutputType | null
    _min: CredithistoryMinAggregateOutputType | null
    _max: CredithistoryMaxAggregateOutputType | null
  }

  export type CredithistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    deductedCredits: number | null
    addedCredits: number | null
    addedCreditsFromUserId: number | null
    addedCreditsToUserId: number | null
  }

  export type CredithistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    deductedCredits: number | null
    addedCredits: number | null
    addedCreditsFromUserId: number | null
    addedCreditsToUserId: number | null
  }

  export type CredithistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    deductedCredits: number | null
    addedCredits: number | null
    addedCreditsFromUserId: number | null
    addedCreditsToUserId: number | null
    description: string | null
    lastModifiedTime: Date | null
  }

  export type CredithistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    deductedCredits: number | null
    addedCredits: number | null
    addedCreditsFromUserId: number | null
    addedCreditsToUserId: number | null
    description: string | null
    lastModifiedTime: Date | null
  }

  export type CredithistoryCountAggregateOutputType = {
    id: number
    userId: number
    deductedCredits: number
    addedCredits: number
    addedCreditsFromUserId: number
    addedCreditsToUserId: number
    description: number
    lastModifiedTime: number
    _all: number
  }


  export type CredithistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    deductedCredits?: true
    addedCredits?: true
    addedCreditsFromUserId?: true
    addedCreditsToUserId?: true
  }

  export type CredithistorySumAggregateInputType = {
    id?: true
    userId?: true
    deductedCredits?: true
    addedCredits?: true
    addedCreditsFromUserId?: true
    addedCreditsToUserId?: true
  }

  export type CredithistoryMinAggregateInputType = {
    id?: true
    userId?: true
    deductedCredits?: true
    addedCredits?: true
    addedCreditsFromUserId?: true
    addedCreditsToUserId?: true
    description?: true
    lastModifiedTime?: true
  }

  export type CredithistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    deductedCredits?: true
    addedCredits?: true
    addedCreditsFromUserId?: true
    addedCreditsToUserId?: true
    description?: true
    lastModifiedTime?: true
  }

  export type CredithistoryCountAggregateInputType = {
    id?: true
    userId?: true
    deductedCredits?: true
    addedCredits?: true
    addedCreditsFromUserId?: true
    addedCreditsToUserId?: true
    description?: true
    lastModifiedTime?: true
    _all?: true
  }

  export type CredithistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credithistory to aggregate.
     */
    where?: credithistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credithistories to fetch.
     */
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: credithistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credithistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credithistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned credithistories
    **/
    _count?: true | CredithistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CredithistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CredithistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredithistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredithistoryMaxAggregateInputType
  }

  export type GetCredithistoryAggregateType<T extends CredithistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCredithistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredithistory[P]>
      : GetScalarType<T[P], AggregateCredithistory[P]>
  }




  export type credithistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credithistoryWhereInput
    orderBy?: credithistoryOrderByWithAggregationInput | credithistoryOrderByWithAggregationInput[]
    by: CredithistoryScalarFieldEnum[] | CredithistoryScalarFieldEnum
    having?: credithistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredithistoryCountAggregateInputType | true
    _avg?: CredithistoryAvgAggregateInputType
    _sum?: CredithistorySumAggregateInputType
    _min?: CredithistoryMinAggregateInputType
    _max?: CredithistoryMaxAggregateInputType
  }

  export type CredithistoryGroupByOutputType = {
    id: number
    userId: number
    deductedCredits: number | null
    addedCredits: number | null
    addedCreditsFromUserId: number | null
    addedCreditsToUserId: number | null
    description: string | null
    lastModifiedTime: Date
    _count: CredithistoryCountAggregateOutputType | null
    _avg: CredithistoryAvgAggregateOutputType | null
    _sum: CredithistorySumAggregateOutputType | null
    _min: CredithistoryMinAggregateOutputType | null
    _max: CredithistoryMaxAggregateOutputType | null
  }

  type GetCredithistoryGroupByPayload<T extends credithistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredithistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredithistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredithistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CredithistoryGroupByOutputType[P]>
        }
      >
    >


  export type credithistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deductedCredits?: boolean
    addedCredits?: boolean
    addedCreditsFromUserId?: boolean
    addedCreditsToUserId?: boolean
    description?: boolean
    lastModifiedTime?: boolean
    people_credithistory_addedCreditsFromUserIdTopeople?: boolean | credithistory$people_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs>
    people_credithistory_userIdTopeople?: boolean | peopleDefaultArgs<ExtArgs>
    people_credithistory_addedCreditsToUserIdTopeople?: boolean | credithistory$people_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs>
  }, ExtArgs["result"]["credithistory"]>



  export type credithistorySelectScalar = {
    id?: boolean
    userId?: boolean
    deductedCredits?: boolean
    addedCredits?: boolean
    addedCreditsFromUserId?: boolean
    addedCreditsToUserId?: boolean
    description?: boolean
    lastModifiedTime?: boolean
  }

  export type credithistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deductedCredits" | "addedCredits" | "addedCreditsFromUserId" | "addedCreditsToUserId" | "description" | "lastModifiedTime", ExtArgs["result"]["credithistory"]>
  export type credithistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people_credithistory_addedCreditsFromUserIdTopeople?: boolean | credithistory$people_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs>
    people_credithistory_userIdTopeople?: boolean | peopleDefaultArgs<ExtArgs>
    people_credithistory_addedCreditsToUserIdTopeople?: boolean | credithistory$people_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs>
  }

  export type $credithistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "credithistory"
    objects: {
      people_credithistory_addedCreditsFromUserIdTopeople: Prisma.$peoplePayload<ExtArgs> | null
      people_credithistory_userIdTopeople: Prisma.$peoplePayload<ExtArgs>
      people_credithistory_addedCreditsToUserIdTopeople: Prisma.$peoplePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      deductedCredits: number | null
      addedCredits: number | null
      addedCreditsFromUserId: number | null
      addedCreditsToUserId: number | null
      description: string | null
      lastModifiedTime: Date
    }, ExtArgs["result"]["credithistory"]>
    composites: {}
  }

  type credithistoryGetPayload<S extends boolean | null | undefined | credithistoryDefaultArgs> = $Result.GetResult<Prisma.$credithistoryPayload, S>

  type credithistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<credithistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredithistoryCountAggregateInputType | true
    }

  export interface credithistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['credithistory'], meta: { name: 'credithistory' } }
    /**
     * Find zero or one Credithistory that matches the filter.
     * @param {credithistoryFindUniqueArgs} args - Arguments to find a Credithistory
     * @example
     * // Get one Credithistory
     * const credithistory = await prisma.credithistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends credithistoryFindUniqueArgs>(args: SelectSubset<T, credithistoryFindUniqueArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credithistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {credithistoryFindUniqueOrThrowArgs} args - Arguments to find a Credithistory
     * @example
     * // Get one Credithistory
     * const credithistory = await prisma.credithistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends credithistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, credithistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credithistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credithistoryFindFirstArgs} args - Arguments to find a Credithistory
     * @example
     * // Get one Credithistory
     * const credithistory = await prisma.credithistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends credithistoryFindFirstArgs>(args?: SelectSubset<T, credithistoryFindFirstArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credithistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credithistoryFindFirstOrThrowArgs} args - Arguments to find a Credithistory
     * @example
     * // Get one Credithistory
     * const credithistory = await prisma.credithistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends credithistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, credithistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credithistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credithistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credithistories
     * const credithistories = await prisma.credithistory.findMany()
     * 
     * // Get first 10 Credithistories
     * const credithistories = await prisma.credithistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credithistoryWithIdOnly = await prisma.credithistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends credithistoryFindManyArgs>(args?: SelectSubset<T, credithistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credithistory.
     * @param {credithistoryCreateArgs} args - Arguments to create a Credithistory.
     * @example
     * // Create one Credithistory
     * const Credithistory = await prisma.credithistory.create({
     *   data: {
     *     // ... data to create a Credithistory
     *   }
     * })
     * 
     */
    create<T extends credithistoryCreateArgs>(args: SelectSubset<T, credithistoryCreateArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credithistories.
     * @param {credithistoryCreateManyArgs} args - Arguments to create many Credithistories.
     * @example
     * // Create many Credithistories
     * const credithistory = await prisma.credithistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends credithistoryCreateManyArgs>(args?: SelectSubset<T, credithistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Credithistory.
     * @param {credithistoryDeleteArgs} args - Arguments to delete one Credithistory.
     * @example
     * // Delete one Credithistory
     * const Credithistory = await prisma.credithistory.delete({
     *   where: {
     *     // ... filter to delete one Credithistory
     *   }
     * })
     * 
     */
    delete<T extends credithistoryDeleteArgs>(args: SelectSubset<T, credithistoryDeleteArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credithistory.
     * @param {credithistoryUpdateArgs} args - Arguments to update one Credithistory.
     * @example
     * // Update one Credithistory
     * const credithistory = await prisma.credithistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends credithistoryUpdateArgs>(args: SelectSubset<T, credithistoryUpdateArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credithistories.
     * @param {credithistoryDeleteManyArgs} args - Arguments to filter Credithistories to delete.
     * @example
     * // Delete a few Credithistories
     * const { count } = await prisma.credithistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends credithistoryDeleteManyArgs>(args?: SelectSubset<T, credithistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credithistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credithistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credithistories
     * const credithistory = await prisma.credithistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends credithistoryUpdateManyArgs>(args: SelectSubset<T, credithistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Credithistory.
     * @param {credithistoryUpsertArgs} args - Arguments to update or create a Credithistory.
     * @example
     * // Update or create a Credithistory
     * const credithistory = await prisma.credithistory.upsert({
     *   create: {
     *     // ... data to create a Credithistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credithistory we want to update
     *   }
     * })
     */
    upsert<T extends credithistoryUpsertArgs>(args: SelectSubset<T, credithistoryUpsertArgs<ExtArgs>>): Prisma__credithistoryClient<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credithistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credithistoryCountArgs} args - Arguments to filter Credithistories to count.
     * @example
     * // Count the number of Credithistories
     * const count = await prisma.credithistory.count({
     *   where: {
     *     // ... the filter for the Credithistories we want to count
     *   }
     * })
    **/
    count<T extends credithistoryCountArgs>(
      args?: Subset<T, credithistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredithistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credithistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredithistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredithistoryAggregateArgs>(args: Subset<T, CredithistoryAggregateArgs>): Prisma.PrismaPromise<GetCredithistoryAggregateType<T>>

    /**
     * Group by Credithistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credithistoryGroupByArgs} args - Group by arguments.
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
      T extends credithistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: credithistoryGroupByArgs['orderBy'] }
        : { orderBy?: credithistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, credithistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredithistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the credithistory model
   */
  readonly fields: credithistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for credithistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__credithistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people_credithistory_addedCreditsFromUserIdTopeople<T extends credithistory$people_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, credithistory$people_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    people_credithistory_userIdTopeople<T extends peopleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peopleDefaultArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    people_credithistory_addedCreditsToUserIdTopeople<T extends credithistory$people_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, credithistory$people_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the credithistory model
   */
  interface credithistoryFieldRefs {
    readonly id: FieldRef<"credithistory", 'Int'>
    readonly userId: FieldRef<"credithistory", 'Int'>
    readonly deductedCredits: FieldRef<"credithistory", 'Int'>
    readonly addedCredits: FieldRef<"credithistory", 'Int'>
    readonly addedCreditsFromUserId: FieldRef<"credithistory", 'Int'>
    readonly addedCreditsToUserId: FieldRef<"credithistory", 'Int'>
    readonly description: FieldRef<"credithistory", 'String'>
    readonly lastModifiedTime: FieldRef<"credithistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * credithistory findUnique
   */
  export type credithistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * Filter, which credithistory to fetch.
     */
    where: credithistoryWhereUniqueInput
  }

  /**
   * credithistory findUniqueOrThrow
   */
  export type credithistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * Filter, which credithistory to fetch.
     */
    where: credithistoryWhereUniqueInput
  }

  /**
   * credithistory findFirst
   */
  export type credithistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * Filter, which credithistory to fetch.
     */
    where?: credithistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credithistories to fetch.
     */
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credithistories.
     */
    cursor?: credithistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credithistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credithistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credithistories.
     */
    distinct?: CredithistoryScalarFieldEnum | CredithistoryScalarFieldEnum[]
  }

  /**
   * credithistory findFirstOrThrow
   */
  export type credithistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * Filter, which credithistory to fetch.
     */
    where?: credithistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credithistories to fetch.
     */
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credithistories.
     */
    cursor?: credithistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credithistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credithistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credithistories.
     */
    distinct?: CredithistoryScalarFieldEnum | CredithistoryScalarFieldEnum[]
  }

  /**
   * credithistory findMany
   */
  export type credithistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * Filter, which credithistories to fetch.
     */
    where?: credithistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credithistories to fetch.
     */
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing credithistories.
     */
    cursor?: credithistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credithistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credithistories.
     */
    skip?: number
    distinct?: CredithistoryScalarFieldEnum | CredithistoryScalarFieldEnum[]
  }

  /**
   * credithistory create
   */
  export type credithistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a credithistory.
     */
    data: XOR<credithistoryCreateInput, credithistoryUncheckedCreateInput>
  }

  /**
   * credithistory createMany
   */
  export type credithistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many credithistories.
     */
    data: credithistoryCreateManyInput | credithistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * credithistory update
   */
  export type credithistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a credithistory.
     */
    data: XOR<credithistoryUpdateInput, credithistoryUncheckedUpdateInput>
    /**
     * Choose, which credithistory to update.
     */
    where: credithistoryWhereUniqueInput
  }

  /**
   * credithistory updateMany
   */
  export type credithistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update credithistories.
     */
    data: XOR<credithistoryUpdateManyMutationInput, credithistoryUncheckedUpdateManyInput>
    /**
     * Filter which credithistories to update
     */
    where?: credithistoryWhereInput
    /**
     * Limit how many credithistories to update.
     */
    limit?: number
  }

  /**
   * credithistory upsert
   */
  export type credithistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the credithistory to update in case it exists.
     */
    where: credithistoryWhereUniqueInput
    /**
     * In case the credithistory found by the `where` argument doesn't exist, create a new credithistory with this data.
     */
    create: XOR<credithistoryCreateInput, credithistoryUncheckedCreateInput>
    /**
     * In case the credithistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<credithistoryUpdateInput, credithistoryUncheckedUpdateInput>
  }

  /**
   * credithistory delete
   */
  export type credithistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    /**
     * Filter which credithistory to delete.
     */
    where: credithistoryWhereUniqueInput
  }

  /**
   * credithistory deleteMany
   */
  export type credithistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credithistories to delete
     */
    where?: credithistoryWhereInput
    /**
     * Limit how many credithistories to delete.
     */
    limit?: number
  }

  /**
   * credithistory.people_credithistory_addedCreditsFromUserIdTopeople
   */
  export type credithistory$people_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    where?: peopleWhereInput
  }

  /**
   * credithistory.people_credithistory_addedCreditsToUserIdTopeople
   */
  export type credithistory$people_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    where?: peopleWhereInput
  }

  /**
   * credithistory without action
   */
  export type credithistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    questionId: number | null
    isRead: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    questionId: number | null
    isRead: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    text: string | null
    fromId: number | null
    toId: number | null
    questionId: number | null
    isRead: number | null
    lastModifiedTime: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    text: string | null
    fromId: number | null
    toId: number | null
    questionId: number | null
    isRead: number | null
    lastModifiedTime: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    text: number
    fromId: number
    toId: number
    questionId: number
    isRead: number
    lastModifiedTime: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    questionId?: true
    isRead?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    questionId?: true
    isRead?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    text?: true
    fromId?: true
    toId?: true
    questionId?: true
    isRead?: true
    lastModifiedTime?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    text?: true
    fromId?: true
    toId?: true
    questionId?: true
    isRead?: true
    lastModifiedTime?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    text?: true
    fromId?: true
    toId?: true
    questionId?: true
    isRead?: true
    lastModifiedTime?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    text: string
    fromId: number | null
    toId: number
    questionId: number | null
    isRead: number
    lastModifiedTime: Date
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    fromId?: boolean
    toId?: boolean
    questionId?: boolean
    isRead?: boolean
    lastModifiedTime?: boolean
    people_messages_fromIdTopeople?: boolean | messages$people_messages_fromIdTopeopleArgs<ExtArgs>
    questions?: boolean | messages$questionsArgs<ExtArgs>
    people_messages_toIdTopeople?: boolean | peopleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>



  export type messagesSelectScalar = {
    id?: boolean
    text?: boolean
    fromId?: boolean
    toId?: boolean
    questionId?: boolean
    isRead?: boolean
    lastModifiedTime?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "fromId" | "toId" | "questionId" | "isRead" | "lastModifiedTime", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people_messages_fromIdTopeople?: boolean | messages$people_messages_fromIdTopeopleArgs<ExtArgs>
    questions?: boolean | messages$questionsArgs<ExtArgs>
    people_messages_toIdTopeople?: boolean | peopleDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      people_messages_fromIdTopeople: Prisma.$peoplePayload<ExtArgs> | null
      questions: Prisma.$questionsPayload<ExtArgs> | null
      people_messages_toIdTopeople: Prisma.$peoplePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      fromId: number | null
      toId: number
      questionId: number | null
      isRead: number
      lastModifiedTime: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people_messages_fromIdTopeople<T extends messages$people_messages_fromIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, messages$people_messages_fromIdTopeopleArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questions<T extends messages$questionsArgs<ExtArgs> = {}>(args?: Subset<T, messages$questionsArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    people_messages_toIdTopeople<T extends peopleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peopleDefaultArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly text: FieldRef<"messages", 'String'>
    readonly fromId: FieldRef<"messages", 'Int'>
    readonly toId: FieldRef<"messages", 'Int'>
    readonly questionId: FieldRef<"messages", 'Int'>
    readonly isRead: FieldRef<"messages", 'Int'>
    readonly lastModifiedTime: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.people_messages_fromIdTopeople
   */
  export type messages$people_messages_fromIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    where?: peopleWhereInput
  }

  /**
   * messages.questions
   */
  export type messages$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model people
   */

  export type AggregatePeople = {
    _count: PeopleCountAggregateOutputType | null
    _avg: PeopleAvgAggregateOutputType | null
    _sum: PeopleSumAggregateOutputType | null
    _min: PeopleMinAggregateOutputType | null
    _max: PeopleMaxAggregateOutputType | null
  }

  export type PeopleAvgAggregateOutputType = {
    id: number | null
    credits: number | null
  }

  export type PeopleSumAggregateOutputType = {
    id: number | null
    credits: number | null
  }

  export type PeopleMinAggregateOutputType = {
    id: number | null
    type: string | null
    givenname: string | null
    surname: string | null
    mobile: string | null
    email: string | null
    address: string | null
    status: string | null
    password: string | null
    token: string | null
    permission: string | null
    note: string | null
    orders: string | null
    refNo: string | null
    credits: number | null
    lastModifiedTime: Date | null
  }

  export type PeopleMaxAggregateOutputType = {
    id: number | null
    type: string | null
    givenname: string | null
    surname: string | null
    mobile: string | null
    email: string | null
    address: string | null
    status: string | null
    password: string | null
    token: string | null
    permission: string | null
    note: string | null
    orders: string | null
    refNo: string | null
    credits: number | null
    lastModifiedTime: Date | null
  }

  export type PeopleCountAggregateOutputType = {
    id: number
    type: number
    givenname: number
    surname: number
    mobile: number
    email: number
    address: number
    status: number
    password: number
    token: number
    permission: number
    note: number
    orders: number
    refNo: number
    credits: number
    lastModifiedTime: number
    _all: number
  }


  export type PeopleAvgAggregateInputType = {
    id?: true
    credits?: true
  }

  export type PeopleSumAggregateInputType = {
    id?: true
    credits?: true
  }

  export type PeopleMinAggregateInputType = {
    id?: true
    type?: true
    givenname?: true
    surname?: true
    mobile?: true
    email?: true
    address?: true
    status?: true
    password?: true
    token?: true
    permission?: true
    note?: true
    orders?: true
    refNo?: true
    credits?: true
    lastModifiedTime?: true
  }

  export type PeopleMaxAggregateInputType = {
    id?: true
    type?: true
    givenname?: true
    surname?: true
    mobile?: true
    email?: true
    address?: true
    status?: true
    password?: true
    token?: true
    permission?: true
    note?: true
    orders?: true
    refNo?: true
    credits?: true
    lastModifiedTime?: true
  }

  export type PeopleCountAggregateInputType = {
    id?: true
    type?: true
    givenname?: true
    surname?: true
    mobile?: true
    email?: true
    address?: true
    status?: true
    password?: true
    token?: true
    permission?: true
    note?: true
    orders?: true
    refNo?: true
    credits?: true
    lastModifiedTime?: true
    _all?: true
  }

  export type PeopleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to aggregate.
     */
    where?: peopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: peopleOrderByWithRelationInput | peopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PeopleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeopleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeopleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeopleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeopleMaxAggregateInputType
  }

  export type GetPeopleAggregateType<T extends PeopleAggregateArgs> = {
        [P in keyof T & keyof AggregatePeople]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeople[P]>
      : GetScalarType<T[P], AggregatePeople[P]>
  }




  export type peopleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peopleWhereInput
    orderBy?: peopleOrderByWithAggregationInput | peopleOrderByWithAggregationInput[]
    by: PeopleScalarFieldEnum[] | PeopleScalarFieldEnum
    having?: peopleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeopleCountAggregateInputType | true
    _avg?: PeopleAvgAggregateInputType
    _sum?: PeopleSumAggregateInputType
    _min?: PeopleMinAggregateInputType
    _max?: PeopleMaxAggregateInputType
  }

  export type PeopleGroupByOutputType = {
    id: number
    type: string
    givenname: string | null
    surname: string | null
    mobile: string | null
    email: string | null
    address: string | null
    status: string | null
    password: string | null
    token: string | null
    permission: string | null
    note: string | null
    orders: string | null
    refNo: string | null
    credits: number | null
    lastModifiedTime: Date
    _count: PeopleCountAggregateOutputType | null
    _avg: PeopleAvgAggregateOutputType | null
    _sum: PeopleSumAggregateOutputType | null
    _min: PeopleMinAggregateOutputType | null
    _max: PeopleMaxAggregateOutputType | null
  }

  type GetPeopleGroupByPayload<T extends peopleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeopleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeopleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeopleGroupByOutputType[P]>
            : GetScalarType<T[P], PeopleGroupByOutputType[P]>
        }
      >
    >


  export type peopleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    givenname?: boolean
    surname?: boolean
    mobile?: boolean
    email?: boolean
    address?: boolean
    status?: boolean
    password?: boolean
    token?: boolean
    permission?: boolean
    note?: boolean
    orders?: boolean
    refNo?: boolean
    credits?: boolean
    lastModifiedTime?: boolean
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: boolean | people$credithistory_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs>
    credithistory_credithistory_userIdTopeople?: boolean | people$credithistory_credithistory_userIdTopeopleArgs<ExtArgs>
    credithistory_credithistory_addedCreditsToUserIdTopeople?: boolean | people$credithistory_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs>
    messages_messages_fromIdTopeople?: boolean | people$messages_messages_fromIdTopeopleArgs<ExtArgs>
    messages_messages_toIdTopeople?: boolean | people$messages_messages_toIdTopeopleArgs<ExtArgs>
    userquestions?: boolean | people$userquestionsArgs<ExtArgs>
    userquestionsets?: boolean | people$userquestionsetsArgs<ExtArgs>
    _count?: boolean | PeopleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["people"]>



  export type peopleSelectScalar = {
    id?: boolean
    type?: boolean
    givenname?: boolean
    surname?: boolean
    mobile?: boolean
    email?: boolean
    address?: boolean
    status?: boolean
    password?: boolean
    token?: boolean
    permission?: boolean
    note?: boolean
    orders?: boolean
    refNo?: boolean
    credits?: boolean
    lastModifiedTime?: boolean
  }

  export type peopleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "givenname" | "surname" | "mobile" | "email" | "address" | "status" | "password" | "token" | "permission" | "note" | "orders" | "refNo" | "credits" | "lastModifiedTime", ExtArgs["result"]["people"]>
  export type peopleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: boolean | people$credithistory_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs>
    credithistory_credithistory_userIdTopeople?: boolean | people$credithistory_credithistory_userIdTopeopleArgs<ExtArgs>
    credithistory_credithistory_addedCreditsToUserIdTopeople?: boolean | people$credithistory_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs>
    messages_messages_fromIdTopeople?: boolean | people$messages_messages_fromIdTopeopleArgs<ExtArgs>
    messages_messages_toIdTopeople?: boolean | people$messages_messages_toIdTopeopleArgs<ExtArgs>
    userquestions?: boolean | people$userquestionsArgs<ExtArgs>
    userquestionsets?: boolean | people$userquestionsetsArgs<ExtArgs>
    _count?: boolean | PeopleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $peoplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "people"
    objects: {
      credithistory_credithistory_addedCreditsFromUserIdTopeople: Prisma.$credithistoryPayload<ExtArgs>[]
      credithistory_credithistory_userIdTopeople: Prisma.$credithistoryPayload<ExtArgs>[]
      credithistory_credithistory_addedCreditsToUserIdTopeople: Prisma.$credithistoryPayload<ExtArgs>[]
      messages_messages_fromIdTopeople: Prisma.$messagesPayload<ExtArgs>[]
      messages_messages_toIdTopeople: Prisma.$messagesPayload<ExtArgs>[]
      userquestions: Prisma.$userquestionsPayload<ExtArgs>[]
      userquestionsets: Prisma.$userquestionsetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      givenname: string | null
      surname: string | null
      mobile: string | null
      email: string | null
      address: string | null
      status: string | null
      password: string | null
      token: string | null
      permission: string | null
      note: string | null
      orders: string | null
      refNo: string | null
      credits: number | null
      lastModifiedTime: Date
    }, ExtArgs["result"]["people"]>
    composites: {}
  }

  type peopleGetPayload<S extends boolean | null | undefined | peopleDefaultArgs> = $Result.GetResult<Prisma.$peoplePayload, S>

  type peopleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peopleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeopleCountAggregateInputType | true
    }

  export interface peopleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['people'], meta: { name: 'people' } }
    /**
     * Find zero or one People that matches the filter.
     * @param {peopleFindUniqueArgs} args - Arguments to find a People
     * @example
     * // Get one People
     * const people = await prisma.people.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peopleFindUniqueArgs>(args: SelectSubset<T, peopleFindUniqueArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one People that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peopleFindUniqueOrThrowArgs} args - Arguments to find a People
     * @example
     * // Get one People
     * const people = await prisma.people.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peopleFindUniqueOrThrowArgs>(args: SelectSubset<T, peopleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peopleFindFirstArgs} args - Arguments to find a People
     * @example
     * // Get one People
     * const people = await prisma.people.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peopleFindFirstArgs>(args?: SelectSubset<T, peopleFindFirstArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first People that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peopleFindFirstOrThrowArgs} args - Arguments to find a People
     * @example
     * // Get one People
     * const people = await prisma.people.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peopleFindFirstOrThrowArgs>(args?: SelectSubset<T, peopleFindFirstOrThrowArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peopleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.people.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.people.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peopleWithIdOnly = await prisma.people.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends peopleFindManyArgs>(args?: SelectSubset<T, peopleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a People.
     * @param {peopleCreateArgs} args - Arguments to create a People.
     * @example
     * // Create one People
     * const People = await prisma.people.create({
     *   data: {
     *     // ... data to create a People
     *   }
     * })
     * 
     */
    create<T extends peopleCreateArgs>(args: SelectSubset<T, peopleCreateArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {peopleCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const people = await prisma.people.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peopleCreateManyArgs>(args?: SelectSubset<T, peopleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a People.
     * @param {peopleDeleteArgs} args - Arguments to delete one People.
     * @example
     * // Delete one People
     * const People = await prisma.people.delete({
     *   where: {
     *     // ... filter to delete one People
     *   }
     * })
     * 
     */
    delete<T extends peopleDeleteArgs>(args: SelectSubset<T, peopleDeleteArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one People.
     * @param {peopleUpdateArgs} args - Arguments to update one People.
     * @example
     * // Update one People
     * const people = await prisma.people.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peopleUpdateArgs>(args: SelectSubset<T, peopleUpdateArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {peopleDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.people.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peopleDeleteManyArgs>(args?: SelectSubset<T, peopleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peopleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const people = await prisma.people.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peopleUpdateManyArgs>(args: SelectSubset<T, peopleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one People.
     * @param {peopleUpsertArgs} args - Arguments to update or create a People.
     * @example
     * // Update or create a People
     * const people = await prisma.people.upsert({
     *   create: {
     *     // ... data to create a People
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the People we want to update
     *   }
     * })
     */
    upsert<T extends peopleUpsertArgs>(args: SelectSubset<T, peopleUpsertArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peopleCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.people.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends peopleCountArgs>(
      args?: Subset<T, peopleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeopleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeopleAggregateArgs>(args: Subset<T, PeopleAggregateArgs>): Prisma.PrismaPromise<GetPeopleAggregateType<T>>

    /**
     * Group by People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peopleGroupByArgs} args - Group by arguments.
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
      T extends peopleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peopleGroupByArgs['orderBy'] }
        : { orderBy?: peopleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peopleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeopleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the people model
   */
  readonly fields: peopleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for people.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peopleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credithistory_credithistory_addedCreditsFromUserIdTopeople<T extends people$credithistory_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, people$credithistory_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credithistory_credithistory_userIdTopeople<T extends people$credithistory_credithistory_userIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, people$credithistory_credithistory_userIdTopeopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credithistory_credithistory_addedCreditsToUserIdTopeople<T extends people$credithistory_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, people$credithistory_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credithistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages_messages_fromIdTopeople<T extends people$messages_messages_fromIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, people$messages_messages_fromIdTopeopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages_messages_toIdTopeople<T extends people$messages_messages_toIdTopeopleArgs<ExtArgs> = {}>(args?: Subset<T, people$messages_messages_toIdTopeopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userquestions<T extends people$userquestionsArgs<ExtArgs> = {}>(args?: Subset<T, people$userquestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userquestionsets<T extends people$userquestionsetsArgs<ExtArgs> = {}>(args?: Subset<T, people$userquestionsetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the people model
   */
  interface peopleFieldRefs {
    readonly id: FieldRef<"people", 'Int'>
    readonly type: FieldRef<"people", 'String'>
    readonly givenname: FieldRef<"people", 'String'>
    readonly surname: FieldRef<"people", 'String'>
    readonly mobile: FieldRef<"people", 'String'>
    readonly email: FieldRef<"people", 'String'>
    readonly address: FieldRef<"people", 'String'>
    readonly status: FieldRef<"people", 'String'>
    readonly password: FieldRef<"people", 'String'>
    readonly token: FieldRef<"people", 'String'>
    readonly permission: FieldRef<"people", 'String'>
    readonly note: FieldRef<"people", 'String'>
    readonly orders: FieldRef<"people", 'String'>
    readonly refNo: FieldRef<"people", 'String'>
    readonly credits: FieldRef<"people", 'Int'>
    readonly lastModifiedTime: FieldRef<"people", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * people findUnique
   */
  export type peopleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where: peopleWhereUniqueInput
  }

  /**
   * people findUniqueOrThrow
   */
  export type peopleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where: peopleWhereUniqueInput
  }

  /**
   * people findFirst
   */
  export type peopleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: peopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: peopleOrderByWithRelationInput | peopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: peopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PeopleScalarFieldEnum | PeopleScalarFieldEnum[]
  }

  /**
   * people findFirstOrThrow
   */
  export type peopleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: peopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: peopleOrderByWithRelationInput | peopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: peopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PeopleScalarFieldEnum | PeopleScalarFieldEnum[]
  }

  /**
   * people findMany
   */
  export type peopleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: peopleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: peopleOrderByWithRelationInput | peopleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: peopleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PeopleScalarFieldEnum | PeopleScalarFieldEnum[]
  }

  /**
   * people create
   */
  export type peopleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * The data needed to create a people.
     */
    data?: XOR<peopleCreateInput, peopleUncheckedCreateInput>
  }

  /**
   * people createMany
   */
  export type peopleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: peopleCreateManyInput | peopleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * people update
   */
  export type peopleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * The data needed to update a people.
     */
    data: XOR<peopleUpdateInput, peopleUncheckedUpdateInput>
    /**
     * Choose, which people to update.
     */
    where: peopleWhereUniqueInput
  }

  /**
   * people updateMany
   */
  export type peopleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<peopleUpdateManyMutationInput, peopleUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: peopleWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * people upsert
   */
  export type peopleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * The filter to search for the people to update in case it exists.
     */
    where: peopleWhereUniqueInput
    /**
     * In case the people found by the `where` argument doesn't exist, create a new people with this data.
     */
    create: XOR<peopleCreateInput, peopleUncheckedCreateInput>
    /**
     * In case the people was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peopleUpdateInput, peopleUncheckedUpdateInput>
  }

  /**
   * people delete
   */
  export type peopleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
    /**
     * Filter which people to delete.
     */
    where: peopleWhereUniqueInput
  }

  /**
   * people deleteMany
   */
  export type peopleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: peopleWhereInput
    /**
     * Limit how many people to delete.
     */
    limit?: number
  }

  /**
   * people.credithistory_credithistory_addedCreditsFromUserIdTopeople
   */
  export type people$credithistory_credithistory_addedCreditsFromUserIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    where?: credithistoryWhereInput
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    cursor?: credithistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredithistoryScalarFieldEnum | CredithistoryScalarFieldEnum[]
  }

  /**
   * people.credithistory_credithistory_userIdTopeople
   */
  export type people$credithistory_credithistory_userIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    where?: credithistoryWhereInput
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    cursor?: credithistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredithistoryScalarFieldEnum | CredithistoryScalarFieldEnum[]
  }

  /**
   * people.credithistory_credithistory_addedCreditsToUserIdTopeople
   */
  export type people$credithistory_credithistory_addedCreditsToUserIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credithistory
     */
    select?: credithistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the credithistory
     */
    omit?: credithistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credithistoryInclude<ExtArgs> | null
    where?: credithistoryWhereInput
    orderBy?: credithistoryOrderByWithRelationInput | credithistoryOrderByWithRelationInput[]
    cursor?: credithistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredithistoryScalarFieldEnum | CredithistoryScalarFieldEnum[]
  }

  /**
   * people.messages_messages_fromIdTopeople
   */
  export type people$messages_messages_fromIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * people.messages_messages_toIdTopeople
   */
  export type people$messages_messages_toIdTopeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * people.userquestions
   */
  export type people$userquestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    where?: userquestionsWhereInput
    orderBy?: userquestionsOrderByWithRelationInput | userquestionsOrderByWithRelationInput[]
    cursor?: userquestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserquestionsScalarFieldEnum | UserquestionsScalarFieldEnum[]
  }

  /**
   * people.userquestionsets
   */
  export type people$userquestionsetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    where?: userquestionsetsWhereInput
    orderBy?: userquestionsetsOrderByWithRelationInput | userquestionsetsOrderByWithRelationInput[]
    cursor?: userquestionsetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserquestionsetsScalarFieldEnum | UserquestionsetsScalarFieldEnum[]
  }

  /**
   * people without action
   */
  export type peopleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people
     */
    select?: peopleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the people
     */
    omit?: peopleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peopleInclude<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    setNo: number | null
    commonContentId: number | null
    wrongQuestionOfChenyi: number | null
    newQuestionOfChenyi: number | null
    correctAnswerCount: number | null
    totalAnswerCount: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    setNo: number | null
    commonContentId: number | null
    wrongQuestionOfChenyi: number | null
    newQuestionOfChenyi: number | null
    correctAnswerCount: number | null
    totalAnswerCount: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    type: string | null
    categoryId: number | null
    setNo: number | null
    commonContentId: number | null
    content: string | null
    answerA: string | null
    answerB: string | null
    answerC: string | null
    answerD: string | null
    answerE: string | null
    note: string | null
    correctAnswer: string | null
    wrongQuestionOfChenyi: number | null
    newQuestionOfChenyi: number | null
    source: string | null
    correctAnswerCount: number | null
    totalAnswerCount: number | null
    lastModifiedTime: Date | null
    level: string | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    type: string | null
    categoryId: number | null
    setNo: number | null
    commonContentId: number | null
    content: string | null
    answerA: string | null
    answerB: string | null
    answerC: string | null
    answerD: string | null
    answerE: string | null
    note: string | null
    correctAnswer: string | null
    wrongQuestionOfChenyi: number | null
    newQuestionOfChenyi: number | null
    source: string | null
    correctAnswerCount: number | null
    totalAnswerCount: number | null
    lastModifiedTime: Date | null
    level: string | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    type: number
    categoryId: number
    setNo: number
    commonContentId: number
    content: number
    answerA: number
    answerB: number
    answerC: number
    answerD: number
    answerE: number
    note: number
    correctAnswer: number
    wrongQuestionOfChenyi: number
    newQuestionOfChenyi: number
    source: number
    correctAnswerCount: number
    totalAnswerCount: number
    lastModifiedTime: number
    level: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
    categoryId?: true
    setNo?: true
    commonContentId?: true
    wrongQuestionOfChenyi?: true
    newQuestionOfChenyi?: true
    correctAnswerCount?: true
    totalAnswerCount?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
    categoryId?: true
    setNo?: true
    commonContentId?: true
    wrongQuestionOfChenyi?: true
    newQuestionOfChenyi?: true
    correctAnswerCount?: true
    totalAnswerCount?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    type?: true
    categoryId?: true
    setNo?: true
    commonContentId?: true
    content?: true
    answerA?: true
    answerB?: true
    answerC?: true
    answerD?: true
    answerE?: true
    note?: true
    correctAnswer?: true
    wrongQuestionOfChenyi?: true
    newQuestionOfChenyi?: true
    source?: true
    correctAnswerCount?: true
    totalAnswerCount?: true
    lastModifiedTime?: true
    level?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    type?: true
    categoryId?: true
    setNo?: true
    commonContentId?: true
    content?: true
    answerA?: true
    answerB?: true
    answerC?: true
    answerD?: true
    answerE?: true
    note?: true
    correctAnswer?: true
    wrongQuestionOfChenyi?: true
    newQuestionOfChenyi?: true
    source?: true
    correctAnswerCount?: true
    totalAnswerCount?: true
    lastModifiedTime?: true
    level?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    type?: true
    categoryId?: true
    setNo?: true
    commonContentId?: true
    content?: true
    answerA?: true
    answerB?: true
    answerC?: true
    answerD?: true
    answerE?: true
    note?: true
    correctAnswer?: true
    wrongQuestionOfChenyi?: true
    newQuestionOfChenyi?: true
    source?: true
    correctAnswerCount?: true
    totalAnswerCount?: true
    lastModifiedTime?: true
    level?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    type: string | null
    categoryId: number | null
    setNo: number | null
    commonContentId: number | null
    content: string
    answerA: string
    answerB: string
    answerC: string | null
    answerD: string | null
    answerE: string | null
    note: string | null
    correctAnswer: string
    wrongQuestionOfChenyi: number | null
    newQuestionOfChenyi: number | null
    source: string | null
    correctAnswerCount: number | null
    totalAnswerCount: number | null
    lastModifiedTime: Date
    level: string | null
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    categoryId?: boolean
    setNo?: boolean
    commonContentId?: boolean
    content?: boolean
    answerA?: boolean
    answerB?: boolean
    answerC?: boolean
    answerD?: boolean
    answerE?: boolean
    note?: boolean
    correctAnswer?: boolean
    wrongQuestionOfChenyi?: boolean
    newQuestionOfChenyi?: boolean
    source?: boolean
    correctAnswerCount?: boolean
    totalAnswerCount?: boolean
    lastModifiedTime?: boolean
    level?: boolean
    messages?: boolean | questions$messagesArgs<ExtArgs>
    categories?: boolean | questions$categoriesArgs<ExtArgs>
    commoncontents?: boolean | questions$commoncontentsArgs<ExtArgs>
    userquestions?: boolean | questions$userquestionsArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>



  export type questionsSelectScalar = {
    id?: boolean
    type?: boolean
    categoryId?: boolean
    setNo?: boolean
    commonContentId?: boolean
    content?: boolean
    answerA?: boolean
    answerB?: boolean
    answerC?: boolean
    answerD?: boolean
    answerE?: boolean
    note?: boolean
    correctAnswer?: boolean
    wrongQuestionOfChenyi?: boolean
    newQuestionOfChenyi?: boolean
    source?: boolean
    correctAnswerCount?: boolean
    totalAnswerCount?: boolean
    lastModifiedTime?: boolean
    level?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "categoryId" | "setNo" | "commonContentId" | "content" | "answerA" | "answerB" | "answerC" | "answerD" | "answerE" | "note" | "correctAnswer" | "wrongQuestionOfChenyi" | "newQuestionOfChenyi" | "source" | "correctAnswerCount" | "totalAnswerCount" | "lastModifiedTime" | "level", ExtArgs["result"]["questions"]>
  export type questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | questions$messagesArgs<ExtArgs>
    categories?: boolean | questions$categoriesArgs<ExtArgs>
    commoncontents?: boolean | questions$commoncontentsArgs<ExtArgs>
    userquestions?: boolean | questions$userquestionsArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      commoncontents: Prisma.$commoncontentsPayload<ExtArgs> | null
      userquestions: Prisma.$userquestionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      categoryId: number | null
      setNo: number | null
      commonContentId: number | null
      content: string
      answerA: string
      answerB: string
      answerC: string | null
      answerD: string | null
      answerE: string | null
      note: string | null
      correctAnswer: string
      wrongQuestionOfChenyi: number | null
      newQuestionOfChenyi: number | null
      source: string | null
      correctAnswerCount: number | null
      totalAnswerCount: number | null
      lastModifiedTime: Date
      level: string | null
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends questions$messagesArgs<ExtArgs> = {}>(args?: Subset<T, questions$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends questions$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, questions$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    commoncontents<T extends questions$commoncontentsArgs<ExtArgs> = {}>(args?: Subset<T, questions$commoncontentsArgs<ExtArgs>>): Prisma__commoncontentsClient<$Result.GetResult<Prisma.$commoncontentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userquestions<T extends questions$userquestionsArgs<ExtArgs> = {}>(args?: Subset<T, questions$userquestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'Int'>
    readonly type: FieldRef<"questions", 'String'>
    readonly categoryId: FieldRef<"questions", 'Int'>
    readonly setNo: FieldRef<"questions", 'Int'>
    readonly commonContentId: FieldRef<"questions", 'Int'>
    readonly content: FieldRef<"questions", 'String'>
    readonly answerA: FieldRef<"questions", 'String'>
    readonly answerB: FieldRef<"questions", 'String'>
    readonly answerC: FieldRef<"questions", 'String'>
    readonly answerD: FieldRef<"questions", 'String'>
    readonly answerE: FieldRef<"questions", 'String'>
    readonly note: FieldRef<"questions", 'String'>
    readonly correctAnswer: FieldRef<"questions", 'String'>
    readonly wrongQuestionOfChenyi: FieldRef<"questions", 'Int'>
    readonly newQuestionOfChenyi: FieldRef<"questions", 'Int'>
    readonly source: FieldRef<"questions", 'String'>
    readonly correctAnswerCount: FieldRef<"questions", 'Int'>
    readonly totalAnswerCount: FieldRef<"questions", 'Int'>
    readonly lastModifiedTime: FieldRef<"questions", 'DateTime'>
    readonly level: FieldRef<"questions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions.messages
   */
  export type questions$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * questions.categories
   */
  export type questions$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * questions.commoncontents
   */
  export type questions$commoncontentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commoncontents
     */
    select?: commoncontentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commoncontents
     */
    omit?: commoncontentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commoncontentsInclude<ExtArgs> | null
    where?: commoncontentsWhereInput
  }

  /**
   * questions.userquestions
   */
  export type questions$userquestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    where?: userquestionsWhereInput
    orderBy?: userquestionsOrderByWithRelationInput | userquestionsOrderByWithRelationInput[]
    cursor?: userquestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserquestionsScalarFieldEnum | UserquestionsScalarFieldEnum[]
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
  }


  /**
   * Model userquestions
   */

  export type AggregateUserquestions = {
    _count: UserquestionsCountAggregateOutputType | null
    _avg: UserquestionsAvgAggregateOutputType | null
    _sum: UserquestionsSumAggregateOutputType | null
    _min: UserquestionsMinAggregateOutputType | null
    _max: UserquestionsMaxAggregateOutputType | null
  }

  export type UserquestionsAvgAggregateOutputType = {
    userId: number | null
    questionId: number | null
  }

  export type UserquestionsSumAggregateOutputType = {
    userId: number | null
    questionId: number | null
  }

  export type UserquestionsMinAggregateOutputType = {
    userId: number | null
    questionId: number | null
    userAnswer: string | null
    lastModifiedTime: Date | null
  }

  export type UserquestionsMaxAggregateOutputType = {
    userId: number | null
    questionId: number | null
    userAnswer: string | null
    lastModifiedTime: Date | null
  }

  export type UserquestionsCountAggregateOutputType = {
    userId: number
    questionId: number
    userAnswer: number
    lastModifiedTime: number
    _all: number
  }


  export type UserquestionsAvgAggregateInputType = {
    userId?: true
    questionId?: true
  }

  export type UserquestionsSumAggregateInputType = {
    userId?: true
    questionId?: true
  }

  export type UserquestionsMinAggregateInputType = {
    userId?: true
    questionId?: true
    userAnswer?: true
    lastModifiedTime?: true
  }

  export type UserquestionsMaxAggregateInputType = {
    userId?: true
    questionId?: true
    userAnswer?: true
    lastModifiedTime?: true
  }

  export type UserquestionsCountAggregateInputType = {
    userId?: true
    questionId?: true
    userAnswer?: true
    lastModifiedTime?: true
    _all?: true
  }

  export type UserquestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userquestions to aggregate.
     */
    where?: userquestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestions to fetch.
     */
    orderBy?: userquestionsOrderByWithRelationInput | userquestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userquestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userquestions
    **/
    _count?: true | UserquestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserquestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserquestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserquestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserquestionsMaxAggregateInputType
  }

  export type GetUserquestionsAggregateType<T extends UserquestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserquestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserquestions[P]>
      : GetScalarType<T[P], AggregateUserquestions[P]>
  }




  export type userquestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userquestionsWhereInput
    orderBy?: userquestionsOrderByWithAggregationInput | userquestionsOrderByWithAggregationInput[]
    by: UserquestionsScalarFieldEnum[] | UserquestionsScalarFieldEnum
    having?: userquestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserquestionsCountAggregateInputType | true
    _avg?: UserquestionsAvgAggregateInputType
    _sum?: UserquestionsSumAggregateInputType
    _min?: UserquestionsMinAggregateInputType
    _max?: UserquestionsMaxAggregateInputType
  }

  export type UserquestionsGroupByOutputType = {
    userId: number
    questionId: number
    userAnswer: string | null
    lastModifiedTime: Date
    _count: UserquestionsCountAggregateOutputType | null
    _avg: UserquestionsAvgAggregateOutputType | null
    _sum: UserquestionsSumAggregateOutputType | null
    _min: UserquestionsMinAggregateOutputType | null
    _max: UserquestionsMaxAggregateOutputType | null
  }

  type GetUserquestionsGroupByPayload<T extends userquestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserquestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserquestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserquestionsGroupByOutputType[P]>
            : GetScalarType<T[P], UserquestionsGroupByOutputType[P]>
        }
      >
    >


  export type userquestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    lastModifiedTime?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
    people?: boolean | peopleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userquestions"]>



  export type userquestionsSelectScalar = {
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    lastModifiedTime?: boolean
  }

  export type userquestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "questionId" | "userAnswer" | "lastModifiedTime", ExtArgs["result"]["userquestions"]>
  export type userquestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
    people?: boolean | peopleDefaultArgs<ExtArgs>
  }

  export type $userquestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userquestions"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>
      people: Prisma.$peoplePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      questionId: number
      userAnswer: string | null
      lastModifiedTime: Date
    }, ExtArgs["result"]["userquestions"]>
    composites: {}
  }

  type userquestionsGetPayload<S extends boolean | null | undefined | userquestionsDefaultArgs> = $Result.GetResult<Prisma.$userquestionsPayload, S>

  type userquestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userquestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserquestionsCountAggregateInputType | true
    }

  export interface userquestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userquestions'], meta: { name: 'userquestions' } }
    /**
     * Find zero or one Userquestions that matches the filter.
     * @param {userquestionsFindUniqueArgs} args - Arguments to find a Userquestions
     * @example
     * // Get one Userquestions
     * const userquestions = await prisma.userquestions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userquestionsFindUniqueArgs>(args: SelectSubset<T, userquestionsFindUniqueArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Userquestions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userquestionsFindUniqueOrThrowArgs} args - Arguments to find a Userquestions
     * @example
     * // Get one Userquestions
     * const userquestions = await prisma.userquestions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userquestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, userquestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userquestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsFindFirstArgs} args - Arguments to find a Userquestions
     * @example
     * // Get one Userquestions
     * const userquestions = await prisma.userquestions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userquestionsFindFirstArgs>(args?: SelectSubset<T, userquestionsFindFirstArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userquestions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsFindFirstOrThrowArgs} args - Arguments to find a Userquestions
     * @example
     * // Get one Userquestions
     * const userquestions = await prisma.userquestions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userquestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, userquestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Userquestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userquestions
     * const userquestions = await prisma.userquestions.findMany()
     * 
     * // Get first 10 Userquestions
     * const userquestions = await prisma.userquestions.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userquestionsWithUserIdOnly = await prisma.userquestions.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends userquestionsFindManyArgs>(args?: SelectSubset<T, userquestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Userquestions.
     * @param {userquestionsCreateArgs} args - Arguments to create a Userquestions.
     * @example
     * // Create one Userquestions
     * const Userquestions = await prisma.userquestions.create({
     *   data: {
     *     // ... data to create a Userquestions
     *   }
     * })
     * 
     */
    create<T extends userquestionsCreateArgs>(args: SelectSubset<T, userquestionsCreateArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Userquestions.
     * @param {userquestionsCreateManyArgs} args - Arguments to create many Userquestions.
     * @example
     * // Create many Userquestions
     * const userquestions = await prisma.userquestions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userquestionsCreateManyArgs>(args?: SelectSubset<T, userquestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Userquestions.
     * @param {userquestionsDeleteArgs} args - Arguments to delete one Userquestions.
     * @example
     * // Delete one Userquestions
     * const Userquestions = await prisma.userquestions.delete({
     *   where: {
     *     // ... filter to delete one Userquestions
     *   }
     * })
     * 
     */
    delete<T extends userquestionsDeleteArgs>(args: SelectSubset<T, userquestionsDeleteArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Userquestions.
     * @param {userquestionsUpdateArgs} args - Arguments to update one Userquestions.
     * @example
     * // Update one Userquestions
     * const userquestions = await prisma.userquestions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userquestionsUpdateArgs>(args: SelectSubset<T, userquestionsUpdateArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Userquestions.
     * @param {userquestionsDeleteManyArgs} args - Arguments to filter Userquestions to delete.
     * @example
     * // Delete a few Userquestions
     * const { count } = await prisma.userquestions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userquestionsDeleteManyArgs>(args?: SelectSubset<T, userquestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userquestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userquestions
     * const userquestions = await prisma.userquestions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userquestionsUpdateManyArgs>(args: SelectSubset<T, userquestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Userquestions.
     * @param {userquestionsUpsertArgs} args - Arguments to update or create a Userquestions.
     * @example
     * // Update or create a Userquestions
     * const userquestions = await prisma.userquestions.upsert({
     *   create: {
     *     // ... data to create a Userquestions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userquestions we want to update
     *   }
     * })
     */
    upsert<T extends userquestionsUpsertArgs>(args: SelectSubset<T, userquestionsUpsertArgs<ExtArgs>>): Prisma__userquestionsClient<$Result.GetResult<Prisma.$userquestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Userquestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsCountArgs} args - Arguments to filter Userquestions to count.
     * @example
     * // Count the number of Userquestions
     * const count = await prisma.userquestions.count({
     *   where: {
     *     // ... the filter for the Userquestions we want to count
     *   }
     * })
    **/
    count<T extends userquestionsCountArgs>(
      args?: Subset<T, userquestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserquestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userquestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserquestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserquestionsAggregateArgs>(args: Subset<T, UserquestionsAggregateArgs>): Prisma.PrismaPromise<GetUserquestionsAggregateType<T>>

    /**
     * Group by Userquestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsGroupByArgs} args - Group by arguments.
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
      T extends userquestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userquestionsGroupByArgs['orderBy'] }
        : { orderBy?: userquestionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userquestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserquestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userquestions model
   */
  readonly fields: userquestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userquestions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userquestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    people<T extends peopleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peopleDefaultArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the userquestions model
   */
  interface userquestionsFieldRefs {
    readonly userId: FieldRef<"userquestions", 'Int'>
    readonly questionId: FieldRef<"userquestions", 'Int'>
    readonly userAnswer: FieldRef<"userquestions", 'String'>
    readonly lastModifiedTime: FieldRef<"userquestions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userquestions findUnique
   */
  export type userquestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * Filter, which userquestions to fetch.
     */
    where: userquestionsWhereUniqueInput
  }

  /**
   * userquestions findUniqueOrThrow
   */
  export type userquestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * Filter, which userquestions to fetch.
     */
    where: userquestionsWhereUniqueInput
  }

  /**
   * userquestions findFirst
   */
  export type userquestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * Filter, which userquestions to fetch.
     */
    where?: userquestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestions to fetch.
     */
    orderBy?: userquestionsOrderByWithRelationInput | userquestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userquestions.
     */
    cursor?: userquestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userquestions.
     */
    distinct?: UserquestionsScalarFieldEnum | UserquestionsScalarFieldEnum[]
  }

  /**
   * userquestions findFirstOrThrow
   */
  export type userquestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * Filter, which userquestions to fetch.
     */
    where?: userquestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestions to fetch.
     */
    orderBy?: userquestionsOrderByWithRelationInput | userquestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userquestions.
     */
    cursor?: userquestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userquestions.
     */
    distinct?: UserquestionsScalarFieldEnum | UserquestionsScalarFieldEnum[]
  }

  /**
   * userquestions findMany
   */
  export type userquestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * Filter, which userquestions to fetch.
     */
    where?: userquestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestions to fetch.
     */
    orderBy?: userquestionsOrderByWithRelationInput | userquestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userquestions.
     */
    cursor?: userquestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestions.
     */
    skip?: number
    distinct?: UserquestionsScalarFieldEnum | UserquestionsScalarFieldEnum[]
  }

  /**
   * userquestions create
   */
  export type userquestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a userquestions.
     */
    data: XOR<userquestionsCreateInput, userquestionsUncheckedCreateInput>
  }

  /**
   * userquestions createMany
   */
  export type userquestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userquestions.
     */
    data: userquestionsCreateManyInput | userquestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userquestions update
   */
  export type userquestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a userquestions.
     */
    data: XOR<userquestionsUpdateInput, userquestionsUncheckedUpdateInput>
    /**
     * Choose, which userquestions to update.
     */
    where: userquestionsWhereUniqueInput
  }

  /**
   * userquestions updateMany
   */
  export type userquestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userquestions.
     */
    data: XOR<userquestionsUpdateManyMutationInput, userquestionsUncheckedUpdateManyInput>
    /**
     * Filter which userquestions to update
     */
    where?: userquestionsWhereInput
    /**
     * Limit how many userquestions to update.
     */
    limit?: number
  }

  /**
   * userquestions upsert
   */
  export type userquestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the userquestions to update in case it exists.
     */
    where: userquestionsWhereUniqueInput
    /**
     * In case the userquestions found by the `where` argument doesn't exist, create a new userquestions with this data.
     */
    create: XOR<userquestionsCreateInput, userquestionsUncheckedCreateInput>
    /**
     * In case the userquestions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userquestionsUpdateInput, userquestionsUncheckedUpdateInput>
  }

  /**
   * userquestions delete
   */
  export type userquestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
    /**
     * Filter which userquestions to delete.
     */
    where: userquestionsWhereUniqueInput
  }

  /**
   * userquestions deleteMany
   */
  export type userquestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userquestions to delete
     */
    where?: userquestionsWhereInput
    /**
     * Limit how many userquestions to delete.
     */
    limit?: number
  }

  /**
   * userquestions without action
   */
  export type userquestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestions
     */
    select?: userquestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestions
     */
    omit?: userquestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsInclude<ExtArgs> | null
  }


  /**
   * Model userquestionsets
   */

  export type AggregateUserquestionsets = {
    _count: UserquestionsetsCountAggregateOutputType | null
    _avg: UserquestionsetsAvgAggregateOutputType | null
    _sum: UserquestionsetsSumAggregateOutputType | null
    _min: UserquestionsetsMinAggregateOutputType | null
    _max: UserquestionsetsMaxAggregateOutputType | null
  }

  export type UserquestionsetsAvgAggregateOutputType = {
    userId: number | null
    setNo: number | null
    finished: number | null
    random: number | null
  }

  export type UserquestionsetsSumAggregateOutputType = {
    userId: number | null
    setNo: number | null
    finished: number | null
    random: number | null
  }

  export type UserquestionsetsMinAggregateOutputType = {
    userId: number | null
    setNo: number | null
    type: string | null
    finished: number | null
    lastModifiedTime: Date | null
    random: number | null
  }

  export type UserquestionsetsMaxAggregateOutputType = {
    userId: number | null
    setNo: number | null
    type: string | null
    finished: number | null
    lastModifiedTime: Date | null
    random: number | null
  }

  export type UserquestionsetsCountAggregateOutputType = {
    userId: number
    setNo: number
    type: number
    finished: number
    lastModifiedTime: number
    random: number
    _all: number
  }


  export type UserquestionsetsAvgAggregateInputType = {
    userId?: true
    setNo?: true
    finished?: true
    random?: true
  }

  export type UserquestionsetsSumAggregateInputType = {
    userId?: true
    setNo?: true
    finished?: true
    random?: true
  }

  export type UserquestionsetsMinAggregateInputType = {
    userId?: true
    setNo?: true
    type?: true
    finished?: true
    lastModifiedTime?: true
    random?: true
  }

  export type UserquestionsetsMaxAggregateInputType = {
    userId?: true
    setNo?: true
    type?: true
    finished?: true
    lastModifiedTime?: true
    random?: true
  }

  export type UserquestionsetsCountAggregateInputType = {
    userId?: true
    setNo?: true
    type?: true
    finished?: true
    lastModifiedTime?: true
    random?: true
    _all?: true
  }

  export type UserquestionsetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userquestionsets to aggregate.
     */
    where?: userquestionsetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestionsets to fetch.
     */
    orderBy?: userquestionsetsOrderByWithRelationInput | userquestionsetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userquestionsetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestionsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestionsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userquestionsets
    **/
    _count?: true | UserquestionsetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserquestionsetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserquestionsetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserquestionsetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserquestionsetsMaxAggregateInputType
  }

  export type GetUserquestionsetsAggregateType<T extends UserquestionsetsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserquestionsets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserquestionsets[P]>
      : GetScalarType<T[P], AggregateUserquestionsets[P]>
  }




  export type userquestionsetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userquestionsetsWhereInput
    orderBy?: userquestionsetsOrderByWithAggregationInput | userquestionsetsOrderByWithAggregationInput[]
    by: UserquestionsetsScalarFieldEnum[] | UserquestionsetsScalarFieldEnum
    having?: userquestionsetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserquestionsetsCountAggregateInputType | true
    _avg?: UserquestionsetsAvgAggregateInputType
    _sum?: UserquestionsetsSumAggregateInputType
    _min?: UserquestionsetsMinAggregateInputType
    _max?: UserquestionsetsMaxAggregateInputType
  }

  export type UserquestionsetsGroupByOutputType = {
    userId: number
    setNo: number
    type: string
    finished: number | null
    lastModifiedTime: Date
    random: number | null
    _count: UserquestionsetsCountAggregateOutputType | null
    _avg: UserquestionsetsAvgAggregateOutputType | null
    _sum: UserquestionsetsSumAggregateOutputType | null
    _min: UserquestionsetsMinAggregateOutputType | null
    _max: UserquestionsetsMaxAggregateOutputType | null
  }

  type GetUserquestionsetsGroupByPayload<T extends userquestionsetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserquestionsetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserquestionsetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserquestionsetsGroupByOutputType[P]>
            : GetScalarType<T[P], UserquestionsetsGroupByOutputType[P]>
        }
      >
    >


  export type userquestionsetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    setNo?: boolean
    type?: boolean
    finished?: boolean
    lastModifiedTime?: boolean
    random?: boolean
    people?: boolean | peopleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userquestionsets"]>



  export type userquestionsetsSelectScalar = {
    userId?: boolean
    setNo?: boolean
    type?: boolean
    finished?: boolean
    lastModifiedTime?: boolean
    random?: boolean
  }

  export type userquestionsetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "setNo" | "type" | "finished" | "lastModifiedTime" | "random", ExtArgs["result"]["userquestionsets"]>
  export type userquestionsetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | peopleDefaultArgs<ExtArgs>
  }

  export type $userquestionsetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userquestionsets"
    objects: {
      people: Prisma.$peoplePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      setNo: number
      type: string
      finished: number | null
      lastModifiedTime: Date
      random: number | null
    }, ExtArgs["result"]["userquestionsets"]>
    composites: {}
  }

  type userquestionsetsGetPayload<S extends boolean | null | undefined | userquestionsetsDefaultArgs> = $Result.GetResult<Prisma.$userquestionsetsPayload, S>

  type userquestionsetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userquestionsetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserquestionsetsCountAggregateInputType | true
    }

  export interface userquestionsetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userquestionsets'], meta: { name: 'userquestionsets' } }
    /**
     * Find zero or one Userquestionsets that matches the filter.
     * @param {userquestionsetsFindUniqueArgs} args - Arguments to find a Userquestionsets
     * @example
     * // Get one Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userquestionsetsFindUniqueArgs>(args: SelectSubset<T, userquestionsetsFindUniqueArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Userquestionsets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userquestionsetsFindUniqueOrThrowArgs} args - Arguments to find a Userquestionsets
     * @example
     * // Get one Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userquestionsetsFindUniqueOrThrowArgs>(args: SelectSubset<T, userquestionsetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userquestionsets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsetsFindFirstArgs} args - Arguments to find a Userquestionsets
     * @example
     * // Get one Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userquestionsetsFindFirstArgs>(args?: SelectSubset<T, userquestionsetsFindFirstArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userquestionsets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsetsFindFirstOrThrowArgs} args - Arguments to find a Userquestionsets
     * @example
     * // Get one Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userquestionsetsFindFirstOrThrowArgs>(args?: SelectSubset<T, userquestionsetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Userquestionsets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.findMany()
     * 
     * // Get first 10 Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userquestionsetsWithUserIdOnly = await prisma.userquestionsets.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends userquestionsetsFindManyArgs>(args?: SelectSubset<T, userquestionsetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Userquestionsets.
     * @param {userquestionsetsCreateArgs} args - Arguments to create a Userquestionsets.
     * @example
     * // Create one Userquestionsets
     * const Userquestionsets = await prisma.userquestionsets.create({
     *   data: {
     *     // ... data to create a Userquestionsets
     *   }
     * })
     * 
     */
    create<T extends userquestionsetsCreateArgs>(args: SelectSubset<T, userquestionsetsCreateArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Userquestionsets.
     * @param {userquestionsetsCreateManyArgs} args - Arguments to create many Userquestionsets.
     * @example
     * // Create many Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userquestionsetsCreateManyArgs>(args?: SelectSubset<T, userquestionsetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Userquestionsets.
     * @param {userquestionsetsDeleteArgs} args - Arguments to delete one Userquestionsets.
     * @example
     * // Delete one Userquestionsets
     * const Userquestionsets = await prisma.userquestionsets.delete({
     *   where: {
     *     // ... filter to delete one Userquestionsets
     *   }
     * })
     * 
     */
    delete<T extends userquestionsetsDeleteArgs>(args: SelectSubset<T, userquestionsetsDeleteArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Userquestionsets.
     * @param {userquestionsetsUpdateArgs} args - Arguments to update one Userquestionsets.
     * @example
     * // Update one Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userquestionsetsUpdateArgs>(args: SelectSubset<T, userquestionsetsUpdateArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Userquestionsets.
     * @param {userquestionsetsDeleteManyArgs} args - Arguments to filter Userquestionsets to delete.
     * @example
     * // Delete a few Userquestionsets
     * const { count } = await prisma.userquestionsets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userquestionsetsDeleteManyArgs>(args?: SelectSubset<T, userquestionsetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userquestionsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userquestionsetsUpdateManyArgs>(args: SelectSubset<T, userquestionsetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Userquestionsets.
     * @param {userquestionsetsUpsertArgs} args - Arguments to update or create a Userquestionsets.
     * @example
     * // Update or create a Userquestionsets
     * const userquestionsets = await prisma.userquestionsets.upsert({
     *   create: {
     *     // ... data to create a Userquestionsets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userquestionsets we want to update
     *   }
     * })
     */
    upsert<T extends userquestionsetsUpsertArgs>(args: SelectSubset<T, userquestionsetsUpsertArgs<ExtArgs>>): Prisma__userquestionsetsClient<$Result.GetResult<Prisma.$userquestionsetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Userquestionsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsetsCountArgs} args - Arguments to filter Userquestionsets to count.
     * @example
     * // Count the number of Userquestionsets
     * const count = await prisma.userquestionsets.count({
     *   where: {
     *     // ... the filter for the Userquestionsets we want to count
     *   }
     * })
    **/
    count<T extends userquestionsetsCountArgs>(
      args?: Subset<T, userquestionsetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserquestionsetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userquestionsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserquestionsetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserquestionsetsAggregateArgs>(args: Subset<T, UserquestionsetsAggregateArgs>): Prisma.PrismaPromise<GetUserquestionsetsAggregateType<T>>

    /**
     * Group by Userquestionsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userquestionsetsGroupByArgs} args - Group by arguments.
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
      T extends userquestionsetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userquestionsetsGroupByArgs['orderBy'] }
        : { orderBy?: userquestionsetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userquestionsetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserquestionsetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userquestionsets model
   */
  readonly fields: userquestionsetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userquestionsets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userquestionsetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people<T extends peopleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peopleDefaultArgs<ExtArgs>>): Prisma__peopleClient<$Result.GetResult<Prisma.$peoplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the userquestionsets model
   */
  interface userquestionsetsFieldRefs {
    readonly userId: FieldRef<"userquestionsets", 'Int'>
    readonly setNo: FieldRef<"userquestionsets", 'Int'>
    readonly type: FieldRef<"userquestionsets", 'String'>
    readonly finished: FieldRef<"userquestionsets", 'Int'>
    readonly lastModifiedTime: FieldRef<"userquestionsets", 'DateTime'>
    readonly random: FieldRef<"userquestionsets", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * userquestionsets findUnique
   */
  export type userquestionsetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * Filter, which userquestionsets to fetch.
     */
    where: userquestionsetsWhereUniqueInput
  }

  /**
   * userquestionsets findUniqueOrThrow
   */
  export type userquestionsetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * Filter, which userquestionsets to fetch.
     */
    where: userquestionsetsWhereUniqueInput
  }

  /**
   * userquestionsets findFirst
   */
  export type userquestionsetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * Filter, which userquestionsets to fetch.
     */
    where?: userquestionsetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestionsets to fetch.
     */
    orderBy?: userquestionsetsOrderByWithRelationInput | userquestionsetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userquestionsets.
     */
    cursor?: userquestionsetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestionsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestionsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userquestionsets.
     */
    distinct?: UserquestionsetsScalarFieldEnum | UserquestionsetsScalarFieldEnum[]
  }

  /**
   * userquestionsets findFirstOrThrow
   */
  export type userquestionsetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * Filter, which userquestionsets to fetch.
     */
    where?: userquestionsetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestionsets to fetch.
     */
    orderBy?: userquestionsetsOrderByWithRelationInput | userquestionsetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userquestionsets.
     */
    cursor?: userquestionsetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestionsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestionsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userquestionsets.
     */
    distinct?: UserquestionsetsScalarFieldEnum | UserquestionsetsScalarFieldEnum[]
  }

  /**
   * userquestionsets findMany
   */
  export type userquestionsetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * Filter, which userquestionsets to fetch.
     */
    where?: userquestionsetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userquestionsets to fetch.
     */
    orderBy?: userquestionsetsOrderByWithRelationInput | userquestionsetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userquestionsets.
     */
    cursor?: userquestionsetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userquestionsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userquestionsets.
     */
    skip?: number
    distinct?: UserquestionsetsScalarFieldEnum | UserquestionsetsScalarFieldEnum[]
  }

  /**
   * userquestionsets create
   */
  export type userquestionsetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * The data needed to create a userquestionsets.
     */
    data: XOR<userquestionsetsCreateInput, userquestionsetsUncheckedCreateInput>
  }

  /**
   * userquestionsets createMany
   */
  export type userquestionsetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userquestionsets.
     */
    data: userquestionsetsCreateManyInput | userquestionsetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userquestionsets update
   */
  export type userquestionsetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * The data needed to update a userquestionsets.
     */
    data: XOR<userquestionsetsUpdateInput, userquestionsetsUncheckedUpdateInput>
    /**
     * Choose, which userquestionsets to update.
     */
    where: userquestionsetsWhereUniqueInput
  }

  /**
   * userquestionsets updateMany
   */
  export type userquestionsetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userquestionsets.
     */
    data: XOR<userquestionsetsUpdateManyMutationInput, userquestionsetsUncheckedUpdateManyInput>
    /**
     * Filter which userquestionsets to update
     */
    where?: userquestionsetsWhereInput
    /**
     * Limit how many userquestionsets to update.
     */
    limit?: number
  }

  /**
   * userquestionsets upsert
   */
  export type userquestionsetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * The filter to search for the userquestionsets to update in case it exists.
     */
    where: userquestionsetsWhereUniqueInput
    /**
     * In case the userquestionsets found by the `where` argument doesn't exist, create a new userquestionsets with this data.
     */
    create: XOR<userquestionsetsCreateInput, userquestionsetsUncheckedCreateInput>
    /**
     * In case the userquestionsets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userquestionsetsUpdateInput, userquestionsetsUncheckedUpdateInput>
  }

  /**
   * userquestionsets delete
   */
  export type userquestionsetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
    /**
     * Filter which userquestionsets to delete.
     */
    where: userquestionsetsWhereUniqueInput
  }

  /**
   * userquestionsets deleteMany
   */
  export type userquestionsetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userquestionsets to delete
     */
    where?: userquestionsetsWhereInput
    /**
     * Limit how many userquestionsets to delete.
     */
    limit?: number
  }

  /**
   * userquestionsets without action
   */
  export type userquestionsetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userquestionsets
     */
    select?: userquestionsetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userquestionsets
     */
    omit?: userquestionsetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userquestionsetsInclude<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    category: 'category',
    type: 'type'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CommoncontentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    lastModifiedTime: 'lastModifiedTime'
  };

  export type CommoncontentsScalarFieldEnum = (typeof CommoncontentsScalarFieldEnum)[keyof typeof CommoncontentsScalarFieldEnum]


  export const CredithistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deductedCredits: 'deductedCredits',
    addedCredits: 'addedCredits',
    addedCreditsFromUserId: 'addedCreditsFromUserId',
    addedCreditsToUserId: 'addedCreditsToUserId',
    description: 'description',
    lastModifiedTime: 'lastModifiedTime'
  };

  export type CredithistoryScalarFieldEnum = (typeof CredithistoryScalarFieldEnum)[keyof typeof CredithistoryScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    text: 'text',
    fromId: 'fromId',
    toId: 'toId',
    questionId: 'questionId',
    isRead: 'isRead',
    lastModifiedTime: 'lastModifiedTime'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const PeopleScalarFieldEnum: {
    id: 'id',
    type: 'type',
    givenname: 'givenname',
    surname: 'surname',
    mobile: 'mobile',
    email: 'email',
    address: 'address',
    status: 'status',
    password: 'password',
    token: 'token',
    permission: 'permission',
    note: 'note',
    orders: 'orders',
    refNo: 'refNo',
    credits: 'credits',
    lastModifiedTime: 'lastModifiedTime'
  };

  export type PeopleScalarFieldEnum = (typeof PeopleScalarFieldEnum)[keyof typeof PeopleScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    categoryId: 'categoryId',
    setNo: 'setNo',
    commonContentId: 'commonContentId',
    content: 'content',
    answerA: 'answerA',
    answerB: 'answerB',
    answerC: 'answerC',
    answerD: 'answerD',
    answerE: 'answerE',
    note: 'note',
    correctAnswer: 'correctAnswer',
    wrongQuestionOfChenyi: 'wrongQuestionOfChenyi',
    newQuestionOfChenyi: 'newQuestionOfChenyi',
    source: 'source',
    correctAnswerCount: 'correctAnswerCount',
    totalAnswerCount: 'totalAnswerCount',
    lastModifiedTime: 'lastModifiedTime',
    level: 'level'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const UserquestionsScalarFieldEnum: {
    userId: 'userId',
    questionId: 'questionId',
    userAnswer: 'userAnswer',
    lastModifiedTime: 'lastModifiedTime'
  };

  export type UserquestionsScalarFieldEnum = (typeof UserquestionsScalarFieldEnum)[keyof typeof UserquestionsScalarFieldEnum]


  export const UserquestionsetsScalarFieldEnum: {
    userId: 'userId',
    setNo: 'setNo',
    type: 'type',
    finished: 'finished',
    lastModifiedTime: 'lastModifiedTime',
    random: 'random'
  };

  export type UserquestionsetsScalarFieldEnum = (typeof UserquestionsetsScalarFieldEnum)[keyof typeof UserquestionsetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const categoriesOrderByRelevanceFieldEnum: {
    category: 'category',
    type: 'type'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const commoncontentsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type commoncontentsOrderByRelevanceFieldEnum = (typeof commoncontentsOrderByRelevanceFieldEnum)[keyof typeof commoncontentsOrderByRelevanceFieldEnum]


  export const credithistoryOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type credithistoryOrderByRelevanceFieldEnum = (typeof credithistoryOrderByRelevanceFieldEnum)[keyof typeof credithistoryOrderByRelevanceFieldEnum]


  export const messagesOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type messagesOrderByRelevanceFieldEnum = (typeof messagesOrderByRelevanceFieldEnum)[keyof typeof messagesOrderByRelevanceFieldEnum]


  export const peopleOrderByRelevanceFieldEnum: {
    type: 'type',
    givenname: 'givenname',
    surname: 'surname',
    mobile: 'mobile',
    email: 'email',
    address: 'address',
    status: 'status',
    password: 'password',
    token: 'token',
    permission: 'permission',
    note: 'note',
    orders: 'orders',
    refNo: 'refNo'
  };

  export type peopleOrderByRelevanceFieldEnum = (typeof peopleOrderByRelevanceFieldEnum)[keyof typeof peopleOrderByRelevanceFieldEnum]


  export const questionsOrderByRelevanceFieldEnum: {
    type: 'type',
    content: 'content',
    answerA: 'answerA',
    answerB: 'answerB',
    answerC: 'answerC',
    answerD: 'answerD',
    answerE: 'answerE',
    note: 'note',
    correctAnswer: 'correctAnswer',
    source: 'source',
    level: 'level'
  };

  export type questionsOrderByRelevanceFieldEnum = (typeof questionsOrderByRelevanceFieldEnum)[keyof typeof questionsOrderByRelevanceFieldEnum]


  export const userquestionsOrderByRelevanceFieldEnum: {
    userAnswer: 'userAnswer'
  };

  export type userquestionsOrderByRelevanceFieldEnum = (typeof userquestionsOrderByRelevanceFieldEnum)[keyof typeof userquestionsOrderByRelevanceFieldEnum]


  export const userquestionsetsOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type userquestionsetsOrderByRelevanceFieldEnum = (typeof userquestionsetsOrderByRelevanceFieldEnum)[keyof typeof userquestionsetsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    category?: StringFilter<"categories"> | string
    type?: StringNullableFilter<"categories"> | string | null
    questions?: QuestionsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    type?: SortOrderInput | SortOrder
    questions?: questionsOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category?: StringFilter<"categories"> | string
    type?: StringNullableFilter<"categories"> | string | null
    questions?: QuestionsListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    category?: StringWithAggregatesFilter<"categories"> | string
    type?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type commoncontentsWhereInput = {
    AND?: commoncontentsWhereInput | commoncontentsWhereInput[]
    OR?: commoncontentsWhereInput[]
    NOT?: commoncontentsWhereInput | commoncontentsWhereInput[]
    id?: IntFilter<"commoncontents"> | number
    content?: StringFilter<"commoncontents"> | string
    lastModifiedTime?: DateTimeFilter<"commoncontents"> | Date | string
    questions?: QuestionsListRelationFilter
  }

  export type commoncontentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    lastModifiedTime?: SortOrder
    questions?: questionsOrderByRelationAggregateInput
    _relevance?: commoncontentsOrderByRelevanceInput
  }

  export type commoncontentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commoncontentsWhereInput | commoncontentsWhereInput[]
    OR?: commoncontentsWhereInput[]
    NOT?: commoncontentsWhereInput | commoncontentsWhereInput[]
    content?: StringFilter<"commoncontents"> | string
    lastModifiedTime?: DateTimeFilter<"commoncontents"> | Date | string
    questions?: QuestionsListRelationFilter
  }, "id">

  export type commoncontentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    lastModifiedTime?: SortOrder
    _count?: commoncontentsCountOrderByAggregateInput
    _avg?: commoncontentsAvgOrderByAggregateInput
    _max?: commoncontentsMaxOrderByAggregateInput
    _min?: commoncontentsMinOrderByAggregateInput
    _sum?: commoncontentsSumOrderByAggregateInput
  }

  export type commoncontentsScalarWhereWithAggregatesInput = {
    AND?: commoncontentsScalarWhereWithAggregatesInput | commoncontentsScalarWhereWithAggregatesInput[]
    OR?: commoncontentsScalarWhereWithAggregatesInput[]
    NOT?: commoncontentsScalarWhereWithAggregatesInput | commoncontentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"commoncontents"> | number
    content?: StringWithAggregatesFilter<"commoncontents"> | string
    lastModifiedTime?: DateTimeWithAggregatesFilter<"commoncontents"> | Date | string
  }

  export type credithistoryWhereInput = {
    AND?: credithistoryWhereInput | credithistoryWhereInput[]
    OR?: credithistoryWhereInput[]
    NOT?: credithistoryWhereInput | credithistoryWhereInput[]
    id?: IntFilter<"credithistory"> | number
    userId?: IntFilter<"credithistory"> | number
    deductedCredits?: IntNullableFilter<"credithistory"> | number | null
    addedCredits?: IntNullableFilter<"credithistory"> | number | null
    addedCreditsFromUserId?: IntNullableFilter<"credithistory"> | number | null
    addedCreditsToUserId?: IntNullableFilter<"credithistory"> | number | null
    description?: StringNullableFilter<"credithistory"> | string | null
    lastModifiedTime?: DateTimeFilter<"credithistory"> | Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: XOR<PeopleNullableScalarRelationFilter, peopleWhereInput> | null
    people_credithistory_userIdTopeople?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
    people_credithistory_addedCreditsToUserIdTopeople?: XOR<PeopleNullableScalarRelationFilter, peopleWhereInput> | null
  }

  export type credithistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrderInput | SortOrder
    addedCredits?: SortOrderInput | SortOrder
    addedCreditsFromUserId?: SortOrderInput | SortOrder
    addedCreditsToUserId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleOrderByWithRelationInput
    people_credithistory_userIdTopeople?: peopleOrderByWithRelationInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleOrderByWithRelationInput
    _relevance?: credithistoryOrderByRelevanceInput
  }

  export type credithistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: credithistoryWhereInput | credithistoryWhereInput[]
    OR?: credithistoryWhereInput[]
    NOT?: credithistoryWhereInput | credithistoryWhereInput[]
    userId?: IntFilter<"credithistory"> | number
    deductedCredits?: IntNullableFilter<"credithistory"> | number | null
    addedCredits?: IntNullableFilter<"credithistory"> | number | null
    addedCreditsFromUserId?: IntNullableFilter<"credithistory"> | number | null
    addedCreditsToUserId?: IntNullableFilter<"credithistory"> | number | null
    description?: StringNullableFilter<"credithistory"> | string | null
    lastModifiedTime?: DateTimeFilter<"credithistory"> | Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: XOR<PeopleNullableScalarRelationFilter, peopleWhereInput> | null
    people_credithistory_userIdTopeople?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
    people_credithistory_addedCreditsToUserIdTopeople?: XOR<PeopleNullableScalarRelationFilter, peopleWhereInput> | null
  }, "id">

  export type credithistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrderInput | SortOrder
    addedCredits?: SortOrderInput | SortOrder
    addedCreditsFromUserId?: SortOrderInput | SortOrder
    addedCreditsToUserId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    _count?: credithistoryCountOrderByAggregateInput
    _avg?: credithistoryAvgOrderByAggregateInput
    _max?: credithistoryMaxOrderByAggregateInput
    _min?: credithistoryMinOrderByAggregateInput
    _sum?: credithistorySumOrderByAggregateInput
  }

  export type credithistoryScalarWhereWithAggregatesInput = {
    AND?: credithistoryScalarWhereWithAggregatesInput | credithistoryScalarWhereWithAggregatesInput[]
    OR?: credithistoryScalarWhereWithAggregatesInput[]
    NOT?: credithistoryScalarWhereWithAggregatesInput | credithistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"credithistory"> | number
    userId?: IntWithAggregatesFilter<"credithistory"> | number
    deductedCredits?: IntNullableWithAggregatesFilter<"credithistory"> | number | null
    addedCredits?: IntNullableWithAggregatesFilter<"credithistory"> | number | null
    addedCreditsFromUserId?: IntNullableWithAggregatesFilter<"credithistory"> | number | null
    addedCreditsToUserId?: IntNullableWithAggregatesFilter<"credithistory"> | number | null
    description?: StringNullableWithAggregatesFilter<"credithistory"> | string | null
    lastModifiedTime?: DateTimeWithAggregatesFilter<"credithistory"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    text?: StringFilter<"messages"> | string
    fromId?: IntNullableFilter<"messages"> | number | null
    toId?: IntFilter<"messages"> | number
    questionId?: IntNullableFilter<"messages"> | number | null
    isRead?: IntFilter<"messages"> | number
    lastModifiedTime?: DateTimeFilter<"messages"> | Date | string
    people_messages_fromIdTopeople?: XOR<PeopleNullableScalarRelationFilter, peopleWhereInput> | null
    questions?: XOR<QuestionsNullableScalarRelationFilter, questionsWhereInput> | null
    people_messages_toIdTopeople?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrderInput | SortOrder
    toId?: SortOrder
    questionId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    lastModifiedTime?: SortOrder
    people_messages_fromIdTopeople?: peopleOrderByWithRelationInput
    questions?: questionsOrderByWithRelationInput
    people_messages_toIdTopeople?: peopleOrderByWithRelationInput
    _relevance?: messagesOrderByRelevanceInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    text?: StringFilter<"messages"> | string
    fromId?: IntNullableFilter<"messages"> | number | null
    toId?: IntFilter<"messages"> | number
    questionId?: IntNullableFilter<"messages"> | number | null
    isRead?: IntFilter<"messages"> | number
    lastModifiedTime?: DateTimeFilter<"messages"> | Date | string
    people_messages_fromIdTopeople?: XOR<PeopleNullableScalarRelationFilter, peopleWhereInput> | null
    questions?: XOR<QuestionsNullableScalarRelationFilter, questionsWhereInput> | null
    people_messages_toIdTopeople?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrderInput | SortOrder
    toId?: SortOrder
    questionId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    lastModifiedTime?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    text?: StringWithAggregatesFilter<"messages"> | string
    fromId?: IntNullableWithAggregatesFilter<"messages"> | number | null
    toId?: IntWithAggregatesFilter<"messages"> | number
    questionId?: IntNullableWithAggregatesFilter<"messages"> | number | null
    isRead?: IntWithAggregatesFilter<"messages"> | number
    lastModifiedTime?: DateTimeWithAggregatesFilter<"messages"> | Date | string
  }

  export type peopleWhereInput = {
    AND?: peopleWhereInput | peopleWhereInput[]
    OR?: peopleWhereInput[]
    NOT?: peopleWhereInput | peopleWhereInput[]
    id?: IntFilter<"people"> | number
    type?: StringFilter<"people"> | string
    givenname?: StringNullableFilter<"people"> | string | null
    surname?: StringNullableFilter<"people"> | string | null
    mobile?: StringNullableFilter<"people"> | string | null
    email?: StringNullableFilter<"people"> | string | null
    address?: StringNullableFilter<"people"> | string | null
    status?: StringNullableFilter<"people"> | string | null
    password?: StringNullableFilter<"people"> | string | null
    token?: StringNullableFilter<"people"> | string | null
    permission?: StringNullableFilter<"people"> | string | null
    note?: StringNullableFilter<"people"> | string | null
    orders?: StringNullableFilter<"people"> | string | null
    refNo?: StringNullableFilter<"people"> | string | null
    credits?: IntNullableFilter<"people"> | number | null
    lastModifiedTime?: DateTimeFilter<"people"> | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: CredithistoryListRelationFilter
    credithistory_credithistory_userIdTopeople?: CredithistoryListRelationFilter
    credithistory_credithistory_addedCreditsToUserIdTopeople?: CredithistoryListRelationFilter
    messages_messages_fromIdTopeople?: MessagesListRelationFilter
    messages_messages_toIdTopeople?: MessagesListRelationFilter
    userquestions?: UserquestionsListRelationFilter
    userquestionsets?: UserquestionsetsListRelationFilter
  }

  export type peopleOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    givenname?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    permission?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    orders?: SortOrderInput | SortOrder
    refNo?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryOrderByRelationAggregateInput
    credithistory_credithistory_userIdTopeople?: credithistoryOrderByRelationAggregateInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryOrderByRelationAggregateInput
    messages_messages_fromIdTopeople?: messagesOrderByRelationAggregateInput
    messages_messages_toIdTopeople?: messagesOrderByRelationAggregateInput
    userquestions?: userquestionsOrderByRelationAggregateInput
    userquestionsets?: userquestionsetsOrderByRelationAggregateInput
    _relevance?: peopleOrderByRelevanceInput
  }

  export type peopleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: peopleWhereInput | peopleWhereInput[]
    OR?: peopleWhereInput[]
    NOT?: peopleWhereInput | peopleWhereInput[]
    type?: StringFilter<"people"> | string
    givenname?: StringNullableFilter<"people"> | string | null
    surname?: StringNullableFilter<"people"> | string | null
    mobile?: StringNullableFilter<"people"> | string | null
    address?: StringNullableFilter<"people"> | string | null
    status?: StringNullableFilter<"people"> | string | null
    password?: StringNullableFilter<"people"> | string | null
    token?: StringNullableFilter<"people"> | string | null
    permission?: StringNullableFilter<"people"> | string | null
    note?: StringNullableFilter<"people"> | string | null
    orders?: StringNullableFilter<"people"> | string | null
    refNo?: StringNullableFilter<"people"> | string | null
    credits?: IntNullableFilter<"people"> | number | null
    lastModifiedTime?: DateTimeFilter<"people"> | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: CredithistoryListRelationFilter
    credithistory_credithistory_userIdTopeople?: CredithistoryListRelationFilter
    credithistory_credithistory_addedCreditsToUserIdTopeople?: CredithistoryListRelationFilter
    messages_messages_fromIdTopeople?: MessagesListRelationFilter
    messages_messages_toIdTopeople?: MessagesListRelationFilter
    userquestions?: UserquestionsListRelationFilter
    userquestionsets?: UserquestionsetsListRelationFilter
  }, "id" | "email">

  export type peopleOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    givenname?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    permission?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    orders?: SortOrderInput | SortOrder
    refNo?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    _count?: peopleCountOrderByAggregateInput
    _avg?: peopleAvgOrderByAggregateInput
    _max?: peopleMaxOrderByAggregateInput
    _min?: peopleMinOrderByAggregateInput
    _sum?: peopleSumOrderByAggregateInput
  }

  export type peopleScalarWhereWithAggregatesInput = {
    AND?: peopleScalarWhereWithAggregatesInput | peopleScalarWhereWithAggregatesInput[]
    OR?: peopleScalarWhereWithAggregatesInput[]
    NOT?: peopleScalarWhereWithAggregatesInput | peopleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"people"> | number
    type?: StringWithAggregatesFilter<"people"> | string
    givenname?: StringNullableWithAggregatesFilter<"people"> | string | null
    surname?: StringNullableWithAggregatesFilter<"people"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"people"> | string | null
    email?: StringNullableWithAggregatesFilter<"people"> | string | null
    address?: StringNullableWithAggregatesFilter<"people"> | string | null
    status?: StringNullableWithAggregatesFilter<"people"> | string | null
    password?: StringNullableWithAggregatesFilter<"people"> | string | null
    token?: StringNullableWithAggregatesFilter<"people"> | string | null
    permission?: StringNullableWithAggregatesFilter<"people"> | string | null
    note?: StringNullableWithAggregatesFilter<"people"> | string | null
    orders?: StringNullableWithAggregatesFilter<"people"> | string | null
    refNo?: StringNullableWithAggregatesFilter<"people"> | string | null
    credits?: IntNullableWithAggregatesFilter<"people"> | number | null
    lastModifiedTime?: DateTimeWithAggregatesFilter<"people"> | Date | string
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: IntFilter<"questions"> | number
    type?: StringNullableFilter<"questions"> | string | null
    categoryId?: IntNullableFilter<"questions"> | number | null
    setNo?: IntNullableFilter<"questions"> | number | null
    commonContentId?: IntNullableFilter<"questions"> | number | null
    content?: StringFilter<"questions"> | string
    answerA?: StringFilter<"questions"> | string
    answerB?: StringFilter<"questions"> | string
    answerC?: StringNullableFilter<"questions"> | string | null
    answerD?: StringNullableFilter<"questions"> | string | null
    answerE?: StringNullableFilter<"questions"> | string | null
    note?: StringNullableFilter<"questions"> | string | null
    correctAnswer?: StringFilter<"questions"> | string
    wrongQuestionOfChenyi?: IntNullableFilter<"questions"> | number | null
    newQuestionOfChenyi?: IntNullableFilter<"questions"> | number | null
    source?: StringNullableFilter<"questions"> | string | null
    correctAnswerCount?: IntNullableFilter<"questions"> | number | null
    totalAnswerCount?: IntNullableFilter<"questions"> | number | null
    lastModifiedTime?: DateTimeFilter<"questions"> | Date | string
    level?: StringNullableFilter<"questions"> | string | null
    messages?: MessagesListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    commoncontents?: XOR<CommoncontentsNullableScalarRelationFilter, commoncontentsWhereInput> | null
    userquestions?: UserquestionsListRelationFilter
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    setNo?: SortOrderInput | SortOrder
    commonContentId?: SortOrderInput | SortOrder
    content?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrderInput | SortOrder
    answerD?: SortOrderInput | SortOrder
    answerE?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    correctAnswer?: SortOrder
    wrongQuestionOfChenyi?: SortOrderInput | SortOrder
    newQuestionOfChenyi?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    correctAnswerCount?: SortOrderInput | SortOrder
    totalAnswerCount?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    level?: SortOrderInput | SortOrder
    messages?: messagesOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    commoncontents?: commoncontentsOrderByWithRelationInput
    userquestions?: userquestionsOrderByRelationAggregateInput
    _relevance?: questionsOrderByRelevanceInput
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    type?: StringNullableFilter<"questions"> | string | null
    categoryId?: IntNullableFilter<"questions"> | number | null
    setNo?: IntNullableFilter<"questions"> | number | null
    commonContentId?: IntNullableFilter<"questions"> | number | null
    content?: StringFilter<"questions"> | string
    answerA?: StringFilter<"questions"> | string
    answerB?: StringFilter<"questions"> | string
    answerC?: StringNullableFilter<"questions"> | string | null
    answerD?: StringNullableFilter<"questions"> | string | null
    answerE?: StringNullableFilter<"questions"> | string | null
    note?: StringNullableFilter<"questions"> | string | null
    correctAnswer?: StringFilter<"questions"> | string
    wrongQuestionOfChenyi?: IntNullableFilter<"questions"> | number | null
    newQuestionOfChenyi?: IntNullableFilter<"questions"> | number | null
    source?: StringNullableFilter<"questions"> | string | null
    correctAnswerCount?: IntNullableFilter<"questions"> | number | null
    totalAnswerCount?: IntNullableFilter<"questions"> | number | null
    lastModifiedTime?: DateTimeFilter<"questions"> | Date | string
    level?: StringNullableFilter<"questions"> | string | null
    messages?: MessagesListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    commoncontents?: XOR<CommoncontentsNullableScalarRelationFilter, commoncontentsWhereInput> | null
    userquestions?: UserquestionsListRelationFilter
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    setNo?: SortOrderInput | SortOrder
    commonContentId?: SortOrderInput | SortOrder
    content?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrderInput | SortOrder
    answerD?: SortOrderInput | SortOrder
    answerE?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    correctAnswer?: SortOrder
    wrongQuestionOfChenyi?: SortOrderInput | SortOrder
    newQuestionOfChenyi?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    correctAnswerCount?: SortOrderInput | SortOrder
    totalAnswerCount?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    level?: SortOrderInput | SortOrder
    _count?: questionsCountOrderByAggregateInput
    _avg?: questionsAvgOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
    _sum?: questionsSumOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"questions"> | number
    type?: StringNullableWithAggregatesFilter<"questions"> | string | null
    categoryId?: IntNullableWithAggregatesFilter<"questions"> | number | null
    setNo?: IntNullableWithAggregatesFilter<"questions"> | number | null
    commonContentId?: IntNullableWithAggregatesFilter<"questions"> | number | null
    content?: StringWithAggregatesFilter<"questions"> | string
    answerA?: StringWithAggregatesFilter<"questions"> | string
    answerB?: StringWithAggregatesFilter<"questions"> | string
    answerC?: StringNullableWithAggregatesFilter<"questions"> | string | null
    answerD?: StringNullableWithAggregatesFilter<"questions"> | string | null
    answerE?: StringNullableWithAggregatesFilter<"questions"> | string | null
    note?: StringNullableWithAggregatesFilter<"questions"> | string | null
    correctAnswer?: StringWithAggregatesFilter<"questions"> | string
    wrongQuestionOfChenyi?: IntNullableWithAggregatesFilter<"questions"> | number | null
    newQuestionOfChenyi?: IntNullableWithAggregatesFilter<"questions"> | number | null
    source?: StringNullableWithAggregatesFilter<"questions"> | string | null
    correctAnswerCount?: IntNullableWithAggregatesFilter<"questions"> | number | null
    totalAnswerCount?: IntNullableWithAggregatesFilter<"questions"> | number | null
    lastModifiedTime?: DateTimeWithAggregatesFilter<"questions"> | Date | string
    level?: StringNullableWithAggregatesFilter<"questions"> | string | null
  }

  export type userquestionsWhereInput = {
    AND?: userquestionsWhereInput | userquestionsWhereInput[]
    OR?: userquestionsWhereInput[]
    NOT?: userquestionsWhereInput | userquestionsWhereInput[]
    userId?: IntFilter<"userquestions"> | number
    questionId?: IntFilter<"userquestions"> | number
    userAnswer?: StringNullableFilter<"userquestions"> | string | null
    lastModifiedTime?: DateTimeFilter<"userquestions"> | Date | string
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
    people?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
  }

  export type userquestionsOrderByWithRelationInput = {
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    questions?: questionsOrderByWithRelationInput
    people?: peopleOrderByWithRelationInput
    _relevance?: userquestionsOrderByRelevanceInput
  }

  export type userquestionsWhereUniqueInput = Prisma.AtLeast<{
    userId_questionId?: userquestionsUserIdQuestionIdCompoundUniqueInput
    AND?: userquestionsWhereInput | userquestionsWhereInput[]
    OR?: userquestionsWhereInput[]
    NOT?: userquestionsWhereInput | userquestionsWhereInput[]
    userId?: IntFilter<"userquestions"> | number
    questionId?: IntFilter<"userquestions"> | number
    userAnswer?: StringNullableFilter<"userquestions"> | string | null
    lastModifiedTime?: DateTimeFilter<"userquestions"> | Date | string
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
    people?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
  }, "userId_questionId">

  export type userquestionsOrderByWithAggregationInput = {
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    _count?: userquestionsCountOrderByAggregateInput
    _avg?: userquestionsAvgOrderByAggregateInput
    _max?: userquestionsMaxOrderByAggregateInput
    _min?: userquestionsMinOrderByAggregateInput
    _sum?: userquestionsSumOrderByAggregateInput
  }

  export type userquestionsScalarWhereWithAggregatesInput = {
    AND?: userquestionsScalarWhereWithAggregatesInput | userquestionsScalarWhereWithAggregatesInput[]
    OR?: userquestionsScalarWhereWithAggregatesInput[]
    NOT?: userquestionsScalarWhereWithAggregatesInput | userquestionsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"userquestions"> | number
    questionId?: IntWithAggregatesFilter<"userquestions"> | number
    userAnswer?: StringNullableWithAggregatesFilter<"userquestions"> | string | null
    lastModifiedTime?: DateTimeWithAggregatesFilter<"userquestions"> | Date | string
  }

  export type userquestionsetsWhereInput = {
    AND?: userquestionsetsWhereInput | userquestionsetsWhereInput[]
    OR?: userquestionsetsWhereInput[]
    NOT?: userquestionsetsWhereInput | userquestionsetsWhereInput[]
    userId?: IntFilter<"userquestionsets"> | number
    setNo?: IntFilter<"userquestionsets"> | number
    type?: StringFilter<"userquestionsets"> | string
    finished?: IntNullableFilter<"userquestionsets"> | number | null
    lastModifiedTime?: DateTimeFilter<"userquestionsets"> | Date | string
    random?: FloatNullableFilter<"userquestionsets"> | number | null
    people?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
  }

  export type userquestionsetsOrderByWithRelationInput = {
    userId?: SortOrder
    setNo?: SortOrder
    type?: SortOrder
    finished?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    random?: SortOrderInput | SortOrder
    people?: peopleOrderByWithRelationInput
    _relevance?: userquestionsetsOrderByRelevanceInput
  }

  export type userquestionsetsWhereUniqueInput = Prisma.AtLeast<{
    userId_setNo_type?: userquestionsetsUserIdSetNoTypeCompoundUniqueInput
    AND?: userquestionsetsWhereInput | userquestionsetsWhereInput[]
    OR?: userquestionsetsWhereInput[]
    NOT?: userquestionsetsWhereInput | userquestionsetsWhereInput[]
    userId?: IntFilter<"userquestionsets"> | number
    setNo?: IntFilter<"userquestionsets"> | number
    type?: StringFilter<"userquestionsets"> | string
    finished?: IntNullableFilter<"userquestionsets"> | number | null
    lastModifiedTime?: DateTimeFilter<"userquestionsets"> | Date | string
    random?: FloatNullableFilter<"userquestionsets"> | number | null
    people?: XOR<PeopleScalarRelationFilter, peopleWhereInput>
  }, "userId_setNo_type">

  export type userquestionsetsOrderByWithAggregationInput = {
    userId?: SortOrder
    setNo?: SortOrder
    type?: SortOrder
    finished?: SortOrderInput | SortOrder
    lastModifiedTime?: SortOrder
    random?: SortOrderInput | SortOrder
    _count?: userquestionsetsCountOrderByAggregateInput
    _avg?: userquestionsetsAvgOrderByAggregateInput
    _max?: userquestionsetsMaxOrderByAggregateInput
    _min?: userquestionsetsMinOrderByAggregateInput
    _sum?: userquestionsetsSumOrderByAggregateInput
  }

  export type userquestionsetsScalarWhereWithAggregatesInput = {
    AND?: userquestionsetsScalarWhereWithAggregatesInput | userquestionsetsScalarWhereWithAggregatesInput[]
    OR?: userquestionsetsScalarWhereWithAggregatesInput[]
    NOT?: userquestionsetsScalarWhereWithAggregatesInput | userquestionsetsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"userquestionsets"> | number
    setNo?: IntWithAggregatesFilter<"userquestionsets"> | number
    type?: StringWithAggregatesFilter<"userquestionsets"> | string
    finished?: IntNullableWithAggregatesFilter<"userquestionsets"> | number | null
    lastModifiedTime?: DateTimeWithAggregatesFilter<"userquestionsets"> | Date | string
    random?: FloatNullableWithAggregatesFilter<"userquestionsets"> | number | null
  }

  export type categoriesCreateInput = {
    category: string
    type?: string | null
    questions?: questionsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    category: string
    type?: string | null
    questions?: questionsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    category: string
    type?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commoncontentsCreateInput = {
    content: string
    lastModifiedTime?: Date | string
    questions?: questionsCreateNestedManyWithoutCommoncontentsInput
  }

  export type commoncontentsUncheckedCreateInput = {
    id?: number
    content: string
    lastModifiedTime?: Date | string
    questions?: questionsUncheckedCreateNestedManyWithoutCommoncontentsInput
  }

  export type commoncontentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: questionsUpdateManyWithoutCommoncontentsNestedInput
  }

  export type commoncontentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: questionsUncheckedUpdateManyWithoutCommoncontentsNestedInput
  }

  export type commoncontentsCreateManyInput = {
    id?: number
    content: string
    lastModifiedTime?: Date | string
  }

  export type commoncontentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commoncontentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryCreateInput = {
    deductedCredits?: number | null
    addedCredits?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput
    people_credithistory_userIdTopeople: peopleCreateNestedOneWithoutCredithistory_credithistory_userIdTopeopleInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput
  }

  export type credithistoryUncheckedCreateInput = {
    id?: number
    userId: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsFromUserId?: number | null
    addedCreditsToUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryUpdateInput = {
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    people_credithistory_userIdTopeople?: peopleUpdateOneRequiredWithoutCredithistory_credithistory_userIdTopeopleNestedInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleNestedInput
  }

  export type credithistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsFromUserId?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsToUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryCreateManyInput = {
    id?: number
    userId: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsFromUserId?: number | null
    addedCreditsToUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryUpdateManyMutationInput = {
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsFromUserId?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsToUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    text: string
    isRead?: number
    lastModifiedTime?: Date | string
    people_messages_fromIdTopeople?: peopleCreateNestedOneWithoutMessages_messages_fromIdTopeopleInput
    questions?: questionsCreateNestedOneWithoutMessagesInput
    people_messages_toIdTopeople: peopleCreateNestedOneWithoutMessages_messages_toIdTopeopleInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    text: string
    fromId?: number | null
    toId: number
    questionId?: number | null
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type messagesUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_messages_fromIdTopeople?: peopleUpdateOneWithoutMessages_messages_fromIdTopeopleNestedInput
    questions?: questionsUpdateOneWithoutMessagesNestedInput
    people_messages_toIdTopeople?: peopleUpdateOneRequiredWithoutMessages_messages_toIdTopeopleNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fromId?: NullableIntFieldUpdateOperationsInput | number | null
    toId?: IntFieldUpdateOperationsInput | number
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyInput = {
    id?: number
    text: string
    fromId?: number | null
    toId: number
    questionId?: number | null
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type messagesUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fromId?: NullableIntFieldUpdateOperationsInput | number | null
    toId?: IntFieldUpdateOperationsInput | number
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peopleCreateInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type peopleCreateManyInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
  }

  export type peopleUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peopleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionsCreateInput = {
    type?: string | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesCreateNestedManyWithoutQuestionsInput
    categories?: categoriesCreateNestedOneWithoutQuestionsInput
    commoncontents?: commoncontentsCreateNestedOneWithoutQuestionsInput
    userquestions?: userquestionsCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateInput = {
    id?: number
    type?: string | null
    categoryId?: number | null
    setNo?: number | null
    commonContentId?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutQuestionsInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUpdateManyWithoutQuestionsNestedInput
    categories?: categoriesUpdateOneWithoutQuestionsNestedInput
    commoncontents?: commoncontentsUpdateOneWithoutQuestionsNestedInput
    userquestions?: userquestionsUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    commonContentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutQuestionsNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateManyInput = {
    id?: number
    type?: string | null
    categoryId?: number | null
    setNo?: number | null
    commonContentId?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
  }

  export type questionsUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    commonContentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userquestionsCreateInput = {
    userAnswer?: string | null
    lastModifiedTime?: Date | string
    questions: questionsCreateNestedOneWithoutUserquestionsInput
    people: peopleCreateNestedOneWithoutUserquestionsInput
  }

  export type userquestionsUncheckedCreateInput = {
    userId: number
    questionId: number
    userAnswer?: string | null
    lastModifiedTime?: Date | string
  }

  export type userquestionsUpdateInput = {
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: questionsUpdateOneRequiredWithoutUserquestionsNestedInput
    people?: peopleUpdateOneRequiredWithoutUserquestionsNestedInput
  }

  export type userquestionsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsCreateManyInput = {
    userId: number
    questionId: number
    userAnswer?: string | null
    lastModifiedTime?: Date | string
  }

  export type userquestionsUpdateManyMutationInput = {
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsetsCreateInput = {
    setNo: number
    type: string
    finished?: number | null
    lastModifiedTime?: Date | string
    random?: number | null
    people: peopleCreateNestedOneWithoutUserquestionsetsInput
  }

  export type userquestionsetsUncheckedCreateInput = {
    userId: number
    setNo: number
    type: string
    finished?: number | null
    lastModifiedTime?: Date | string
    random?: number | null
  }

  export type userquestionsetsUpdateInput = {
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
    people?: peopleUpdateOneRequiredWithoutUserquestionsetsNestedInput
  }

  export type userquestionsetsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type userquestionsetsCreateManyInput = {
    userId: number
    setNo: number
    type: string
    finished?: number | null
    lastModifiedTime?: Date | string
    random?: number | null
  }

  export type userquestionsetsUpdateManyMutationInput = {
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type userquestionsetsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type QuestionsListRelationFilter = {
    every?: questionsWhereInput
    some?: questionsWhereInput
    none?: questionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    type?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    type?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    type?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type commoncontentsOrderByRelevanceInput = {
    fields: commoncontentsOrderByRelevanceFieldEnum | commoncontentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commoncontentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type commoncontentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type commoncontentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type commoncontentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type commoncontentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PeopleNullableScalarRelationFilter = {
    is?: peopleWhereInput | null
    isNot?: peopleWhereInput | null
  }

  export type PeopleScalarRelationFilter = {
    is?: peopleWhereInput
    isNot?: peopleWhereInput
  }

  export type credithistoryOrderByRelevanceInput = {
    fields: credithistoryOrderByRelevanceFieldEnum | credithistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type credithistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrder
    addedCredits?: SortOrder
    addedCreditsFromUserId?: SortOrder
    addedCreditsToUserId?: SortOrder
    description?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type credithistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrder
    addedCredits?: SortOrder
    addedCreditsFromUserId?: SortOrder
    addedCreditsToUserId?: SortOrder
  }

  export type credithistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrder
    addedCredits?: SortOrder
    addedCreditsFromUserId?: SortOrder
    addedCreditsToUserId?: SortOrder
    description?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type credithistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrder
    addedCredits?: SortOrder
    addedCreditsFromUserId?: SortOrder
    addedCreditsToUserId?: SortOrder
    description?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type credithistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deductedCredits?: SortOrder
    addedCredits?: SortOrder
    addedCreditsFromUserId?: SortOrder
    addedCreditsToUserId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type QuestionsNullableScalarRelationFilter = {
    is?: questionsWhereInput | null
    isNot?: questionsWhereInput | null
  }

  export type messagesOrderByRelevanceInput = {
    fields: messagesOrderByRelevanceFieldEnum | messagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    questionId?: SortOrder
    isRead?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    questionId?: SortOrder
    isRead?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    questionId?: SortOrder
    isRead?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    questionId?: SortOrder
    isRead?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    questionId?: SortOrder
    isRead?: SortOrder
  }

  export type CredithistoryListRelationFilter = {
    every?: credithistoryWhereInput
    some?: credithistoryWhereInput
    none?: credithistoryWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type UserquestionsListRelationFilter = {
    every?: userquestionsWhereInput
    some?: userquestionsWhereInput
    none?: userquestionsWhereInput
  }

  export type UserquestionsetsListRelationFilter = {
    every?: userquestionsetsWhereInput
    some?: userquestionsetsWhereInput
    none?: userquestionsetsWhereInput
  }

  export type credithistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userquestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userquestionsetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type peopleOrderByRelevanceInput = {
    fields: peopleOrderByRelevanceFieldEnum | peopleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type peopleCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    givenname?: SortOrder
    surname?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    password?: SortOrder
    token?: SortOrder
    permission?: SortOrder
    note?: SortOrder
    orders?: SortOrder
    refNo?: SortOrder
    credits?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type peopleAvgOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
  }

  export type peopleMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    givenname?: SortOrder
    surname?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    password?: SortOrder
    token?: SortOrder
    permission?: SortOrder
    note?: SortOrder
    orders?: SortOrder
    refNo?: SortOrder
    credits?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type peopleMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    givenname?: SortOrder
    surname?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    password?: SortOrder
    token?: SortOrder
    permission?: SortOrder
    note?: SortOrder
    orders?: SortOrder
    refNo?: SortOrder
    credits?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type peopleSumOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type CommoncontentsNullableScalarRelationFilter = {
    is?: commoncontentsWhereInput | null
    isNot?: commoncontentsWhereInput | null
  }

  export type questionsOrderByRelevanceInput = {
    fields: questionsOrderByRelevanceFieldEnum | questionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    setNo?: SortOrder
    commonContentId?: SortOrder
    content?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    answerE?: SortOrder
    note?: SortOrder
    correctAnswer?: SortOrder
    wrongQuestionOfChenyi?: SortOrder
    newQuestionOfChenyi?: SortOrder
    source?: SortOrder
    correctAnswerCount?: SortOrder
    totalAnswerCount?: SortOrder
    lastModifiedTime?: SortOrder
    level?: SortOrder
  }

  export type questionsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    setNo?: SortOrder
    commonContentId?: SortOrder
    wrongQuestionOfChenyi?: SortOrder
    newQuestionOfChenyi?: SortOrder
    correctAnswerCount?: SortOrder
    totalAnswerCount?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    setNo?: SortOrder
    commonContentId?: SortOrder
    content?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    answerE?: SortOrder
    note?: SortOrder
    correctAnswer?: SortOrder
    wrongQuestionOfChenyi?: SortOrder
    newQuestionOfChenyi?: SortOrder
    source?: SortOrder
    correctAnswerCount?: SortOrder
    totalAnswerCount?: SortOrder
    lastModifiedTime?: SortOrder
    level?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    setNo?: SortOrder
    commonContentId?: SortOrder
    content?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    answerE?: SortOrder
    note?: SortOrder
    correctAnswer?: SortOrder
    wrongQuestionOfChenyi?: SortOrder
    newQuestionOfChenyi?: SortOrder
    source?: SortOrder
    correctAnswerCount?: SortOrder
    totalAnswerCount?: SortOrder
    lastModifiedTime?: SortOrder
    level?: SortOrder
  }

  export type questionsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    setNo?: SortOrder
    commonContentId?: SortOrder
    wrongQuestionOfChenyi?: SortOrder
    newQuestionOfChenyi?: SortOrder
    correctAnswerCount?: SortOrder
    totalAnswerCount?: SortOrder
  }

  export type QuestionsScalarRelationFilter = {
    is?: questionsWhereInput
    isNot?: questionsWhereInput
  }

  export type userquestionsOrderByRelevanceInput = {
    fields: userquestionsOrderByRelevanceFieldEnum | userquestionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userquestionsUserIdQuestionIdCompoundUniqueInput = {
    userId: number
    questionId: number
  }

  export type userquestionsCountOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type userquestionsAvgOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type userquestionsMaxOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type userquestionsMinOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    lastModifiedTime?: SortOrder
  }

  export type userquestionsSumOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type userquestionsetsOrderByRelevanceInput = {
    fields: userquestionsetsOrderByRelevanceFieldEnum | userquestionsetsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userquestionsetsUserIdSetNoTypeCompoundUniqueInput = {
    userId: number
    setNo: number
    type: string
  }

  export type userquestionsetsCountOrderByAggregateInput = {
    userId?: SortOrder
    setNo?: SortOrder
    type?: SortOrder
    finished?: SortOrder
    lastModifiedTime?: SortOrder
    random?: SortOrder
  }

  export type userquestionsetsAvgOrderByAggregateInput = {
    userId?: SortOrder
    setNo?: SortOrder
    finished?: SortOrder
    random?: SortOrder
  }

  export type userquestionsetsMaxOrderByAggregateInput = {
    userId?: SortOrder
    setNo?: SortOrder
    type?: SortOrder
    finished?: SortOrder
    lastModifiedTime?: SortOrder
    random?: SortOrder
  }

  export type userquestionsetsMinOrderByAggregateInput = {
    userId?: SortOrder
    setNo?: SortOrder
    type?: SortOrder
    finished?: SortOrder
    lastModifiedTime?: SortOrder
    random?: SortOrder
  }

  export type userquestionsetsSumOrderByAggregateInput = {
    userId?: SortOrder
    setNo?: SortOrder
    finished?: SortOrder
    random?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type questionsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<questionsCreateWithoutCategoriesInput, questionsUncheckedCreateWithoutCategoriesInput> | questionsCreateWithoutCategoriesInput[] | questionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCategoriesInput | questionsCreateOrConnectWithoutCategoriesInput[]
    createMany?: questionsCreateManyCategoriesInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<questionsCreateWithoutCategoriesInput, questionsUncheckedCreateWithoutCategoriesInput> | questionsCreateWithoutCategoriesInput[] | questionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCategoriesInput | questionsCreateOrConnectWithoutCategoriesInput[]
    createMany?: questionsCreateManyCategoriesInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type questionsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<questionsCreateWithoutCategoriesInput, questionsUncheckedCreateWithoutCategoriesInput> | questionsCreateWithoutCategoriesInput[] | questionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCategoriesInput | questionsCreateOrConnectWithoutCategoriesInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutCategoriesInput | questionsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: questionsCreateManyCategoriesInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutCategoriesInput | questionsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutCategoriesInput | questionsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type questionsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<questionsCreateWithoutCategoriesInput, questionsUncheckedCreateWithoutCategoriesInput> | questionsCreateWithoutCategoriesInput[] | questionsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCategoriesInput | questionsCreateOrConnectWithoutCategoriesInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutCategoriesInput | questionsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: questionsCreateManyCategoriesInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutCategoriesInput | questionsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutCategoriesInput | questionsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type questionsCreateNestedManyWithoutCommoncontentsInput = {
    create?: XOR<questionsCreateWithoutCommoncontentsInput, questionsUncheckedCreateWithoutCommoncontentsInput> | questionsCreateWithoutCommoncontentsInput[] | questionsUncheckedCreateWithoutCommoncontentsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCommoncontentsInput | questionsCreateOrConnectWithoutCommoncontentsInput[]
    createMany?: questionsCreateManyCommoncontentsInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutCommoncontentsInput = {
    create?: XOR<questionsCreateWithoutCommoncontentsInput, questionsUncheckedCreateWithoutCommoncontentsInput> | questionsCreateWithoutCommoncontentsInput[] | questionsUncheckedCreateWithoutCommoncontentsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCommoncontentsInput | questionsCreateOrConnectWithoutCommoncontentsInput[]
    createMany?: questionsCreateManyCommoncontentsInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type questionsUpdateManyWithoutCommoncontentsNestedInput = {
    create?: XOR<questionsCreateWithoutCommoncontentsInput, questionsUncheckedCreateWithoutCommoncontentsInput> | questionsCreateWithoutCommoncontentsInput[] | questionsUncheckedCreateWithoutCommoncontentsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCommoncontentsInput | questionsCreateOrConnectWithoutCommoncontentsInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutCommoncontentsInput | questionsUpsertWithWhereUniqueWithoutCommoncontentsInput[]
    createMany?: questionsCreateManyCommoncontentsInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutCommoncontentsInput | questionsUpdateWithWhereUniqueWithoutCommoncontentsInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutCommoncontentsInput | questionsUpdateManyWithWhereWithoutCommoncontentsInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutCommoncontentsNestedInput = {
    create?: XOR<questionsCreateWithoutCommoncontentsInput, questionsUncheckedCreateWithoutCommoncontentsInput> | questionsCreateWithoutCommoncontentsInput[] | questionsUncheckedCreateWithoutCommoncontentsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutCommoncontentsInput | questionsCreateOrConnectWithoutCommoncontentsInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutCommoncontentsInput | questionsUpsertWithWhereUniqueWithoutCommoncontentsInput[]
    createMany?: questionsCreateManyCommoncontentsInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutCommoncontentsInput | questionsUpdateWithWhereUniqueWithoutCommoncontentsInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutCommoncontentsInput | questionsUpdateManyWithWhereWithoutCommoncontentsInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    create?: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput
    connect?: peopleWhereUniqueInput
  }

  export type peopleCreateNestedOneWithoutCredithistory_credithistory_userIdTopeopleInput = {
    create?: XOR<peopleCreateWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_userIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutCredithistory_credithistory_userIdTopeopleInput
    connect?: peopleWhereUniqueInput
  }

  export type peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    create?: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput
    connect?: peopleWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleNestedInput = {
    create?: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput
    upsert?: peopleUpsertWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput
    disconnect?: peopleWhereInput | boolean
    delete?: peopleWhereInput | boolean
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>, peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type peopleUpdateOneRequiredWithoutCredithistory_credithistory_userIdTopeopleNestedInput = {
    create?: XOR<peopleCreateWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_userIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutCredithistory_credithistory_userIdTopeopleInput
    upsert?: peopleUpsertWithoutCredithistory_credithistory_userIdTopeopleInput
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUpdateWithoutCredithistory_credithistory_userIdTopeopleInput>, peopleUncheckedUpdateWithoutCredithistory_credithistory_userIdTopeopleInput>
  }

  export type peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleNestedInput = {
    create?: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput
    upsert?: peopleUpsertWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput
    disconnect?: peopleWhereInput | boolean
    delete?: peopleWhereInput | boolean
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>, peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type peopleCreateNestedOneWithoutMessages_messages_fromIdTopeopleInput = {
    create?: XOR<peopleCreateWithoutMessages_messages_fromIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_fromIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutMessages_messages_fromIdTopeopleInput
    connect?: peopleWhereUniqueInput
  }

  export type questionsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<questionsCreateWithoutMessagesInput, questionsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutMessagesInput
    connect?: questionsWhereUniqueInput
  }

  export type peopleCreateNestedOneWithoutMessages_messages_toIdTopeopleInput = {
    create?: XOR<peopleCreateWithoutMessages_messages_toIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_toIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutMessages_messages_toIdTopeopleInput
    connect?: peopleWhereUniqueInput
  }

  export type peopleUpdateOneWithoutMessages_messages_fromIdTopeopleNestedInput = {
    create?: XOR<peopleCreateWithoutMessages_messages_fromIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_fromIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutMessages_messages_fromIdTopeopleInput
    upsert?: peopleUpsertWithoutMessages_messages_fromIdTopeopleInput
    disconnect?: peopleWhereInput | boolean
    delete?: peopleWhereInput | boolean
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutMessages_messages_fromIdTopeopleInput, peopleUpdateWithoutMessages_messages_fromIdTopeopleInput>, peopleUncheckedUpdateWithoutMessages_messages_fromIdTopeopleInput>
  }

  export type questionsUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<questionsCreateWithoutMessagesInput, questionsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: questionsCreateOrConnectWithoutMessagesInput
    upsert?: questionsUpsertWithoutMessagesInput
    disconnect?: questionsWhereInput | boolean
    delete?: questionsWhereInput | boolean
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutMessagesInput, questionsUpdateWithoutMessagesInput>, questionsUncheckedUpdateWithoutMessagesInput>
  }

  export type peopleUpdateOneRequiredWithoutMessages_messages_toIdTopeopleNestedInput = {
    create?: XOR<peopleCreateWithoutMessages_messages_toIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_toIdTopeopleInput>
    connectOrCreate?: peopleCreateOrConnectWithoutMessages_messages_toIdTopeopleInput
    upsert?: peopleUpsertWithoutMessages_messages_toIdTopeopleInput
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutMessages_messages_toIdTopeopleInput, peopleUpdateWithoutMessages_messages_toIdTopeopleInput>, peopleUncheckedUpdateWithoutMessages_messages_toIdTopeopleInput>
  }

  export type credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInputEnvelope
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
  }

  export type credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_userIdTopeopleInputEnvelope
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
  }

  export type credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInputEnvelope
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput> | messagesCreateWithoutPeople_messages_fromIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_fromIdTopeopleInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput> | messagesCreateWithoutPeople_messages_toIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_toIdTopeopleInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type userquestionsCreateNestedManyWithoutPeopleInput = {
    create?: XOR<userquestionsCreateWithoutPeopleInput, userquestionsUncheckedCreateWithoutPeopleInput> | userquestionsCreateWithoutPeopleInput[] | userquestionsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutPeopleInput | userquestionsCreateOrConnectWithoutPeopleInput[]
    createMany?: userquestionsCreateManyPeopleInputEnvelope
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
  }

  export type userquestionsetsCreateNestedManyWithoutPeopleInput = {
    create?: XOR<userquestionsetsCreateWithoutPeopleInput, userquestionsetsUncheckedCreateWithoutPeopleInput> | userquestionsetsCreateWithoutPeopleInput[] | userquestionsetsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsetsCreateOrConnectWithoutPeopleInput | userquestionsetsCreateOrConnectWithoutPeopleInput[]
    createMany?: userquestionsetsCreateManyPeopleInputEnvelope
    connect?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
  }

  export type credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInputEnvelope
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
  }

  export type credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_userIdTopeopleInputEnvelope
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
  }

  export type credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInputEnvelope
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput> | messagesCreateWithoutPeople_messages_fromIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_fromIdTopeopleInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput> | messagesCreateWithoutPeople_messages_toIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_toIdTopeopleInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type userquestionsUncheckedCreateNestedManyWithoutPeopleInput = {
    create?: XOR<userquestionsCreateWithoutPeopleInput, userquestionsUncheckedCreateWithoutPeopleInput> | userquestionsCreateWithoutPeopleInput[] | userquestionsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutPeopleInput | userquestionsCreateOrConnectWithoutPeopleInput[]
    createMany?: userquestionsCreateManyPeopleInputEnvelope
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
  }

  export type userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput = {
    create?: XOR<userquestionsetsCreateWithoutPeopleInput, userquestionsetsUncheckedCreateWithoutPeopleInput> | userquestionsetsCreateWithoutPeopleInput[] | userquestionsetsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsetsCreateOrConnectWithoutPeopleInput | userquestionsetsCreateOrConnectWithoutPeopleInput[]
    createMany?: userquestionsetsCreateManyPeopleInputEnvelope
    connect?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
  }

  export type credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    upsert?: credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInputEnvelope
    set?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    disconnect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    delete?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    update?: credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    updateMany?: credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    deleteMany?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
  }

  export type credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput[]
    upsert?: credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput | credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_userIdTopeopleInputEnvelope
    set?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    disconnect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    delete?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    update?: credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput | credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput[]
    updateMany?: credithistoryUpdateManyWithWhereWithoutPeople_credithistory_userIdTopeopleInput | credithistoryUpdateManyWithWhereWithoutPeople_credithistory_userIdTopeopleInput[]
    deleteMany?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
  }

  export type credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    upsert?: credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInputEnvelope
    set?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    disconnect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    delete?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    update?: credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    updateMany?: credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    deleteMany?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput> | messagesCreateWithoutPeople_messages_fromIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput | messagesUpsertWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_fromIdTopeopleInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput | messagesUpdateWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutPeople_messages_fromIdTopeopleInput | messagesUpdateManyWithWhereWithoutPeople_messages_fromIdTopeopleInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput> | messagesCreateWithoutPeople_messages_toIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput | messagesUpsertWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_toIdTopeopleInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput | messagesUpdateWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutPeople_messages_toIdTopeopleInput | messagesUpdateManyWithWhereWithoutPeople_messages_toIdTopeopleInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type userquestionsUpdateManyWithoutPeopleNestedInput = {
    create?: XOR<userquestionsCreateWithoutPeopleInput, userquestionsUncheckedCreateWithoutPeopleInput> | userquestionsCreateWithoutPeopleInput[] | userquestionsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutPeopleInput | userquestionsCreateOrConnectWithoutPeopleInput[]
    upsert?: userquestionsUpsertWithWhereUniqueWithoutPeopleInput | userquestionsUpsertWithWhereUniqueWithoutPeopleInput[]
    createMany?: userquestionsCreateManyPeopleInputEnvelope
    set?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    disconnect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    delete?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    update?: userquestionsUpdateWithWhereUniqueWithoutPeopleInput | userquestionsUpdateWithWhereUniqueWithoutPeopleInput[]
    updateMany?: userquestionsUpdateManyWithWhereWithoutPeopleInput | userquestionsUpdateManyWithWhereWithoutPeopleInput[]
    deleteMany?: userquestionsScalarWhereInput | userquestionsScalarWhereInput[]
  }

  export type userquestionsetsUpdateManyWithoutPeopleNestedInput = {
    create?: XOR<userquestionsetsCreateWithoutPeopleInput, userquestionsetsUncheckedCreateWithoutPeopleInput> | userquestionsetsCreateWithoutPeopleInput[] | userquestionsetsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsetsCreateOrConnectWithoutPeopleInput | userquestionsetsCreateOrConnectWithoutPeopleInput[]
    upsert?: userquestionsetsUpsertWithWhereUniqueWithoutPeopleInput | userquestionsetsUpsertWithWhereUniqueWithoutPeopleInput[]
    createMany?: userquestionsetsCreateManyPeopleInputEnvelope
    set?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    disconnect?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    delete?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    connect?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    update?: userquestionsetsUpdateWithWhereUniqueWithoutPeopleInput | userquestionsetsUpdateWithWhereUniqueWithoutPeopleInput[]
    updateMany?: userquestionsetsUpdateManyWithWhereWithoutPeopleInput | userquestionsetsUpdateManyWithWhereWithoutPeopleInput[]
    deleteMany?: userquestionsetsScalarWhereInput | userquestionsetsScalarWhereInput[]
  }

  export type credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    upsert?: credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInputEnvelope
    set?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    disconnect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    delete?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    update?: credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    updateMany?: credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    deleteMany?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
  }

  export type credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput[]
    upsert?: credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput | credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_userIdTopeopleInputEnvelope
    set?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    disconnect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    delete?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    update?: credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput | credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput[]
    updateMany?: credithistoryUpdateManyWithWhereWithoutPeople_credithistory_userIdTopeopleInput | credithistoryUpdateManyWithWhereWithoutPeople_credithistory_userIdTopeopleInput[]
    deleteMany?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
  }

  export type credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput = {
    create?: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput> | credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[] | credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    connectOrCreate?: credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    upsert?: credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    createMany?: credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInputEnvelope
    set?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    disconnect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    delete?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    connect?: credithistoryWhereUniqueInput | credithistoryWhereUniqueInput[]
    update?: credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    updateMany?: credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    deleteMany?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput> | messagesCreateWithoutPeople_messages_fromIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput | messagesUpsertWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_fromIdTopeopleInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput | messagesUpdateWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutPeople_messages_fromIdTopeopleInput | messagesUpdateManyWithWhereWithoutPeople_messages_fromIdTopeopleInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput = {
    create?: XOR<messagesCreateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput> | messagesCreateWithoutPeople_messages_toIdTopeopleInput[] | messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput | messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput | messagesUpsertWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput[]
    createMany?: messagesCreateManyPeople_messages_toIdTopeopleInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput | messagesUpdateWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutPeople_messages_toIdTopeopleInput | messagesUpdateManyWithWhereWithoutPeople_messages_toIdTopeopleInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type userquestionsUncheckedUpdateManyWithoutPeopleNestedInput = {
    create?: XOR<userquestionsCreateWithoutPeopleInput, userquestionsUncheckedCreateWithoutPeopleInput> | userquestionsCreateWithoutPeopleInput[] | userquestionsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutPeopleInput | userquestionsCreateOrConnectWithoutPeopleInput[]
    upsert?: userquestionsUpsertWithWhereUniqueWithoutPeopleInput | userquestionsUpsertWithWhereUniqueWithoutPeopleInput[]
    createMany?: userquestionsCreateManyPeopleInputEnvelope
    set?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    disconnect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    delete?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    update?: userquestionsUpdateWithWhereUniqueWithoutPeopleInput | userquestionsUpdateWithWhereUniqueWithoutPeopleInput[]
    updateMany?: userquestionsUpdateManyWithWhereWithoutPeopleInput | userquestionsUpdateManyWithWhereWithoutPeopleInput[]
    deleteMany?: userquestionsScalarWhereInput | userquestionsScalarWhereInput[]
  }

  export type userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput = {
    create?: XOR<userquestionsetsCreateWithoutPeopleInput, userquestionsetsUncheckedCreateWithoutPeopleInput> | userquestionsetsCreateWithoutPeopleInput[] | userquestionsetsUncheckedCreateWithoutPeopleInput[]
    connectOrCreate?: userquestionsetsCreateOrConnectWithoutPeopleInput | userquestionsetsCreateOrConnectWithoutPeopleInput[]
    upsert?: userquestionsetsUpsertWithWhereUniqueWithoutPeopleInput | userquestionsetsUpsertWithWhereUniqueWithoutPeopleInput[]
    createMany?: userquestionsetsCreateManyPeopleInputEnvelope
    set?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    disconnect?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    delete?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    connect?: userquestionsetsWhereUniqueInput | userquestionsetsWhereUniqueInput[]
    update?: userquestionsetsUpdateWithWhereUniqueWithoutPeopleInput | userquestionsetsUpdateWithWhereUniqueWithoutPeopleInput[]
    updateMany?: userquestionsetsUpdateManyWithWhereWithoutPeopleInput | userquestionsetsUpdateManyWithWhereWithoutPeopleInput[]
    deleteMany?: userquestionsetsScalarWhereInput | userquestionsetsScalarWhereInput[]
  }

  export type messagesCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<messagesCreateWithoutQuestionsInput, messagesUncheckedCreateWithoutQuestionsInput> | messagesCreateWithoutQuestionsInput[] | messagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutQuestionsInput | messagesCreateOrConnectWithoutQuestionsInput[]
    createMany?: messagesCreateManyQuestionsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<categoriesCreateWithoutQuestionsInput, categoriesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutQuestionsInput
    connect?: categoriesWhereUniqueInput
  }

  export type commoncontentsCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<commoncontentsCreateWithoutQuestionsInput, commoncontentsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: commoncontentsCreateOrConnectWithoutQuestionsInput
    connect?: commoncontentsWhereUniqueInput
  }

  export type userquestionsCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<userquestionsCreateWithoutQuestionsInput, userquestionsUncheckedCreateWithoutQuestionsInput> | userquestionsCreateWithoutQuestionsInput[] | userquestionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutQuestionsInput | userquestionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: userquestionsCreateManyQuestionsInputEnvelope
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<messagesCreateWithoutQuestionsInput, messagesUncheckedCreateWithoutQuestionsInput> | messagesCreateWithoutQuestionsInput[] | messagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutQuestionsInput | messagesCreateOrConnectWithoutQuestionsInput[]
    createMany?: messagesCreateManyQuestionsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type userquestionsUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<userquestionsCreateWithoutQuestionsInput, userquestionsUncheckedCreateWithoutQuestionsInput> | userquestionsCreateWithoutQuestionsInput[] | userquestionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutQuestionsInput | userquestionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: userquestionsCreateManyQuestionsInputEnvelope
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
  }

  export type messagesUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<messagesCreateWithoutQuestionsInput, messagesUncheckedCreateWithoutQuestionsInput> | messagesCreateWithoutQuestionsInput[] | messagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutQuestionsInput | messagesCreateOrConnectWithoutQuestionsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutQuestionsInput | messagesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: messagesCreateManyQuestionsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutQuestionsInput | messagesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutQuestionsInput | messagesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type categoriesUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<categoriesCreateWithoutQuestionsInput, categoriesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutQuestionsInput
    upsert?: categoriesUpsertWithoutQuestionsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutQuestionsInput, categoriesUpdateWithoutQuestionsInput>, categoriesUncheckedUpdateWithoutQuestionsInput>
  }

  export type commoncontentsUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<commoncontentsCreateWithoutQuestionsInput, commoncontentsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: commoncontentsCreateOrConnectWithoutQuestionsInput
    upsert?: commoncontentsUpsertWithoutQuestionsInput
    disconnect?: commoncontentsWhereInput | boolean
    delete?: commoncontentsWhereInput | boolean
    connect?: commoncontentsWhereUniqueInput
    update?: XOR<XOR<commoncontentsUpdateToOneWithWhereWithoutQuestionsInput, commoncontentsUpdateWithoutQuestionsInput>, commoncontentsUncheckedUpdateWithoutQuestionsInput>
  }

  export type userquestionsUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<userquestionsCreateWithoutQuestionsInput, userquestionsUncheckedCreateWithoutQuestionsInput> | userquestionsCreateWithoutQuestionsInput[] | userquestionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutQuestionsInput | userquestionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: userquestionsUpsertWithWhereUniqueWithoutQuestionsInput | userquestionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: userquestionsCreateManyQuestionsInputEnvelope
    set?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    disconnect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    delete?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    update?: userquestionsUpdateWithWhereUniqueWithoutQuestionsInput | userquestionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: userquestionsUpdateManyWithWhereWithoutQuestionsInput | userquestionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: userquestionsScalarWhereInput | userquestionsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<messagesCreateWithoutQuestionsInput, messagesUncheckedCreateWithoutQuestionsInput> | messagesCreateWithoutQuestionsInput[] | messagesUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutQuestionsInput | messagesCreateOrConnectWithoutQuestionsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutQuestionsInput | messagesUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: messagesCreateManyQuestionsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutQuestionsInput | messagesUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutQuestionsInput | messagesUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type userquestionsUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<userquestionsCreateWithoutQuestionsInput, userquestionsUncheckedCreateWithoutQuestionsInput> | userquestionsCreateWithoutQuestionsInput[] | userquestionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: userquestionsCreateOrConnectWithoutQuestionsInput | userquestionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: userquestionsUpsertWithWhereUniqueWithoutQuestionsInput | userquestionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: userquestionsCreateManyQuestionsInputEnvelope
    set?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    disconnect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    delete?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    connect?: userquestionsWhereUniqueInput | userquestionsWhereUniqueInput[]
    update?: userquestionsUpdateWithWhereUniqueWithoutQuestionsInput | userquestionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: userquestionsUpdateManyWithWhereWithoutQuestionsInput | userquestionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: userquestionsScalarWhereInput | userquestionsScalarWhereInput[]
  }

  export type questionsCreateNestedOneWithoutUserquestionsInput = {
    create?: XOR<questionsCreateWithoutUserquestionsInput, questionsUncheckedCreateWithoutUserquestionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutUserquestionsInput
    connect?: questionsWhereUniqueInput
  }

  export type peopleCreateNestedOneWithoutUserquestionsInput = {
    create?: XOR<peopleCreateWithoutUserquestionsInput, peopleUncheckedCreateWithoutUserquestionsInput>
    connectOrCreate?: peopleCreateOrConnectWithoutUserquestionsInput
    connect?: peopleWhereUniqueInput
  }

  export type questionsUpdateOneRequiredWithoutUserquestionsNestedInput = {
    create?: XOR<questionsCreateWithoutUserquestionsInput, questionsUncheckedCreateWithoutUserquestionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutUserquestionsInput
    upsert?: questionsUpsertWithoutUserquestionsInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutUserquestionsInput, questionsUpdateWithoutUserquestionsInput>, questionsUncheckedUpdateWithoutUserquestionsInput>
  }

  export type peopleUpdateOneRequiredWithoutUserquestionsNestedInput = {
    create?: XOR<peopleCreateWithoutUserquestionsInput, peopleUncheckedCreateWithoutUserquestionsInput>
    connectOrCreate?: peopleCreateOrConnectWithoutUserquestionsInput
    upsert?: peopleUpsertWithoutUserquestionsInput
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutUserquestionsInput, peopleUpdateWithoutUserquestionsInput>, peopleUncheckedUpdateWithoutUserquestionsInput>
  }

  export type peopleCreateNestedOneWithoutUserquestionsetsInput = {
    create?: XOR<peopleCreateWithoutUserquestionsetsInput, peopleUncheckedCreateWithoutUserquestionsetsInput>
    connectOrCreate?: peopleCreateOrConnectWithoutUserquestionsetsInput
    connect?: peopleWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type peopleUpdateOneRequiredWithoutUserquestionsetsNestedInput = {
    create?: XOR<peopleCreateWithoutUserquestionsetsInput, peopleUncheckedCreateWithoutUserquestionsetsInput>
    connectOrCreate?: peopleCreateOrConnectWithoutUserquestionsetsInput
    upsert?: peopleUpsertWithoutUserquestionsetsInput
    connect?: peopleWhereUniqueInput
    update?: XOR<XOR<peopleUpdateToOneWithWhereWithoutUserquestionsetsInput, peopleUpdateWithoutUserquestionsetsInput>, peopleUncheckedUpdateWithoutUserquestionsetsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type questionsCreateWithoutCategoriesInput = {
    type?: string | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesCreateNestedManyWithoutQuestionsInput
    commoncontents?: commoncontentsCreateNestedOneWithoutQuestionsInput
    userquestions?: userquestionsCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    type?: string | null
    setNo?: number | null
    commonContentId?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutQuestionsInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutCategoriesInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutCategoriesInput, questionsUncheckedCreateWithoutCategoriesInput>
  }

  export type questionsCreateManyCategoriesInputEnvelope = {
    data: questionsCreateManyCategoriesInput | questionsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type questionsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutCategoriesInput, questionsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<questionsCreateWithoutCategoriesInput, questionsUncheckedCreateWithoutCategoriesInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutCategoriesInput, questionsUncheckedUpdateWithoutCategoriesInput>
  }

  export type questionsUpdateManyWithWhereWithoutCategoriesInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type questionsScalarWhereInput = {
    AND?: questionsScalarWhereInput | questionsScalarWhereInput[]
    OR?: questionsScalarWhereInput[]
    NOT?: questionsScalarWhereInput | questionsScalarWhereInput[]
    id?: IntFilter<"questions"> | number
    type?: StringNullableFilter<"questions"> | string | null
    categoryId?: IntNullableFilter<"questions"> | number | null
    setNo?: IntNullableFilter<"questions"> | number | null
    commonContentId?: IntNullableFilter<"questions"> | number | null
    content?: StringFilter<"questions"> | string
    answerA?: StringFilter<"questions"> | string
    answerB?: StringFilter<"questions"> | string
    answerC?: StringNullableFilter<"questions"> | string | null
    answerD?: StringNullableFilter<"questions"> | string | null
    answerE?: StringNullableFilter<"questions"> | string | null
    note?: StringNullableFilter<"questions"> | string | null
    correctAnswer?: StringFilter<"questions"> | string
    wrongQuestionOfChenyi?: IntNullableFilter<"questions"> | number | null
    newQuestionOfChenyi?: IntNullableFilter<"questions"> | number | null
    source?: StringNullableFilter<"questions"> | string | null
    correctAnswerCount?: IntNullableFilter<"questions"> | number | null
    totalAnswerCount?: IntNullableFilter<"questions"> | number | null
    lastModifiedTime?: DateTimeFilter<"questions"> | Date | string
    level?: StringNullableFilter<"questions"> | string | null
  }

  export type questionsCreateWithoutCommoncontentsInput = {
    type?: string | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesCreateNestedManyWithoutQuestionsInput
    categories?: categoriesCreateNestedOneWithoutQuestionsInput
    userquestions?: userquestionsCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutCommoncontentsInput = {
    id?: number
    type?: string | null
    categoryId?: number | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutQuestionsInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutCommoncontentsInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutCommoncontentsInput, questionsUncheckedCreateWithoutCommoncontentsInput>
  }

  export type questionsCreateManyCommoncontentsInputEnvelope = {
    data: questionsCreateManyCommoncontentsInput | questionsCreateManyCommoncontentsInput[]
    skipDuplicates?: boolean
  }

  export type questionsUpsertWithWhereUniqueWithoutCommoncontentsInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutCommoncontentsInput, questionsUncheckedUpdateWithoutCommoncontentsInput>
    create: XOR<questionsCreateWithoutCommoncontentsInput, questionsUncheckedCreateWithoutCommoncontentsInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutCommoncontentsInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutCommoncontentsInput, questionsUncheckedUpdateWithoutCommoncontentsInput>
  }

  export type questionsUpdateManyWithWhereWithoutCommoncontentsInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutCommoncontentsInput>
  }

  export type peopleCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type peopleCreateWithoutCredithistory_credithistory_userIdTopeopleInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutCredithistory_credithistory_userIdTopeopleInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutCredithistory_credithistory_userIdTopeopleInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_userIdTopeopleInput>
  }

  export type peopleCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type peopleUpsertWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    update: XOR<peopleUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
    create: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput, peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type peopleUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUpsertWithoutCredithistory_credithistory_userIdTopeopleInput = {
    update: XOR<peopleUpdateWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUncheckedUpdateWithoutCredithistory_credithistory_userIdTopeopleInput>
    create: XOR<peopleCreateWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_userIdTopeopleInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutCredithistory_credithistory_userIdTopeopleInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutCredithistory_credithistory_userIdTopeopleInput, peopleUncheckedUpdateWithoutCredithistory_credithistory_userIdTopeopleInput>
  }

  export type peopleUpdateWithoutCredithistory_credithistory_userIdTopeopleInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutCredithistory_credithistory_userIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUpsertWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    update: XOR<peopleUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
    create: XOR<peopleCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUncheckedCreateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput, peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type peopleUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type peopleCreateWithoutMessages_messages_fromIdTopeopleInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutMessages_messages_fromIdTopeopleInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutMessages_messages_fromIdTopeopleInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutMessages_messages_fromIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_fromIdTopeopleInput>
  }

  export type questionsCreateWithoutMessagesInput = {
    type?: string | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    categories?: categoriesCreateNestedOneWithoutQuestionsInput
    commoncontents?: commoncontentsCreateNestedOneWithoutQuestionsInput
    userquestions?: userquestionsCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutMessagesInput = {
    id?: number
    type?: string | null
    categoryId?: number | null
    setNo?: number | null
    commonContentId?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutMessagesInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutMessagesInput, questionsUncheckedCreateWithoutMessagesInput>
  }

  export type peopleCreateWithoutMessages_messages_toIdTopeopleInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutMessages_messages_toIdTopeopleInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutMessages_messages_toIdTopeopleInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutMessages_messages_toIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_toIdTopeopleInput>
  }

  export type peopleUpsertWithoutMessages_messages_fromIdTopeopleInput = {
    update: XOR<peopleUpdateWithoutMessages_messages_fromIdTopeopleInput, peopleUncheckedUpdateWithoutMessages_messages_fromIdTopeopleInput>
    create: XOR<peopleCreateWithoutMessages_messages_fromIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_fromIdTopeopleInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutMessages_messages_fromIdTopeopleInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutMessages_messages_fromIdTopeopleInput, peopleUncheckedUpdateWithoutMessages_messages_fromIdTopeopleInput>
  }

  export type peopleUpdateWithoutMessages_messages_fromIdTopeopleInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutMessages_messages_fromIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type questionsUpsertWithoutMessagesInput = {
    update: XOR<questionsUpdateWithoutMessagesInput, questionsUncheckedUpdateWithoutMessagesInput>
    create: XOR<questionsCreateWithoutMessagesInput, questionsUncheckedCreateWithoutMessagesInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutMessagesInput, questionsUncheckedUpdateWithoutMessagesInput>
  }

  export type questionsUpdateWithoutMessagesInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: categoriesUpdateOneWithoutQuestionsNestedInput
    commoncontents?: commoncontentsUpdateOneWithoutQuestionsNestedInput
    userquestions?: userquestionsUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    commonContentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userquestions?: userquestionsUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type peopleUpsertWithoutMessages_messages_toIdTopeopleInput = {
    update: XOR<peopleUpdateWithoutMessages_messages_toIdTopeopleInput, peopleUncheckedUpdateWithoutMessages_messages_toIdTopeopleInput>
    create: XOR<peopleCreateWithoutMessages_messages_toIdTopeopleInput, peopleUncheckedCreateWithoutMessages_messages_toIdTopeopleInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutMessages_messages_toIdTopeopleInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutMessages_messages_toIdTopeopleInput, peopleUncheckedUpdateWithoutMessages_messages_toIdTopeopleInput>
  }

  export type peopleUpdateWithoutMessages_messages_toIdTopeopleInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutMessages_messages_toIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    deductedCredits?: number | null
    addedCredits?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
    people_credithistory_userIdTopeople: peopleCreateNestedOneWithoutCredithistory_credithistory_userIdTopeopleInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput
  }

  export type credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    id?: number
    userId: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsToUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    create: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInputEnvelope = {
    data: credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInput | credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInput[]
    skipDuplicates?: boolean
  }

  export type credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput = {
    deductedCredits?: number | null
    addedCredits?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleInput
  }

  export type credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput = {
    id?: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsFromUserId?: number | null
    addedCreditsToUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryCreateOrConnectWithoutPeople_credithistory_userIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    create: XOR<credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput>
  }

  export type credithistoryCreateManyPeople_credithistory_userIdTopeopleInputEnvelope = {
    data: credithistoryCreateManyPeople_credithistory_userIdTopeopleInput | credithistoryCreateManyPeople_credithistory_userIdTopeopleInput[]
    skipDuplicates?: boolean
  }

  export type credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    deductedCredits?: number | null
    addedCredits?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleCreateNestedOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleInput
    people_credithistory_userIdTopeople: peopleCreateNestedOneWithoutCredithistory_credithistory_userIdTopeopleInput
  }

  export type credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    id?: number
    userId: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsFromUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryCreateOrConnectWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    create: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInputEnvelope = {
    data: credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInput | credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutPeople_messages_fromIdTopeopleInput = {
    text: string
    isRead?: number
    lastModifiedTime?: Date | string
    questions?: questionsCreateNestedOneWithoutMessagesInput
    people_messages_toIdTopeople: peopleCreateNestedOneWithoutMessages_messages_toIdTopeopleInput
  }

  export type messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput = {
    id?: number
    text: string
    toId: number
    questionId?: number | null
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type messagesCreateOrConnectWithoutPeople_messages_fromIdTopeopleInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput>
  }

  export type messagesCreateManyPeople_messages_fromIdTopeopleInputEnvelope = {
    data: messagesCreateManyPeople_messages_fromIdTopeopleInput | messagesCreateManyPeople_messages_fromIdTopeopleInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutPeople_messages_toIdTopeopleInput = {
    text: string
    isRead?: number
    lastModifiedTime?: Date | string
    people_messages_fromIdTopeople?: peopleCreateNestedOneWithoutMessages_messages_fromIdTopeopleInput
    questions?: questionsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput = {
    id?: number
    text: string
    fromId?: number | null
    questionId?: number | null
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type messagesCreateOrConnectWithoutPeople_messages_toIdTopeopleInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput>
  }

  export type messagesCreateManyPeople_messages_toIdTopeopleInputEnvelope = {
    data: messagesCreateManyPeople_messages_toIdTopeopleInput | messagesCreateManyPeople_messages_toIdTopeopleInput[]
    skipDuplicates?: boolean
  }

  export type userquestionsCreateWithoutPeopleInput = {
    userAnswer?: string | null
    lastModifiedTime?: Date | string
    questions: questionsCreateNestedOneWithoutUserquestionsInput
  }

  export type userquestionsUncheckedCreateWithoutPeopleInput = {
    questionId: number
    userAnswer?: string | null
    lastModifiedTime?: Date | string
  }

  export type userquestionsCreateOrConnectWithoutPeopleInput = {
    where: userquestionsWhereUniqueInput
    create: XOR<userquestionsCreateWithoutPeopleInput, userquestionsUncheckedCreateWithoutPeopleInput>
  }

  export type userquestionsCreateManyPeopleInputEnvelope = {
    data: userquestionsCreateManyPeopleInput | userquestionsCreateManyPeopleInput[]
    skipDuplicates?: boolean
  }

  export type userquestionsetsCreateWithoutPeopleInput = {
    setNo: number
    type: string
    finished?: number | null
    lastModifiedTime?: Date | string
    random?: number | null
  }

  export type userquestionsetsUncheckedCreateWithoutPeopleInput = {
    setNo: number
    type: string
    finished?: number | null
    lastModifiedTime?: Date | string
    random?: number | null
  }

  export type userquestionsetsCreateOrConnectWithoutPeopleInput = {
    where: userquestionsetsWhereUniqueInput
    create: XOR<userquestionsetsCreateWithoutPeopleInput, userquestionsetsUncheckedCreateWithoutPeopleInput>
  }

  export type userquestionsetsCreateManyPeopleInputEnvelope = {
    data: userquestionsetsCreateManyPeopleInput | userquestionsetsCreateManyPeopleInput[]
    skipDuplicates?: boolean
  }

  export type credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    update: XOR<credithistoryUpdateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedUpdateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput>
    create: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    data: XOR<credithistoryUpdateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput, credithistoryUncheckedUpdateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    where: credithistoryScalarWhereInput
    data: XOR<credithistoryUpdateManyMutationInput, credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput>
  }

  export type credithistoryScalarWhereInput = {
    AND?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
    OR?: credithistoryScalarWhereInput[]
    NOT?: credithistoryScalarWhereInput | credithistoryScalarWhereInput[]
    id?: IntFilter<"credithistory"> | number
    userId?: IntFilter<"credithistory"> | number
    deductedCredits?: IntNullableFilter<"credithistory"> | number | null
    addedCredits?: IntNullableFilter<"credithistory"> | number | null
    addedCreditsFromUserId?: IntNullableFilter<"credithistory"> | number | null
    addedCreditsToUserId?: IntNullableFilter<"credithistory"> | number | null
    description?: StringNullableFilter<"credithistory"> | string | null
    lastModifiedTime?: DateTimeFilter<"credithistory"> | Date | string
  }

  export type credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    update: XOR<credithistoryUpdateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedUpdateWithoutPeople_credithistory_userIdTopeopleInput>
    create: XOR<credithistoryCreateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_userIdTopeopleInput>
  }

  export type credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_userIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    data: XOR<credithistoryUpdateWithoutPeople_credithistory_userIdTopeopleInput, credithistoryUncheckedUpdateWithoutPeople_credithistory_userIdTopeopleInput>
  }

  export type credithistoryUpdateManyWithWhereWithoutPeople_credithistory_userIdTopeopleInput = {
    where: credithistoryScalarWhereInput
    data: XOR<credithistoryUpdateManyMutationInput, credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleInput>
  }

  export type credithistoryUpsertWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    update: XOR<credithistoryUpdateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedUpdateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput>
    create: XOR<credithistoryCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedCreateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type credithistoryUpdateWithWhereUniqueWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    where: credithistoryWhereUniqueInput
    data: XOR<credithistoryUpdateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput, credithistoryUncheckedUpdateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type credithistoryUpdateManyWithWhereWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    where: credithistoryScalarWhereInput
    data: XOR<credithistoryUpdateManyMutationInput, credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedUpdateWithoutPeople_messages_fromIdTopeopleInput>
    create: XOR<messagesCreateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_fromIdTopeopleInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutPeople_messages_fromIdTopeopleInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutPeople_messages_fromIdTopeopleInput, messagesUncheckedUpdateWithoutPeople_messages_fromIdTopeopleInput>
  }

  export type messagesUpdateManyWithWhereWithoutPeople_messages_fromIdTopeopleInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    text?: StringFilter<"messages"> | string
    fromId?: IntNullableFilter<"messages"> | number | null
    toId?: IntFilter<"messages"> | number
    questionId?: IntNullableFilter<"messages"> | number | null
    isRead?: IntFilter<"messages"> | number
    lastModifiedTime?: DateTimeFilter<"messages"> | Date | string
  }

  export type messagesUpsertWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedUpdateWithoutPeople_messages_toIdTopeopleInput>
    create: XOR<messagesCreateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedCreateWithoutPeople_messages_toIdTopeopleInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutPeople_messages_toIdTopeopleInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutPeople_messages_toIdTopeopleInput, messagesUncheckedUpdateWithoutPeople_messages_toIdTopeopleInput>
  }

  export type messagesUpdateManyWithWhereWithoutPeople_messages_toIdTopeopleInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleInput>
  }

  export type userquestionsUpsertWithWhereUniqueWithoutPeopleInput = {
    where: userquestionsWhereUniqueInput
    update: XOR<userquestionsUpdateWithoutPeopleInput, userquestionsUncheckedUpdateWithoutPeopleInput>
    create: XOR<userquestionsCreateWithoutPeopleInput, userquestionsUncheckedCreateWithoutPeopleInput>
  }

  export type userquestionsUpdateWithWhereUniqueWithoutPeopleInput = {
    where: userquestionsWhereUniqueInput
    data: XOR<userquestionsUpdateWithoutPeopleInput, userquestionsUncheckedUpdateWithoutPeopleInput>
  }

  export type userquestionsUpdateManyWithWhereWithoutPeopleInput = {
    where: userquestionsScalarWhereInput
    data: XOR<userquestionsUpdateManyMutationInput, userquestionsUncheckedUpdateManyWithoutPeopleInput>
  }

  export type userquestionsScalarWhereInput = {
    AND?: userquestionsScalarWhereInput | userquestionsScalarWhereInput[]
    OR?: userquestionsScalarWhereInput[]
    NOT?: userquestionsScalarWhereInput | userquestionsScalarWhereInput[]
    userId?: IntFilter<"userquestions"> | number
    questionId?: IntFilter<"userquestions"> | number
    userAnswer?: StringNullableFilter<"userquestions"> | string | null
    lastModifiedTime?: DateTimeFilter<"userquestions"> | Date | string
  }

  export type userquestionsetsUpsertWithWhereUniqueWithoutPeopleInput = {
    where: userquestionsetsWhereUniqueInput
    update: XOR<userquestionsetsUpdateWithoutPeopleInput, userquestionsetsUncheckedUpdateWithoutPeopleInput>
    create: XOR<userquestionsetsCreateWithoutPeopleInput, userquestionsetsUncheckedCreateWithoutPeopleInput>
  }

  export type userquestionsetsUpdateWithWhereUniqueWithoutPeopleInput = {
    where: userquestionsetsWhereUniqueInput
    data: XOR<userquestionsetsUpdateWithoutPeopleInput, userquestionsetsUncheckedUpdateWithoutPeopleInput>
  }

  export type userquestionsetsUpdateManyWithWhereWithoutPeopleInput = {
    where: userquestionsetsScalarWhereInput
    data: XOR<userquestionsetsUpdateManyMutationInput, userquestionsetsUncheckedUpdateManyWithoutPeopleInput>
  }

  export type userquestionsetsScalarWhereInput = {
    AND?: userquestionsetsScalarWhereInput | userquestionsetsScalarWhereInput[]
    OR?: userquestionsetsScalarWhereInput[]
    NOT?: userquestionsetsScalarWhereInput | userquestionsetsScalarWhereInput[]
    userId?: IntFilter<"userquestionsets"> | number
    setNo?: IntFilter<"userquestionsets"> | number
    type?: StringFilter<"userquestionsets"> | string
    finished?: IntNullableFilter<"userquestionsets"> | number | null
    lastModifiedTime?: DateTimeFilter<"userquestionsets"> | Date | string
    random?: FloatNullableFilter<"userquestionsets"> | number | null
  }

  export type messagesCreateWithoutQuestionsInput = {
    text: string
    isRead?: number
    lastModifiedTime?: Date | string
    people_messages_fromIdTopeople?: peopleCreateNestedOneWithoutMessages_messages_fromIdTopeopleInput
    people_messages_toIdTopeople: peopleCreateNestedOneWithoutMessages_messages_toIdTopeopleInput
  }

  export type messagesUncheckedCreateWithoutQuestionsInput = {
    id?: number
    text: string
    fromId?: number | null
    toId: number
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type messagesCreateOrConnectWithoutQuestionsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutQuestionsInput, messagesUncheckedCreateWithoutQuestionsInput>
  }

  export type messagesCreateManyQuestionsInputEnvelope = {
    data: messagesCreateManyQuestionsInput | messagesCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutQuestionsInput = {
    category: string
    type?: string | null
  }

  export type categoriesUncheckedCreateWithoutQuestionsInput = {
    id?: number
    category: string
    type?: string | null
  }

  export type categoriesCreateOrConnectWithoutQuestionsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutQuestionsInput, categoriesUncheckedCreateWithoutQuestionsInput>
  }

  export type commoncontentsCreateWithoutQuestionsInput = {
    content: string
    lastModifiedTime?: Date | string
  }

  export type commoncontentsUncheckedCreateWithoutQuestionsInput = {
    id?: number
    content: string
    lastModifiedTime?: Date | string
  }

  export type commoncontentsCreateOrConnectWithoutQuestionsInput = {
    where: commoncontentsWhereUniqueInput
    create: XOR<commoncontentsCreateWithoutQuestionsInput, commoncontentsUncheckedCreateWithoutQuestionsInput>
  }

  export type userquestionsCreateWithoutQuestionsInput = {
    userAnswer?: string | null
    lastModifiedTime?: Date | string
    people: peopleCreateNestedOneWithoutUserquestionsInput
  }

  export type userquestionsUncheckedCreateWithoutQuestionsInput = {
    userId: number
    userAnswer?: string | null
    lastModifiedTime?: Date | string
  }

  export type userquestionsCreateOrConnectWithoutQuestionsInput = {
    where: userquestionsWhereUniqueInput
    create: XOR<userquestionsCreateWithoutQuestionsInput, userquestionsUncheckedCreateWithoutQuestionsInput>
  }

  export type userquestionsCreateManyQuestionsInputEnvelope = {
    data: userquestionsCreateManyQuestionsInput | userquestionsCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type messagesUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutQuestionsInput, messagesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<messagesCreateWithoutQuestionsInput, messagesUncheckedCreateWithoutQuestionsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutQuestionsInput, messagesUncheckedUpdateWithoutQuestionsInput>
  }

  export type messagesUpdateManyWithWhereWithoutQuestionsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type categoriesUpsertWithoutQuestionsInput = {
    update: XOR<categoriesUpdateWithoutQuestionsInput, categoriesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<categoriesCreateWithoutQuestionsInput, categoriesUncheckedCreateWithoutQuestionsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutQuestionsInput, categoriesUncheckedUpdateWithoutQuestionsInput>
  }

  export type categoriesUpdateWithoutQuestionsInput = {
    category?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commoncontentsUpsertWithoutQuestionsInput = {
    update: XOR<commoncontentsUpdateWithoutQuestionsInput, commoncontentsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<commoncontentsCreateWithoutQuestionsInput, commoncontentsUncheckedCreateWithoutQuestionsInput>
    where?: commoncontentsWhereInput
  }

  export type commoncontentsUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: commoncontentsWhereInput
    data: XOR<commoncontentsUpdateWithoutQuestionsInput, commoncontentsUncheckedUpdateWithoutQuestionsInput>
  }

  export type commoncontentsUpdateWithoutQuestionsInput = {
    content?: StringFieldUpdateOperationsInput | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commoncontentsUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: userquestionsWhereUniqueInput
    update: XOR<userquestionsUpdateWithoutQuestionsInput, userquestionsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<userquestionsCreateWithoutQuestionsInput, userquestionsUncheckedCreateWithoutQuestionsInput>
  }

  export type userquestionsUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: userquestionsWhereUniqueInput
    data: XOR<userquestionsUpdateWithoutQuestionsInput, userquestionsUncheckedUpdateWithoutQuestionsInput>
  }

  export type userquestionsUpdateManyWithWhereWithoutQuestionsInput = {
    where: userquestionsScalarWhereInput
    data: XOR<userquestionsUpdateManyMutationInput, userquestionsUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type questionsCreateWithoutUserquestionsInput = {
    type?: string | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesCreateNestedManyWithoutQuestionsInput
    categories?: categoriesCreateNestedOneWithoutQuestionsInput
    commoncontents?: commoncontentsCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutUserquestionsInput = {
    id?: number
    type?: string | null
    categoryId?: number | null
    setNo?: number | null
    commonContentId?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
    messages?: messagesUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutUserquestionsInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutUserquestionsInput, questionsUncheckedCreateWithoutUserquestionsInput>
  }

  export type peopleCreateWithoutUserquestionsInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestionsets?: userquestionsetsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutUserquestionsInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestionsets?: userquestionsetsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutUserquestionsInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutUserquestionsInput, peopleUncheckedCreateWithoutUserquestionsInput>
  }

  export type questionsUpsertWithoutUserquestionsInput = {
    update: XOR<questionsUpdateWithoutUserquestionsInput, questionsUncheckedUpdateWithoutUserquestionsInput>
    create: XOR<questionsCreateWithoutUserquestionsInput, questionsUncheckedCreateWithoutUserquestionsInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutUserquestionsInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutUserquestionsInput, questionsUncheckedUpdateWithoutUserquestionsInput>
  }

  export type questionsUpdateWithoutUserquestionsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUpdateManyWithoutQuestionsNestedInput
    categories?: categoriesUpdateOneWithoutQuestionsNestedInput
    commoncontents?: commoncontentsUpdateOneWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutUserquestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    commonContentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type peopleUpsertWithoutUserquestionsInput = {
    update: XOR<peopleUpdateWithoutUserquestionsInput, peopleUncheckedUpdateWithoutUserquestionsInput>
    create: XOR<peopleCreateWithoutUserquestionsInput, peopleUncheckedCreateWithoutUserquestionsInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutUserquestionsInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutUserquestionsInput, peopleUncheckedUpdateWithoutUserquestionsInput>
  }

  export type peopleUpdateWithoutUserquestionsInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestionsets?: userquestionsetsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutUserquestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestionsets?: userquestionsetsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type peopleCreateWithoutUserquestionsetsInput = {
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsCreateNestedManyWithoutPeopleInput
  }

  export type peopleUncheckedCreateWithoutUserquestionsetsInput = {
    id?: number
    type?: string
    givenname?: string | null
    surname?: string | null
    mobile?: string | null
    email?: string | null
    address?: string | null
    status?: string | null
    password?: string | null
    token?: string | null
    permission?: string | null
    note?: string | null
    orders?: string | null
    refNo?: string | null
    credits?: number | null
    lastModifiedTime?: Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_userIdTopeopleInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedCreateNestedManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput
    messages_messages_fromIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_fromIdTopeopleInput
    messages_messages_toIdTopeople?: messagesUncheckedCreateNestedManyWithoutPeople_messages_toIdTopeopleInput
    userquestions?: userquestionsUncheckedCreateNestedManyWithoutPeopleInput
  }

  export type peopleCreateOrConnectWithoutUserquestionsetsInput = {
    where: peopleWhereUniqueInput
    create: XOR<peopleCreateWithoutUserquestionsetsInput, peopleUncheckedCreateWithoutUserquestionsetsInput>
  }

  export type peopleUpsertWithoutUserquestionsetsInput = {
    update: XOR<peopleUpdateWithoutUserquestionsetsInput, peopleUncheckedUpdateWithoutUserquestionsetsInput>
    create: XOR<peopleCreateWithoutUserquestionsetsInput, peopleUncheckedCreateWithoutUserquestionsetsInput>
    where?: peopleWhereInput
  }

  export type peopleUpdateToOneWithWhereWithoutUserquestionsetsInput = {
    where?: peopleWhereInput
    data: XOR<peopleUpdateWithoutUserquestionsetsInput, peopleUncheckedUpdateWithoutUserquestionsetsInput>
  }

  export type peopleUpdateWithoutUserquestionsetsInput = {
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUpdateManyWithoutPeopleNestedInput
  }

  export type peopleUncheckedUpdateWithoutUserquestionsetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    givenname?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    credithistory_credithistory_addedCreditsFromUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    credithistory_credithistory_userIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleNestedInput
    credithistory_credithistory_addedCreditsToUserIdTopeople?: credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleNestedInput
    messages_messages_fromIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleNestedInput
    messages_messages_toIdTopeople?: messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutPeopleNestedInput
  }

  export type questionsCreateManyCategoriesInput = {
    id?: number
    type?: string | null
    setNo?: number | null
    commonContentId?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
  }

  export type questionsUpdateWithoutCategoriesInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUpdateManyWithoutQuestionsNestedInput
    commoncontents?: commoncontentsUpdateOneWithoutQuestionsNestedInput
    userquestions?: userquestionsUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    commonContentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutQuestionsNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    commonContentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questionsCreateManyCommoncontentsInput = {
    id?: number
    type?: string | null
    categoryId?: number | null
    setNo?: number | null
    content: string
    answerA: string
    answerB: string
    answerC?: string | null
    answerD?: string | null
    answerE?: string | null
    note?: string | null
    correctAnswer: string
    wrongQuestionOfChenyi?: number | null
    newQuestionOfChenyi?: number | null
    source?: string | null
    correctAnswerCount?: number | null
    totalAnswerCount?: number | null
    lastModifiedTime?: Date | string
    level?: string | null
  }

  export type questionsUpdateWithoutCommoncontentsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUpdateManyWithoutQuestionsNestedInput
    categories?: categoriesUpdateOneWithoutQuestionsNestedInput
    userquestions?: userquestionsUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutCommoncontentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messagesUncheckedUpdateManyWithoutQuestionsNestedInput
    userquestions?: userquestionsUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutCommoncontentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: NullableStringFieldUpdateOperationsInput | string | null
    answerD?: NullableStringFieldUpdateOperationsInput | string | null
    answerE?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    wrongQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    newQuestionOfChenyi?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    totalAnswerCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type credithistoryCreateManyPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    id?: number
    userId: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsToUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryCreateManyPeople_credithistory_userIdTopeopleInput = {
    id?: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsFromUserId?: number | null
    addedCreditsToUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type credithistoryCreateManyPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    id?: number
    userId: number
    deductedCredits?: number | null
    addedCredits?: number | null
    addedCreditsFromUserId?: number | null
    description?: string | null
    lastModifiedTime?: Date | string
  }

  export type messagesCreateManyPeople_messages_fromIdTopeopleInput = {
    id?: number
    text: string
    toId: number
    questionId?: number | null
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type messagesCreateManyPeople_messages_toIdTopeopleInput = {
    id?: number
    text: string
    fromId?: number | null
    questionId?: number | null
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type userquestionsCreateManyPeopleInput = {
    questionId: number
    userAnswer?: string | null
    lastModifiedTime?: Date | string
  }

  export type userquestionsetsCreateManyPeopleInput = {
    setNo: number
    type: string
    finished?: number | null
    lastModifiedTime?: Date | string
    random?: number | null
  }

  export type credithistoryUpdateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_credithistory_userIdTopeople?: peopleUpdateOneRequiredWithoutCredithistory_credithistory_userIdTopeopleNestedInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleNestedInput
  }

  export type credithistoryUncheckedUpdateWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsToUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsFromUserIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsToUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryUpdateWithoutPeople_credithistory_userIdTopeopleInput = {
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    people_credithistory_addedCreditsToUserIdTopeople?: peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsToUserIdTopeopleNestedInput
  }

  export type credithistoryUncheckedUpdateWithoutPeople_credithistory_userIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsFromUserId?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsToUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryUncheckedUpdateManyWithoutPeople_credithistory_userIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsFromUserId?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsToUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryUpdateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_credithistory_addedCreditsFromUserIdTopeople?: peopleUpdateOneWithoutCredithistory_credithistory_addedCreditsFromUserIdTopeopleNestedInput
    people_credithistory_userIdTopeople?: peopleUpdateOneRequiredWithoutCredithistory_credithistory_userIdTopeopleNestedInput
  }

  export type credithistoryUncheckedUpdateWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsFromUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credithistoryUncheckedUpdateManyWithoutPeople_credithistory_addedCreditsToUserIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deductedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    addedCreditsFromUserId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutPeople_messages_fromIdTopeopleInput = {
    text?: StringFieldUpdateOperationsInput | string
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: questionsUpdateOneWithoutMessagesNestedInput
    people_messages_toIdTopeople?: peopleUpdateOneRequiredWithoutMessages_messages_toIdTopeopleNestedInput
  }

  export type messagesUncheckedUpdateWithoutPeople_messages_fromIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    toId?: IntFieldUpdateOperationsInput | number
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutPeople_messages_fromIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    toId?: IntFieldUpdateOperationsInput | number
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutPeople_messages_toIdTopeopleInput = {
    text?: StringFieldUpdateOperationsInput | string
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_messages_fromIdTopeople?: peopleUpdateOneWithoutMessages_messages_fromIdTopeopleNestedInput
    questions?: questionsUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutPeople_messages_toIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fromId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutPeople_messages_toIdTopeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fromId?: NullableIntFieldUpdateOperationsInput | number | null
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsUpdateWithoutPeopleInput = {
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: questionsUpdateOneRequiredWithoutUserquestionsNestedInput
  }

  export type userquestionsUncheckedUpdateWithoutPeopleInput = {
    questionId?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsUncheckedUpdateManyWithoutPeopleInput = {
    questionId?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsetsUpdateWithoutPeopleInput = {
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type userquestionsetsUncheckedUpdateWithoutPeopleInput = {
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type userquestionsetsUncheckedUpdateManyWithoutPeopleInput = {
    setNo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    random?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type messagesCreateManyQuestionsInput = {
    id?: number
    text: string
    fromId?: number | null
    toId: number
    isRead?: number
    lastModifiedTime?: Date | string
  }

  export type userquestionsCreateManyQuestionsInput = {
    userId: number
    userAnswer?: string | null
    lastModifiedTime?: Date | string
  }

  export type messagesUpdateWithoutQuestionsInput = {
    text?: StringFieldUpdateOperationsInput | string
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people_messages_fromIdTopeople?: peopleUpdateOneWithoutMessages_messages_fromIdTopeopleNestedInput
    people_messages_toIdTopeople?: peopleUpdateOneRequiredWithoutMessages_messages_toIdTopeopleNestedInput
  }

  export type messagesUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fromId?: NullableIntFieldUpdateOperationsInput | number | null
    toId?: IntFieldUpdateOperationsInput | number
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    fromId?: NullableIntFieldUpdateOperationsInput | number | null
    toId?: IntFieldUpdateOperationsInput | number
    isRead?: IntFieldUpdateOperationsInput | number
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsUpdateWithoutQuestionsInput = {
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: peopleUpdateOneRequiredWithoutUserquestionsNestedInput
  }

  export type userquestionsUncheckedUpdateWithoutQuestionsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userquestionsUncheckedUpdateManyWithoutQuestionsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
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