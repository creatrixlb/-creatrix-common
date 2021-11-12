import {decode} from 'html-entities';
import {isNotEmpty,isObject,isArrayCount} from '@creatrix/typeofdata';
export const entity=(string)=>{return(`${decode(string)}`);}

export const entityReplace=(value,replace='')=>{return isNotEmpty(value)?entity(value):(isNotEmpty(replace)?entity(replace):'');}

export const StringReplace=(value,replace='',from='%s')=>{return isNotEmpty(value)?entity(value).replace(from,replace):'';}

export function ArabicNumbers(number){
  let en_number = number.toString();
  let persianDigits = "۰۱۲۳٤٥٦۷۸۹";
  let persianMap = persianDigits.split("");
  return persian_number = en_number.replace(/\d/g, function (m) {
    return persianMap[parseInt(m)];
  });
}

export function ImageYoutube(YoutubeID){
    return (`https://img.youtube.com/vi/${YoutubeID}/hqdefault.jpg`);
}

export function getYoutubeVideoID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

export const FirstCharOfEachWord=(word)=>{
  let getword='';
  if (isNotEmpty(word)){
      var matches = word.match(/(?:\s|^)(\S)/g);  
      if (isArrayCount(matches)){
      getword = matches.join('');
      }
  }
  return isNotEmpty(getword)?getword:'NA'
}

export const FirstChar=(word)=>{
  let getword='';
  if (isNotEmpty(word)){getword=word.charAt(0);}
  return getword;
}

export const SizeMBToB=(size)=>{
  return Number(size)*1024*1024;
}

export const SizeBToMB=(size)=>{
  return size>0?parseFloat(Number(size)/1024/1024).toFixed(2):0;
}

export const SizeKBToMB=(size)=>{
  return parseFloat(size)>0?parseFloat(Number(size)/1024).toFixed(2):0;
}

export const spacetoDash=(value)=>{
  const str = value.replace(/ +(?= )/g,'');
  const nameCleaned = str.replace(/\s/g, '-')
  return nameCleaned;
}

export const GetValueKeyOfArray=async(FomArray=[],fromKey='na',fromvalue='na',selectedkey='na')=>{
  let valueselected='';
  if (isArrayCount(FomArray)){
      const filterData=await FomArray.filter((el)=>el?.[fromKey]===fromvalue);
      if (isArrayCount(filterData)){
          valueselected=filterData?.[0]?.[selectedkey];
      }
  }
  return valueselected;
}

export const AddKeyToObject2Steps=(FromObject={},fromKey1='',fromKey2='',addkeyvalue=null)=>{
  let newObject=FromObject;
  if (isObject(addkeyvalue) && isNotEmpty(fromKey1) && isNotEmpty(fromKey2)){
      newObject={...newObject,[fromKey1]:{...newObject?.[fromKey1],[fromKey2]:{...newObject?.[fromKey1]?.[fromKey2],...addkeyvalue}}}
  }
  return newObject;
}
