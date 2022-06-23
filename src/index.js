module.exports = function toReadable (number) {
    const a = ['zero', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    
    let stringarr = number.toString().split('');
    let numarr=[];
    for(let i=0;i<stringarr.length;i++){
      numarr[i]=+stringarr[i];
    }
    
    
    let decim = Number(stringarr[1]+stringarr[2]);
    
      
    let under20 = a[number];
    
    let str = '';
      
    str += number<20 ? under20:''
    str += number >=20 && number%10 === 0 && number<100 ? b[numarr[0]]:''
    str += number>20 && number<100 && number%10 != 0 ?b[numarr[0]]+' '+a[numarr[1]]:''
    str += number >= 100 && number%100 === 0 ? a[numarr[0]]+'hundred':''
    str += number >= 100 && number%100 != 0 && decim<20 ? a[numarr[0]]+'hundred '+a[decim] : ''
    str += number >= 100 && number%100 != 0 && number%10 === 0  && decim>=20 ? a[numarr[0]]+'hundred '+b[numarr[1]]:''
    str += number >= 100 && number%100 != 0 && number%10 != 0  && decim>=20 ? a[numarr[0]]+'hundred '+b[numarr[1]]+' '+a[numarr[2]]:''

    
    return str.trim();
}
