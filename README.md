# Dependencies Injector (deps-injector)

## Both `factory` and `inject` methods receives a consumer/dependent class and an array of its dependencies classes and then instantiates the consumer/dependent class injecting the classes passed as dependencies. All the dependencies must be classes. The method `factory` is good for quick use while `inject` is good for testing and more flexible stuff.

### Method: factory
```typescript
import { UsersRepository } from './users.repository'
import { AuthenticateService } from './authenticate.service'

import { inject } from 'deps-injector'

const authService = factory(AuthenticateService, [UsersRepository])
```

### Method: inject
```typescript
import { UsersRepository } from './users.repository'
import { AuthenticateService } from './authenticate.service'

import { inject } from 'deps-injector'

const [ authService, authServiceDeps ] = inject(AuthenticateService, [UsersRepository])

const user = authService.execute({ name: 'john', email: 'john@gmail.com'})
const [ userRepository ] = authServiceDeps

await userRepository.deleteById(user.id)
```