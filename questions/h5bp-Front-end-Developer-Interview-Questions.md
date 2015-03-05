#Front-end Job Interview Questions

This file contains a number of front-end interview questions that can be used when vetting potential candidates. It is by no means recommended to use every single question here on the same candidate (that would take hours). Choosing a few items from this list should help you vet the intended skills you require.

**Note:** Keep in mind that many of these questions are open-ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would.

## Table of Contents

  1. [General Questions](#general-questions)
  1. [HTML Questions](#html-questions)
  1. [CSS Questions](#css-questions)
  1. [JS Questions](#js-questions)
  1. [Network Questions](#network-questions)
  1. [Coding Questions](#coding-questions)
  1. [Fun Questions](#fun-questions)

## Getting Involved

  1. [Contributors](#contributors)
  1. [How to Contribute](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [License](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### General Questions:

* What did you learn yesterday/this week?
* What excites or interests you about coding?
* What is a recent technical challenge you experienced and how did you solve it?
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
* Talk about your preferred development environment.
* Which version control systems are you familiar with?
* Can you describe your workflow when you create a web page?
* If you have 5 different stylesheets, how would you best integrate them into the site?
* Can you describe the difference between progressive enhancement and graceful degradation?
* How would you optimize a website's assets/resources?
* How many resources will a browser download from a given domain at a time?
  * What are the exceptions?
* Name 3 ways to decrease page load (perceived or actual load time).
* If you jumped on a project and they used tabs and you used spaces, what would you do?
* Describe how you would create a simple slideshow page.
* What tools do you use to test your code's performance?
* If you could master one technology this year, what would it be?
* Explain the importance of standards and standards bodies.
* What is Flash of Unstyled Content? How do you avoid FOUC?
* Explain what ARIA and screenreaders are, and how to make a website accessible.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.

#### HTML Questions:

* What does a `doctype` do?
* What's the difference between standards mode and quirks mode?
* What's the difference between HTML and XHTML?
* Are there any problems with serving pages as `application/xhtml+xml`?
* How do you serve a page with content in multiple languages?
* What kind of things must you be wary of when design or developing for multilingual sites?
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

#### CSS Questions:

* What is the difference between classes and ID's in CSS?
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* What are the various clearing techniques and which is appropriate for what context?
* Explain CSS sprites, and how you would implement them on a page or site.
* What are your favourite image replacement techniques and which do you use when?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Any familiarity with styling SVG?
* How do you optimize your webpages for print?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* List as many values for the display property that you can remember.
* What's the difference between inline and inline-block?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* How is responsive design different from adaptive design?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

#### JS Questions:

* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* How do you go about testing your JavaScript?
* What do you think of AMD vs CommonJS?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
  * **Answer**: the definition of the function along can not be identified as an *expression* by the interpreter. If it could, the following ambiguity will occur:
    ```javascript
    function foo() {}

    (a=1+2);
    ```
    To tell the interpreter that this *is* an expression, use parenthese to enclose the expression, like this:
    ```javascript
    (function foo(){})();
    ```
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
  * How would you go about checking for any of these states?
    * `null` means this variable is empty, `undefined` means this variable is declared but not defined (initialized), `undeclared` means this variable is not even declared (its identifier is not even in the symbol table).
    * It can be illustrated as follows:
      ```javascript
      a;  // here a is undeclared
      var a;  // here a is declared, but undefined
      a = 1;  // here a is declared and defined and not empty (null)
      a = null;  // here a is empty
      ```
    * To check `null`, use `if (a === null)` (use `===` instead of `==`, because `==` will trigger type coersion and result in `undefined == null`)
    * To check `undefined`, use `if (typeof a === "undefined")`. Use `typeof` instead of checking it directly because in some environment `undefined` is not a reserved identifier and can be used to hold other values.
    * To check `undeclared`, use try-catch.
      ```javascript
      try {a} catch(e) { /* a is not avaliable*/ }
      ```
* What is a closure, and how/why would you use one?
  * Closure is a function and the free variable it captures.
  * In JavaScript, if you declare a function in scope A, and then expose this function out of scope A into scope B, then even though B cannot access variables inside A directly, it can still use the exposed function to do that indirectly (provided that the function directly or indirectly reference the variables in A that you want to access).
* What's a typical use case for anonymous functions?
  * IIFE, callbacks, event handlers.
  * Anonymous functions without names should be avoided as possible since they *can* be named in JavaScript. This will make the debugger produces better information for debugging.
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
* Explain `Function.prototype.bind`.
  * This will bind a different object to the function as `this` instead of the default one.
  * Since JavaScript uses lexical scope, in many cases you might want to use a different `this` from what the specification says, then this would come in handy.
  * Some functions (e.g. `setTimeout`) implemented by the runtime uses the global object (e.g. `window`) for callbacks, `bind` can help to make sure the callback is executed with other objects as `this`.
  * Also, you can reuse functions on objects that it isn't designed for by using `bind`.
* When would you use `document.write()`?
  * Never.
* What's the difference between feature detection, feature inference, and using the UA string?
  * You use feature detection to *detect what the browser can do*, usually by testing if a feature exists or does it behave correctly
  * You use feature inference to *guess what the browser can do*, usually by testing other related things to make the inferences. It is not as reliable as feature detection.
  *  You use the UA string to do browser detection, namely to *identify who the browser is*. It is the least reliable method because the UA string can be modified. Also, because browsers can have different versions, different engines, and there could be new browsers developed in the future, this method can not be used extensively.
* Explain AJAX in as much detail as possible.
* Explain how JSONP works (and how it's not really AJAX).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* Explain "hoisting".
  * variable *declaration* is *hoisted before definition*, to the top of the scope. The interpreter will first scan the scope to find out what are declared, then declare them (but not initialize them), and initialize them until the execution reach their definitions.
  * This feature can result in the following situation:
    ```javascript
    a;  // here a is declared but not defined.
    var a = 1;
    ```
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built in JavaScript objects not a good idea?
* Difference between document load event and document ready event?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, `"buzz"` at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?

#### Network Questions:

* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* Can you explain the difference between `GET` and `POST`?
* Can you explain the difference between `GET` and `HEAD`?

#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

`"1020"`. Since `10` and `'20'` does not have the same type, the interpreter will perform type coersion for them. Here `10` will be converted to `"10"` first, then the two string `"10"` and `"20"` will be added together, which is will produce the same result as string concatenation.

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

```javascript
function add(a, b) {
  var len = arguments.length;
  if (len == 2) {
    return a + b;
  } else if (len == 1) {
    return (function subadd(b) {return a + b});
  } else {
    throw ("There should be 1 or 2 arguments");
  }
}
```

The key is the second conditional statement where`subadd` will create a clousre over `add`, capturing the first `a` passed to the function.

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

`"goh angasal a m'i"`. `split("")` will split the string *character by character*, `reverse()` will reverse these characters, `join("")` will join them up.

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

`"bar"`. Because `window.foo` is not defined, the first condition is falsy and the second condition will be checked, then expression enclosing the assignment will then be executed.

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

The first alert is `Hello World`, the second will throw an error. In the IIFE, `foo` can be accessed since it is in the outer scope, so the first alert is the concatenation of the two strings, `Hello World`. But after the IIFE, `bar` is no longer accessible, because it is local to the IIFE. In effect, it is **not even declared** at that moment. Therefore the second alert, trying to access the undeclared `bar`, will throw an errror.

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

`2`.

#### Fun Questions:

* What's a cool project that you've recently worked on?
* What are some things you like about the developer tools you use?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?
* How do you like your coffee?


#### Contributors:

This document started in 2009 as a collaboration of [@paul_irish](http://twitter.com/paul_irish) [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://twitter.com/ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) and [@iansym](http://twitter.com/iansym).

It has since received contributions from [100 developers](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
