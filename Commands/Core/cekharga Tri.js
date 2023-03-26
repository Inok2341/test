module.exports = {
    name: "chtri",
    alias: ["chtri"],
    desc: "Cek Harga Barang",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:
        `        List Harga Three

        - Three 3Hari
        1GB 3Hari Rp. 6.300
        3GB 3Hari Rp. 9.300
        5GB 3Hari Rp. 13.200

        - Three 5Hari
        2GB 5Hari Rp. 9.300
        3.5GB 5Hari Rp. 13.300
        6GB 5Hari Rp. 17.300
        
        - Three 7Hari
        3GB 7Hari Rp. 13.500
        5GB 7Hari Rp. 17.300
        
        - Three 10Hari
        9GB 10Hari Rp. 26.500
        
        - Three 30Hari
        7GB 30Hari Rp. 27.000
        11GB 30Hari Rp. 40.500
        18GB 30Hari Rp. 56.000
        52GB 30Hari Rp. 67.500
        
        - Three Always On
        AON 2.5GB Rp. 15.200
        AON 3GB Rp. 19.200
        AON 6GB Rp. 27.200
        AON 9GB Rp. 39.200
        AON 12GB Rp. 52.200
        AON 6GB Unlimi Rp. 68.500
        
        - Three Pulsa 
        2.000 Rp. 2.500
        5.000 Rp. 5.850
        10.000 Rp. 10.850`},{quoted:m})
    }
}
