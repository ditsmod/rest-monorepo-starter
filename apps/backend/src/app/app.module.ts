import { Providers, rootModule } from '@ditsmod/core';
import { initRest } from '@ditsmod/rest';
import { BodyParserModule } from '@ditsmod/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module.js';

@initRest({
  providersPerApp: new Providers().useLogConfig({ level: 'info' }),
  appends: [HelloWorldModule],
  imports: [BodyParserModule],
  exports: [BodyParserModule],
})
@rootModule()
export class AppModule {}
