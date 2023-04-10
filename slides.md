---
theme: ./theme
fonts:
  sans: Comfortaa
highlighter: shiki
class: text-center
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
css: unocss
title: Starbeam
---

# Starbeam

## Simple and Fun Reactivity That Works Everywhere\*

---

## everywhere\*

Starbeam is a universal reactivity library that integrates into frameworks using Starbeam renderers.

### Shipping Renderers

1. React
2. Preact

### Work in Progress

1. Vue
2. Svelte
3. Ember

---

## Why?

---

## The Basics

```ts {1|2|4|6|8|all}
const counter = Cell(0);
const increment = () => counter.current++;

expect(counter).toBe(0);

increment();

expect(counter).toBe(1);
```

<v-after>

It works like normal JavaScript. **That's the point**.

</v-after>

---

## The Debug Renderer

---

## Renderers Aren't Effects

---

## A Reactive Cache

---

## Signals?

---
