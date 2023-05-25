type InstanceToConstructor<A> = {
  [K in keyof A]: A[K] extends infer U
    ? U extends object
      ? new (...args: any) => U
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
 * import { EquipmentsRepository } from './equipment.repository'
 * import { OperatorsRepository } from './operators.repository'
 * import { AuthenticateOperatorService } from './authenticate-operator.service'
 *
 * import { inject } from 'deps-injector'
 *
 * export function AuthenticateOperatorServiceFactory() {
 * const authenticateOperatorService = inject(AuthenticateOperatorService, [OperatorsRepository, EquipmentsRepository])
 * 	return authenticateOperatorService
 * }
 * ```
 */

export declare function inject<T extends new (...args: ConstructorParameters<T>) => any>(
  service: T,
  dependencies: InstanceToConstructor<ConstructorParameters<T>>,
): InstanceType<T>;
