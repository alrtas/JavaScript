var n = str.search('FullName');
var i = str.search('YomiMiddleName');
  if (n != -1 &&  i != -1){
    var name = str.slice(n+11,i-3);
    console.log(name);
  }else{
    var name = null
  }

n = str.search('EMailAddress1');
i = str.search('SpousesName');
  if (n != -1 &&  i != -1){
    var email = str.slice(n+16,i-3);
    console.log(email);
  }else{
    var email = null
  }

n = str.search('MobilePhone');
i = str.search('Pager');
  if (n != -1 &&  i != -1){
    var phone = str.slice(n+14,i-3);
    console.log(phone);
  }else{
    var phone = null
  }
