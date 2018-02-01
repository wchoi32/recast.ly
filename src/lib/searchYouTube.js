var searchYouTube = (options, callback) => {
  // TODO
  
  // model: Video,

  // url: 'https://www.googleapis.com/youtube/v3/search',

// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});

  // search: function(query) {
  //   this.fetch({
  //     data: {
  //       part:'snippet',
  //       key: window.YOUTUBE_API_KEY,
  //       q: query,
  //       maxResults: 5,
  //       type:'video',
  //       videoEmbeddable: 'true'
  //     }
  //   });
  // }
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    //videoEmbeddable: 'true',
    data: {
      key: window.YOUTUBE_API_KEY,
      q: options,
      maxResults: 5,
      part: 'snippet'
    },

    success: (data) => {
      callback(parse(data));   
    },

    error: (data) => {
      console.log('failed to get message: ', data);
    }   
  });

  var parse = function(response) {
    return response.items;
  };
  
  
};

window.searchYouTube = searchYouTube;
