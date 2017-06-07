---
layout: post
title: Object-literal Switch Cases
permalink: /switch-cases/
duration: 6
description: The software we write commonly will require complex decision making. We can make these decisions much more legible by taking advantage of a JavaScript perk.
---

When it comes to writing software, the first real taste of power you get is when you get your hands on conditional statements. Code commonly will spiral out of control by taking on a large amount of scenarios, but in turn taking legibility with it. Here is a way we can fix that.

Conditional statements are a necessary part of a program. We need to handle logic in various ways, and there are plenty of built-in syntaxes for handling conditions, with varying complexity.

You have the common `if` & `else`, the weird `switch` statement, the ternary operator (`x ? y : z`), and even fancy short-circuit evaluation (`x||y`). These conditionals tend to serve separate purposes, but the first two can very quickly lead to the hard to read code we all dread:

{% highlight javascript %}
function getFavoriteColor(name) {
  if(name === "jordan") {
    return "red";
  }
  else if(name === "devon") {
    return "green";
  }
  else if(name === "sue") {
    return "yellow";
  }
  else if(name === "alex") {
    return "orange";
  }
  else if(name === "alex") {
    return "orange";
  }
  else {
    return "blue";
  }
}
{% endhighlight %}

While being very clear about its intent, this code is full of repitition. One could argue that this boilerplate makes understanding what this function does that much more difficult.

Replacing a control structure may feel strange, but it can be less so with a clear, well thought out design pattern. 

Objects in JavaScript give us a great deal of flexibility. We access object properties using the familiar dot-notation, but this is a convenient shortcut for a different syntax we have seen. {% include pullquote.html quote="The square-bracket notation most used for referencing items in an Array, can also be used for Objects." %}

With this syntax, we can relate objects to structures in some other languages. Namely, associative arrays, hash maps, or dictionaries. These are used in various scenarios, but they allow you to write code that would otherwise be very tedious.

If we created an array, and wished to access the second element, we could do so as following:

{% highlight javascript %}
var a = ['a', 'b', 'c'];

a[1]; // 'b'
{% endhighlight %}

We could also create an object that functions very similar:

{% highlight javascript %}
var o = {
  0: 'a',
  1: 'b',
  2: 'c'
};

o[1]; // 'b'
{% endhighlight %}

Pretty cool! But chances are we have little need to replace an array. Revisiting our `getFavoriteColor` function from earlier, we can now think about how we could improve our code to be more legible. We could easily boil it down to this:

{% highlight javascript %}
function getFavoriteColor(name) {
  var colors = {
      "jordan": "red",
       "devon": "green",
         "sue": "yellow",
        "alex": "orange",
       "robin": "purple"
  };

  return colors[name] || "blue";
}
{% endhighlight %}

Awesome! Not only did we shave down the amount of repeated code, but our code is also much easier to read. One thing you may notice is that the `return` statement for our function has the logical Or operator at the end. This lets us easily simulate the `else` clause in our previous function. If the value of the `name` variable is not a property defined for the `colors` object, we will `undefined`. As this is considered 'falsy' in JavaScript, we will short-circuit to the string "blue."

*Note: While [short-circuit evaluation](/short-circuit-evaluation/) can cut down on lines of code, it can also lead to difficult to find logic errors. If you intentionally want to output a falsy value, you should avoid it.*

Using this pattern, we can increase the legibility and decrease the overall lines of code needed. But it comes at a cost! The only scenario in which you may want to avoid this, is when the switch case you are trying to create is massive. 

The object literal must be completely processed and loaded into memory before the final decision is made. This trade-off is negligible for the average switch case. Yet if you have hundreds of cases, while tempting, you may want to implement a different solution. The performance loss in loading all possibilities could be too large to be worth it. Performance is king!

I hope that learning about the flexibility of JavaScript objects has made you found oppurtunities in your code for legibility, and otherwise atleast you may feel more comfortable working with them.
