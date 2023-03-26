module.exports = {
    name: "chv",
    alias: ["chv"],
    desc: "Cek Harga",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`
Untuk Mengecek Harga Voucher Spesifik
silahkan gunakan /chprovider
contoh /chtelkom jika hanya ingin mengecek harga tekomsel        


        List Harga,
        
        - Telkomsel 3Hari
        1.5GB 3Hari Rp. 8.000
        
        - Telkomsel 5Hari
        2GB 5Hari Rp. 10.500
        5GB 5Hari Rp. ~21.500~ 21.600
        
        - Telkomsel 7Hari
        3GB 7Hari Rp. ~18.500~ 18.600

        - Axis 1Hari
        1.5GB 1Hari Rp. 4.100
        
        - Axis 3Hari
        3GB 3Hari Rp. ~8.200~8.400
        8GB 3Hari Rp. ~13.300~13.700
        
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
        5GB 15Hari Rp. ~20.600~20.700
        11GB 15Hari Rp. 32.800
        28GB 15Hari Rp. 56.000
        
        - Axis 30Hari
        2GB 30Hari Rp. 13.300
        4GB 30Hari Rp. 23.000
        7GB 30Hari Rp. 29.800
        12GB 30Hari Rp. 43.300
        18GB 30Hari Rp. 56.800
                
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
        10.000 Rp. 10.850
        
        - Indosat 2Hari
        1GB 2Hari Rp. 5.500
        
        - Indosat 5Hari
        2.5GB 5Hari Rp. 10.800
        5GB 5Hari Rp. 15.300
        
        -Indosat 30Hari
        3GB 30Hari Rp. 16.800
        5.5GB 30Hari Rp. 28.500
        9GB 30Hari Rp. 39.500
        16GB 30Hari Rp. 61.000

        - XL 7Hari
        2GB 7Hari Rp. 12.200
        4GB 7Hari Rp. 15.200
        6.5GB 7Hari Rp. 20.200
        12GB 7Hari Rp. 25.300
        
        - XL 30Hari
        3.5GB 30Hari Rp. 16.500
        10GB 30Hari Rp. 37.000
        17GB 30Hari Rp. 55.500
        30GB 30Hari Rp. 78.900
        
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
