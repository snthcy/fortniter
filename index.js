import { Client, Events, GatewayIntentBits, EmbedBuilder } from "discord.js";
import puppeteer from "puppeteer";
import chalk from "chalk";
import config from "./config.json" assert { type: "json" };

// bot stuff
function fortniter() {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once(Events.ClientReady, () => {
    console.log(chalk.magenta("🏁 Ready!"));

    setInterval(() => {
      browser();
      console.log(chalk.cyan("📦 Spawned new instance"));
    }, 1000 * 30);
  });

  client.login(config.token);

  let percentStore = 0;

  // puppeteer stuff
  async function browser() {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      // suck my butt cloudflare, respectfully :3
      page.setUserAgent("Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0");

      await page.goto("https://www.fortnitechapter4.com");

      // get the data
      const elements = await page.$x('//*[@id="main"]/div/div[2]/div/div[2]/button/div');
      await elements[0].click();
      const rawtext = await page.$("#main > div > div > div.font-burbank-default.absolute.inset-x-0.bottom-0.p-2.text-white.md\\:p-4 > div > div.font-burbank-default.text-white > p");

      // format the percentage into just the percent
      const percentraw = await (
        await rawtext.getProperty("textContent")
      ).jsonValue();
      const percent = percentraw.split(" ")[2];
      let percentStore = percent;

      // if the percent stays the same, then kill the puppet and try again
      if (percent != percentStore) {
        console.log(chalk.green(`🎉 New percent: ${percent} - Sending update`));
        const embed = new EmbedBuilder()
          .setTitle("Fortnite Chapter 4 Progress")
          .setURL("https://www.fortnitechapter4.com/")
          .setThumbnail("https://pbs.twimg.com/profile_images/1595059397608312833/eN6zkMk0_400x400.jpg")
          .addFields({
            name: "<:euphoria:910624917396021258>  Percentage:",
            value: `${percent}`,
          });

        client.channels.cache.get("1048739296791756882").send({ embeds: [embed] });

        // close the instance to make way for a new one
        browser.close();
      } else {
        console.log(chalk.yellow(`🤷 No new update, still at ${percentStore}`));
        browser.close();
      }
    } catch (error) {
      console.error(chalk.red(`🐒 ${error}`));
    }
  }
}

fortniter();
