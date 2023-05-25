```typescript
import { EquipmentsRepository } from './equipment.repository'
import { OperatorsRepository } from './operators.repository'
import { AuthenticateOperatorService } from './authenticate-operator.service'

import { inject } from 'dependency-injector'

export function AuthenticateOperatorServiceFactory() { 
	return inject(AuthenticateOperatorService, [OperatorsRepository, EquipmentsRepository])
}
```