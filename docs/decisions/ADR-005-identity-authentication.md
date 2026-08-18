# ADR-005 — Identity & Authentication

**Status:** Accepted
**Date:** 2026-08-18
**Decision owner:** Explore Luxembourg 360

## Context

Explore Luxembourg 360 needs secure user identity for features such as favourites, collections, preferences, history and user-generated content, while exploration itself should remain accessible without mandatory account creation.

Authentication is security-critical and should not be implemented as a bespoke password/session system unless there is a compelling future reason.

## Decision

Explore Luxembourg 360 will use an **external Identity Provider (IdP)** based on established standards:

- OAuth 2.0
- OpenID Connect (OIDC)
- JWT for appropriately scoped API authentication/authorization flows
- Role-Based Access Control (RBAC) where role-based permissions are required

**Auth0 is the preferred initial Identity Provider candidate**, subject to technical, privacy/GDPR and commercial validation before production lock-in.

The application will isolate provider-specific integration behind an identity/authentication boundary so that the product is not unnecessarily coupled to Auth0.

## Product rule: exploration without mandatory account

Users must be able to discover and explore public content without creating an account.

An account should be requested when it provides clear value, for example:

- saving a place;
- creating a collection;
- synchronising personal state across devices;
- submitting user-generated content;
- accessing personalised features.

Authentication must not become an unnecessary barrier to exploration.

## Identity versus product data

The Identity Provider is responsible for identity and authentication concerns such as credentials and supported login methods.

PostgreSQL remains the authoritative source for Explore Luxembourg 360 product data associated with the user, such as:

- favourites;
- collections;
- preferences;
- exploration history where retained;
- user-generated content;
- application-specific permissions and relationships.

The platform must maintain a stable internal user identity/reference rather than spreading provider-specific identifiers throughout business logic.

## Roles

The initial role model should remain minimal and evolve with demonstrated requirements. Possible roles include:

- User
- Contributor
- Editor
- Administrator

Roles must be enforced server-side. Frontend visibility is not a security boundary.

## Auth0 commercial position

Auth0's current public pricing makes a free starting tier potentially suitable for early development and initial product validation, subject to the exact plan limits and included features at implementation time. Paid tiers and the Auth0 for Startups programme may become relevant as requirements and usage grow.

Pricing is not treated as a permanent architectural guarantee. Current pricing and contractual terms must be revalidated before production commitment.

## Security principles

- Never store plaintext passwords in Explore Luxembourg 360.
- Never place client secrets in frontend code.
- Validate tokens and claims server-side.
- Apply least privilege.
- Keep role enforcement on trusted backend services.
- Use secure session/token handling appropriate to the client architecture.
- Support secure account recovery through the Identity Provider.
- Apply rate limiting and abuse protection at the API boundary.
- Minimise personal data collection.

## Future flexibility

If Auth0 is replaced in the future, the provider-specific integration should be replaceable without rewriting the domain modules, user data model or application-level authorization rules.

## Consequences

### Positive

- Avoids building security-critical authentication infrastructure from scratch.
- Supports common authentication standards.
- Enables social login and other identity methods where appropriate.
- Provides a path to MFA and stronger identity controls.
- Keeps account creation optional for public exploration.
- Supports cross-device synchronisation through a single user identity.

### Negative

- Introduces dependency on an external identity provider.
- Requires ongoing review of provider pricing, privacy and contractual terms.
- Provider integration must be deliberately isolated to minimise lock-in.

## Review trigger

Before production launch, validate Auth0's current pricing, GDPR/privacy terms, data-processing arrangements, regional considerations, export/migration capabilities, required features and expected usage costs. Re-evaluate the provider if those conditions are not acceptable.
