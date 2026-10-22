# Ann report prototype design QA — 2026-10-22

**Final result: passed**

## Target and evidence
- Scope: `launch.html` owner animations (daily, invitation, review). Ann remains selected in the common app navigation.
- Source visual truth: `/Users/zhulijin/Desktop/诚意卖/outputs/ann-report-ui-20261022/source-ui.png`.
- Rendered screen: `/Users/zhulijin/Desktop/诚意卖/outputs/ann-report-ui-20261022/ann-screen-final.png`.
- Combined full-view and focused navigation/composer comparison: `/Users/zhulijin/Desktop/诚意卖/outputs/ann-report-ui-20261022/comparison-final.png`.
- Actual report preview: `http://127.0.0.1:8891/launch.html#daily`; current desktop viewport 1280 × 720, no viewport resizing.
- Source pixels 393 × 965; implementation pixels and logical phone screen 393 × 852, scale 1. Browser DPR 2; screenshot output normalized by browser to 1 CSS pixel per output pixel. The shared device frame, live status bar and safe areas are preserved.
- State differs intentionally: source shows the owner dashboard with 业主 selected; user requested Ann selected and the existing chat story. Full dashboard cards, unrelated price/customer/broker details and unread count are not copied into the chat.

## Comparison history and findings
1. [P2, spacing] First capture placed the top navigation 7 px below the reference. Reduced toolbar height 64 → 50 px, retaining the property-context baseline. Verified in `comparison-pass2.png`.
2. [P2, spacing/typography] Composer used 12 px gutters and 15 px placeholder text. Updated to the reference's 16 px gutters and 16 px text. Verified in `comparison-final.png`.
3. [P1, interaction] The sandboxed report blocked form submission. Replaced the Ann composer's form submission with direct button/Enter handlers; kept iframe sandbox permissions unchanged. In the actual report, both actions clear the draft and append the question and answer.
4. [P2, interaction] Starting manual input during the daily intro could pause while the conversation container remained hidden. A trusted pointer/focus event now reveals the customer-list step and pauses playback, keeping the viewer's chat history visible. Daily still never shows the SMS preview.

## Required fidelity surfaces
- Typography: native system/PingFang fallback retained; navigation 16 px, property heading 14 px, chat 15 px, composer 16 px; no truncation or overlapping fixed controls in the report.
- Layout: 40 px circular navigation controls, 216 × 40 px tab group, white selected Ann pill, compact property context and 50 px composer. Header and input remain fixed while chat scrolls.
- Colors: cyan/blue top gradient, pale blue chat surface, white messages, light blue owner replies and dark confirmation buttons match the supplied visual direction.
- Assets: actual Ann and brand raster pixels from the supplied reference are reused; only those two cropped display regions are bundled in the 6.8 KB sprite. No unrelated dashboard screenshot is embedded as app content. Standard message/sound icons use the existing Radix library.
- Copy: existing owner-centered chat, platform SMS signature, property link and contact-broker closing are retained. No internal system terminology added to owner messages.

## Functional checks
- Mobile runtime integrity: all 28 protected files passed; TypeScript and Vite build passed.
- Report package build passed; self-contained inline assets retained.
- Daily loop remains in the loaded frame, ends at the customer list, keeps Ann selected, and contains no SMS content.
- Invitation completed an automatic cycle and a manual send. Original recipients, preview and confirmation wording remain intact; the old button is disabled and a new result message is appended.
- Review automatic adoption/result completed; Ann remains selected. Echo completed its unchanged appointment workflow.
- Actual report input: simulated keyboard, button send and Enter send verified; manual interaction pauses playback and retains visible replies.
- Browser console: no warning/error entries observed in the report.
- PRD `index.html` verified byte-for-byte unchanged. Report-only changes are gated by `data-report-shell="ann"`.

## Implementation checklist
- [x] Adapt report owner shell and pin Ann.
- [x] Reuse supplied raster assets and preserve mobile runtime.
- [x] Fix and recheck navigation/composer spacing and manual chat submission.
- [x] Preserve SMS history, daily scope and Echo workflow.
- [x] Build and compare actual rendered output.

No actionable P0/P1/P2 findings remain. No additional viewport coverage was run, per project instructions.

final result: passed
