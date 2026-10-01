export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("Bot is running!");
  }

  try {
    const update = req.body;

    if (update?.message) {
      const chatId = update.message.chat.id;

      await fetch(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: "السلام عليكم"
          })
        }
      );
    }

    return res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
}
