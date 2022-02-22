# 🚀 Backbenchers

Source code for the backbenchers website.

## Development

Navigate into the site’s directory and start it up.

```shell
cd backbenchers/
npm run develop
```

## Deployment

### Build a production build

```shell
gatsby build
```

### Deploy to localhost through gatsby OR firebase

```shell
gatsby serve
firebase emulators:start
```

### Deploy to a preview stage with firebase

Replace CHANNEL_ID.

```shell
firebase hosting:channel:deploy CHANNEL_ID
```

### Deploy to live site

```shell
firebase deploy
```
