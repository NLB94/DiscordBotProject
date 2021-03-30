module.exports = client => {
  console.log(
    `${client.user.tag} est prêt alhamduliLlah ! ${client.guilds.cache.size} serveurs, ${client.users.cache.size} membres!`
  );

  let activities = ["github.com/NLB94", `Add I2Z7 Bot => type !add I2Z7`], i = 0;

  setInterval(
    () =>
      client.user.setPresence({
        activity: {
          name: `${activities[i++ % activities.length]}`,
          type: "WATCHING",
        },
      }),
    7000
  );
};
