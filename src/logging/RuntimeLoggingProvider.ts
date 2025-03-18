import { EaCApplicationsLoggingProvider } from '@fathym/eac-applications/runtime/logging';

export class RuntimeLoggingProvider extends EaCApplicationsLoggingProvider {
  constructor() {
    const loggingPackages = ['@fathym-bravura/common', '@fathym-bravura/bravura-web-runtime'];

    super(loggingPackages);
  }
}
