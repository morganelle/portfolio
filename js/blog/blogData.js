'use strict'

console.log('blog data has loaded');
var me = 'Morgan'
var context = {
  categories: [
    { category: '201'},
    { category: '301'},
    { category: 'career'},
    { category: 'code fellows'},
    { category: 'thoughts'},
    { category: 'week in review'}
  ]
};

var blogData = [
  {
    title: 'Last week at bootcamp, vol. 1',
    publishedDate: '2017-02-12',
    author: me,
    postContent: '<p><strong>This week\'s theme is VIEW</strong>We were introduced to the Model, View, Controller concept and we\'re focusing on the View.</p><p><strong>Monday</strong>: SNOW DAY! I just wasn’t ready to face going back to school yet after an amazing week off, and the weather obliged.</p><p><strong>Tuesday</strong>: This day was packed. We got our intro to jQuery. (Wow, have I really been hearing about jQuery for 6 years now? I met up with a former coworker of mine and he said jQuery is on the wane as more and more people are using React and Angular. Something to keep in mind!) Boy, does jQuery make everything difficult about 201 easier. Also got an intro to Model, View Controller concept. Mobile first design and development, specifically using media queries and responsive design techniques like flexible layouts. We\'re going to have one larger on-going personal project this class, which is this very blog! How meta.</p><p><strong>Wednesday</strong>: Assignment is (responsive) design and data modeling for our on-going portfolio project. It’s hard to remember to mobile first when you\'re working on a laptop! More discussion of jQuery, SMACSS to organize our CSS.</p><p><strong>Thursday</strong>: Events with jQuery (use .on();) including a discussion on callback functions, event propagation, bubbling and delegation. Intro into templating. We’re starting by hiding a chunk of boilerplate HTML, then get it, copy it, populate it and push it back out to the DOM. Data attribute.</p><p><strong>Friday</strong>: This was a doozy of a day, with two lectures and two labs. On the templating front, we started with Handlebars.js, which you can call from a CDN. Then, instead of hiding and copying a chunk of HTML, you can create a Handlebars template within a script tag. I like to run what we’re using in class by the devs I’ve worked with previously and my buddy Arthur’s take on Handlebars is that it’s not as widely used as it was a few years ago. Sometimes our class feels like a history lesson - things move so quickly in technology, and get so abstracted, that it’s better to start with older technology (to a point). Our second lab was in class, and we built a page that will take in new content and make a JSON object to be copied into our js content file. I know once we get to the “model” portion of MVC, this will be a lot more compelling of a feature!</p><h3>Technologies used:</h3><ul><li>Libraries</li><li>jQuery</li><li>Handlebars</li><li>SMACSS</li></ul><h3>Concepts and theories:</h3><ul><li>Model, view, controller (MVC)</li><li>Responsive design<ul><li>Media queries</li><li>Flexible layouts</li></ul></li></ul><h3>Interesting tidbits:</h3><ul><li>Callback function: a function that is passed to another function as an argument</li><li>Data attribute - stores custom data in HTML and doesn’t require JavaScript calls.</li><li>Abstraction: taking a complex system and creating a simpler set of rules to interact with it</li><li>Computers: electrical current - binary - hex - machine language - OS - browser - HTML/CSS/JS - jQuery</li><li>Event delegation: registering an event on one element and affecting another element</li><li>Ternary operator: condition ? true : false;</li><li>Stack trace: tree of errors</li></ul><h3>Things to follow up </h3><ul><li>MVC</li><li>Single-page application - is this still used? linking strategies?</li><li>Regex</li><li>For loop in object constructor, seen in lab 5</li><li>How to organize, scope and call multiple js files</li></ul>',
    category: ['code fellows', '301', 'week in review']
  },
  {
    title: 'Hello, World!',
    publishedDate: '2017-02-10',
    author: me,
    postContent: '<p>We\'re about a month and a half into 2017 and I\'ve spent the entirety of the new year on an adventure that\'s been in the works for a long time: learning to code.</p><p>As I trace my meandering 12 year career, I can see that I was beating a slow, uneven path towards technical work. Right out of college I started out as a print production artist because I had experience with InDesign as an editor of my college newspaper. I had graduated with a Studio Art major and thought graphic design would be a great practical application of my degree. My subsequent roles were, in chronological order, print designer, e-learning illustrator, front-end production developer, UX designer to a technical program manager. I cringe a little bit seeing just how many roles I had, and how different they all were, but I was following a thread.</p><p>My last role as a technical program manager was hands-down my favorite. When I accepted it, it had initially felt like a detour because I ultimately planned on returning to UX design. Once I started, though, I was an enthusiastic sponge for what my new role could teach me. I immersed myself in the software development lifecycle process, I upgraded my team\'s productivity processes and tools, I taught myself how to write great documentation, and I leveraged my user-centered design background to keep the focus on the end user. I was mentored by some amazing managers who taught me skills that don\'t come as naturally to me, like leading meetings and organizing people.</p><p>Once I had gotten all these pieces in place for my team, I realized I still had a deep craving to better understand what my team was producing. The thread I\'d been following emerged as a full-blown pattern, and made the next step clear to me: I needed to understand the code.</p><p>I was about three months into teaching myself JavaScript when my team was dissolved, in November of last year. Even though it had been my favorite role, it was by no means perfect and my team had occupied a precarious political position for over a year. I was sad but excited - it was a rare opportunity to really get the education I wanted without any guilt for leaving a steady job.</p><p>So I signed up for an immersive coding bootcamp, Code Fellows. It\'s taken me up until now to adjust to the bootcamp lifestyle, but I\'m ready to start doing what I\'d intended all along - to document what I\'m learning for myself and share my process along the way. Thank you for joining me!</p>',
    category: ['career']
  },
  {
    title: 'Review: my first month at bootcamp',
    publishedDate: '2017-02-11',
    author: me,
    postContent: '<p>I was too overwhelmed to start documenting my journey during my first class, so this is a summary of my first bootcamp class by week.</p><p><strong>Week 1</strong>: This week was a total blur. My brain was so excited to be playing with code puzzles all day long that I neglected my physical existence. I would sit for hours staring at my computer screen and would feel blind by the time I left the building to catch my bus because my focal point had been fixed for so long. We focused on our computer setup - all getting the same text editor, getting comfortable with the terminal, an intro to git and GitHub, an intro to basics in HTML, CSS, and JS (nothing that went beyond the pre-work, really), but I’ll admit that my knowledge was tested as soon as we got our first assignments.</p><p><strong>Week 2</strong>: We delved more into objects and object constructors this week, as well as the concept of the DOM (Document Object Model). We used vanilla JavaScript to do any combination of creating, getting, setting, appending, and removing DOM elements - empowering and also majorly tedious. I think the TAs struggled to help us because it’s pretty unusual to NOT leverage a library like jQuery or React to do this kind of work. On a personal note, I got sick this week and stayed home a day and a half. I actually did better and faster work from home!</p><p><strong>Week 3</strong>: This week felt a bit more random - we had a more complex lab that required us to use localStorage, a js library (charts.js) and make more of an effort with user experience and user interface. The UX/UI material pretty light-weight. At the end of the week, we were put into groups for our upcoming project week and did quite a bit of project planning. I was truly grateful for my TPM and UX experience at that point! Our group decided to make a memory game using memes as content.</p><p><strong>Week 4</strong>: This week was surprisingly difficult - don’t know why I expected any different from group project week! I felt like my project team had done a great job getting organized and ready the week before, but when it came to execution we didn’t divide the work very well and it created knowledge silos. Our project was on the more complex side of things, and we kept running into the limits of our knowledge. We refactored our code completely because of a bug, only to find that the problem with it was a DOM change happening so quickly it looked like it wasn’t happening and we needed a timer. After getting to our minimum viable product, one of our teammates found a critical bug involving the timer that we just didn’t know how to fix. We dragged ourselves across the finish line. But I learned a lot :)</p>',
    category: ['code fellows', '201']
  }
];
