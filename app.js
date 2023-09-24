


let metin ="Şuanda Manisa 'da Javascript eğitimi çekmekteyim.";



bul("a");
bul("e");
bul("s");


function bul(harf){
    let toplam =0;
    for(let i =0; i<metin.length ; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
   console.log("Harf Sayısı : " + toplam);
}


