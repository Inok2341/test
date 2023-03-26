module.exports = {
    name: "hb",
    alias: ["hb"],
    desc: "Cek Harga",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`
        Hubungi kami Di
    Nomor Toko : 082280052830
    Whatsapp Toko : 082280052830`},{quoted:m})
    }
}
