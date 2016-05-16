/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?  -- ANSWER 1 spec, 1 failure, RSS Feeds are defined, 
         * expected 0 not to be 0.
         */
        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is our second test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and that the URL is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect (allFeeds[i].url).toBeDefined();
                expect (allFeeds[i].url).not.toBe("");
            }
        });
                

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name is defined and that the name is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect (allFeeds[i].name).toBeDefined();
                expect (allFeeds[i].name).not.toBe("");
            }
         });
    });


    /* Test suite named "The menu" */
     /* This test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
     describe('The menu', function() { 
        var menuElement = $(".menu-icon-link");
        it('Menu is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

         /* Test to ensure the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
     });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {


        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         
         beforeEach(function(done) {
             loadFeed(0, done);  //signal asyncronous is complete and continue testing
         });
         
         it('There is at least a single entry element within the feed container', function() {
             // use jQuery :has() Selector to select entry from feed
            var initialEntries = $(".feed").has(".entry");
            expect(initialEntries.length).toBeGreaterThan(0);

         });  
     });
     
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
