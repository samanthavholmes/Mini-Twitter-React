## Lil' Twitter API

Part of Dev Bootcamp's thick client challenge for the 2014 Chorus Frogs.

## Development Setup

requires ruby and rubygems.
```sh
$ bundle install
$ rake db:create && rake db:migrate && rake db:seed
$ rails server
```

### Endpoints

`/recent` returns the 50 most recently created tweets in JSON format.

  ```
  [
    { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "created_at":"2014-07-20T20:27:42Z",
      "handle":"@marco_schumm",
      "id":500,
      "updated_at":"2014-07-20T20:27:42Z",
      "username":"Adaline Bins",
      "hashtag_names": [ "est", "rerum", "distinctio" ]
    }
  ]
  ```
