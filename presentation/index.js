/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockQuote,
  Quote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Code,
  // Image,
  // Text,
  Notes,
  Cite,
} from 'spectacle';
import {
  Bounce,
  Fade,
  CallFn,
  // DropIn,
  // FromLeft,
  // FromTop,
  // Anticipation,
  // FollowThrough,
  // Letterwave,
  // Squash,
  // Stretch,
  // FromTopSquashStretch,
  // FromTopFollowThroughFun,
  // FromTopFollowThroughSerious,
  // FromTopSecondaryAction,
  // BrandEnergetic,
  // BrandCalm,
  // Rumble,
  Stroke,
  AssemblyFrown,
} from './components/anim/index';
import theme, { contentWidth } from './theme';
// Individual components
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';
import LinkHeading from './components/link-heading';
import Pic from './components/pic';
import Vid from './components/vid';
import Footer from './components/footer';
import Confetti from './components/confetti';
import CodeExample from './components/code-example';
import ImageRow from './components/image-row';
import LinkBarExample from './components/examples/link-bar-example';
import EnvToggle from './components/env-toggle';
// Slides
import LogoRowSlide from './slides/logo-row-slide';
import ThankYouSlide from './slides/thank-you-slide';
import WoodyBuzzZoomPan from './slides/woody-buzz-zoom-pan';

require('normalize.css');

// Aliases
const SH = SectionHeading;
const SSH = SubsectionHeading;
const H = SlideHeading;
const Annot = ({ children }) => <H size={6}>{children}</H>;
Annot.propTypes = PropTypes.node.isRequired;
const Hsmall = Annot;

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      showSocialPointer: false,
      enableConfetti: false,
      fireConfetti: false,
    };
    this.showSocialPoiner = this.showSocialPoiner.bind(this);
    this.hideSocialPoiner = this.hideSocialPoiner.bind(this);
    this.enableConfetti = this.enableConfetti.bind(this);
    this.shootConfetti = this.shootConfetti.bind(this);
    this.stopConfetti = this.stopConfetti.bind(this);
  }
  showSocialPoiner() {
    this.setState({ showSocialPointer: true });
  }
  hideSocialPoiner() {
    this.setState({ showSocialPointer: false });
  }

  enableConfetti() {
    this.setState({ enableConfetti: true });
  }
  shootConfetti() {
    if (this.state.enableConfetti) {
      this.setState({ fireConfetti: true });
    }
  }
  stopConfetti() {
    if (this.state.enableConfetti) {
      this.setState({ fireConfetti: false });
    }
  }

  render() {
    return (
      <div
        role="widget" // eslint-disable-line
        onMouseDown={this.shootConfetti}
        onMouseUp={this.stopConfetti}
      >
        <Deck
          transition={['slide']}
          transitionDuration={300}
          theme={theme}
          controls={false}
          bgColor="#ff00ff"
          contentWidth={contentWidth}
          contentHeight={1000}
          progress="bar"
        >
          <Slide >
            <Title lineHeight={1}>Functional CSS at Scale</Title>
            <Heading size={4} textColor="nearBlack">Clean &amp; Composable UI on massive apps</Heading>
          </Slide>

          <Slide>
            <H>Scaling CSS is <Fade>hard.</Fade><br /><Fade>Right?</Fade></H>
            <Notes>
              "Scaling css is....hard...right?"
            </Notes>
          </Slide>

          <Slide>
            <H>
              At least
              <Bounce>.</Bounce>
              <Bounce>.</Bounce>
              <Bounce>.</Bounce>
              <Fade>that's what they tell me.</Fade>
            </H>
            <Notes>
              "at least.......that's what they tell me?"
              Show of hands, who thinks CSS is hard to scale.
              Yeah I can see a pattern developing here, I guess it is hard to scale after all.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="peter-griffin-css.gif" />
            <Notes>
              We see gifs all the time like this
            </Notes>
          </Slide>

          <Slide>
            <Vid src="css-puzzle.mp4" />
            <Notes>
              and this
            </Notes>
          </Slide>

          <Slide>
            <Pic src="css-bears.gif" />
            <Notes>
              We see gifs all the time like this
            </Notes>
          </Slide>

          {/* <Slide>
            <H>I have a <Stroke>terrible</Stroke> confession to make.</H>
            <Fade><H>I forgot this was a thing.</H></Fade>
            <Notes>
              I have a terrible confession to make. I haven't really thought about the struggles of scaling CSS in more than a year.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="oops.gif" portrait style={{ height: '60vh' }} />
            <Notes>
              Since I started a new job about a year ago, I just haven't had to think about these problems.
              The system that we use to architect our CSS just....takes care of it. Makes it easy.
            </Notes>
          </Slide> */}

          <Slide>
            <H>🖐 Who's lost time this summer<br />debugging style issues?</H>
            <H><Fade>Was it a lot of time?</Fade></H>
            <Notes>
              Have you had to had to wrangle CSS this summer? I wouldn't blame you if so.
              If you had, just shout it out, how much time have you spent, per day, per week, whatever.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="kobe-nod.gif" />
            <Notes>
              I have spent...zero time debugging styles in the past month at work.
              In fact I have spent zero time debugging styles at work in the past year.
              Not some time, not a little bit of time, no time. Zero.

              Not zero time overall, on personal projects I've spend a huge amount of time on this,
              even making this presentation. But at work, this problem has been solved for me.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="panda-rage.gif" style={{ height: '60vh' }} />
            <Notes>
              If you're struggling managing your styles on a large app, 
              I wouldn't blame you if you felt like this panda bear right now.

              Few things are worse than struggling with a problem and hearing 
              some smug jerk tell you that they forgot that problem even existed,
              no matter how facetious they were being.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="panda-wiggle.mp4" />
            <Notes>
              So lets talk about how we ensure our CSS scales, and hopefully
              by the time I'm done, rage panda will be uhhhh happy...wiggle panda.
            </Notes>
          </Slide>

          <Slide>
            <H>Hi, I'm Eli.</H>
            <Fade><Hsmall>And I'd like to talk to y'all about how we manage CSS at Mapbox.</Hsmall></Fade>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <LogoRowSlide />
            <CallFn fn={this.showSocialPoiner} />
            <CallFn fn={this.hideSocialPoiner} />
          </Slide>

          <Slide>
            <Pic src="studio-home.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything 
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-datasets.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-style-editor.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-fonts.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-icons.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-curve.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-formula.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-json.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>
          <Slide>
            <Pic src="studio-heatmap.jpg" />
            <Notes>
              At work I primarily work on a product called Mapbox Studio, which is a design tool for creating beautiful interactive maps.
              It's an incredibly complex app as you can see. There's a suite of design tools in here, dataset authoring and management.
              Data, image, and font uploading, hell, it even has account administration features built in.

              It's a very *very* complex app, exactly the kind of app you'd expect to have totally snarled, awful nasty css, but it doesnt.
              In fact it only has [[[some kilobytes]]] of app CSS, and like 80% of that is custom illustrations.
              The rest of our CSS is powered by a CSS library we share with mapbox.com, all our documentation pages, and pretty much everything
              else we put out. That library is called "Assembly"
            </Notes>
          </Slide>

          <Slide>
            <ImageRow
              srcs={['assembly.svg', 'david-the-clark.jpg', 'katy-decorah.jpg', 'saman.png', 'dana-sulit.jpg']}
              styleOverrides={[
                { width: 'auto', height: '50vh' },
                { borderRadius: '100%' },
                { borderRadius: '100%' },
                { borderRadius: '100%' },
                { borderRadius: '100%' },
              ]}
            />
            <Notes>
              Assembly is a css framework we built and use at mapbox. It's primarily the brainchild of mapbox developers 
              David Clark, Katy Decorah, Saman Bemel-Benrud, and Dana Sulit.
              
              Assembly is open source, you're 100% free to use it, I really enjoy it and feel 
              like it's very very well documented, but it's not been designed for widespread use, and I'm not here to tell 
              you to use assembly on your apps, but rather why embracing the paradigms that led us to create assembly work 
              well for us, and why they might work well for you too.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="functional-atomic.png" />
            <Notes>
              That paradigm is "functional css", which basically means, classes only do one very small thing, and you compose them
              together to make larger things, just like functional programming. This is also sometimes -- often? -- called atomic
              css. I avoid this term because it's often conflated with the atomic css library, and the atomic design pattern coined
              by brad frost. So I'm going to be calling it functional CSS today.
            </Notes>
          </Slide>

          <Slide>
            <WoodyBuzzZoomPan />
            <Notes>
              What this basically means, in practice, is "utility classes. utiility classes everywhere". I know what you're thinking right.
              There's this raving madman saying we should use utility classes for everything, talking to you like this.
              Meanwhile y'all are all feeling like this? 
            </Notes>
          </Slide>

          <Slide>
            <div style={{ width: '60vw', margin: '0 auto' }}>
              <LinkBarExample />
            </div>
            <Notes>
              Lets look at an example. This is a simple component that I lifted from mapbox studio. It's basically a big link button, 
              that takes you to the view where you create a custom map style.
            </Notes>
          </Slide>

          <Slide>
            <CodeExample src="link-bar-html" lang="html" />
            <Notes>
              Here's what it might look like in a BEM like system. Not too bad, pretty clean. Good class names.
            </Notes>
          </Slide>

          <Slide>
            <CodeExample src="link-bar-assembly-html" lang="html" />
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <CodeExample src="link-bar-assembly-css" />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <Pic src="welp.jpg" />
            <Notes>
              Show of hands, raise them up if you have this face right now. That's a lie, I see your faces and it's a *lot* more than that.
              That's okay! This looks crazy, even to me. I get it. These feelings are normal. When I first started writing functional css, 
              I felt like I was taking crazy pills. I was used to using 
            </Notes>
          </Slide>

          <Slide>
            <SH>Misconceptions</SH>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>Misconceptions about functional CSS</ListHeading>
            <List>
              <ListItem><Fade>Too verbose &amp; slow to write.</Fade></ListItem>
              <ListItem><Fade>Hard to read.</Fade></ListItem>
              <ListItem><Fade>Breaks inspector workflow.</Fade></ListItem>
              <ListItem><Fade>It's basically just inline styles.</Fade></ListItem>
            </List>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SSH>Verbosity</SSH>
            <Notes>
              Verbosity, is on its surface a reasonable criticism. After all...
            </Notes>
          </Slide>

          <Slide>
            <CodeExample src="link-bar-assembly-html" lang="html" />
            <Notes>
              Functional CSS means composing larger numbers of smaller classes to reach the same outcome. This means that 
              you will encounter larger numbers of classes on a single element. If you had a whole page of elements that
              look like this, that would indeed be a complete nightmare, that would be hard to read and grok what's going on.
            </Notes>
          </Slide>

          <Slide>
            <H>Components are the answer</H>
            <Annot>[[important to nail this]]</Annot>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <CodeExample src="link-bar-component" lang="html" />
            <Notes>
              You don't interact with this enormous classname vomit on a day-to-day basis. That verbosity should be stashed 
              away using a component system. This doesn't mean react component. This pattern can be used in React, Angular, Vue,
              or even HTML preprocessors like pug, nunjucks and more.

              If you're not using a component system, or template partials, to compose your UI, then you'll have to grapple with 
              more verbose classes. That said, if you're building a large app where scaling CSS is important, and you're not using 
              some type of reusable component system, its outside the scope of this talk but you should look at adopting one, 
              because it will make your life better, I promise.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Readability</SSH>
            <Notes>
              Functional CSS classes don't have to be incomprehensible gobbledygook either!
            </Notes>
          </Slide>

          <Slide>
            <H>Functional CSS characterized<br />by crazy classnames</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H><Code>D(tbc) Va(m) P(20px) Bgc(#0280ae.5)</Code></H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <CodeExample
              src="atomic-vs-assembly"
              lang="html"
            />
            <Notes>
              Here's an example. Which one of these buttons has a blue background? 
            </Notes>
          </Slide>

          <Slide>
            <H><Stroke>Surprise!</Stroke> <Fade>Both of em.</Fade></H>
            <Notes>
              Surprise! They both do. But a class named "color-blue" is significantly more grokkable than a hex string.
              Functional CSS doesn't mean obtuse class names. What it means is class names that describe what a component looks like 
              like "a blue button" rather than what a component does or represents like "a primary button"

              What this eventually means is that components are not more than the sum of their parts, they are *exactly*,
               predictably and immutably the sum of their parts.
            </Notes>
          </Slide>

          <Slide>
            <H>Functional CSS !== unreadable naming</H>
            <Notes>
              Doesn't necessarily mean crazy classnames, that's an implementation choice taken by some popular functional css
              libraries but isn't a trait of the 
            </Notes>
          </Slide>

          {/* <Slide>
            <SSH>Cascade</SSH>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>The cascade is a feature, not a bug.</H>
            <H><Fade>For us.</Fade></H>
            <Annot>[[since you're going to talk about making a system accessible to non CSS focused devs later, maybe you can skip this; after all BEM doesn't cascade and people don't hate it so maybe this isn't a big negative misconception after all]]</Annot>
            <Notes>
              Elegantly using the global nature of CSS along with the cascade lets you elegantly create complex styles with minimal code. The problem is that, well, it's really heckin hard!
              Show of hands how many folks work on a team where developers who aren't CSS experts write UI code? The cascade probably makes it hard for these folks, and as a result makes your whole team less productive.
              So it's true that functional CSS doesn't use the cascade, but that's not the worst thing.
              After all, many CSS paradigms, like BEM, have abandoned the cascade in exchange for simplicity and approachability.
            </Notes>
          </Slide> */}

          <Slide>
            <SSH>Functional CSS &amp; the inspector</SSH>
            <Notes>
              There's a vocal contingent of folks that like to make edits to their HTML and CSS in browser devtools and then 
              bring those changes into code. I am one of these people. These established workflows change when you introduce 
              functional CSS, so lets talk about what changes and how to get around these new issues.
            </Notes>
          </Slide>

          {/* <Slide>
            <H>Editing CSS in the inspector is<br />a big part of my workflow.</H>
            <Notes>
              Editing CSS in the inspector is a big part of my workflow, and something that changes a little bit with functional 
              css.
            </Notes>
          </Slide> */}

          {/* <Slide>
            <Annot>[[video of editing a single class in the inspector without issue. link bar.]]</Annot>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Annot>[[video of editing with assembly in the inspector. link bar.]]</Annot>
            <Notes>
              In a funcitonal CSS system, it's not as simple as editing the single class attached to an element. It's more about 
              adding and removing classes to HTML.

              This, to me, is still my least favorite thing about functional css. I'm working on a browser exteinsion that i hope 
              will make this easier, but for now, this is still a definite downside to me.
            </Notes>
          </Slide> */}

          <Slide>
            <H>Finding elements can be difficult.</H>
            <Notes>
              This opens up a second problem, finding HTML elements without semantic class names can be difficult.
              If you're using react or some system with ready made tooling, this is less of an issue, since you can use
              those tools to find your component. If you're using a templating system without tooling...
            </Notes>
          </Slide>

          <Slide>
            <CodeExample
              src="link-bar-identifier"
              lang="html"
            />
            <Notes>
              ...I usually attach an identifier data-attribute to make it easier to find. These attributes can be stripped 
              out when performing a production build if you're worried about increasing the size of your HTML, but honestly 
              that's not something I'd worry about too much. There are likely bigger performance fish to fry.
            </Notes>
          </Slide>

          <Slide>
            <SSH>May as well just use inline styles</SSH>
            <Fade><SSH>lol nothing matters</SSH></Fade>
            <Notes>
              If each class does one thing and only one thing, why not just use inline styles?
              And since we know inline styles are bad, therefore funcitonal CSS is bad. Aha! Gotcha!
            </Notes>
          </Slide>

          <Slide>
            <CodeExample
              src="functional-vs-inline-styles"
              lang="html"
            />
            <Notes>
              This argument is on the face of it, pretty persuasive. Each of these classes does just one thing, so why not just 
              use inline styles instead of this?
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>Why functional CSS &gt; inline styles</ListHeading>
            <List>
              <ListItem><Fade>Aligned to a design system.</Fade></ListItem>
              <ListItem><Fade>Media queries, pseudo elements, keyframes.</Fade></ListItem>
              <ListItem><Fade>Rendering speed.</Fade></ListItem>
            </List>
            <Notes>
              The biggest reason is guardrails, with functional css you can't just set any value to anything you want.
              You can set say...margin bottom to any value you please with inline styles. With functional CSS you can 
              only set it to values pre-approved by your design system.

              Functional CSS also supports super important things like media queries, pseudo elements, and keyframe animations,
              that aren't possible with inline styles.

              Inline styles are scoped to a single element, whereas a functional class has a one to many relationship with elements.
              With really complex UIs, this is a non trivial difference which *can* (but not always) cause layout jank when using 
              inline styles instead of Functional CSS.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="denzel-phew.gif" />
            <Notes>
              See, maybe functional CSS isn't as crazy as you might have initially thought...
            </Notes>
          </Slide>

          <Slide>
            <SH>Scalability</SH>
            <Notes>
              ...And we can talk about how functional CSS can help you scale up your styles.
            </Notes>
          </Slide>
          
          {/* <Slide>
            <Pic src="zeldman.jpg" />
            <Notes>
              Jeffrey Zeldman put his objections particularly strongly in a post pithily entitled "kiss my classname".
              He makes some good points in here, and is someone I absolutely respect, so what I'm about to say isn't 
              meant as some kind of swing at him or his ideas.

              In this post he insists that content-semantic classnames, like "link-bar" are superior to visual-semantic classnames 
              like "col-3" or "mb-18", because the problems that visual-semantic class naming aims to fix is better addressed 
              by developers communicating with each other and forming pattern libraries. 

            </Notes>
          </Slide>

          <Slide>
            <BlockQuote style={{ maxWidth: 1200 }}>
              <Quote>But making things easier for yourself and other developers is not your job.</Quote>
              <Cite>Jeffrey Zeldman</Cite>
            </BlockQuote>
            <Notes>
              In this post, among some excellent points, he says that visually-semantic classnames might be easier for developers 
              to understand, following that up with this quote "but making things easier for yourself and other developers is not 
              your job".

              I could not disagree more with this. The easier style becomes for developers, the more quickly we are able to work.
              This means we can iterate more to find the best solution for users, reduce our surface area for bugs, spare more mental energy 
              for solving core problems, ship more features critical to our organizations, and yeah, have a better time at work.

              This tacit admission that funcitonal CSS's composed visually semantic class naming makes things easier for us is 
              the core reason why I think it's a great way to make your UI more scalable. So lets get into it.
            </Notes>
          </Slide>

          <Slide>
            <Annot>This zeldman spat might not be in the right place; or necessary</Annot>
            <Notes>
              
            </Notes>
          </Slide> */}

          <Slide>
            <ListHeading>What makes for scalable software</ListHeading>
            <List>
              <ListItem><Fade>Performant.</Fade></ListItem>
              <ListItem><Fade>Inspires confidence.</Fade></ListItem>
              <ListItem><Fade>Isolates complexity.</Fade></ListItem>
              <ListItem><Fade>Decoupled from as much as possible.</Fade></ListItem>
              <ListItem><Fade>Puts the many before the few.</Fade></ListItem>
            </List>
            <Notes>
              Lets talk about what defines a scalable system. I feel like there are six main points.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Performant</SSH>
            <Notes>
              If you've heard about functional CSS before, it's likely that you've heard folks tout its performance benefits.
              And the performance advantages, especially over time, as it scales, are enormous.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="css-graph.png" />
            <Notes>
              This type of chart is often thrown out there by Functional CSS advocates showing that functional CSS
              reduces stylesheet size. Because you use a discrete set of utilites to do all your styling, adding more
              markup, more components, more features DOES NOT mean more CSS, unlike in traditinoal cases, where you would
              probably create new classes to style the new components.
            </Notes>
          </Slide>

          <Slide>
            <H>Write UI without writing CSS</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Pic src="css-stats-mapbox.jpg" />
            <Notes>
              As a result, our main stylesheet clocks in at just 79kb.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="css-stats-twitter.jpg" />
            <Notes>
              Compare that to twitter which is significantly larger at 600 some odd kb
            </Notes>
          </Slide>

          <Slide>
            <Pic src="mapbox-studio-ui.jpg" />
            <Notes>
              ...large, furiously complex web applications, like Mapbox Studio
            </Notes>
          </Slide>

          <Slide>
            <Pic src="mapbox-dot-com.jpg" />
            <Notes>
              To nice, flashy content/marketing pages like on mapbox.com, as well as all our documentation pages and examples.
            </Notes>
          </Slide>

          <Slide>
            <H>Cross-product caching</H>
            <Notes>
              We'll get into this more in a moment later, but the ability to use the same stylesheet on multiple pages, multiple
              sites, means that this sheet can be cached across products, achieving even greater performance benefits.
            </Notes>
          </Slide>

          <Slide>
            <H>Write once, ship everywhere.</H>
            <Notes>
              This means you can write your CSS one time, and then use it to ship any number of new ideas, applications. Or make
              sweeping updates to an existing one.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Confidence</SSH>
            <Notes>
              Scalable systems should inspire confidence in implementors. They shouldn't have to hem and haw on decisions
              worrying if this is the straw that breaks the camel's back.
            </Notes>
          </Slide>

          <Slide>
            <Pic src="css-bar-stool.jpg" />
            <Notes>
              A few years ago I saw this joke pop up on twitter and thought it was funny, but true, in some codebases. Changing
              CSS can have unpredictable results, and this means uncertainty leads to fear. Fear that changes will have bad
              side effects.
            </Notes>
          </Slide>

          <Slide>
            <H>Fear ➡️ complexity ️ ➡️<br />more fear ➡️ more complexity</H>
            <Notes>
              One big reason CSS tends to grow over time is because of this fear.
              Because people are afraid of deleting classes and changing styles, because the
              results of those actions are unpredictable. Functional CSS lets us create UI without fear.
            </Notes>
          </Slide>

          {/* <Slide>
            <H>Exactly the sum of their parts</H>
            <Notes>
              I've heart it told before that a sucessful CSS system is more than the sum of its parts.
              I'm not sure about that, but I am sure that Functional CSS components are *exactly* the sum of their parts.
            </Notes>
          </Slide> */}

          <Slide>
            <H>Classes do one thing.</H>
            <H><Fade>Classes scoped to their element.</Fade></H>
            <H><Fade>Difficult to accidentally override.</Fade></H>
            <Notes>
              At the end of the day what this means is that the cSS itself is *much* simpler, and you'll generally be working 
              in CSS files less, and in HTML more. This generally means more confidence that what you do wont have side effects 
            </Notes>
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote>"Does exactly what it says on the tin"</Quote>
              <Cite>Some advert???</Cite>
            </BlockQuote>
            <Notes>
              To put it another way, Functional CSS classes do exactly what it says on the tin. This means they
              are very simple and can be used with absolute confidence.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Complexity</SSH>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Archeticture is the intentional<br />management of tradeoffs</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Reducing vs. distributing complexity.</H>
            <Notes>
              Once a software system reaches a cetain amount of complexity, the greater challenge becomes distriguting rather 
              than reducing complexity.
              
              Functional CSS helps manage complexity by abstracting complexity into a place where it is more easily managed.
            </Notes>
          </Slide>

          <Slide>
            <H>Complex stylesheets are hard to scale</H>
            <Notes>
              Scaling CSS is hard enough, scaling complicated CSS becomes much more difficult. Once you start having CSS that 
              overrides other CSS, nested rules and conditions, making modifications to that CSS beigns to get more and more 
              difficult. Once your CSS goes "off the rails" it gets harder and harder to put it right again.
            </Notes>
          </Slide>

          <Slide>
            <H>Functional CSS isolates<br />complexity in markup</H>
            <Notes>
              Functional CSS attemtps to sidestep this problem by keeping CSS a list of utilities, and moving complexity 
              into how those classes are composed. Essentially it moves complexity into markup. Because markup is easier 
              to isolate in components or template partials, this tends to be an overall win for scalability.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Decoupled</SSH>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Semantic CSS couples<br />style and components</H>
            <Notes>
              CSS classes often serve as a proxy, not just describing how a component looks, which is CSS's job,
              but also describing what a component is or does.
            </Notes>
          </Slide>

          <Slide>
            <CodeExample
              src="link-bar-html"
              lang="html"
            />
            <Notes>
              In this example component, we're relying on style definitions to tell us that this component is a link bar,
              AND tell us what the link bar should look like.

              This means that markup, components, and style are all highly coupled, and it becomes difficult to scale because 
              when one must change, often so do the others. This has become so normalized that we don't even think about it
              anymore, but it doesn't have to be this way.
            </Notes>
          </Slide>

          <Slide>
            <H>Functional CSS decouples<br />style and components</H>
            <Notes>
              With funcitonal CSS, we rely on style utilities to define what a component looks like, and use either a component
              system, tempalte partials, or even a simple data-attribute to define a component's name and role.
              
              This decoupling means that it is far easier to change both markup and styles in isolation.
            </Notes>
          </Slide>

          <Slide>
            <SSH>Team Oriented</SSH>
            <Annot>[[If we gotta cut one, let it be this one]]</Annot>
            <Notes>
              Fodder for a slide: "I wrote some CSS! No you wrote some technical debt."
            </Notes>
          </Slide>

          <Slide>
            <H>🖐 Who works with devs<br />who aren't CSS focused?</H>
            <H><Fade>🖐 Do they contribute CSS code?</Fade></H>
            <H><Fade>🖐 Is that code often instant tech debt?</Fade></H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>CSS expertise is <Stroke>rare</Stroke></H>
            <Notes>
              We should acknolwedge that CSS is incredibly difficult to write and understand sometimes. 
              We should also acknowledge that CSS expertise is really rare.
              It takes a very long time to become an expert in writing CSS.
              It's both unfair and unrealistic for us to expect that all the developers on our team become
              CSS experts
            </Notes>
          </Slide>

          <Slide>
            <H>Unencumber our team mates</H>
            <Notes>
              Because Functional CSS means you don't have to write CSS to create or modify components, you just have 
              to know what classes are available. You still have to understand how CSS works, the box model, flex rules,
              and Grid, but it lowers the barrier to entry by restricting the CSS you "write" to a small subset of 
              available options.

              This is very important for scalability, because it makes the system more resiliet to a changing or growing team.
            </Notes>
          </Slide>

          <Slide>
            <SH>Get to work</SH>
            <Notes>
              All of this is great, and hopefully I've convinced you that functional css is at least worthy of consideration.
              But what does this really mean for you, how would you integrate functional css into your projects?
            </Notes>
          </Slide>

          <Slide>
            <H>Is Functional CSS for you?</H>
            <H><Fade>Maybe.</Fade> <Fade>Maybe not.</Fade></H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>I don't use Functional CSS for everything.</H>
            <H><Fade>Or even most things.</Fade></H>
            <Notes>
              I don't use functional css for everything. On personal projects I like to write my CSS by hand, mostly because 
              I don't want to create a design system and functional css classes around that system for small projects, and 
              also because it's fun to write CSS. I wanted to throw this out there so my enthusiasm for Functional CSS doesn't 
              come off as blind dogmatism.

              If you don't have a component system, its probably not worth switching.
            </Notes>
          </Slide>

          <Slide>
            <H>Does CSS ever feel like a stumbling block?</H>
            <H><Fade>Does it feel that way frequently?</Fade></H>
            <Notes>
              I feel like the usefulness of functional CSS can be captured with a few questions.
              If you answered yes to these questions, then functional CSS might be a good fit. I understand the temptation 
              to dismiss these questions, but I'm willing to bet that many people in this room have worked on a project where 
              this was the case.

              Whether your CSS is experiencing scaling problems is hard to capture in a slide, but it's likely that you can
              feel if it's happening.

              If you answered no to these questions, then that's awesome......and also are you hiring? Jokes aside I've worked 
              in environemnts where funcitonal CSS systems would have been unneccessary, I've worked in environments where they'd 
              have been overkill. BUt I've also worked in environments where it was remarkably helpful.
            </Notes>
          </Slide>

          {/* <Slide>
            <Pic src="tachyons-logo.svg" />
            <Notes>
              You could also use something like tachyons, but this suffers from baked in font families, vertical
              rhythm, sizing and spacing that's going to be different from project to project. If you're hacking
              Not to trash tachyons, because it's a great library that I've used before on side projects and enjoyed,
              and was one of several key inspirations for Assembly [[CONFIRM]]
            </Notes>
          </Slide> */}

          <Slide>
            <AssemblyFrown />
            <Notes>
              Use assembly? maybe. We have our own defaults baked in, but you can clone the project and modify 
              some datafiles to produce new layouts, colors, and so on.

              Do the anim.
              
              BUt it's not the most ergonomic library in the world. Assebmly is open source, so you can use it 
              but it was really designed for our use case, more than every potential use case in the world.
              Maybe in the future this will change, and you'll be able to use assebmly to quickly and easily
              generate a clean custom CSS system, but at the moment, this takes some effort.
            </Notes>
          </Slide>

          <Slide>
            <H>It's worth making a system to fit your needs.</H>
            <Notes>
              It's worth making your own thing. This doesn't have to be a herculean undertaking, although it can be.
            </Notes>
          </Slide>

          <Slide>
            <H>Start with layout, type and colors</H>
            <H><Fade>everything else will follow.</Fade></H>
            <Notes>
              Take a couple hours, and make a set of utilities that establish sizes, vertical rhythim via margin and
              padding, a grid, and type sizing. Once you have those foundations, you can start making meaningful progress. 
              When you find yourself writing more style definitions on top of those classes, break them out into their own 
              utilities. Before you know it, your whole CSS base will be accounted for and you can start converting old 
              classes into compositions.
            </Notes>
          </Slide>

          <Slide>
            <H>Doesn't have to happen all at once.</H>
            <H><Fade>Will accellerate as you make progress.</Fade></H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>Set your guardrails and stick to them.</H>
            <Notes>
              When going through this conversion process, resist the temptation to create new classes for weird little edge 
              cases. Take this opportunity to use your functional css system as a design system, and exicse unneeded exceptions
              from your design.
            </Notes>
          </Slide>

          <Slide>
            <SH>TLDR</SH>
            <Notes>
              Wrapping up
            </Notes>
          </Slide>

          <Slide>
            <H>Let go of your preconceptions.</H>
            <Notes>
              Functional CSS isn't the devil, it's just a different methodology
            </Notes>
          </Slide>

          <Slide>
            <H>Put re-use and decoupled freedom first</H>
            <Notes>
              Functional CSS's power flows from two facets: it puts re-use before everything else by restricting CSS to a set 
              of utilities. It also creates a hard division between the definition of a component's style from a component's role. 
              All the benefits of functional css: confidence, performance, all the things that make it so scalable flow from these 
              two points.
            </Notes>
          </Slide>

          <Slide>
            <H>Write UI without writing CSS.</H>
            <Notes>
              What all these plus points, all the scalability stuff what it all boils down to, is that you're now able to write 
              UI without writing CSS. This is both a big plus point, and a negative. Hell I enjoy writing CSS, and I bet 
              plenty of y'all do too.

              This is also why I imagine the reaction to functional CSS as an idea is so visceral. Folks don't want to stop 
              writing CSS. I get that. I don't want to stop writing CSS either.

              But on large projects, on projects where we first and foremost aim to ship value to users and create a more 
              inclusive environment for UI development, one where CSS expertise is not a barrier to participation, the 
              ability to write UI without writing new CSS becomes very valuable.
            </Notes>
          </Slide>

          <Slide>
            <H>Don't settle.</H>
            <Notes>
              Don't settle for expediency. Don't grab something "off the shelf". A functional CSS system will define your 
              design, so don't just grab something off the shelf. Tweak it to make it yours, or build something yourself. 
              Nobody knows your app, your problem, and your users like you do, and your design should reflect that. 
            </Notes>
          </Slide>

          <Slide bgColor="transparent">
            <ThankYouSlide />
            <CallFn fn={this.enableConfetti} />
            <CallFn fn={this.shootConfetti} />
            <CallFn fn={this.stopConfetti} />
            <Fade><LinkHeading href="http://assets.eli.wtf/talks/animation-talk-fitc-2018">http://assets.eli.wtf/talks/animation-talk-fitc-2018</LinkHeading></Fade>
            <CallFn fn={this.showSocialPoiner} />
          </Slide>

        </Deck>
        <Confetti
          enableConfetti={this.state.enableConfetti}
          shootConfetti={this.state.fireConfetti}
        />
        <Footer
          showSocialPoiner={this.state.showSocialPointer}
        />
      </div>
    );
  }
}
