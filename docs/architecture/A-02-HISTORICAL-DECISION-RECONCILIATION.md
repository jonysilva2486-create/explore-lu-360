# Explore Luxembourg 360 — A-02 Historical Decision Reconciliation

**Status:** CLOSED / APPROVED
**Purpose:** Prevent historical roadmap wording from being interpreted as a current unresolved decision during implementation.

## Rule

Earlier roadmap blocks describe decisions and constraints at the time they were produced. When a later approved block explicitly resolves a topic, the later decision is authoritative for implementation.

Historical documents remain preserved for traceability and are not silently rewritten to erase the project history.

## R3 → later provider decisions

R3 intentionally states that mapping provider, authentication provider, 360 renderer, storage/CDN and cloud/deployment strategy were not selected within R3. That was correct for R3's scope.

Those choices were subsequently resolved through R4/R5 and their approved decision records.

Therefore Codex must read the R3 deferral statements as **historical scope boundaries**, not as current open decisions.

## Google Street View / Experience wording

R3 defines the **user-facing experience hierarchy**:

1. proprietary Explore 360 360° where available;
2. Google Street View where available;
3. panoramic/photo experience;
4. editorial media fallback.

R4.3 defines the **distribution/capture strategy for continuous project-created outdoor trail coverage**, using the Google Street View ecosystem as the preferred distribution layer while retaining an independent proprietary 360° Experience layer.

These statements are complementary, not contradictory:

> **R3 governs user-facing experience preference; R4.3 governs practical distribution of continuous project-created trail capture.**

Codex must not convert this into a global rule that Google always wins over Explore 360 proprietary Experiences.

## Provider decision authority

For implementation, current approved provider decisions are sourced from the relevant R4/R5 documents and ADRs, not from R3's historical deferrals.

The same principle applies to future changes: a later approved ADR or roadmap decision supersedes an earlier deferral only when it explicitly addresses the same decision.

## Codex instruction

When historical wording appears to conflict with a later approved decision:

1. treat the later approved decision as authoritative;
2. preserve the historical document for traceability;
3. do not silently invent a compromise;
4. if the apparent conflict cannot be resolved by the documented chronology, stop and request a human decision under R6 change control.

**A-02 resolution: CLOSED.**
