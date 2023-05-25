export function inject(service, dependencies) {
  const resolvedDependencies = dependencies.map((Dependency) => new Dependency());
  return new service(...resolvedDependencies);
}