type InstanceToConstructor<A> = {
  [K in keyof A]: A[K] extends infer U
    ? U extends object
      ? (new (...args: any) => U) | U
      : never
    : never;
};

/**
 * @param service A non-instatiated class
 * @param dependencies An array of non-instantiated classes that are dependencies of the service
 * 
 * Example:
 * 
 * ```
 * import { UsersRepository } from './users.repository'
 * import { AuthenticateService } from './authenticate.service'
 *
 * import { inject } from 'deps-injector'
 *
 * const authService = factory(AuthenticateService, [UserRepository])
 * ```
 */

export declare function factory<T extends new (...args: ConstructorParameters<T>) => any>(
  service: T,
  dependencies: InstanceToConstructor<ConstructorParameters<T>>,
): InstanceType<T>;

/**
 * @param service A non-instatiated class
 * @param dependencies An array of non-instantiated classes that are dependencies of the service
 * 
 * Example:
 * 
 * ```
 * import { UsersRepository } from './users.repository'
 * import { AuthenticateService } from './authenticate.service'
 *
 * import { inject } from 'deps-injector'
 *
 * const [ authService, [userRepo] ] = inject(AuthenticateService, [UserRepository])
 * 
 * const user = authService.execute({ name: 'john', email: 'john@gmail.com'})
 * await userRepo.deleteById(user.id)
 * ```
 */

export declare function inject<T extends new (...args: ConstructorParameters<T>) => any>(
  service: T,
  dependencies: InstanceToConstructor<ConstructorParameters<T>>,
): [InstanceType<T>, ConstructorParameters<T>]

