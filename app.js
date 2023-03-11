let btn = document.getElementById('button');
let cont = document.getElementById('cont')
let spans = document.getElementById('span')
let body = document.getElementById('body');


btn.addEventListener('click', function(){
    spans.classList.add('butt')
    cont.style.background = 'rgb(84, 220, 235)';
    body.style.color = 'black';
})
function search(){
    let a = document.querySelectorAll('.a');
    let list = document.querySelector('.items')
    let p = document.getElementsByTagName('p')
    let input = document.getElementById('input').value.toUpperCase();


    console.log(p)
    list.style.opacity = '1'
    for(var i=0;i<p.length;i++){
        let match = a[i].getElementsByTagName('p')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(input)>-1){
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            } 
        }
    }
}