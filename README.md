# Dependencies Injector (deps-injector)

### Both `factory` and `inject` methods receives a consumer/dependent class, its dependencies classes/instances as the following arguments and then instantiates the consumer/dependent class (if necessary) injecting the classes passed as dependencies. All the dependencies must be classes or instances of classes. The method `factory` is good for quick use while `inject` is good for testing and more flexible stuff.

### Method: factory
```typescript
import { UsersRepository } from './users.repository'
import { AuthenticateService } from './authenticate.service'

import { inject } from 'deps-injector'

const authService = factory(AuthenticateService, UsersRepository)
```

### Method: inject
```typescript
import { UsersRepository } from './users.repository'
import { AuthenticateService } from './authenticate.service'

import { inject } from 'deps-injector'

const [ authService, [userRepo] ] = inject(AuthenticateService, UsersRepository)

const user = authService.execute({ name: 'john', email: 'john@gmail.com'})
await userRepo.deleteById(user.id)
```