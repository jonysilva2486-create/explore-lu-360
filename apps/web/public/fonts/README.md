# Production fonts

This directory is the controlled asset location for the production WOFF2 files required by D-01.

## Canonical families

- Cormorant Garamond — editorial/display
- Inter — interface/utility

The production files must be sourced from the approved open-source distributions and retained with their applicable SIL Open Font License 1.1 notices.

Do not add Google Fonts runtime imports or replace the canonical families with framework/system fonts as a design decision.

Before aggressive subsetting, validate the real character coverage required by French, German, English, Dutch, Portuguese and Luxembourgish content.

## Approved asset inventory — 2026-09-18

Seven official static WOFF2 files are now present, copied byte-for-byte from the approved repository tags. No conversion, recompilation, optimisation or subsetting was performed. No italics, additional weights or variable fonts were added. There is no runtime dependency on Google Fonts or a third-party font CDN.

### Sources and preserved notices

- **Cormorant Garamond:** [CatharsisFonts/Cormorant](https://github.com/CatharsisFonts/Cormorant), release/tag **v4.002**; files from [fonts/webfonts/](https://github.com/CatharsisFonts/Cormorant/tree/v4.002/fonts/webfonts). SIL OFL 1.1; upstream [OFL.txt](https://github.com/CatharsisFonts/Cormorant/blob/v4.002/OFL.txt) preserved unchanged as `Cormorant-OFL.txt`, including the 2015 Cormorant Project Authors copyright notice.
- **Inter:** [rsms/inter](https://github.com/rsms/inter), release **4.1**, tag **v4.1**; files from [docs/font-files/](https://github.com/rsms/inter/tree/v4.1/docs/font-files). SIL OFL 1.1; upstream [LICENSE.txt](https://github.com/rsms/inter/blob/v4.1/LICENSE.txt) preserved unchanged as `Inter-LICENSE.txt`, including the 2016 Inter Project Authors copyright notice.

| File | Weight | Style | Bytes | SHA-256 |
|---|---|---|---|---|
| `CormorantGaramond-Regular.woff2` | 400 | normal | 205872 | `5c63b39532df3ebb8c6812f68f268335eb35324f9fcd4382e69ed3e7700250c4` |
| `CormorantGaramond-Medium.woff2` | 500 | normal | 206516 | `b1886b29c2277554e0f2136258a3eea784fb8b4c65c5ab6ce02d19d5c3340356` |
| `CormorantGaramond-SemiBold.woff2` | 600 | normal | 204052 | `af765967938cc1bd47f6de51c0b7992f22ebbd4b58f1fd8c1f37a3dbb80b26c3` |
| `Inter-Regular.woff2` | 400 | normal | 111268 | `e06f6b1bc553aaea4e4668023ed0ab0a147129c3107f511bc7d03d361b0ae085` |
| `Inter-Medium.woff2` | 500 | normal | 114348 | `0ff3e94614e1493eb556314fd247ae6c4a85a7783b4cc86be539940cf83f2a48` |
| `Inter-SemiBold.woff2` | 600 | normal | 114812 | `5cb7103e4e605989afebc03d989c79201e54b21b5183db33981f70db9178a301` |
| `Inter-Bold.woff2` | 700 | normal | 114840 | `fa888127b6da015b65569f0351f3b5c391ad928904951f1c20e9f8462a8d95ea` |

Read-only inspection of the WOFF2 name and OS/2 tables confirmed the canonical families and listed weights. Typographic family names (name ID 16), where present, are Cormorant Garamond and Inter; legacy family names may include Medium or SemiBold. All seven have zero italic angle, no italic style flag and no variable-font `fvar` table. Git blob hashes of all seven fonts and both notices match their official tag entries.

## Integration and validation remain pending

Asset presence does **not** mean D-01 is fully implemented or validated. This intake adds no `@font-face`, preload or loading configuration; the application does not yet load these files. No six-language validation was performed in this step.

Controlled local loading with a non-blocking strategy and validation of all six languages, layout shift, mobile/constrained-network behaviour and accessibility remain required under D-01. Do not invent additional styles or weights or treat the fallback stacks as replacement brand typography.
