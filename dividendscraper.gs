
function getDividends(dateBought,StockCode,dateSold) {
  if(StockCode==null){
    StockCode ="Z74"}
   var search = UrlFetchApp.fetch("https://www.dividends.sg/view/"+StockCode);

  //Logger.log(search)
 var DivExp = /<\s*td>(.*?)<\s*\/\s*td>/ig;
  var tempDividend= 0;
  var totalDiv = 0;
  
 var tagList=search.getContentText().match(DivExp);
  ret=tagList[0]
  if (dateBought == null){dateBought= new Date("February 17, 2018")}
    for(var i in tagList)
    {
      
      var tdTag =tagList[i].replace(/(^\s+)|(\s+$)/g, "").replace(/<\/?[^>]+>/gi, "");
      //just override the temp divivdend
      if(checkIfDividend(tdTag)){
        tempDividend =cleanDividends(tdTag)
      }
      //decide whether to add
      else if(afterBuying(dateBought,tdTag)){
        if(dateSold != null){
          if(beforeSelling(dateSold,tdTag)){
            totalDiv+=tempDividend;
          }
          
        }
        else{
          totalDiv+=tempDividend;
        }
      }
    }

    Logger.log(totalDiv);
  
  
  return totalDiv;

}

function checkIfDividend(rawVal){
return rawVal.slice(0, 3) == "SGD"
}
function cleanDividends(rawDiv){
  Logger.log("dividends" + parseFloat(rawDiv.substr(4)));
   return parseFloat(rawDiv.substr(4));
   
}

// need check if earlir, if earlier then dont add alr
// check year first,
//then month, then day
function beforeSelling(dateSold,dateOfDiv){
 var DateOfDiv = new Date(dateOfDiv.slice(0,4),dateOfDiv.slice(5,7)-1,dateOfDiv.slice(8,10));
 return dateSold > DateOfDiv;
}

function afterBuying(dateBought,dateOfDiv){
 var DateOfDiv = new Date(dateOfDiv.slice(0,4),dateOfDiv.slice(5,7)-1,dateOfDiv.slice(8,10));
 return dateBought< DateOfDiv;
}
