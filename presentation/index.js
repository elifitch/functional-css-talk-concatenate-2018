/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockQuote,
  Cite,
  Quote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  // Image,
  // Text,
  Notes,
} from 'spectacle';
import {
  Bounce,
  Fade,
  CallFn,
  DropIn,
  FromLeft,
  FromTop,
  Anticipation,
  FollowThrough,
  Letterwave,
  Squash,
  Stretch,
  FromTopSquashStretch,
  FromTopFollowThroughFun,
  FromTopFollowThroughSerious,
  FromTopSecondaryAction,
  BrandEnergetic,
  BrandCalm,
  Rumble,
  Stroke,
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
import LoginModal from './components/login-modal';
import BouncingBall from './components/bouncing-ball';
import Confetti from './components/confetti';
import CodeExample from './components/code-example';
import ImageRow from './components/image-row';
import LinkBarExample from './components/examples/link-bar-example';
// Slides
import LogoRowSlide from './slides/logo-row-slide';
import EarthPointerSlide from './slides/earth-pointer-slide';
import DorsalVentralBrain from './slides/dorsal-ventral-brain';
import ProgressBarDemo from './slides/progress-bar-demo';
import PapyrusSlide from './slides/papyrus-slide';
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
            <Heading size={4} textColor="nearBlack">Clean &amp; Composable UI on a massive app</Heading>
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
              Show of hands, who things CSS is hard to scale.
              Yeah I can see a pattern developing here, I guess it is hard to scale after all.
            </Notes>
          </Slide>

          {/* <Slide>
            <Annot>Some example of complex CSS.</Annot>
            <Notes>
              
            </Notes>
          </Slide>
          <Slide>
            <Annot>But then I need to make [[[some change]]]</Annot>
            <Annot>And then it gets even uglier</Annot>
            <Annot>And everything falls apart.</Annot>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>Oh right. So it turns out scaling CSS is <Bounce>hard.</Bounce></H>
            <H><Bounce>Really hard.</Bounce></H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Hsmall><Bounce>Naming collisions</Bounce></Hsmall>
            <Hsmall><Bounce>Specificity creep</Bounce></Hsmall>
            <Hsmall><Bounce>Deletion anxiety</Bounce></Hsmall>
            <Hsmall>others...</Hsmall>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Pic src="peter-griffin-css.gif" />
            <Notes>
              Who's felt this way before? This famous gif really illustrates the struggle that I'm sure so many of us have faced
            </Notes>
          </Slide> */}

          <Slide>
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
            <Annot>[[Rip through studio with image and video slides showing dataset editor, style list page, account administration, tileset list, font uploads, image uploads, data uploads, and of course lots and lots AND LOTS of map styling]]</Annot>
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
              srcs={['assembly.svg', 'david-the-clark.jpg', 'saman.png']}
              styleOverrides={[
                { width: 'auto', height: '50vh' },
                { borderRadius: '100%' },
                { borderRadius: '100%' },
              ]}
            />
            <Notes>
              Assembly is a css framework we built and use at mapbox. It's primarily the brainchild of David Clark, of Stylelint fame, and 
              Saman Bemel-Benrud, if you don't know about him, he's done as much for radically custom interactive map design as anybody on 
              the planet.
              
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
            <CodeExample source={require('./code-examples/link-bar-html.example')} lang="html" />
            <Notes>
              Here's what it might look like in a BEM like system. Not too bad, pretty clean. Good class names.
            </Notes>
          </Slide>

          <Slide>
            <CodeExample source={require('./code-examples/link-bar-assembly-html.example')} lang="html" />
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <CodeExample source={require('./code-examples/link-bar-assembly-css.example')} />
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
            <Annot>[[The misconceptions section is ripe for reduction]]</Annot>
            <List>
              <ListItem><Fade>Too verbose &amp; hard to grok.</Fade></ListItem>
              <ListItem><Fade>Defies the cascade.</Fade></ListItem>
              <ListItem><Fade>It's basically just inline styles.</Fade></ListItem>
              <ListItem><Fade>Only good for performance.</Fade></ListItem>
            </List>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SSH>Verbosity &amp; Grokkability</SSH>
            <Notes>
              Verbosity, is on its surface a reasonable criticism. After all...
            </Notes>
          </Slide>

          <Slide>
            <CodeExample source={require('./code-examples/link-bar-assembly-html.example')} lang="html" />
            <Notes>
              Functional CSS means composing larger numbers of smaller classes to reach the same outcome. This means that 
              you will encounter larger numbers of classes on a single element. If you had a whole page of elements that
              look like this, that would indeed be a complete nightmare, that would be hard to read and grok what's going on.
            </Notes>
          </Slide>

          <Slide>
            <H>Components are the answer</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <CodeExample source={require('./code-examples/link-bar-component.example')} lang="html" />
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
              source={require('./code-examples/functional-vs-inline-styles.example')}
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
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
            </List>
            <Notes>
              
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
            <ListHeading>What makes for scalable CSS?</ListHeading>
            <List>
              <ListItem><Fade>Isolates complexity.</Fade></ListItem>
              <ListItem><Fade>Inspires confidence.</Fade></ListItem>
              <ListItem><Fade>Decoupled from as much as possible.</Fade></ListItem>
              <ListItem><Fade>Bends without breaking.</Fade></ListItem>
              <ListItem><Fade>Puts the many before the few.</Fade></ListItem>
              <ListItem><Fade>Performant.</Fade></ListItem>
            </List>
            <Notes>
              Lets talk about what defines a scalable system. I feel like there are six main points.
            </Notes>
          </Slide>

          <Slide>
            <SH>Complexity</SH>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SH>Confidence</SH>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <SH>Decoupled</SH>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SH>Flexible</SH>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SH>Team Oriented</SH>
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <SSH>Performant</SSH>
            <Annot>[[This is more discussing a pure benefit than overturning a misconception.]]</Annot>
            <Notes>
              If you've heard about functional CSS before, it's likely that you've heard folks tout its performance benefits.
              And the performance benefits, especially over time, are enormous.
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
            <Pic src="mapbox-dot-com.jpg" />
            <Notes>
              An added benefit is that the same stylesheet used to make a content/marketing page for mapbox.com...
            </Notes>
          </Slide>

          <Slide>
            <Pic src="mapbox-studio-ui.jpg" />
            <Notes>
              can be used to make a complex application UI for mapbox studio. It's the same stylesheet!
              This is really nice because it means that you can cache it across products.
            </Notes>
          </Slide>

          <Slide bgColor="transparent" onActive={this.enableConfetti}>
            <ThankYouSlide />
            <CallFn fn={this.shootConfetti} />
            <CallFn fn={this.stopConfetti} />
            <Fade><LinkHeading href="http://assets.eli.wtf/talks/animation-talk-fitc-2018">http://assets.eli.wtf/talks/animation-talk-fitc-2018</LinkHeading></Fade>
          </Slide>

        </Deck>
        {/* <Confetti
          shootConfetti={this.state.fireConfetti}
        /> */}
        <Footer
          showSocialPoiner={this.state.showSocialPointer}
        />
      </div>
    );
  }
}
