export function inject(Service, dependencies) {
  const resolvedDependencies = dependencies.map((Dependency) => new Dependency());
  return new Service(...resolvedDependencies);
}