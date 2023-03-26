module.exports = {
    name: "onp",
    alias: ["onp"],
    desc: "Order Dan Pembayaran",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        await Miku.sendMessage(m.from,{text:`

- Pembayaran
Pembayaran Bisa Di lakukan dengan 3 Metode

1.Tunai
  Bisa di lakukan dengan langsung Datang Toko

2.Transfer
  Transfer Via
  BRI : xxxx Atas Nama xxx
  BCA : xxxx Atas Nama xxx
  Apa Bila Sudah Transfer 
  Silahkan Kirim Bukti Transfer 
  Ke Nomor Berikut xxx

3.Dompet Digital Dana
  Pembayaran Dompet Digital Dana
  Bisa di lakukan Dengan Skema 
  Seperti Berikut:
  Jikan Total Belanja Anda  3.399.000 
  Kami hanya bisa meneria 3.390.000
  Sisa Kekurangannya 
  Harus bayar Pakai Uang tunai

Catatan: Kami Tidak Menerima
Pengantaran Barang Ketempat Anda,
Jika Ingin Barang di Antar Ke tempat Anda,
Silahkan Pesan Jasa Pengataran Online dan
Ongkir Di tanggung Sendiri

Untuk Alamat Toko Kami Di:
Jl. Gatot Subroto RT.01 No. 04 Kota Jambi, Jambi`},{quoted:m})
    }
}
