import { controller, route, RequestContext } from '@ditsmod/rest';

@controller({ scope: 'route' })
export class RouteScopedController {
  @route('GET', 'hello2')
  tellHello() {
    return 'Hello World!';
  }

  @route('POST', 'body2')
  postHello(ctx: RequestContext) {
    return ctx.body;
  }

  @route('GET', 'throw-error2')
  thrwoError() {
    throw new Error('Here some error occurred');
  }
}
