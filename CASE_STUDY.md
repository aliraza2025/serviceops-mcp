# ServiceOps MCP — product case study

Stage: independent prototype.

## Product contribution

An original MCP server exposing typed service-catalog, quote, and job-status tools, verified with actual client/server protocol calls.

Original domain framing, workflow and interface design, implementation with AI assistance, input validation, tests, and source-linked documentation. Foundation: https://github.com/modelcontextprotocol/typescript-sdk.

## Verification

Official MCP SDK round trips. The repository includes the relevant fixtures, tests, and retained reports.

## Tradeoffs and limits

The tools operate only on synthetic records and a fictional price catalog. There is no private CRM, OAuth deployment, scheduling write, or customer messaging integration.

## Next product test

Add a sandbox connector contract and scoped authorization before connecting a real system.
