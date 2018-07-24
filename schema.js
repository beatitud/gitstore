let schema = {
  "extensions": {
    "versetxt": {
      "format": "**verseNumber** verseText",
      "accessors": {
        getVerseNumber: function(data) {
          return data.split("**")[1]
        },
        getVerseText: function(data) {
          return data.split("**")[2]
        },
      }
    },
    "verseaud": {
      "format": "{}",
      "accessors": {

      }
    },
    "event": "",
    "life": "",
  },
  "collections": {
    ""
  }
}
