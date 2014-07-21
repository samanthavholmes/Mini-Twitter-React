## Lil' Twitter

Part of Dev Bootcamp's thick client challenge for the 2014 Chorus Frogs.

## Development Setup

requires ruby and rubygems.
```sh
$ bundle install
$ rake db:create && rake db:migrate && rake db:seed
$ rails server
```

### Endpoint Documentation

`/recent` returns the 50 most recently created tweets in JSON format. The response body looks like this:

  ```
  [
    { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "created_at":"2014-07-20T20:27:42Z",
      "handle":"@marco_schumm",
      "id":500,
      "updated_at":"2014-07-20T20:27:42Z",
      "username":"Adaline Bins",
      "hashtag_names": [ "est", "rerum", "distinctio" ] }
  ]
  ```

`/search/:hashtag` returns the 50 most recent tweets associated with the given hashtag, with a format similar to the `/recent` endpoint. Will return an empty body with a status code of 404 if the hastag does not exist.

`POST /tweets/create` creates a new a tweet and associates it with the specified hashtags, if provided. Hashtags that did not previously exist are also created. a request body should take this format:

  ```
    "tweet":
      { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "handle":"@marco_schumm",
      "username":"Adaline Bins" }
    hashtags: [ 'foo', 'bar', 'baz' ]
  ```

If no data is provided for avatar_url, content, handle, or username, fake data is used instead.

The endpoint returns the created tweet as JSON.

```
    { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "created_at":"2014-07-20T20:27:42Z",
      "handle":"@marco_schumm",
      "id":500,
      "updated_at":"2014-07-20T20:27:42Z",
      "username":"Adaline Bins",
      "hashtag_names": [ "est", "rerum", "distinctio" ] }
```

`/hashtags/popular` returns the names of the 10 most popular hashtags. The output looks like this:

```
  [ "est",
    "voluptas",
    "consequatur",
    "at",
    "accusamus",
    "doloremque",
    "culpa",
    "quod",
    "iure",
    "sint" ]
```