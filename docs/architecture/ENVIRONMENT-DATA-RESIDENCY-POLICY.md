# Explore Luxembourg 360 — Environment & Data Residency Policy

**Status:** Accepted — Pre-Codex
**Date:** 2026-09-07

## 1. Policy

Explore Luxembourg 360 follows an **EU-first production infrastructure policy**.

Production services that store or process personal data should be provisioned in EU infrastructure where the selected provider supports an appropriate EU region, subject to the provider's contractual terms, subprocessors, transfer mechanisms and the project's privacy review.

## 2. Render

**Production target region: Frankfurt, Germany.**

The definitive production Web/API services and managed PostgreSQL datastore should use the same approved Render region whenever practical so that application-to-database traffic can use the regional private network and avoid unnecessary cross-region latency/egress.

The Render account/setup currently observed is not itself a production deployment. Do not create the definitive production database in Oregon and assume it can later be moved in place.

## 3. Auth0

The current Auth0 tenant is treated as **development-only**.

A separate **EU-region Auth0 tenant** must be used for staging/production if the project's privacy/data-placement assessment confirms this requirement. Existing Auth0 tenants cannot be transferred between regions, so the environment separation must be established before production identity data is introduced.

## 4. Other processors

Before public production, maintain a provider/processor register covering:

- provider;
- service and purpose;
- data categories processed;
- hosting/data-region information;
- subprocessors where relevant;
- contractual/DPA status;
- international transfer mechanism where relevant;
- retention/deletion implications;
- security controls;
- owner and review date.

## 5. Environment separation

Use separate configuration and credentials for:

```text
development
staging
production
```

Production credentials must never be copied into development environments, GitHub source, documentation or chat.

## 6. Implementation rule

Region and provider choices are infrastructure configuration. They must not be embedded into domain logic or UI code.

If a provider cannot satisfy the EU-first production requirement for a particular processing activity, the issue must be documented and explicitly decided before production use.
