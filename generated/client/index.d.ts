
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
 * Model AceiteTermos
 * 
 */
export type AceiteTermos = $Result.DefaultSelection<Prisma.$AceiteTermosPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Imovel
 * 
 */
export type Imovel = $Result.DefaultSelection<Prisma.$ImovelPayload>
/**
 * Model AreasComuns
 * 
 */
export type AreasComuns = $Result.DefaultSelection<Prisma.$AreasComunsPayload>
/**
 * Model Ativo
 * 
 */
export type Ativo = $Result.DefaultSelection<Prisma.$AtivoPayload>
/**
 * Model Chamado
 * 
 */
export type Chamado = $Result.DefaultSelection<Prisma.$ChamadoPayload>
/**
 * Model Anexo
 * 
 */
export type Anexo = $Result.DefaultSelection<Prisma.$AnexoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  SINDICO_RESIDENTE: 'SINDICO_RESIDENTE',
  SINDICO_PROFISSIONAL: 'SINDICO_PROFISSIONAL',
  ADMIN_IMOVEIS: 'ADMIN_IMOVEIS',
  PRESTADOR: 'PRESTADOR',
  ADMIN_PLATAFORMA: 'ADMIN_PLATAFORMA'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const ChamadoStatus: {
  NOVO: 'NOVO',
  A_CAMINHO: 'A_CAMINHO',
  EM_ATENDIMENTO: 'EM_ATENDIMENTO',
  CONCLUIDO: 'CONCLUIDO'
};

export type ChamadoStatus = (typeof ChamadoStatus)[keyof typeof ChamadoStatus]


export const Prioridade: {
  BAIXA: 'BAIXA',
  MEDIA: 'MEDIA',
  ALTA: 'ALTA'
};

export type Prioridade = (typeof Prioridade)[keyof typeof Prioridade]


export const Escopo: {
  ORCAMENTO: 'ORCAMENTO',
  SERVICO_IMEDIATO: 'SERVICO_IMEDIATO'
};

export type Escopo = (typeof Escopo)[keyof typeof Escopo]


export const UserStatus: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  BLOQUEADO: 'BLOQUEADO',
  PENDENTE: 'PENDENTE',
  FALTA_DOCUMENTOS: 'FALTA_DOCUMENTOS'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type ChamadoStatus = $Enums.ChamadoStatus

export const ChamadoStatus: typeof $Enums.ChamadoStatus

export type Prioridade = $Enums.Prioridade

export const Prioridade: typeof $Enums.Prioridade

export type Escopo = $Enums.Escopo

export const Escopo: typeof $Enums.Escopo

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AceiteTermos
 * const aceiteTermos = await prisma.aceiteTermos.findMany()
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
   * // Fetch zero or more AceiteTermos
   * const aceiteTermos = await prisma.aceiteTermos.findMany()
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
   * `prisma.aceiteTermos`: Exposes CRUD operations for the **AceiteTermos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AceiteTermos
    * const aceiteTermos = await prisma.aceiteTermos.findMany()
    * ```
    */
  get aceiteTermos(): Prisma.AceiteTermosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imovel`: Exposes CRUD operations for the **Imovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imovels
    * const imovels = await prisma.imovel.findMany()
    * ```
    */
  get imovel(): Prisma.ImovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.areasComuns`: Exposes CRUD operations for the **AreasComuns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreasComuns
    * const areasComuns = await prisma.areasComuns.findMany()
    * ```
    */
  get areasComuns(): Prisma.AreasComunsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ativo`: Exposes CRUD operations for the **Ativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ativos
    * const ativos = await prisma.ativo.findMany()
    * ```
    */
  get ativo(): Prisma.AtivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chamado`: Exposes CRUD operations for the **Chamado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chamados
    * const chamados = await prisma.chamado.findMany()
    * ```
    */
  get chamado(): Prisma.ChamadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anexo`: Exposes CRUD operations for the **Anexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anexos
    * const anexos = await prisma.anexo.findMany()
    * ```
    */
  get anexo(): Prisma.AnexoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    AceiteTermos: 'AceiteTermos',
    User: 'User',
    Imovel: 'Imovel',
    AreasComuns: 'AreasComuns',
    Ativo: 'Ativo',
    Chamado: 'Chamado',
    Anexo: 'Anexo'
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
      modelProps: "aceiteTermos" | "user" | "imovel" | "areasComuns" | "ativo" | "chamado" | "anexo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AceiteTermos: {
        payload: Prisma.$AceiteTermosPayload<ExtArgs>
        fields: Prisma.AceiteTermosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AceiteTermosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AceiteTermosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>
          }
          findFirst: {
            args: Prisma.AceiteTermosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AceiteTermosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>
          }
          findMany: {
            args: Prisma.AceiteTermosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>[]
          }
          create: {
            args: Prisma.AceiteTermosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>
          }
          createMany: {
            args: Prisma.AceiteTermosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AceiteTermosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>[]
          }
          delete: {
            args: Prisma.AceiteTermosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>
          }
          update: {
            args: Prisma.AceiteTermosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>
          }
          deleteMany: {
            args: Prisma.AceiteTermosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AceiteTermosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AceiteTermosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>[]
          }
          upsert: {
            args: Prisma.AceiteTermosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AceiteTermosPayload>
          }
          aggregate: {
            args: Prisma.AceiteTermosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAceiteTermos>
          }
          groupBy: {
            args: Prisma.AceiteTermosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AceiteTermosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AceiteTermosCountArgs<ExtArgs>
            result: $Utils.Optional<AceiteTermosCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Imovel: {
        payload: Prisma.$ImovelPayload<ExtArgs>
        fields: Prisma.ImovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          findFirst: {
            args: Prisma.ImovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          findMany: {
            args: Prisma.ImovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>[]
          }
          create: {
            args: Prisma.ImovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          createMany: {
            args: Prisma.ImovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImovelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>[]
          }
          delete: {
            args: Prisma.ImovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          update: {
            args: Prisma.ImovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          deleteMany: {
            args: Prisma.ImovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImovelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>[]
          }
          upsert: {
            args: Prisma.ImovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImovelPayload>
          }
          aggregate: {
            args: Prisma.ImovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImovel>
          }
          groupBy: {
            args: Prisma.ImovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImovelCountArgs<ExtArgs>
            result: $Utils.Optional<ImovelCountAggregateOutputType> | number
          }
        }
      }
      AreasComuns: {
        payload: Prisma.$AreasComunsPayload<ExtArgs>
        fields: Prisma.AreasComunsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreasComunsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreasComunsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>
          }
          findFirst: {
            args: Prisma.AreasComunsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreasComunsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>
          }
          findMany: {
            args: Prisma.AreasComunsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>[]
          }
          create: {
            args: Prisma.AreasComunsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>
          }
          createMany: {
            args: Prisma.AreasComunsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreasComunsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>[]
          }
          delete: {
            args: Prisma.AreasComunsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>
          }
          update: {
            args: Prisma.AreasComunsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>
          }
          deleteMany: {
            args: Prisma.AreasComunsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreasComunsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreasComunsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>[]
          }
          upsert: {
            args: Prisma.AreasComunsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreasComunsPayload>
          }
          aggregate: {
            args: Prisma.AreasComunsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAreasComuns>
          }
          groupBy: {
            args: Prisma.AreasComunsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreasComunsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreasComunsCountArgs<ExtArgs>
            result: $Utils.Optional<AreasComunsCountAggregateOutputType> | number
          }
        }
      }
      Ativo: {
        payload: Prisma.$AtivoPayload<ExtArgs>
        fields: Prisma.AtivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          findFirst: {
            args: Prisma.AtivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          findMany: {
            args: Prisma.AtivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>[]
          }
          create: {
            args: Prisma.AtivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          createMany: {
            args: Prisma.AtivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>[]
          }
          delete: {
            args: Prisma.AtivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          update: {
            args: Prisma.AtivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          deleteMany: {
            args: Prisma.AtivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>[]
          }
          upsert: {
            args: Prisma.AtivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtivoPayload>
          }
          aggregate: {
            args: Prisma.AtivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtivo>
          }
          groupBy: {
            args: Prisma.AtivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtivoCountArgs<ExtArgs>
            result: $Utils.Optional<AtivoCountAggregateOutputType> | number
          }
        }
      }
      Chamado: {
        payload: Prisma.$ChamadoPayload<ExtArgs>
        fields: Prisma.ChamadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChamadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChamadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          findFirst: {
            args: Prisma.ChamadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChamadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          findMany: {
            args: Prisma.ChamadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>[]
          }
          create: {
            args: Prisma.ChamadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          createMany: {
            args: Prisma.ChamadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChamadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>[]
          }
          delete: {
            args: Prisma.ChamadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          update: {
            args: Prisma.ChamadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          deleteMany: {
            args: Prisma.ChamadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChamadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChamadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>[]
          }
          upsert: {
            args: Prisma.ChamadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          aggregate: {
            args: Prisma.ChamadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChamado>
          }
          groupBy: {
            args: Prisma.ChamadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChamadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChamadoCountArgs<ExtArgs>
            result: $Utils.Optional<ChamadoCountAggregateOutputType> | number
          }
        }
      }
      Anexo: {
        payload: Prisma.$AnexoPayload<ExtArgs>
        fields: Prisma.AnexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          findFirst: {
            args: Prisma.AnexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          findMany: {
            args: Prisma.AnexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          create: {
            args: Prisma.AnexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          createMany: {
            args: Prisma.AnexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          delete: {
            args: Prisma.AnexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          update: {
            args: Prisma.AnexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          deleteMany: {
            args: Prisma.AnexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          upsert: {
            args: Prisma.AnexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          aggregate: {
            args: Prisma.AnexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnexo>
          }
          groupBy: {
            args: Prisma.AnexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnexoCountArgs<ExtArgs>
            result: $Utils.Optional<AnexoCountAggregateOutputType> | number
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
    aceiteTermos?: AceiteTermosOmit
    user?: UserOmit
    imovel?: ImovelOmit
    areasComuns?: AreasComunsOmit
    ativo?: AtivoOmit
    chamado?: ChamadoOmit
    anexo?: AnexoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    imoveis: number
    chamadosCriados: number
    chamadosDesignados: number
    AceiteTermos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imoveis?: boolean | UserCountOutputTypeCountImoveisArgs
    chamadosCriados?: boolean | UserCountOutputTypeCountChamadosCriadosArgs
    chamadosDesignados?: boolean | UserCountOutputTypeCountChamadosDesignadosArgs
    AceiteTermos?: boolean | UserCountOutputTypeCountAceiteTermosArgs
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
  export type UserCountOutputTypeCountImoveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImovelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChamadosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChamadosDesignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAceiteTermosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AceiteTermosWhereInput
  }


  /**
   * Count Type ImovelCountOutputType
   */

  export type ImovelCountOutputType = {
    ativos: number
    chamados: number
    areasComuns: number
  }

  export type ImovelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ativos?: boolean | ImovelCountOutputTypeCountAtivosArgs
    chamados?: boolean | ImovelCountOutputTypeCountChamadosArgs
    areasComuns?: boolean | ImovelCountOutputTypeCountAreasComunsArgs
  }

  // Custom InputTypes
  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImovelCountOutputType
     */
    select?: ImovelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeCountAtivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
  }

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeCountChamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }

  /**
   * ImovelCountOutputType without action
   */
  export type ImovelCountOutputTypeCountAreasComunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreasComunsWhereInput
  }


  /**
   * Count Type AreasComunsCountOutputType
   */

  export type AreasComunsCountOutputType = {
    anexos: number
  }

  export type AreasComunsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | AreasComunsCountOutputTypeCountAnexosArgs
  }

  // Custom InputTypes
  /**
   * AreasComunsCountOutputType without action
   */
  export type AreasComunsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComunsCountOutputType
     */
    select?: AreasComunsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreasComunsCountOutputType without action
   */
  export type AreasComunsCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
  }


  /**
   * Count Type AtivoCountOutputType
   */

  export type AtivoCountOutputType = {
    anexos: number
    chamados: number
  }

  export type AtivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | AtivoCountOutputTypeCountAnexosArgs
    chamados?: boolean | AtivoCountOutputTypeCountChamadosArgs
  }

  // Custom InputTypes
  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtivoCountOutputType
     */
    select?: AtivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
  }

  /**
   * AtivoCountOutputType without action
   */
  export type AtivoCountOutputTypeCountChamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }


  /**
   * Count Type ChamadoCountOutputType
   */

  export type ChamadoCountOutputType = {
    anexos: number
  }

  export type ChamadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | ChamadoCountOutputTypeCountAnexosArgs
  }

  // Custom InputTypes
  /**
   * ChamadoCountOutputType without action
   */
  export type ChamadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChamadoCountOutputType
     */
    select?: ChamadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChamadoCountOutputType without action
   */
  export type ChamadoCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AceiteTermos
   */

  export type AggregateAceiteTermos = {
    _count: AceiteTermosCountAggregateOutputType | null
    _avg: AceiteTermosAvgAggregateOutputType | null
    _sum: AceiteTermosSumAggregateOutputType | null
    _min: AceiteTermosMinAggregateOutputType | null
    _max: AceiteTermosMaxAggregateOutputType | null
  }

  export type AceiteTermosAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AceiteTermosSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AceiteTermosMinAggregateOutputType = {
    id: number | null
    termoUrl: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AceiteTermosMaxAggregateOutputType = {
    id: number | null
    termoUrl: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AceiteTermosCountAggregateOutputType = {
    id: number
    termoUrl: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AceiteTermosAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AceiteTermosSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AceiteTermosMinAggregateInputType = {
    id?: true
    termoUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AceiteTermosMaxAggregateInputType = {
    id?: true
    termoUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AceiteTermosCountAggregateInputType = {
    id?: true
    termoUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AceiteTermosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AceiteTermos to aggregate.
     */
    where?: AceiteTermosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AceiteTermos to fetch.
     */
    orderBy?: AceiteTermosOrderByWithRelationInput | AceiteTermosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AceiteTermosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AceiteTermos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AceiteTermos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AceiteTermos
    **/
    _count?: true | AceiteTermosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AceiteTermosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AceiteTermosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AceiteTermosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AceiteTermosMaxAggregateInputType
  }

  export type GetAceiteTermosAggregateType<T extends AceiteTermosAggregateArgs> = {
        [P in keyof T & keyof AggregateAceiteTermos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAceiteTermos[P]>
      : GetScalarType<T[P], AggregateAceiteTermos[P]>
  }




  export type AceiteTermosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AceiteTermosWhereInput
    orderBy?: AceiteTermosOrderByWithAggregationInput | AceiteTermosOrderByWithAggregationInput[]
    by: AceiteTermosScalarFieldEnum[] | AceiteTermosScalarFieldEnum
    having?: AceiteTermosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AceiteTermosCountAggregateInputType | true
    _avg?: AceiteTermosAvgAggregateInputType
    _sum?: AceiteTermosSumAggregateInputType
    _min?: AceiteTermosMinAggregateInputType
    _max?: AceiteTermosMaxAggregateInputType
  }

  export type AceiteTermosGroupByOutputType = {
    id: number
    termoUrl: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: AceiteTermosCountAggregateOutputType | null
    _avg: AceiteTermosAvgAggregateOutputType | null
    _sum: AceiteTermosSumAggregateOutputType | null
    _min: AceiteTermosMinAggregateOutputType | null
    _max: AceiteTermosMaxAggregateOutputType | null
  }

  type GetAceiteTermosGroupByPayload<T extends AceiteTermosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AceiteTermosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AceiteTermosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AceiteTermosGroupByOutputType[P]>
            : GetScalarType<T[P], AceiteTermosGroupByOutputType[P]>
        }
      >
    >


  export type AceiteTermosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aceiteTermos"]>

  export type AceiteTermosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aceiteTermos"]>

  export type AceiteTermosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aceiteTermos"]>

  export type AceiteTermosSelectScalar = {
    id?: boolean
    termoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AceiteTermosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "termoUrl" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["aceiteTermos"]>
  export type AceiteTermosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AceiteTermosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AceiteTermosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AceiteTermosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AceiteTermos"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      termoUrl: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aceiteTermos"]>
    composites: {}
  }

  type AceiteTermosGetPayload<S extends boolean | null | undefined | AceiteTermosDefaultArgs> = $Result.GetResult<Prisma.$AceiteTermosPayload, S>

  type AceiteTermosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AceiteTermosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AceiteTermosCountAggregateInputType | true
    }

  export interface AceiteTermosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AceiteTermos'], meta: { name: 'AceiteTermos' } }
    /**
     * Find zero or one AceiteTermos that matches the filter.
     * @param {AceiteTermosFindUniqueArgs} args - Arguments to find a AceiteTermos
     * @example
     * // Get one AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AceiteTermosFindUniqueArgs>(args: SelectSubset<T, AceiteTermosFindUniqueArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AceiteTermos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AceiteTermosFindUniqueOrThrowArgs} args - Arguments to find a AceiteTermos
     * @example
     * // Get one AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AceiteTermosFindUniqueOrThrowArgs>(args: SelectSubset<T, AceiteTermosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AceiteTermos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosFindFirstArgs} args - Arguments to find a AceiteTermos
     * @example
     * // Get one AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AceiteTermosFindFirstArgs>(args?: SelectSubset<T, AceiteTermosFindFirstArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AceiteTermos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosFindFirstOrThrowArgs} args - Arguments to find a AceiteTermos
     * @example
     * // Get one AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AceiteTermosFindFirstOrThrowArgs>(args?: SelectSubset<T, AceiteTermosFindFirstOrThrowArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AceiteTermos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.findMany()
     * 
     * // Get first 10 AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aceiteTermosWithIdOnly = await prisma.aceiteTermos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AceiteTermosFindManyArgs>(args?: SelectSubset<T, AceiteTermosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AceiteTermos.
     * @param {AceiteTermosCreateArgs} args - Arguments to create a AceiteTermos.
     * @example
     * // Create one AceiteTermos
     * const AceiteTermos = await prisma.aceiteTermos.create({
     *   data: {
     *     // ... data to create a AceiteTermos
     *   }
     * })
     * 
     */
    create<T extends AceiteTermosCreateArgs>(args: SelectSubset<T, AceiteTermosCreateArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AceiteTermos.
     * @param {AceiteTermosCreateManyArgs} args - Arguments to create many AceiteTermos.
     * @example
     * // Create many AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AceiteTermosCreateManyArgs>(args?: SelectSubset<T, AceiteTermosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AceiteTermos and returns the data saved in the database.
     * @param {AceiteTermosCreateManyAndReturnArgs} args - Arguments to create many AceiteTermos.
     * @example
     * // Create many AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AceiteTermos and only return the `id`
     * const aceiteTermosWithIdOnly = await prisma.aceiteTermos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AceiteTermosCreateManyAndReturnArgs>(args?: SelectSubset<T, AceiteTermosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AceiteTermos.
     * @param {AceiteTermosDeleteArgs} args - Arguments to delete one AceiteTermos.
     * @example
     * // Delete one AceiteTermos
     * const AceiteTermos = await prisma.aceiteTermos.delete({
     *   where: {
     *     // ... filter to delete one AceiteTermos
     *   }
     * })
     * 
     */
    delete<T extends AceiteTermosDeleteArgs>(args: SelectSubset<T, AceiteTermosDeleteArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AceiteTermos.
     * @param {AceiteTermosUpdateArgs} args - Arguments to update one AceiteTermos.
     * @example
     * // Update one AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AceiteTermosUpdateArgs>(args: SelectSubset<T, AceiteTermosUpdateArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AceiteTermos.
     * @param {AceiteTermosDeleteManyArgs} args - Arguments to filter AceiteTermos to delete.
     * @example
     * // Delete a few AceiteTermos
     * const { count } = await prisma.aceiteTermos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AceiteTermosDeleteManyArgs>(args?: SelectSubset<T, AceiteTermosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AceiteTermos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AceiteTermosUpdateManyArgs>(args: SelectSubset<T, AceiteTermosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AceiteTermos and returns the data updated in the database.
     * @param {AceiteTermosUpdateManyAndReturnArgs} args - Arguments to update many AceiteTermos.
     * @example
     * // Update many AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AceiteTermos and only return the `id`
     * const aceiteTermosWithIdOnly = await prisma.aceiteTermos.updateManyAndReturn({
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
    updateManyAndReturn<T extends AceiteTermosUpdateManyAndReturnArgs>(args: SelectSubset<T, AceiteTermosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AceiteTermos.
     * @param {AceiteTermosUpsertArgs} args - Arguments to update or create a AceiteTermos.
     * @example
     * // Update or create a AceiteTermos
     * const aceiteTermos = await prisma.aceiteTermos.upsert({
     *   create: {
     *     // ... data to create a AceiteTermos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AceiteTermos we want to update
     *   }
     * })
     */
    upsert<T extends AceiteTermosUpsertArgs>(args: SelectSubset<T, AceiteTermosUpsertArgs<ExtArgs>>): Prisma__AceiteTermosClient<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AceiteTermos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosCountArgs} args - Arguments to filter AceiteTermos to count.
     * @example
     * // Count the number of AceiteTermos
     * const count = await prisma.aceiteTermos.count({
     *   where: {
     *     // ... the filter for the AceiteTermos we want to count
     *   }
     * })
    **/
    count<T extends AceiteTermosCountArgs>(
      args?: Subset<T, AceiteTermosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AceiteTermosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AceiteTermos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AceiteTermosAggregateArgs>(args: Subset<T, AceiteTermosAggregateArgs>): Prisma.PrismaPromise<GetAceiteTermosAggregateType<T>>

    /**
     * Group by AceiteTermos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AceiteTermosGroupByArgs} args - Group by arguments.
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
      T extends AceiteTermosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AceiteTermosGroupByArgs['orderBy'] }
        : { orderBy?: AceiteTermosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AceiteTermosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAceiteTermosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AceiteTermos model
   */
  readonly fields: AceiteTermosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AceiteTermos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AceiteTermosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AceiteTermos model
   */
  interface AceiteTermosFieldRefs {
    readonly id: FieldRef<"AceiteTermos", 'Int'>
    readonly termoUrl: FieldRef<"AceiteTermos", 'String'>
    readonly userId: FieldRef<"AceiteTermos", 'Int'>
    readonly createdAt: FieldRef<"AceiteTermos", 'DateTime'>
    readonly updatedAt: FieldRef<"AceiteTermos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AceiteTermos findUnique
   */
  export type AceiteTermosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * Filter, which AceiteTermos to fetch.
     */
    where: AceiteTermosWhereUniqueInput
  }

  /**
   * AceiteTermos findUniqueOrThrow
   */
  export type AceiteTermosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * Filter, which AceiteTermos to fetch.
     */
    where: AceiteTermosWhereUniqueInput
  }

  /**
   * AceiteTermos findFirst
   */
  export type AceiteTermosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * Filter, which AceiteTermos to fetch.
     */
    where?: AceiteTermosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AceiteTermos to fetch.
     */
    orderBy?: AceiteTermosOrderByWithRelationInput | AceiteTermosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AceiteTermos.
     */
    cursor?: AceiteTermosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AceiteTermos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AceiteTermos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AceiteTermos.
     */
    distinct?: AceiteTermosScalarFieldEnum | AceiteTermosScalarFieldEnum[]
  }

  /**
   * AceiteTermos findFirstOrThrow
   */
  export type AceiteTermosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * Filter, which AceiteTermos to fetch.
     */
    where?: AceiteTermosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AceiteTermos to fetch.
     */
    orderBy?: AceiteTermosOrderByWithRelationInput | AceiteTermosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AceiteTermos.
     */
    cursor?: AceiteTermosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AceiteTermos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AceiteTermos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AceiteTermos.
     */
    distinct?: AceiteTermosScalarFieldEnum | AceiteTermosScalarFieldEnum[]
  }

  /**
   * AceiteTermos findMany
   */
  export type AceiteTermosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * Filter, which AceiteTermos to fetch.
     */
    where?: AceiteTermosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AceiteTermos to fetch.
     */
    orderBy?: AceiteTermosOrderByWithRelationInput | AceiteTermosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AceiteTermos.
     */
    cursor?: AceiteTermosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AceiteTermos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AceiteTermos.
     */
    skip?: number
    distinct?: AceiteTermosScalarFieldEnum | AceiteTermosScalarFieldEnum[]
  }

  /**
   * AceiteTermos create
   */
  export type AceiteTermosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * The data needed to create a AceiteTermos.
     */
    data: XOR<AceiteTermosCreateInput, AceiteTermosUncheckedCreateInput>
  }

  /**
   * AceiteTermos createMany
   */
  export type AceiteTermosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AceiteTermos.
     */
    data: AceiteTermosCreateManyInput | AceiteTermosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AceiteTermos createManyAndReturn
   */
  export type AceiteTermosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * The data used to create many AceiteTermos.
     */
    data: AceiteTermosCreateManyInput | AceiteTermosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AceiteTermos update
   */
  export type AceiteTermosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * The data needed to update a AceiteTermos.
     */
    data: XOR<AceiteTermosUpdateInput, AceiteTermosUncheckedUpdateInput>
    /**
     * Choose, which AceiteTermos to update.
     */
    where: AceiteTermosWhereUniqueInput
  }

  /**
   * AceiteTermos updateMany
   */
  export type AceiteTermosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AceiteTermos.
     */
    data: XOR<AceiteTermosUpdateManyMutationInput, AceiteTermosUncheckedUpdateManyInput>
    /**
     * Filter which AceiteTermos to update
     */
    where?: AceiteTermosWhereInput
    /**
     * Limit how many AceiteTermos to update.
     */
    limit?: number
  }

  /**
   * AceiteTermos updateManyAndReturn
   */
  export type AceiteTermosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * The data used to update AceiteTermos.
     */
    data: XOR<AceiteTermosUpdateManyMutationInput, AceiteTermosUncheckedUpdateManyInput>
    /**
     * Filter which AceiteTermos to update
     */
    where?: AceiteTermosWhereInput
    /**
     * Limit how many AceiteTermos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AceiteTermos upsert
   */
  export type AceiteTermosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * The filter to search for the AceiteTermos to update in case it exists.
     */
    where: AceiteTermosWhereUniqueInput
    /**
     * In case the AceiteTermos found by the `where` argument doesn't exist, create a new AceiteTermos with this data.
     */
    create: XOR<AceiteTermosCreateInput, AceiteTermosUncheckedCreateInput>
    /**
     * In case the AceiteTermos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AceiteTermosUpdateInput, AceiteTermosUncheckedUpdateInput>
  }

  /**
   * AceiteTermos delete
   */
  export type AceiteTermosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    /**
     * Filter which AceiteTermos to delete.
     */
    where: AceiteTermosWhereUniqueInput
  }

  /**
   * AceiteTermos deleteMany
   */
  export type AceiteTermosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AceiteTermos to delete
     */
    where?: AceiteTermosWhereInput
    /**
     * Limit how many AceiteTermos to delete.
     */
    limit?: number
  }

  /**
   * AceiteTermos without action
   */
  export type AceiteTermosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    cpfCnpj: string | null
    whatsapp: string | null
    email: string | null
    password: string | null
    userType: $Enums.UserType | null
    dataNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.UserStatus | null
    periodoMandatoInicio: Date | null
    periodoMandatoFim: Date | null
    nomeFantasia: string | null
    razaoSocial: string | null
    cep: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cpfCnpj: string | null
    whatsapp: string | null
    email: string | null
    password: string | null
    userType: $Enums.UserType | null
    dataNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.UserStatus | null
    periodoMandatoInicio: Date | null
    periodoMandatoFim: Date | null
    nomeFantasia: string | null
    razaoSocial: string | null
    cep: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    cpfCnpj: number
    whatsapp: number
    email: number
    password: number
    userType: number
    dataNascimento: number
    createdAt: number
    updatedAt: number
    status: number
    periodoMandatoInicio: number
    periodoMandatoFim: number
    subsindicoInfo: number
    nomeFantasia: number
    razaoSocial: number
    cep: number
    endereco: number
    cidade: number
    uf: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    cpfCnpj?: true
    whatsapp?: true
    email?: true
    password?: true
    userType?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    periodoMandatoInicio?: true
    periodoMandatoFim?: true
    nomeFantasia?: true
    razaoSocial?: true
    cep?: true
    endereco?: true
    cidade?: true
    uf?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    cpfCnpj?: true
    whatsapp?: true
    email?: true
    password?: true
    userType?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    periodoMandatoInicio?: true
    periodoMandatoFim?: true
    nomeFantasia?: true
    razaoSocial?: true
    cep?: true
    endereco?: true
    cidade?: true
    uf?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    cpfCnpj?: true
    whatsapp?: true
    email?: true
    password?: true
    userType?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    periodoMandatoInicio?: true
    periodoMandatoFim?: true
    subsindicoInfo?: true
    nomeFantasia?: true
    razaoSocial?: true
    cep?: true
    endereco?: true
    cidade?: true
    uf?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento: Date | null
    createdAt: Date
    updatedAt: Date
    status: $Enums.UserStatus
    periodoMandatoInicio: Date | null
    periodoMandatoFim: Date | null
    subsindicoInfo: JsonValue | null
    nomeFantasia: string | null
    razaoSocial: string | null
    cep: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpfCnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    periodoMandatoInicio?: boolean
    periodoMandatoFim?: boolean
    subsindicoInfo?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    imoveis?: boolean | User$imoveisArgs<ExtArgs>
    chamadosCriados?: boolean | User$chamadosCriadosArgs<ExtArgs>
    chamadosDesignados?: boolean | User$chamadosDesignadosArgs<ExtArgs>
    AceiteTermos?: boolean | User$AceiteTermosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpfCnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    periodoMandatoInicio?: boolean
    periodoMandatoFim?: boolean
    subsindicoInfo?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpfCnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    periodoMandatoInicio?: boolean
    periodoMandatoFim?: boolean
    subsindicoInfo?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    cpfCnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    periodoMandatoInicio?: boolean
    periodoMandatoFim?: boolean
    subsindicoInfo?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpfCnpj" | "whatsapp" | "email" | "password" | "userType" | "dataNascimento" | "createdAt" | "updatedAt" | "status" | "periodoMandatoInicio" | "periodoMandatoFim" | "subsindicoInfo" | "nomeFantasia" | "razaoSocial" | "cep" | "endereco" | "cidade" | "uf", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imoveis?: boolean | User$imoveisArgs<ExtArgs>
    chamadosCriados?: boolean | User$chamadosCriadosArgs<ExtArgs>
    chamadosDesignados?: boolean | User$chamadosDesignadosArgs<ExtArgs>
    AceiteTermos?: boolean | User$AceiteTermosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      imoveis: Prisma.$ImovelPayload<ExtArgs>[]
      chamadosCriados: Prisma.$ChamadoPayload<ExtArgs>[]
      chamadosDesignados: Prisma.$ChamadoPayload<ExtArgs>[]
      AceiteTermos: Prisma.$AceiteTermosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cpfCnpj: string
      whatsapp: string
      email: string
      password: string
      userType: $Enums.UserType
      dataNascimento: Date | null
      createdAt: Date
      updatedAt: Date
      status: $Enums.UserStatus
      periodoMandatoInicio: Date | null
      periodoMandatoFim: Date | null
      subsindicoInfo: Prisma.JsonValue | null
      nomeFantasia: string | null
      razaoSocial: string | null
      cep: string | null
      endereco: string | null
      cidade: string | null
      uf: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imoveis<T extends User$imoveisArgs<ExtArgs> = {}>(args?: Subset<T, User$imoveisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chamadosCriados<T extends User$chamadosCriadosArgs<ExtArgs> = {}>(args?: Subset<T, User$chamadosCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chamadosDesignados<T extends User$chamadosDesignadosArgs<ExtArgs> = {}>(args?: Subset<T, User$chamadosDesignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AceiteTermos<T extends User$AceiteTermosArgs<ExtArgs> = {}>(args?: Subset<T, User$AceiteTermosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AceiteTermosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly cpfCnpj: FieldRef<"User", 'String'>
    readonly whatsapp: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly dataNascimento: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly periodoMandatoInicio: FieldRef<"User", 'DateTime'>
    readonly periodoMandatoFim: FieldRef<"User", 'DateTime'>
    readonly subsindicoInfo: FieldRef<"User", 'Json'>
    readonly nomeFantasia: FieldRef<"User", 'String'>
    readonly razaoSocial: FieldRef<"User", 'String'>
    readonly cep: FieldRef<"User", 'String'>
    readonly endereco: FieldRef<"User", 'String'>
    readonly cidade: FieldRef<"User", 'String'>
    readonly uf: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.imoveis
   */
  export type User$imoveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    where?: ImovelWhereInput
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    cursor?: ImovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * User.chamadosCriados
   */
  export type User$chamadosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * User.chamadosDesignados
   */
  export type User$chamadosDesignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * User.AceiteTermos
   */
  export type User$AceiteTermosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AceiteTermos
     */
    select?: AceiteTermosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AceiteTermos
     */
    omit?: AceiteTermosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AceiteTermosInclude<ExtArgs> | null
    where?: AceiteTermosWhereInput
    orderBy?: AceiteTermosOrderByWithRelationInput | AceiteTermosOrderByWithRelationInput[]
    cursor?: AceiteTermosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AceiteTermosScalarFieldEnum | AceiteTermosScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Imovel
   */

  export type AggregateImovel = {
    _count: ImovelCountAggregateOutputType | null
    _avg: ImovelAvgAggregateOutputType | null
    _sum: ImovelSumAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  export type ImovelAvgAggregateOutputType = {
    id: number | null
    quantidade_moradias: number | null
    gestorId: number | null
  }

  export type ImovelSumAggregateOutputType = {
    id: number | null
    quantidade_moradias: number | null
    gestorId: number | null
  }

  export type ImovelMinAggregateOutputType = {
    id: number | null
    cep: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
    quantidade_moradias: number | null
    createdAt: Date | null
    updatedAt: Date | null
    gestorId: number | null
  }

  export type ImovelMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
    quantidade_moradias: number | null
    createdAt: Date | null
    updatedAt: Date | null
    gestorId: number | null
  }

  export type ImovelCountAggregateOutputType = {
    id: number
    cep: number
    endereco: number
    cidade: number
    uf: number
    quantidade_moradias: number
    createdAt: number
    updatedAt: number
    gestorId: number
    _all: number
  }


  export type ImovelAvgAggregateInputType = {
    id?: true
    quantidade_moradias?: true
    gestorId?: true
  }

  export type ImovelSumAggregateInputType = {
    id?: true
    quantidade_moradias?: true
    gestorId?: true
  }

  export type ImovelMinAggregateInputType = {
    id?: true
    cep?: true
    endereco?: true
    cidade?: true
    uf?: true
    quantidade_moradias?: true
    createdAt?: true
    updatedAt?: true
    gestorId?: true
  }

  export type ImovelMaxAggregateInputType = {
    id?: true
    cep?: true
    endereco?: true
    cidade?: true
    uf?: true
    quantidade_moradias?: true
    createdAt?: true
    updatedAt?: true
    gestorId?: true
  }

  export type ImovelCountAggregateInputType = {
    id?: true
    cep?: true
    endereco?: true
    cidade?: true
    uf?: true
    quantidade_moradias?: true
    createdAt?: true
    updatedAt?: true
    gestorId?: true
    _all?: true
  }

  export type ImovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imovel to aggregate.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imovels
    **/
    _count?: true | ImovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImovelMaxAggregateInputType
  }

  export type GetImovelAggregateType<T extends ImovelAggregateArgs> = {
        [P in keyof T & keyof AggregateImovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImovel[P]>
      : GetScalarType<T[P], AggregateImovel[P]>
  }




  export type ImovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImovelWhereInput
    orderBy?: ImovelOrderByWithAggregationInput | ImovelOrderByWithAggregationInput[]
    by: ImovelScalarFieldEnum[] | ImovelScalarFieldEnum
    having?: ImovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImovelCountAggregateInputType | true
    _avg?: ImovelAvgAggregateInputType
    _sum?: ImovelSumAggregateInputType
    _min?: ImovelMinAggregateInputType
    _max?: ImovelMaxAggregateInputType
  }

  export type ImovelGroupByOutputType = {
    id: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt: Date
    updatedAt: Date
    gestorId: number
    _count: ImovelCountAggregateOutputType | null
    _avg: ImovelAvgAggregateOutputType | null
    _sum: ImovelSumAggregateOutputType | null
    _min: ImovelMinAggregateOutputType | null
    _max: ImovelMaxAggregateOutputType | null
  }

  type GetImovelGroupByPayload<T extends ImovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImovelGroupByOutputType[P]>
            : GetScalarType<T[P], ImovelGroupByOutputType[P]>
        }
      >
    >


  export type ImovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    quantidade_moradias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gestorId?: boolean
    gestor?: boolean | UserDefaultArgs<ExtArgs>
    ativos?: boolean | Imovel$ativosArgs<ExtArgs>
    chamados?: boolean | Imovel$chamadosArgs<ExtArgs>
    areasComuns?: boolean | Imovel$areasComunsArgs<ExtArgs>
    _count?: boolean | ImovelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imovel"]>

  export type ImovelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    quantidade_moradias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gestorId?: boolean
    gestor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imovel"]>

  export type ImovelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    quantidade_moradias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gestorId?: boolean
    gestor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imovel"]>

  export type ImovelSelectScalar = {
    id?: boolean
    cep?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    quantidade_moradias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gestorId?: boolean
  }

  export type ImovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "endereco" | "cidade" | "uf" | "quantidade_moradias" | "createdAt" | "updatedAt" | "gestorId", ExtArgs["result"]["imovel"]>
  export type ImovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gestor?: boolean | UserDefaultArgs<ExtArgs>
    ativos?: boolean | Imovel$ativosArgs<ExtArgs>
    chamados?: boolean | Imovel$chamadosArgs<ExtArgs>
    areasComuns?: boolean | Imovel$areasComunsArgs<ExtArgs>
    _count?: boolean | ImovelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImovelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gestor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImovelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gestor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imovel"
    objects: {
      gestor: Prisma.$UserPayload<ExtArgs>
      ativos: Prisma.$AtivoPayload<ExtArgs>[]
      chamados: Prisma.$ChamadoPayload<ExtArgs>[]
      areasComuns: Prisma.$AreasComunsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      endereco: string
      cidade: string
      uf: string
      quantidade_moradias: number
      createdAt: Date
      updatedAt: Date
      gestorId: number
    }, ExtArgs["result"]["imovel"]>
    composites: {}
  }

  type ImovelGetPayload<S extends boolean | null | undefined | ImovelDefaultArgs> = $Result.GetResult<Prisma.$ImovelPayload, S>

  type ImovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImovelCountAggregateInputType | true
    }

  export interface ImovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imovel'], meta: { name: 'Imovel' } }
    /**
     * Find zero or one Imovel that matches the filter.
     * @param {ImovelFindUniqueArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImovelFindUniqueArgs>(args: SelectSubset<T, ImovelFindUniqueArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imovel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImovelFindUniqueOrThrowArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImovelFindUniqueOrThrowArgs>(args: SelectSubset<T, ImovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindFirstArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImovelFindFirstArgs>(args?: SelectSubset<T, ImovelFindFirstArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imovel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindFirstOrThrowArgs} args - Arguments to find a Imovel
     * @example
     * // Get one Imovel
     * const imovel = await prisma.imovel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImovelFindFirstOrThrowArgs>(args?: SelectSubset<T, ImovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imovels
     * const imovels = await prisma.imovel.findMany()
     * 
     * // Get first 10 Imovels
     * const imovels = await prisma.imovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imovelWithIdOnly = await prisma.imovel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImovelFindManyArgs>(args?: SelectSubset<T, ImovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imovel.
     * @param {ImovelCreateArgs} args - Arguments to create a Imovel.
     * @example
     * // Create one Imovel
     * const Imovel = await prisma.imovel.create({
     *   data: {
     *     // ... data to create a Imovel
     *   }
     * })
     * 
     */
    create<T extends ImovelCreateArgs>(args: SelectSubset<T, ImovelCreateArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imovels.
     * @param {ImovelCreateManyArgs} args - Arguments to create many Imovels.
     * @example
     * // Create many Imovels
     * const imovel = await prisma.imovel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImovelCreateManyArgs>(args?: SelectSubset<T, ImovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imovels and returns the data saved in the database.
     * @param {ImovelCreateManyAndReturnArgs} args - Arguments to create many Imovels.
     * @example
     * // Create many Imovels
     * const imovel = await prisma.imovel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imovels and only return the `id`
     * const imovelWithIdOnly = await prisma.imovel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImovelCreateManyAndReturnArgs>(args?: SelectSubset<T, ImovelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imovel.
     * @param {ImovelDeleteArgs} args - Arguments to delete one Imovel.
     * @example
     * // Delete one Imovel
     * const Imovel = await prisma.imovel.delete({
     *   where: {
     *     // ... filter to delete one Imovel
     *   }
     * })
     * 
     */
    delete<T extends ImovelDeleteArgs>(args: SelectSubset<T, ImovelDeleteArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imovel.
     * @param {ImovelUpdateArgs} args - Arguments to update one Imovel.
     * @example
     * // Update one Imovel
     * const imovel = await prisma.imovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImovelUpdateArgs>(args: SelectSubset<T, ImovelUpdateArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imovels.
     * @param {ImovelDeleteManyArgs} args - Arguments to filter Imovels to delete.
     * @example
     * // Delete a few Imovels
     * const { count } = await prisma.imovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImovelDeleteManyArgs>(args?: SelectSubset<T, ImovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imovels
     * const imovel = await prisma.imovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImovelUpdateManyArgs>(args: SelectSubset<T, ImovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imovels and returns the data updated in the database.
     * @param {ImovelUpdateManyAndReturnArgs} args - Arguments to update many Imovels.
     * @example
     * // Update many Imovels
     * const imovel = await prisma.imovel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imovels and only return the `id`
     * const imovelWithIdOnly = await prisma.imovel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImovelUpdateManyAndReturnArgs>(args: SelectSubset<T, ImovelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imovel.
     * @param {ImovelUpsertArgs} args - Arguments to update or create a Imovel.
     * @example
     * // Update or create a Imovel
     * const imovel = await prisma.imovel.upsert({
     *   create: {
     *     // ... data to create a Imovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imovel we want to update
     *   }
     * })
     */
    upsert<T extends ImovelUpsertArgs>(args: SelectSubset<T, ImovelUpsertArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelCountArgs} args - Arguments to filter Imovels to count.
     * @example
     * // Count the number of Imovels
     * const count = await prisma.imovel.count({
     *   where: {
     *     // ... the filter for the Imovels we want to count
     *   }
     * })
    **/
    count<T extends ImovelCountArgs>(
      args?: Subset<T, ImovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImovelAggregateArgs>(args: Subset<T, ImovelAggregateArgs>): Prisma.PrismaPromise<GetImovelAggregateType<T>>

    /**
     * Group by Imovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImovelGroupByArgs} args - Group by arguments.
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
      T extends ImovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImovelGroupByArgs['orderBy'] }
        : { orderBy?: ImovelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imovel model
   */
  readonly fields: ImovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gestor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ativos<T extends Imovel$ativosArgs<ExtArgs> = {}>(args?: Subset<T, Imovel$ativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chamados<T extends Imovel$chamadosArgs<ExtArgs> = {}>(args?: Subset<T, Imovel$chamadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    areasComuns<T extends Imovel$areasComunsArgs<ExtArgs> = {}>(args?: Subset<T, Imovel$areasComunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Imovel model
   */
  interface ImovelFieldRefs {
    readonly id: FieldRef<"Imovel", 'Int'>
    readonly cep: FieldRef<"Imovel", 'String'>
    readonly endereco: FieldRef<"Imovel", 'String'>
    readonly cidade: FieldRef<"Imovel", 'String'>
    readonly uf: FieldRef<"Imovel", 'String'>
    readonly quantidade_moradias: FieldRef<"Imovel", 'Int'>
    readonly createdAt: FieldRef<"Imovel", 'DateTime'>
    readonly updatedAt: FieldRef<"Imovel", 'DateTime'>
    readonly gestorId: FieldRef<"Imovel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Imovel findUnique
   */
  export type ImovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel findUniqueOrThrow
   */
  export type ImovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel findFirst
   */
  export type ImovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imovels.
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * Imovel findFirstOrThrow
   */
  export type ImovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * Filter, which Imovel to fetch.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imovels.
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imovels.
     */
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * Imovel findMany
   */
  export type ImovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * Filter, which Imovels to fetch.
     */
    where?: ImovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imovels to fetch.
     */
    orderBy?: ImovelOrderByWithRelationInput | ImovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imovels.
     */
    cursor?: ImovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imovels.
     */
    skip?: number
    distinct?: ImovelScalarFieldEnum | ImovelScalarFieldEnum[]
  }

  /**
   * Imovel create
   */
  export type ImovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * The data needed to create a Imovel.
     */
    data: XOR<ImovelCreateInput, ImovelUncheckedCreateInput>
  }

  /**
   * Imovel createMany
   */
  export type ImovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imovels.
     */
    data: ImovelCreateManyInput | ImovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imovel createManyAndReturn
   */
  export type ImovelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * The data used to create many Imovels.
     */
    data: ImovelCreateManyInput | ImovelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imovel update
   */
  export type ImovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * The data needed to update a Imovel.
     */
    data: XOR<ImovelUpdateInput, ImovelUncheckedUpdateInput>
    /**
     * Choose, which Imovel to update.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel updateMany
   */
  export type ImovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imovels.
     */
    data: XOR<ImovelUpdateManyMutationInput, ImovelUncheckedUpdateManyInput>
    /**
     * Filter which Imovels to update
     */
    where?: ImovelWhereInput
    /**
     * Limit how many Imovels to update.
     */
    limit?: number
  }

  /**
   * Imovel updateManyAndReturn
   */
  export type ImovelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * The data used to update Imovels.
     */
    data: XOR<ImovelUpdateManyMutationInput, ImovelUncheckedUpdateManyInput>
    /**
     * Filter which Imovels to update
     */
    where?: ImovelWhereInput
    /**
     * Limit how many Imovels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imovel upsert
   */
  export type ImovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * The filter to search for the Imovel to update in case it exists.
     */
    where: ImovelWhereUniqueInput
    /**
     * In case the Imovel found by the `where` argument doesn't exist, create a new Imovel with this data.
     */
    create: XOR<ImovelCreateInput, ImovelUncheckedCreateInput>
    /**
     * In case the Imovel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImovelUpdateInput, ImovelUncheckedUpdateInput>
  }

  /**
   * Imovel delete
   */
  export type ImovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
    /**
     * Filter which Imovel to delete.
     */
    where: ImovelWhereUniqueInput
  }

  /**
   * Imovel deleteMany
   */
  export type ImovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imovels to delete
     */
    where?: ImovelWhereInput
    /**
     * Limit how many Imovels to delete.
     */
    limit?: number
  }

  /**
   * Imovel.ativos
   */
  export type Imovel$ativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    cursor?: AtivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Imovel.chamados
   */
  export type Imovel$chamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Imovel.areasComuns
   */
  export type Imovel$areasComunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    where?: AreasComunsWhereInput
    orderBy?: AreasComunsOrderByWithRelationInput | AreasComunsOrderByWithRelationInput[]
    cursor?: AreasComunsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreasComunsScalarFieldEnum | AreasComunsScalarFieldEnum[]
  }

  /**
   * Imovel without action
   */
  export type ImovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imovel
     */
    select?: ImovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imovel
     */
    omit?: ImovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImovelInclude<ExtArgs> | null
  }


  /**
   * Model AreasComuns
   */

  export type AggregateAreasComuns = {
    _count: AreasComunsCountAggregateOutputType | null
    _avg: AreasComunsAvgAggregateOutputType | null
    _sum: AreasComunsSumAggregateOutputType | null
    _min: AreasComunsMinAggregateOutputType | null
    _max: AreasComunsMaxAggregateOutputType | null
  }

  export type AreasComunsAvgAggregateOutputType = {
    id: number | null
    imovelId: number | null
  }

  export type AreasComunsSumAggregateOutputType = {
    id: number | null
    imovelId: number | null
  }

  export type AreasComunsMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imovelId: number | null
  }

  export type AreasComunsMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imovelId: number | null
  }

  export type AreasComunsCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    imovelId: number
    _all: number
  }


  export type AreasComunsAvgAggregateInputType = {
    id?: true
    imovelId?: true
  }

  export type AreasComunsSumAggregateInputType = {
    id?: true
    imovelId?: true
  }

  export type AreasComunsMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
  }

  export type AreasComunsMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
  }

  export type AreasComunsCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
    _all?: true
  }

  export type AreasComunsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreasComuns to aggregate.
     */
    where?: AreasComunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreasComuns to fetch.
     */
    orderBy?: AreasComunsOrderByWithRelationInput | AreasComunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreasComunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreasComuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreasComuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreasComuns
    **/
    _count?: true | AreasComunsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreasComunsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreasComunsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreasComunsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreasComunsMaxAggregateInputType
  }

  export type GetAreasComunsAggregateType<T extends AreasComunsAggregateArgs> = {
        [P in keyof T & keyof AggregateAreasComuns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreasComuns[P]>
      : GetScalarType<T[P], AggregateAreasComuns[P]>
  }




  export type AreasComunsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreasComunsWhereInput
    orderBy?: AreasComunsOrderByWithAggregationInput | AreasComunsOrderByWithAggregationInput[]
    by: AreasComunsScalarFieldEnum[] | AreasComunsScalarFieldEnum
    having?: AreasComunsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreasComunsCountAggregateInputType | true
    _avg?: AreasComunsAvgAggregateInputType
    _sum?: AreasComunsSumAggregateInputType
    _min?: AreasComunsMinAggregateInputType
    _max?: AreasComunsMaxAggregateInputType
  }

  export type AreasComunsGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    imovelId: number
    _count: AreasComunsCountAggregateOutputType | null
    _avg: AreasComunsAvgAggregateOutputType | null
    _sum: AreasComunsSumAggregateOutputType | null
    _min: AreasComunsMinAggregateOutputType | null
    _max: AreasComunsMaxAggregateOutputType | null
  }

  type GetAreasComunsGroupByPayload<T extends AreasComunsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreasComunsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreasComunsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreasComunsGroupByOutputType[P]>
            : GetScalarType<T[P], AreasComunsGroupByOutputType[P]>
        }
      >
    >


  export type AreasComunsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    anexos?: boolean | AreasComuns$anexosArgs<ExtArgs>
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    _count?: boolean | AreasComunsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areasComuns"]>

  export type AreasComunsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areasComuns"]>

  export type AreasComunsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areasComuns"]>

  export type AreasComunsSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
  }

  export type AreasComunsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "createdAt" | "updatedAt" | "imovelId", ExtArgs["result"]["areasComuns"]>
  export type AreasComunsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | AreasComuns$anexosArgs<ExtArgs>
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    _count?: boolean | AreasComunsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreasComunsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }
  export type AreasComunsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }

  export type $AreasComunsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AreasComuns"
    objects: {
      anexos: Prisma.$AnexoPayload<ExtArgs>[]
      imovel: Prisma.$ImovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date
      imovelId: number
    }, ExtArgs["result"]["areasComuns"]>
    composites: {}
  }

  type AreasComunsGetPayload<S extends boolean | null | undefined | AreasComunsDefaultArgs> = $Result.GetResult<Prisma.$AreasComunsPayload, S>

  type AreasComunsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreasComunsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreasComunsCountAggregateInputType | true
    }

  export interface AreasComunsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AreasComuns'], meta: { name: 'AreasComuns' } }
    /**
     * Find zero or one AreasComuns that matches the filter.
     * @param {AreasComunsFindUniqueArgs} args - Arguments to find a AreasComuns
     * @example
     * // Get one AreasComuns
     * const areasComuns = await prisma.areasComuns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreasComunsFindUniqueArgs>(args: SelectSubset<T, AreasComunsFindUniqueArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AreasComuns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreasComunsFindUniqueOrThrowArgs} args - Arguments to find a AreasComuns
     * @example
     * // Get one AreasComuns
     * const areasComuns = await prisma.areasComuns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreasComunsFindUniqueOrThrowArgs>(args: SelectSubset<T, AreasComunsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreasComuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsFindFirstArgs} args - Arguments to find a AreasComuns
     * @example
     * // Get one AreasComuns
     * const areasComuns = await prisma.areasComuns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreasComunsFindFirstArgs>(args?: SelectSubset<T, AreasComunsFindFirstArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreasComuns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsFindFirstOrThrowArgs} args - Arguments to find a AreasComuns
     * @example
     * // Get one AreasComuns
     * const areasComuns = await prisma.areasComuns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreasComunsFindFirstOrThrowArgs>(args?: SelectSubset<T, AreasComunsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AreasComuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreasComuns
     * const areasComuns = await prisma.areasComuns.findMany()
     * 
     * // Get first 10 AreasComuns
     * const areasComuns = await prisma.areasComuns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areasComunsWithIdOnly = await prisma.areasComuns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreasComunsFindManyArgs>(args?: SelectSubset<T, AreasComunsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AreasComuns.
     * @param {AreasComunsCreateArgs} args - Arguments to create a AreasComuns.
     * @example
     * // Create one AreasComuns
     * const AreasComuns = await prisma.areasComuns.create({
     *   data: {
     *     // ... data to create a AreasComuns
     *   }
     * })
     * 
     */
    create<T extends AreasComunsCreateArgs>(args: SelectSubset<T, AreasComunsCreateArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AreasComuns.
     * @param {AreasComunsCreateManyArgs} args - Arguments to create many AreasComuns.
     * @example
     * // Create many AreasComuns
     * const areasComuns = await prisma.areasComuns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreasComunsCreateManyArgs>(args?: SelectSubset<T, AreasComunsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AreasComuns and returns the data saved in the database.
     * @param {AreasComunsCreateManyAndReturnArgs} args - Arguments to create many AreasComuns.
     * @example
     * // Create many AreasComuns
     * const areasComuns = await prisma.areasComuns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AreasComuns and only return the `id`
     * const areasComunsWithIdOnly = await prisma.areasComuns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreasComunsCreateManyAndReturnArgs>(args?: SelectSubset<T, AreasComunsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AreasComuns.
     * @param {AreasComunsDeleteArgs} args - Arguments to delete one AreasComuns.
     * @example
     * // Delete one AreasComuns
     * const AreasComuns = await prisma.areasComuns.delete({
     *   where: {
     *     // ... filter to delete one AreasComuns
     *   }
     * })
     * 
     */
    delete<T extends AreasComunsDeleteArgs>(args: SelectSubset<T, AreasComunsDeleteArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AreasComuns.
     * @param {AreasComunsUpdateArgs} args - Arguments to update one AreasComuns.
     * @example
     * // Update one AreasComuns
     * const areasComuns = await prisma.areasComuns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreasComunsUpdateArgs>(args: SelectSubset<T, AreasComunsUpdateArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AreasComuns.
     * @param {AreasComunsDeleteManyArgs} args - Arguments to filter AreasComuns to delete.
     * @example
     * // Delete a few AreasComuns
     * const { count } = await prisma.areasComuns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreasComunsDeleteManyArgs>(args?: SelectSubset<T, AreasComunsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreasComuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreasComuns
     * const areasComuns = await prisma.areasComuns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreasComunsUpdateManyArgs>(args: SelectSubset<T, AreasComunsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreasComuns and returns the data updated in the database.
     * @param {AreasComunsUpdateManyAndReturnArgs} args - Arguments to update many AreasComuns.
     * @example
     * // Update many AreasComuns
     * const areasComuns = await prisma.areasComuns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AreasComuns and only return the `id`
     * const areasComunsWithIdOnly = await prisma.areasComuns.updateManyAndReturn({
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
    updateManyAndReturn<T extends AreasComunsUpdateManyAndReturnArgs>(args: SelectSubset<T, AreasComunsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AreasComuns.
     * @param {AreasComunsUpsertArgs} args - Arguments to update or create a AreasComuns.
     * @example
     * // Update or create a AreasComuns
     * const areasComuns = await prisma.areasComuns.upsert({
     *   create: {
     *     // ... data to create a AreasComuns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreasComuns we want to update
     *   }
     * })
     */
    upsert<T extends AreasComunsUpsertArgs>(args: SelectSubset<T, AreasComunsUpsertArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AreasComuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsCountArgs} args - Arguments to filter AreasComuns to count.
     * @example
     * // Count the number of AreasComuns
     * const count = await prisma.areasComuns.count({
     *   where: {
     *     // ... the filter for the AreasComuns we want to count
     *   }
     * })
    **/
    count<T extends AreasComunsCountArgs>(
      args?: Subset<T, AreasComunsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreasComunsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreasComuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreasComunsAggregateArgs>(args: Subset<T, AreasComunsAggregateArgs>): Prisma.PrismaPromise<GetAreasComunsAggregateType<T>>

    /**
     * Group by AreasComuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasComunsGroupByArgs} args - Group by arguments.
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
      T extends AreasComunsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreasComunsGroupByArgs['orderBy'] }
        : { orderBy?: AreasComunsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreasComunsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreasComunsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AreasComuns model
   */
  readonly fields: AreasComunsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AreasComuns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreasComunsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anexos<T extends AreasComuns$anexosArgs<ExtArgs> = {}>(args?: Subset<T, AreasComuns$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imovel<T extends ImovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImovelDefaultArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AreasComuns model
   */
  interface AreasComunsFieldRefs {
    readonly id: FieldRef<"AreasComuns", 'Int'>
    readonly nome: FieldRef<"AreasComuns", 'String'>
    readonly descricao: FieldRef<"AreasComuns", 'String'>
    readonly createdAt: FieldRef<"AreasComuns", 'DateTime'>
    readonly updatedAt: FieldRef<"AreasComuns", 'DateTime'>
    readonly imovelId: FieldRef<"AreasComuns", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AreasComuns findUnique
   */
  export type AreasComunsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * Filter, which AreasComuns to fetch.
     */
    where: AreasComunsWhereUniqueInput
  }

  /**
   * AreasComuns findUniqueOrThrow
   */
  export type AreasComunsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * Filter, which AreasComuns to fetch.
     */
    where: AreasComunsWhereUniqueInput
  }

  /**
   * AreasComuns findFirst
   */
  export type AreasComunsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * Filter, which AreasComuns to fetch.
     */
    where?: AreasComunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreasComuns to fetch.
     */
    orderBy?: AreasComunsOrderByWithRelationInput | AreasComunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreasComuns.
     */
    cursor?: AreasComunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreasComuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreasComuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreasComuns.
     */
    distinct?: AreasComunsScalarFieldEnum | AreasComunsScalarFieldEnum[]
  }

  /**
   * AreasComuns findFirstOrThrow
   */
  export type AreasComunsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * Filter, which AreasComuns to fetch.
     */
    where?: AreasComunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreasComuns to fetch.
     */
    orderBy?: AreasComunsOrderByWithRelationInput | AreasComunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreasComuns.
     */
    cursor?: AreasComunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreasComuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreasComuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreasComuns.
     */
    distinct?: AreasComunsScalarFieldEnum | AreasComunsScalarFieldEnum[]
  }

  /**
   * AreasComuns findMany
   */
  export type AreasComunsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * Filter, which AreasComuns to fetch.
     */
    where?: AreasComunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreasComuns to fetch.
     */
    orderBy?: AreasComunsOrderByWithRelationInput | AreasComunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreasComuns.
     */
    cursor?: AreasComunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreasComuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreasComuns.
     */
    skip?: number
    distinct?: AreasComunsScalarFieldEnum | AreasComunsScalarFieldEnum[]
  }

  /**
   * AreasComuns create
   */
  export type AreasComunsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * The data needed to create a AreasComuns.
     */
    data: XOR<AreasComunsCreateInput, AreasComunsUncheckedCreateInput>
  }

  /**
   * AreasComuns createMany
   */
  export type AreasComunsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AreasComuns.
     */
    data: AreasComunsCreateManyInput | AreasComunsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AreasComuns createManyAndReturn
   */
  export type AreasComunsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * The data used to create many AreasComuns.
     */
    data: AreasComunsCreateManyInput | AreasComunsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AreasComuns update
   */
  export type AreasComunsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * The data needed to update a AreasComuns.
     */
    data: XOR<AreasComunsUpdateInput, AreasComunsUncheckedUpdateInput>
    /**
     * Choose, which AreasComuns to update.
     */
    where: AreasComunsWhereUniqueInput
  }

  /**
   * AreasComuns updateMany
   */
  export type AreasComunsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AreasComuns.
     */
    data: XOR<AreasComunsUpdateManyMutationInput, AreasComunsUncheckedUpdateManyInput>
    /**
     * Filter which AreasComuns to update
     */
    where?: AreasComunsWhereInput
    /**
     * Limit how many AreasComuns to update.
     */
    limit?: number
  }

  /**
   * AreasComuns updateManyAndReturn
   */
  export type AreasComunsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * The data used to update AreasComuns.
     */
    data: XOR<AreasComunsUpdateManyMutationInput, AreasComunsUncheckedUpdateManyInput>
    /**
     * Filter which AreasComuns to update
     */
    where?: AreasComunsWhereInput
    /**
     * Limit how many AreasComuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AreasComuns upsert
   */
  export type AreasComunsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * The filter to search for the AreasComuns to update in case it exists.
     */
    where: AreasComunsWhereUniqueInput
    /**
     * In case the AreasComuns found by the `where` argument doesn't exist, create a new AreasComuns with this data.
     */
    create: XOR<AreasComunsCreateInput, AreasComunsUncheckedCreateInput>
    /**
     * In case the AreasComuns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreasComunsUpdateInput, AreasComunsUncheckedUpdateInput>
  }

  /**
   * AreasComuns delete
   */
  export type AreasComunsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    /**
     * Filter which AreasComuns to delete.
     */
    where: AreasComunsWhereUniqueInput
  }

  /**
   * AreasComuns deleteMany
   */
  export type AreasComunsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreasComuns to delete
     */
    where?: AreasComunsWhereInput
    /**
     * Limit how many AreasComuns to delete.
     */
    limit?: number
  }

  /**
   * AreasComuns.anexos
   */
  export type AreasComuns$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    cursor?: AnexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * AreasComuns without action
   */
  export type AreasComunsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
  }


  /**
   * Model Ativo
   */

  export type AggregateAtivo = {
    _count: AtivoCountAggregateOutputType | null
    _avg: AtivoAvgAggregateOutputType | null
    _sum: AtivoSumAggregateOutputType | null
    _min: AtivoMinAggregateOutputType | null
    _max: AtivoMaxAggregateOutputType | null
  }

  export type AtivoAvgAggregateOutputType = {
    id: number | null
    valorCompra: Decimal | null
    imovelId: number | null
  }

  export type AtivoSumAggregateOutputType = {
    id: number | null
    valorCompra: Decimal | null
    imovelId: number | null
  }

  export type AtivoMinAggregateOutputType = {
    id: number | null
    assetCode: string | null
    descricaoAtivo: string | null
    localInstalacao: string | null
    marca: string | null
    modelo: string | null
    dataInstalacao: Date | null
    valorCompra: Decimal | null
    garantia: boolean | null
    garantiaValidade: Date | null
    contratoManutencao: boolean | null
    contratoValidade: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    imovelId: number | null
  }

  export type AtivoMaxAggregateOutputType = {
    id: number | null
    assetCode: string | null
    descricaoAtivo: string | null
    localInstalacao: string | null
    marca: string | null
    modelo: string | null
    dataInstalacao: Date | null
    valorCompra: Decimal | null
    garantia: boolean | null
    garantiaValidade: Date | null
    contratoManutencao: boolean | null
    contratoValidade: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    imovelId: number | null
  }

  export type AtivoCountAggregateOutputType = {
    id: number
    assetCode: number
    descricaoAtivo: number
    localInstalacao: number
    marca: number
    modelo: number
    dataInstalacao: number
    valorCompra: number
    garantia: number
    garantiaValidade: number
    contratoManutencao: number
    contratoValidade: number
    createdAt: number
    updatedAt: number
    imovelId: number
    _all: number
  }


  export type AtivoAvgAggregateInputType = {
    id?: true
    valorCompra?: true
    imovelId?: true
  }

  export type AtivoSumAggregateInputType = {
    id?: true
    valorCompra?: true
    imovelId?: true
  }

  export type AtivoMinAggregateInputType = {
    id?: true
    assetCode?: true
    descricaoAtivo?: true
    localInstalacao?: true
    marca?: true
    modelo?: true
    dataInstalacao?: true
    valorCompra?: true
    garantia?: true
    garantiaValidade?: true
    contratoManutencao?: true
    contratoValidade?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
  }

  export type AtivoMaxAggregateInputType = {
    id?: true
    assetCode?: true
    descricaoAtivo?: true
    localInstalacao?: true
    marca?: true
    modelo?: true
    dataInstalacao?: true
    valorCompra?: true
    garantia?: true
    garantiaValidade?: true
    contratoManutencao?: true
    contratoValidade?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
  }

  export type AtivoCountAggregateInputType = {
    id?: true
    assetCode?: true
    descricaoAtivo?: true
    localInstalacao?: true
    marca?: true
    modelo?: true
    dataInstalacao?: true
    valorCompra?: true
    garantia?: true
    garantiaValidade?: true
    contratoManutencao?: true
    contratoValidade?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
    _all?: true
  }

  export type AtivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ativo to aggregate.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ativos
    **/
    _count?: true | AtivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtivoMaxAggregateInputType
  }

  export type GetAtivoAggregateType<T extends AtivoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtivo[P]>
      : GetScalarType<T[P], AggregateAtivo[P]>
  }




  export type AtivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtivoWhereInput
    orderBy?: AtivoOrderByWithAggregationInput | AtivoOrderByWithAggregationInput[]
    by: AtivoScalarFieldEnum[] | AtivoScalarFieldEnum
    having?: AtivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtivoCountAggregateInputType | true
    _avg?: AtivoAvgAggregateInputType
    _sum?: AtivoSumAggregateInputType
    _min?: AtivoMinAggregateInputType
    _max?: AtivoMaxAggregateInputType
  }

  export type AtivoGroupByOutputType = {
    id: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca: string | null
    modelo: string | null
    dataInstalacao: Date | null
    valorCompra: Decimal | null
    garantia: boolean
    garantiaValidade: Date | null
    contratoManutencao: boolean
    contratoValidade: Date | null
    createdAt: Date
    updatedAt: Date
    imovelId: number
    _count: AtivoCountAggregateOutputType | null
    _avg: AtivoAvgAggregateOutputType | null
    _sum: AtivoSumAggregateOutputType | null
    _min: AtivoMinAggregateOutputType | null
    _max: AtivoMaxAggregateOutputType | null
  }

  type GetAtivoGroupByPayload<T extends AtivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtivoGroupByOutputType[P]>
            : GetScalarType<T[P], AtivoGroupByOutputType[P]>
        }
      >
    >


  export type AtivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetCode?: boolean
    descricaoAtivo?: boolean
    localInstalacao?: boolean
    marca?: boolean
    modelo?: boolean
    dataInstalacao?: boolean
    valorCompra?: boolean
    garantia?: boolean
    garantiaValidade?: boolean
    contratoManutencao?: boolean
    contratoValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    anexos?: boolean | Ativo$anexosArgs<ExtArgs>
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    chamados?: boolean | Ativo$chamadosArgs<ExtArgs>
    _count?: boolean | AtivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ativo"]>

  export type AtivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetCode?: boolean
    descricaoAtivo?: boolean
    localInstalacao?: boolean
    marca?: boolean
    modelo?: boolean
    dataInstalacao?: boolean
    valorCompra?: boolean
    garantia?: boolean
    garantiaValidade?: boolean
    contratoManutencao?: boolean
    contratoValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ativo"]>

  export type AtivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetCode?: boolean
    descricaoAtivo?: boolean
    localInstalacao?: boolean
    marca?: boolean
    modelo?: boolean
    dataInstalacao?: boolean
    valorCompra?: boolean
    garantia?: boolean
    garantiaValidade?: boolean
    contratoManutencao?: boolean
    contratoValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ativo"]>

  export type AtivoSelectScalar = {
    id?: boolean
    assetCode?: boolean
    descricaoAtivo?: boolean
    localInstalacao?: boolean
    marca?: boolean
    modelo?: boolean
    dataInstalacao?: boolean
    valorCompra?: boolean
    garantia?: boolean
    garantiaValidade?: boolean
    contratoManutencao?: boolean
    contratoValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
  }

  export type AtivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetCode" | "descricaoAtivo" | "localInstalacao" | "marca" | "modelo" | "dataInstalacao" | "valorCompra" | "garantia" | "garantiaValidade" | "contratoManutencao" | "contratoValidade" | "createdAt" | "updatedAt" | "imovelId", ExtArgs["result"]["ativo"]>
  export type AtivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | Ativo$anexosArgs<ExtArgs>
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    chamados?: boolean | Ativo$chamadosArgs<ExtArgs>
    _count?: boolean | AtivoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }
  export type AtivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
  }

  export type $AtivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ativo"
    objects: {
      anexos: Prisma.$AnexoPayload<ExtArgs>[]
      imovel: Prisma.$ImovelPayload<ExtArgs>
      chamados: Prisma.$ChamadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assetCode: string
      descricaoAtivo: string
      localInstalacao: string
      marca: string | null
      modelo: string | null
      dataInstalacao: Date | null
      valorCompra: Prisma.Decimal | null
      garantia: boolean
      garantiaValidade: Date | null
      contratoManutencao: boolean
      contratoValidade: Date | null
      createdAt: Date
      updatedAt: Date
      imovelId: number
    }, ExtArgs["result"]["ativo"]>
    composites: {}
  }

  type AtivoGetPayload<S extends boolean | null | undefined | AtivoDefaultArgs> = $Result.GetResult<Prisma.$AtivoPayload, S>

  type AtivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtivoCountAggregateInputType | true
    }

  export interface AtivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ativo'], meta: { name: 'Ativo' } }
    /**
     * Find zero or one Ativo that matches the filter.
     * @param {AtivoFindUniqueArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtivoFindUniqueArgs>(args: SelectSubset<T, AtivoFindUniqueArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtivoFindUniqueOrThrowArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtivoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindFirstArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtivoFindFirstArgs>(args?: SelectSubset<T, AtivoFindFirstArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindFirstOrThrowArgs} args - Arguments to find a Ativo
     * @example
     * // Get one Ativo
     * const ativo = await prisma.ativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtivoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ativos
     * const ativos = await prisma.ativo.findMany()
     * 
     * // Get first 10 Ativos
     * const ativos = await prisma.ativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ativoWithIdOnly = await prisma.ativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtivoFindManyArgs>(args?: SelectSubset<T, AtivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ativo.
     * @param {AtivoCreateArgs} args - Arguments to create a Ativo.
     * @example
     * // Create one Ativo
     * const Ativo = await prisma.ativo.create({
     *   data: {
     *     // ... data to create a Ativo
     *   }
     * })
     * 
     */
    create<T extends AtivoCreateArgs>(args: SelectSubset<T, AtivoCreateArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ativos.
     * @param {AtivoCreateManyArgs} args - Arguments to create many Ativos.
     * @example
     * // Create many Ativos
     * const ativo = await prisma.ativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtivoCreateManyArgs>(args?: SelectSubset<T, AtivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ativos and returns the data saved in the database.
     * @param {AtivoCreateManyAndReturnArgs} args - Arguments to create many Ativos.
     * @example
     * // Create many Ativos
     * const ativo = await prisma.ativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ativos and only return the `id`
     * const ativoWithIdOnly = await prisma.ativo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtivoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ativo.
     * @param {AtivoDeleteArgs} args - Arguments to delete one Ativo.
     * @example
     * // Delete one Ativo
     * const Ativo = await prisma.ativo.delete({
     *   where: {
     *     // ... filter to delete one Ativo
     *   }
     * })
     * 
     */
    delete<T extends AtivoDeleteArgs>(args: SelectSubset<T, AtivoDeleteArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ativo.
     * @param {AtivoUpdateArgs} args - Arguments to update one Ativo.
     * @example
     * // Update one Ativo
     * const ativo = await prisma.ativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtivoUpdateArgs>(args: SelectSubset<T, AtivoUpdateArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ativos.
     * @param {AtivoDeleteManyArgs} args - Arguments to filter Ativos to delete.
     * @example
     * // Delete a few Ativos
     * const { count } = await prisma.ativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtivoDeleteManyArgs>(args?: SelectSubset<T, AtivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ativos
     * const ativo = await prisma.ativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtivoUpdateManyArgs>(args: SelectSubset<T, AtivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ativos and returns the data updated in the database.
     * @param {AtivoUpdateManyAndReturnArgs} args - Arguments to update many Ativos.
     * @example
     * // Update many Ativos
     * const ativo = await prisma.ativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ativos and only return the `id`
     * const ativoWithIdOnly = await prisma.ativo.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtivoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ativo.
     * @param {AtivoUpsertArgs} args - Arguments to update or create a Ativo.
     * @example
     * // Update or create a Ativo
     * const ativo = await prisma.ativo.upsert({
     *   create: {
     *     // ... data to create a Ativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ativo we want to update
     *   }
     * })
     */
    upsert<T extends AtivoUpsertArgs>(args: SelectSubset<T, AtivoUpsertArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoCountArgs} args - Arguments to filter Ativos to count.
     * @example
     * // Count the number of Ativos
     * const count = await prisma.ativo.count({
     *   where: {
     *     // ... the filter for the Ativos we want to count
     *   }
     * })
    **/
    count<T extends AtivoCountArgs>(
      args?: Subset<T, AtivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtivoAggregateArgs>(args: Subset<T, AtivoAggregateArgs>): Prisma.PrismaPromise<GetAtivoAggregateType<T>>

    /**
     * Group by Ativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtivoGroupByArgs} args - Group by arguments.
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
      T extends AtivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtivoGroupByArgs['orderBy'] }
        : { orderBy?: AtivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ativo model
   */
  readonly fields: AtivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anexos<T extends Ativo$anexosArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imovel<T extends ImovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImovelDefaultArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chamados<T extends Ativo$chamadosArgs<ExtArgs> = {}>(args?: Subset<T, Ativo$chamadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ativo model
   */
  interface AtivoFieldRefs {
    readonly id: FieldRef<"Ativo", 'Int'>
    readonly assetCode: FieldRef<"Ativo", 'String'>
    readonly descricaoAtivo: FieldRef<"Ativo", 'String'>
    readonly localInstalacao: FieldRef<"Ativo", 'String'>
    readonly marca: FieldRef<"Ativo", 'String'>
    readonly modelo: FieldRef<"Ativo", 'String'>
    readonly dataInstalacao: FieldRef<"Ativo", 'DateTime'>
    readonly valorCompra: FieldRef<"Ativo", 'Decimal'>
    readonly garantia: FieldRef<"Ativo", 'Boolean'>
    readonly garantiaValidade: FieldRef<"Ativo", 'DateTime'>
    readonly contratoManutencao: FieldRef<"Ativo", 'Boolean'>
    readonly contratoValidade: FieldRef<"Ativo", 'DateTime'>
    readonly createdAt: FieldRef<"Ativo", 'DateTime'>
    readonly updatedAt: FieldRef<"Ativo", 'DateTime'>
    readonly imovelId: FieldRef<"Ativo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ativo findUnique
   */
  export type AtivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo findUniqueOrThrow
   */
  export type AtivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo findFirst
   */
  export type AtivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ativos.
     */
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo findFirstOrThrow
   */
  export type AtivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativo to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ativos.
     */
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo findMany
   */
  export type AtivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter, which Ativos to fetch.
     */
    where?: AtivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ativos to fetch.
     */
    orderBy?: AtivoOrderByWithRelationInput | AtivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ativos.
     */
    cursor?: AtivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ativos.
     */
    skip?: number
    distinct?: AtivoScalarFieldEnum | AtivoScalarFieldEnum[]
  }

  /**
   * Ativo create
   */
  export type AtivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ativo.
     */
    data: XOR<AtivoCreateInput, AtivoUncheckedCreateInput>
  }

  /**
   * Ativo createMany
   */
  export type AtivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ativos.
     */
    data: AtivoCreateManyInput | AtivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ativo createManyAndReturn
   */
  export type AtivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * The data used to create many Ativos.
     */
    data: AtivoCreateManyInput | AtivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ativo update
   */
  export type AtivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ativo.
     */
    data: XOR<AtivoUpdateInput, AtivoUncheckedUpdateInput>
    /**
     * Choose, which Ativo to update.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo updateMany
   */
  export type AtivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ativos.
     */
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyInput>
    /**
     * Filter which Ativos to update
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to update.
     */
    limit?: number
  }

  /**
   * Ativo updateManyAndReturn
   */
  export type AtivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * The data used to update Ativos.
     */
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyInput>
    /**
     * Filter which Ativos to update
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ativo upsert
   */
  export type AtivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ativo to update in case it exists.
     */
    where: AtivoWhereUniqueInput
    /**
     * In case the Ativo found by the `where` argument doesn't exist, create a new Ativo with this data.
     */
    create: XOR<AtivoCreateInput, AtivoUncheckedCreateInput>
    /**
     * In case the Ativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtivoUpdateInput, AtivoUncheckedUpdateInput>
  }

  /**
   * Ativo delete
   */
  export type AtivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    /**
     * Filter which Ativo to delete.
     */
    where: AtivoWhereUniqueInput
  }

  /**
   * Ativo deleteMany
   */
  export type AtivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ativos to delete
     */
    where?: AtivoWhereInput
    /**
     * Limit how many Ativos to delete.
     */
    limit?: number
  }

  /**
   * Ativo.anexos
   */
  export type Ativo$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    cursor?: AnexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Ativo.chamados
   */
  export type Ativo$chamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Ativo without action
   */
  export type AtivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
  }


  /**
   * Model Chamado
   */

  export type AggregateChamado = {
    _count: ChamadoCountAggregateOutputType | null
    _avg: ChamadoAvgAggregateOutputType | null
    _sum: ChamadoSumAggregateOutputType | null
    _min: ChamadoMinAggregateOutputType | null
    _max: ChamadoMaxAggregateOutputType | null
  }

  export type ChamadoAvgAggregateOutputType = {
    id: number | null
    imovelId: number | null
    ativoId: number | null
    solicitanteId: number | null
    assignedProviderId: number | null
  }

  export type ChamadoSumAggregateOutputType = {
    id: number | null
    imovelId: number | null
    ativoId: number | null
    solicitanteId: number | null
    assignedProviderId: number | null
  }

  export type ChamadoMinAggregateOutputType = {
    id: number | null
    numeroChamado: string | null
    descricaoOcorrido: string | null
    informacoesAdicionais: string | null
    prioridade: $Enums.Prioridade | null
    escopo: $Enums.Escopo | null
    status: $Enums.ChamadoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    imovelId: number | null
    ativoId: number | null
    solicitanteId: number | null
    assignedProviderId: number | null
  }

  export type ChamadoMaxAggregateOutputType = {
    id: number | null
    numeroChamado: string | null
    descricaoOcorrido: string | null
    informacoesAdicionais: string | null
    prioridade: $Enums.Prioridade | null
    escopo: $Enums.Escopo | null
    status: $Enums.ChamadoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    imovelId: number | null
    ativoId: number | null
    solicitanteId: number | null
    assignedProviderId: number | null
  }

  export type ChamadoCountAggregateOutputType = {
    id: number
    numeroChamado: number
    descricaoOcorrido: number
    informacoesAdicionais: number
    prioridade: number
    escopo: number
    status: number
    createdAt: number
    updatedAt: number
    imovelId: number
    ativoId: number
    solicitanteId: number
    assignedProviderId: number
    _all: number
  }


  export type ChamadoAvgAggregateInputType = {
    id?: true
    imovelId?: true
    ativoId?: true
    solicitanteId?: true
    assignedProviderId?: true
  }

  export type ChamadoSumAggregateInputType = {
    id?: true
    imovelId?: true
    ativoId?: true
    solicitanteId?: true
    assignedProviderId?: true
  }

  export type ChamadoMinAggregateInputType = {
    id?: true
    numeroChamado?: true
    descricaoOcorrido?: true
    informacoesAdicionais?: true
    prioridade?: true
    escopo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
    ativoId?: true
    solicitanteId?: true
    assignedProviderId?: true
  }

  export type ChamadoMaxAggregateInputType = {
    id?: true
    numeroChamado?: true
    descricaoOcorrido?: true
    informacoesAdicionais?: true
    prioridade?: true
    escopo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
    ativoId?: true
    solicitanteId?: true
    assignedProviderId?: true
  }

  export type ChamadoCountAggregateInputType = {
    id?: true
    numeroChamado?: true
    descricaoOcorrido?: true
    informacoesAdicionais?: true
    prioridade?: true
    escopo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    imovelId?: true
    ativoId?: true
    solicitanteId?: true
    assignedProviderId?: true
    _all?: true
  }

  export type ChamadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamado to aggregate.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chamados
    **/
    _count?: true | ChamadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChamadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChamadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChamadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChamadoMaxAggregateInputType
  }

  export type GetChamadoAggregateType<T extends ChamadoAggregateArgs> = {
        [P in keyof T & keyof AggregateChamado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChamado[P]>
      : GetScalarType<T[P], AggregateChamado[P]>
  }




  export type ChamadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithAggregationInput | ChamadoOrderByWithAggregationInput[]
    by: ChamadoScalarFieldEnum[] | ChamadoScalarFieldEnum
    having?: ChamadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChamadoCountAggregateInputType | true
    _avg?: ChamadoAvgAggregateInputType
    _sum?: ChamadoSumAggregateInputType
    _min?: ChamadoMinAggregateInputType
    _max?: ChamadoMaxAggregateInputType
  }

  export type ChamadoGroupByOutputType = {
    id: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status: $Enums.ChamadoStatus
    createdAt: Date
    updatedAt: Date
    imovelId: number
    ativoId: number | null
    solicitanteId: number
    assignedProviderId: number | null
    _count: ChamadoCountAggregateOutputType | null
    _avg: ChamadoAvgAggregateOutputType | null
    _sum: ChamadoSumAggregateOutputType | null
    _min: ChamadoMinAggregateOutputType | null
    _max: ChamadoMaxAggregateOutputType | null
  }

  type GetChamadoGroupByPayload<T extends ChamadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChamadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChamadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChamadoGroupByOutputType[P]>
            : GetScalarType<T[P], ChamadoGroupByOutputType[P]>
        }
      >
    >


  export type ChamadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroChamado?: boolean
    descricaoOcorrido?: boolean
    informacoesAdicionais?: boolean
    prioridade?: boolean
    escopo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    ativoId?: boolean
    solicitanteId?: boolean
    assignedProviderId?: boolean
    anexos?: boolean | Chamado$anexosArgs<ExtArgs>
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    ativo?: boolean | Chamado$ativoArgs<ExtArgs>
    solicitante?: boolean | UserDefaultArgs<ExtArgs>
    assignedProvider?: boolean | Chamado$assignedProviderArgs<ExtArgs>
    _count?: boolean | ChamadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamado"]>

  export type ChamadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroChamado?: boolean
    descricaoOcorrido?: boolean
    informacoesAdicionais?: boolean
    prioridade?: boolean
    escopo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    ativoId?: boolean
    solicitanteId?: boolean
    assignedProviderId?: boolean
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    ativo?: boolean | Chamado$ativoArgs<ExtArgs>
    solicitante?: boolean | UserDefaultArgs<ExtArgs>
    assignedProvider?: boolean | Chamado$assignedProviderArgs<ExtArgs>
  }, ExtArgs["result"]["chamado"]>

  export type ChamadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroChamado?: boolean
    descricaoOcorrido?: boolean
    informacoesAdicionais?: boolean
    prioridade?: boolean
    escopo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    ativoId?: boolean
    solicitanteId?: boolean
    assignedProviderId?: boolean
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    ativo?: boolean | Chamado$ativoArgs<ExtArgs>
    solicitante?: boolean | UserDefaultArgs<ExtArgs>
    assignedProvider?: boolean | Chamado$assignedProviderArgs<ExtArgs>
  }, ExtArgs["result"]["chamado"]>

  export type ChamadoSelectScalar = {
    id?: boolean
    numeroChamado?: boolean
    descricaoOcorrido?: boolean
    informacoesAdicionais?: boolean
    prioridade?: boolean
    escopo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imovelId?: boolean
    ativoId?: boolean
    solicitanteId?: boolean
    assignedProviderId?: boolean
  }

  export type ChamadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroChamado" | "descricaoOcorrido" | "informacoesAdicionais" | "prioridade" | "escopo" | "status" | "createdAt" | "updatedAt" | "imovelId" | "ativoId" | "solicitanteId" | "assignedProviderId", ExtArgs["result"]["chamado"]>
  export type ChamadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | Chamado$anexosArgs<ExtArgs>
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    ativo?: boolean | Chamado$ativoArgs<ExtArgs>
    solicitante?: boolean | UserDefaultArgs<ExtArgs>
    assignedProvider?: boolean | Chamado$assignedProviderArgs<ExtArgs>
    _count?: boolean | ChamadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChamadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    ativo?: boolean | Chamado$ativoArgs<ExtArgs>
    solicitante?: boolean | UserDefaultArgs<ExtArgs>
    assignedProvider?: boolean | Chamado$assignedProviderArgs<ExtArgs>
  }
  export type ChamadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imovel?: boolean | ImovelDefaultArgs<ExtArgs>
    ativo?: boolean | Chamado$ativoArgs<ExtArgs>
    solicitante?: boolean | UserDefaultArgs<ExtArgs>
    assignedProvider?: boolean | Chamado$assignedProviderArgs<ExtArgs>
  }

  export type $ChamadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chamado"
    objects: {
      anexos: Prisma.$AnexoPayload<ExtArgs>[]
      imovel: Prisma.$ImovelPayload<ExtArgs>
      ativo: Prisma.$AtivoPayload<ExtArgs> | null
      solicitante: Prisma.$UserPayload<ExtArgs>
      assignedProvider: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroChamado: string
      descricaoOcorrido: string
      informacoesAdicionais: string | null
      prioridade: $Enums.Prioridade
      escopo: $Enums.Escopo
      status: $Enums.ChamadoStatus
      createdAt: Date
      updatedAt: Date
      imovelId: number
      ativoId: number | null
      solicitanteId: number
      assignedProviderId: number | null
    }, ExtArgs["result"]["chamado"]>
    composites: {}
  }

  type ChamadoGetPayload<S extends boolean | null | undefined | ChamadoDefaultArgs> = $Result.GetResult<Prisma.$ChamadoPayload, S>

  type ChamadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChamadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChamadoCountAggregateInputType | true
    }

  export interface ChamadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chamado'], meta: { name: 'Chamado' } }
    /**
     * Find zero or one Chamado that matches the filter.
     * @param {ChamadoFindUniqueArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChamadoFindUniqueArgs>(args: SelectSubset<T, ChamadoFindUniqueArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chamado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChamadoFindUniqueOrThrowArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChamadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ChamadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chamado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoFindFirstArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChamadoFindFirstArgs>(args?: SelectSubset<T, ChamadoFindFirstArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chamado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoFindFirstOrThrowArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChamadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ChamadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chamados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chamados
     * const chamados = await prisma.chamado.findMany()
     * 
     * // Get first 10 Chamados
     * const chamados = await prisma.chamado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chamadoWithIdOnly = await prisma.chamado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChamadoFindManyArgs>(args?: SelectSubset<T, ChamadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chamado.
     * @param {ChamadoCreateArgs} args - Arguments to create a Chamado.
     * @example
     * // Create one Chamado
     * const Chamado = await prisma.chamado.create({
     *   data: {
     *     // ... data to create a Chamado
     *   }
     * })
     * 
     */
    create<T extends ChamadoCreateArgs>(args: SelectSubset<T, ChamadoCreateArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chamados.
     * @param {ChamadoCreateManyArgs} args - Arguments to create many Chamados.
     * @example
     * // Create many Chamados
     * const chamado = await prisma.chamado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChamadoCreateManyArgs>(args?: SelectSubset<T, ChamadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chamados and returns the data saved in the database.
     * @param {ChamadoCreateManyAndReturnArgs} args - Arguments to create many Chamados.
     * @example
     * // Create many Chamados
     * const chamado = await prisma.chamado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chamados and only return the `id`
     * const chamadoWithIdOnly = await prisma.chamado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChamadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ChamadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chamado.
     * @param {ChamadoDeleteArgs} args - Arguments to delete one Chamado.
     * @example
     * // Delete one Chamado
     * const Chamado = await prisma.chamado.delete({
     *   where: {
     *     // ... filter to delete one Chamado
     *   }
     * })
     * 
     */
    delete<T extends ChamadoDeleteArgs>(args: SelectSubset<T, ChamadoDeleteArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chamado.
     * @param {ChamadoUpdateArgs} args - Arguments to update one Chamado.
     * @example
     * // Update one Chamado
     * const chamado = await prisma.chamado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChamadoUpdateArgs>(args: SelectSubset<T, ChamadoUpdateArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chamados.
     * @param {ChamadoDeleteManyArgs} args - Arguments to filter Chamados to delete.
     * @example
     * // Delete a few Chamados
     * const { count } = await prisma.chamado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChamadoDeleteManyArgs>(args?: SelectSubset<T, ChamadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chamados
     * const chamado = await prisma.chamado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChamadoUpdateManyArgs>(args: SelectSubset<T, ChamadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chamados and returns the data updated in the database.
     * @param {ChamadoUpdateManyAndReturnArgs} args - Arguments to update many Chamados.
     * @example
     * // Update many Chamados
     * const chamado = await prisma.chamado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chamados and only return the `id`
     * const chamadoWithIdOnly = await prisma.chamado.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChamadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ChamadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chamado.
     * @param {ChamadoUpsertArgs} args - Arguments to update or create a Chamado.
     * @example
     * // Update or create a Chamado
     * const chamado = await prisma.chamado.upsert({
     *   create: {
     *     // ... data to create a Chamado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chamado we want to update
     *   }
     * })
     */
    upsert<T extends ChamadoUpsertArgs>(args: SelectSubset<T, ChamadoUpsertArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoCountArgs} args - Arguments to filter Chamados to count.
     * @example
     * // Count the number of Chamados
     * const count = await prisma.chamado.count({
     *   where: {
     *     // ... the filter for the Chamados we want to count
     *   }
     * })
    **/
    count<T extends ChamadoCountArgs>(
      args?: Subset<T, ChamadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChamadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chamado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChamadoAggregateArgs>(args: Subset<T, ChamadoAggregateArgs>): Prisma.PrismaPromise<GetChamadoAggregateType<T>>

    /**
     * Group by Chamado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoGroupByArgs} args - Group by arguments.
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
      T extends ChamadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChamadoGroupByArgs['orderBy'] }
        : { orderBy?: ChamadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChamadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChamadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chamado model
   */
  readonly fields: ChamadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chamado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChamadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anexos<T extends Chamado$anexosArgs<ExtArgs> = {}>(args?: Subset<T, Chamado$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imovel<T extends ImovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImovelDefaultArgs<ExtArgs>>): Prisma__ImovelClient<$Result.GetResult<Prisma.$ImovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ativo<T extends Chamado$ativoArgs<ExtArgs> = {}>(args?: Subset<T, Chamado$ativoArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    solicitante<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedProvider<T extends Chamado$assignedProviderArgs<ExtArgs> = {}>(args?: Subset<T, Chamado$assignedProviderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chamado model
   */
  interface ChamadoFieldRefs {
    readonly id: FieldRef<"Chamado", 'Int'>
    readonly numeroChamado: FieldRef<"Chamado", 'String'>
    readonly descricaoOcorrido: FieldRef<"Chamado", 'String'>
    readonly informacoesAdicionais: FieldRef<"Chamado", 'String'>
    readonly prioridade: FieldRef<"Chamado", 'Prioridade'>
    readonly escopo: FieldRef<"Chamado", 'Escopo'>
    readonly status: FieldRef<"Chamado", 'ChamadoStatus'>
    readonly createdAt: FieldRef<"Chamado", 'DateTime'>
    readonly updatedAt: FieldRef<"Chamado", 'DateTime'>
    readonly imovelId: FieldRef<"Chamado", 'Int'>
    readonly ativoId: FieldRef<"Chamado", 'Int'>
    readonly solicitanteId: FieldRef<"Chamado", 'Int'>
    readonly assignedProviderId: FieldRef<"Chamado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chamado findUnique
   */
  export type ChamadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado findUniqueOrThrow
   */
  export type ChamadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado findFirst
   */
  export type ChamadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamados.
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamados.
     */
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Chamado findFirstOrThrow
   */
  export type ChamadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamados.
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamados.
     */
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Chamado findMany
   */
  export type ChamadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chamados.
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Chamado create
   */
  export type ChamadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Chamado.
     */
    data: XOR<ChamadoCreateInput, ChamadoUncheckedCreateInput>
  }

  /**
   * Chamado createMany
   */
  export type ChamadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chamados.
     */
    data: ChamadoCreateManyInput | ChamadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chamado createManyAndReturn
   */
  export type ChamadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * The data used to create many Chamados.
     */
    data: ChamadoCreateManyInput | ChamadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chamado update
   */
  export type ChamadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Chamado.
     */
    data: XOR<ChamadoUpdateInput, ChamadoUncheckedUpdateInput>
    /**
     * Choose, which Chamado to update.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado updateMany
   */
  export type ChamadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chamados.
     */
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyInput>
    /**
     * Filter which Chamados to update
     */
    where?: ChamadoWhereInput
    /**
     * Limit how many Chamados to update.
     */
    limit?: number
  }

  /**
   * Chamado updateManyAndReturn
   */
  export type ChamadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * The data used to update Chamados.
     */
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyInput>
    /**
     * Filter which Chamados to update
     */
    where?: ChamadoWhereInput
    /**
     * Limit how many Chamados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chamado upsert
   */
  export type ChamadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Chamado to update in case it exists.
     */
    where: ChamadoWhereUniqueInput
    /**
     * In case the Chamado found by the `where` argument doesn't exist, create a new Chamado with this data.
     */
    create: XOR<ChamadoCreateInput, ChamadoUncheckedCreateInput>
    /**
     * In case the Chamado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChamadoUpdateInput, ChamadoUncheckedUpdateInput>
  }

  /**
   * Chamado delete
   */
  export type ChamadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter which Chamado to delete.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado deleteMany
   */
  export type ChamadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamados to delete
     */
    where?: ChamadoWhereInput
    /**
     * Limit how many Chamados to delete.
     */
    limit?: number
  }

  /**
   * Chamado.anexos
   */
  export type Chamado$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    cursor?: AnexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Chamado.ativo
   */
  export type Chamado$ativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
  }

  /**
   * Chamado.assignedProvider
   */
  export type Chamado$assignedProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Chamado without action
   */
  export type ChamadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
  }


  /**
   * Model Anexo
   */

  export type AggregateAnexo = {
    _count: AnexoCountAggregateOutputType | null
    _avg: AnexoAvgAggregateOutputType | null
    _sum: AnexoSumAggregateOutputType | null
    _min: AnexoMinAggregateOutputType | null
    _max: AnexoMaxAggregateOutputType | null
  }

  export type AnexoAvgAggregateOutputType = {
    id: number | null
    chamadoId: number | null
    ativoId: number | null
    areasComunsId: number | null
  }

  export type AnexoSumAggregateOutputType = {
    id: number | null
    chamadoId: number | null
    ativoId: number | null
    areasComunsId: number | null
  }

  export type AnexoMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chamadoId: number | null
    ativoId: number | null
    areasComunsId: number | null
  }

  export type AnexoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chamadoId: number | null
    ativoId: number | null
    areasComunsId: number | null
  }

  export type AnexoCountAggregateOutputType = {
    id: number
    url: number
    title: number
    createdAt: number
    updatedAt: number
    chamadoId: number
    ativoId: number
    areasComunsId: number
    _all: number
  }


  export type AnexoAvgAggregateInputType = {
    id?: true
    chamadoId?: true
    ativoId?: true
    areasComunsId?: true
  }

  export type AnexoSumAggregateInputType = {
    id?: true
    chamadoId?: true
    ativoId?: true
    areasComunsId?: true
  }

  export type AnexoMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    chamadoId?: true
    ativoId?: true
    areasComunsId?: true
  }

  export type AnexoMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    chamadoId?: true
    ativoId?: true
    areasComunsId?: true
  }

  export type AnexoCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    chamadoId?: true
    ativoId?: true
    areasComunsId?: true
    _all?: true
  }

  export type AnexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anexo to aggregate.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anexos
    **/
    _count?: true | AnexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnexoMaxAggregateInputType
  }

  export type GetAnexoAggregateType<T extends AnexoAggregateArgs> = {
        [P in keyof T & keyof AggregateAnexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnexo[P]>
      : GetScalarType<T[P], AggregateAnexo[P]>
  }




  export type AnexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithAggregationInput | AnexoOrderByWithAggregationInput[]
    by: AnexoScalarFieldEnum[] | AnexoScalarFieldEnum
    having?: AnexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnexoCountAggregateInputType | true
    _avg?: AnexoAvgAggregateInputType
    _sum?: AnexoSumAggregateInputType
    _min?: AnexoMinAggregateInputType
    _max?: AnexoMaxAggregateInputType
  }

  export type AnexoGroupByOutputType = {
    id: number
    url: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    chamadoId: number
    ativoId: number | null
    areasComunsId: number | null
    _count: AnexoCountAggregateOutputType | null
    _avg: AnexoAvgAggregateOutputType | null
    _sum: AnexoSumAggregateOutputType | null
    _min: AnexoMinAggregateOutputType | null
    _max: AnexoMaxAggregateOutputType | null
  }

  type GetAnexoGroupByPayload<T extends AnexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnexoGroupByOutputType[P]>
            : GetScalarType<T[P], AnexoGroupByOutputType[P]>
        }
      >
    >


  export type AnexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chamadoId?: boolean
    ativoId?: boolean
    areasComunsId?: boolean
    Chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
    Ativo?: boolean | Anexo$AtivoArgs<ExtArgs>
    AreasComuns?: boolean | Anexo$AreasComunsArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chamadoId?: boolean
    ativoId?: boolean
    areasComunsId?: boolean
    Chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
    Ativo?: boolean | Anexo$AtivoArgs<ExtArgs>
    AreasComuns?: boolean | Anexo$AreasComunsArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chamadoId?: boolean
    ativoId?: boolean
    areasComunsId?: boolean
    Chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
    Ativo?: boolean | Anexo$AtivoArgs<ExtArgs>
    AreasComuns?: boolean | Anexo$AreasComunsArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chamadoId?: boolean
    ativoId?: boolean
    areasComunsId?: boolean
  }

  export type AnexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "createdAt" | "updatedAt" | "chamadoId" | "ativoId" | "areasComunsId", ExtArgs["result"]["anexo"]>
  export type AnexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
    Ativo?: boolean | Anexo$AtivoArgs<ExtArgs>
    AreasComuns?: boolean | Anexo$AreasComunsArgs<ExtArgs>
  }
  export type AnexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
    Ativo?: boolean | Anexo$AtivoArgs<ExtArgs>
    AreasComuns?: boolean | Anexo$AreasComunsArgs<ExtArgs>
  }
  export type AnexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
    Ativo?: boolean | Anexo$AtivoArgs<ExtArgs>
    AreasComuns?: boolean | Anexo$AreasComunsArgs<ExtArgs>
  }

  export type $AnexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anexo"
    objects: {
      Chamado: Prisma.$ChamadoPayload<ExtArgs>
      Ativo: Prisma.$AtivoPayload<ExtArgs> | null
      AreasComuns: Prisma.$AreasComunsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string | null
      createdAt: Date
      updatedAt: Date
      chamadoId: number
      ativoId: number | null
      areasComunsId: number | null
    }, ExtArgs["result"]["anexo"]>
    composites: {}
  }

  type AnexoGetPayload<S extends boolean | null | undefined | AnexoDefaultArgs> = $Result.GetResult<Prisma.$AnexoPayload, S>

  type AnexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnexoCountAggregateInputType | true
    }

  export interface AnexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anexo'], meta: { name: 'Anexo' } }
    /**
     * Find zero or one Anexo that matches the filter.
     * @param {AnexoFindUniqueArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnexoFindUniqueArgs>(args: SelectSubset<T, AnexoFindUniqueArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnexoFindUniqueOrThrowArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnexoFindUniqueOrThrowArgs>(args: SelectSubset<T, AnexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindFirstArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnexoFindFirstArgs>(args?: SelectSubset<T, AnexoFindFirstArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindFirstOrThrowArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnexoFindFirstOrThrowArgs>(args?: SelectSubset<T, AnexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anexos
     * const anexos = await prisma.anexo.findMany()
     * 
     * // Get first 10 Anexos
     * const anexos = await prisma.anexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anexoWithIdOnly = await prisma.anexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnexoFindManyArgs>(args?: SelectSubset<T, AnexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anexo.
     * @param {AnexoCreateArgs} args - Arguments to create a Anexo.
     * @example
     * // Create one Anexo
     * const Anexo = await prisma.anexo.create({
     *   data: {
     *     // ... data to create a Anexo
     *   }
     * })
     * 
     */
    create<T extends AnexoCreateArgs>(args: SelectSubset<T, AnexoCreateArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anexos.
     * @param {AnexoCreateManyArgs} args - Arguments to create many Anexos.
     * @example
     * // Create many Anexos
     * const anexo = await prisma.anexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnexoCreateManyArgs>(args?: SelectSubset<T, AnexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anexos and returns the data saved in the database.
     * @param {AnexoCreateManyAndReturnArgs} args - Arguments to create many Anexos.
     * @example
     * // Create many Anexos
     * const anexo = await prisma.anexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anexos and only return the `id`
     * const anexoWithIdOnly = await prisma.anexo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnexoCreateManyAndReturnArgs>(args?: SelectSubset<T, AnexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anexo.
     * @param {AnexoDeleteArgs} args - Arguments to delete one Anexo.
     * @example
     * // Delete one Anexo
     * const Anexo = await prisma.anexo.delete({
     *   where: {
     *     // ... filter to delete one Anexo
     *   }
     * })
     * 
     */
    delete<T extends AnexoDeleteArgs>(args: SelectSubset<T, AnexoDeleteArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anexo.
     * @param {AnexoUpdateArgs} args - Arguments to update one Anexo.
     * @example
     * // Update one Anexo
     * const anexo = await prisma.anexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnexoUpdateArgs>(args: SelectSubset<T, AnexoUpdateArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anexos.
     * @param {AnexoDeleteManyArgs} args - Arguments to filter Anexos to delete.
     * @example
     * // Delete a few Anexos
     * const { count } = await prisma.anexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnexoDeleteManyArgs>(args?: SelectSubset<T, AnexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anexos
     * const anexo = await prisma.anexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnexoUpdateManyArgs>(args: SelectSubset<T, AnexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anexos and returns the data updated in the database.
     * @param {AnexoUpdateManyAndReturnArgs} args - Arguments to update many Anexos.
     * @example
     * // Update many Anexos
     * const anexo = await prisma.anexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anexos and only return the `id`
     * const anexoWithIdOnly = await prisma.anexo.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnexoUpdateManyAndReturnArgs>(args: SelectSubset<T, AnexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anexo.
     * @param {AnexoUpsertArgs} args - Arguments to update or create a Anexo.
     * @example
     * // Update or create a Anexo
     * const anexo = await prisma.anexo.upsert({
     *   create: {
     *     // ... data to create a Anexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anexo we want to update
     *   }
     * })
     */
    upsert<T extends AnexoUpsertArgs>(args: SelectSubset<T, AnexoUpsertArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoCountArgs} args - Arguments to filter Anexos to count.
     * @example
     * // Count the number of Anexos
     * const count = await prisma.anexo.count({
     *   where: {
     *     // ... the filter for the Anexos we want to count
     *   }
     * })
    **/
    count<T extends AnexoCountArgs>(
      args?: Subset<T, AnexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnexoAggregateArgs>(args: Subset<T, AnexoAggregateArgs>): Prisma.PrismaPromise<GetAnexoAggregateType<T>>

    /**
     * Group by Anexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoGroupByArgs} args - Group by arguments.
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
      T extends AnexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnexoGroupByArgs['orderBy'] }
        : { orderBy?: AnexoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anexo model
   */
  readonly fields: AnexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chamado<T extends ChamadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChamadoDefaultArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ativo<T extends Anexo$AtivoArgs<ExtArgs> = {}>(args?: Subset<T, Anexo$AtivoArgs<ExtArgs>>): Prisma__AtivoClient<$Result.GetResult<Prisma.$AtivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    AreasComuns<T extends Anexo$AreasComunsArgs<ExtArgs> = {}>(args?: Subset<T, Anexo$AreasComunsArgs<ExtArgs>>): Prisma__AreasComunsClient<$Result.GetResult<Prisma.$AreasComunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Anexo model
   */
  interface AnexoFieldRefs {
    readonly id: FieldRef<"Anexo", 'Int'>
    readonly url: FieldRef<"Anexo", 'String'>
    readonly title: FieldRef<"Anexo", 'String'>
    readonly createdAt: FieldRef<"Anexo", 'DateTime'>
    readonly updatedAt: FieldRef<"Anexo", 'DateTime'>
    readonly chamadoId: FieldRef<"Anexo", 'Int'>
    readonly ativoId: FieldRef<"Anexo", 'Int'>
    readonly areasComunsId: FieldRef<"Anexo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Anexo findUnique
   */
  export type AnexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo findUniqueOrThrow
   */
  export type AnexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo findFirst
   */
  export type AnexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anexos.
     */
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo findFirstOrThrow
   */
  export type AnexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anexos.
     */
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo findMany
   */
  export type AnexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexos to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo create
   */
  export type AnexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The data needed to create a Anexo.
     */
    data: XOR<AnexoCreateInput, AnexoUncheckedCreateInput>
  }

  /**
   * Anexo createMany
   */
  export type AnexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anexos.
     */
    data: AnexoCreateManyInput | AnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anexo createManyAndReturn
   */
  export type AnexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * The data used to create many Anexos.
     */
    data: AnexoCreateManyInput | AnexoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anexo update
   */
  export type AnexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The data needed to update a Anexo.
     */
    data: XOR<AnexoUpdateInput, AnexoUncheckedUpdateInput>
    /**
     * Choose, which Anexo to update.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo updateMany
   */
  export type AnexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anexos.
     */
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyInput>
    /**
     * Filter which Anexos to update
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to update.
     */
    limit?: number
  }

  /**
   * Anexo updateManyAndReturn
   */
  export type AnexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * The data used to update Anexos.
     */
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyInput>
    /**
     * Filter which Anexos to update
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anexo upsert
   */
  export type AnexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The filter to search for the Anexo to update in case it exists.
     */
    where: AnexoWhereUniqueInput
    /**
     * In case the Anexo found by the `where` argument doesn't exist, create a new Anexo with this data.
     */
    create: XOR<AnexoCreateInput, AnexoUncheckedCreateInput>
    /**
     * In case the Anexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnexoUpdateInput, AnexoUncheckedUpdateInput>
  }

  /**
   * Anexo delete
   */
  export type AnexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter which Anexo to delete.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo deleteMany
   */
  export type AnexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anexos to delete
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to delete.
     */
    limit?: number
  }

  /**
   * Anexo.Ativo
   */
  export type Anexo$AtivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ativo
     */
    select?: AtivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ativo
     */
    omit?: AtivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtivoInclude<ExtArgs> | null
    where?: AtivoWhereInput
  }

  /**
   * Anexo.AreasComuns
   */
  export type Anexo$AreasComunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreasComuns
     */
    select?: AreasComunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreasComuns
     */
    omit?: AreasComunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreasComunsInclude<ExtArgs> | null
    where?: AreasComunsWhereInput
  }

  /**
   * Anexo without action
   */
  export type AnexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
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


  export const AceiteTermosScalarFieldEnum: {
    id: 'id',
    termoUrl: 'termoUrl',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AceiteTermosScalarFieldEnum = (typeof AceiteTermosScalarFieldEnum)[keyof typeof AceiteTermosScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpfCnpj: 'cpfCnpj',
    whatsapp: 'whatsapp',
    email: 'email',
    password: 'password',
    userType: 'userType',
    dataNascimento: 'dataNascimento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    periodoMandatoInicio: 'periodoMandatoInicio',
    periodoMandatoFim: 'periodoMandatoFim',
    subsindicoInfo: 'subsindicoInfo',
    nomeFantasia: 'nomeFantasia',
    razaoSocial: 'razaoSocial',
    cep: 'cep',
    endereco: 'endereco',
    cidade: 'cidade',
    uf: 'uf'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImovelScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    endereco: 'endereco',
    cidade: 'cidade',
    uf: 'uf',
    quantidade_moradias: 'quantidade_moradias',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gestorId: 'gestorId'
  };

  export type ImovelScalarFieldEnum = (typeof ImovelScalarFieldEnum)[keyof typeof ImovelScalarFieldEnum]


  export const AreasComunsScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imovelId: 'imovelId'
  };

  export type AreasComunsScalarFieldEnum = (typeof AreasComunsScalarFieldEnum)[keyof typeof AreasComunsScalarFieldEnum]


  export const AtivoScalarFieldEnum: {
    id: 'id',
    assetCode: 'assetCode',
    descricaoAtivo: 'descricaoAtivo',
    localInstalacao: 'localInstalacao',
    marca: 'marca',
    modelo: 'modelo',
    dataInstalacao: 'dataInstalacao',
    valorCompra: 'valorCompra',
    garantia: 'garantia',
    garantiaValidade: 'garantiaValidade',
    contratoManutencao: 'contratoManutencao',
    contratoValidade: 'contratoValidade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imovelId: 'imovelId'
  };

  export type AtivoScalarFieldEnum = (typeof AtivoScalarFieldEnum)[keyof typeof AtivoScalarFieldEnum]


  export const ChamadoScalarFieldEnum: {
    id: 'id',
    numeroChamado: 'numeroChamado',
    descricaoOcorrido: 'descricaoOcorrido',
    informacoesAdicionais: 'informacoesAdicionais',
    prioridade: 'prioridade',
    escopo: 'escopo',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imovelId: 'imovelId',
    ativoId: 'ativoId',
    solicitanteId: 'solicitanteId',
    assignedProviderId: 'assignedProviderId'
  };

  export type ChamadoScalarFieldEnum = (typeof ChamadoScalarFieldEnum)[keyof typeof ChamadoScalarFieldEnum]


  export const AnexoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chamadoId: 'chamadoId',
    ativoId: 'ativoId',
    areasComunsId: 'areasComunsId'
  };

  export type AnexoScalarFieldEnum = (typeof AnexoScalarFieldEnum)[keyof typeof AnexoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Prioridade'
   */
  export type EnumPrioridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridade'>
    


  /**
   * Reference to a field of type 'Prioridade[]'
   */
  export type ListEnumPrioridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridade[]'>
    


  /**
   * Reference to a field of type 'Escopo'
   */
  export type EnumEscopoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Escopo'>
    


  /**
   * Reference to a field of type 'Escopo[]'
   */
  export type ListEnumEscopoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Escopo[]'>
    


  /**
   * Reference to a field of type 'ChamadoStatus'
   */
  export type EnumChamadoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChamadoStatus'>
    


  /**
   * Reference to a field of type 'ChamadoStatus[]'
   */
  export type ListEnumChamadoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChamadoStatus[]'>
    


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


  export type AceiteTermosWhereInput = {
    AND?: AceiteTermosWhereInput | AceiteTermosWhereInput[]
    OR?: AceiteTermosWhereInput[]
    NOT?: AceiteTermosWhereInput | AceiteTermosWhereInput[]
    id?: IntFilter<"AceiteTermos"> | number
    termoUrl?: StringFilter<"AceiteTermos"> | string
    userId?: IntFilter<"AceiteTermos"> | number
    createdAt?: DateTimeFilter<"AceiteTermos"> | Date | string
    updatedAt?: DateTimeFilter<"AceiteTermos"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AceiteTermosOrderByWithRelationInput = {
    id?: SortOrder
    termoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AceiteTermosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AceiteTermosWhereInput | AceiteTermosWhereInput[]
    OR?: AceiteTermosWhereInput[]
    NOT?: AceiteTermosWhereInput | AceiteTermosWhereInput[]
    termoUrl?: StringFilter<"AceiteTermos"> | string
    userId?: IntFilter<"AceiteTermos"> | number
    createdAt?: DateTimeFilter<"AceiteTermos"> | Date | string
    updatedAt?: DateTimeFilter<"AceiteTermos"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AceiteTermosOrderByWithAggregationInput = {
    id?: SortOrder
    termoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AceiteTermosCountOrderByAggregateInput
    _avg?: AceiteTermosAvgOrderByAggregateInput
    _max?: AceiteTermosMaxOrderByAggregateInput
    _min?: AceiteTermosMinOrderByAggregateInput
    _sum?: AceiteTermosSumOrderByAggregateInput
  }

  export type AceiteTermosScalarWhereWithAggregatesInput = {
    AND?: AceiteTermosScalarWhereWithAggregatesInput | AceiteTermosScalarWhereWithAggregatesInput[]
    OR?: AceiteTermosScalarWhereWithAggregatesInput[]
    NOT?: AceiteTermosScalarWhereWithAggregatesInput | AceiteTermosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AceiteTermos"> | number
    termoUrl?: StringWithAggregatesFilter<"AceiteTermos"> | string
    userId?: IntWithAggregatesFilter<"AceiteTermos"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AceiteTermos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AceiteTermos"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    cpfCnpj?: StringFilter<"User"> | string
    whatsapp?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    dataNascimento?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    periodoMandatoInicio?: DateTimeNullableFilter<"User"> | Date | string | null
    periodoMandatoFim?: DateTimeNullableFilter<"User"> | Date | string | null
    subsindicoInfo?: JsonNullableFilter<"User">
    nomeFantasia?: StringNullableFilter<"User"> | string | null
    razaoSocial?: StringNullableFilter<"User"> | string | null
    cep?: StringNullableFilter<"User"> | string | null
    endereco?: StringNullableFilter<"User"> | string | null
    cidade?: StringNullableFilter<"User"> | string | null
    uf?: StringNullableFilter<"User"> | string | null
    imoveis?: ImovelListRelationFilter
    chamadosCriados?: ChamadoListRelationFilter
    chamadosDesignados?: ChamadoListRelationFilter
    AceiteTermos?: AceiteTermosListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    periodoMandatoInicio?: SortOrderInput | SortOrder
    periodoMandatoFim?: SortOrderInput | SortOrder
    subsindicoInfo?: SortOrderInput | SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    razaoSocial?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    imoveis?: ImovelOrderByRelationAggregateInput
    chamadosCriados?: ChamadoOrderByRelationAggregateInput
    chamadosDesignados?: ChamadoOrderByRelationAggregateInput
    AceiteTermos?: AceiteTermosOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpfCnpj?: string
    whatsapp?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    dataNascimento?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    periodoMandatoInicio?: DateTimeNullableFilter<"User"> | Date | string | null
    periodoMandatoFim?: DateTimeNullableFilter<"User"> | Date | string | null
    subsindicoInfo?: JsonNullableFilter<"User">
    nomeFantasia?: StringNullableFilter<"User"> | string | null
    razaoSocial?: StringNullableFilter<"User"> | string | null
    cep?: StringNullableFilter<"User"> | string | null
    endereco?: StringNullableFilter<"User"> | string | null
    cidade?: StringNullableFilter<"User"> | string | null
    uf?: StringNullableFilter<"User"> | string | null
    imoveis?: ImovelListRelationFilter
    chamadosCriados?: ChamadoListRelationFilter
    chamadosDesignados?: ChamadoListRelationFilter
    AceiteTermos?: AceiteTermosListRelationFilter
  }, "id" | "cpfCnpj" | "whatsapp" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    periodoMandatoInicio?: SortOrderInput | SortOrder
    periodoMandatoFim?: SortOrderInput | SortOrder
    subsindicoInfo?: SortOrderInput | SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    razaoSocial?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    cpfCnpj?: StringWithAggregatesFilter<"User"> | string
    whatsapp?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    periodoMandatoInicio?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    periodoMandatoFim?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    subsindicoInfo?: JsonNullableWithAggregatesFilter<"User">
    nomeFantasia?: StringNullableWithAggregatesFilter<"User"> | string | null
    razaoSocial?: StringNullableWithAggregatesFilter<"User"> | string | null
    cep?: StringNullableWithAggregatesFilter<"User"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"User"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"User"> | string | null
    uf?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ImovelWhereInput = {
    AND?: ImovelWhereInput | ImovelWhereInput[]
    OR?: ImovelWhereInput[]
    NOT?: ImovelWhereInput | ImovelWhereInput[]
    id?: IntFilter<"Imovel"> | number
    cep?: StringFilter<"Imovel"> | string
    endereco?: StringFilter<"Imovel"> | string
    cidade?: StringFilter<"Imovel"> | string
    uf?: StringFilter<"Imovel"> | string
    quantidade_moradias?: IntFilter<"Imovel"> | number
    createdAt?: DateTimeFilter<"Imovel"> | Date | string
    updatedAt?: DateTimeFilter<"Imovel"> | Date | string
    gestorId?: IntFilter<"Imovel"> | number
    gestor?: XOR<UserScalarRelationFilter, UserWhereInput>
    ativos?: AtivoListRelationFilter
    chamados?: ChamadoListRelationFilter
    areasComuns?: AreasComunsListRelationFilter
  }

  export type ImovelOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    quantidade_moradias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gestorId?: SortOrder
    gestor?: UserOrderByWithRelationInput
    ativos?: AtivoOrderByRelationAggregateInput
    chamados?: ChamadoOrderByRelationAggregateInput
    areasComuns?: AreasComunsOrderByRelationAggregateInput
  }

  export type ImovelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImovelWhereInput | ImovelWhereInput[]
    OR?: ImovelWhereInput[]
    NOT?: ImovelWhereInput | ImovelWhereInput[]
    cep?: StringFilter<"Imovel"> | string
    endereco?: StringFilter<"Imovel"> | string
    cidade?: StringFilter<"Imovel"> | string
    uf?: StringFilter<"Imovel"> | string
    quantidade_moradias?: IntFilter<"Imovel"> | number
    createdAt?: DateTimeFilter<"Imovel"> | Date | string
    updatedAt?: DateTimeFilter<"Imovel"> | Date | string
    gestorId?: IntFilter<"Imovel"> | number
    gestor?: XOR<UserScalarRelationFilter, UserWhereInput>
    ativos?: AtivoListRelationFilter
    chamados?: ChamadoListRelationFilter
    areasComuns?: AreasComunsListRelationFilter
  }, "id">

  export type ImovelOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    quantidade_moradias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gestorId?: SortOrder
    _count?: ImovelCountOrderByAggregateInput
    _avg?: ImovelAvgOrderByAggregateInput
    _max?: ImovelMaxOrderByAggregateInput
    _min?: ImovelMinOrderByAggregateInput
    _sum?: ImovelSumOrderByAggregateInput
  }

  export type ImovelScalarWhereWithAggregatesInput = {
    AND?: ImovelScalarWhereWithAggregatesInput | ImovelScalarWhereWithAggregatesInput[]
    OR?: ImovelScalarWhereWithAggregatesInput[]
    NOT?: ImovelScalarWhereWithAggregatesInput | ImovelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imovel"> | number
    cep?: StringWithAggregatesFilter<"Imovel"> | string
    endereco?: StringWithAggregatesFilter<"Imovel"> | string
    cidade?: StringWithAggregatesFilter<"Imovel"> | string
    uf?: StringWithAggregatesFilter<"Imovel"> | string
    quantidade_moradias?: IntWithAggregatesFilter<"Imovel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Imovel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Imovel"> | Date | string
    gestorId?: IntWithAggregatesFilter<"Imovel"> | number
  }

  export type AreasComunsWhereInput = {
    AND?: AreasComunsWhereInput | AreasComunsWhereInput[]
    OR?: AreasComunsWhereInput[]
    NOT?: AreasComunsWhereInput | AreasComunsWhereInput[]
    id?: IntFilter<"AreasComuns"> | number
    nome?: StringFilter<"AreasComuns"> | string
    descricao?: StringNullableFilter<"AreasComuns"> | string | null
    createdAt?: DateTimeFilter<"AreasComuns"> | Date | string
    updatedAt?: DateTimeFilter<"AreasComuns"> | Date | string
    imovelId?: IntFilter<"AreasComuns"> | number
    anexos?: AnexoListRelationFilter
    imovel?: XOR<ImovelScalarRelationFilter, ImovelWhereInput>
  }

  export type AreasComunsOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    anexos?: AnexoOrderByRelationAggregateInput
    imovel?: ImovelOrderByWithRelationInput
  }

  export type AreasComunsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreasComunsWhereInput | AreasComunsWhereInput[]
    OR?: AreasComunsWhereInput[]
    NOT?: AreasComunsWhereInput | AreasComunsWhereInput[]
    nome?: StringFilter<"AreasComuns"> | string
    descricao?: StringNullableFilter<"AreasComuns"> | string | null
    createdAt?: DateTimeFilter<"AreasComuns"> | Date | string
    updatedAt?: DateTimeFilter<"AreasComuns"> | Date | string
    imovelId?: IntFilter<"AreasComuns"> | number
    anexos?: AnexoListRelationFilter
    imovel?: XOR<ImovelScalarRelationFilter, ImovelWhereInput>
  }, "id">

  export type AreasComunsOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    _count?: AreasComunsCountOrderByAggregateInput
    _avg?: AreasComunsAvgOrderByAggregateInput
    _max?: AreasComunsMaxOrderByAggregateInput
    _min?: AreasComunsMinOrderByAggregateInput
    _sum?: AreasComunsSumOrderByAggregateInput
  }

  export type AreasComunsScalarWhereWithAggregatesInput = {
    AND?: AreasComunsScalarWhereWithAggregatesInput | AreasComunsScalarWhereWithAggregatesInput[]
    OR?: AreasComunsScalarWhereWithAggregatesInput[]
    NOT?: AreasComunsScalarWhereWithAggregatesInput | AreasComunsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AreasComuns"> | number
    nome?: StringWithAggregatesFilter<"AreasComuns"> | string
    descricao?: StringNullableWithAggregatesFilter<"AreasComuns"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AreasComuns"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AreasComuns"> | Date | string
    imovelId?: IntWithAggregatesFilter<"AreasComuns"> | number
  }

  export type AtivoWhereInput = {
    AND?: AtivoWhereInput | AtivoWhereInput[]
    OR?: AtivoWhereInput[]
    NOT?: AtivoWhereInput | AtivoWhereInput[]
    id?: IntFilter<"Ativo"> | number
    assetCode?: StringFilter<"Ativo"> | string
    descricaoAtivo?: StringFilter<"Ativo"> | string
    localInstalacao?: StringFilter<"Ativo"> | string
    marca?: StringNullableFilter<"Ativo"> | string | null
    modelo?: StringNullableFilter<"Ativo"> | string | null
    dataInstalacao?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    valorCompra?: DecimalNullableFilter<"Ativo"> | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFilter<"Ativo"> | boolean
    garantiaValidade?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    contratoManutencao?: BoolFilter<"Ativo"> | boolean
    contratoValidade?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    createdAt?: DateTimeFilter<"Ativo"> | Date | string
    updatedAt?: DateTimeFilter<"Ativo"> | Date | string
    imovelId?: IntFilter<"Ativo"> | number
    anexos?: AnexoListRelationFilter
    imovel?: XOR<ImovelScalarRelationFilter, ImovelWhereInput>
    chamados?: ChamadoListRelationFilter
  }

  export type AtivoOrderByWithRelationInput = {
    id?: SortOrder
    assetCode?: SortOrder
    descricaoAtivo?: SortOrder
    localInstalacao?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    dataInstalacao?: SortOrderInput | SortOrder
    valorCompra?: SortOrderInput | SortOrder
    garantia?: SortOrder
    garantiaValidade?: SortOrderInput | SortOrder
    contratoManutencao?: SortOrder
    contratoValidade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    anexos?: AnexoOrderByRelationAggregateInput
    imovel?: ImovelOrderByWithRelationInput
    chamados?: ChamadoOrderByRelationAggregateInput
  }

  export type AtivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    assetCode?: string
    AND?: AtivoWhereInput | AtivoWhereInput[]
    OR?: AtivoWhereInput[]
    NOT?: AtivoWhereInput | AtivoWhereInput[]
    descricaoAtivo?: StringFilter<"Ativo"> | string
    localInstalacao?: StringFilter<"Ativo"> | string
    marca?: StringNullableFilter<"Ativo"> | string | null
    modelo?: StringNullableFilter<"Ativo"> | string | null
    dataInstalacao?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    valorCompra?: DecimalNullableFilter<"Ativo"> | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFilter<"Ativo"> | boolean
    garantiaValidade?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    contratoManutencao?: BoolFilter<"Ativo"> | boolean
    contratoValidade?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    createdAt?: DateTimeFilter<"Ativo"> | Date | string
    updatedAt?: DateTimeFilter<"Ativo"> | Date | string
    imovelId?: IntFilter<"Ativo"> | number
    anexos?: AnexoListRelationFilter
    imovel?: XOR<ImovelScalarRelationFilter, ImovelWhereInput>
    chamados?: ChamadoListRelationFilter
  }, "id" | "assetCode">

  export type AtivoOrderByWithAggregationInput = {
    id?: SortOrder
    assetCode?: SortOrder
    descricaoAtivo?: SortOrder
    localInstalacao?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    dataInstalacao?: SortOrderInput | SortOrder
    valorCompra?: SortOrderInput | SortOrder
    garantia?: SortOrder
    garantiaValidade?: SortOrderInput | SortOrder
    contratoManutencao?: SortOrder
    contratoValidade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    _count?: AtivoCountOrderByAggregateInput
    _avg?: AtivoAvgOrderByAggregateInput
    _max?: AtivoMaxOrderByAggregateInput
    _min?: AtivoMinOrderByAggregateInput
    _sum?: AtivoSumOrderByAggregateInput
  }

  export type AtivoScalarWhereWithAggregatesInput = {
    AND?: AtivoScalarWhereWithAggregatesInput | AtivoScalarWhereWithAggregatesInput[]
    OR?: AtivoScalarWhereWithAggregatesInput[]
    NOT?: AtivoScalarWhereWithAggregatesInput | AtivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ativo"> | number
    assetCode?: StringWithAggregatesFilter<"Ativo"> | string
    descricaoAtivo?: StringWithAggregatesFilter<"Ativo"> | string
    localInstalacao?: StringWithAggregatesFilter<"Ativo"> | string
    marca?: StringNullableWithAggregatesFilter<"Ativo"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"Ativo"> | string | null
    dataInstalacao?: DateTimeNullableWithAggregatesFilter<"Ativo"> | Date | string | null
    valorCompra?: DecimalNullableWithAggregatesFilter<"Ativo"> | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolWithAggregatesFilter<"Ativo"> | boolean
    garantiaValidade?: DateTimeNullableWithAggregatesFilter<"Ativo"> | Date | string | null
    contratoManutencao?: BoolWithAggregatesFilter<"Ativo"> | boolean
    contratoValidade?: DateTimeNullableWithAggregatesFilter<"Ativo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ativo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ativo"> | Date | string
    imovelId?: IntWithAggregatesFilter<"Ativo"> | number
  }

  export type ChamadoWhereInput = {
    AND?: ChamadoWhereInput | ChamadoWhereInput[]
    OR?: ChamadoWhereInput[]
    NOT?: ChamadoWhereInput | ChamadoWhereInput[]
    id?: IntFilter<"Chamado"> | number
    numeroChamado?: StringFilter<"Chamado"> | string
    descricaoOcorrido?: StringFilter<"Chamado"> | string
    informacoesAdicionais?: StringNullableFilter<"Chamado"> | string | null
    prioridade?: EnumPrioridadeFilter<"Chamado"> | $Enums.Prioridade
    escopo?: EnumEscopoFilter<"Chamado"> | $Enums.Escopo
    status?: EnumChamadoStatusFilter<"Chamado"> | $Enums.ChamadoStatus
    createdAt?: DateTimeFilter<"Chamado"> | Date | string
    updatedAt?: DateTimeFilter<"Chamado"> | Date | string
    imovelId?: IntFilter<"Chamado"> | number
    ativoId?: IntNullableFilter<"Chamado"> | number | null
    solicitanteId?: IntFilter<"Chamado"> | number
    assignedProviderId?: IntNullableFilter<"Chamado"> | number | null
    anexos?: AnexoListRelationFilter
    imovel?: XOR<ImovelScalarRelationFilter, ImovelWhereInput>
    ativo?: XOR<AtivoNullableScalarRelationFilter, AtivoWhereInput> | null
    solicitante?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedProvider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ChamadoOrderByWithRelationInput = {
    id?: SortOrder
    numeroChamado?: SortOrder
    descricaoOcorrido?: SortOrder
    informacoesAdicionais?: SortOrderInput | SortOrder
    prioridade?: SortOrder
    escopo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrderInput | SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrderInput | SortOrder
    anexos?: AnexoOrderByRelationAggregateInput
    imovel?: ImovelOrderByWithRelationInput
    ativo?: AtivoOrderByWithRelationInput
    solicitante?: UserOrderByWithRelationInput
    assignedProvider?: UserOrderByWithRelationInput
  }

  export type ChamadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numeroChamado?: string
    AND?: ChamadoWhereInput | ChamadoWhereInput[]
    OR?: ChamadoWhereInput[]
    NOT?: ChamadoWhereInput | ChamadoWhereInput[]
    descricaoOcorrido?: StringFilter<"Chamado"> | string
    informacoesAdicionais?: StringNullableFilter<"Chamado"> | string | null
    prioridade?: EnumPrioridadeFilter<"Chamado"> | $Enums.Prioridade
    escopo?: EnumEscopoFilter<"Chamado"> | $Enums.Escopo
    status?: EnumChamadoStatusFilter<"Chamado"> | $Enums.ChamadoStatus
    createdAt?: DateTimeFilter<"Chamado"> | Date | string
    updatedAt?: DateTimeFilter<"Chamado"> | Date | string
    imovelId?: IntFilter<"Chamado"> | number
    ativoId?: IntNullableFilter<"Chamado"> | number | null
    solicitanteId?: IntFilter<"Chamado"> | number
    assignedProviderId?: IntNullableFilter<"Chamado"> | number | null
    anexos?: AnexoListRelationFilter
    imovel?: XOR<ImovelScalarRelationFilter, ImovelWhereInput>
    ativo?: XOR<AtivoNullableScalarRelationFilter, AtivoWhereInput> | null
    solicitante?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedProvider?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "numeroChamado">

  export type ChamadoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroChamado?: SortOrder
    descricaoOcorrido?: SortOrder
    informacoesAdicionais?: SortOrderInput | SortOrder
    prioridade?: SortOrder
    escopo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrderInput | SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrderInput | SortOrder
    _count?: ChamadoCountOrderByAggregateInput
    _avg?: ChamadoAvgOrderByAggregateInput
    _max?: ChamadoMaxOrderByAggregateInput
    _min?: ChamadoMinOrderByAggregateInput
    _sum?: ChamadoSumOrderByAggregateInput
  }

  export type ChamadoScalarWhereWithAggregatesInput = {
    AND?: ChamadoScalarWhereWithAggregatesInput | ChamadoScalarWhereWithAggregatesInput[]
    OR?: ChamadoScalarWhereWithAggregatesInput[]
    NOT?: ChamadoScalarWhereWithAggregatesInput | ChamadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chamado"> | number
    numeroChamado?: StringWithAggregatesFilter<"Chamado"> | string
    descricaoOcorrido?: StringWithAggregatesFilter<"Chamado"> | string
    informacoesAdicionais?: StringNullableWithAggregatesFilter<"Chamado"> | string | null
    prioridade?: EnumPrioridadeWithAggregatesFilter<"Chamado"> | $Enums.Prioridade
    escopo?: EnumEscopoWithAggregatesFilter<"Chamado"> | $Enums.Escopo
    status?: EnumChamadoStatusWithAggregatesFilter<"Chamado"> | $Enums.ChamadoStatus
    createdAt?: DateTimeWithAggregatesFilter<"Chamado"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chamado"> | Date | string
    imovelId?: IntWithAggregatesFilter<"Chamado"> | number
    ativoId?: IntNullableWithAggregatesFilter<"Chamado"> | number | null
    solicitanteId?: IntWithAggregatesFilter<"Chamado"> | number
    assignedProviderId?: IntNullableWithAggregatesFilter<"Chamado"> | number | null
  }

  export type AnexoWhereInput = {
    AND?: AnexoWhereInput | AnexoWhereInput[]
    OR?: AnexoWhereInput[]
    NOT?: AnexoWhereInput | AnexoWhereInput[]
    id?: IntFilter<"Anexo"> | number
    url?: StringFilter<"Anexo"> | string
    title?: StringNullableFilter<"Anexo"> | string | null
    createdAt?: DateTimeFilter<"Anexo"> | Date | string
    updatedAt?: DateTimeFilter<"Anexo"> | Date | string
    chamadoId?: IntFilter<"Anexo"> | number
    ativoId?: IntNullableFilter<"Anexo"> | number | null
    areasComunsId?: IntNullableFilter<"Anexo"> | number | null
    Chamado?: XOR<ChamadoScalarRelationFilter, ChamadoWhereInput>
    Ativo?: XOR<AtivoNullableScalarRelationFilter, AtivoWhereInput> | null
    AreasComuns?: XOR<AreasComunsNullableScalarRelationFilter, AreasComunsWhereInput> | null
  }

  export type AnexoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrderInput | SortOrder
    areasComunsId?: SortOrderInput | SortOrder
    Chamado?: ChamadoOrderByWithRelationInput
    Ativo?: AtivoOrderByWithRelationInput
    AreasComuns?: AreasComunsOrderByWithRelationInput
  }

  export type AnexoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: AnexoWhereInput | AnexoWhereInput[]
    OR?: AnexoWhereInput[]
    NOT?: AnexoWhereInput | AnexoWhereInput[]
    title?: StringNullableFilter<"Anexo"> | string | null
    createdAt?: DateTimeFilter<"Anexo"> | Date | string
    updatedAt?: DateTimeFilter<"Anexo"> | Date | string
    chamadoId?: IntFilter<"Anexo"> | number
    ativoId?: IntNullableFilter<"Anexo"> | number | null
    areasComunsId?: IntNullableFilter<"Anexo"> | number | null
    Chamado?: XOR<ChamadoScalarRelationFilter, ChamadoWhereInput>
    Ativo?: XOR<AtivoNullableScalarRelationFilter, AtivoWhereInput> | null
    AreasComuns?: XOR<AreasComunsNullableScalarRelationFilter, AreasComunsWhereInput> | null
  }, "id" | "url">

  export type AnexoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrderInput | SortOrder
    areasComunsId?: SortOrderInput | SortOrder
    _count?: AnexoCountOrderByAggregateInput
    _avg?: AnexoAvgOrderByAggregateInput
    _max?: AnexoMaxOrderByAggregateInput
    _min?: AnexoMinOrderByAggregateInput
    _sum?: AnexoSumOrderByAggregateInput
  }

  export type AnexoScalarWhereWithAggregatesInput = {
    AND?: AnexoScalarWhereWithAggregatesInput | AnexoScalarWhereWithAggregatesInput[]
    OR?: AnexoScalarWhereWithAggregatesInput[]
    NOT?: AnexoScalarWhereWithAggregatesInput | AnexoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anexo"> | number
    url?: StringWithAggregatesFilter<"Anexo"> | string
    title?: StringNullableWithAggregatesFilter<"Anexo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Anexo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Anexo"> | Date | string
    chamadoId?: IntWithAggregatesFilter<"Anexo"> | number
    ativoId?: IntNullableWithAggregatesFilter<"Anexo"> | number | null
    areasComunsId?: IntNullableWithAggregatesFilter<"Anexo"> | number | null
  }

  export type AceiteTermosCreateInput = {
    termoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAceiteTermosInput
  }

  export type AceiteTermosUncheckedCreateInput = {
    id?: number
    termoUrl: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AceiteTermosUpdateInput = {
    termoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAceiteTermosNestedInput
  }

  export type AceiteTermosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    termoUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AceiteTermosCreateManyInput = {
    id?: number
    termoUrl: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AceiteTermosUpdateManyMutationInput = {
    termoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AceiteTermosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    termoUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelCreateNestedManyWithoutGestorInput
    chamadosCriados?: ChamadoCreateNestedManyWithoutSolicitanteInput
    chamadosDesignados?: ChamadoCreateNestedManyWithoutAssignedProviderInput
    AceiteTermos?: AceiteTermosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelUncheckedCreateNestedManyWithoutGestorInput
    chamadosCriados?: ChamadoUncheckedCreateNestedManyWithoutSolicitanteInput
    chamadosDesignados?: ChamadoUncheckedCreateNestedManyWithoutAssignedProviderInput
    AceiteTermos?: AceiteTermosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUpdateManyWithoutGestorNestedInput
    chamadosCriados?: ChamadoUpdateManyWithoutSolicitanteNestedInput
    chamadosDesignados?: ChamadoUpdateManyWithoutAssignedProviderNestedInput
    AceiteTermos?: AceiteTermosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUncheckedUpdateManyWithoutGestorNestedInput
    chamadosCriados?: ChamadoUncheckedUpdateManyWithoutSolicitanteNestedInput
    chamadosDesignados?: ChamadoUncheckedUpdateManyWithoutAssignedProviderNestedInput
    AceiteTermos?: AceiteTermosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImovelCreateInput = {
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestor: UserCreateNestedOneWithoutImoveisInput
    ativos?: AtivoCreateNestedManyWithoutImovelInput
    chamados?: ChamadoCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsCreateNestedManyWithoutImovelInput
  }

  export type ImovelUncheckedCreateInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestorId: number
    ativos?: AtivoUncheckedCreateNestedManyWithoutImovelInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsUncheckedCreateNestedManyWithoutImovelInput
  }

  export type ImovelUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestor?: UserUpdateOneRequiredWithoutImoveisNestedInput
    ativos?: AtivoUpdateManyWithoutImovelNestedInput
    chamados?: ChamadoUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUpdateManyWithoutImovelNestedInput
  }

  export type ImovelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestorId?: IntFieldUpdateOperationsInput | number
    ativos?: AtivoUncheckedUpdateManyWithoutImovelNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type ImovelCreateManyInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestorId: number
  }

  export type ImovelUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImovelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestorId?: IntFieldUpdateOperationsInput | number
  }

  export type AreasComunsCreateInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutAreasComunsInput
    imovel: ImovelCreateNestedOneWithoutAreasComunsInput
  }

  export type AreasComunsUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    anexos?: AnexoUncheckedCreateNestedManyWithoutAreasComunsInput
  }

  export type AreasComunsUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutAreasComunsNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutAreasComunsNestedInput
  }

  export type AreasComunsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    anexos?: AnexoUncheckedUpdateManyWithoutAreasComunsNestedInput
  }

  export type AreasComunsCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
  }

  export type AreasComunsUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreasComunsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type AtivoCreateInput = {
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutAtivoInput
    imovel: ImovelCreateNestedOneWithoutAtivosInput
    chamados?: ChamadoCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateInput = {
    id?: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    anexos?: AnexoUncheckedCreateNestedManyWithoutAtivoInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUpdateInput = {
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutAtivoNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutAtivosNestedInput
    chamados?: ChamadoUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    anexos?: AnexoUncheckedUpdateManyWithoutAtivoNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoCreateManyInput = {
    id?: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
  }

  export type AtivoUpdateManyMutationInput = {
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type ChamadoCreateInput = {
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutChamadoInput
    imovel: ImovelCreateNestedOneWithoutChamadosInput
    ativo?: AtivoCreateNestedOneWithoutChamadosInput
    solicitante: UserCreateNestedOneWithoutChamadosCriadosInput
    assignedProvider?: UserCreateNestedOneWithoutChamadosDesignadosInput
  }

  export type ChamadoUncheckedCreateInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    solicitanteId: number
    assignedProviderId?: number | null
    anexos?: AnexoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoUpdateInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutChamadoNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutChamadosNestedInput
    ativo?: AtivoUpdateOneWithoutChamadosNestedInput
    solicitante?: UserUpdateOneRequiredWithoutChamadosCriadosNestedInput
    assignedProvider?: UserUpdateOneWithoutChamadosDesignadosNestedInput
  }

  export type ChamadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
    anexos?: AnexoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoCreateManyInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    solicitanteId: number
    assignedProviderId?: number | null
  }

  export type ChamadoUpdateManyMutationInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChamadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoCreateInput = {
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chamado: ChamadoCreateNestedOneWithoutAnexosInput
    Ativo?: AtivoCreateNestedOneWithoutAnexosInput
    AreasComuns?: AreasComunsCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chamadoId: number
    ativoId?: number | null
    areasComunsId?: number | null
  }

  export type AnexoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chamado?: ChamadoUpdateOneRequiredWithoutAnexosNestedInput
    Ativo?: AtivoUpdateOneWithoutAnexosNestedInput
    AreasComuns?: AreasComunsUpdateOneWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    areasComunsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoCreateManyInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chamadoId: number
    ativoId?: number | null
    areasComunsId?: number | null
  }

  export type AnexoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    areasComunsId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AceiteTermosCountOrderByAggregateInput = {
    id?: SortOrder
    termoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AceiteTermosAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AceiteTermosMaxOrderByAggregateInput = {
    id?: SortOrder
    termoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AceiteTermosMinOrderByAggregateInput = {
    id?: SortOrder
    termoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AceiteTermosSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ImovelListRelationFilter = {
    every?: ImovelWhereInput
    some?: ImovelWhereInput
    none?: ImovelWhereInput
  }

  export type ChamadoListRelationFilter = {
    every?: ChamadoWhereInput
    some?: ChamadoWhereInput
    none?: ChamadoWhereInput
  }

  export type AceiteTermosListRelationFilter = {
    every?: AceiteTermosWhereInput
    some?: AceiteTermosWhereInput
    none?: AceiteTermosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChamadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AceiteTermosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    periodoMandatoInicio?: SortOrder
    periodoMandatoFim?: SortOrder
    subsindicoInfo?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    periodoMandatoInicio?: SortOrder
    periodoMandatoFim?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    periodoMandatoInicio?: SortOrder
    periodoMandatoFim?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type AtivoListRelationFilter = {
    every?: AtivoWhereInput
    some?: AtivoWhereInput
    none?: AtivoWhereInput
  }

  export type AreasComunsListRelationFilter = {
    every?: AreasComunsWhereInput
    some?: AreasComunsWhereInput
    none?: AreasComunsWhereInput
  }

  export type AtivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreasComunsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImovelCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    quantidade_moradias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gestorId?: SortOrder
  }

  export type ImovelAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade_moradias?: SortOrder
    gestorId?: SortOrder
  }

  export type ImovelMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    quantidade_moradias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gestorId?: SortOrder
  }

  export type ImovelMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    quantidade_moradias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gestorId?: SortOrder
  }

  export type ImovelSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade_moradias?: SortOrder
    gestorId?: SortOrder
  }

  export type AnexoListRelationFilter = {
    every?: AnexoWhereInput
    some?: AnexoWhereInput
    none?: AnexoWhereInput
  }

  export type ImovelScalarRelationFilter = {
    is?: ImovelWhereInput
    isNot?: ImovelWhereInput
  }

  export type AnexoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreasComunsCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
  }

  export type AreasComunsAvgOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
  }

  export type AreasComunsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
  }

  export type AreasComunsMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
  }

  export type AreasComunsSumOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AtivoCountOrderByAggregateInput = {
    id?: SortOrder
    assetCode?: SortOrder
    descricaoAtivo?: SortOrder
    localInstalacao?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    dataInstalacao?: SortOrder
    valorCompra?: SortOrder
    garantia?: SortOrder
    garantiaValidade?: SortOrder
    contratoManutencao?: SortOrder
    contratoValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
  }

  export type AtivoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorCompra?: SortOrder
    imovelId?: SortOrder
  }

  export type AtivoMaxOrderByAggregateInput = {
    id?: SortOrder
    assetCode?: SortOrder
    descricaoAtivo?: SortOrder
    localInstalacao?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    dataInstalacao?: SortOrder
    valorCompra?: SortOrder
    garantia?: SortOrder
    garantiaValidade?: SortOrder
    contratoManutencao?: SortOrder
    contratoValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
  }

  export type AtivoMinOrderByAggregateInput = {
    id?: SortOrder
    assetCode?: SortOrder
    descricaoAtivo?: SortOrder
    localInstalacao?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    dataInstalacao?: SortOrder
    valorCompra?: SortOrder
    garantia?: SortOrder
    garantiaValidade?: SortOrder
    contratoManutencao?: SortOrder
    contratoValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
  }

  export type AtivoSumOrderByAggregateInput = {
    id?: SortOrder
    valorCompra?: SortOrder
    imovelId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPrioridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeFilter<$PrismaModel> | $Enums.Prioridade
  }

  export type EnumEscopoFilter<$PrismaModel = never> = {
    equals?: $Enums.Escopo | EnumEscopoFieldRefInput<$PrismaModel>
    in?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    not?: NestedEnumEscopoFilter<$PrismaModel> | $Enums.Escopo
  }

  export type EnumChamadoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChamadoStatus | EnumChamadoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChamadoStatusFilter<$PrismaModel> | $Enums.ChamadoStatus
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

  export type AtivoNullableScalarRelationFilter = {
    is?: AtivoWhereInput | null
    isNot?: AtivoWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChamadoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroChamado?: SortOrder
    descricaoOcorrido?: SortOrder
    informacoesAdicionais?: SortOrder
    prioridade?: SortOrder
    escopo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrder
  }

  export type ChamadoAvgOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrder
  }

  export type ChamadoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroChamado?: SortOrder
    descricaoOcorrido?: SortOrder
    informacoesAdicionais?: SortOrder
    prioridade?: SortOrder
    escopo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrder
  }

  export type ChamadoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroChamado?: SortOrder
    descricaoOcorrido?: SortOrder
    informacoesAdicionais?: SortOrder
    prioridade?: SortOrder
    escopo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrder
  }

  export type ChamadoSumOrderByAggregateInput = {
    id?: SortOrder
    imovelId?: SortOrder
    ativoId?: SortOrder
    solicitanteId?: SortOrder
    assignedProviderId?: SortOrder
  }

  export type EnumPrioridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel> | $Enums.Prioridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeFilter<$PrismaModel>
  }

  export type EnumEscopoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Escopo | EnumEscopoFieldRefInput<$PrismaModel>
    in?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    not?: NestedEnumEscopoWithAggregatesFilter<$PrismaModel> | $Enums.Escopo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscopoFilter<$PrismaModel>
    _max?: NestedEnumEscopoFilter<$PrismaModel>
  }

  export type EnumChamadoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChamadoStatus | EnumChamadoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChamadoStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChamadoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChamadoStatusFilter<$PrismaModel>
    _max?: NestedEnumChamadoStatusFilter<$PrismaModel>
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

  export type ChamadoScalarRelationFilter = {
    is?: ChamadoWhereInput
    isNot?: ChamadoWhereInput
  }

  export type AreasComunsNullableScalarRelationFilter = {
    is?: AreasComunsWhereInput | null
    isNot?: AreasComunsWhereInput | null
  }

  export type AnexoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrder
    areasComunsId?: SortOrder
  }

  export type AnexoAvgOrderByAggregateInput = {
    id?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrder
    areasComunsId?: SortOrder
  }

  export type AnexoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrder
    areasComunsId?: SortOrder
  }

  export type AnexoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrder
    areasComunsId?: SortOrder
  }

  export type AnexoSumOrderByAggregateInput = {
    id?: SortOrder
    chamadoId?: SortOrder
    ativoId?: SortOrder
    areasComunsId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAceiteTermosInput = {
    create?: XOR<UserCreateWithoutAceiteTermosInput, UserUncheckedCreateWithoutAceiteTermosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAceiteTermosInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAceiteTermosNestedInput = {
    create?: XOR<UserCreateWithoutAceiteTermosInput, UserUncheckedCreateWithoutAceiteTermosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAceiteTermosInput
    upsert?: UserUpsertWithoutAceiteTermosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAceiteTermosInput, UserUpdateWithoutAceiteTermosInput>, UserUncheckedUpdateWithoutAceiteTermosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImovelCreateNestedManyWithoutGestorInput = {
    create?: XOR<ImovelCreateWithoutGestorInput, ImovelUncheckedCreateWithoutGestorInput> | ImovelCreateWithoutGestorInput[] | ImovelUncheckedCreateWithoutGestorInput[]
    connectOrCreate?: ImovelCreateOrConnectWithoutGestorInput | ImovelCreateOrConnectWithoutGestorInput[]
    createMany?: ImovelCreateManyGestorInputEnvelope
    connect?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
  }

  export type ChamadoCreateNestedManyWithoutSolicitanteInput = {
    create?: XOR<ChamadoCreateWithoutSolicitanteInput, ChamadoUncheckedCreateWithoutSolicitanteInput> | ChamadoCreateWithoutSolicitanteInput[] | ChamadoUncheckedCreateWithoutSolicitanteInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutSolicitanteInput | ChamadoCreateOrConnectWithoutSolicitanteInput[]
    createMany?: ChamadoCreateManySolicitanteInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type ChamadoCreateNestedManyWithoutAssignedProviderInput = {
    create?: XOR<ChamadoCreateWithoutAssignedProviderInput, ChamadoUncheckedCreateWithoutAssignedProviderInput> | ChamadoCreateWithoutAssignedProviderInput[] | ChamadoUncheckedCreateWithoutAssignedProviderInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAssignedProviderInput | ChamadoCreateOrConnectWithoutAssignedProviderInput[]
    createMany?: ChamadoCreateManyAssignedProviderInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type AceiteTermosCreateNestedManyWithoutUserInput = {
    create?: XOR<AceiteTermosCreateWithoutUserInput, AceiteTermosUncheckedCreateWithoutUserInput> | AceiteTermosCreateWithoutUserInput[] | AceiteTermosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AceiteTermosCreateOrConnectWithoutUserInput | AceiteTermosCreateOrConnectWithoutUserInput[]
    createMany?: AceiteTermosCreateManyUserInputEnvelope
    connect?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
  }

  export type ImovelUncheckedCreateNestedManyWithoutGestorInput = {
    create?: XOR<ImovelCreateWithoutGestorInput, ImovelUncheckedCreateWithoutGestorInput> | ImovelCreateWithoutGestorInput[] | ImovelUncheckedCreateWithoutGestorInput[]
    connectOrCreate?: ImovelCreateOrConnectWithoutGestorInput | ImovelCreateOrConnectWithoutGestorInput[]
    createMany?: ImovelCreateManyGestorInputEnvelope
    connect?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutSolicitanteInput = {
    create?: XOR<ChamadoCreateWithoutSolicitanteInput, ChamadoUncheckedCreateWithoutSolicitanteInput> | ChamadoCreateWithoutSolicitanteInput[] | ChamadoUncheckedCreateWithoutSolicitanteInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutSolicitanteInput | ChamadoCreateOrConnectWithoutSolicitanteInput[]
    createMany?: ChamadoCreateManySolicitanteInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutAssignedProviderInput = {
    create?: XOR<ChamadoCreateWithoutAssignedProviderInput, ChamadoUncheckedCreateWithoutAssignedProviderInput> | ChamadoCreateWithoutAssignedProviderInput[] | ChamadoUncheckedCreateWithoutAssignedProviderInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAssignedProviderInput | ChamadoCreateOrConnectWithoutAssignedProviderInput[]
    createMany?: ChamadoCreateManyAssignedProviderInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type AceiteTermosUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AceiteTermosCreateWithoutUserInput, AceiteTermosUncheckedCreateWithoutUserInput> | AceiteTermosCreateWithoutUserInput[] | AceiteTermosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AceiteTermosCreateOrConnectWithoutUserInput | AceiteTermosCreateOrConnectWithoutUserInput[]
    createMany?: AceiteTermosCreateManyUserInputEnvelope
    connect?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ImovelUpdateManyWithoutGestorNestedInput = {
    create?: XOR<ImovelCreateWithoutGestorInput, ImovelUncheckedCreateWithoutGestorInput> | ImovelCreateWithoutGestorInput[] | ImovelUncheckedCreateWithoutGestorInput[]
    connectOrCreate?: ImovelCreateOrConnectWithoutGestorInput | ImovelCreateOrConnectWithoutGestorInput[]
    upsert?: ImovelUpsertWithWhereUniqueWithoutGestorInput | ImovelUpsertWithWhereUniqueWithoutGestorInput[]
    createMany?: ImovelCreateManyGestorInputEnvelope
    set?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    disconnect?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    delete?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    connect?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    update?: ImovelUpdateWithWhereUniqueWithoutGestorInput | ImovelUpdateWithWhereUniqueWithoutGestorInput[]
    updateMany?: ImovelUpdateManyWithWhereWithoutGestorInput | ImovelUpdateManyWithWhereWithoutGestorInput[]
    deleteMany?: ImovelScalarWhereInput | ImovelScalarWhereInput[]
  }

  export type ChamadoUpdateManyWithoutSolicitanteNestedInput = {
    create?: XOR<ChamadoCreateWithoutSolicitanteInput, ChamadoUncheckedCreateWithoutSolicitanteInput> | ChamadoCreateWithoutSolicitanteInput[] | ChamadoUncheckedCreateWithoutSolicitanteInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutSolicitanteInput | ChamadoCreateOrConnectWithoutSolicitanteInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutSolicitanteInput | ChamadoUpsertWithWhereUniqueWithoutSolicitanteInput[]
    createMany?: ChamadoCreateManySolicitanteInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutSolicitanteInput | ChamadoUpdateWithWhereUniqueWithoutSolicitanteInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutSolicitanteInput | ChamadoUpdateManyWithWhereWithoutSolicitanteInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type ChamadoUpdateManyWithoutAssignedProviderNestedInput = {
    create?: XOR<ChamadoCreateWithoutAssignedProviderInput, ChamadoUncheckedCreateWithoutAssignedProviderInput> | ChamadoCreateWithoutAssignedProviderInput[] | ChamadoUncheckedCreateWithoutAssignedProviderInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAssignedProviderInput | ChamadoCreateOrConnectWithoutAssignedProviderInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutAssignedProviderInput | ChamadoUpsertWithWhereUniqueWithoutAssignedProviderInput[]
    createMany?: ChamadoCreateManyAssignedProviderInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutAssignedProviderInput | ChamadoUpdateWithWhereUniqueWithoutAssignedProviderInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutAssignedProviderInput | ChamadoUpdateManyWithWhereWithoutAssignedProviderInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type AceiteTermosUpdateManyWithoutUserNestedInput = {
    create?: XOR<AceiteTermosCreateWithoutUserInput, AceiteTermosUncheckedCreateWithoutUserInput> | AceiteTermosCreateWithoutUserInput[] | AceiteTermosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AceiteTermosCreateOrConnectWithoutUserInput | AceiteTermosCreateOrConnectWithoutUserInput[]
    upsert?: AceiteTermosUpsertWithWhereUniqueWithoutUserInput | AceiteTermosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AceiteTermosCreateManyUserInputEnvelope
    set?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    disconnect?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    delete?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    connect?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    update?: AceiteTermosUpdateWithWhereUniqueWithoutUserInput | AceiteTermosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AceiteTermosUpdateManyWithWhereWithoutUserInput | AceiteTermosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AceiteTermosScalarWhereInput | AceiteTermosScalarWhereInput[]
  }

  export type ImovelUncheckedUpdateManyWithoutGestorNestedInput = {
    create?: XOR<ImovelCreateWithoutGestorInput, ImovelUncheckedCreateWithoutGestorInput> | ImovelCreateWithoutGestorInput[] | ImovelUncheckedCreateWithoutGestorInput[]
    connectOrCreate?: ImovelCreateOrConnectWithoutGestorInput | ImovelCreateOrConnectWithoutGestorInput[]
    upsert?: ImovelUpsertWithWhereUniqueWithoutGestorInput | ImovelUpsertWithWhereUniqueWithoutGestorInput[]
    createMany?: ImovelCreateManyGestorInputEnvelope
    set?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    disconnect?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    delete?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    connect?: ImovelWhereUniqueInput | ImovelWhereUniqueInput[]
    update?: ImovelUpdateWithWhereUniqueWithoutGestorInput | ImovelUpdateWithWhereUniqueWithoutGestorInput[]
    updateMany?: ImovelUpdateManyWithWhereWithoutGestorInput | ImovelUpdateManyWithWhereWithoutGestorInput[]
    deleteMany?: ImovelScalarWhereInput | ImovelScalarWhereInput[]
  }

  export type ChamadoUncheckedUpdateManyWithoutSolicitanteNestedInput = {
    create?: XOR<ChamadoCreateWithoutSolicitanteInput, ChamadoUncheckedCreateWithoutSolicitanteInput> | ChamadoCreateWithoutSolicitanteInput[] | ChamadoUncheckedCreateWithoutSolicitanteInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutSolicitanteInput | ChamadoCreateOrConnectWithoutSolicitanteInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutSolicitanteInput | ChamadoUpsertWithWhereUniqueWithoutSolicitanteInput[]
    createMany?: ChamadoCreateManySolicitanteInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutSolicitanteInput | ChamadoUpdateWithWhereUniqueWithoutSolicitanteInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutSolicitanteInput | ChamadoUpdateManyWithWhereWithoutSolicitanteInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type ChamadoUncheckedUpdateManyWithoutAssignedProviderNestedInput = {
    create?: XOR<ChamadoCreateWithoutAssignedProviderInput, ChamadoUncheckedCreateWithoutAssignedProviderInput> | ChamadoCreateWithoutAssignedProviderInput[] | ChamadoUncheckedCreateWithoutAssignedProviderInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAssignedProviderInput | ChamadoCreateOrConnectWithoutAssignedProviderInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutAssignedProviderInput | ChamadoUpsertWithWhereUniqueWithoutAssignedProviderInput[]
    createMany?: ChamadoCreateManyAssignedProviderInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutAssignedProviderInput | ChamadoUpdateWithWhereUniqueWithoutAssignedProviderInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutAssignedProviderInput | ChamadoUpdateManyWithWhereWithoutAssignedProviderInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type AceiteTermosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AceiteTermosCreateWithoutUserInput, AceiteTermosUncheckedCreateWithoutUserInput> | AceiteTermosCreateWithoutUserInput[] | AceiteTermosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AceiteTermosCreateOrConnectWithoutUserInput | AceiteTermosCreateOrConnectWithoutUserInput[]
    upsert?: AceiteTermosUpsertWithWhereUniqueWithoutUserInput | AceiteTermosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AceiteTermosCreateManyUserInputEnvelope
    set?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    disconnect?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    delete?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    connect?: AceiteTermosWhereUniqueInput | AceiteTermosWhereUniqueInput[]
    update?: AceiteTermosUpdateWithWhereUniqueWithoutUserInput | AceiteTermosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AceiteTermosUpdateManyWithWhereWithoutUserInput | AceiteTermosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AceiteTermosScalarWhereInput | AceiteTermosScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutImoveisInput = {
    create?: XOR<UserCreateWithoutImoveisInput, UserUncheckedCreateWithoutImoveisInput>
    connectOrCreate?: UserCreateOrConnectWithoutImoveisInput
    connect?: UserWhereUniqueInput
  }

  export type AtivoCreateNestedManyWithoutImovelInput = {
    create?: XOR<AtivoCreateWithoutImovelInput, AtivoUncheckedCreateWithoutImovelInput> | AtivoCreateWithoutImovelInput[] | AtivoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutImovelInput | AtivoCreateOrConnectWithoutImovelInput[]
    createMany?: AtivoCreateManyImovelInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type ChamadoCreateNestedManyWithoutImovelInput = {
    create?: XOR<ChamadoCreateWithoutImovelInput, ChamadoUncheckedCreateWithoutImovelInput> | ChamadoCreateWithoutImovelInput[] | ChamadoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutImovelInput | ChamadoCreateOrConnectWithoutImovelInput[]
    createMany?: ChamadoCreateManyImovelInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type AreasComunsCreateNestedManyWithoutImovelInput = {
    create?: XOR<AreasComunsCreateWithoutImovelInput, AreasComunsUncheckedCreateWithoutImovelInput> | AreasComunsCreateWithoutImovelInput[] | AreasComunsUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AreasComunsCreateOrConnectWithoutImovelInput | AreasComunsCreateOrConnectWithoutImovelInput[]
    createMany?: AreasComunsCreateManyImovelInputEnvelope
    connect?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
  }

  export type AtivoUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<AtivoCreateWithoutImovelInput, AtivoUncheckedCreateWithoutImovelInput> | AtivoCreateWithoutImovelInput[] | AtivoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutImovelInput | AtivoCreateOrConnectWithoutImovelInput[]
    createMany?: AtivoCreateManyImovelInputEnvelope
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<ChamadoCreateWithoutImovelInput, ChamadoUncheckedCreateWithoutImovelInput> | ChamadoCreateWithoutImovelInput[] | ChamadoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutImovelInput | ChamadoCreateOrConnectWithoutImovelInput[]
    createMany?: ChamadoCreateManyImovelInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type AreasComunsUncheckedCreateNestedManyWithoutImovelInput = {
    create?: XOR<AreasComunsCreateWithoutImovelInput, AreasComunsUncheckedCreateWithoutImovelInput> | AreasComunsCreateWithoutImovelInput[] | AreasComunsUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AreasComunsCreateOrConnectWithoutImovelInput | AreasComunsCreateOrConnectWithoutImovelInput[]
    createMany?: AreasComunsCreateManyImovelInputEnvelope
    connect?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutImoveisNestedInput = {
    create?: XOR<UserCreateWithoutImoveisInput, UserUncheckedCreateWithoutImoveisInput>
    connectOrCreate?: UserCreateOrConnectWithoutImoveisInput
    upsert?: UserUpsertWithoutImoveisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImoveisInput, UserUpdateWithoutImoveisInput>, UserUncheckedUpdateWithoutImoveisInput>
  }

  export type AtivoUpdateManyWithoutImovelNestedInput = {
    create?: XOR<AtivoCreateWithoutImovelInput, AtivoUncheckedCreateWithoutImovelInput> | AtivoCreateWithoutImovelInput[] | AtivoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutImovelInput | AtivoCreateOrConnectWithoutImovelInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutImovelInput | AtivoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: AtivoCreateManyImovelInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutImovelInput | AtivoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutImovelInput | AtivoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type ChamadoUpdateManyWithoutImovelNestedInput = {
    create?: XOR<ChamadoCreateWithoutImovelInput, ChamadoUncheckedCreateWithoutImovelInput> | ChamadoCreateWithoutImovelInput[] | ChamadoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutImovelInput | ChamadoCreateOrConnectWithoutImovelInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutImovelInput | ChamadoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: ChamadoCreateManyImovelInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutImovelInput | ChamadoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutImovelInput | ChamadoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type AreasComunsUpdateManyWithoutImovelNestedInput = {
    create?: XOR<AreasComunsCreateWithoutImovelInput, AreasComunsUncheckedCreateWithoutImovelInput> | AreasComunsCreateWithoutImovelInput[] | AreasComunsUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AreasComunsCreateOrConnectWithoutImovelInput | AreasComunsCreateOrConnectWithoutImovelInput[]
    upsert?: AreasComunsUpsertWithWhereUniqueWithoutImovelInput | AreasComunsUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: AreasComunsCreateManyImovelInputEnvelope
    set?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    disconnect?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    delete?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    connect?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    update?: AreasComunsUpdateWithWhereUniqueWithoutImovelInput | AreasComunsUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: AreasComunsUpdateManyWithWhereWithoutImovelInput | AreasComunsUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: AreasComunsScalarWhereInput | AreasComunsScalarWhereInput[]
  }

  export type AtivoUncheckedUpdateManyWithoutImovelNestedInput = {
    create?: XOR<AtivoCreateWithoutImovelInput, AtivoUncheckedCreateWithoutImovelInput> | AtivoCreateWithoutImovelInput[] | AtivoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AtivoCreateOrConnectWithoutImovelInput | AtivoCreateOrConnectWithoutImovelInput[]
    upsert?: AtivoUpsertWithWhereUniqueWithoutImovelInput | AtivoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: AtivoCreateManyImovelInputEnvelope
    set?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    disconnect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    delete?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    connect?: AtivoWhereUniqueInput | AtivoWhereUniqueInput[]
    update?: AtivoUpdateWithWhereUniqueWithoutImovelInput | AtivoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: AtivoUpdateManyWithWhereWithoutImovelInput | AtivoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
  }

  export type ChamadoUncheckedUpdateManyWithoutImovelNestedInput = {
    create?: XOR<ChamadoCreateWithoutImovelInput, ChamadoUncheckedCreateWithoutImovelInput> | ChamadoCreateWithoutImovelInput[] | ChamadoUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutImovelInput | ChamadoCreateOrConnectWithoutImovelInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutImovelInput | ChamadoUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: ChamadoCreateManyImovelInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutImovelInput | ChamadoUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutImovelInput | ChamadoUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type AreasComunsUncheckedUpdateManyWithoutImovelNestedInput = {
    create?: XOR<AreasComunsCreateWithoutImovelInput, AreasComunsUncheckedCreateWithoutImovelInput> | AreasComunsCreateWithoutImovelInput[] | AreasComunsUncheckedCreateWithoutImovelInput[]
    connectOrCreate?: AreasComunsCreateOrConnectWithoutImovelInput | AreasComunsCreateOrConnectWithoutImovelInput[]
    upsert?: AreasComunsUpsertWithWhereUniqueWithoutImovelInput | AreasComunsUpsertWithWhereUniqueWithoutImovelInput[]
    createMany?: AreasComunsCreateManyImovelInputEnvelope
    set?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    disconnect?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    delete?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    connect?: AreasComunsWhereUniqueInput | AreasComunsWhereUniqueInput[]
    update?: AreasComunsUpdateWithWhereUniqueWithoutImovelInput | AreasComunsUpdateWithWhereUniqueWithoutImovelInput[]
    updateMany?: AreasComunsUpdateManyWithWhereWithoutImovelInput | AreasComunsUpdateManyWithWhereWithoutImovelInput[]
    deleteMany?: AreasComunsScalarWhereInput | AreasComunsScalarWhereInput[]
  }

  export type AnexoCreateNestedManyWithoutAreasComunsInput = {
    create?: XOR<AnexoCreateWithoutAreasComunsInput, AnexoUncheckedCreateWithoutAreasComunsInput> | AnexoCreateWithoutAreasComunsInput[] | AnexoUncheckedCreateWithoutAreasComunsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAreasComunsInput | AnexoCreateOrConnectWithoutAreasComunsInput[]
    createMany?: AnexoCreateManyAreasComunsInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type ImovelCreateNestedOneWithoutAreasComunsInput = {
    create?: XOR<ImovelCreateWithoutAreasComunsInput, ImovelUncheckedCreateWithoutAreasComunsInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutAreasComunsInput
    connect?: ImovelWhereUniqueInput
  }

  export type AnexoUncheckedCreateNestedManyWithoutAreasComunsInput = {
    create?: XOR<AnexoCreateWithoutAreasComunsInput, AnexoUncheckedCreateWithoutAreasComunsInput> | AnexoCreateWithoutAreasComunsInput[] | AnexoUncheckedCreateWithoutAreasComunsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAreasComunsInput | AnexoCreateOrConnectWithoutAreasComunsInput[]
    createMany?: AnexoCreateManyAreasComunsInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type AnexoUpdateManyWithoutAreasComunsNestedInput = {
    create?: XOR<AnexoCreateWithoutAreasComunsInput, AnexoUncheckedCreateWithoutAreasComunsInput> | AnexoCreateWithoutAreasComunsInput[] | AnexoUncheckedCreateWithoutAreasComunsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAreasComunsInput | AnexoCreateOrConnectWithoutAreasComunsInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutAreasComunsInput | AnexoUpsertWithWhereUniqueWithoutAreasComunsInput[]
    createMany?: AnexoCreateManyAreasComunsInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutAreasComunsInput | AnexoUpdateWithWhereUniqueWithoutAreasComunsInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutAreasComunsInput | AnexoUpdateManyWithWhereWithoutAreasComunsInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type ImovelUpdateOneRequiredWithoutAreasComunsNestedInput = {
    create?: XOR<ImovelCreateWithoutAreasComunsInput, ImovelUncheckedCreateWithoutAreasComunsInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutAreasComunsInput
    upsert?: ImovelUpsertWithoutAreasComunsInput
    connect?: ImovelWhereUniqueInput
    update?: XOR<XOR<ImovelUpdateToOneWithWhereWithoutAreasComunsInput, ImovelUpdateWithoutAreasComunsInput>, ImovelUncheckedUpdateWithoutAreasComunsInput>
  }

  export type AnexoUncheckedUpdateManyWithoutAreasComunsNestedInput = {
    create?: XOR<AnexoCreateWithoutAreasComunsInput, AnexoUncheckedCreateWithoutAreasComunsInput> | AnexoCreateWithoutAreasComunsInput[] | AnexoUncheckedCreateWithoutAreasComunsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAreasComunsInput | AnexoCreateOrConnectWithoutAreasComunsInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutAreasComunsInput | AnexoUpsertWithWhereUniqueWithoutAreasComunsInput[]
    createMany?: AnexoCreateManyAreasComunsInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutAreasComunsInput | AnexoUpdateWithWhereUniqueWithoutAreasComunsInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutAreasComunsInput | AnexoUpdateManyWithWhereWithoutAreasComunsInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type AnexoCreateNestedManyWithoutAtivoInput = {
    create?: XOR<AnexoCreateWithoutAtivoInput, AnexoUncheckedCreateWithoutAtivoInput> | AnexoCreateWithoutAtivoInput[] | AnexoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAtivoInput | AnexoCreateOrConnectWithoutAtivoInput[]
    createMany?: AnexoCreateManyAtivoInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type ImovelCreateNestedOneWithoutAtivosInput = {
    create?: XOR<ImovelCreateWithoutAtivosInput, ImovelUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutAtivosInput
    connect?: ImovelWhereUniqueInput
  }

  export type ChamadoCreateNestedManyWithoutAtivoInput = {
    create?: XOR<ChamadoCreateWithoutAtivoInput, ChamadoUncheckedCreateWithoutAtivoInput> | ChamadoCreateWithoutAtivoInput[] | ChamadoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAtivoInput | ChamadoCreateOrConnectWithoutAtivoInput[]
    createMany?: ChamadoCreateManyAtivoInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type AnexoUncheckedCreateNestedManyWithoutAtivoInput = {
    create?: XOR<AnexoCreateWithoutAtivoInput, AnexoUncheckedCreateWithoutAtivoInput> | AnexoCreateWithoutAtivoInput[] | AnexoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAtivoInput | AnexoCreateOrConnectWithoutAtivoInput[]
    createMany?: AnexoCreateManyAtivoInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutAtivoInput = {
    create?: XOR<ChamadoCreateWithoutAtivoInput, ChamadoUncheckedCreateWithoutAtivoInput> | ChamadoCreateWithoutAtivoInput[] | ChamadoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAtivoInput | ChamadoCreateOrConnectWithoutAtivoInput[]
    createMany?: ChamadoCreateManyAtivoInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnexoUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<AnexoCreateWithoutAtivoInput, AnexoUncheckedCreateWithoutAtivoInput> | AnexoCreateWithoutAtivoInput[] | AnexoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAtivoInput | AnexoCreateOrConnectWithoutAtivoInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutAtivoInput | AnexoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: AnexoCreateManyAtivoInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutAtivoInput | AnexoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutAtivoInput | AnexoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type ImovelUpdateOneRequiredWithoutAtivosNestedInput = {
    create?: XOR<ImovelCreateWithoutAtivosInput, ImovelUncheckedCreateWithoutAtivosInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutAtivosInput
    upsert?: ImovelUpsertWithoutAtivosInput
    connect?: ImovelWhereUniqueInput
    update?: XOR<XOR<ImovelUpdateToOneWithWhereWithoutAtivosInput, ImovelUpdateWithoutAtivosInput>, ImovelUncheckedUpdateWithoutAtivosInput>
  }

  export type ChamadoUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<ChamadoCreateWithoutAtivoInput, ChamadoUncheckedCreateWithoutAtivoInput> | ChamadoCreateWithoutAtivoInput[] | ChamadoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAtivoInput | ChamadoCreateOrConnectWithoutAtivoInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutAtivoInput | ChamadoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: ChamadoCreateManyAtivoInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutAtivoInput | ChamadoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutAtivoInput | ChamadoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type AnexoUncheckedUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<AnexoCreateWithoutAtivoInput, AnexoUncheckedCreateWithoutAtivoInput> | AnexoCreateWithoutAtivoInput[] | AnexoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutAtivoInput | AnexoCreateOrConnectWithoutAtivoInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutAtivoInput | AnexoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: AnexoCreateManyAtivoInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutAtivoInput | AnexoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutAtivoInput | AnexoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type ChamadoUncheckedUpdateManyWithoutAtivoNestedInput = {
    create?: XOR<ChamadoCreateWithoutAtivoInput, ChamadoUncheckedCreateWithoutAtivoInput> | ChamadoCreateWithoutAtivoInput[] | ChamadoUncheckedCreateWithoutAtivoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutAtivoInput | ChamadoCreateOrConnectWithoutAtivoInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutAtivoInput | ChamadoUpsertWithWhereUniqueWithoutAtivoInput[]
    createMany?: ChamadoCreateManyAtivoInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutAtivoInput | ChamadoUpdateWithWhereUniqueWithoutAtivoInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutAtivoInput | ChamadoUpdateManyWithWhereWithoutAtivoInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type AnexoCreateNestedManyWithoutChamadoInput = {
    create?: XOR<AnexoCreateWithoutChamadoInput, AnexoUncheckedCreateWithoutChamadoInput> | AnexoCreateWithoutChamadoInput[] | AnexoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutChamadoInput | AnexoCreateOrConnectWithoutChamadoInput[]
    createMany?: AnexoCreateManyChamadoInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type ImovelCreateNestedOneWithoutChamadosInput = {
    create?: XOR<ImovelCreateWithoutChamadosInput, ImovelUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutChamadosInput
    connect?: ImovelWhereUniqueInput
  }

  export type AtivoCreateNestedOneWithoutChamadosInput = {
    create?: XOR<AtivoCreateWithoutChamadosInput, AtivoUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutChamadosInput
    connect?: AtivoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChamadosCriadosInput = {
    create?: XOR<UserCreateWithoutChamadosCriadosInput, UserUncheckedCreateWithoutChamadosCriadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadosCriadosInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChamadosDesignadosInput = {
    create?: XOR<UserCreateWithoutChamadosDesignadosInput, UserUncheckedCreateWithoutChamadosDesignadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadosDesignadosInput
    connect?: UserWhereUniqueInput
  }

  export type AnexoUncheckedCreateNestedManyWithoutChamadoInput = {
    create?: XOR<AnexoCreateWithoutChamadoInput, AnexoUncheckedCreateWithoutChamadoInput> | AnexoCreateWithoutChamadoInput[] | AnexoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutChamadoInput | AnexoCreateOrConnectWithoutChamadoInput[]
    createMany?: AnexoCreateManyChamadoInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type EnumPrioridadeFieldUpdateOperationsInput = {
    set?: $Enums.Prioridade
  }

  export type EnumEscopoFieldUpdateOperationsInput = {
    set?: $Enums.Escopo
  }

  export type EnumChamadoStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChamadoStatus
  }

  export type AnexoUpdateManyWithoutChamadoNestedInput = {
    create?: XOR<AnexoCreateWithoutChamadoInput, AnexoUncheckedCreateWithoutChamadoInput> | AnexoCreateWithoutChamadoInput[] | AnexoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutChamadoInput | AnexoCreateOrConnectWithoutChamadoInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutChamadoInput | AnexoUpsertWithWhereUniqueWithoutChamadoInput[]
    createMany?: AnexoCreateManyChamadoInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutChamadoInput | AnexoUpdateWithWhereUniqueWithoutChamadoInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutChamadoInput | AnexoUpdateManyWithWhereWithoutChamadoInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type ImovelUpdateOneRequiredWithoutChamadosNestedInput = {
    create?: XOR<ImovelCreateWithoutChamadosInput, ImovelUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: ImovelCreateOrConnectWithoutChamadosInput
    upsert?: ImovelUpsertWithoutChamadosInput
    connect?: ImovelWhereUniqueInput
    update?: XOR<XOR<ImovelUpdateToOneWithWhereWithoutChamadosInput, ImovelUpdateWithoutChamadosInput>, ImovelUncheckedUpdateWithoutChamadosInput>
  }

  export type AtivoUpdateOneWithoutChamadosNestedInput = {
    create?: XOR<AtivoCreateWithoutChamadosInput, AtivoUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutChamadosInput
    upsert?: AtivoUpsertWithoutChamadosInput
    disconnect?: AtivoWhereInput | boolean
    delete?: AtivoWhereInput | boolean
    connect?: AtivoWhereUniqueInput
    update?: XOR<XOR<AtivoUpdateToOneWithWhereWithoutChamadosInput, AtivoUpdateWithoutChamadosInput>, AtivoUncheckedUpdateWithoutChamadosInput>
  }

  export type UserUpdateOneRequiredWithoutChamadosCriadosNestedInput = {
    create?: XOR<UserCreateWithoutChamadosCriadosInput, UserUncheckedCreateWithoutChamadosCriadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadosCriadosInput
    upsert?: UserUpsertWithoutChamadosCriadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChamadosCriadosInput, UserUpdateWithoutChamadosCriadosInput>, UserUncheckedUpdateWithoutChamadosCriadosInput>
  }

  export type UserUpdateOneWithoutChamadosDesignadosNestedInput = {
    create?: XOR<UserCreateWithoutChamadosDesignadosInput, UserUncheckedCreateWithoutChamadosDesignadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadosDesignadosInput
    upsert?: UserUpsertWithoutChamadosDesignadosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChamadosDesignadosInput, UserUpdateWithoutChamadosDesignadosInput>, UserUncheckedUpdateWithoutChamadosDesignadosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnexoUncheckedUpdateManyWithoutChamadoNestedInput = {
    create?: XOR<AnexoCreateWithoutChamadoInput, AnexoUncheckedCreateWithoutChamadoInput> | AnexoCreateWithoutChamadoInput[] | AnexoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutChamadoInput | AnexoCreateOrConnectWithoutChamadoInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutChamadoInput | AnexoUpsertWithWhereUniqueWithoutChamadoInput[]
    createMany?: AnexoCreateManyChamadoInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutChamadoInput | AnexoUpdateWithWhereUniqueWithoutChamadoInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutChamadoInput | AnexoUpdateManyWithWhereWithoutChamadoInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type ChamadoCreateNestedOneWithoutAnexosInput = {
    create?: XOR<ChamadoCreateWithoutAnexosInput, ChamadoUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: ChamadoCreateOrConnectWithoutAnexosInput
    connect?: ChamadoWhereUniqueInput
  }

  export type AtivoCreateNestedOneWithoutAnexosInput = {
    create?: XOR<AtivoCreateWithoutAnexosInput, AtivoUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutAnexosInput
    connect?: AtivoWhereUniqueInput
  }

  export type AreasComunsCreateNestedOneWithoutAnexosInput = {
    create?: XOR<AreasComunsCreateWithoutAnexosInput, AreasComunsUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: AreasComunsCreateOrConnectWithoutAnexosInput
    connect?: AreasComunsWhereUniqueInput
  }

  export type ChamadoUpdateOneRequiredWithoutAnexosNestedInput = {
    create?: XOR<ChamadoCreateWithoutAnexosInput, ChamadoUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: ChamadoCreateOrConnectWithoutAnexosInput
    upsert?: ChamadoUpsertWithoutAnexosInput
    connect?: ChamadoWhereUniqueInput
    update?: XOR<XOR<ChamadoUpdateToOneWithWhereWithoutAnexosInput, ChamadoUpdateWithoutAnexosInput>, ChamadoUncheckedUpdateWithoutAnexosInput>
  }

  export type AtivoUpdateOneWithoutAnexosNestedInput = {
    create?: XOR<AtivoCreateWithoutAnexosInput, AtivoUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: AtivoCreateOrConnectWithoutAnexosInput
    upsert?: AtivoUpsertWithoutAnexosInput
    disconnect?: AtivoWhereInput | boolean
    delete?: AtivoWhereInput | boolean
    connect?: AtivoWhereUniqueInput
    update?: XOR<XOR<AtivoUpdateToOneWithWhereWithoutAnexosInput, AtivoUpdateWithoutAnexosInput>, AtivoUncheckedUpdateWithoutAnexosInput>
  }

  export type AreasComunsUpdateOneWithoutAnexosNestedInput = {
    create?: XOR<AreasComunsCreateWithoutAnexosInput, AreasComunsUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: AreasComunsCreateOrConnectWithoutAnexosInput
    upsert?: AreasComunsUpsertWithoutAnexosInput
    disconnect?: AreasComunsWhereInput | boolean
    delete?: AreasComunsWhereInput | boolean
    connect?: AreasComunsWhereUniqueInput
    update?: XOR<XOR<AreasComunsUpdateToOneWithWhereWithoutAnexosInput, AreasComunsUpdateWithoutAnexosInput>, AreasComunsUncheckedUpdateWithoutAnexosInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeFilter<$PrismaModel> | $Enums.Prioridade
  }

  export type NestedEnumEscopoFilter<$PrismaModel = never> = {
    equals?: $Enums.Escopo | EnumEscopoFieldRefInput<$PrismaModel>
    in?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    not?: NestedEnumEscopoFilter<$PrismaModel> | $Enums.Escopo
  }

  export type NestedEnumChamadoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChamadoStatus | EnumChamadoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChamadoStatusFilter<$PrismaModel> | $Enums.ChamadoStatus
  }

  export type NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel> | $Enums.Prioridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeFilter<$PrismaModel>
  }

  export type NestedEnumEscopoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Escopo | EnumEscopoFieldRefInput<$PrismaModel>
    in?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Escopo[] | ListEnumEscopoFieldRefInput<$PrismaModel>
    not?: NestedEnumEscopoWithAggregatesFilter<$PrismaModel> | $Enums.Escopo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscopoFilter<$PrismaModel>
    _max?: NestedEnumEscopoFilter<$PrismaModel>
  }

  export type NestedEnumChamadoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChamadoStatus | EnumChamadoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChamadoStatus[] | ListEnumChamadoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChamadoStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChamadoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChamadoStatusFilter<$PrismaModel>
    _max?: NestedEnumChamadoStatusFilter<$PrismaModel>
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

  export type UserCreateWithoutAceiteTermosInput = {
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelCreateNestedManyWithoutGestorInput
    chamadosCriados?: ChamadoCreateNestedManyWithoutSolicitanteInput
    chamadosDesignados?: ChamadoCreateNestedManyWithoutAssignedProviderInput
  }

  export type UserUncheckedCreateWithoutAceiteTermosInput = {
    id?: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelUncheckedCreateNestedManyWithoutGestorInput
    chamadosCriados?: ChamadoUncheckedCreateNestedManyWithoutSolicitanteInput
    chamadosDesignados?: ChamadoUncheckedCreateNestedManyWithoutAssignedProviderInput
  }

  export type UserCreateOrConnectWithoutAceiteTermosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAceiteTermosInput, UserUncheckedCreateWithoutAceiteTermosInput>
  }

  export type UserUpsertWithoutAceiteTermosInput = {
    update: XOR<UserUpdateWithoutAceiteTermosInput, UserUncheckedUpdateWithoutAceiteTermosInput>
    create: XOR<UserCreateWithoutAceiteTermosInput, UserUncheckedCreateWithoutAceiteTermosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAceiteTermosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAceiteTermosInput, UserUncheckedUpdateWithoutAceiteTermosInput>
  }

  export type UserUpdateWithoutAceiteTermosInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUpdateManyWithoutGestorNestedInput
    chamadosCriados?: ChamadoUpdateManyWithoutSolicitanteNestedInput
    chamadosDesignados?: ChamadoUpdateManyWithoutAssignedProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutAceiteTermosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUncheckedUpdateManyWithoutGestorNestedInput
    chamadosCriados?: ChamadoUncheckedUpdateManyWithoutSolicitanteNestedInput
    chamadosDesignados?: ChamadoUncheckedUpdateManyWithoutAssignedProviderNestedInput
  }

  export type ImovelCreateWithoutGestorInput = {
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ativos?: AtivoCreateNestedManyWithoutImovelInput
    chamados?: ChamadoCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsCreateNestedManyWithoutImovelInput
  }

  export type ImovelUncheckedCreateWithoutGestorInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ativos?: AtivoUncheckedCreateNestedManyWithoutImovelInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsUncheckedCreateNestedManyWithoutImovelInput
  }

  export type ImovelCreateOrConnectWithoutGestorInput = {
    where: ImovelWhereUniqueInput
    create: XOR<ImovelCreateWithoutGestorInput, ImovelUncheckedCreateWithoutGestorInput>
  }

  export type ImovelCreateManyGestorInputEnvelope = {
    data: ImovelCreateManyGestorInput | ImovelCreateManyGestorInput[]
    skipDuplicates?: boolean
  }

  export type ChamadoCreateWithoutSolicitanteInput = {
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutChamadoInput
    imovel: ImovelCreateNestedOneWithoutChamadosInput
    ativo?: AtivoCreateNestedOneWithoutChamadosInput
    assignedProvider?: UserCreateNestedOneWithoutChamadosDesignadosInput
  }

  export type ChamadoUncheckedCreateWithoutSolicitanteInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    assignedProviderId?: number | null
    anexos?: AnexoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutSolicitanteInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutSolicitanteInput, ChamadoUncheckedCreateWithoutSolicitanteInput>
  }

  export type ChamadoCreateManySolicitanteInputEnvelope = {
    data: ChamadoCreateManySolicitanteInput | ChamadoCreateManySolicitanteInput[]
    skipDuplicates?: boolean
  }

  export type ChamadoCreateWithoutAssignedProviderInput = {
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutChamadoInput
    imovel: ImovelCreateNestedOneWithoutChamadosInput
    ativo?: AtivoCreateNestedOneWithoutChamadosInput
    solicitante: UserCreateNestedOneWithoutChamadosCriadosInput
  }

  export type ChamadoUncheckedCreateWithoutAssignedProviderInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    solicitanteId: number
    anexos?: AnexoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutAssignedProviderInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutAssignedProviderInput, ChamadoUncheckedCreateWithoutAssignedProviderInput>
  }

  export type ChamadoCreateManyAssignedProviderInputEnvelope = {
    data: ChamadoCreateManyAssignedProviderInput | ChamadoCreateManyAssignedProviderInput[]
    skipDuplicates?: boolean
  }

  export type AceiteTermosCreateWithoutUserInput = {
    termoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AceiteTermosUncheckedCreateWithoutUserInput = {
    id?: number
    termoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AceiteTermosCreateOrConnectWithoutUserInput = {
    where: AceiteTermosWhereUniqueInput
    create: XOR<AceiteTermosCreateWithoutUserInput, AceiteTermosUncheckedCreateWithoutUserInput>
  }

  export type AceiteTermosCreateManyUserInputEnvelope = {
    data: AceiteTermosCreateManyUserInput | AceiteTermosCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImovelUpsertWithWhereUniqueWithoutGestorInput = {
    where: ImovelWhereUniqueInput
    update: XOR<ImovelUpdateWithoutGestorInput, ImovelUncheckedUpdateWithoutGestorInput>
    create: XOR<ImovelCreateWithoutGestorInput, ImovelUncheckedCreateWithoutGestorInput>
  }

  export type ImovelUpdateWithWhereUniqueWithoutGestorInput = {
    where: ImovelWhereUniqueInput
    data: XOR<ImovelUpdateWithoutGestorInput, ImovelUncheckedUpdateWithoutGestorInput>
  }

  export type ImovelUpdateManyWithWhereWithoutGestorInput = {
    where: ImovelScalarWhereInput
    data: XOR<ImovelUpdateManyMutationInput, ImovelUncheckedUpdateManyWithoutGestorInput>
  }

  export type ImovelScalarWhereInput = {
    AND?: ImovelScalarWhereInput | ImovelScalarWhereInput[]
    OR?: ImovelScalarWhereInput[]
    NOT?: ImovelScalarWhereInput | ImovelScalarWhereInput[]
    id?: IntFilter<"Imovel"> | number
    cep?: StringFilter<"Imovel"> | string
    endereco?: StringFilter<"Imovel"> | string
    cidade?: StringFilter<"Imovel"> | string
    uf?: StringFilter<"Imovel"> | string
    quantidade_moradias?: IntFilter<"Imovel"> | number
    createdAt?: DateTimeFilter<"Imovel"> | Date | string
    updatedAt?: DateTimeFilter<"Imovel"> | Date | string
    gestorId?: IntFilter<"Imovel"> | number
  }

  export type ChamadoUpsertWithWhereUniqueWithoutSolicitanteInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutSolicitanteInput, ChamadoUncheckedUpdateWithoutSolicitanteInput>
    create: XOR<ChamadoCreateWithoutSolicitanteInput, ChamadoUncheckedCreateWithoutSolicitanteInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutSolicitanteInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutSolicitanteInput, ChamadoUncheckedUpdateWithoutSolicitanteInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutSolicitanteInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutSolicitanteInput>
  }

  export type ChamadoScalarWhereInput = {
    AND?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
    OR?: ChamadoScalarWhereInput[]
    NOT?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
    id?: IntFilter<"Chamado"> | number
    numeroChamado?: StringFilter<"Chamado"> | string
    descricaoOcorrido?: StringFilter<"Chamado"> | string
    informacoesAdicionais?: StringNullableFilter<"Chamado"> | string | null
    prioridade?: EnumPrioridadeFilter<"Chamado"> | $Enums.Prioridade
    escopo?: EnumEscopoFilter<"Chamado"> | $Enums.Escopo
    status?: EnumChamadoStatusFilter<"Chamado"> | $Enums.ChamadoStatus
    createdAt?: DateTimeFilter<"Chamado"> | Date | string
    updatedAt?: DateTimeFilter<"Chamado"> | Date | string
    imovelId?: IntFilter<"Chamado"> | number
    ativoId?: IntNullableFilter<"Chamado"> | number | null
    solicitanteId?: IntFilter<"Chamado"> | number
    assignedProviderId?: IntNullableFilter<"Chamado"> | number | null
  }

  export type ChamadoUpsertWithWhereUniqueWithoutAssignedProviderInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutAssignedProviderInput, ChamadoUncheckedUpdateWithoutAssignedProviderInput>
    create: XOR<ChamadoCreateWithoutAssignedProviderInput, ChamadoUncheckedCreateWithoutAssignedProviderInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutAssignedProviderInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutAssignedProviderInput, ChamadoUncheckedUpdateWithoutAssignedProviderInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutAssignedProviderInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutAssignedProviderInput>
  }

  export type AceiteTermosUpsertWithWhereUniqueWithoutUserInput = {
    where: AceiteTermosWhereUniqueInput
    update: XOR<AceiteTermosUpdateWithoutUserInput, AceiteTermosUncheckedUpdateWithoutUserInput>
    create: XOR<AceiteTermosCreateWithoutUserInput, AceiteTermosUncheckedCreateWithoutUserInput>
  }

  export type AceiteTermosUpdateWithWhereUniqueWithoutUserInput = {
    where: AceiteTermosWhereUniqueInput
    data: XOR<AceiteTermosUpdateWithoutUserInput, AceiteTermosUncheckedUpdateWithoutUserInput>
  }

  export type AceiteTermosUpdateManyWithWhereWithoutUserInput = {
    where: AceiteTermosScalarWhereInput
    data: XOR<AceiteTermosUpdateManyMutationInput, AceiteTermosUncheckedUpdateManyWithoutUserInput>
  }

  export type AceiteTermosScalarWhereInput = {
    AND?: AceiteTermosScalarWhereInput | AceiteTermosScalarWhereInput[]
    OR?: AceiteTermosScalarWhereInput[]
    NOT?: AceiteTermosScalarWhereInput | AceiteTermosScalarWhereInput[]
    id?: IntFilter<"AceiteTermos"> | number
    termoUrl?: StringFilter<"AceiteTermos"> | string
    userId?: IntFilter<"AceiteTermos"> | number
    createdAt?: DateTimeFilter<"AceiteTermos"> | Date | string
    updatedAt?: DateTimeFilter<"AceiteTermos"> | Date | string
  }

  export type UserCreateWithoutImoveisInput = {
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    chamadosCriados?: ChamadoCreateNestedManyWithoutSolicitanteInput
    chamadosDesignados?: ChamadoCreateNestedManyWithoutAssignedProviderInput
    AceiteTermos?: AceiteTermosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImoveisInput = {
    id?: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    chamadosCriados?: ChamadoUncheckedCreateNestedManyWithoutSolicitanteInput
    chamadosDesignados?: ChamadoUncheckedCreateNestedManyWithoutAssignedProviderInput
    AceiteTermos?: AceiteTermosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImoveisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImoveisInput, UserUncheckedCreateWithoutImoveisInput>
  }

  export type AtivoCreateWithoutImovelInput = {
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutAtivoInput
    chamados?: ChamadoCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateWithoutImovelInput = {
    id?: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoUncheckedCreateNestedManyWithoutAtivoInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutImovelInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutImovelInput, AtivoUncheckedCreateWithoutImovelInput>
  }

  export type AtivoCreateManyImovelInputEnvelope = {
    data: AtivoCreateManyImovelInput | AtivoCreateManyImovelInput[]
    skipDuplicates?: boolean
  }

  export type ChamadoCreateWithoutImovelInput = {
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutChamadoInput
    ativo?: AtivoCreateNestedOneWithoutChamadosInput
    solicitante: UserCreateNestedOneWithoutChamadosCriadosInput
    assignedProvider?: UserCreateNestedOneWithoutChamadosDesignadosInput
  }

  export type ChamadoUncheckedCreateWithoutImovelInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ativoId?: number | null
    solicitanteId: number
    assignedProviderId?: number | null
    anexos?: AnexoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutImovelInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutImovelInput, ChamadoUncheckedCreateWithoutImovelInput>
  }

  export type ChamadoCreateManyImovelInputEnvelope = {
    data: ChamadoCreateManyImovelInput | ChamadoCreateManyImovelInput[]
    skipDuplicates?: boolean
  }

  export type AreasComunsCreateWithoutImovelInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutAreasComunsInput
  }

  export type AreasComunsUncheckedCreateWithoutImovelInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoUncheckedCreateNestedManyWithoutAreasComunsInput
  }

  export type AreasComunsCreateOrConnectWithoutImovelInput = {
    where: AreasComunsWhereUniqueInput
    create: XOR<AreasComunsCreateWithoutImovelInput, AreasComunsUncheckedCreateWithoutImovelInput>
  }

  export type AreasComunsCreateManyImovelInputEnvelope = {
    data: AreasComunsCreateManyImovelInput | AreasComunsCreateManyImovelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutImoveisInput = {
    update: XOR<UserUpdateWithoutImoveisInput, UserUncheckedUpdateWithoutImoveisInput>
    create: XOR<UserCreateWithoutImoveisInput, UserUncheckedCreateWithoutImoveisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImoveisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImoveisInput, UserUncheckedUpdateWithoutImoveisInput>
  }

  export type UserUpdateWithoutImoveisInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    chamadosCriados?: ChamadoUpdateManyWithoutSolicitanteNestedInput
    chamadosDesignados?: ChamadoUpdateManyWithoutAssignedProviderNestedInput
    AceiteTermos?: AceiteTermosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImoveisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    chamadosCriados?: ChamadoUncheckedUpdateManyWithoutSolicitanteNestedInput
    chamadosDesignados?: ChamadoUncheckedUpdateManyWithoutAssignedProviderNestedInput
    AceiteTermos?: AceiteTermosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AtivoUpsertWithWhereUniqueWithoutImovelInput = {
    where: AtivoWhereUniqueInput
    update: XOR<AtivoUpdateWithoutImovelInput, AtivoUncheckedUpdateWithoutImovelInput>
    create: XOR<AtivoCreateWithoutImovelInput, AtivoUncheckedCreateWithoutImovelInput>
  }

  export type AtivoUpdateWithWhereUniqueWithoutImovelInput = {
    where: AtivoWhereUniqueInput
    data: XOR<AtivoUpdateWithoutImovelInput, AtivoUncheckedUpdateWithoutImovelInput>
  }

  export type AtivoUpdateManyWithWhereWithoutImovelInput = {
    where: AtivoScalarWhereInput
    data: XOR<AtivoUpdateManyMutationInput, AtivoUncheckedUpdateManyWithoutImovelInput>
  }

  export type AtivoScalarWhereInput = {
    AND?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
    OR?: AtivoScalarWhereInput[]
    NOT?: AtivoScalarWhereInput | AtivoScalarWhereInput[]
    id?: IntFilter<"Ativo"> | number
    assetCode?: StringFilter<"Ativo"> | string
    descricaoAtivo?: StringFilter<"Ativo"> | string
    localInstalacao?: StringFilter<"Ativo"> | string
    marca?: StringNullableFilter<"Ativo"> | string | null
    modelo?: StringNullableFilter<"Ativo"> | string | null
    dataInstalacao?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    valorCompra?: DecimalNullableFilter<"Ativo"> | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFilter<"Ativo"> | boolean
    garantiaValidade?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    contratoManutencao?: BoolFilter<"Ativo"> | boolean
    contratoValidade?: DateTimeNullableFilter<"Ativo"> | Date | string | null
    createdAt?: DateTimeFilter<"Ativo"> | Date | string
    updatedAt?: DateTimeFilter<"Ativo"> | Date | string
    imovelId?: IntFilter<"Ativo"> | number
  }

  export type ChamadoUpsertWithWhereUniqueWithoutImovelInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutImovelInput, ChamadoUncheckedUpdateWithoutImovelInput>
    create: XOR<ChamadoCreateWithoutImovelInput, ChamadoUncheckedCreateWithoutImovelInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutImovelInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutImovelInput, ChamadoUncheckedUpdateWithoutImovelInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutImovelInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutImovelInput>
  }

  export type AreasComunsUpsertWithWhereUniqueWithoutImovelInput = {
    where: AreasComunsWhereUniqueInput
    update: XOR<AreasComunsUpdateWithoutImovelInput, AreasComunsUncheckedUpdateWithoutImovelInput>
    create: XOR<AreasComunsCreateWithoutImovelInput, AreasComunsUncheckedCreateWithoutImovelInput>
  }

  export type AreasComunsUpdateWithWhereUniqueWithoutImovelInput = {
    where: AreasComunsWhereUniqueInput
    data: XOR<AreasComunsUpdateWithoutImovelInput, AreasComunsUncheckedUpdateWithoutImovelInput>
  }

  export type AreasComunsUpdateManyWithWhereWithoutImovelInput = {
    where: AreasComunsScalarWhereInput
    data: XOR<AreasComunsUpdateManyMutationInput, AreasComunsUncheckedUpdateManyWithoutImovelInput>
  }

  export type AreasComunsScalarWhereInput = {
    AND?: AreasComunsScalarWhereInput | AreasComunsScalarWhereInput[]
    OR?: AreasComunsScalarWhereInput[]
    NOT?: AreasComunsScalarWhereInput | AreasComunsScalarWhereInput[]
    id?: IntFilter<"AreasComuns"> | number
    nome?: StringFilter<"AreasComuns"> | string
    descricao?: StringNullableFilter<"AreasComuns"> | string | null
    createdAt?: DateTimeFilter<"AreasComuns"> | Date | string
    updatedAt?: DateTimeFilter<"AreasComuns"> | Date | string
    imovelId?: IntFilter<"AreasComuns"> | number
  }

  export type AnexoCreateWithoutAreasComunsInput = {
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chamado: ChamadoCreateNestedOneWithoutAnexosInput
    Ativo?: AtivoCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateWithoutAreasComunsInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chamadoId: number
    ativoId?: number | null
  }

  export type AnexoCreateOrConnectWithoutAreasComunsInput = {
    where: AnexoWhereUniqueInput
    create: XOR<AnexoCreateWithoutAreasComunsInput, AnexoUncheckedCreateWithoutAreasComunsInput>
  }

  export type AnexoCreateManyAreasComunsInputEnvelope = {
    data: AnexoCreateManyAreasComunsInput | AnexoCreateManyAreasComunsInput[]
    skipDuplicates?: boolean
  }

  export type ImovelCreateWithoutAreasComunsInput = {
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestor: UserCreateNestedOneWithoutImoveisInput
    ativos?: AtivoCreateNestedManyWithoutImovelInput
    chamados?: ChamadoCreateNestedManyWithoutImovelInput
  }

  export type ImovelUncheckedCreateWithoutAreasComunsInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestorId: number
    ativos?: AtivoUncheckedCreateNestedManyWithoutImovelInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutImovelInput
  }

  export type ImovelCreateOrConnectWithoutAreasComunsInput = {
    where: ImovelWhereUniqueInput
    create: XOR<ImovelCreateWithoutAreasComunsInput, ImovelUncheckedCreateWithoutAreasComunsInput>
  }

  export type AnexoUpsertWithWhereUniqueWithoutAreasComunsInput = {
    where: AnexoWhereUniqueInput
    update: XOR<AnexoUpdateWithoutAreasComunsInput, AnexoUncheckedUpdateWithoutAreasComunsInput>
    create: XOR<AnexoCreateWithoutAreasComunsInput, AnexoUncheckedCreateWithoutAreasComunsInput>
  }

  export type AnexoUpdateWithWhereUniqueWithoutAreasComunsInput = {
    where: AnexoWhereUniqueInput
    data: XOR<AnexoUpdateWithoutAreasComunsInput, AnexoUncheckedUpdateWithoutAreasComunsInput>
  }

  export type AnexoUpdateManyWithWhereWithoutAreasComunsInput = {
    where: AnexoScalarWhereInput
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyWithoutAreasComunsInput>
  }

  export type AnexoScalarWhereInput = {
    AND?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
    OR?: AnexoScalarWhereInput[]
    NOT?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
    id?: IntFilter<"Anexo"> | number
    url?: StringFilter<"Anexo"> | string
    title?: StringNullableFilter<"Anexo"> | string | null
    createdAt?: DateTimeFilter<"Anexo"> | Date | string
    updatedAt?: DateTimeFilter<"Anexo"> | Date | string
    chamadoId?: IntFilter<"Anexo"> | number
    ativoId?: IntNullableFilter<"Anexo"> | number | null
    areasComunsId?: IntNullableFilter<"Anexo"> | number | null
  }

  export type ImovelUpsertWithoutAreasComunsInput = {
    update: XOR<ImovelUpdateWithoutAreasComunsInput, ImovelUncheckedUpdateWithoutAreasComunsInput>
    create: XOR<ImovelCreateWithoutAreasComunsInput, ImovelUncheckedCreateWithoutAreasComunsInput>
    where?: ImovelWhereInput
  }

  export type ImovelUpdateToOneWithWhereWithoutAreasComunsInput = {
    where?: ImovelWhereInput
    data: XOR<ImovelUpdateWithoutAreasComunsInput, ImovelUncheckedUpdateWithoutAreasComunsInput>
  }

  export type ImovelUpdateWithoutAreasComunsInput = {
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestor?: UserUpdateOneRequiredWithoutImoveisNestedInput
    ativos?: AtivoUpdateManyWithoutImovelNestedInput
    chamados?: ChamadoUpdateManyWithoutImovelNestedInput
  }

  export type ImovelUncheckedUpdateWithoutAreasComunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestorId?: IntFieldUpdateOperationsInput | number
    ativos?: AtivoUncheckedUpdateManyWithoutImovelNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type AnexoCreateWithoutAtivoInput = {
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chamado: ChamadoCreateNestedOneWithoutAnexosInput
    AreasComuns?: AreasComunsCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateWithoutAtivoInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chamadoId: number
    areasComunsId?: number | null
  }

  export type AnexoCreateOrConnectWithoutAtivoInput = {
    where: AnexoWhereUniqueInput
    create: XOR<AnexoCreateWithoutAtivoInput, AnexoUncheckedCreateWithoutAtivoInput>
  }

  export type AnexoCreateManyAtivoInputEnvelope = {
    data: AnexoCreateManyAtivoInput | AnexoCreateManyAtivoInput[]
    skipDuplicates?: boolean
  }

  export type ImovelCreateWithoutAtivosInput = {
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestor: UserCreateNestedOneWithoutImoveisInput
    chamados?: ChamadoCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsCreateNestedManyWithoutImovelInput
  }

  export type ImovelUncheckedCreateWithoutAtivosInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestorId: number
    chamados?: ChamadoUncheckedCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsUncheckedCreateNestedManyWithoutImovelInput
  }

  export type ImovelCreateOrConnectWithoutAtivosInput = {
    where: ImovelWhereUniqueInput
    create: XOR<ImovelCreateWithoutAtivosInput, ImovelUncheckedCreateWithoutAtivosInput>
  }

  export type ChamadoCreateWithoutAtivoInput = {
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutChamadoInput
    imovel: ImovelCreateNestedOneWithoutChamadosInput
    solicitante: UserCreateNestedOneWithoutChamadosCriadosInput
    assignedProvider?: UserCreateNestedOneWithoutChamadosDesignadosInput
  }

  export type ChamadoUncheckedCreateWithoutAtivoInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    solicitanteId: number
    assignedProviderId?: number | null
    anexos?: AnexoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutAtivoInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutAtivoInput, ChamadoUncheckedCreateWithoutAtivoInput>
  }

  export type ChamadoCreateManyAtivoInputEnvelope = {
    data: ChamadoCreateManyAtivoInput | ChamadoCreateManyAtivoInput[]
    skipDuplicates?: boolean
  }

  export type AnexoUpsertWithWhereUniqueWithoutAtivoInput = {
    where: AnexoWhereUniqueInput
    update: XOR<AnexoUpdateWithoutAtivoInput, AnexoUncheckedUpdateWithoutAtivoInput>
    create: XOR<AnexoCreateWithoutAtivoInput, AnexoUncheckedCreateWithoutAtivoInput>
  }

  export type AnexoUpdateWithWhereUniqueWithoutAtivoInput = {
    where: AnexoWhereUniqueInput
    data: XOR<AnexoUpdateWithoutAtivoInput, AnexoUncheckedUpdateWithoutAtivoInput>
  }

  export type AnexoUpdateManyWithWhereWithoutAtivoInput = {
    where: AnexoScalarWhereInput
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyWithoutAtivoInput>
  }

  export type ImovelUpsertWithoutAtivosInput = {
    update: XOR<ImovelUpdateWithoutAtivosInput, ImovelUncheckedUpdateWithoutAtivosInput>
    create: XOR<ImovelCreateWithoutAtivosInput, ImovelUncheckedCreateWithoutAtivosInput>
    where?: ImovelWhereInput
  }

  export type ImovelUpdateToOneWithWhereWithoutAtivosInput = {
    where?: ImovelWhereInput
    data: XOR<ImovelUpdateWithoutAtivosInput, ImovelUncheckedUpdateWithoutAtivosInput>
  }

  export type ImovelUpdateWithoutAtivosInput = {
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestor?: UserUpdateOneRequiredWithoutImoveisNestedInput
    chamados?: ChamadoUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUpdateManyWithoutImovelNestedInput
  }

  export type ImovelUncheckedUpdateWithoutAtivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestorId?: IntFieldUpdateOperationsInput | number
    chamados?: ChamadoUncheckedUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type ChamadoUpsertWithWhereUniqueWithoutAtivoInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutAtivoInput, ChamadoUncheckedUpdateWithoutAtivoInput>
    create: XOR<ChamadoCreateWithoutAtivoInput, ChamadoUncheckedCreateWithoutAtivoInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutAtivoInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutAtivoInput, ChamadoUncheckedUpdateWithoutAtivoInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutAtivoInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutAtivoInput>
  }

  export type AnexoCreateWithoutChamadoInput = {
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Ativo?: AtivoCreateNestedOneWithoutAnexosInput
    AreasComuns?: AreasComunsCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateWithoutChamadoInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ativoId?: number | null
    areasComunsId?: number | null
  }

  export type AnexoCreateOrConnectWithoutChamadoInput = {
    where: AnexoWhereUniqueInput
    create: XOR<AnexoCreateWithoutChamadoInput, AnexoUncheckedCreateWithoutChamadoInput>
  }

  export type AnexoCreateManyChamadoInputEnvelope = {
    data: AnexoCreateManyChamadoInput | AnexoCreateManyChamadoInput[]
    skipDuplicates?: boolean
  }

  export type ImovelCreateWithoutChamadosInput = {
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestor: UserCreateNestedOneWithoutImoveisInput
    ativos?: AtivoCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsCreateNestedManyWithoutImovelInput
  }

  export type ImovelUncheckedCreateWithoutChamadosInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gestorId: number
    ativos?: AtivoUncheckedCreateNestedManyWithoutImovelInput
    areasComuns?: AreasComunsUncheckedCreateNestedManyWithoutImovelInput
  }

  export type ImovelCreateOrConnectWithoutChamadosInput = {
    where: ImovelWhereUniqueInput
    create: XOR<ImovelCreateWithoutChamadosInput, ImovelUncheckedCreateWithoutChamadosInput>
  }

  export type AtivoCreateWithoutChamadosInput = {
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anexos?: AnexoCreateNestedManyWithoutAtivoInput
    imovel: ImovelCreateNestedOneWithoutAtivosInput
  }

  export type AtivoUncheckedCreateWithoutChamadosInput = {
    id?: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    anexos?: AnexoUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutChamadosInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutChamadosInput, AtivoUncheckedCreateWithoutChamadosInput>
  }

  export type UserCreateWithoutChamadosCriadosInput = {
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelCreateNestedManyWithoutGestorInput
    chamadosDesignados?: ChamadoCreateNestedManyWithoutAssignedProviderInput
    AceiteTermos?: AceiteTermosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChamadosCriadosInput = {
    id?: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelUncheckedCreateNestedManyWithoutGestorInput
    chamadosDesignados?: ChamadoUncheckedCreateNestedManyWithoutAssignedProviderInput
    AceiteTermos?: AceiteTermosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChamadosCriadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChamadosCriadosInput, UserUncheckedCreateWithoutChamadosCriadosInput>
  }

  export type UserCreateWithoutChamadosDesignadosInput = {
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelCreateNestedManyWithoutGestorInput
    chamadosCriados?: ChamadoCreateNestedManyWithoutSolicitanteInput
    AceiteTermos?: AceiteTermosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChamadosDesignadosInput = {
    id?: number
    name: string
    cpfCnpj: string
    whatsapp: string
    email: string
    password: string
    userType: $Enums.UserType
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.UserStatus
    periodoMandatoInicio?: Date | string | null
    periodoMandatoFim?: Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: string | null
    razaoSocial?: string | null
    cep?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    imoveis?: ImovelUncheckedCreateNestedManyWithoutGestorInput
    chamadosCriados?: ChamadoUncheckedCreateNestedManyWithoutSolicitanteInput
    AceiteTermos?: AceiteTermosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChamadosDesignadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChamadosDesignadosInput, UserUncheckedCreateWithoutChamadosDesignadosInput>
  }

  export type AnexoUpsertWithWhereUniqueWithoutChamadoInput = {
    where: AnexoWhereUniqueInput
    update: XOR<AnexoUpdateWithoutChamadoInput, AnexoUncheckedUpdateWithoutChamadoInput>
    create: XOR<AnexoCreateWithoutChamadoInput, AnexoUncheckedCreateWithoutChamadoInput>
  }

  export type AnexoUpdateWithWhereUniqueWithoutChamadoInput = {
    where: AnexoWhereUniqueInput
    data: XOR<AnexoUpdateWithoutChamadoInput, AnexoUncheckedUpdateWithoutChamadoInput>
  }

  export type AnexoUpdateManyWithWhereWithoutChamadoInput = {
    where: AnexoScalarWhereInput
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyWithoutChamadoInput>
  }

  export type ImovelUpsertWithoutChamadosInput = {
    update: XOR<ImovelUpdateWithoutChamadosInput, ImovelUncheckedUpdateWithoutChamadosInput>
    create: XOR<ImovelCreateWithoutChamadosInput, ImovelUncheckedCreateWithoutChamadosInput>
    where?: ImovelWhereInput
  }

  export type ImovelUpdateToOneWithWhereWithoutChamadosInput = {
    where?: ImovelWhereInput
    data: XOR<ImovelUpdateWithoutChamadosInput, ImovelUncheckedUpdateWithoutChamadosInput>
  }

  export type ImovelUpdateWithoutChamadosInput = {
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestor?: UserUpdateOneRequiredWithoutImoveisNestedInput
    ativos?: AtivoUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUpdateManyWithoutImovelNestedInput
  }

  export type ImovelUncheckedUpdateWithoutChamadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gestorId?: IntFieldUpdateOperationsInput | number
    ativos?: AtivoUncheckedUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type AtivoUpsertWithoutChamadosInput = {
    update: XOR<AtivoUpdateWithoutChamadosInput, AtivoUncheckedUpdateWithoutChamadosInput>
    create: XOR<AtivoCreateWithoutChamadosInput, AtivoUncheckedCreateWithoutChamadosInput>
    where?: AtivoWhereInput
  }

  export type AtivoUpdateToOneWithWhereWithoutChamadosInput = {
    where?: AtivoWhereInput
    data: XOR<AtivoUpdateWithoutChamadosInput, AtivoUncheckedUpdateWithoutChamadosInput>
  }

  export type AtivoUpdateWithoutChamadosInput = {
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutAtivoNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutAtivosNestedInput
  }

  export type AtivoUncheckedUpdateWithoutChamadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    anexos?: AnexoUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type UserUpsertWithoutChamadosCriadosInput = {
    update: XOR<UserUpdateWithoutChamadosCriadosInput, UserUncheckedUpdateWithoutChamadosCriadosInput>
    create: XOR<UserCreateWithoutChamadosCriadosInput, UserUncheckedCreateWithoutChamadosCriadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChamadosCriadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChamadosCriadosInput, UserUncheckedUpdateWithoutChamadosCriadosInput>
  }

  export type UserUpdateWithoutChamadosCriadosInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUpdateManyWithoutGestorNestedInput
    chamadosDesignados?: ChamadoUpdateManyWithoutAssignedProviderNestedInput
    AceiteTermos?: AceiteTermosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChamadosCriadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUncheckedUpdateManyWithoutGestorNestedInput
    chamadosDesignados?: ChamadoUncheckedUpdateManyWithoutAssignedProviderNestedInput
    AceiteTermos?: AceiteTermosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutChamadosDesignadosInput = {
    update: XOR<UserUpdateWithoutChamadosDesignadosInput, UserUncheckedUpdateWithoutChamadosDesignadosInput>
    create: XOR<UserCreateWithoutChamadosDesignadosInput, UserUncheckedCreateWithoutChamadosDesignadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChamadosDesignadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChamadosDesignadosInput, UserUncheckedUpdateWithoutChamadosDesignadosInput>
  }

  export type UserUpdateWithoutChamadosDesignadosInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUpdateManyWithoutGestorNestedInput
    chamadosCriados?: ChamadoUpdateManyWithoutSolicitanteNestedInput
    AceiteTermos?: AceiteTermosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChamadosDesignadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    periodoMandatoInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodoMandatoFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsindicoInfo?: NullableJsonNullValueInput | InputJsonValue
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    razaoSocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    imoveis?: ImovelUncheckedUpdateManyWithoutGestorNestedInput
    chamadosCriados?: ChamadoUncheckedUpdateManyWithoutSolicitanteNestedInput
    AceiteTermos?: AceiteTermosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChamadoCreateWithoutAnexosInput = {
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovel: ImovelCreateNestedOneWithoutChamadosInput
    ativo?: AtivoCreateNestedOneWithoutChamadosInput
    solicitante: UserCreateNestedOneWithoutChamadosCriadosInput
    assignedProvider?: UserCreateNestedOneWithoutChamadosDesignadosInput
  }

  export type ChamadoUncheckedCreateWithoutAnexosInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    solicitanteId: number
    assignedProviderId?: number | null
  }

  export type ChamadoCreateOrConnectWithoutAnexosInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutAnexosInput, ChamadoUncheckedCreateWithoutAnexosInput>
  }

  export type AtivoCreateWithoutAnexosInput = {
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovel: ImovelCreateNestedOneWithoutAtivosInput
    chamados?: ChamadoCreateNestedManyWithoutAtivoInput
  }

  export type AtivoUncheckedCreateWithoutAnexosInput = {
    id?: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    chamados?: ChamadoUncheckedCreateNestedManyWithoutAtivoInput
  }

  export type AtivoCreateOrConnectWithoutAnexosInput = {
    where: AtivoWhereUniqueInput
    create: XOR<AtivoCreateWithoutAnexosInput, AtivoUncheckedCreateWithoutAnexosInput>
  }

  export type AreasComunsCreateWithoutAnexosInput = {
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovel: ImovelCreateNestedOneWithoutAreasComunsInput
  }

  export type AreasComunsUncheckedCreateWithoutAnexosInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
  }

  export type AreasComunsCreateOrConnectWithoutAnexosInput = {
    where: AreasComunsWhereUniqueInput
    create: XOR<AreasComunsCreateWithoutAnexosInput, AreasComunsUncheckedCreateWithoutAnexosInput>
  }

  export type ChamadoUpsertWithoutAnexosInput = {
    update: XOR<ChamadoUpdateWithoutAnexosInput, ChamadoUncheckedUpdateWithoutAnexosInput>
    create: XOR<ChamadoCreateWithoutAnexosInput, ChamadoUncheckedCreateWithoutAnexosInput>
    where?: ChamadoWhereInput
  }

  export type ChamadoUpdateToOneWithWhereWithoutAnexosInput = {
    where?: ChamadoWhereInput
    data: XOR<ChamadoUpdateWithoutAnexosInput, ChamadoUncheckedUpdateWithoutAnexosInput>
  }

  export type ChamadoUpdateWithoutAnexosInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovel?: ImovelUpdateOneRequiredWithoutChamadosNestedInput
    ativo?: AtivoUpdateOneWithoutChamadosNestedInput
    solicitante?: UserUpdateOneRequiredWithoutChamadosCriadosNestedInput
    assignedProvider?: UserUpdateOneWithoutChamadosDesignadosNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutAnexosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AtivoUpsertWithoutAnexosInput = {
    update: XOR<AtivoUpdateWithoutAnexosInput, AtivoUncheckedUpdateWithoutAnexosInput>
    create: XOR<AtivoCreateWithoutAnexosInput, AtivoUncheckedCreateWithoutAnexosInput>
    where?: AtivoWhereInput
  }

  export type AtivoUpdateToOneWithWhereWithoutAnexosInput = {
    where?: AtivoWhereInput
    data: XOR<AtivoUpdateWithoutAnexosInput, AtivoUncheckedUpdateWithoutAnexosInput>
  }

  export type AtivoUpdateWithoutAnexosInput = {
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovel?: ImovelUpdateOneRequiredWithoutAtivosNestedInput
    chamados?: ChamadoUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateWithoutAnexosInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    chamados?: ChamadoUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AreasComunsUpsertWithoutAnexosInput = {
    update: XOR<AreasComunsUpdateWithoutAnexosInput, AreasComunsUncheckedUpdateWithoutAnexosInput>
    create: XOR<AreasComunsCreateWithoutAnexosInput, AreasComunsUncheckedCreateWithoutAnexosInput>
    where?: AreasComunsWhereInput
  }

  export type AreasComunsUpdateToOneWithWhereWithoutAnexosInput = {
    where?: AreasComunsWhereInput
    data: XOR<AreasComunsUpdateWithoutAnexosInput, AreasComunsUncheckedUpdateWithoutAnexosInput>
  }

  export type AreasComunsUpdateWithoutAnexosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovel?: ImovelUpdateOneRequiredWithoutAreasComunsNestedInput
  }

  export type AreasComunsUncheckedUpdateWithoutAnexosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
  }

  export type ImovelCreateManyGestorInput = {
    id?: number
    cep: string
    endereco: string
    cidade: string
    uf: string
    quantidade_moradias: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChamadoCreateManySolicitanteInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    assignedProviderId?: number | null
  }

  export type ChamadoCreateManyAssignedProviderInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    ativoId?: number | null
    solicitanteId: number
  }

  export type AceiteTermosCreateManyUserInput = {
    id?: number
    termoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImovelUpdateWithoutGestorInput = {
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativos?: AtivoUpdateManyWithoutImovelNestedInput
    chamados?: ChamadoUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUpdateManyWithoutImovelNestedInput
  }

  export type ImovelUncheckedUpdateWithoutGestorInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativos?: AtivoUncheckedUpdateManyWithoutImovelNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutImovelNestedInput
    areasComuns?: AreasComunsUncheckedUpdateManyWithoutImovelNestedInput
  }

  export type ImovelUncheckedUpdateManyWithoutGestorInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    quantidade_moradias?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChamadoUpdateWithoutSolicitanteInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutChamadoNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutChamadosNestedInput
    ativo?: AtivoUpdateOneWithoutChamadosNestedInput
    assignedProvider?: UserUpdateOneWithoutChamadosDesignadosNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutSolicitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
    anexos?: AnexoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutSolicitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChamadoUpdateWithoutAssignedProviderInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutChamadoNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutChamadosNestedInput
    ativo?: AtivoUpdateOneWithoutChamadosNestedInput
    solicitante?: UserUpdateOneRequiredWithoutChamadosCriadosNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutAssignedProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
    anexos?: AnexoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutAssignedProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
  }

  export type AceiteTermosUpdateWithoutUserInput = {
    termoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AceiteTermosUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    termoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AceiteTermosUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    termoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtivoCreateManyImovelInput = {
    id?: number
    assetCode: string
    descricaoAtivo: string
    localInstalacao: string
    marca?: string | null
    modelo?: string | null
    dataInstalacao?: Date | string | null
    valorCompra?: Decimal | DecimalJsLike | number | string | null
    garantia?: boolean
    garantiaValidade?: Date | string | null
    contratoManutencao?: boolean
    contratoValidade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChamadoCreateManyImovelInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ativoId?: number | null
    solicitanteId: number
    assignedProviderId?: number | null
  }

  export type AreasComunsCreateManyImovelInput = {
    id?: number
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtivoUpdateWithoutImovelInput = {
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutAtivoNestedInput
    chamados?: ChamadoUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUncheckedUpdateManyWithoutAtivoNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutAtivoNestedInput
  }

  export type AtivoUncheckedUpdateManyWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetCode?: StringFieldUpdateOperationsInput | string
    descricaoAtivo?: StringFieldUpdateOperationsInput | string
    localInstalacao?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    dataInstalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorCompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    garantia?: BoolFieldUpdateOperationsInput | boolean
    garantiaValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contratoManutencao?: BoolFieldUpdateOperationsInput | boolean
    contratoValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChamadoUpdateWithoutImovelInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutChamadoNestedInput
    ativo?: AtivoUpdateOneWithoutChamadosNestedInput
    solicitante?: UserUpdateOneRequiredWithoutChamadosCriadosNestedInput
    assignedProvider?: UserUpdateOneWithoutChamadosDesignadosNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
    anexos?: AnexoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AreasComunsUpdateWithoutImovelInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutAreasComunsNestedInput
  }

  export type AreasComunsUncheckedUpdateWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUncheckedUpdateManyWithoutAreasComunsNestedInput
  }

  export type AreasComunsUncheckedUpdateManyWithoutImovelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoCreateManyAreasComunsInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chamadoId: number
    ativoId?: number | null
  }

  export type AnexoUpdateWithoutAreasComunsInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chamado?: ChamadoUpdateOneRequiredWithoutAnexosNestedInput
    Ativo?: AtivoUpdateOneWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateWithoutAreasComunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoUncheckedUpdateManyWithoutAreasComunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoCreateManyAtivoInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chamadoId: number
    areasComunsId?: number | null
  }

  export type ChamadoCreateManyAtivoInput = {
    id?: number
    numeroChamado: string
    descricaoOcorrido: string
    informacoesAdicionais?: string | null
    prioridade: $Enums.Prioridade
    escopo: $Enums.Escopo
    status?: $Enums.ChamadoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    imovelId: number
    solicitanteId: number
    assignedProviderId?: number | null
  }

  export type AnexoUpdateWithoutAtivoInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chamado?: ChamadoUpdateOneRequiredWithoutAnexosNestedInput
    AreasComuns?: AreasComunsUpdateOneWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
    areasComunsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoUncheckedUpdateManyWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
    areasComunsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChamadoUpdateWithoutAtivoInput = {
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUpdateManyWithoutChamadoNestedInput
    imovel?: ImovelUpdateOneRequiredWithoutChamadosNestedInput
    solicitante?: UserUpdateOneRequiredWithoutChamadosCriadosNestedInput
    assignedProvider?: UserUpdateOneWithoutChamadosDesignadosNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
    anexos?: AnexoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutAtivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroChamado?: StringFieldUpdateOperationsInput | string
    descricaoOcorrido?: StringFieldUpdateOperationsInput | string
    informacoesAdicionais?: NullableStringFieldUpdateOperationsInput | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    escopo?: EnumEscopoFieldUpdateOperationsInput | $Enums.Escopo
    status?: EnumChamadoStatusFieldUpdateOperationsInput | $Enums.ChamadoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imovelId?: IntFieldUpdateOperationsInput | number
    solicitanteId?: IntFieldUpdateOperationsInput | number
    assignedProviderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoCreateManyChamadoInput = {
    id?: number
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ativoId?: number | null
    areasComunsId?: number | null
  }

  export type AnexoUpdateWithoutChamadoInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ativo?: AtivoUpdateOneWithoutAnexosNestedInput
    AreasComuns?: AreasComunsUpdateOneWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateWithoutChamadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    areasComunsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnexoUncheckedUpdateManyWithoutChamadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativoId?: NullableIntFieldUpdateOperationsInput | number | null
    areasComunsId?: NullableIntFieldUpdateOperationsInput | number | null
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