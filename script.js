const products = [
  { id:1, name:'Футболка чорна', category:'men-odiah-futbolky-ta-maiky-futbolky', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Бавовна', sizes:['S','M','L'], recommended:true, colorVariantId:71 },
  { id:71, name:'Футболка біла', category:'men-odiah-futbolky-ta-maiky-futbolky', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL','3XL'], colorVariantId:1 },
  { id:2, name:'Поло біле', category:'men-odiah-futbolky-ta-maiky-polo', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], recommended:true, colorVariantId:72 },
  { id:72, name:'Поло сіре', category:'men-odiah-futbolky-ta-maiky-polo', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Синтетика', sizes:['S','M','L','XL','XXL'], colorVariantId:2 },
  { id:3, name:'Бежева майка', category:'men-odiah-futbolky-ta-maiky-maiky', gender:'men', price:0, images:['','',''], description:'', color:'бежевий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL','3XL'], recommended:true, colorVariantId:73 },
  { id:73, name:'Синя майка', category:'men-odiah-futbolky-ta-maiky-maiky', gender:'men', price:0, images:['','',''], description:'', color:'синій', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:3 },
  { id:5, name:'Зелене худі', category:'men-odiah-kofty-ta-svetry-khudi', gender:'men', price:0, images:['','',''], description:'', color:'зелений', material:'Бавовна', sizes:['S','M','L','XL','XXL'], recommended:false, colorVariantId:75 },
  { id:75, name:'Коричневе худі', category:'men-odiah-kofty-ta-svetry-khudi', gender:'men', price:0, images:['','',''], description:'', color:'коричневий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL','3XL'], colorVariantId:5 },
  { id:6, name:'Світшот червоний', category:'men-odiah-kofty-ta-svetry-svitshoty', gender:'men', price:0, images:['','',''], description:'', color:'червоний', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:76 },
  { id:76, name:'Світшот чорний', category:'men-odiah-kofty-ta-svetry-svitshoty', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Бавовна', sizes:['S','M','L','XL','XXL'], colorVariantId:6 },
  { id:9, name:'Білі джинси', category:'men-odiah-shtany-ta-dzhynsy-dzhynsy', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Джинс', sizes:['XS','S','M','L','XL','XXL','3XL'], recommended:false, colorVariantId:79 },
  { id:79, name:'Сірі джинси', category:'men-odiah-shtany-ta-dzhynsy-dzhynsy', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Джинс', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:9 },
  { id:10, name:'Бежеві брюки', category:'men-odiah-shtany-ta-dzhynsy-briuky', gender:'men', price:0, images:['','',''], description:'', color:'бежевий', material:'Синтетика', sizes:['S','M','L','XL','XXL'], recommended:false, colorVariantId:80 },
  { id:80, name:'Сині брюки', category:'men-odiah-shtany-ta-dzhynsy-briuky', gender:'men', price:0, images:['','',''], description:'', color:'синій', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL','3XL'], colorVariantId:10 },
  { id:11, name:'Зелені штани', category:'men-odiah-shtany-ta-dzhynsy-sportyvni-shtany', gender:'men', price:0, images:['','',''], description:'', color:'зелений', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:81 },
  { id:81, name:'Коричневі штани', category:'men-odiah-shtany-ta-dzhynsy-sportyvni-shtany', gender:'men', price:0, images:['','',''], description:'', color:'коричневий', material:'Синтетика', sizes:['S','M','L','XL','XXL'], colorVariantId:11 },
  { id:13, name:'Червоні джинсові шорти', category:'men-odiah-shorty-dzhynsovi-shorty', gender:'men', price:0, images:['','',''], description:'', color:'червоний', material:'Джинс', sizes:['XS','S','M','L','XL','XXL','3XL'], recommended:false, colorVariantId:83 },
  { id:83, name:'Чорні джинсові шорти', category:'men-odiah-shorty-dzhynsovi-shorty', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Джинс', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:13 },
  { id:14, name:'Білі спортивні шорти', category:'men-odiah-shorty-sportyvni-shorty', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Синтетика', sizes:['S','M','L','XL','XXL'], recommended:false, colorVariantId:84 },
  { id:84, name:'Сірі спортивні шорти', category:'men-odiah-shorty-sportyvni-shorty', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL','3XL'], colorVariantId:14 },
  { id:15, name:'Бежеві шорти', category:'men-odiah-shorty-povsiakdenni-shorty', gender:'men', price:0, images:['','',''], description:'', color:'бежевий', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:85 },
  { id:85, name:'Сині шорти', category:'men-odiah-shorty-povsiakdenni-shorty', gender:'men', price:0, images:['','',''], description:'', color:'синій', material:'Синтетика', sizes:['S','M','L','XL','XXL'], colorVariantId:15 },
  { id:16, name:'Зелена куртка', category:'men-odiah-verkhnii-odiah-kurtky', gender:'men', price:0, images:['','',''], description:'', color:'зелений', material:'Поліестер', sizes:['XS','S','M','L','XL','XXL','3XL'], recommended:false, colorVariantId:86 },
  { id:86, name:'Коричнева куртка', category:'men-odiah-verkhnii-odiah-kurtky', gender:'men', price:0, images:['','',''], description:'', color:'коричневий', material:'Поліестер', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:16 },
  { id:17, name:'Пуховик червоний', category:'men-odiah-verkhnii-odiah-pukhovyky', gender:'men', price:0, images:['','',''], description:'', color:'червоний', material:'Поліестер', sizes:['S','M','L','XL','XXL'], recommended:false, colorVariantId:87 },
  { id:87, name:'Пуховик чорний', category:'men-odiah-verkhnii-odiah-pukhovyky', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Поліестер', sizes:['XS','S','M','L','XL','XXL','3XL'], colorVariantId:17 },
  { id:19, name:'Біла вітровка', category:'men-odiah-verkhnii-odiah-vitrovky', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Поліестер', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:89 },
  { id:89, name:'Сіра вітровка', category:'men-odiah-verkhnii-odiah-vitrovky', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Поліестер', sizes:['S','M','L','XL','XXL'], colorVariantId:19 },
  { id:20, name:'Бежеві боксери', category:'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-boksery-ta-plavky', gender:'men', price:0, images:['','',''], description:'', color:'бежевий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL','3XL'], recommended:false, colorVariantId:90 },
  { id:90, name:'Сині боксери', category:'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-boksery-ta-plavky', gender:'men', price:0, images:['','',''], description:'', color:'синій', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:20 },
  { id:21, name:'Зелені шкарпетки', category:'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-shkarpetky', gender:'men', price:0, images:['','',''], description:'', color:'зелений', material:'Бавовна', sizes:['S','M','L','XL','XXL'], recommended:false, colorVariantId:91 },
  { id:91, name:'Коричневі шкарпетки', category:'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-shkarpetky', gender:'men', price:0, images:['','',''], description:'', color:'коричневий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL','3XL'], colorVariantId:21 },
  { id:22, name:'Червоні кеди', category:'men-vzuttia-krosivky-ta-kedy', gender:'men', price:0, images:['','',''], description:'', color:'червоний', material:'Шкіра', sizes:['39','40','41','42','43','44','45'], recommended:false, colorVariantIds:[92,142] },
  { id:92, name:'Чорні кеди', category:'men-vzuttia-krosivky-ta-kedy', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['40','41','42','43','44','45'], colorVariantIds:[22,142] },
  { id:142, name:'Білі кеди', category:'men-vzuttia-krosivky-ta-kedy', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Шкіра', sizes:['40','41','42','43','44','45'], colorVariantIds:[22,92] },
  { id:143, name:'Білі кросівки', category:'men-vzuttia-krosivky-ta-kedy', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Шкіра', sizes:['41','42','43','44','45'], colorVariantId: 144},
  { id:144, name:'Чорні кросівки', category:'men-vzuttia-krosivky-ta-kedy', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['40','41','42','43','44','45'], colorVariantId: 143},
  { id:25, name:'Білі капці', category:'men-vzuttia-sandali-ta-kaptsi', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Шкіра', sizes:['39','40','41','42','43','44','45','46'], recommended:false, colorVariantId:95 },
  { id:95, name:'Сірі капці', category:'men-vzuttia-sandali-ta-kaptsi', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Шкіра', sizes:['39','40','41','42','43','44','45'], colorVariantId:25 },
  { id:145, name:'Сірі сандалі', category:'men-vzuttia-sandali-ta-kaptsi', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Шкіра', sizes:['42','43','44','45'] },
  { id:26, name:'Бежева кепка', category:'men-aksesuary-holovni-ubory', gender:'men', price:0, images:['','',''], description:'', color:'бежевий', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantIds:[96,146] },
  { id:96, name:'Синя кепка', category:'men-aksesuary-holovni-ubory', gender:'men', price:0, images:['','',''], description:'', color:'синій', material:'Шкіра', sizes:['One size'], colorVariantIds:[26,146] },
  { id:146, name:'Чорна кепка', category:'men-aksesuary-holovni-ubory', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['One size'], colorVariantIds:[26,96] },
  { id:27, name:'Зелена сумка', category:'men-aksesuary-sumky-ta-riukzaky', gender:'men', price:0, images:['','',''], description:'', color:'зелений', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantIds:[97,147] },
  { id:97, name:'Коричнева сумка', category:'men-aksesuary-sumky-ta-riukzaky', gender:'men', price:0, images:['','',''], description:'', color:'коричневий', material:'Шкіра', sizes:['One size'], colorVariantIds:[27,147] },
  { id:147, name:'Чорний рюкзак', category:'men-aksesuary-sumky-ta-riukzaky', gender:'men', price:0, images:['','',''], description:'', color:'Чорний', material:'Шкіра', sizes:['One size'], colorVariantIds:[27,97] },
  { id:28, name:'Червоний ремінь', category:'men-aksesuary-remeni', gender:'men', price:0, images:['','',''], description:'', color:'червоний', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantId:98 },
  { id:98, name:'Чорний ремінь', category:'men-aksesuary-remeni', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['One size'], colorVariantId:28 },
  { id:29, name:'Білий гаманець', category:'men-aksesuary-hamantsi-ta-portmone', gender:'men', price:0, images:['','',''], description:'', color:'білий', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantIds:[99,148] },
  { id:99, name:'Сірий гаманець', category:'men-aksesuary-hamantsi-ta-portmone', gender:'men', price:0, images:['','',''], description:'', color:'сірий', material:'Шкіра', sizes:['One size'], colorVariantIds:[29,148] },
  { id:148, name:'Чорне портмоне', category:'men-aksesuary-hamantsi-ta-portmone', gender:'men', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['One size'], colorVariantIds:[29,99] },
  { id:30, name:'Бежеві окуляри', category:'men-aksesuary-okuliary', gender:'men', price:0, images:['','',''], description:'', color:'бежевий', sizes:['One size'], recommended:false },
  { id:31, name:'Синій годинник', category:'men-aksesuary-hodynnyky', gender:'men', price:0, images:['','',''], description:'', color:'синій', sizes:['One size'], recommended:false },
  { id:149, name:'Чорний годинник', category:'men-aksesuary-hodynnyky', gender:'men', price:0, images:['','',''], description:'', color:'чорний', sizes:['One size'], recommended:false },
  { id:32, name:'Зелений кулон', category:'men-aksesuary-prykrasy-ta-bizhuteriia', gender:'men', price:0, images:['','',''], description:'', color:'зелений', sizes:['15 см','16 см','17 см','18 см','19 см','20 см'], recommended:false },
  { id:150, name:'Чорна підвіска', category:'men-aksesuary-prykrasy-ta-bizhuteriia', gender:'men', price:0, images:['','',''], description:'', color:'чорний', sizes:['15 см','16 см','17 см','18 см','19 см','20 см'], recommended:false },
  { id:33, name:'Футболка коричнева', category:'women-odiah-futbolky-topy-ta-bluzy-futbolky', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Бавовна', sizes:['XS','S','M','L','XL'], recommended:true, colorVariantId:100 },
  { id:100, name:'Футболка червона', category:'women-odiah-futbolky-topy-ta-bluzy-futbolky', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Бавовна', sizes:['S','M','L','XL'], colorVariantId:33 },
  { id:34, name:'Чорний топ', category:'women-odiah-futbolky-topy-ta-bluzy-topy-ta-maiky', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], recommended:true, colorVariantId:101 },
  { id:101, name:'Білий топ', category:'women-odiah-futbolky-topy-ta-bluzy-topy-ta-maiky', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Бавовна', sizes:['XS','S','M','L','XL'], colorVariantId:34 },
  { id:35, name:'Сіра блуза', category:'women-odiah-futbolky-topy-ta-bluzy-bluzy', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Синтетика', sizes:['S','M','L','XL'], recommended:true, colorVariantId:102 },
  { id:102, name:'Бежева блуза', category:'women-odiah-futbolky-topy-ta-bluzy-bluzy', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:35 },
  { id:36, name:'Сорочка синя', category:'women-odiah-futbolky-topy-ta-bluzy-sorochky', gender:'women', price:0, images:['','',''], description:'', color:'синій', material:'Бавовна', sizes:['XS','S','M','L','XL'], recommended:true, colorVariantId:103 },
  { id:103, name:'Сорочка зелена', category:'women-odiah-futbolky-topy-ta-bluzy-sorochky', gender:'women', price:0, images:['','',''], description:'', color:'зелений', material:'Бавовна', sizes:['S','M','L','XL'], colorVariantId:36 },
  { id:38, name:'Коричневий кардиган', category:'women-odiah-kofty-ta-svetry-kardyhany', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:105 },
  { id:105, name:'Червоний кардиган', category:'women-odiah-kofty-ta-svetry-kardyhany', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Бавовна', sizes:['XS','S','M','L','XL'], colorVariantId:38 },
  { id:43, name:'Спідниця міні чорна', category:'women-odiah-spidnytsi-spidnytsi-mini', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Синтетика', sizes:['S','M','L','XL'], recommended:false, colorVariantId:110 },
  { id:110, name:'Спідниця міні біла', category:'women-odiah-spidnytsi-spidnytsi-mini', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:43 },
  { id:44, name:'Спідниця міді сіра', category:'women-odiah-spidnytsi-spidnytsi-midi-ta-maksi', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Синтетика', sizes:['XS','S','M','L','XL'], recommended:false, colorVariantId:111 },
  { id:111, name:'Спідниця міді бежева', category:'women-odiah-spidnytsi-spidnytsi-midi-ta-maksi', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Синтетика', sizes:['S','M','L','XL'], colorVariantId:44 },
  { id:45, name:'Сині джинси', category:'women-odiah-shtany-ta-dzhynsy-dzhynsy', gender:'women', price:0, images:['','',''], description:'', color:'синій', material:'Джинс', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:112 },
  { id:112, name:'Зелені джинси', category:'women-odiah-shtany-ta-dzhynsy-dzhynsy', gender:'women', price:0, images:['','',''], description:'', color:'зелений', material:'Джинс', sizes:['XS','S','M','L','XL'], colorVariantId:45 },
  { id:46, name:'Коричневі брюки', category:'women-odiah-shtany-ta-dzhynsy-briuky', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Синтетика', sizes:['S','M','L','XL'], recommended:false, colorVariantId:113 },
  { id:113, name:'Червоні брюки', category:'women-odiah-shtany-ta-dzhynsy-briuky', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:46 },
  { id:47, name:'Чорні легінси', category:'women-odiah-shtany-ta-dzhynsy-lehinsy', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Синтетика', sizes:['XS','S','M','L','XL'], recommended:false, colorVariantId:114 },
  { id:114, name:'Білі легінси', category:'women-odiah-shtany-ta-dzhynsy-lehinsy', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Синтетика', sizes:['S','M','L','XL'], colorVariantId:47 },
  { id:48, name:'Сірі спортивні штани', category:'women-odiah-shtany-ta-dzhynsy-sportyvni-shtany', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Синтетика', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:115 },
  { id:115, name:'Бежеві спортивні штани', category:'women-odiah-shtany-ta-dzhynsy-sportyvni-shtany', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Синтетика', sizes:['XS','S','M','L','XL'], colorVariantId:48 },
  { id:49, name:'Сині джинсові шорти', category:'women-odiah-shorty-dzhynsovi-shorty', gender:'women', price:0, images:['','',''], description:'', color:'синій', material:'Джинс', sizes:['S','M','L','XL'], recommended:false, colorVariantId:116 },
  { id:116, name:'Зелені джинсові шорти', category:'women-odiah-shorty-dzhynsovi-shorty', gender:'women', price:0, images:['','',''], description:'', color:'зелений', material:'Джинс', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:49 },
  { id:50, name:'Коричневі шорти', category:'women-odiah-shorty-povsiakdenni-shorty', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Синтетика', sizes:['XS','S','M','L','XL'], recommended:false, colorVariantId:117 },
  { id:117, name:'Червоні шорти', category:'women-odiah-shorty-povsiakdenni-shorty', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Синтетика', sizes:['S','M','L','XL'], colorVariantId:50 },
  { id:53, name:'Чорне пальто', category:'women-odiah-verkhnii-odiah-palta-ta-trenchi', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Поліестер', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:120 },
  { id:120, name:'Біле пальто', category:'women-odiah-verkhnii-odiah-palta-ta-trenchi', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Поліестер', sizes:['XS','S','M','L','XL'], colorVariantId:53 },
  { id:54, name:'Сіра куртка', category:'women-odiah-verkhnii-odiah-kurtky', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Поліестер', sizes:['S','M','L','XL'], recommended:false, colorVariantId:121 },
  { id:121, name:'Бежева куртка', category:'women-odiah-verkhnii-odiah-kurtky', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Поліестер', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:54 },
  { id:55, name:'Синій пуховик', category:'women-odiah-verkhnii-odiah-pukhovyky', gender:'women', price:0, images:['','',''], description:'', color:'синій', material:'Поліестер', sizes:['XS','S','M','L','XL'], recommended:false, colorVariantId:122 },
  { id:122, name:'Зелений пуховик', category:'women-odiah-verkhnii-odiah-pukhovyky', gender:'women', price:0, images:['','',''], description:'', color:'зелений', material:'Поліестер', sizes:['S','M','L','XL'], colorVariantId:55 },
  { id:57, name:'Коричневий комплект білизни', category:'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-komplekty-bilyzny', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:124 },
  { id:124, name:'Червоний комплект білизни', category:'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-komplekty-bilyzny', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Бавовна', sizes:['XS','S','M','L','XL'], colorVariantId:57 },
  { id:58, name:'Чорна піжама', category:'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-pizhamy-ta-khalaty', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Бавовна', sizes:['S','M','L','XL'], recommended:false, colorVariantId:125 },
  { id:125, name:'Біла піжама', category:'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-pizhamy-ta-khalaty', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:58 },
  { id:59, name:'Сірі шкарпетки', category:'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-shkarpetky-ta-kolhotky', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Бавовна', sizes:['XS','S','M','L','XL'], recommended:false, colorVariantId:126 },
  { id:126, name:'Бежеві шкарпетки', category:'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-shkarpetky-ta-kolhotky', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Бавовна', sizes:['S','M','L','XL'], colorVariantId:59 },
  { id:60, name:'Сині туфлі', category:'women-vzuttia-tufli-ta-bosonizhky', gender:'women', price:0, images:['','',''], description:'', color:'синій', material:'Шкіра', sizes:['35','36','37','38','39','40','41'], recommended:false, colorVariantIds:[127,154] },
  { id:127, name:'Зелені туфлі', category:'women-vzuttia-tufli-ta-bosonizhky', gender:'women', price:0, images:['','',''], description:'', color:'зелений', material:'Шкіра', sizes:['35','36','37','38','39','40'], colorVariantIds:[60,154] },
  { id:154, name:'Чорні туфлі', category:'women-vzuttia-tufli-ta-bosonizhky', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['35','36','37','38','39','40','41'], colorVariantIds:[60,127] },
  { id:61, name:'Коричневі кросівки', category:'women-vzuttia-krosivky-ta-kedy', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Шкіра', sizes:['36','37','38','39','40'], recommended:false, colorVariantIds:[128,153] },
  { id:128, name:'Червоні кросівки', category:'women-vzuttia-krosivky-ta-kedy', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Шкіра', sizes:['35','36','37','38','39','40','41'], colorVariantIds:[61,153] },
  { id:153, name:'Чорні кросівки', category:'women-vzuttia-krosivky-ta-kedy', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['36','37','38','39','40','41'], colorVariantIds:[61,128] },
  { id:64, name:'Чорні шльопанці', category:'women-vzuttia-shlopantsi-ta-sandali', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['35','36','37','38','39','40'], recommended:false, colorVariantId:131 },
  { id:131, name:'Білі шльопанці', category:'women-vzuttia-shlopantsi-ta-sandali', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Шкіра', sizes:['36','37','38','39','40'], colorVariantId:64 },
  { id:65, name:'Сіра сумка', category:'women-aksesuary-sumky-ta-klatchi', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantId:132 },
  { id:132, name:'Бежева сумка', category:'women-aksesuary-sumky-ta-klatchi', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Шкіра', sizes:['One size'], colorVariantId:65 },
  { id:155, name:'Чорний клатч', category:'women-aksesuary-sumky-ta-klatchi', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['One size'] },
  { id:66, name:'Синя кепка', category:'women-aksesuary-holovni-ubory', gender:'women', price:0, images:['','',''], description:'', color:'синій', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantIds:[133,156] },
  { id:133, name:'Зелена кепка', category:'women-aksesuary-holovni-ubory', gender:'women', price:0, images:['','',''], description:'', color:'зелений', material:'Шкіра', sizes:['One size'], colorVariantIds:[66,156] },
  { id:156, name:'Чорна кепка', category:'women-aksesuary-holovni-ubory', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Шкіра', sizes:['One size'], colorVariantIds:[66,133] },
  { id:67, name:'Коричневий браслет', category:'women-aksesuary-prykrasy-ta-bizhuteriia', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', sizes:['15 см','16 см','17 см','18 см','19 см'], recommended:false },
  { id:68, name:'Червоний ремінь', category:'women-aksesuary-remeni', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Шкіра', sizes:['One size'], recommended:false },
  { id:69, name:'Чорні окуляри', category:'women-aksesuary-okuliary', gender:'women', price:0, images:['','',''], description:'', color:'чорний', sizes:['One size'], recommended:false, colorVariantId:157 },
  { id:157, name:'Коричневі окуляри', category:'women-aksesuary-okuliary', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', sizes:['One size'], colorVariantId:69 },
  { id:70, name:'Біла заколка', category:'women-aksesuary-aksesuary-dlia-volossia', gender:'women', price:0, images:['','',''], description:'', color:'білий', sizes:['One size'], recommended:false, colorVariantId:158 },
  { id:158, name:'Чорна заколка', category:'women-aksesuary-aksesuary-dlia-volossia', gender:'women', price:0, images:['','',''], description:'', color:'чорний', sizes:['One size'], colorVariantId:70 },
  { id:151, name:'Сірий гаманець', category:'women-aksesuary-hamantsi-ta-portmone', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Шкіра', sizes:['One size'], recommended:false, colorVariantId:152 },
  { id:152, name:'Бежевий гаманець', category:'women-aksesuary-hamantsi-ta-portmone', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Шкіра', sizes:['One size'], colorVariantId:151 },
  { id:134, name:'Синє зіп-худі', category:'men-odiah-kofty-ta-svetry-zip-khudi', gender:'men', price:0, images:['','',''], description:'', color:'синій', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:135 },
  { id:135, name:'Зелене зіп-худі', category:'men-odiah-kofty-ta-svetry-zip-khudi', gender:'men', price:0, images:['','',''], description:'', color:'зелений', material:'Бавовна', sizes:['S','M','L','XL','XXL'], colorVariantId:134 },
  { id:136, name:'Коричневе худі', category:'women-odiah-kofty-ta-svetry-khudi', gender:'women', price:0, images:['','',''], description:'', color:'коричневий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], recommended:false, colorVariantId:137 },
  { id:137, name:'Червоне худі', category:'women-odiah-kofty-ta-svetry-khudi', gender:'women', price:0, images:['','',''], description:'', color:'червоний', material:'Бавовна', sizes:['XS','S','M','L','XL'], colorVariantId:136 },
  { id:138, name:'Чорний світшот', category:'women-odiah-kofty-ta-svetry-svitshoty', gender:'women', price:0, images:['','',''], description:'', color:'чорний', material:'Бавовна', sizes:['S','M','L','XL'], recommended:false, colorVariantId:139 },
  { id:139, name:'Білий світшот', category:'women-odiah-kofty-ta-svetry-svitshoty', gender:'women', price:0, images:['','',''], description:'', color:'білий', material:'Бавовна', sizes:['XS','S','M','L','XL','XXL'], colorVariantId:138 },
  { id:140, name:'Сіре зіп-худі', category:'women-odiah-kofty-ta-svetry-zip-khudi', gender:'women', price:0, images:['','',''], description:'', color:'сірий', material:'Бавовна', sizes:['XS','S','M','L','XL'], recommended:false, colorVariantId:141 },
  { id:141, name:'Бежеве зіп-худі', category:'women-odiah-kofty-ta-svetry-zip-khudi', gender:'women', price:0, images:['','',''], description:'', color:'бежевий', material:'Бавовна', sizes:['S','M','L','XL'], colorVariantId:140 },
];

const categoryLabels = {
  'men-odiah-futbolky-ta-maiky-futbolky': 'Футболки',
  'men-odiah-futbolky-ta-maiky-polo': 'Поло',
  'men-odiah-futbolky-ta-maiky-maiky': 'Майки',
  'men-odiah-kofty-ta-svetry-khudi': 'Худі',
  'men-odiah-kofty-ta-svetry-svitshoty': 'Світшоти',
  'men-odiah-shtany-ta-dzhynsy-dzhynsy': 'Джинси',
  'men-odiah-shtany-ta-dzhynsy-briuky': 'Брюки',
  'men-odiah-shtany-ta-dzhynsy-sportyvni-shtany': 'Спортивні штани',
  'men-odiah-shorty-dzhynsovi-shorty': 'Джинсові шорти',
  'men-odiah-shorty-sportyvni-shorty': 'Спортивні шорти',
  'men-odiah-shorty-povsiakdenni-shorty': 'Повсякденні шорти',
  'men-odiah-verkhnii-odiah-kurtky': 'Куртки',
  'men-odiah-verkhnii-odiah-pukhovyky': 'Пуховики',
  'men-odiah-verkhnii-odiah-vitrovky': 'Вітровки',
  'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-boksery-ta-plavky': 'Боксери та плавки',
  'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-shkarpetky': 'Шкарпетки',
  'men-vzuttia-krosivky-ta-kedy': 'Кросівки та кеди',
  'men-vzuttia-sandali-ta-kaptsi': 'Сандалі та капці',
  'men-aksesuary-holovni-ubory': 'Головні убори',
  'men-aksesuary-sumky-ta-riukzaky': 'Сумки та рюкзаки',
  'men-aksesuary-remeni': 'Ремені',
  'men-aksesuary-hamantsi-ta-portmone': 'Гаманці та портмоне',
  'men-aksesuary-okuliary': 'Окуляри',
  'men-aksesuary-hodynnyky': 'Годинники',
  'men-aksesuary-prykrasy-ta-bizhuteriia': 'Прикраси та біжутерія',
  'women-odiah-futbolky-topy-ta-bluzy-futbolky': 'Футболки',
  'women-odiah-futbolky-topy-ta-bluzy-topy-ta-maiky': 'Топи та майки',
  'women-odiah-futbolky-topy-ta-bluzy-bluzy': 'Блузи',
  'women-odiah-futbolky-topy-ta-bluzy-sorochky': 'Сорочки',
  'women-odiah-kofty-ta-svetry-kardyhany': 'Кардигани',
  'women-odiah-spidnytsi-spidnytsi-mini': 'Спідниці міні',
  'women-odiah-spidnytsi-spidnytsi-midi-ta-maksi': 'Спідниці міді та максі',
  'women-odiah-shtany-ta-dzhynsy-dzhynsy': 'Джинси',
  'women-odiah-shtany-ta-dzhynsy-briuky': 'Брюки',
  'women-odiah-shtany-ta-dzhynsy-lehinsy': 'Легінси',
  'women-odiah-shtany-ta-dzhynsy-sportyvni-shtany': 'Спортивні штани',
  'women-odiah-shorty-dzhynsovi-shorty': 'Джинсові шорти',
  'women-odiah-shorty-povsiakdenni-shorty': 'Повсякденні шорти',
  'women-odiah-verkhnii-odiah-palta-ta-trenchi': 'Пальта та тренчі',
  'women-odiah-verkhnii-odiah-kurtky': 'Куртки',
  'women-odiah-verkhnii-odiah-pukhovyky': 'Пуховики',
  'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-komplekty-bilyzny': 'Комплекти білизни',
  'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-pizhamy-ta-khalaty': 'Піжами та халати',
  'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-shkarpetky-ta-kolhotky': 'Шкарпетки та колготки',
  'women-vzuttia-tufli-ta-bosonizhky': 'Туфлі та босоніжки',
  'women-vzuttia-krosivky-ta-kedy': 'Кросівки та кеди',
  'women-vzuttia-shlopantsi-ta-sandali': 'Шльопанці та сандалі',
  'women-aksesuary-sumky-ta-klatchi': 'Сумки та клатчі',
  'women-aksesuary-holovni-ubory': 'Головні убори',
  'women-aksesuary-prykrasy-ta-bizhuteriia': 'Прикраси та біжутерія',
  'women-aksesuary-remeni': 'Ремені',
  'women-aksesuary-okuliary': 'Окуляри',
  'women-aksesuary-aksesuary-dlia-volossia': 'Аксесуари для волосся',
  'women-aksesuary-hamantsi-ta-portmone': 'Гаманці та портмоне',
  'men-odiah-kofty-ta-svetry-zip-khudi': 'Зіп-худі',
  'women-odiah-kofty-ta-svetry-khudi': 'Худі',
  'women-odiah-kofty-ta-svetry-svitshoty': 'Світшоти',
  'women-odiah-kofty-ta-svetry-zip-khudi': 'Зіп-худі',
};
const categoryBreadcrumbs = {
  'men-odiah-futbolky-ta-maiky-futbolky': 'Чоловікам / Одяг / Футболки та майки / Футболки',
  'men-odiah-futbolky-ta-maiky-polo': 'Чоловікам / Одяг / Футболки та майки / Поло',
  'men-odiah-futbolky-ta-maiky-maiky': 'Чоловікам / Одяг / Футболки та майки / Майки',
  'men-odiah-kofty-ta-svetry-khudi': 'Чоловікам / Одяг / Кофти / Худі',
  'men-odiah-kofty-ta-svetry-svitshoty': 'Чоловікам / Одяг / Кофти / Світшоти',
  'men-odiah-shtany-ta-dzhynsy-dzhynsy': 'Чоловікам / Одяг / Штани та джинси / Джинси',
  'men-odiah-shtany-ta-dzhynsy-briuky': 'Чоловікам / Одяг / Штани та джинси / Брюки',
  'men-odiah-shtany-ta-dzhynsy-sportyvni-shtany': 'Чоловікам / Одяг / Штани та джинси / Спортивні штани',
  'men-odiah-shorty-dzhynsovi-shorty': 'Чоловікам / Одяг / Шорти / Джинсові шорти',
  'men-odiah-shorty-sportyvni-shorty': 'Чоловікам / Одяг / Шорти / Спортивні шорти',
  'men-odiah-shorty-povsiakdenni-shorty': 'Чоловікам / Одяг / Шорти / Повсякденні шорти',
  'men-odiah-verkhnii-odiah-kurtky': 'Чоловікам / Одяг / Верхній одяг / Куртки',
  'men-odiah-verkhnii-odiah-pukhovyky': 'Чоловікам / Одяг / Верхній одяг / Пуховики',
  'men-odiah-verkhnii-odiah-vitrovky': 'Чоловікам / Одяг / Верхній одяг / Вітровки',
  'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-boksery-ta-plavky': 'Чоловікам / Одяг / Нижня білизна та шкарпетки / Боксери та плавки',
  'men-odiah-nyzhnia-bilyzna-ta-shkarpetky-shkarpetky': 'Чоловікам / Одяг / Нижня білизна та шкарпетки / Шкарпетки',
  'men-vzuttia-krosivky-ta-kedy': 'Чоловікам / Взуття / Кросівки та кеди',
  'men-vzuttia-sandali-ta-kaptsi': 'Чоловікам / Взуття / Сандалі та капці',
  'men-aksesuary-holovni-ubory': 'Чоловікам / Аксесуари / Головні убори',
  'men-aksesuary-sumky-ta-riukzaky': 'Чоловікам / Аксесуари / Сумки та рюкзаки',
  'men-aksesuary-remeni': 'Чоловікам / Аксесуари / Ремені',
  'men-aksesuary-hamantsi-ta-portmone': 'Чоловікам / Аксесуари / Гаманці та портмоне',
  'men-aksesuary-okuliary': 'Чоловікам / Аксесуари / Окуляри',
  'men-aksesuary-hodynnyky': 'Чоловікам / Аксесуари / Годинники',
  'men-aksesuary-prykrasy-ta-bizhuteriia': 'Чоловікам / Аксесуари / Прикраси та біжутерія',
  'women-odiah-futbolky-topy-ta-bluzy-futbolky': 'Жінкам / Одяг / Футболки, топи та блузи / Футболки',
  'women-odiah-futbolky-topy-ta-bluzy-topy-ta-maiky': 'Жінкам / Одяг / Футболки, топи та блузи / Топи та майки',
  'women-odiah-futbolky-topy-ta-bluzy-bluzy': 'Жінкам / Одяг / Футболки, топи та блузи / Блузи',
  'women-odiah-futbolky-topy-ta-bluzy-sorochky': 'Жінкам / Одяг / Футболки, топи та блузи / Сорочки',
  'women-odiah-kofty-ta-svetry-kardyhany': 'Жінкам / Одяг / Кофти / Кардигани',
  'women-odiah-spidnytsi-spidnytsi-mini': 'Жінкам / Одяг / Спідниці / Спідниці міні',
  'women-odiah-spidnytsi-spidnytsi-midi-ta-maksi': 'Жінкам / Одяг / Спідниці / Спідниці міді та максі',
  'women-odiah-shtany-ta-dzhynsy-dzhynsy': 'Жінкам / Одяг / Штани та джинси / Джинси',
  'women-odiah-shtany-ta-dzhynsy-briuky': 'Жінкам / Одяг / Штани та джинси / Брюки',
  'women-odiah-shtany-ta-dzhynsy-lehinsy': 'Жінкам / Одяг / Штани та джинси / Легінси',
  'women-odiah-shtany-ta-dzhynsy-sportyvni-shtany': 'Жінкам / Одяг / Штани та джинси / Спортивні штани',
  'women-odiah-shorty-dzhynsovi-shorty': 'Жінкам / Одяг / Шорти / Джинсові шорти',
  'women-odiah-shorty-povsiakdenni-shorty': 'Жінкам / Одяг / Шорти / Повсякденні шорти',
  'women-odiah-verkhnii-odiah-palta-ta-trenchi': 'Жінкам / Одяг / Верхній одяг / Пальта та тренчі',
  'women-odiah-verkhnii-odiah-kurtky': 'Жінкам / Одяг / Верхній одяг / Куртки',
  'women-odiah-verkhnii-odiah-pukhovyky': 'Жінкам / Одяг / Верхній одяг / Пуховики',
  'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-komplekty-bilyzny': 'Жінкам / Одяг / Нижня білизна та домашній одяг / Комплекти білизни',
  'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-pizhamy-ta-khalaty': 'Жінкам / Одяг / Нижня білизна та домашній одяг / Піжами та халати',
  'women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-shkarpetky-ta-kolhotky': 'Жінкам / Одяг / Нижня білизна та домашній одяг / Шкарпетки та колготки',
  'women-vzuttia-tufli-ta-bosonizhky': 'Жінкам / Взуття / Туфлі та босоніжки',
  'women-vzuttia-krosivky-ta-kedy': 'Жінкам / Взуття / Кросівки та кеди',
  'women-vzuttia-shlopantsi-ta-sandali': 'Жінкам / Взуття / Шльопанці та сандалі',
  'women-aksesuary-sumky-ta-klatchi': 'Жінкам / Аксесуари / Сумки та клатчі',
  'women-aksesuary-holovni-ubory': 'Жінкам / Аксесуари / Головні убори',
  'women-aksesuary-prykrasy-ta-bizhuteriia': 'Жінкам / Аксесуари / Прикраси та біжутерія',
  'women-aksesuary-remeni': 'Жінкам / Аксесуари / Ремені',
  'women-aksesuary-okuliary': 'Жінкам / Аксесуари / Окуляри',
  'women-aksesuary-aksesuary-dlia-volossia': 'Жінкам / Аксесуари / Аксесуари для волосся',
  'women-aksesuary-hamantsi-ta-portmone': 'Жінкам / Аксесуари / Гаманці та портмоне',
  'men-odiah-kofty-ta-svetry-zip-khudi': 'Чоловікам / Одяг / Кофти / Зіп-худі',
  'women-odiah-kofty-ta-svetry-khudi': 'Жінкам / Одяг / Кофти / Худі',
  'women-odiah-kofty-ta-svetry-svitshoty': 'Жінкам / Одяг / Кофти / Світшоти',
  'women-odiah-kofty-ta-svetry-zip-khudi': 'Жінкам / Одяг / Кофти  / Зіп-худі',
};
const categoryTree = {
  "men": {
    "label": "Чоловікам",
    "groups": [
      {
        "label": "Одяг",
        "subgroups": [
          {
            "label": "Футболки та майки",
            "items": [
              {
                "label": "Футболки",
                "slug": "men-odiah-futbolky-ta-maiky-futbolky"
              },
              {
                "label": "Поло",
                "slug": "men-odiah-futbolky-ta-maiky-polo"
              },
              {
                "label": "Майки",
                "slug": "men-odiah-futbolky-ta-maiky-maiky"
              }
            ]
          },
          {
            "label": "Кофти",
            "items": [
              {
                "label": "Худі",
                "slug": "men-odiah-kofty-ta-svetry-khudi"
              },
              {
                "label": "Світшоти",
                "slug": "men-odiah-kofty-ta-svetry-svitshoty"
              },
              {
                "label": "Зіп-худі",
                "slug": "men-odiah-kofty-ta-svetry-zip-khudi"
              }
            ]
          },
          {
            "label": "Штани та джинси",
            "items": [
              {
                "label": "Джинси",
                "slug": "men-odiah-shtany-ta-dzhynsy-dzhynsy"
              },
              {
                "label": "Брюки",
                "slug": "men-odiah-shtany-ta-dzhynsy-briuky"
              },
              {
                "label": "Спортивні штани",
                "slug": "men-odiah-shtany-ta-dzhynsy-sportyvni-shtany"
              }
            ]
          },
          {
            "label": "Шорти",
            "items": [
              {
                "label": "Джинсові шорти",
                "slug": "men-odiah-shorty-dzhynsovi-shorty"
              },
              {
                "label": "Спортивні шорти",
                "slug": "men-odiah-shorty-sportyvni-shorty"
              },
              {
                "label": "Повсякденні шорти",
                "slug": "men-odiah-shorty-povsiakdenni-shorty"
              }
            ]
          },
          {
            "label": "Верхній одяг",
            "items": [
              {
                "label": "Куртки",
                "slug": "men-odiah-verkhnii-odiah-kurtky"
              },
              {
                "label": "Пуховики",
                "slug": "men-odiah-verkhnii-odiah-pukhovyky"
              },
              {
                "label": "Вітровки",
                "slug": "men-odiah-verkhnii-odiah-vitrovky"
              }
            ]
          },
          {
            "label": "Нижня білизна та шкарпетки",
            "items": [
              {
                "label": "Боксери та плавки",
                "slug": "men-odiah-nyzhnia-bilyzna-ta-shkarpetky-boksery-ta-plavky"
              },
              {
                "label": "Шкарпетки",
                "slug": "men-odiah-nyzhnia-bilyzna-ta-shkarpetky-shkarpetky"
              }
            ]
          }
        ],
        "items": []
      },
      {
        "label": "Взуття",
        "subgroups": [],
        "items": [
          {
            "label": "Кросівки та кеди",
            "slug": "men-vzuttia-krosivky-ta-kedy"
          },
          {
            "label": "Сандалі та капці",
            "slug": "men-vzuttia-sandali-ta-kaptsi"
          }
        ]
      },
      {
        "label": "Аксесуари",
        "subgroups": [],
        "items": [
          {
            "label": "Головні убори",
            "slug": "men-aksesuary-holovni-ubory"
          },
          {
            "label": "Сумки та рюкзаки",
            "slug": "men-aksesuary-sumky-ta-riukzaky"
          },
          {
            "label": "Ремені",
            "slug": "men-aksesuary-remeni"
          },
          {
            "label": "Гаманці та портмоне",
            "slug": "men-aksesuary-hamantsi-ta-portmone"
          },
          {
            "label": "Окуляри",
            "slug": "men-aksesuary-okuliary"
          },
          {
            "label": "Годинники",
            "slug": "men-aksesuary-hodynnyky"
          },
          {
            "label": "Прикраси та біжутерія",
            "slug": "men-aksesuary-prykrasy-ta-bizhuteriia"
          }
        ]
      }
    ]
  },
  "women": {
    "label": "Жінкам",
    "groups": [
      {
        "label": "Одяг",
        "subgroups": [
          {
            "label": "Футболки, топи та блузи",
            "items": [
              {
                "label": "Футболки",
                "slug": "women-odiah-futbolky-topy-ta-bluzy-futbolky"
              },
              {
                "label": "Топи та майки",
                "slug": "women-odiah-futbolky-topy-ta-bluzy-topy-ta-maiky"
              },
              {
                "label": "Блузи",
                "slug": "women-odiah-futbolky-topy-ta-bluzy-bluzy"
              },
              {
                "label": "Сорочки",
                "slug": "women-odiah-futbolky-topy-ta-bluzy-sorochky"
              }
            ]
          },
          {
            "label": "Кофти",
            "items": [
              {
                "label": "Кардигани",
                "slug": "women-odiah-kofty-ta-svetry-kardyhany"
              },
              {
                "label": "Худі",
                "slug": "women-odiah-kofty-ta-svetry-khudi"
              },
              {
                "label": "Світшоти",
                "slug": "women-odiah-kofty-ta-svetry-svitshoty"
              },
              {
                "label": "Зіп-худі",
                "slug": "women-odiah-kofty-ta-svetry-zip-khudi"
              }
            ]
          },
          {
            "label": "Спідниці",
            "items": [
              {
                "label": "Спідниці міні",
                "slug": "women-odiah-spidnytsi-spidnytsi-mini"
              },
              {
                "label": "Спідниці міді та максі",
                "slug": "women-odiah-spidnytsi-spidnytsi-midi-ta-maksi"
              }
            ]
          },
          {
            "label": "Штани та джинси",
            "items": [
              {
                "label": "Джинси",
                "slug": "women-odiah-shtany-ta-dzhynsy-dzhynsy"
              },
              {
                "label": "Брюки",
                "slug": "women-odiah-shtany-ta-dzhynsy-briuky"
              },
              {
                "label": "Легінси",
                "slug": "women-odiah-shtany-ta-dzhynsy-lehinsy"
              },
              {
                "label": "Спортивні штани",
                "slug": "women-odiah-shtany-ta-dzhynsy-sportyvni-shtany"
              }
            ]
          },
          {
            "label": "Шорти",
            "items": [
              {
                "label": "Джинсові шорти",
                "slug": "women-odiah-shorty-dzhynsovi-shorty"
              },
              {
                "label": "Повсякденні шорти",
                "slug": "women-odiah-shorty-povsiakdenni-shorty"
              }
            ]
          },
          {
            "label": "Верхній одяг",
            "items": [
              {
                "label": "Пальта та тренчі",
                "slug": "women-odiah-verkhnii-odiah-palta-ta-trenchi"
              },
              {
                "label": "Куртки",
                "slug": "women-odiah-verkhnii-odiah-kurtky"
              },
              {
                "label": "Пуховики",
                "slug": "women-odiah-verkhnii-odiah-pukhovyky"
              }
            ]
          },
          {
            "label": "Нижня білизна та домашній одяг",
            "items": [
              {
                "label": "Комплекти білизни",
                "slug": "women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-komplekty-bilyzny"
              },
              {
                "label": "Піжами та халати",
                "slug": "women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-pizhamy-ta-khalaty"
              },
              {
                "label": "Шкарпетки та колготки",
                "slug": "women-odiah-nyzhnia-bilyzna-ta-domashnii-odiah-shkarpetky-ta-kolhotky"
              }
            ]
          }
        ],
        "items": []
      },
      {
        "label": "Взуття",
        "subgroups": [],
        "items": [
          {
            "label": "Туфлі та босоніжки",
            "slug": "women-vzuttia-tufli-ta-bosonizhky"
          },
          {
            "label": "Кросівки та кеди",
            "slug": "women-vzuttia-krosivky-ta-kedy"
          },
          {
            "label": "Шльопанці та сандалі",
            "slug": "women-vzuttia-shlopantsi-ta-sandali"
          }
        ]
      },
      {
        "label": "Аксесуари",
        "subgroups": [],
        "items": [
          {
            "label": "Сумки та клатчі",
            "slug": "women-aksesuary-sumky-ta-klatchi"
          },
          {
            "label": "Головні убори",
            "slug": "women-aksesuary-holovni-ubory"
          },
          {
            "label": "Прикраси та біжутерія",
            "slug": "women-aksesuary-prykrasy-ta-bizhuteriia"
          },
          {
            "label": "Ремені",
            "slug": "women-aksesuary-remeni"
          },
          {
            "label": "Окуляри",
            "slug": "women-aksesuary-okuliary"
          },
          {
            "label": "Аксесуари для волосся",
            "slug": "women-aksesuary-aksesuary-dlia-volossia"
          },
          {
            "label": "Гаманці та портмоне",
            "slug": "women-aksesuary-hamantsi-ta-portmone"
          }
        ]
      }
    ]
  }
};

const wishlist = new Set();
const cart = new Map();
let currentViewer = { images: [], index: 0 };
let currentProductId = null;
let lastCatalogPath = null;
function priceLabel(p){
  return p.price ? `${p.price} грн` : `Ціна не вказана`;
}
function productCardHTML(p){
  const img = p.images && p.images[0];
  const photoStyle = img ? ` style="background-image:url('${img}');"` : "";
  const photoLabel = img ? "" : "Фото товару";
  const isWished = wishlist.has(p.id);
  return `
    <div class="product-card" data-id="${p.id}" onclick="openProduct(${p.id})">
      <div class="product-photo"${photoStyle}>
        <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${p.id})" aria-label="Обране">
          <svg viewBox="0 0 24 24"><path d="M12,20 C7,16 3,12.6 3,8.6 C3,5.9 5.1,4 7.6,4 C9.1,4 10.5,4.8 12,6.3 C13.5,4.8 14.9,4 16.4,4 C18.9,4 21,5.9 21,8.6 C21,12.6 17,16 12,20 Z"/></svg>
        </button>
        ${photoLabel}
      </div>
      <div class="product-info">
        <div class="product-cat">${categoryLabels[p.category] || p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-bottom">
          <div class="product-price">${priceLabel(p)}</div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id}); flashButton(this)">+</button>
        </div>
      </div>
    </div>
  `;
}

function renderGrid(containerId, list, emptyId){
  const grid = document.getElementById(containerId);
  grid.innerHTML = list.map(productCardHTML).join("");
  if(emptyId){
    document.getElementById(emptyId).style.display = list.length ? "none" : "block";
  }
}
const viewedIds = [];

function recordView(id){
  const i = viewedIds.indexOf(id);
  if(i !== -1) viewedIds.splice(i, 1);
  viewedIds.unshift(id);
  if(viewedIds.length > 20) viewedIds.pop();
}

function shuffleArray(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRecommendations(count = 8){
  let pool = [];

  if(viewedIds.length){
    const viewedCats = [...new Set(
      viewedIds.map(id => products.find(p => p.id === id)?.category).filter(Boolean)
    )];
    pool = products.filter(p => viewedCats.includes(p.category) && !viewedIds.includes(p.id));
  }

  pool = shuffleArray(pool);

  if(pool.length < count){
    const already = new Set(pool.map(p => p.id));
    const rest = shuffleArray(products.filter(p => !already.has(p.id)));
    pool = pool.concat(rest);
  }

  return pool.slice(0, count);
}
function showPage(name){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${name}`).classList.add("active");
  closeDrawer();
  closeAllMegaMenus();
  closeFilterPanel();
  window.scrollTo({ top:0, behavior:"smooth" });

  if(name === "home") renderGrid("recommend-grid", getRecommendations());
  if(name === "wishlist") renderGrid("wishlist-grid", products.filter(p => wishlist.has(p.id)), "wishlist-empty");
  if(name === "cart") renderCart();
  if(name === "outfit") renderOutfitTypeList();
}
function slugsByBreadcrumbPrefix(prefixParts){
  const prefix = prefixParts.join(" / ");
  return Object.keys(categoryBreadcrumbs).filter(slug => {
    const full = categoryBreadcrumbs[slug];
    return full === prefix || full.startsWith(prefix + " / ");
  });
}
function renderBreadcrumb(containerId, pathParts, lastClickable){
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = pathParts.map((part, i) => {
    const isLast = i === pathParts.length - 1;
    if(isLast && !lastClickable) return `<span>${part}</span>`;
    const pathSoFar = pathParts.slice(0, i + 1);
    return `<a href="#" class="breadcrumb-link" onclick="event.preventDefault(); showCatalogByPath(${JSON.stringify(pathSoFar).replace(/"/g,"'")})">${part}</a>`;
  }).join(' <span class="breadcrumb-sep">/</span> ');
}
const COLOR_HEX_MAP = {
  "чорний":"#111111",
  "білий":"#f7f5f0",
  "сірий":"#8f8e8a",
  "бежевий":"#c9b79c",
  "синій":"#2b4d8f",
  "червоний":"#b5322f",
  "зелений":"#3f6b45",
  "коричневий":"#6b4a30"
};
const SIZE_ORDER = [
  "One size",
  "XS","S","M","L","XL","XXL","3XL",
  "35","36","37","38","39","40","41","42","43","44","45","46",
  "15 см","16 см","17 см","18 см","19 см","20 см"
];

let catalogBaseList = [];
let catalogSortMode = "default";
let filterState = { minPrice:0, maxPrice:25000, sizes:new Set(), colors:new Set(), materials:new Set() };

function buildFilterUI(){
  const sizesSet = new Set();
  const colorsSet = new Set();
  const materialsSet = new Set();

  catalogBaseList.forEach(p => {
    (p.sizes || []).forEach(s => sizesSet.add(s));
    if(p.color) colorsSet.add(p.color);
    if(p.material) materialsSet.add(p.material);
  });

  const sortedSizes = [...sizesSet].sort((a, b) => {
    const ai = SIZE_ORDER.indexOf(a), bi = SIZE_ORDER.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  const sizeRow = document.getElementById("filter-size-row");
  sizeRow.innerHTML = sortedSizes.length
    ? sortedSizes.map(s => `<button class="filter-chip" onclick="toggleFilterChip('sizes','${s}', this)">${s}</button>`).join("")
    : `<div class="filter-empty-note">Немає даних</div>`;

  const colorRow = document.getElementById("filter-color-row");
  colorRow.innerHTML = colorsSet.size
    ? [...colorsSet].map(c => {
        const hex = COLOR_HEX_MAP[c] || "#9a9a9a";
        const label = c.charAt(0).toUpperCase() + c.slice(1);
        return `<button class="filter-chip color-chip" onclick="toggleFilterChip('colors','${c}', this)"><span class="color-dot-mini" style="background:${hex}"></span>${label}</button>`;
      }).join("")
    : `<div class="filter-empty-note">Немає даних</div>`;

  const materialRow = document.getElementById("filter-material-row");
  materialRow.innerHTML = materialsSet.size
    ? [...materialsSet].map(m => `<button class="filter-chip" onclick="toggleFilterChip('materials','${m}', this)">${m}</button>`).join("")
    : `<div class="filter-empty-note">Немає даних</div>`;
}

function toggleFilterChip(type, value, btn){
  const set = filterState[type];
  if(set.has(value)) set.delete(value); else set.add(value);
  btn.classList.toggle("active");
}

function toggleFilterAccordion(headBtn){
  const acc = headBtn.parentElement;
  const body = acc.querySelector(".filter-accordion-body");
  const isOpen = acc.classList.contains("open");

  if(isOpen){
    body.style.maxHeight = body.scrollHeight + "px";
    requestAnimationFrame(() => {
      body.style.maxHeight = "0px";
    });
    acc.classList.remove("open");
  } else {
    acc.classList.add("open");
    body.style.maxHeight = "3000px";
  }
}

function onPriceSliderInput(){
  const minSlider = document.getElementById("price-min-slider");
  const maxSlider = document.getElementById("price-max-slider");
  let minVal = parseInt(minSlider.value);
  let maxVal = parseInt(maxSlider.value);

  if(minVal > maxVal){
    if(document.activeElement === minSlider){ maxSlider.value = minVal; maxVal = minVal; }
    else { minSlider.value = maxVal; minVal = maxVal; }
  }

  filterState.minPrice = minVal;
  filterState.maxPrice = maxVal;

  document.getElementById("price-min-value").textContent = minVal;
  document.getElementById("price-max-value").textContent = maxVal;

  const range = document.getElementById("price-slider-range");
  range.style.left = (minVal / 25000 * 100) + "%";
  range.style.right = (100 - maxVal / 25000 * 100) + "%";
}

function resetFilters(silent){
  filterState = { minPrice:0, maxPrice:25000, sizes:new Set(), colors:new Set(), materials:new Set() };
  document.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));

  const minSlider = document.getElementById("price-min-slider");
  const maxSlider = document.getElementById("price-max-slider");
  if(minSlider){ minSlider.value = 0; maxSlider.value = 25000; onPriceSliderInput(); }

  if(!silent) refreshCatalogView();
}

function applyFiltersClick(){
  refreshCatalogView();
  closeFilterDropdown();
}

function closeFilterPanel(){
  closeFilterDropdown();
  document.querySelectorAll(".filter-accordion.open").forEach(acc => {
    acc.classList.remove("open");
    const body = acc.querySelector(".filter-accordion-body");
    if(body) body.style.maxHeight = "0px";
  });
}

function passesFilters(p){
  if(p.price > 0 && (p.price < filterState.minPrice || p.price > filterState.maxPrice)) return false;

  if(filterState.sizes.size && p.sizes && p.sizes.length){
    if(!p.sizes.some(s => filterState.sizes.has(s))) return false;
  }
  if(filterState.colors.size && p.color){
    if(!filterState.colors.has(p.color)) return false;
  }
  if(filterState.materials.size && p.material){
    if(!filterState.materials.has(p.material)) return false;
  }
  return true;
}

function showCatalogByPath(pathParts){
  lastCatalogPath = pathParts;
  const slugs = slugsByBreadcrumbPrefix(pathParts);
  document.getElementById("catalog-heading").textContent = pathParts[pathParts.length - 1];
  renderBreadcrumb("catalog-breadcrumb", pathParts);

  catalogBaseList = products.filter(p => slugs.includes(p.category));
  catalogSortMode = "default";
  updateSortActiveState();
  buildFilterUI();
  resetFilters(true);
  refreshCatalogView();

  showPage("catalog");
}

function refreshCatalogView(){
  let list = catalogBaseList.filter(passesFilters);
  if(catalogSortMode === "asc") list.sort((a, b) => a.price - b.price);
  if(catalogSortMode === "desc") list.sort((a, b) => b.price - a.price);
  renderGrid("catalog-grid", list);
}

function applySort(mode){
  catalogSortMode = mode;
  updateSortActiveState();
  refreshCatalogView();
  closeSortDropdown();
}

function updateSortActiveState(){
  document.querySelectorAll(".sort-option").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === catalogSortMode);
  });
}

function toggleSortDropdown(){
  closeFilterDropdown();
  document.getElementById("sort-dropdown-wrap").classList.toggle("open");
  markMenuJustOpened();
}
function closeSortDropdown(){
  document.getElementById("sort-dropdown-wrap").classList.remove("open");
}
function toggleFilterDropdown(){
  closeSortDropdown();
  const wrap = document.getElementById("filter-dropdown-wrap");
  const menu = document.getElementById("filter-menu");
  const willOpen = !wrap.classList.contains("open");
  wrap.classList.toggle("open");
  markMenuJustOpened();
  if(menu){
    menu.style.setProperty("max-height", willOpen ? "80vh" : "0px", "important");
    menu.style.setProperty("opacity", willOpen ? "1" : "0", "important");
    menu.style.setProperty("pointer-events", willOpen ? "auto" : "none", "important");
  }
}
function closeFilterDropdown(){
  document.getElementById("filter-dropdown-wrap").classList.remove("open");
  const menu = document.getElementById("filter-menu");
  if(menu){
    menu.style.setProperty("max-height", "0px", "important");
    menu.style.setProperty("opacity", "0", "important");
    menu.style.setProperty("pointer-events", "none", "important");
  }
}

document.addEventListener("click", (e) => {
  if(!e.target.closest("#sort-dropdown-wrap")) closeSortDropdown();
  if(!e.target.closest("#filter-dropdown-wrap")) closeFilterDropdown();
});
function showCatalog(category){
  const full = categoryBreadcrumbs[category] || categoryLabels[category] || "";
  showCatalogByPath(full ? full.split(" / ") : [categoryLabels[category] || "Категорія"]);
}

function goBackFromCatalog(){
  if(lastCatalogPath && lastCatalogPath.length > 1){
    showCatalogByPath(lastCatalogPath.slice(0, -1));
  } else {
    showPage("home");
  }
}

function goBackFromProduct(){
  if(lastCatalogPath){
    showCatalogByPath(lastCatalogPath);
  } else {
    showPage("home");
  }
}

function openProduct(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  currentProductId = id;
  recordView(id);
  currentViewer = { images: (p.images && p.images.filter(Boolean).length ? p.images : ['', '', '']), index: 0 };

  renderBreadcrumb("product-breadcrumb", (categoryBreadcrumbs[p.category] || categoryLabels[p.category] || "").split(" / "), true);
  document.getElementById("product-name").textContent = p.name;
  document.getElementById("product-price").textContent = priceLabel(p);
  document.getElementById("product-description-text").textContent =
    p.description && p.description.trim() ? p.description : "Місце для опису";

  const wishBtn = document.getElementById("product-wishlist-btn");
  wishBtn.classList.toggle("active", wishlist.has(id));
  wishBtn.onclick = () => { toggleWishlist(id); wishBtn.classList.toggle("active", wishlist.has(id)); };

  document.getElementById("product-add-cart").onclick = () => addToCart(id);

  renderSizeBlock(p);
  renderColorVariant(p);
  renderViewer();

  const recs = getRecommendations(8).filter(item => item.id !== id);
  renderGrid("product-recommend-grid", recs);

  showPage("product");
}

const jewelryLeafLabels = new Set(["Прикраси та біжутерія"]);
const oneSizeLeafLabels = new Set([
  "Головні убори","Сумки та рюкзаки","Ремені","Гаманці та портмоне",
  "Окуляри","Годинники","Сумки та клатчі","Аксесуари для волосся"
]);

function getSizeOptions(p){
  const label = categoryLabels[p.category] || "";
  const breadcrumb = categoryBreadcrumbs[p.category] || "";

  const type = jewelryLeafLabels.has(label) ? "jewelry"
    : oneSizeLeafLabels.has(label) ? "onesize"
    : breadcrumb.indexOf("/ Взуття") !== -1 ? "shoes"
    : "clothing";
  if(p.sizes && p.sizes.length){
    return { type, sizes: p.sizes };
  }

  if(type === "jewelry") return { type, sizes:["15 см","16 см","17 см","18 см","19 см","20 см"] };
  if(type === "onesize") return { type, sizes:["One size"] };
  if(type === "shoes"){
    return p.gender === "women"
      ? { type, sizes:["35","36","37","38","39","40","41"] }
      : { type, sizes:["39","40","41","42","43","44","45","46"] };
  }
  return p.gender === "women"
    ? { type, sizes:["XS","S","M","L","XL","XXL"] }
    : { type, sizes:["XS","S","M","L","XL","XXL","3XL"] };
}

let selectedSize = null;

function renderSizeBlock(p){
  const opt = getSizeOptions(p);
  selectedSize = null;
  const wrap = document.getElementById("size-options");
  wrap.innerHTML = opt.sizes.map(s => {
    const cls = opt.type === "onesize" ? " onesize" : "";
    return `<button class="size-btn${cls}" onclick="selectSize(this, '${s}', '${opt.type}')">${s}</button>`;
  }).join("");
}

function selectSize(btn, size, type){
  if(type === "onesize") return;
  document.querySelectorAll("#size-options .size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedSize = size;
}

function renderColorVariant(p){
  const block = document.getElementById("color-variant-block");
  const wrap = document.getElementById("color-variant-options");
  let ids = [];
  if(Array.isArray(p.colorVariantIds)) ids = p.colorVariantIds;
  else if(p.colorVariantId) ids = [p.colorVariantId];

  const others = ids.map(id => products.find(x => x.id === id)).filter(Boolean);

  if(others.length){
    block.style.display = "";
    wrap.innerHTML = others.map(other => {
      const img = other.images && other.images[0];
      const bg = img ? ` style="background-image:url('${img}')"` : "";
      return `<div class="color-variant-slot" onclick="openProduct(${other.id})"${bg}>${img ? "" : "Фото"}</div>`;
    }).join("");
  } else {
    block.style.display = "none";
    wrap.innerHTML = "";
  }
}

function renderViewer(){
  const photo = document.getElementById("viewer-photo");
  const img = currentViewer.images[currentViewer.index];
  photo.style.backgroundImage = img ? `url('${img}')` : "";
  photo.textContent = img ? "" : `Фото товару — кут ${currentViewer.index + 1} з 3`;

  const dotsWrap = document.getElementById("viewer-dots");
  dotsWrap.innerHTML = currentViewer.images.map((_, i) =>
    `<button class="dot ${i === currentViewer.index ? 'active' : ''}" onclick="setViewerIndex(${i})"></button>`
  ).join("");
}

function setViewerIndex(i){
  currentViewer.index = i;
  renderViewer();
}
function viewerNext(){
  currentViewer.index = (currentViewer.index + 1) % currentViewer.images.length;
  renderViewer();
}
function viewerPrev(){
  currentViewer.index = (currentViewer.index - 1 + currentViewer.images.length) % currentViewer.images.length;
  renderViewer();
}

function runSearch(){
  const q = document.getElementById("search-input").value.trim().toLowerCase();
  const list = q
    ? products.filter(p => p.name.toLowerCase().includes(q) || (categoryLabels[p.category] || "").toLowerCase().includes(q))
    : [];
  renderGrid("search-grid", list, "search-empty");
  document.getElementById("search-empty").style.display = (q && !list.length) ? "block" : "none";
}

function toggleWishlist(id){
  if(wishlist.has(id)) wishlist.delete(id);
  else wishlist.add(id);
  document.getElementById("wishlist-count").textContent = wishlist.size;

  const activePage = document.querySelector(".page.active").id;
  if(activePage === "page-home") renderGrid("recommend-grid", products.filter(p => p.recommended));
  if(activePage === "page-search") runSearch();
  if(activePage === "page-wishlist") renderGrid("wishlist-grid", products.filter(p => wishlist.has(p.id)), "wishlist-empty");
  if(activePage === "page-catalog"){
    refreshCatalogView();
  }
}

function addToCart(id){
  cart.set(id, (cart.get(id) || 0) + 1);
  updateCartCount();
}

function changeQty(id, delta){
  const current = cart.get(id) || 0;
  const next = current + delta;
  if(next <= 0) cart.delete(id);
  else cart.set(id, next);
  updateCartCount();
  renderCart();
}

function removeFromCart(id){
  cart.delete(id);
  updateCartCount();
  renderCart();
}

function updateCartCount(){
  let total = 0;
  cart.forEach(qty => total += qty);
  document.getElementById("cart-count").textContent = total;
}

function renderCart(){
  const listEl = document.getElementById("cart-list");
  const emptyEl = document.getElementById("cart-empty");
  const summaryEl = document.getElementById("cart-summary");

  if(cart.size === 0){
    listEl.innerHTML = "";
    emptyEl.style.display = "block";
    summaryEl.style.display = "none";
    return;
  }

  emptyEl.style.display = "none";
  summaryEl.style.display = "flex";

  let total = 0;
  listEl.innerHTML = Array.from(cart.entries()).map(([id, qty]) => {
    const p = products.find(x => x.id === id);
    if(!p) return "";
    total += p.price * qty;
    const img = p.images && p.images[0];
    const photoStyle = img ? ` style="background-image:url('${img}');"` : "";
    return `
      <div class="cart-item">
        <div class="cart-item-photo"${photoStyle}>${img ? "" : "Фото"}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${priceLabel(p)}</div>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
          <span>${qty}</span>
          <button class="qty-btn" onclick="changeQty(${id}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${id})">Прибрати</button>
      </div>
    `;
  }).join("");

  document.getElementById("cart-total-value").textContent = total;
}

function buildDrawer(){
  const wrap = document.getElementById("drawer-content");
  let html = "";

  Object.keys(categoryTree).forEach(genderKey => {
    const gender = categoryTree[genderKey];
    html += `<div class="gender-block">`;
    html += `<div class="gender-title" onclick="toggleAccordion(this, 'gender')"><span>${gender.label}</span><span class="chevron">&#10148;</span></div>`;
    html += `<div class="gender-groups">`;

    gender.groups.forEach(group => {
      html += `<div>`;
      html += `<div class="group-title" onclick="toggleAccordion(this, 'group')"><span>${group.label}</span><span class="chevron">&#10148;</span></div>`;
      html += `<div class="group-body">`;

      if(group.subgroups && group.subgroups.length){
        group.subgroups.forEach(sub => {
          html += `<div>`;
          html += `<div class="subgroup-title" onclick="toggleAccordion(this, 'subgroup')"><span>${sub.label}</span><span class="chevron">&#10148;</span></div>`;
          html += `<div class="subgroup-body">`;
          sub.items.forEach(item => {
            html += `<a href="#" class="leaf-link" onclick="event.preventDefault(); showCatalog('${item.slug}')">${item.label}</a>`;
          });
          html += `</div></div>`;
        });
      } else if(group.items && group.items.length){
        html += `<div class="direct-items">`;
        group.items.forEach(item => {
          html += `<a href="#" class="leaf-link" onclick="event.preventDefault(); showCatalog('${item.slug}')">${item.label}</a>`;
        });
        html += `</div>`;
      }

      html += `</div></div>`;
    });

    html += `<a href="#" class="group-title drawer-all-link" onclick="event.preventDefault(); closeDrawer(); showCatalogByPath(['${gender.label}'])"><span>Всі речі</span><span class="chevron">&#10148;</span></a>`;

    html += `</div></div>`;
  });

  wrap.innerHTML = html;
}

function toggleAccordion(el){
  const isOpen = el.classList.contains("open");
  const body = el.nextElementSibling;
  el.classList.toggle("open", !isOpen);
  body.style.maxHeight = isOpen ? "0px" : "3000px";
}

function openDrawer(){
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawer-overlay").classList.add("open");
}
function closeDrawer(){
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawer-overlay").classList.remove("open");
}

const playlist = [
  "music/1(wokeup).mp3",
  "music/music2(20min).mp3",
  "music/music3(hight).mp3",
  "music/music4(alot).mp3",
  "music/music5(MTE).mp3",
  "music/music6(money).mp3",
  "music/music7(btnoon).mp3",
  "music/music8(usaying).mp3",
  "music/music9(king).mp3",
  "music/music10(plates).mp3",
  "music/music11(gaang).mp3",
  "music/music12(hot).mp3",
  "music/music13(1993).mp3",
  "music/music14(neenah).mp3",
  "music/music15(comengo).mp3",
  "music/music16(numidch).mp3",
  "music/music17(rakz).mp3",
  "music/music18.mp3",
  "music/music19(rollin).mp3",
  "music/music20(fakeid).mp3"
];
let trackIndex = 0;

function playTrack(index){
  const music = document.getElementById("bg-music");
  trackIndex = Math.floor(Math.random() * playlist.length);
  music.src = playlist[trackIndex];
  music.play();
}
function scrollRecommend(direction, containerId = "recommend-grid"){
  const strip = document.getElementById(containerId);
  strip.scrollBy({ left: direction * 320, behavior: "smooth" });
}
document.getElementById("bg-music").addEventListener("ended", () => {
  playTrack(trackIndex + 1);
});
let musicPlaying = false;
function toggleMusic(){
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");
  if(musicPlaying){
    music.pause();
    btn.classList.remove("playing");
  } else {
    if(!music.src) playTrack(0);
    else music.play();
    btn.classList.add("playing");
  }
  musicPlaying = !musicPlaying;
}

function buildMegaMenu(genderKey){
  const gender = categoryTree[genderKey];
  let html = `<div class="mega-menu-grid">`;

  gender.groups.forEach(group => {
    if(group.subgroups && group.subgroups.length){
      group.subgroups.forEach(sub => {
        html += `<div class="mega-col">`;
        html += `<div class="mega-col-title">${sub.label}</div>`;
        sub.items.forEach(item => {
          html += `<a href="#" class="mega-leaf" onclick="event.preventDefault(); selectMegaLeaf('${item.slug}')">${item.label}</a>`;
        });
        html += `</div>`;
      });
    } else if(group.items && group.items.length){
      html += `<div class="mega-col">`;
      html += `<div class="mega-col-title">${group.label}</div>`;
      group.items.forEach(item => {
        html += `<a href="#" class="mega-leaf" onclick="event.preventDefault(); selectMegaLeaf('${item.slug}')">${item.label}</a>`;
      });
      html += `</div>`;
    }
  });

  html += `</div>`;
  return html;
}

function selectMegaLeaf(slug){
  closeAllMegaMenus();
  showCatalog(slug);
}

function closeAllMegaMenus(){
  document.querySelectorAll(".main-nav-item").forEach(el => el.classList.remove("open"));
}

function initMainNav(){
  document.getElementById("mega-men").innerHTML = buildMegaMenu("men");
  document.getElementById("mega-women").innerHTML = buildMegaMenu("women");

  const menItem = document.getElementById("nav-item-men");
  const womenItem = document.getElementById("nav-item-women");

  [menItem, womenItem].forEach(item => {
    const btn = item.querySelector(".main-nav-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !item.classList.contains("open");
      closeAllMegaMenus();
      if(willOpen){
        item.classList.add("open");
        markMenuJustOpened();
      }
    });
  });

  document.addEventListener("click", (e) => {
    if(!e.target.closest(".main-nav-item")) closeAllMegaMenus();
  });
}
function flashButton(btn){
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 1000);
}

const outfitSlotMap = {
  "Футболки та майки":"top", "Кофти":"top", "Штани та джинси":"bottom",
  "Шорти":"bottom", "Верхній одяг":"top", "Нижня білизна та шкарпетки":"bottom",
  "Взуття":"shoes",
  "Футболки, топи та блузи":"top", "Сукні та комбінезони":"top", "Спідниці":"bottom",
  "Піджаки та костюми":"top", "Нижня білизна та домашній одяг":"bottom"
};

let outfitGender = "men";
let outfitSlots = { top:null, bottom:null, shoes:null, accessory:null, side:null };

function setOutfitGender(g){
  outfitGender = g;
  document.getElementById("outfit-gender-men").classList.toggle("active", g === "men");
  document.getElementById("outfit-gender-women").classList.toggle("active", g === "women");
  renderOutfitTypeList();
  document.getElementById("outfit-picker").innerHTML = `<div class="empty-state">Обери тип речі, щоб побачити варіанти</div>`;
}

const outfitExcludedGroups = new Set([
  "Нижня білизна та шкарпетки",
  "Нижня білизна та домашній одяг"
]);

function outfitTypeButtonHTML(label, slots, slotType){
  return `<button class="outfit-type-btn" data-slot-type="${slotType}" onclick="pickOutfitType('${escapeQuotes(label)}', ${JSON.stringify(slots).replace(/"/g,"'")}, '${slotType}', this)">${label}</button>`;
}

function renderOutfitTypeList(){
  const wrap = document.getElementById("outfit-type-list");
  const gender = categoryTree[outfitGender];
  let html = "";

  gender.groups.forEach(group => {
    if(group.subgroups && group.subgroups.length){
      group.subgroups.forEach(sub => {
        if(outfitExcludedGroups.has(sub.label)) return;
        const slots = sub.items.map(i => i.slug);
        const slotType = outfitSlotMap[sub.label] || "top";
        html += outfitTypeButtonHTML(sub.label, slots, slotType);
      });
    } else if(group.items && group.items.length){
      if(outfitExcludedGroups.has(group.label)) return;
      const outfitAccessoryExclude = new Set(["Окуляри", "Прикраси та біжутерія", "Аксесуари для волосся", "Годинники", "Ремені"]);

      if(group.label === "Аксесуари"){
        const headwear = group.items.filter(i => i.label === "Головні убори");
        const rest = group.items.filter(i => i.label !== "Головні убори" && !outfitAccessoryExclude.has(i.label));
        if(headwear.length){
          html += outfitTypeButtonHTML("Головні убори", headwear.map(i => i.slug), "accessory");
        }
        if(rest.length){
          html += outfitTypeButtonHTML("Аксесуари", rest.map(i => i.slug), "side");
        }
        return;
      }

      const slots = group.items.map(i => i.slug);
      const slotType = outfitSlotMap[group.label] || "top";
      html += outfitTypeButtonHTML(group.label, slots, slotType);
    }
  });

  wrap.innerHTML = html;
}

function pickOutfitType(label, categorySlugs, slotType, btnEl){
  document.querySelectorAll(".outfit-type-btn").forEach(b => {
    b.classList.remove("active");
    b.classList.remove("category-highlight");
  });
  btnEl.classList.add("active");

  const list = products.filter(p => categorySlugs.includes(p.category));
  const picker = document.getElementById("outfit-picker");

  if(!list.length){
    picker.innerHTML = `<div class="empty-state">Тут поки немає товарів</div>`;
    return;
  }

  picker.innerHTML = list.map(p => {
    const img = p.images && p.images[0];
    const photoStyle = img ? ` style="background-image:url('${img}'); background-size:cover; background-position:center;"` : "";
    const isEquipped = outfitSlots[slotType] && outfitSlots[slotType].id === p.id;
    return `
      <div class="outfit-pick-card ${isEquipped ? 'equipped' : ''}" onclick="equipOutfitItem(event, ${p.id}, '${slotType}', '${escapeQuotes(p.name)}', '${escapeQuotes(img || '')}', '${escapeQuotes(label)}')">
        <div class="outfit-pick-photo"${photoStyle}>${img ? "" : "Фото"}</div>
        ${p.name}
      </div>
    `;
  }).join("");
}
function clearOutfit(){
  Object.keys(outfitSlots).forEach(slotType => {
    outfitSlots[slotType] = null;
    const slotEl = document.getElementById(`slot-${slotType}`);
    const valueEl = document.getElementById(`slot-${slotType}-value`);
    const photoEl = document.getElementById(`slot-${slotType}-photo`);
    if(slotEl) slotEl.classList.remove("filled");
    if(valueEl) valueEl.textContent = "—";
    if(photoEl){ photoEl.style.backgroundImage = ""; photoEl.textContent = ""; }
  });

  document.querySelectorAll(".outfit-pick-card").forEach(card => card.classList.remove("equipped"));
}

function escapeQuotes(s){
  return String(s).replace(/'/g, "\\'");
}

function equipOutfitItem(evt, productId, slotType, name, image, groupLabel){
  outfitSlots[slotType] = { id: productId, groupLabel };
  const slotEl = document.getElementById(`slot-${slotType}`);
  document.getElementById(`slot-${slotType}-value`).textContent = name;
  slotEl.classList.add("filled");

  const photoEl = document.getElementById(`slot-${slotType}-photo`);
  if(image){
    photoEl.style.backgroundImage = `url('${image}')`;
    photoEl.classList.add("has-image");
  } else {
    photoEl.style.backgroundImage = "";
    photoEl.classList.remove("has-image");
  }

  document.querySelectorAll(".outfit-pick-card").forEach(card => card.classList.remove("equipped"));
  evt.currentTarget.classList.add("equipped");
}

let highlightTimer = null;

function onSlotClick(slotType){
  const current = outfitSlots[slotType];

  if(!current){
    document.querySelectorAll(".outfit-type-btn").forEach(b => {
      b.classList.toggle("category-highlight", b.dataset.slotType === slotType);
    });

    clearTimeout(highlightTimer);
    highlightTimer = setTimeout(() => {
      document.querySelectorAll(".outfit-type-btn").forEach(b => b.classList.remove("category-highlight"));
    }, 2000);

    return;
  }

  document.querySelectorAll(".outfit-type-btn").forEach(b => b.classList.remove("category-highlight"));

  outfitSlots[slotType] = null;

  const slotEl = document.getElementById(`slot-${slotType}`);
  document.getElementById(`slot-${slotType}-value`).textContent = "—";
  slotEl.classList.remove("filled");

  const photoEl = document.getElementById(`slot-${slotType}-photo`);
  photoEl.style.backgroundImage = "";
  photoEl.classList.remove("has-image");

  document.querySelectorAll(".outfit-pick-card.equipped").forEach(card => card.classList.remove("equipped"));
}

// ------------------------------------------------------
// ПЕРЕМИКАЧ КІЛЬКОСТІ КАРТОЧОК В РЯД (кнопка перед "Фільтри")
// ------------------------------------------------------
function toggleGridSize(){
  const grid = document.getElementById("catalog-grid");
  const btn = document.getElementById("grid-size-btn");
  if(!grid || !btn) return;
  const isCompact = grid.classList.toggle("grid-compact");
  btn.classList.toggle("active", isCompact);
  localStorage.setItem("gridSize", isCompact ? "compact" : "default");
}
function applySavedGridSize(){
  const grid = document.getElementById("catalog-grid");
  const btn = document.getElementById("grid-size-btn");
  if(!grid || !btn) return;
  if(localStorage.getItem("gridSize") === "compact"){
    grid.classList.add("grid-compact");
    btn.classList.add("active");
  }
}
buildDrawer();
initMainNav();
renderGrid("recommend-grid", getRecommendations());
applySavedGridSize();

let lastScrollY = window.scrollY;
let lastMenuOpenAt = 0;
function markMenuJustOpened(){ lastMenuOpenAt = Date.now(); }

window.addEventListener("scroll", () => {
  if(Math.abs(window.scrollY - lastScrollY) > 10){
    closeAllMegaMenus();
    lastScrollY = window.scrollY;
  }
}, { passive:true });
