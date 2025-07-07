const gringsingData = [
    {
        id: 1,
        Nama_Motif: "Dingding Ai",
        Makna: "Melambangkan perlindungan spiritual, keseimbangan kosmik, dan harmoni sosial. Dipercaya sebagai simbol penolak bala dan penguat keteraturan hidup.",
        Bentuk_Visual: "Rumah tawon (sarang lebah), Bintang empat sudut, tapak dara / tanda +",
        Kegunaan: "Dipakai oleh pria dan wanita dalam upacara seperti Usaba Sambah, metatah, dan ngaben sebagai kain pelindung spiritual.",
        Link_Gambar: "./data/motif_dingding_ai.png",
        Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
        Jenis_Kain: "Tenun Ikat Ganda",
        Warna_Motif: "Merah, Putih, Hitam"
    },
    {
        id: 2,
        Nama_Motif: "Sanan Empeg",
        Makna: "Maknanya melambangkan keseimbangan hidup, dualitas (baik–buruk), serta keteguhan dan keteraturan dalam menjalani kehidupan. Juga dipercaya memberi perlindungan spiritual dari energi negatif.",
        Bentuk_Visual: "Tiga Kotak Poleng, Pola Geometris Simetris, Garis Pembatas Kontras.",
        Kegunaan: "Digunakan sebagai sabuk/pengikat pada upacara “mabayuh oton” (ruwatan) bagi seorang anak yang lahir setelah kakak dan adiknya meninggal, dengan tujuan menetralkan pengaruh buruk dan 'menyejukkan' diri dari sisa energi kematian.",
        Link_Gambar: "./data/motif_sanan_empeg.png",
        Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
        Jenis_Kain: "Tenun Ikat Ganda",
        Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 3,
    Nama_Motif: "Cakra",
    Makna: "Motif ini mewakili cakra tubuh manusia, sebagai pusat kekuatan spiritual dan pengendali diri. Dalam tradisi Tenganan, dipercaya mampu menolak kekuatan jahat, terutama pada ritual pengobatan atau penyucian diri.",
    Bentuk_Visual: "Roda atau cakra berbentuk bintang/sinar, Garisan memancar (radial), Elemen kubus atau lingkaran pelengkap",
    Kegunaan: "Digunakan pada saat upacara teruna nyoman, upacara seperti pujawali, ruwatan, atau saat sesaji di Bale Tengah.",
    Link_Gambar: "./data/motif_cakra.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 4,
    Nama_Motif: "Cemplong",
    Makna: "Melambangkan keseimbangan hidup, bahwa kesunyian, kehampaan, dan kesabaran adalah bagian penting dari kehidupan, bukan sesuatu yang harus dihindari.",
    Bentuk_Visual: "Bunga besar utama, Bunga kecil sekeliling, Ruang kosong, Simetri/pola berulang",
    Kegunaan: "Digunakan dalam upacara otonan, pernikahan, pembersihan diri, dan dikenakan oleh tetua desa karena melambangkan ketenangan, harmoni, dan perlindungan spiritual.",
    Link_Gambar: "./data/motif_cemplong.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 5,
    Nama_Motif: "Gegonggangan",
    Makna: "Melambangkan harapan baru dan regenerasi, sering digunakan dalam konteks kehidupan baru atau awal fase penting dalam hidup.",
    Bentuk_Visual: "Daun & ranting, Simetri berulang, Ornamen geometris kecil",
    Kegunaan: "Digunakan dalam upacara kelahiran, otonan, dan ritual pertumbuhan karena melambangkan kesuburan, regenerasi, dan harapan hidup yang berkelanjutan.",
    Link_Gambar: "./data/motif_gegonggangan.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 6,
    Nama_Motif: "Isi",
    Makna: "Menutupi seluruh permukaan kain tanpa ruang kosong, dimaknai sebagai pelindung dari energi negatif atau gangguan roh halus.",
    Bentuk_Visual: "Padat (tanpa rongga), Pola isen‑isen mikro yang rapat, Kesatuan visual sebagai struktur simbolik",
    Kegunaan: "Digunakan dalam upacara kematian, perlindungan spiritual, dan pembungkus benda sakral karena dipercaya menolak energi negatif dan menjaga kesucian.",
    Link_Gambar: "./data/motif_isi.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 7,
    Nama_Motif: "Wayang Candi",
    Makna: "Mencerminkan tata kehidupan yang teratur dan seimbang, sesuai dengan prinsip Rwa Bhineda dan Tri Hita Karana.",
    Bentuk_Visual: "Silhouet bangunan suci, Figur wayang kecil, Bintang/titik cahaya, Bingkai geometris",
    Kegunaan: "Digunakan dalam upacara kematian, penyucian roh, dan pakaian tokoh adat sebagai simbol pelindung spiritual dan pewaris nilai moral luhur.",
    Link_Gambar: "./data/motif_wayang_candi.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 8,
    Nama_Motif: "Wayang Puteri",
    Makna: "Menggambarkan tokoh wayang perempuan sebagai simbol keanggunan, kebijaksanaan, dan kekuatan batin. Yang menyimbolkan peran penting perempuan dalam menjaga keseimbangan keluarga dan adat.",
    Bentuk_Visual: "Jajaran genjang menyerupai bunga/matahari, Figur wayang putri, Kalajengking, Tanda tambah dan empat arah",
    Kegunaan: "Motif Wayang Puteri digunakan dalam upacara pernikahan (makingsan) dan keagamaan sebagai simbol kesucian perempuan dan perlindungan spiritual, serta diwariskan sebagai pusaka.",
    Link_Gambar: "./data/motif_wayang_puteri.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 9,
    Nama_Motif: "Lubeng",
    Makna: "Lubeng berasal dari kata luweng (gua) melambangkan pusat energi spiritual.",
    Bentuk_Visual: "Kalajengking, Tapak dara (tanda tambah), Pola simetris",
    Kegunaan: "Dipakai oleh anak-anak dan remaja saat upacara keagamaan seperti metatah, pawiwahan, dan Manusa Yadnya lainnya.",
    Link_Gambar: "./data/motif_lubeng.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 10,
    Nama_Motif: "Talidandan",
    Makna: "Motif Talidandan mencerminkan kesatuan nilai spiritual, sosial, dan alamiah. Kombinasi bentuk-bentuk geometris seperti belah ketupat dan silang yang tertata rapi menyimbolkan kehidupan yang terstruktur, harmonis, dan berpegang pada nilai adat.",
    Bentuk_Visual: "Belah ketupat, bunga kecil, titik-titik dan garis-garis pendek",
    Kegunaan: "Dipakai oleh pria dewasa dalam: Upacara adat (potong gigi, pernikahan, ngaben), Ritual pembersihan diri (melukat, mecaru), Penyambutan tamu kehormatan, Kegiatan seni budaya (menari baris, dll).",
    Link_Gambar: "./data/motif_talidandan.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 11,
    Nama_Motif: "Teteledan",
    Makna: "sesuai namanya 'Teteledan' yang dalam bahasa Bali bisa berarti teladan/panutan. Melambangkan seseorang yang dihormati dan dijadikan contoh dalam perilaku, pemikiran, serta tanggung jawab sosial.",
    Bentuk_Visual: "berbentuk belah ketupat (seperti wajik) yang berulang dan simetris. Di dalam belah ketupat biasanya terdapat ornamen bintang atau bunga kecil, melambangkan detail dan ketelitian.",
    Kegunaan: "Dipakai oleh tokoh masyarakat, pemangku adat, atau orang tua dalam upacara keagamaan dan prosesi penting.",
    Link_Gambar: "./data/motif_teteledan.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 12,
    Nama_Motif: "Gambir",
    Makna: "Dipercaya sebagai pelindung dari pengaruh buruk, penyakit, dan roh jahat.",
    Bentuk_Visual: "Pola kotak segi delapan atau enam belas, Lingkaran atau 'mata' di tengah kotak, Tanda bintang empat sudut, Ornamen segitiga/zig-zag.",
    Kegunaan: "Umumnya digunakan sebagai kamben oleh perempuan dalam upacara seperti Usaba Sambah, metatah, atau ritual pemurnian diri.",
    Link_Gambar: "./data/motif_gambir.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 13,
    Nama_Motif: "Batun Tuwung",
    Makna: "Motif ini menyerupai biji terung (tuung), yang dalam budaya Bali dianggap sebagai lambang kesuburan, awal kehidupan, dan pertumbuhan. Ini menjadikan motif Batun Tuwung sebagai simbol awal yang baru dan potensi hidup.",
    Bentuk_Visual: "Biji terung, garis melengkung seperti mahkota bunga, tapak dara kecil",
    Kegunaan: "Umumnya digunakan oleh bayi/anak dalam upacara pemurnian (ngelepas) bayi dan upacara otonan (ulang tahun berdasarkan kalender Bali). Karena melambangkan kesuburan dan perlindungan, kain ini diyakini dapat menjaga anak dari gangguan roh jahat.",
    Link_Gambar: "./data/motif_batun_tuwung.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 14,
    Nama_Motif: "Pepare",
    Makna: "Melambangkan tatanan sosial masyarakat Tenganan yang teratur, tertib, dan saling terhubung, sesuai prinsip gotong royong dan kehidupan komunal.",
    Bentuk_Visual: "Kotak kecil-menengah berulang, Garis pembatas tipis, Titik atau lingkaran kecil di dalam kotak, Tanda 'plus' (tapak dara) yang tertanam.",
    Kegunaan: "Digunakan saat ritual transisi hidup sebagai simbol kesiapan menjalankan peran sosial.",
    Link_Gambar: "./data/motif_pepare.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 15,
    Nama_Motif: "Wayang Kebo",
    Makna: "Motif ini menggambarkan tokoh wayang (biasanya dalam posisi duduk bersila) yang melambangkan manusia yang sedang menempuh perjalanan spiritual, mengendalikan hawa nafsu dan ego utama dalam ajaran Hindu Bali Aga.",
    Bentuk_Visual: "Lubeng (stupa) penuh & setengah, Figur wayang (male & female), Kalajengking (teledu), Simbol orientasi & pelindung tapak dara, swastika, tanda plus.",
    Kegunaan: "Dipakai oleh laki-laki dewasa saat upacara keagamaan besar seperti:Usaba Sambah, Ngusaba Nini, dan Upacara potong gigi (metatah).",
    Link_Gambar: "./data/motif_wayang_kebo.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 16,
    Nama_Motif: "Cecempaka",
    Makna: "Motif Cecempaka memiliki makna  kesucian dan spiritualitas tinggi yang terinspirasi dari bunga cempaka bunga sakral dalam tradisi Hindu-Bali. Motif ini melambangkan keanggunan, ketulusan hati, harum nama baik, serta kesucian jiwa,  dipercaya membawa energi positif serta ketenangan batin bagi pemakainya.",
    Bentuk_Visual: "representasi bunga cempaka yang tersusun rapi dan simetris sebagai elemen utama ,dikelilingi oleh struktur kotak.",
    Kegunaan: "Dipakai dalam upacara adat dan keagamaan seperti pernikahan, melasti, dan ngaben. Umumnya dikenakan oleh perempuan, namun juga bisa dipakai laki-laki dalam acara sakral (pemangku). Motif ini melambangkan kesucian dan penghormatan spiritual.",
    Link_Gambar: "./data/motif_cecampakan.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem",
    Jenis_Kain: "Tenun Ikat Ganda",
    Warna_Motif: "Merah, Putih, Hitam"
    },
    {
    id: 17,
    Nama_Motif: "Enjekan Siap",
    Makna: "'Enjekan Siap' artinya jejak ayam, yang bermakna kesiapan untuk memulai, kewaspadaan, dan ketangkasan. Ayam jantan dalam budaya Bali juga melambangkan semangat juang, kejantanan, dan keberanian berbicara.",
    Bentuk_Visual: "Didominasi bentuk berjajar dengan detail seperti sayap. Siap dalam bahasa Bali berarti ayam jantan. Polanya menyerupai bulu ekor atau jejak kaki ayam, dalam susunan berulang.",
    Kegunaan: "Biasa dipakai untuk busana harian masyarakat adat laki-laki, juga dalam prosesi keagamaan ringan. Kadang digunakan dalam acara yang menandai awal fase baru, seperti upacara metatah (potong gigi) atau mekala-kalaan (pendewasaan).",
    Link_Gambar: "./data/motif_enjekan_siap.png",
    Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem.",
    Jenis_Kain: "Tenun Ikat Ganda.",
    Warna_Motif: "Merah, Putih, Hitam."
    },
    {
        id: 18,
        Nama_Motif: "Yudha",
        Makna: "'Yudha' berarti perang atau pertempuran dalam bahasa Sanskerta yang melambangkan keberanian, perjuangan hidup, dan keteguhan hati dalam menghadapi cobaan dan menggambarkan kekuatan spiritual dan fisik, serta kesiapan menjaga adat dan kebenaran.",
        Bentuk_Visual: "Plecek, Bintang Empat Sudut, Cemplong, Rumah Tawon (Sarang Lebah), Garis Geometris.",
        Kegunaan: "Digunakan dalam berbagai upacara adat yang menekankan makna keberanian, tanggung jawab, dan kekuatan spiritual. Contohnya dalam upacara Melukat (pembersihan diri), Metatah (pendewasaan), maupun peran sosial sebagai pemimpin atau pemangku adat.",
        Link_Gambar: "./data/motif_yudha.png",
        Nama_Daerah: "Desa Tenganan Pegringsingan, Kec. Manggis, Kab. Karangasem.",
        Jenis_Kain: "Tenun Ikat Ganda",
        Warna_Motif: "Merah, Putih, Hitam"
    }
];

