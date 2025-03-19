import { EaCRuntimeHandlers } from '@fathym/eac/runtime/pipelines';
import { CompanyAPIState } from '../../src/state/CompanyAPIState.ts';
import { NatsConnection, StringCodec } from 'npm:nats@2.29.2';

export default {
  async GET(_req, ctx) {
    const SC = StringCodec();
    let publishStatus = 'Pending';

    try {
      const eventPayload = { message: 'Hello, World!', timestamp: Date.now() };

      const reply = await ctx.State.NATS.request(
        'bravura/eac',
        SC.encode(JSON.stringify(eventPayload))
      );
      // await ctx.State.NATS.publish('bravura/eac', SC.encode(JSON.stringify(eventPayload)));

      ctx.State.Reply = reply.json();

      publishStatus = 'Success';
      console.log('✅ Event Published to `bravura/eac`:', eventPayload);

      await ctx.State.NATS.close();
    } catch (err) {
      if (err instanceof Error) {
        publishStatus = `Failed: ${err.message}`;
      }

      console.error('❌ Error publishing event:', err);
    }

    // 🔹 Return API response
    return Response.json({
      message: 'Test event published to bravura/eac',
      eventStatus: publishStatus,
      reply: ctx.State.Reply,
    });
  },
} as EaCRuntimeHandlers<CompanyAPIState>;
