module.exports = {
  name: "menu",
  alias: ["menu"],
  desc: "Gives all bot commands list",
  category: "Core",
  start: async(Miku, m,{pushName,prefix}) => {

            let mikutext = `Silahkan Pilih`;

            let Button = [
                {
                buttonId: `${prefix}ch`,
                buttonText: { displayText: "Cek Harga" },
                type: 1,
                },
                {
                buttonId: `${prefix}onp`,
                buttonText: { displayText: "Pembayaran" },
                type: 2,
                },
                {
                buttonId: `${prefix}hb`,
                buttonText: { displayText: "Hubungi Kami Di" },
                type: 3,
                },
            ];
            let bmffg = {
                image: {
                    url: botImage1
                },
                caption: mikutext,
                buttons: Button,
                headerType: 4,
            };
            await Miku.sendMessage(m.from, bmffg, {
                quoted:m})
    }
}
