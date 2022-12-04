# fortniter

_before you say anything, shut up._

## What is fortniter?

Fortniter is a Discord bot that spins up a Puppeteer instance to get the current progress of the wait time for [chapter 4 in Fortnite](https://www.fortnitechapter4.com/). It then posts the progress to a Discord channel.

## How?

Because the percentage is not accessable via an API _(there's one api link but, y'know... like, Cloudflare was a jerk.)_, we have to scrape the page. This is done by spinning up a [Puppeteer](https://pptr.dev/) instance and navigating to the page. Once the page is loaded, we can grab the progress bar and post it to Discord using [Discord.js](https://discord.js.org). _(holy crap this paragraph was written by Copilot)_

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
