import {InjectorService} from "@tsed/di";
import * as Express from "express";
import {Req} from "../../filters/decorators/request";
import {IMiddleware, Middleware, RequestLogger} from "../../mvc";
import "../../mvc/interfaces/Express";

/**
 *
 */
@Middleware()
export class LogIncomingRequestMiddleware implements IMiddleware {
  protected static DEFAULT_FIELDS = ["reqId", "method", "url", "duration"];

  // tslint:disable-next-line: no-unused-variable
  constructor(protected injector: InjectorService) {}

  /**
   * Handle the request.
   * @param {e.Request} request
   */
  public use(@Req() request: Express.Request): void {
    this.configureRequest(request);
    this.onLogStart(request);
  }

  $onResponse(request: Express.Request, response: Express.Response) {
    this.onLogEnd(request, response);
  }

  /**
   * The separate onLogStart() function will allow developer to overwrite the initial request log.
   * @param {e.Request} request
   */
  protected onLogStart(request: Express.Request) {
    const {debug, logRequest} = this.injector.settings.logger;

    if (request.log) {
      if (debug) {
        request.log.debug({
          event: "request.start"
        });
      } else if (logRequest) {
        request.log.info({
          event: "request.start"
        });
      }
    }
  }

  /**
   * Called when the `$onResponse` is called by Ts.ED (through Express.end).
   * @param request
   * @param response
   */
  protected onLogEnd(request: Express.Request, response: Express.Response) {
    const {debug, logRequest} = this.injector.settings.logger;

    if (request.log) {
      if (debug) {
        request.log.debug({
          event: "request.end",
          status: response.statusCode,
          data: request.ctx.data
        });
      } else if (logRequest) {
        request.log.info({
          event: "request.end",
          status: response.statusCode
        });
      }

      request.log.flush();
    }
  }

  /**
   * Attach all information that will be necessary to log the request. Attach a new `request.log` object.
   * @param request
   */
  protected configureRequest(request: Express.Request) {
    const {ignoreUrlPatterns = []} = this.injector.settings.logger;

    const minimalInfo = this.minimalRequestPicker(request);
    const requestObj = this.requestToObject(request);

    request.log = new RequestLogger(this.injector.logger, {
      id: request.ctx.id,
      startDate: request.ctx.dateStart,
      url: request.originalUrl || request.url,
      ignoreUrlPatterns,
      minimalRequestPicker: (obj: any) => ({...minimalInfo, ...obj}),
      completeRequestPicker: (obj: any) => ({...requestObj, ...obj})
    });
  }

  /**
   * Return complete request info.
   * @param request
   * @returns {Object}
   */
  protected requestToObject(request: Express.Request): any {
    return {
      method: request.method,
      url: request.originalUrl || request.url,
      headers: request.headers,
      body: request.body,
      query: request.query,
      params: request.params
    };
  }

  /**
   * Return a filtered request from global configuration.
   * @param request
   * @returns {Object}
   */
  protected minimalRequestPicker(request: Express.Request): any {
    const {fields = LogIncomingRequestMiddleware.DEFAULT_FIELDS} = this.injector.settings.logger;
    const info = this.requestToObject(request);

    return fields.reduce((acc: any, key: string) => {
      acc[key] = info[key];

      return acc;
    }, {});
  }
}
