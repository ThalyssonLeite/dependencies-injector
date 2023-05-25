```typescript
import { EquipmentsRepository } from './equipment.repository'
import { OperatorsRepository } from './operators.repository'
import { AuthenticateOperatorService } from './authenticate-operator.service'

import { inject } from 'deps-injector'

const authenticateOperatorService = inject(AuthenticateOperatorService, [OperatorsRepository, EquipmentsRepository])
```