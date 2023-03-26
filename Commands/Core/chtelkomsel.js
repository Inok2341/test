module.exports = {
    name: "chtelkomsel",
    alias: ["chtelkomsel", "chtelkom"],
    desc: "Cek Harga Barang",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:
        `        List Harga Telkomsel
        
        - Telkomsel 3Hari
        1.5GB 3Hari Rp. 8.000
        
        - Telkomsel 5Hari
        2GB 5Hari Rp. 10.500
        5GB 5Hari Rp. ~21.500~ 21.600
        
        - Telkomsel 7Hari
        3GB 7Hari Rp. ~18.500~ 18.600`},{quoted:m})
    }
}
