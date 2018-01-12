---
layout: post
title: Short-Circuit Evaluation
permalink: /short-circuit-evaluation/
redirect_from: "/short-circuit-evaluation//"
duration: 5
description: Read a guide on how to avoid repetitive conditional logic by instead using a useful pattern.
---

While having little to do with electricity or input-seeking self-aware robots, this technique is still pretty cool to see in action.

Both computers and humans do not enjoy wasting time. As such, some programming languages will skip code that is unnecessary. Here is a good example:

{% highlight javascript %}
if( true || aTotallyUndeclaredVariable ) {
  alert("whoa!");
}
{% endhighlight %}

In the above example, the alert will go off without a hitch. The reason why, is that the JavaScript engine knows that in order to satisfy the logical Or operator (`||`), only one of the two expressions on either side needs to be true. 

Naturally, it starts from the left to the right. Once it sees the first expression, in this case `true`, satisfies the requirement of the logical Or operator, it moves on. Given that `aTotallyUndeclaredVariable` is undeclared, we would get a runtime error if the engine did check the second expression.

How might this be useful? The most common use case is for specifying default values. Look at this function:

{% highlight javascript %}
function speak( message ) {
  alert( message || "Hello!" );
}
speak("Howdy!"); // alert with message 'Howdy!'
speak(); // alert with message 'Hello!'
{% endhighlight %}

Here, we rely on the value of our `message` argument. {% include pullquote.html quote="If the value is 'truthy' the engine will use it, as it satisfies the requirement of our Or operator."%} But if the `message` is 'falsy,' meaning `undefined`, `null`, `false`, `0`, or an empty string, then we will use the string "Hello!", which we know will satisfy the requirement.


The important drawback to remember with short-circuit evaluation, is that it loses its luster when we need to maintain a 'falsy' value. For example:

{% highlight javascript %}
speak(0); // alert with message 'Hello!'
{% endhighlight %}

If we really wanted our alert to only show the number 0, we would be unable to use short-circuit evaluation inside of the `speak` function. Because the value 0 is 'falsy,' it will never satisfy the logical Or condition. We will also never be able to pass in `false`, `null`, or an empty string.


Short-circuit evaluation can be great to use to make your code more flexible, but be sure to remember that it is not always the right tool for the job.
