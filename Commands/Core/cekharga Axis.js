module.exports = {
    name: "chaxis",
    alias: ["chaxis"],
    desc: "Cek Harga Barang",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`        
        List Harga Axis
        
        - Axis 1Hari
        1.5GB 1Hari Rp. 4.100
        
        - Axis 3Hari
        3GB 3Hari Rp. ~8.200~ 8.400
        8GB 3Hari Rp. ~13.300~ 13.700
        
        - Axis 5Hari
        2GB 5Hari Rp. 9.400
        4GB 5Hari Rp. 12.700
        7GB 5Hari Rp. 16.200
        14GB 5Hari Rp. 20.300
        
        -Axis 7Hari
        3GB 7Hari Rp. 17.000
        7GB 7Hari Rp. 21.700
        20GB 7Hari Rp. 31.500
        
        - Axis 15Hari
        5GB 15Hari Rp. ~20.600~ 20.700
        11GB 15Hari Rp. 32.800
        28GB 15Hari Rp. 56.000
        
        - Axis 30Hari
        2GB 30Hari Rp. 13.300
        4GB 30Hari Rp. 23.000
        7GB 30Hari Rp. 29.800
        12GB 30Hari Rp. 43.300
        18GB 30Hari Rp. 56.800`},{quoted:m})
    }
}
