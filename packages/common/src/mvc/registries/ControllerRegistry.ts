import {ProviderType, TypedProvidersRegistry} from "@tsed/di";
import {GlobalProviders} from "@tsed/di";
import {ControllerProvider} from "../class/ControllerProvider";
import {ExpressRouter} from "../services/ExpressRouter";

// tslint:disable-next-line: variable-name
export const ControllerRegistry: TypedProvidersRegistry = GlobalProviders.createRegistry(ProviderType.CONTROLLER, ControllerProvider, {
  injectable: false,
  buildable: true,

  onInvoke(provider: ControllerProvider, locals: any) {
    if (!locals.has(ExpressRouter)) {
      locals.set(ExpressRouter, provider.router);
    }
  }
});
