let inputRub=document.getElementById('rub'),
    inputUSD=document.getElementById('usd');

inputRub.addEventListener('input',()=>{
    function getData(){
        return new Promise(function(resolve, reject){
            let request=new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.onreadystatechange=function(){
                if (request.readyState===4){
                    if (request.status==200){
                        resolve(this.response);
                    } else {
                        reject();
                    }
                } 
                    
            };

        });
    }

    getData()
        .then(response=>{
            // console.log(response);
            let data=JSON.parse(response);
            inputUSD.value=inputRub.value/data.usd;
        })

        .catch(()=>inputUSD.value="Что-то пошло не так!");
});