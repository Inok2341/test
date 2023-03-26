module.exports = {
  name: "ch",
  alias: ["ch"],
  desc: "Gives all bot commands list",
  category: "Core",
  start: async(Miku, m,{pushName,prefix}) => {

            let mikutext = `Silahkan Pilih`;

            let Button = [{
                buttonId: `${prefix}chv`,
                buttonText: {
                    displayText: `Cek Harga Voucher`
                },
                type: 1,
            },
            {
                buttonId: `${prefix}chp`,
                buttonText: {
                    displayText: `Cek Harga Perdana`
                },
                type: 2,
            },];
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
