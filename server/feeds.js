Feeds = new Meteor.Collection("feeds");
Feed_Entries = new Meteor.Collection("feed_entries");



Meteor.methods({
    
    'fetchRandomRecord': function () {
         
        var N = Feed_Entries.find({}).count();
        
        var R = Math.floor(Math.random() * N);
        
        var item = Feed_Entries.find({}, { skip: R, limit: 1 }).fetch();
        var random_record=item[0];
        
        if (random_record.feed_id === '1') {
        var text = random_record['description'];
        var urlStart = text.lastIndexOf("http");
        var urlEnd = text.indexOf(">Full Story");
        var url = text.slice(urlStart, urlEnd - 1).trim();
        
        /*
        var extractBase = 'http://api.embed.ly/1/extract';
        var embedlyKey = "b76406e41af040dc8536e0653a90c15a";
        try {
        var result = HTTP.get(extractBase, { params: {
            key: embedlyKey,
            url: url
          }
        });
        

        
        return result.data;
        } catch(e) {
          console.log('No article found! ' + e);
        }*/
        
        
        return url;


       }
      else if (random_record.feed_id === '2') {
          
        var text = random_record['link'];
        var urlEnd = text.indexOf("?src");
        var url = text.slice(0, urlEnd).trim();
        
        /*
        var extractBase = 'http://api.embed.ly/1/extract';
        var embedlyKey = "b76406e41af040dc8536e0653a90c15a";
        try{
        var result = HTTP.get(extractBase, {
          params: {
            key: embedlyKey,
            url: url
          }
        });

        
        return result.data;
        } catch(e) {
          console.log('No article found! ' + e);
        }*/
        
        
        
        return url;
      }
 }
});