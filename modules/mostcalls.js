function calls(arr){
        var map=new Map()
            for(var i=0;i<arr.length;i++){
                if(!map.has(arr[i].IP)) map.set(arr[i].IP,0);
                var v=map.get(arr[i].IP)
                v+=1
                map.set(arr[i].IP,v)
            }
    
            var mapData=[...map.entries()]
        
            return mapData.sort((a,b)=>b[1]-a[1])
}

module.exports=calls