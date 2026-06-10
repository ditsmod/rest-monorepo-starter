import { HTTP_BODY } from '@ditsmod/body-parser';
import { ctx } from '@ditsmod/core';
import { controller, route } from '@ditsmod/rest';

@controller()
export class RequestScopedController {
  @route('GET', 'hello')
  tellHello() {
    return 'Hello World!';
  }

  @route('POST', 'body')
  postHello(@ctx(HTTP_BODY) body: any) {
    return body;
  }

  @route('GET', 'throw-error')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}
