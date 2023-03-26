module.exports = {
    name: "chindosat",
    alias: ["chindosat"],
    desc: "Cek Harga Barang",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:
        `        List Harga Indosat
        
        - Indosat 2Hari
        1GB 2Hari Rp. 5.500
        
        - Indosat 5Hari
        2.5GB 5Hari Rp. 10.800
        5GB 5Hari Rp. 15.300
        
        -Indosat 30Hari
        3GB 30Hari Rp. 16.800
        5.5GB 30Hari Rp. 28.500
        9GB 30Hari Rp. 39.500
        16GB 30Hari Rp. 61.000`},{quoted:m})
    }
}
