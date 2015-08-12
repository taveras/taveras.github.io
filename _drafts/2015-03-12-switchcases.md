---
layout: post
title: Object-literal Switch Cases
permalink: switch-cases
duration: 2
---

When it comes to writing software, the first real taste of power you get is when you get your hands on conditional statements. Commonly, code can spiral out of control by taking on a large amount of scenarios, but in turn taking legibility with it. Here is a way I like to fix that.

Conditional statements are a necessary part of a program. We need to handle logic in various ways, and there are plenty of built-in syntaxes for handling conditions, with varying complexity.

You have the common `if` & `else`, the weird `switch` statement, the ternary operator (`x ? y : z`), and even fancy short-circuit evaluation (`x||y`). These conditionals tend to serve separate purposes, but the first two can very quickly lead to the hard to read code we all dread.

Replacing a vital control structure may feel scary, but it can be less so with a clear, well thought out design pattern. 