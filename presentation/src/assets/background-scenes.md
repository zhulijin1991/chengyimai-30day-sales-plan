# 背景与设计思考：场景插画

- 资产：`background-scenes.png`，由内置 imagegen 生成，供 `BackgroundThinking.tsx` 使用。
- 一个素材包含四幅独立插画；页面通过 CSS 展示各自区域，原图保留，不裁改像素。
- 文字使用网页原生排版，不烘焙进图片。四段逐条纵向展开，每条左图右文，不使用翻页控件。

## 生成提示词

Use case: illustration-story. Asset type: an editorial illustration sheet for a Chinese real-estate service product presentation. Create ONE high-resolution landscape image, approximately 2048x1280 aspect ratio 8:5, composed of FOUR separate beautifully crafted story vignettes in a precise 2 by 2 equal quadrant arrangement. Every quadrant has its own centered complete scene and generous pure white margins. No dividing frames. No text anywhere, no letters, no numbers, no arrows, no flowcharts, no floating UI wireframes, no card-node diagrams. These are expressive human and object illustrations to accompany real editable Chinese labels in a webpage, not an infographic rendered as boxes.

Art direction: refined contemporary editorial illustration with soft dimensional matte shapes, restrained isometric perspective, thoughtful human gestures, delicate texture, natural soft shadows fading to pure white #FFFFFF. Professional, calm, warm, suitable for a sophisticated white-and-royal-blue product keynote. Use coherent cobalt/periwinkle blue #4361EE accents, pale blue, off-white, neutral grey, tiny warm peach skin and wood details. People are contemporary East Asian adults, natural proportions, friendly but not cartoonish chibi. Consistent lighting and scale across all four scenes. No brands, logos or watermarks.

TOP LEFT quadrant: a homeowner woman in her thirties at home seated on a simple sofa, holding a smartphone and looking thoughtfully at the sale progress. Beside her are a small architectural model of her apartment building and a finite desk calendar with only blank abstract ticks. The scene communicates that joining a home-selling service is the start, the homeowner still wants to know progress and next steps. A small potted plant, a cozy minimal interior, emphasis on her situation rather than a device UI.

TOP RIGHT quadrant: a beautiful visual metaphor for remembering an ongoing home sale: an open substantial blue notebook with layered continuous pages, several tactile keepsakes arranged naturally on and above it — a small house photo, a calendar page, an envelope, a customer portrait token and a folded appointment note. A small friendly softly glowing abstract blue assistant orb gathers these records gently. The notebook visibly keeps prior pages while opening the next one, communicating continuous context rather than isolated answers. No circuit boards or large brain icon; no chart connectors.

BOTTOM LEFT quadrant: one homeowner, one potential homebuyer and one professional real-estate broker gathered naturally around a small model home on a shared table. The broker in a blue jacket is showing the home information on a tablet, the homeowner and buyer are conversing and making their own choices. A fourth small abstract assistant orb subtly holds a notebook nearby. This represents one shared housing service relationship with human professional involvement. Do not show a signed contract, handshake, keys changing hands, money, or a completed sale.

BOTTOM RIGHT quadrant: a small elegant cluster of residential buildings as a selective pilot neighborhood. Only two of the buildings and a nearby homeowner using a phone are highlighted in blue by a gentle soft spotlight; surrounding buildings remain muted neutral grey. A small calendar and an invitation envelope sit near the selected home as tactile props. This represents serving a clearly defined limited group at the right time. Keep it warm and human, no exclusion symbols, padlocks, barriers or security gates.

Composition constraints: exact 2x2 equal quadrants, scene centers at 25%/25%, 75%/25%, 25%/75%, 75%/75% of the image. Keep each scene fully inside its quadrant, with at least 6 percent of the quadrant empty margin. Do not place any meaningful objects across the horizontal or vertical center boundaries. Pure white canvas, maximum visual clarity, no typography.
