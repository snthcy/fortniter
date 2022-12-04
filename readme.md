# fortniter

_before you say anything, shut up._

## What is fortniter?

Fortniter is a Discord bot that uses node-libcurl to get the current progress of the wait time for [chapter 4 in Fortnite](https://www.fortnitechapter4.com/). It then posts the progress to a Discord channel.

## How?

We send a request using [node-libcurl](https://npmjs.org/package/node-libcurl) to `https://www.fortnitechapter4.com/api/event.json` with the User-Agent set to `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0`. The setting of User-Agent and the reason that node-libcurl is used is to bypass Cloudflare. After, we post it to Discord using [Discord.js](https://discord.js.org). _(holy crap this paragraph was written by [lem6ns](https://github.com/lem6ns))_

## Well, how can I use it, even though it's going to be obsolete in less than 24 hours?

- Clone the git repo
- cd into the directory and run `npm or pnpm install`
- Mofiy the `config.json` file to match your bot token and channel ID
- Run `npm run start` to start the project
- ???
- Profit

## FAQ

### are you gay?

no

### do you play fornite?

yes, cope.

### how long did this take to make?

3 hours

### i love fortnite feet pictures. can you send me some?

![](https://i.pinimg.com/564x/3f/46/db/3f46dbac580bd27a91c68b4e2e79f97f.jpg)
