---
layout: post
title: Multi-Line Strings
permalink: multi-line-strings
duration: 2
---

Making multi-lined text strings in JavaScript may not be as simple when compared to other languages, but there are a few nice ways to do it.

Most commonly, we add strings together using regular string concatenation:

```javascript
var template = "This"
			+ "Has"
			+ "Multiple Lines!";
```

While this works, it can feel tedious to write. Alternatively, we can also escape the literal new-line character in the string, as follows:

```javascript
var template = "This \
			Has \
			Multiple Lines!";
```

Better! And this is probably the nicest way to do it. Personally, I prefer knowing that my whitespace characters do not affect how my code is interpreted. This way, I can sleep easy knowing that certain build steps such as minification will not cause unwanted side effects! To that end, I prefer writing multi-line strings as arrays: 

```javascript
var template = ["This",
				"Has",
				"Multiple Lines!"].join("\n");
```

Writing each line as array elements, and then joining the array with new-line characters gets us exactly what we need. {% include pullquote.html quote="And best yet, we can totally stop worrying about our whitespace!" %} Though I'm sure it's my mind playing tricks on me, it even feels easier to write!


Also, here is a glimpse of how we will be able to create multi-line strings in ES6:

```javascript
var template = `This
				Has
				Multiple Lines!`;
```

So cool! Template strings are certainly a welcome addition to JavaScript. Just another example of how our language evolves to the way we work. Can't wait to use it!