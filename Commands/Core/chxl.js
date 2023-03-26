module.exports = {
    name: "chxl",
    alias: ["chxl"],
    desc: "Cek Harga Barang",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:
        `        List Harga XL
        
        - XL 7Hari
        2GB 7Hari Rp. 12.200
        4GB 7Hari Rp. 15.200
        6.5GB 7Hari Rp. 20.200
        12GB 7Hari Rp. 25.300
        
        - XL 30Hari
        3.5GB 30Hari Rp. 16.500
        10GB 30Hari Rp. 37.000
        17GB 30Hari Rp. 55.500
        30GB 30Hari Rp. 78.900`},{quoted:m})
    }
}
