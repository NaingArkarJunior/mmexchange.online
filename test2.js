// let currencyList = [
//     `USD`,`ARS`,`AUD`,`BGN`,`BRL`,`CAD`,`CHF`,`CNY`,`CZK`,`DKK`,`DOGE`,`DZD`,`EUR`,`GBP`,`HKD`,`HRK`,`HUF`,`ILS`,`INR`,`ISK`,`JPY`,`KRW`,`MAD`,`MXN`,`MYR`,`NOK`,`NZD`,`PHP`,`PLN`,`RON`,`RUB`,`SEK`,`SGD`,`THB`,`TRY`,`TWD`,`ZAR`
// ] 

// for (let index = 0; index < currencyList.length; index++) {
//     const element = currencyList[index];
//     let result = element[0]+element[1]
//     let finalString = `D:\\projects\\New folder\\flags\\3x2\\${result}.svg`
//     console.log(finalString)
// }


// currencyList.map((value,index)=>{
//     let result = value[0]+value[1]
//     let finalString = `D:\\projects\\New folder\\flags\\3x2\\${result}.svg`
//     console.log(finalString)
// })

// let data = [1,2,3,4,5,6,7,8,9,10]
// let result = []
// let remove = 7

// data.map((value)=>{
//     if(value !== remove){
//         result.push(value)
//     }
// })
// console.log(result)


// let given = [10,5,7,3,4,6,2,8,1,9,15,45,154,525]
// let remove = [10,9,1]
// let result = []

// for (let index = 0; index < given.length; index++) {
//        let element = given[index];
//        let temp = 0
//          remove.map((value)=>{
//             if(value !== element ){
//                temp = temp + 1
//             }
//             })
//     if(temp == remove.length){
//         result.push(element)
//     }
// }   

// console.log(result)

// let obj1={
//     a : 1,
//     b : 2,
//     c : 3,
// }

// console.log(Object.keys(obj1))

// let Arr1=[1,2,3,4]
// let obj2={}

// Arr1.map((row,index)=>{
//     obj2["key"+(index+1)]=row
// })

// console.log(obj2)

let rates =  {
  "AUD": 1.5411702677,
  "BGN": 1.7828601961,
  "BRL": 4.9626605413,
  "CAD": 1.3458801487,
  "CHF": 0.8780001068,
  "CNY": 7.2573908022,
  "CZK": 22.0372124758,
  "DKK": 6.8310109818,
  "EUR": 0.9165901128,
  "GBP": 0.7883601082,
  "HKD": 7.8183514827,
  "HRK": 7.0424210702,
  "HUF": 351.6899240132,
  "IDR": 15293.470138326,
  "ILS": 3.7501304499,
  "INR": 83.144795678,
  "ISK": 132.0690798785,
  "JPY": 145.4113457532,
  "KRW": 1333.304586854,
  "MXN": 17.0521527184,
  "MYR": 4.6157007022,
  "NOK": 10.474911679,
  "NZD": 1.673770203,
  "PHP": 56.644889649,
  "PLN": 4.0778006949,
  "RON": 4.529400702,
  "RUB": 95.9903962843,
  "SEK": 10.7963311111,
  "SGD": 1.3554901375,
  "THB": 35.2024154183,
  "TRY": 27.0453750663,
  "ZAR": 19.0749325839
}


let countries = {
    AFN: 'Afghanistan',
    ALL: 'Albania',
    DZD: 'Algeria',
    USD: 'Virgin Islands, U.S.',
    EUR: 'Spain',
    AOA: 'Angola',
    XCD: 'Saint Vincent and the Grenadines',
    ARS: 'Argentina',
    AMD: 'Armenia',
    AWG: 'Aruba',
    AUD: 'Tuvalu',
    AZN: 'Azerbaijan',
    BSD: 'Bahamas',
    BHD: 'Bahrain',
    BDT: 'Bangladesh',
    BBD: 'Barbados',
    BYR: 'Belarus',
    BZD: 'Belize',
    XOF: 'Togo',
    BMD: 'Bermuda',
    BTN: 'Bhutan',
    BOB: 'Bolivia',
    BAM: 'Bosnia and Herzegovina',
    BWP: 'Botswana',
    NOK: 'Svalbard and Jan Mayen',
    BRL: 'Brazil',
    BND: 'Brunei',
    BGN: 'Bulgaria',
    BIF: 'Burundi',
    KHR: 'Cambodia',
    XAF: 'Gabon',
    CAD: 'Canada',
    CVE: 'Cape Verde',
    KYD: 'Cayman Islands',
    CLP: 'Chile',
    CNY: 'China',
    COP: 'Colombia',
    KMF: 'Comoros',
    NZD: 'Tokelau',
    CRC: 'Costa Rica',
    HRK: 'Croatia',
    CUP: 'Cuba',
    CZK: 'Czech Republic',
    DKK: 'Greenland',
    DJF: 'Djibouti',
    DOP: 'Dominican Republic',
    ECS: 'Ecuador',
    EGP: 'Egypt',
    SVC: 'El Salvador',
    GBP: 'Wales',
    ERN: 'Eritrea',
    ETB: 'Ethiopia',
    FKP: 'Falkland Islands',
    FJD: 'Fiji Islands',
    XPF: 'Wallis and Futuna',
    GMD: 'Gambia',
    GEL: 'Georgia',
    GHS: 'Ghana',
    GIP: 'Gibraltar',
    QTQ: 'Guatemala',
    GNF: 'Guinea',
    CFA: 'Guinea-Bissau',
    GYD: 'Guyana',
    HTG: 'Haiti',
    HNL: 'Honduras',
    HKD: 'Hong Kong',
    HUF: 'Hungary',
    ISK: 'Iceland',
    INR: 'India',
    IDR: 'Indonesia',
    IRR: 'Iran',
    IQD: 'Iraq',
    ILS: 'Israel',
    JMD: 'Jamaica',
    JPY: 'Japan',
    JOD: 'Jordan',
    KZT: 'Kazakhstan',
    KES: 'Kenya',
    KWD: 'Kuwait',
    KGS: 'Kyrgyzstan',
    LAK: 'Laos',
    LVL: 'Latvia',
    LBP: 'Lebanon',
    LSL: 'Lesotho',
    LRD: 'Liberia',
    LYD: 'Libyan Arab Jamahiriya',
    CHF: 'Switzerland',
    LTL: 'Lithuania',
    MOP: 'Macau',
    MKD: 'North Macedonia',
    MGF: 'Madagascar',
    MWK: 'Malawi',
    MYR: 'Malaysia',
    MVR: 'Maldives',
    MRO: 'Mauritania',
    MUR: 'Mauritius',
    MXN: 'Mexico',
    MDL: 'Moldova',
    MNT: 'Mongolia',
    MAD: 'Western Sahara',
    MZN: 'Mozambique',
    MMR: 'Myanmar',
    NAD: 'Namibia',
    NPR: 'Nepal',
    ANG: 'Netherlands Antilles',
    NIO: 'Nicaragua',
    NGN: 'Nigeria',
    KPW: 'North Korea',
    OMR: 'Oman',
    PKR: 'Pakistan',
    null: 'Palestine',
    PAB: 'Panama',
    PGK: 'Papua New Guinea',
    PYG: 'Paraguay',
    PEN: 'Peru',
    PHP: 'Philippines',
    PLN: 'Poland',
    QAR: 'Qatar',
    RON: 'Romania',
    RUB: 'Russian Federation',
    RWF: 'Rwanda',
    SHP: 'Saint Helena',
    WST: 'Samoa',
    STD: 'Sao Tome and Principe',
    SAR: 'Saudi Arabia',
    RSD: 'Serbia',
    SCR: 'Seychelles',
    SLL: 'Sierra Leone',
    SGD: 'Singapore',
    SBD: 'Solomon Islands',
    SOS: 'Somalia',
    ZAR: 'South Africa',
    KRW: 'South Korea',
    SSP: 'South Sudan',
    LKR: 'Sri Lanka',
    SDG: 'Sudan',
    SRD: 'Suriname',
    SZL: 'Swaziland',
    SEK: 'Sweden',
    SYP: 'Syria',
    TJS: 'Tajikistan',
    TZS: 'Tanzania',
    THB: 'Thailand',
    CDF: 'The Democratic Republic of Congo',
    TOP: 'Tonga',
    TTD: 'Trinidad and Tobago',
    TND: 'Tunisia',
    TRY: 'Turkey',
    TMT: 'Turkmenistan',
    UGX: 'Uganda',
    UAH: 'Ukraine',
    AED: 'United Arab Emirates',
    UYU: 'Uruguay',
    UZS: 'Uzbekistan',
    VUV: 'Vanuatu',
    VEF: 'Venezuela',
    VND: 'Vietnam',
    YER: 'Yemen',
    ZMW: 'Zambia',
    ZWD: 'Zimbabwe'
  }

//  let arr2= (Object.keys(rates))

//  arr2.map((key,index)=>{
//     console.log(key,rates[key])

//  })




console.log(JSON.stringify(rates))