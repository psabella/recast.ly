var searchYouTube = (options, callback) => {
  $.get("https://www.googleapis.com/youtube/v3/search", {
    type: "video",
    videoEmbeddable: true,
    part: "snippet",
    key: options.key,
    maxResults: options.max,
    q: options.query
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    });
};

export default searchYouTube;

// GET https://www.googleapis.com/youtube/v3/search

// $.get( "test.php", function( data ) {
//   alert( "Data Loaded: " + data );
// });

// {
//   "kind": "youtube#searchListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "regionCode": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     search Resource
//   ]
// }