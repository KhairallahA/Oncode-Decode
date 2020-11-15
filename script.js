let select = document.getElementById('select');
let textarea = document.getElementById('text');
let result = document.getElementById('result');

textarea.addEventListener("input", ()=>{
    make_code();
});

select.addEventListener("change", ()=>{
    make_code();
});

function make_code(){
    if(select.value == "encode"){
        result.value = window.btoa(textarea.value);
    }
    else{
        result.value = window.atob(textarea.value);
    }
}