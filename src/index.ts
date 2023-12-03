import { createBot } from "mineflayer"
import readline from "readline"
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
const bot = createBot({
  host: "lsmania.aternos.me",
  username: "73ba25@skiff.com",
  auth: "microsoft",
  version: "1.12"
})

bot.once("spawn", async () => {
  rl.setPrompt("> ")
  console.log("Spawned")
  rl.prompt()
})

bot.on("chat", async (user, message, translate, jsonmsg, matches) => {
  if (user == bot.username) return;
  console.log(user, message)
})

bot.on('kicked', console.log)
bot.on('error', console.log)

rl.on("line", (input) => {
  bot.chat(input)
  rl.prompt()
})
