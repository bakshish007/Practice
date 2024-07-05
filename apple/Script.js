function inputbox(){
    let el  = document.getElementById("search-input");
    let cn = el.classList;
    if(cn.contains("active")){
        cn.remove("active");
        cn.add("inactive");
    }else{
        cn.remove("inactive");
        cn.add("active");
    }
}

function menu(){
    let el  = document.getElementById("menu");
    let cn = el.classList;
    if(cn.contains("active")){
        cn.remove("active");
        cn.add("inactive");
    }else{
        cn.remove("inactive");
        cn.add("active");
    }

}