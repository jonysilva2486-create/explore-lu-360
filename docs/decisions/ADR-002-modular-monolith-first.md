# ADR-002 — Modular Monolith First

**Status:** Accepted
**Date:** 2026-08-18
**Decision owner:** Explore Luxembourg 360

## Context

Volume II defines a scalable service-oriented architecture and identifies future service boundaries. Implementing multiple independently deployed microservices from the first development milestone would introduce substantial operational complexity before the product's core exploration workflow has been validated.

Explore Luxembourg 360 is beginning from a clean repository and needs to optimise for product learning, maintainability, controlled infrastructure complexity and a credible path to future scale.

## Decision

Explore Luxembourg 360 will begin with a **modular monolith** for the first implementation stages.

The application will be internally divided into explicit domain modules with clear responsibilities and interfaces. The module boundaries will be designed so that individual modules can later be extracted into independently deployed services when there is a demonstrated technical or operational reason.

The target service-oriented architecture described by Volume II remains valid as a long-term architectural direction.

## Initial module direction

The initial backend should be organised around domains such as:

- Places
- Users / Identity
- Media
- Experiences / 360° Experiences
- Search
- Collections / Saved Places

Additional modules may be introduced when justified by the product and domain model.

## Why this decision fits the product

- Reduces infrastructure and deployment complexity during early development.
- Makes the first vertical slice faster to build and test.
- Keeps debugging and local development substantially simpler.
- Avoids prematurely solving scaling problems that have not yet been observed.
- Preserves clear domain boundaries for future extraction.
- Allows the product team to learn which parts of the platform actually require independent scaling or deployment.
- Reduces operational cost while the product is being validated.

## What this does not mean

This decision does **not** mean:

- one large undifferentiated codebase;
- shared business logic without module boundaries;
- direct unrestricted access between modules;
- abandoning the service-oriented architecture in Volume II;
- blocking future microservices.

The codebase must remain modular and explicit about dependencies.

## Extraction criteria

A module should only become an independent service when there is a concrete reason, such as:

- materially different scaling requirements;
- independent deployment requirements;
- performance isolation;
- security or compliance isolation;
- distinct operational ownership;
- technology/runtime requirements that cannot reasonably remain inside the main application;
- a demonstrated need to reduce coupling or deployment risk.

## Consequences

### Positive

- Lower initial complexity.
- Faster development feedback loops.
- Easier local testing and debugging.
- Lower initial infrastructure overhead.
- Stronger focus on the core exploration experience.

### Negative

- Some future service extraction work may still be required.
- The team must actively maintain module boundaries.
- The initial deployment cannot independently scale every module.

## Review trigger

Revisit this decision when the product reaches a stage where actual traffic, operational requirements, team structure or domain complexity demonstrates a clear benefit from extracting one or more modules into independent services.
