module.exports = {
    name: "chsmartfren",
    alias: ["chsmartfren"],
    desc: "Cek Harga Barang",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:
        `        List Harga Smartfren
        
        - Smartfren 3Hari
        2.5GB 3Hari Rp. 5.200

        - Smartfren 7Hari
        4GB 7Hari Rp. 10.000
        Unlimi 7Hari Rp. 23.700
        
        - Smartfren 28Hari
        6GB NonStop Rp. 33.500
        Unlimi 700MB Rp. 61.500
        Unlimi 1+1 GB Rp. 76.500`},{quoted:m})
    }
}
