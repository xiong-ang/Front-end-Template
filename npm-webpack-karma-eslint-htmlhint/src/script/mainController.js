'use strict'
class mainController{
    constructor($http){
        this.bHide=false;

        this.keyword="";
        this.repos=[];
        this.$http=$http;
    }

    searchHub(){
        this.bHide=true;
    }

    closeHub()
    {
        this.bHide=false;
    }

    getRespo(){
        this.repos.push(this.getRespoSvc().items);
    }

    getRespoSvc()
    {
        this.$http({
            method: 'GET',
            url: 'https://api.github.com/search/repositories?q='+this.keyword+' in:name&sort=stars'
        }).then(function successCallback(response) {
            let repos=[];
            for (let index = 0; index < 10; index++) {
                // console.log(response);
                
                repos.push(
                {
                    name:response.data.items[index].full_name, 
                    starCount:response.data.items[index].stargazers_count
                });    
            }

            return repos;
            }, function errorCallback(response) {
                alert("Http request failed");
                return null;
        });
    }
}

mainController.$inject=['$http'];

export default mainController;