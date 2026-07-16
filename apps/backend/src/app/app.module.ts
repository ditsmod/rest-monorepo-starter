import { LoggerConfig, ProviderBuilder } from '@ditsmod/core';
import { restRootModule } from '@ditsmod/rest';
import { BodyParserModule } from '@ditsmod/body-parser';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module.js';

@restRootModule({
  providersPerApp: new ProviderBuilder().useValue(LoggerConfig, { level: 'info' }),
  appends: [HelloWorldModule],
  imports: [BodyParserModule],
  exports: [BodyParserModule],
})
export class AppModule {}
