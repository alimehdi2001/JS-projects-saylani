// let increment = document.getElementById( 'increment');
let text = document.getElementById('text');
// let reset = document.getElementById( 'reset');

count = 0;
function incre() {
    count++;
    text.innerText = count;
    // console.log(" increment hoja", count)

}

function reset() {
    if( count== 0){
        count=0;
    }
    else{
        count--;
    }
    
    text.innerText = count;
    // console.log(" Reset hoja", count)
}