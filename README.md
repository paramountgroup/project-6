# Feed Reader Test

# Run the Feed Reader Test
1. Open the index.html in the browser or github.io link below
5. Test Results, `7 specs, 0 failures`

Should there be any errors, `spec` details will be show in red, otherwise, green means pass. 

######LOCATED @ (http://paramountgroup.github.io/project-6/)

#TESTS

1. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Test suite named "The menu".
4. Test that ensures the menu element is hidden by default. Analyzing the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Test that ensures the menu changes visibility when the menu icon is clicked. This has two expectations: does the menu display when clicked and does it hide when clicked again.
6. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
7. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. loadFeed() is asynchronous.
8. Complete - all tests pass.


#RESULTS

![image](https://cloud.githubusercontent.com/assets/12649647/15319239/d92678a0-1bf7-11e6-88dd-7b714e8b3c9b.png)


