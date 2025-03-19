import { EaCRuntimeHandlers } from '@fathym/eac/runtime/pipelines';
import { CompanyAPIState } from '../../../src/state/CompanyAPIState.ts';

export default {
  async POST(req, ctx) {
    const data = await req.json();

    return Response.json(data);
  },
} as EaCRuntimeHandlers<CompanyAPIState>;
