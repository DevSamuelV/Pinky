import { Client } from "discord.js";

export class Responder {
	public responses: string[] = [
		"?",
		"who are you",
		"why did you ping me",
		"what do you need",
		"did you know shane plane is a thing",
		"There's a lot of Georgia in Chick-Fil-A",
		"Do you have anything non dairy",
		"I want to mate. - Calvin (apparently a 'Dr.Who' reference.)",
		"And that's why i'm NEVER joining the pink team - Bradley",
		"you just shot the hoe",
		"Hello big niggie - Laso Sam Halo 3 election",
		"It's never too late to go back to bed.",
		"If you torture data long enough, it will confess",
		"If your car is still together by the end of the race it is too heavy",
		"If you see something which doesn't meet our standard of quality, and do nothing... you've just set the new standard",
		"What might you do to accomplish your 10-year goals in the next 6 months, if you had a gun against your head?",
		"I am Hawaii",
		"Amogus?",
		"no u",
		"holy frick shane did naughty to catvin?",
		"SHANE IS ON A FURY ROAD!",
		"Silence is consent",
		"it's ok!!! i got da weed card!",
		"Look I got work tomorrow",
		"@Crew#5037 unban Brooks from Rapport Realms immediatly",
		"Listen up here buddy bucko buckaroo you are so completely incorrect it is almost foolish just to fathom just how wrong you are",
	];

	constructor(cli: Client) {
		cli.on("message", (message) => {
			const author = message.author.username;
			const members = message.mentions.members?.array()!;

			console.log(author);

			for (var i = 0; i != members.length; i++) {
				const member = members[i];

				if (
					member.user.username == "Pinky" ||
					member.user.username == "Pinky Dev"
				) {
					return message.reply(this.SelectReponse());
				}
			}
		});
	}

	public SelectReponse(): string {
		const index: number = Math.floor(
			Math.random() * (this.responses.length - 0) + Math.random()
		);

		return this.responses[index];
	}
}