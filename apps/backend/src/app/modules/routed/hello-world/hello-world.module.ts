import { featureModule } from '@ditsmod/core';

import { InjScopedController } from './default.controller.js';
import { CtxScopedController } from './singleton.controller.js';
import { initRest } from '@ditsmod/rest';

@initRest({ controllers: [InjScopedController, CtxScopedController] })
@featureModule()
export class HelloWorldModule {}
