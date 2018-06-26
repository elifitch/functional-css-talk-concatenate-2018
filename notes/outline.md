# Outline

Hey scaling css is hard
* Why
* It
* Is
* hard

Personal intro 
* We have a big app, huge app, used to style maps; photoshop for maps
* SO I know a thing or two about wrestling with CSS on a huge app
* Only like.....I don't. We don't have these problems. We figured out how to scale our CSS system and I'd like to tell you about it.
* So hey, I'm eli. You can follow me on these things if you want.

This is what I'm gonna talk about
* What functional CSS is
* How functional CSS can help us style big apps better
* Misconceptions about Functional CSS
* Legitimate downsides and how to mitigate them

What is functional css
* Introduce it as utility classes. Utility classes everywhere (most places).
  - Woody buzz meme.
  - "And I know what you're thinking right?" zoom in on woody's pained face.
  - "but I'm up here like" pan to buzz's face. "So you must think I'm a crazy person, or something right?"
* But that's fundamentally what functional CSS is. It's about using utility classes to do more than just the occasional WEYLP.
* What are utility classes though? Lets generalize them as classes that do one thing, and do that one thing well. That's anathema to how we "traditionally" write CSS but is a unix principle for building maintainable and scalable software. Weird.
* Functional CSS is fundamentally all about moving complexity out of stylesheets and into templates (components). Scaling CSS is all about reducing complexity in my opinion. Scaling CSS is much harder than scaling templates or components, so moving the complexity there makes sense.

Good things about Functional CSS
* Performance: People focus on performance as the biggest advantage of functional css, but honestly, meh? There are more important benefits in my opinion that we'll get to. That said, cacheability and stuff etc. The biggest most important thing is how functional css makes your styles insanely scalable, and even portable.
* Simplicity: every class does one thing and only one thing. A developer can leave and you can decode their styles. Imagine that!
* Speed: Don't have to think about naming, no fear in adding and removing classes. 
* Safe/Comfortable: It's safer to add and remove classes to an html node than it is to add and remove styles to a class like .card or something. This is why styles get duplicated and CSS bloats in teams.
* Easy to document: Because each class only does one thing, documentaiton becomes much easier to generate.
* More flexible: So you've got a great little button component, and it does the job of being button very well. But then we need to change the color from blue to a minty green, cool, just change the background on the button class. But we need some buttons to stay blue, so then we have to add a button modifier class. Add enough of those up, and it becomes a disaster. With functional css, that becomes a find and replace option. Tedious possibly, but complex it is not. I'd rather trade a moments tedium for less complexity.
* Possible to transition gradually. You can start converting components to use a functional model and roll it out gradually.
* No side effects! Every class does exactly what it says on the tin, and no more.
* Immutable. Because you are not allowed to override a CSS rule, you can have absolute confidence about the rule you're applying.
* NOTE: actually isn't this whole deal all about confidence? Immutability/Side effects/simplicity/flexbility/documentation? Maybe it's worth focusing on the sense of confidence, safety, security, no fear CSS. I think this should be the direction. Functional CSS is about safety, confidence, swagger, comfort, fun, whatever.
* Puts complexity where it belongs: Easier to manage complexity in components than stylesheets



Bad things that aren't actually bad
* Lots of classes make HTML ugly. Yes, but less ugly than a wall of spaghetti css. ryan air pic from here https://css-tricks.com/growing-popularity-atomic-css/. Rely on components or template partials to tell you what a component is. You often hear folks saying proper class names describe what a component is, not what it does or what it looks like. The problem with relying on a CSS class name for that is that it colocates component naming with presentation. Using templates or components is a good idea because it moves those two concepts into separate contexts.
* Hard to know what your options are: I'd argue that reading HTML or your CSS source to know what classes are available to you isn't the best way to go about things, that's what styleguides and documentation pages are for. Functional CSS makes documenation generation super duper simple because there aren't components and cases to mock up, just classes that do a single thing.
* Specificity/The cascade is a feature, not a bug: Folks get up in arms because this "isn't how you write css" learn to use specificity to your advantage and you get cleaner HTML and clean, maintainable CSS. But part of being able to scale your css along with your app and team is minimizing footguns. Specificity is a footgun. A lot of times this is framed as not a CSS problem, not a system problem, but a human problem. If folks were just better at CSS and communicated better while building their product, this wont be an issue. That's like saying that traffic lights shouldn't exist, we should just be better drivers and communicate better with each other. Relying on the cascade more closely couples your UI's structure and style. Relying on tags or the arrangement of specific classnames to make them work locks you into specific markup. This increases the amount of deletion/modification anxiety, because even moving elements around can break styles, and it makes the application of modified styles more brittle. The more deletion/modification anxiety exists, the more likely you are to solve problems by adding more CSS, adding more components, which needlessly increases technical debt, and gradually increases the difficulty of operating in the codebase.




Bad things
* Shitton of classes: If you don't use a templating or component system, this approach probably isn't for you. You gotta write a bunch of classes! If you have to do that over and over whenever you need a button, rather than just bringing in your button component, this will get annoying!
* It's not semantic: Semantic naming is good! it has less importance if you're using a component system like you see with react, vue, or even templating systems like pug. People focus on ultra terse class names, when they don't have to be. But the core to making FCSS semantic is by using components or templates.
* You don't write css as much: Raise your hand if you like writing css. Sorry. This is also a good thing though, because it opens the door to developers who aren't skilled at writing css and helps make them productive contributors.
* You need to have a good feel for the design.
* Certain workflows in devtools aren't as nice anymore.
* Not as well suited for agency work: A lot of the benefits come when scaling and maintaining. It's probably more effective to not establish a functional css system for one-off projects. Unless you were to architect a system that you could configure, but that's a subject for a different talk. I admit that its more naturally suited to products than projects.
* What does this mean: FCSS works best if you can organize your team around X, Y, and Z principles. All of which are good on their own and have their own (overwhelming) merits.

Things that you need to have a good time with funcitonal css
* Functional CSS hearts design systems: functional css should be used as a design system. Writing functional css on the fly is terrible. Oh I need 10px margin here? margin 10 class. Oh I need margin nine in this other place? margin 9 class. NO! If your functional css system IS your design system, then it places guardrails around what you can and can't do. This is a key difference with inline styles.

Differences with inline styles
* Inline styles you can't do shit like css animations, pseudos, media queries, that type of stuff
* Limitations: You shouldn't be writing a buncha new classes all the time. Functional CSS system should dovetail with your design system, it provides guardrails. You can't just toss in a random margin because you feel like it.

Making your own functional CSS system

What defines a scalable UI system:
* Confidence
* Decoupled: Totally independent of structure; more components does not mean more css
* Flexible; The existing CSS can serve many different use cases and product directions



## Resources
### For/General
https://johnpolacek.github.io/the-case-for-atomic-css/
http://mrmrs.github.io/writing/2016/03/24/scalable-css/
http://mrmrs.cc/writing/2016/03/24/scalable-css/
https://jon.gold/2015/07/functional-css/
https://css-tricks.com/lets-define-exactly-atomic-css/
https://css-tricks.com/growing-popularity-atomic-css/
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/
https://github.com/chibicode/react-functional-css-protips
https://marcelosomers.com/writing/rationalizing-functional-css/
https://medium.freecodecamp.org/in-defense-of-utility-first-css-4f406acee6fb
http://cssmojo.com/opinions_of_leaders_considered_harmful/
https://medium.freecodecamp.org/acss-a-dynamic-atomic-css-library-402dff9756e0
Funcitonal CSS vs inline styles https://github.com/tachyons-css/tachyons/issues/12#issuecomment-59828967
http://basscss.com/v7/docs/reference/principles/
### Against
https://benfrain.com/oocss-atomic-css-responsive-web-design-anti-pattern/
this is some type of bullshit http://www.zeldman.com/2017/01/03/kiss-my-classname/
this is really good https://medium.com/simple-human/the-problem-with-atomic-css-d0c09c7aa38e
in favor of cascade, against css in js, also includes great examples of what makes CSS hard to scale https://gomakethings.com/whats-wrong-with-css-in-js/
in favor of cascade https://medium.com/myplanet-musings/stop-worrying-and-learn-to-love-the-cascade-907900eab4e7

## Examples
### bad css
* so with semantic css you're gonna end up with a ton of classes that do the same thing. .link-container, .form-container, etc all do the same flexbox shit and whatnot

## Frameworks
http://tachyons.io/
http://basscss.com/
https://solid.buzzfeed.com/