function postFunction(){
    var topic1 = document.getElementById("topic1"); 
    var comment1 = document.getElementById("comment1"); 
    var comment2 = document.getElementById("comment2"); 

    if(topic1.value == null){
        topic1.innerHTML = document.getElementById("text1").value;
        topic1.value = document.getElementById("text1").value;
    }else if(comment1.value == null){
        comment1.innerHTML = document.getElementById("text1").value;
        comment1.value = document.getElementById("text1").value;
    }else  if(comment2.value == null){
        comment2.innerHTML = document.getElementById("text1").value;
        comment2.value = document.getElementById("text1").value;
    }
}
function clearFunction(){
    topic1.innerHTML = null;
    topic1.value = null;
    comment1.innerHTML = null;
    comment1.value = null;
    comment2.innerHTML = null;
    comment2.value = null;
}