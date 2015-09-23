Meteor.startup(function () {



    feedReader();



});

function feedReader() {


    var collections = {
        feeds: Feeds,
        feed_entries: Feed_Entries
    };

    Feed.collections(collections);

    var longform_feed = {
        _id: '1',
        category: 'Long Form',
        link: 'http://longform.org/feed.rss',
        refresh_interval: 9000
    };

    Feed.createRssFeed(longform_feed);

   

    var longread_feed = {
        _id: '2',
        category: 'Long Reads',
        link: 'http://longreads.com/rss/',
        refresh_interval: 9000
    };

    Feed.createRssFeed(longread_feed);


    


  Feed.read();

}
