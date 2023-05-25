type InstanceToConstructor<A> = {
  [K in keyof A]: A[K] extends infer U
    ? U extends object
      ? new (...args: any) => U
      : never
    : never;
};

export declare function inject<T extends new (...args: ConstructorParameters<T>) => any>(
  Service: T,
  dependencies: InstanceToConstructor<ConstructorParameters<T>>,
): InstanceType<T>;
