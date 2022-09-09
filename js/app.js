console.log("hye dude")
showNotes();
//if user adds a note,add it to the local storage
// let addBtn=document.getElementById('addBtn');
// addBtn.addEventListener("click",function(e){
//     console.log("inside click");
//     let addTxt=document.getElementById("addTxt");
//     let notes=localStorage.getItem("notes");
//     if(notes==null){
//         console.log("inside if")
//         notesObj=[];
//     }
//     else{
//         console.log("inside else")
//         notesObj=JSON.parse(notes);
//     }
//     console.log("outside else")

//     notesObj.push(addTxt.value);
//     localStorage.setItem("notes",JSON.stringify(notesObj));
//     addTxt.value="";
//     console.log(notesObj);

// })
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();

})
// function to show elements from local storage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    
        <div class="card-body">
            <h5 class="card-title">notes ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(${index})" class="btn btn-primary">delete</button>
        </div>
    </div>
</div> `;
         });
         let notesEle=document.getElementById("notes");
         if(notesObj.length!=0){
            notesEle.innerHTML=html;
         }
         else{
             notesEle.innerHTML=`Nothing to show!Use "Add a Note" section to add notes.`;
         }

}
// function to delete notes
function deleteNote(index){
    console.log('I am deleting',index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}
let search=document.getElementById('searchTxt')
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    console.log('input event is fired',inputVal)
    let noteCards=document.getElementsByClassName('noteCard');
    //console.log(Array.of(noteCards));
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerHTML;
        //console.log(cardTxt)
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
    
})
