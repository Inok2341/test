module.exports = {
    name: "chp",
    alias: ["chp"],
    desc: "Cek Harga",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`
        List Harga Perdana
        
        - Perdana Telkomsel Kosong
        Kosong Rp. 11.000

        - Perdana Telkomsel Kuota
        3GB 30Hari Rp. 19.500
        35GB 30Hari Rp. 70.000
        
        - Perdana Axis Kuota
        3GB 30Hari Rp. 13.000

        - Perdana Xl Kuota
        3GB 30Hari Rp. ~14.500~ 16.500
        8GB 30Hari Rp. ~33.200~ 35.300
        16GB 30Hari Rp. ~50.000~ 52.500
        32GB 30Hari Rp. ~75.500~ 77.500
        
        - Perdana Three Kuota
        Happy 3GB Rp. ~20.500~ 17.000
        Happy 4GB Rp. ~21.500~ 17.500
        Happy 5GB Rp. ~22.500~ 18.000
        Happy 8GB Rp. ~30.500~ 25.500
        Happy 18GB Rp. ~50.500~ 45.500
        
        - Perdana Indosat Kuota
        3GB 30Hari Rp. 24.000
        
        - Perdana Smartfren
        2GB 10Hari Rp. 10.000
        Unlimi 28Hari Rp. 70.000
        
        .`},{quoted:m})
    }
}
