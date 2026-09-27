# API foundation

NestJS modular-monolith foundation for the versioned Explore Luxembourg 360 REST API.

Initial endpoint: `GET /api/v1/health`.

Domain modules, persistence and provider adapters will be added incrementally according to the approved vertical slice.

## Foundation checks

- `pnpm lint` applies recommended ESLint/TypeScript rules to sources, tests and configuration, and rejects warnings.
- `pnpm test` runs unit tests plus a regression check proving API TypeScript is not silently skipped by ESLint.
- `pnpm build` compiles the actual NestJS metadata/dependency-injection configuration.
- `pnpm test:smoke` runs after build and exercises the compiled module over loopback HTTP: public `/api/v1/health`, exact response contract and 404s for unsupported routes. It needs no credentials or external infrastructure.

These checks do not implement or validate database access, OpenAPI, authentication or R3 product features. The current application remains a development foundation, not a production-ready API.
