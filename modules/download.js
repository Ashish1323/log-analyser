var csvwriter=require('csv-writer')
var createCsvWriter = csvwriter.createObjectCsvWriter

function downloadData(arr){
    var file=arr[0].USERNAME
    const csvWriter = createCsvWriter({
        
        path: './public/csv/'+file+'.csv' ,
        header: [
        
          {id: 'IP', title: 'IP-ADDRESS'},
          {id: 'TimeStamp', title: 'TIME STAMP'},
          {id: 'INFO', title: 'INFO'},
          {id: 'REQUEST', title: 'REQUEST'},
          {id: 'USERAGENT', title: 'USER-AGENT'},
          {id: 'API', title: 'API-DEFINITION'},
          {id: 'USERNAME', title: 'USER-NAME'},
          {id: 'USERLOGIN', title: 'USER-LOGIN'},
          {id: 'ENTERPRISENAME', title: 'ENTERPRISE-NAME'},
          {id: 'ENTERPRISEID', title: 'ENTERPRISE-ID'},
          {id: 'STATUSCODE', title: 'STATUS-CODE'},
          {id: 'RESPONSETIME', title: 'RESPONSE-TIME'},
          {id: 'REQUESTBODY', title: 'REQUEST-BODY'},
          {id: 'AUTHSTATUS', title: 'AUTH-STATUS'}
      
        ]
      });
        
      const results = arr
      csvWriter
        .writeRecords(results)
        .then(()=> console.log('Data uploaded into csv successfully'));
}

module.exports=downloadData;