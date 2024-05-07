import Middleware from '../middleware';
import Request from '../request';
import Result from '../result';
import staticImplements from '../helper/static-implements';
import language from '../helper/language';

const STATUS = 403;

@staticImplements<Middleware>()
class Status403 {
  public static prepare(request: Request,): Request {
    return request;
  }

  public static process(response: Result,): void {
    if (typeof response.response.status === 'undefined') {
      throw new Error(language('no_response_status',),);
    }
    if (response.response.status !== STATUS) {
      throw new Error(language(
        'response_status_not_403',
        `${ response.response.status }`,
      ),);
    }
  }
}
export default Status403;