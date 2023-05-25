```typescript
import { UsersRepository } from './users.repository'
import { AuthenticateService } from './authenticate-operator.service'

import { inject } from 'deps-injector'

const authenticateService = inject(AuthenticateService, [UsersRepository])
```