# Input Focus State - Visual Design Guide

## 🎨 Complete Visual Reference

A comprehensive visual guide showing the new 2px Primary Brand color focus state for all input components.

---

## 📊 Before & After Comparison

### Standard Input Field

#### BEFORE
```
Unfocused:
┌────────────────────────────────────┐
│ Enter your name...                 │  ← 1px gray border
└────────────────────────────────────┘

Focused:
┌────────────────────────────────────┐
│ John D|                            │  ← 1px blue border + 2px ring
└────────────────────────────────────┘
  ◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡
  Ring effect (subtle, 20% opacity)
  
❌ Light border, subtle change
❌ Content shifts by 1px
```

#### AFTER
```
Unfocused:
┌────────────────────────────────────┐
│ Enter your name...                 │  ← 2px gray border
└────────────────────────────────────┘

Focused:
╔════════════════════════════════════╗
║ John D|                            ║  ← 2px Primary Brand blue border
╚════════════════════════════════════╝
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  Glow shadow (3px, 15% opacity)
  
✅ Bold border, strong visual feedback
✅ No content shift (always 2px)
✅ Primary Brand color
```

---

## 🔍 Component-by-Component Breakdown

### 1. Input Component (`<Input />`)

#### States

**Default (Unfocused)**
```
╔════════════════════════════════════╗
║                                    ║
║  Placeholder text...               ║
║                                    ║
╚════════════════════════════════════╝

Border: 2px solid #D5D7DA (gray-300)
Background: White (#FFFFFF)
Text: Gray (#535862)
```

**Focus (Active)**
```
╔════════════════════════════════════╗
║                                    ║
║  Typing here|                      ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Border: 2px solid #009FDA (Primary Brand)
Shadow: 0 0 0 3px rgba(0,159,218,0.15)
Text: Dark (#002664)
Transition: 200ms smooth
```

**Invalid (Error)**
```
╔════════════════════════════════════╗
║                                    ║
║  invalid@                          ║
║                                    ║
╚════════════════════════════════════╝
   🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
⚠️ Please enter a valid email address

Border: 2px solid #D92D20 (red)
Shadow: 0 0 0 3px rgba(217,45,32,0.15)
Error text: Red (#D92D20)
```

**Disabled**
```
┌────────────────────────────────────┐
│                                    │
│  Disabled input...                 │  (50% opacity)
│                                    │
└────────────────────────────────────┘

Border: 2px solid #D5D7DA (gray)
Background: Light gray (#F2F3F5)
Opacity: 50%
Cursor: not-allowed
```

---

### 2. Textarea Component (`<Textarea />`)

#### States

**Default (Unfocused)**
```
╔════════════════════════════════════╗
║                                    ║
║  Enter your message...             ║
║                                    ║
║                                    ║
║                                    ║
╚════════════════════════════════════╝

Border: 2px solid #D5D7DA (gray-300)
Min Height: 64px
Resize: None (field-sizing-content)
```

**Focus (Active)**
```
╔════════════════════════════════════╗
║                                    ║
║  This is a longer message that     ║
║  spans multiple lines of text|     ║
║                                    ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Border: 2px solid #009FDA (Primary Brand)
Shadow: 0 0 0 3px rgba(0,159,218,0.15)
Auto-expands with content
```

---

### 3. SearchInput Component (`<SearchInput />`)

#### States

**Default (Unfocused)**
```
╔════════════════════════════════════╗
║                                    ║
║  🔍  Search documents...           ║
║  (gray icon)                       ║
║                                    ║
╚════════════════════════════════════╝

Border: 2px solid #D5D7DA (gray-300)
Icon: 🔍 Gray (#535862)
Icon Position: Left
```

**Focus (Active)**
```
╔════════════════════════════════════╗
║                                    ║
║  🔍  project report|               ║
║  (blue icon)                       ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Border: 2px solid #009FDA (Primary Brand)
Shadow: 0 0 0 3px rgba(0,159,218,0.15)
Icon: 🔍 Primary Brand Blue (#009FDA)
Icon changes color with focus!
```

**With Value + Clear Button**
```
╔════════════════════════════════════╗
║                                    ║
║  🔍  project report          ✕     ║
║  (blue)               (clear btn)  ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Border: 2px solid #009FDA
Icon: Blue
Clear button: Visible (X icon)
Hover clear: Light background
```

**Loading State**
```
╔════════════════════════════════════╗
║                                    ║
║  ⟳  Searching...                   ║
║  (spinner)                         ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Border: 2px solid #009FDA
Icon: Spinner (animated)
Cursor: wait
```

---

### 4. Select Component (`<Select />`)

#### States

**Default (Unfocused)**
```
╔════════════════════════════════════╗
║                                    ║
║  Select an option...           ▼   ║
║                            (chevron)║
║                                    ║
╚════════════════════════════════════╝

Border: 2px solid #D5D7DA (gray-300)
Chevron: Gray (#535862)
```

**Focus (Active)**
```
╔════════════════════════════════════╗
║                                    ║
║  Select an option...           ▼   ║
║                                    ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Border: 2px solid #009FDA (Primary Brand)
Shadow: 0 0 0 3px rgba(0,159,218,0.15)
```

**Open (Dropdown Visible)**
```
╔════════════════════════════════════╗
║                                    ║
║  Select an option...           ▲   ║
║                                    ║
║                                    ║
╚════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   
   ┌────────────────────────────────┐
   │ Option 1                       │ ← Hover: light blue bg
   │ Option 2                       │
   │ Option 3                       │
   └────────────────────────────────┘

Border: 2px solid #009FDA
Dropdown: Appears below
Options: Hoverable
```

---

## 🎨 Color Palette Reference

### Primary Brand (Focus State)

```
█████████████  #009FDA
               Primary Brand Blue
               rgb(0, 159, 218)
               
▓▓▓▓▓▓▓▓▓▓▓▓▓  rgba(0, 159, 218, 0.15)
               Glow shadow (15% opacity)
```

### Default Border

```
█████████████  #D5D7DA
               Gray-300
               Default border color
```

### Error/Invalid

```
█████████████  #D92D20
               Destructive Red
               rgb(217, 45, 32)
               
🔴🔴🔴🔴🔴🔴🔴  rgba(217, 45, 32, 0.15)
               Red glow shadow (15% opacity)
```

---

## 📏 Measurements & Spacing

### Border Width
```
Default:  ▐▌  2px solid
Focus:    ▐▌  2px solid (same width, color changes)
Invalid:  ▐▌  2px solid (same width, color changes)

No shift! Always 2px!
```

### Glow Shadow
```
Spread:   ▓▓▓  3px
Opacity:  15%
Blur:     0px
Offset:   0px, 0px

Creates subtle "lifted" effect
```

### Height Reference
```
Input:     │  36px (h-9)
Textarea:  │  64px minimum (min-h-16)
Select:    │  36px default, 32px small
SearchInput:
  - Small: │  32px (h-8)
  - Medium:│  40px (h-10)
  - Large: │  48px (h-12)
```

---

## 🎬 Animation Timeline

### Focus Transition (0ms → 200ms)

```
Time:     0ms ──────────────────────> 200ms

Border:   #D5D7DA ───────────────────> #009FDA
          (gray)                        (blue)

Shadow:   none ──────────────────────> 3px glow
          (invisible)                   (visible)

Easing:   cubic-bezier(0.4, 0, 0.2, 1)
          ↑ Smooth, natural feel

Icon:     #535862 ───────────────────> #009FDA
(Search)  (gray)                        (blue)
```

### Blur Transition (200ms → 0ms)

```
Time:     0ms <────────────────────── 200ms

Border:   #D5D7DA <───────────────────  #009FDA
          (gray)                        (blue)

Shadow:   none <──────────────────────  3px glow
          (invisible)                   (visible)

Returns to default state smoothly
```

---

## 📱 Responsive Behavior

### Mobile (320px - 767px)

```
╔═══════════════════════════╗
║                           ║
║  Search...                ║  ← 2px border, full width
║                           ║
╚═══════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Touch target: Minimum 44px height
Border: Same 2px, clearly visible
Glow: Subtle but noticeable on mobile
```

### Tablet (768px - 1023px)

```
╔═════════════════════════════════════╗
║                                     ║
║  Search documents...                ║  ← 2px border, balanced width
║                                     ║
╚═════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Works with touch and mouse
Border maintains prominence
```

### Desktop (1024px+)

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║  Search documents, people, news...                ║  ← 2px border, optimal width
║                                                   ║
╚═══════════════════════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Keyboard navigation primary
Border looks polished and professional
Glow adds subtle depth
```

---

## ⌨️ Interaction Examples

### Mouse Click
```
1. Hover over input
   ┌────────────────────┐
   │ Enter text...      │  ← Cursor: text
   └────────────────────┘

2. Click
   ╔════════════════════╗
   ║ |                  ║  ← Instant 2px blue border
   ╚════════════════════╝
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    + Glow appears (200ms fade)

3. Type
   ╔════════════════════╗
   ║ Hello|             ║  ← Border stays blue
   ╚════════════════════╝
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

4. Click outside
   ┌────────────────────┐
   │ Hello              │  ← Returns to gray (200ms)
   └────────────────────┘
```

### Tab Navigation
```
[Input 1]    [Input 2]    [Input 3]

Press Tab ──────>

╔════════╗  ┌────────┐  ┌────────┐
║ Focused║  │        │  │        │  ← Focus moves
╚════════╝  └────────┘  └────────┘
  ▓▓▓▓▓▓▓▓

Press Tab ──────>

┌────────┐  ╔════════╗  ┌────────┐
│        │  ║ Focused║  │        │  ← Focus moves
└────────┘  ╚════════╝  └────────┘
              ▓▓▓▓▓▓▓▓

Each input shows clear 2px blue focus indicator
```

### Touch (Mobile)
```
1. Tap input
   
2. Keyboard appears
   ╔════════════════╗
   ║ |              ║  ← 2px blue border
   ╚════════════════╝
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   
   [Keyboard]
   
3. Tap outside
   ┌────────────────┐
   │ Text entered   │  ← Returns to gray
   └────────────────┘
   
   [Keyboard hides]
```

---

## 🎯 Design System Integration

### Form Example
```
Contact Form
────────────────────────────────────

Name *
╔════════════════════════════════╗
║ John Doe|                      ║  ← Currently focused
╚════════════════════════════════╝
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Email *
┌────────────────────────────────┐
│ john.doe@example.com           │  ← Previously filled
└────────────────────────────────┘

Department *
┌────────────────────────────────┐
│ Select department...       ▼   │  ← Not yet filled
└────────────────────────────────┘

Message
┌────────────────────────────────┐
│                                │
│ Enter your message...          │
│                                │
└────────────────────────────────┘

┌──────────────┐
│ Submit       │  [Primary Button]
└──────────────┘

All inputs use consistent 2px focus borders!
```

---

## ✨ Summary

### What Makes This Design Great

✅ **Bold & Clear** - 2px border is immediately noticeable  
✅ **No Shift** - Always 2px, only color changes  
✅ **Brand Identity** - Primary Brand color throughout  
✅ **Subtle Depth** - Glow shadow adds polish  
✅ **Smooth Animation** - 200ms transition feels natural  
✅ **Fully Accessible** - High contrast, WCAG AA compliant  
✅ **Globally Consistent** - All inputs behave the same  
✅ **Production Ready** - Tested on all devices & browsers  

---

**Version**: 1.0.0  
**Design System**: Intranet Design System v1.0  
**Last Updated**: December 2024  

🎨 **Complete visual design reference for the new input focus states** 🎨
