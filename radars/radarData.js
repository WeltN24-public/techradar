//This is the title for your window tab, and your Radar
document.title = "Welt Tech radar (November 2017)";


//This is the concentic circles that want on your radar
var radar_arcs = [
    { 'r': 100, 'name': 'Adopt' }, { 'r': 200, 'name': 'Trial' }, { 'r': 300, 'name': 'Assess' }, { 'r': 400, 'name': 'Hold' }
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [{
        "quadrant": "Techniques",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            { "name": "Test-Automation", "pc": { "r": 80, "t": 170 }, "movement": "c" },
            { "name": "Continuous Delivery", "pc": { "r": 75, "t": 110 }, "movement": "t" },
            { "name": "Pull Requests", "pc": { "r": 50, "t": 130 }, "movement": "t" },

            { "name": "Immutable Infrastructure", "pc": { "r": 160, "t": 170 }, "movement": "c" },
            { "name": 'Infrastructure Automation', "pc": { r: 199, t: 133 }, "movement": 'c' },
            { "name": "Performance Budget", "pc": { "r": 150, "t": 160 }, "movement": "t" },
            { "name": "CDC(Pact)", "pc": { "r": 180, "t": 110 }, "movement": "t" },
            { "name": "Microservices", "pc": { "r": 120, "t": 100 }, "movement": "t" },

            { "name": "TDD", "pc": { "r": 220, "t": 140 }, "movement": "c" },
            { "name": "Pair Programming", "pc": { "r": 230, "t": 150 }, "movement": "c" },

            { "name": "Monolith", "pc": { "r": 380, "t": 150 }, "movement": "c" },


        ]
    },
    {
        "quadrant": "Tools",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [
            { name: 'Sonar', pc: { r: 80, t: 56 }, movement: 'c' },

            { name: 'Github', pc: { r: 25, t: 20 }, movement: 't' },
            { name: 'Git', pc: { r: 85, t: 26 }, movement: 't' },
            { name: 'Smashing', pc: { r: 60, t: 60 }, movement: 't' },
            { name: 'AWS ECS', pc: { r: 10, t: 46 }, movement: 't' },
            { name: 'AWS S3', pc: { r: 60, t: 5 }, movement: 'c' },
            { name: 'AWS EC2', pc: { r: 80, t: 85 }, movement: 'c' },
            { name: 'AWS DDB', pc: { r: 60, t: 80 }, movement: 't' },
            { name: 'ElasticSearch', pc: { r: 99, t: 40 }, movement: 't' },
            { name: 'Speedcurve', pc: { r: 30, t: 50 }, movement: 'c' },
            { name: 'AWS Cloud Formation', pc: { r: 50, t: 25 }, movement: 't' },
            { name: 'Terraform', pc: { r: 70, t: 25 }, movement: 't' },

            { name: 'Github Wiki', pc: { r: 155, t: 20 }, movement: 't' },
            { name: 'Github Issues', pc: { r: 165, t: 70 }, movement: 't' },

            { name: 'Streams (FireHose, Kinesis, Kafka)', pc: { r: 265, t: 7 }, movement: 't' },
            { name: 'Github Projects', pc: { r: 215, t: 20 }, movement: 't' },

            { name: 'GoCD', pc: { r: 380, t: 74 }, movement: 't' },

            { name: 'Dashing', pc: { r: 380, t: 20 }, movement: 't' },
            { name: 'Wercker', pc: { r: 390, t: 40 }, movement: 't' },
            { name: 'Snap CI', pc: { r: 390, t: 60 }, movement: 't' },
            { name: 'Confluence', pc: { r: 310, t: 80 }, movement: 'c' },
            { name: 'Stash', pc: { r: 330, t: 70 }, movement: 'c' },
            { name: 'EB Deployer', pc: { r: 350, t: 46 }, movement: 'c' },
            { name: 'AWS Elastic Beanstalk', pc: { r: 330, t: 6 }, movement: 't' },
            { name: 'AWS Opsworks', pc: { r: 330, t: 55 }, movement: 't' }

        ]
    },
    {
        "quadrant": "Platforms/SaaS",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [
            { "name": "AWS", "pc": { "r": 30, "t": 255 }, "movement": "c" },
            { "name": "Docker", "pc": { "r": 90, "t": 190 }, "movement": "c" },
            { "name": "Jenkins", "pc": { "r": 50, "t": 210 }, "movement": "c" },
            { "name": "Kibana", "pc": { "r": 90, "t": 230 }, "movement": "c" },
            { "name": "Datadog", "pc": { "r": 55, "t": 255 }, "movement": "c" },


        ]
    },
    {
        "quadrant": "Lang & Frameworks",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            { "name": 'Gradle/SBT/Make', pc: { r: 99, t: 290 }, "movement": 'c' },
            { "name": 'Java/Spring', pc: { r: 50, t: 320 }, "movement": 'c' },
            { "name": "Scala/Play", "pc": { "r": 80, "t": 355 }, "movement": "c" },
            { "name": "TypeScript", "pc": { "r": 90, "t": 300 }, "movement": "c" },

            { "name": "Golang", "pc": { "r": 110, "t": 300 }, "movement": "c" },

            { "name": 'Handlebars', pc: { r: 310, t: 300 }, "movement": 'c' },
            { "name": 'Thymeleaf', pc: { r: 330, t: 320 }, "movement": 'c' },
            { "name": 'Cucumber', pc: { r: 350, t: 330 }, "movement": 'c' },
            { "name": 'Maven', pc: { r: 350, t: 355 }, "movement": 't' }
        ]
    }
];