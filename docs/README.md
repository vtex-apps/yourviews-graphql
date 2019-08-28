# YourViews GraphQL resolvers

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
