---
layout: post
title: Date String Formats in JavaScript
permalink: /date-strings/
duration: 4
description: Browsers vary in the string format for dates. Also, there is history behind representing real-world dates on a computer. Pun unfortunately intended.
---

Humans have needed to express moments in time for a large amount of our history. While computers measure time in a simple manner, us humans have come up with the more complex forms. Let's take a look at which formats make sense to use in our JavaScript.

Computers represent time in what is known as a 'time stamp.' {% include pullquote.html quote="Unix machines measure the amount of milliseconds that have passed since January 1st, 1970 GMT." %} As you may imagine, these are huge numbers! Through code, we translate from this raw number to a form that is easier for a human to understand.

There are many date-string formats in the wild, but thankfully a standard has been formulated for us in [ISO 8601](http://www.iso.org/iso/iso8601). Translating between a date string and timestamps is not fun, but the JavaScript `Date` object takes care of this madness for us.

But things are not always that easy. Now, we need to wrangle with a scenario we should be too used to when it comes to writing code for the web: **browser support.**

An [excellent reference](http://dygraphs.com/date-formats.html) has been carefully assembled by [Dan Vanderkam](http://www.danvk.org/). It goes over the various date-string formats you may encounter, and their overall browser support.

One thing to take notice, is that unless you wish to stick with the `evergreen browsers`, your date-string will likely be unable to be in the safe-sounding `ISO 8601` format.

*Note: If you really wanted to use ISO 8601, you could always lean on a fancy JavaScript library such as [Moment.js](http://momentjs.com/).*
