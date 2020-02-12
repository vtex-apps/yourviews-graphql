# YourViews GraphQL resolvers
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

To add your YourViews token you must create a file in VBase at the `secret_keys` bucket called `keys.json` with this format:

```
{
  "yourviewsToken": "<token>",
  "appId": "<appId>"
}
```

Example curl:

```
curl --request PUT \
  --url http://vbase.aws-us-east-1.vtex.io/<account>/<workspace>/buckets/vtex.yourviews-graphql/secret_keys/files/keys.json \
  --header 'authorization: <vtex token>' \
  --header 'content-type: application/json' \
  --data '{
  "yourviewsToken": "<yourviews token>",
  "appId": "<appId>"
}'
```

To grab your vtex token, run on the terminal:

`vtex local token`

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!