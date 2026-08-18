# ADR-007 — API Architecture

**Status:** Accepted
**Date:** 2026-08-18
**Decision owner:** Explore Luxembourg 360

## Context

The web/PWA clients need a stable and secure interface to the Explore Luxembourg 360 backend. The API must support mobile and desktop clients, preserve a clear separation from infrastructure, enforce security and business rules, and allow the internal architecture to evolve without unnecessarily breaking clients.

## Decision

Explore Luxembourg 360 will use a **versioned REST API as its primary application interface**, documented through **OpenAPI**.

The initial public application boundary will use:

```text
/api/v1/
```

The API will be domain-oriented rather than database-oriented.

## Responsibilities of the API boundary

The API is responsible for the controlled boundary between clients and backend/domain services. It will handle or coordinate:

- request validation;
- authentication verification;
- authorization;
- business rules;
- consistent error handling;
- rate limiting;
- appropriate caching;
- pagination and filtering;
- response shaping;
- observability and request tracing where appropriate.

Frontend clients must never access PostgreSQL, Redis or OpenSearch directly.

## Domain-oriented design

API resources should represent Explore Luxembourg 360 concepts rather than database tables.

Examples include:

- `/places`
- `/regions`
- `/routes`
- `/experiences`
- `/stories`
- `/media`
- `/collections`
- `/favourites`
- `/users`
- `/search`

Internal storage structures may change without requiring client applications to understand those changes.

## Versioning

The API will be versioned from the beginning using `/api/v1/`.

A future `/api/v2/` may be introduced when a breaking contract change is justified. Backward compatibility should be preferred where practical rather than creating new versions unnecessarily.

## API documentation

OpenAPI will be treated as the contract and documentation source for the API.

The project should generate or validate API schemas as part of development and testing where practical, reducing divergence between implementation and documentation.

## Client model

The same API serves the responsive web/PWA experience across mobile, tablet and desktop.

Future native applications or approved partner integrations may consume the same API subject to appropriate authentication, authorization and rate limits.

## Performance principles

API responses should be designed around the actual client need rather than returning large domain objects by default.

Examples:

- map views should receive lightweight geographic summaries;
- detailed place information should be requested when a user opens a place;
- large result sets should use pagination or appropriate spatial/query techniques;
- expensive search and discovery operations may use OpenSearch where appropriate;
- Redis may provide caching or rate-limiting support where justified.

## Security

Security enforcement occurs server-side.

Frontend controls such as hidden buttons or disabled UI elements are not security boundaries.

Private endpoints must verify authenticated identity and applicable authorization before performing protected operations.

The API must also apply appropriate validation, output handling, rate limiting and abuse protection.

## Error model

The API should use a consistent, documented error format so that clients can distinguish validation, authentication, authorization, not-found, conflict, rate-limit and server errors without relying on fragile message strings.

## Consequences

### Positive

- Clear separation between frontend and backend.
- Strong contract for mobile and desktop clients.
- Easier testing and documentation.
- Reduced coupling to database implementation.
- Straightforward future integration with native clients and partners.
- Clear place to enforce security and business rules.

### Negative

- Requires API contract discipline.
- Adds some initial design and documentation work.
- Versioning and backwards compatibility become explicit responsibilities.

## Future evolution

REST is the primary interface for the initial platform. Other protocols such as GraphQL, gRPC or event-driven interfaces may be introduced for specific justified use cases without replacing REST unnecessarily.

Such additions must solve a demonstrated product or technical problem and must not be introduced merely for technological novelty.

## Review trigger

Revisit this decision if concrete platform requirements demonstrate that REST is inadequate for a major workload or integration pattern. Any alternative should be evaluated against complexity, performance, caching, tooling, accessibility to developers, observability and long-term maintainability.
