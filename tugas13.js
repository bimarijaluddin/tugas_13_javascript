function namaBuah(){
    var buah = ['pisang','jeruk'];
    console.log(buah)

    buah.unshift('apel','mangga');
    return buah;
}

console.log(namaBuah())