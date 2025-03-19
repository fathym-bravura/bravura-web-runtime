import { EaCRuntimeHandlers } from '@fathym/eac/runtime/pipelines';
import { NatsConnection } from 'nats';
import { CompanyAPIState } from '../../src/state/CompanyAPIState.ts';
import { connect } from 'nats';

export default {
  async GET(_req, ctx) {
    ctx.State.Random = crypto.randomUUID();

    const nats = await ctx.Runtime.IoC.Resolve<NatsConnection>(
      ctx.Runtime.IoC.Symbol('NatsConnection')
    );

    ctx.State.NATS = await connect({ servers: nats.getServer() });

    return ctx.Next();
  },
} as EaCRuntimeHandlers<CompanyAPIState>;
