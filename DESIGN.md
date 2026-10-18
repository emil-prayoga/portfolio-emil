---
name: Emil Prayoga Albani Portfolio
description: A dark digital exhibition for Emil's frontend and UI/UX work.
colors:
  gallery-ink: "#101110"
  raised-ink: "#191a18"
  deep-ink: "#20211f"
  vermilion: "#e7785d"
  warm-white: "#f1efe9"
  soft-white: "#bcb9b1"
  muted-stone: "#89877f"
  gallery-rule: "rgb(241 239 233 / 15%)"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3.8rem, 8vw, 7.8rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.4rem, 5vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Arial, 'Helvetica Neue', sans-serif"
    fontSize: "0.67rem"
    fontWeight: 700
    letterSpacing: "0.16em"
    lineHeight: 1.3
spacing:
  base: "1rem"
  roomy: "2rem"
  section: "clamp(5.5rem, 11vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.gallery-ink}"
    padding: "0 1.25rem"
    height: "3rem"
  project-link:
    textColor: "{colors.vermilion}"
    padding: "0.75rem 0"
---

# Design System: Emil Prayoga Albani Portfolio

## Overview

**Creative North Star: “The Digital Exhibition”**

The portfolio behaves like a considered exhibition space: the portrait, a featured work, and the real project records receive the wall space. Visitors move through open sections at their own pace, while project and experience details read like concise exhibit labels.

The room is built from deep ink surfaces, warm lettering, and a rare vermilion signal for navigation and action. Space and typography establish hierarchy; the work itself provides the visual interest. There are no fabricated project previews because the repository contains no project screenshots.

**Key Characteristics:**

- Portrait and featured project share the first viewport.
- Projects are open, varied entries rather than a uniform tile wall.
- Education and experience read as labeled records.
- Navigation and form controls use clear, high contrast focus states.

## Colors

The palette pairs an ink-dark exhibition room with warm white type and a small amount of vermilion for active navigation and calls to action.

### Primary

- **Vermilion Signal**: Used for the primary action, active navigation, project links, and date markers. Its small, consistent role makes interaction points easy to find.

### Neutral

- **Gallery Ink**: The page ground and main gallery wall.
- **Raised Ink**: The contact area and menu surface, separated from the ground by tone.
- **Deep Ink**: A secondary dark surface for hierarchy where needed.
- **Warm White**: Display and heading text.
- **Soft White**: Body copy and supporting project descriptions.
- **Muted Stone**: Secondary labels and metadata.
- **Gallery Rule**: Thin separators between records and sections.

### Named Rules

**The Work Is the Artwork Rule.** Never invent a project image, outcome, testimonial, or credential to fill visual space. Use the supplied project titles, descriptions, technologies, and links.

## Typography

**Display Font:** Georgia, Times New Roman, serif  
**Body Font:** Arial, Helvetica Neue, sans-serif  
**Label Font:** Arial, Helvetica Neue, sans-serif

**Character:** A high contrast serif gives the name and work titles the presence of gallery lettering. The straightforward sans keeps long project descriptions and controls easy to scan.

### Hierarchy

- **Display** (400, clamp 3.8rem–7.8rem, 0.9 line height): Portfolio greeting and name.
- **Headline** (400, clamp 2.4rem–4.75rem, 0.98 line height): Section titles and featured works.
- **Title** (400–600, 1.5rem–3rem): Project and experience titles.
- **Body** (400, 1rem, 1.8 line height): Biography and project details, constrained by the section grid.
- **Label** (700, 0.67rem, 0.16em tracking, uppercase): Category and exhibit metadata.

## Layout

The main shell caps at 84rem with responsive 1rem to 1.5rem side gutters. Sections use generous vertical space, a left-aligned heading paired with a short supporting sentence, and thin rules to separate exhibits. The hero is a two-column name-and-portrait composition on wide screens and stacks on narrow screens. Project entries vary in scale; supporting records use a three-column date, title, and detail grid that collapses to one column on mobile.

## Elevation & Depth

The exhibition is flat. Tonal shifts distinguish the contact room and menu from the page ground. Frames and separators use a single restrained rule; shadows and glow do not create depth.

## Shapes

Large surfaces, controls, and text fields use square corners. Labels and focus outlines stay crisp, like signage on a gallery wall.

## Components

- **Navigation:** Sticky, ink-grounded wordmark and text links. The active section receives the vermilion signal; the compact menu exposes the same anchors on smaller screens.
- **Featured work:** A vermilion typographic plate carries the real project title. Description, technology names, and outward links sit beside it.
- **Experience records:** Date, role, organization, and supplied details form open rows divided by thin horizontal rules.
- **Form:** Dark, labeled fields with visible focus and a full-width primary action. Submission, success, and failure states remain explicit.

## Do's and Don'ts

- Do lead with the real portrait, identity, and featured project.
- Do give long project descriptions enough width and line height.
- Do preserve the Indonesian-first voice and the supplied technical terms.
- Do keep gallery labels concise and visually quiet.
- Don't replace absent project screenshots with mock UI or abstract illustrations.
- Don't return to emerald accents, gradient text, generic blur, or a uniform icon-card grid.
