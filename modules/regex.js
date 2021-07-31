var time= /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3})/
var IP=/(\d+.\d+\.\d+\.\d+)/
var info=/(INFO|ERROR|WARN|TRACE|DEBUG|FATAL)/
var request=/(?<=!Request-Type\=).*?[^#]*/
var userAgent=/(?<=!User-Agent\=).*?[^#]*/
var api=/(?<=!API\=).*?[^#]*/
var userName=/(?<=!User-Name\=).*?[^#]*/
var userLogin=/(?<=!User-Login\=).*?[^#]*/
var EnterpriseName=/(?<=!EnterpriseName\=).*?[^#]*/
var EnterpriseId=/(?<=!EnterpriseId\=).*?[^#]*/
var requestBody=/(?<=!Request-Body\=).*?[^#]*/
var responseTime=/(?<=!Response-Time\=).*?[^#]*/
var statusCode=/(?<=!Status-Code\=).*?[^#]*/
var authStatus=/(?<=!Auth-Status\=).*?[^#]*/

var array=[]

function regex(data){
            var str=data.split("\n")
            

            for(var i=0;i<str.length;i++){
                    var json={}

                    json["IP"]=str[i].match(IP) ? str[i].match(IP)[0] : "null"
                    json["TimeStamp"]=str[i].match(time)[0]
                    json["INFO"]=str[i].match(info)[0]
                    json["REQUEST"]=str[i].match(request)[0]
                    json["USERAGENT"]=str[i].match(userAgent)[0]
                    json["API"]=str[i].match(api)[0]
                    json["USERNAME"]=str[i].match(userName)[0]
                    json["USERLOGIN"]=str[i].match(userLogin)[0]
                    json["ENTERPRISENAME"]=str[i].match(EnterpriseName)[0]
                    json["ENTERPRISEID"]=str[i].match(EnterpriseId)[0]
                    json["REQUESTBODY"]=str[i].match(requestBody)[0]
                    json["RESPONSETIME"]=str[i].match(responseTime)[0]
                    json["STATUSCODE"]=str[i].match(statusCode)[0]
                    json["AUTHSTATUS"]=str[i].match(authStatus)[0]
                    
                    array.push(json)
            }
            return array

}

module.exports=regex;
