import { restModule } from '@ditsmod/rest';

import { InjScopedController } from './default.controller.js';
import { CtxScopedController } from './singleton.controller.js';

@restModule({ controllers: [InjScopedController, CtxScopedController] })
export class HelloWorldModule {}
