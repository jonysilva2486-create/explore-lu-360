# Foundation validation and closure

**Date:** 2026-09-10

**Branch / PR:** `feature/foundation` / [PR #1](https://github.com/jonysilva2486-create/explore-lu-360/pull/1)

**Status:** CLOSED — Foundation formally accepted within its approved scope and documented limitations

## Canonical post-merge closure — 2026-09-28

The project owner, João Filipe Gaspar da Silva, confirms formal Foundation closure. This final state supersedes the pre-merge pending states preserved below.

### Decision, review and merge

- The bounded D-01/D-02/D-03 acceptance below remains valid. Human-assisted PR review concluded with 0 BLOCKER, 0 MAJOR and one documentary MINOR, corrected in `c88f0286e7fc33fa75ec438b3f8f9d721781a138`. The owner completed review and explicitly authorised merge separately.
- PR #1, `feat: bootstrap web and api foundation`, is Merged / Closed. GitHub performed a normal merge commit, without squash, rebase or protection bypass.
- Merge commit on `main`: `8d70da6e9ca251f5d39721e7a8926e5222f5e8a8`. `origin/main` was confirmed at that commit; `feature/foundation` was preserved at `c88f0286e7fc33fa75ec438b3f8f9d721781a138`.

### Post-merge evidence confirmed by the owner

These are owner-confirmed post-merge observations, not new scans or tests performed by this documentary update:

- CI / Quality gates on `main`, merge commit `8d70da6e9ca251f5d39721e7a8926e5222f5e8a8`: Success.
- CodeQL automatically recognised JavaScript/TypeScript; `Analyze (javascript-typescript)` ran on `main` at that merge commit and completed with Success. This is effective analysis, not merely administrative setup.
- Code scanning on `main`: 0 Open / 0 Closed; GitHub displayed `All tools are working as expected`; no code scanning alerts found.
- Secret scanning: Enabled, 0 Open / 0 Closed, `No secrets found`.
- Dependabot alerts: Enabled, 0 Open / 0 Closed, no open alerts.
- Secret Protection and push protection: Enabled.

### Final scope and retained limitations

Foundation is formally closed within the approved scope. This is not production-ready status, WCAG certification, validation of a definitive production map provider or completion of E360. The D-01/D-02/D-03 limitations remain valid, including the four INCONCLUSIVE font experiments; none is converted to PASS. Historical evidence and production/new-surface requirements remain intact. Zero GitHub alerts is a checkpoint observation, not a guarantee of absence of vulnerabilities.

R3 is not implemented or started and is not automatically authorised by this closure. Its planning and authorisation are separate. No new implementation, scan or validation is claimed by this record update.

## Historical pre-merge checkpoint — reconciliation 2026-09-27

Reference HEAD: `500ed58b0576d039efe89f8175a11c72515d565d`, branch `feature/foundation`. This section supersedes historical pending-state statements below, without erasing the evidence from those checkpoints.

- The validated responsive/accessibility round is committed in `8bc743da8cd9e409b42351809b8a6dd7448a3614`: mobile layout and overlay containment, control typography, marker-specific accessible names, Enter/Space activation, popup focus return and disabled Explore. The owner approved the consolidated round, including desktop/mobile visual validation and keyboard behaviour. This is bounded prototype acceptance, not WCAG certification.
- The approved local round passed frozen installation, API/web lint and typecheck, 28 tests (5 API + 23 web), both builds and 19 smoke tests (4 API + 15 web), with lockfile integrity preserved. These are previously obtained results, not tests rerun for this documentation reconciliation.
- Both remote `Quality gates` completed successfully on the reference HEAD: [run 36319634105](https://github.com/jonysilva2486-create/explore-lu-360/actions/runs/36319634105) and [run 36319631630](https://github.com/jonysilva2486-create/explore-lu-360/actions/runs/36319631630). PR #1 was verified Draft, open, unmerged and conflict-free at this checkpoint. Any later publication must use its own reported CI results.
- The current ruleset requires a PR and GitHub Actions `Quality gates`, with the branch up to date; deletion/force-push protection remains. `Restrict updates` is removed. Required approvals are zero while no eligible reviewer is available; this does not waive the project's human-review process. The owner confirmed an empty bypass list.
- Owner-confirmed administrative controls: Dependency graph, Dependabot alerts, secret scanning and push protection enabled; automatic Dependabot security/version updates disabled; Actions permissions read repository contents/packages, PR creation/approval disabled, first-time fork contributors require workflow approval. SHA pinning was not made mandatory. These confirmations are distinct from functional CI evidence.
- CodeQL Default Setup is administratively enabled; application analysis on `main` remains a post-merge action because the application is still on this branch. Setup enabled is not evidence of application analysis. No merge is authorised just to obtain that evidence.

### Owner-approved bounded acceptance — D-01 / D-02 / D-03

**D-01 — ACCEPTED FOR THE CURRENT FOUNDATION, WITH DOCUMENTED LIMITATIONS.** The seven self-hosted faces, provenance/licences, integration, hierarchy and previously validated visual behaviour remain approved. The four experimental results below remain INCONCLUSIVE, not PASS. Their inconclusiveness is not a known implementation defect and does not require implementation changes to close this Foundation. It does not demonstrate the corresponding production acceptance criteria. Previously valid evidence is preserved; calculated CSS families do not prove per-glyph rendering.

**D-02 — ACCEPTED FOR THE CURRENT FOUNDATION SURFACES.** The owner accepts the implemented theme and previously obtained contrast, responsive, keyboard, focus and accessibility evidence for the actual prototype surfaces. Contrast dependent on dynamic map content and the absence of complete WCAG certification remain limitations, not claims of full validation. No new theme or surface is approved by this decision.

**D-03 — ACCEPTED FOR THE CURRENT FOUNDATION SURFACES.** The approved 1254 × 1254 PNG master is present and directly referenced by the application; provenance and hash are in the brand inventory. Its current desktop/mobile use is accepted. SVG, light/dark/monochrome variants, favicon and new assets are not required for this Foundation closure and have not been created. No numeric clear-space rule or additional usage rights are inferred. Existing proportion, no-recolouring and no-substitution rules remain applicable.

This owner decision is limited to the current Foundation: it is not production approval, does not remove future validation for new surfaces and does not anticipate R3/R4.

### Historical remaining process at the pre-merge checkpoint — superseded by closure above

Before Ready for review: approve this documentary reconciliation, authorise its separate commit/publication, verify the resulting required CI, then explicitly authorise the Draft transition. No further implementation change is identified by this acceptance.

Human PR review follows Ready for review; explicit merge approval remains separate. Full Foundation sign-off is not declared while those process gates remain pending. After an authorised merge, verify CodeQL analysis of the application on `main`; R3 requires its own subsequent authorisation. Production/provider/privacy gates retain their existing scope.

## Historical scope and authority — pre-merge closure pass

The owner approved the foundation review and this bounded closure pass. Implement only documentation reconciliation, API ESLint coverage, strict CI installation, governance verification, official-asset inventory and necessary foundation tests.

Do not begin PostgreSQL/PostGIS, OpenAPI, Auth0, Place, Story, Media, Experience or Save. Do not merge into `main`. R3 remains the next approved implementation milestone, not the current task. Product/design/provider decisions remain unchanged. New Volume III documentation already on the branch is preserved without edits.

## Implementation evidence

- Initial bootstrap and Tailwind fix exist; the original successful PR run is [34396280848](https://github.com/jonysilva2486-create/explore-lu-360/actions/runs/34396280848). This is historical evidence only, not validation of subsequent changes.
- Root README, technical roadmap and closure record now distinguish implemented foundation, approved specifications, unimplemented R3 and external/production gates.
- API ESLint explicitly includes TypeScript with recommended rules; its dependencies are directly declared with exact versions already present in the workspace graph. A negative regression test proves invalid TypeScript fails lint, with checks of every real source file and generated-output exclusions.
- CI uses `pnpm install --frozen-lockfile` with pnpm 10.15.0 and preserves the `Quality gates` job name. A final check detects lockfile changes. No CI step silently repairs dependency drift.
- Map adapter tests cover construction, attribution/navigation controls, coordinates, text-only popup labels, empty prototype data and disposal, without external map requests.
- During the MapLibre 6.4.1 migration in [`da7d72f`](https://github.com/jonysilva2486-create/explore-lu-360/commit/da7d72f1e1ce496ecdc02f643b1e285d216b6541), a real browser execution of the temporary MapLibre/OSM foundation adapter was completed. The recorded evidence confirms MapLibre 6.4.1 with WebGL2, effective tile loading, three markers, a functional `Luxembourg City` popup, working zoom in/out, no console errors or warnings, and HTTP 200 for both `maplibre-gl-worker.mjs` and `maplibre-gl-shared.mjs`. Browser, browser-version, operating-system and device details were not documented.
- This validates browser-level operation of the temporary MapLibre/OSM foundation adapter only. It does not validate the production provider planned for R4 or cross-browser/device behaviour.
- Post-build Vitest smoke tests boot the compiled NestJS module on loopback, verify the public health response and reject unsupported routes. This exercises compiled decorators and real dependency injection, not a mocked controller.
- A compiled-web smoke test reproduced a foundation defect despite a successful build: the linked CSS contained tokens but no `flex`, `grid` or map-height Tailwind utilities. The existing stylesheet import lacked the PostCSS integration. Added the official `@tailwindcss/postcss` 4.3.3 plugin and PostCSS 8.5.28, with no changes to pages, tokens or product behaviour. Regression coverage verifies the generated HTML and its actual linked CSS. [Official Tailwind/Next.js integration](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

## Historical validation evidence — closure pass 2026-09-10

Local validation passed on 2026-09-10 with Node.js 24 and pnpm 10.15.0:

| Gate | Evidence |
|---|---|
| Install | `pnpm install --frozen-lockfile` passed; resolution skipped because the lockfile matched |
| Lint | Web and API passed; API accepts zero warnings |
| Typecheck | Both packages passed |
| Unit/configuration tests | 11 passed: 5 API/service/lint checks and 6 map/adapter checks |
| Build | Next.js production build and NestJS build passed |
| Post-build smoke tests | 7 passed: 4 real API HTTP checks and 3 generated web HTML/CSS checks |
| Strict-install negative check | An isolated temporary fixture with a deliberately mismatched manifest failed with `ERR_PNPM_OUTDATED_LOCKFILE`, as required; no application manifest was modified by the probe |
| CSS regression | The new compiled-utility test failed before the PostCSS fix and passed afterwards |

Total: **18 automated foundation tests passed**. The lockfile was regenerated by pnpm 10.15.0; existing package release versions were retained while pnpm normalised peer snapshots and added the Tailwind build integration. No broad dependency upgrade was performed.

Remote CI must be checked against the updated head using [PR #1 checks](https://github.com/jonysilva2486-create/explore-lu-360/pull/1/checks). The PR handoff records the exact validation commit and run URLs, so a documentation commit does not make a self-referential SHA claim here. Do not infer success from the previous green commit.

The scope of evidence remains deliberately bounded: mocked map tests and generated-asset checks do not by themselves establish visual sign-off, accessibility, map-provider availability or production security. The real browser validation recorded above applies only to the temporary MapLibre/OSM foundation adapter and does not establish cross-browser/device coverage or production-provider validation. HTTP health tests do not validate any R3 journey. No production deployment is claimed.

## D-01 — validação experimental complementar (2026-09-27)

**Referência:** `feature/foundation`, HEAD `8bc743da8cd9e409b42351809b8a6dd7448a3614`. Este aditamento regista apenas as quatro experiências pendentes; preserva as evidências e os resultados válidos anteriormente documentados, sem os substituir ou rebaixar.

1. **Falha/bloqueio dos WOFF2 — INCONCLUSIVO.** As sete faces e as stacks de fallback estão declaradas. O ambiente de validação não permitiu bloquear deliberadamente os pedidos WOFF2 e observar o comportamento real da interface em fallback.
2. **Rede limitada + cache desativada — INCONCLUSIVO.** O ambiente não disponibilizou controlos adequados de throttling/cache. Não foi possível realizar um carregamento frio controlado nem observar experimentalmente a transição fallback → fonte self-hosted.
3. **CLS atribuível às fontes — INCONCLUSIVO.** Não foi obtida medição fiável que permita estabelecer causalidade entre o carregamento das fontes e CLS. Não foi atribuído ou estimado qualquer valor.
4. **Rendered Fonts / verificação por glifo — INCONCLUSIVO.** Foi possível observar `font-family` calculado, mas não determinar de forma fiável a fonte efetivamente utilizada por cada glifo. Esta ronda não constitui confirmação experimental da cobertura das seis línguas (FR, DE, EN, NL, PT e LB).

### Evidência adicional observada — não substitui as experiências

Na página inglesa aberta em `http://127.0.0.1:3003/`, foram observados os seguintes estilos calculados:

- body/interface e Explore: stack CSS Inter;
- Explore: peso calculado 500;
- H1/H2/H3: stack CSS Cormorant Garamond e peso calculado 600.

**Estilos calculados não comprovam por si só a fonte efetivamente renderizada.** Estas observações não substituem os quatro testes acima nem demonstram renderização por glifo.

### Interpretação e limites

**Nenhum novo bloqueador D-01 foi identificado.** Os quatro itens não estão aprovados como PASS: permanecem evidências experimentais inconclusivas/pendentes devido às limitações do ambiente utilizado. Não existe evidência nesta ronda de uma falha concreta da implementação; a impossibilidade de concluir os testes também não comprova o seu sucesso. Não devem ser inventados resultados para preencher estas lacunas. Este aditamento não declara D-01 concluído nem concede aprovação de fecho da Foundation.

## Historical GitHub governance gap — 2026-09-10 (superseded above)

Observed through GitHub on 2026-09-10:

- `main` remains at `071302a51895e7e81fc4738f49d05126c117389f` and has not received this application PR.
- Active ruleset [Protect principal — 22632366](https://github.com/jonysilva2486-create/explore-lu-360/rules/22632366) targets the default branch.
- Rules are `deletion`, `non_fast_forward` and `update`, with no bypass actors. There are no `pull_request` or `required_status_checks` rules in this ruleset.
- The PR is draft and GitHub reports integration blocked. Lack of textual conflicts is not merge approval.
- The connected tools can read rulesets but do not expose ruleset/branch-protection administration. No settings change is claimed.

### Historical owner/admin correction checklist implementing R5.2

In the existing ruleset, prepare one coherent change, preserving active enforcement and the default-branch target:

1. Keep protection against deletion and force pushes; do not add bypass actors.
2. Require a pull request before merging, with human review. Configure the required approval with an eligible reviewer; the PR author cannot provide their own approving review. If there is no eligible reviewer, resolve that explicitly rather than bypassing review.
3. Require the existing **Quality gates** status check from GitHub Actions, selecting the actual reported check rather than guessing a different label. It encompasses install, lint, typecheck, tests, build and post-build smoke checks. Require the branch to be up to date for merging.
4. Replace the blanket **Restrict updates** rule in the same saved configuration with those PR/check requirements. Without a bypass actor, the current blanket rule prevents the intended protected-PR integration flow; do not temporarily unprotect `main`.
5. Re-read the effective rules and confirm PR #1 cannot merge without the required CI and review. Keep explicit owner merge approval separate; no auto-merge is authorised.

Source: [R5.2](R5.2-CI-CD-RELEASE-OPERATIONS.md) and [GitHub ruleset semantics](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets). Settings cannot be enabled merely by committing this checklist or changing a workflow file.

Dependency/security/secret-scanning settings also require administrative verification; passing the functional workflow is not evidence that those services are enabled.

## Historical official asset dependencies — 2026-09-10 (superseded above)

- [Brand inventory](../../apps/web/public/brand/README.md): official logo/wordmark, owner-supplied approved variants/masters, applicable raster and icon exports, provenance/rights. Only a README is present; exact asset filenames are not known.
- [Font inventory](../../apps/web/public/fonts/README.md): Cormorant Garamond WOFF2 coverage 400/500/600 and Inter 400/500/600/700, SIL OFL notices and source/version records. CSS family names alone do not load fonts.
- No assets are created, downloaded, substituted or redrawn in this pass. Asset intake and the associated D-01/D-02/D-03 visual/accessibility validation remain open.

## Historical closure decision — 2026-09-10

### Files changed in this foundation pass

23 files; no product page, controller, domain model, source design token or Volume III decision is changed.

- Root/tooling: `README.md`, `.gitignore`, `package.json`, `pnpm-lock.yaml`, `.github/workflows/ci.yml`.
- API: `apps/api/README.md`, `apps/api/package.json`, `apps/api/eslint.config.mjs`, `apps/api/test/lint-config.spec.mjs`, `apps/api/test/health.http.smoke.mjs`, `apps/api/vitest.smoke.config.mjs`.
- Web: `apps/web/README.md`, `apps/web/package.json`, `apps/web/postcss.config.mjs`, `apps/web/src/lib/map/maplibre-dev-provider.spec.ts`, `apps/web/test/build.smoke.mjs`, `apps/web/vitest.smoke.config.mjs`.
- Asset inventories: `apps/web/public/brand/README.md`, `apps/web/public/fonts/README.md`.
- Architecture records: `docs/architecture/ARCHITECTURE-VALIDATION-ROADMAP.md`, `docs/architecture/FINAL-PRE-CODEX-AUDIT.md` (historical-snapshot notice only), `docs/architecture/FINAL-PRE-CODEX-CLOSURE-RECORD.md`, this `FOUNDATION-VALIDATION-RECORD.md`.

`.gitignore` excludes generated TypeScript incremental cache files; no generated build output is committed.

**Historical recommendation: foundation not ready.** At that checkpoint, local technical validation passed but full sign-off still required updated-head CI, governance correction/verification, official asset intake, applicable visual validation and human PR review. The pre-merge acceptance and final post-merge closure above supersede these historical pending states.

Provider keys, ACT dataset rights, R2 policies, Auth0/Render production setup, privacy operations and recovery checks remain their separately tracked integration/production gates. They are not implemented here or silently declared complete.

Historically, separate approval was required before merge or starting R3. The authorised Foundation merge is now recorded above; R3 still requires separate planning and authorisation.
