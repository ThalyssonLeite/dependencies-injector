export function factoryFactory(Service, dependencies) {
  const resolvedDependencies = dependencies.map((Dependency) => new Dependency());
  return new Service(...resolvedDependencies);
}