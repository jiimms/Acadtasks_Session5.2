function DisplayCurrentTime() {
        var date = new Date();
        var hours = date.getHours() ;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
       
        return  hours + ":" + minutes ;
        
    };

    console.log(DisplayCurrentTime());
    
    console.log(new Date().getHours() + ":" + new Date().getMinutes())