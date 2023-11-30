function instanciate_dependencies(deps) {
	return deps.map((Dep) => {
		const is_class = Dep.hasOwnProperty("name")
		if (is_class) return new Dep()
		return Dep;
	})
}

function factory(service, ...dependencies) {
	const resolvedDependencies = instanciate_dependencies(dependencies);
	return new service(...resolvedDependencies);
}

function inject(service, ...dependencies) {
	const resolvedDependencies = instanciate_dependencies(dependencies);
	return [new service(...resolvedDependencies), resolvedDependencies];
}

module.exports = {
	factory,
	inject
}