import { restModule } from '@ditsmod/rest';

import { RequestScopedController } from './request-scoped.controller.js';
import { RouteScopedController } from './route-scoped.controller.js';

@restModule({ controllers: [RequestScopedController, RouteScopedController] })
export class HelloWorldModule {}
