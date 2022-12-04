import { Client, Events, GatewayIntentBits, EmbedBuilder } from "discord.js";
import { curly } from "node-libcurl";
import chalk from "chalk";
import config from "./config.json" assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
	console.log(chalk.magenta("🏁 Ready!"));

	setInterval(() => {
		getPercent();
	}, 1000 * 5);
});

client.login(config.token);

let progressStore = 0;

// puppeteer stuff
async function getPercent() {
	try {
		const { data } = await curly.get(
			"https://www.fortnitechapter4.com/api/event.json",
			{
				SSL_VERIFYPEER: 0, // hacky
				httpHeader: [
					"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0",
				],
			},
		);
		const { progress } = data;

		if (progress > progressStore && progressStore) {
			console.log(chalk.green(`🎉 New percent: ${progress} - Sending update`));
			const embed = new EmbedBuilder()
				.setTitle("Fortnite Chapter 4 Progress")
				.setURL("https://www.fortnitechapter4.com/")
				.setThumbnail(
					"https://pbs.twimg.com/profile_images/1595059397608312833/eN6zkMk0_400x400.jpg",
				)
				.addFields({
					name: "<:euphoria:910624917396021258>  Percentage:",
					value: `${progress}`,
				});

			client.channels.cache.get(config.channel).send({ embeds: [embed] });
		} else {
			console.log(
				chalk.yellow(
					`🤷 No new update, still at ${
						progressStore ? progressStore : progress
					}%`,
				),
			);
		}
		progressStore = progress;
	} catch (error) {
		console.error(chalk.red(`🐒 ${error}`));
	}
}
