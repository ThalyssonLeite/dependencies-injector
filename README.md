# Dependencies Injector (deps-injector)

### Both `factory` and `inject` methods receives a consumer/dependent class and the second argument is as an array of its dependencies classes/instances. After it then instantiates the consumer/dependent class (if necessary) injecting the classes passed as dependencies. All the dependencies must be classes or instances of classes. The method `factory` is good for quick use while `inject` is good for testing and more flexible stuff.

### Method: factory
```typescript
import { UserRepository } from './user.repository'
import { AuthenticateService } from './authenticate.service'

import { inject } from 'deps-injector'

const authService = factory(AuthenticateService, UserRepository)
```

### Method: inject
```typescript
import { UserRepository } from './user.repository'
import { AuthenticateService } from './authenticate.service'

import { inject } from 'deps-injector'

const [ authService, [userRepo] ] = inject(AuthenticateService, UserRepository)

const user = authService.execute({ name: 'john', email: 'john@gmail.com'})
await userRepo.deleteById(user.id)
```