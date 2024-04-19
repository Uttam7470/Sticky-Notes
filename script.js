const btn = document.querySelector("button");
const note = document.querySelector("textarea");
const bgColor = document.querySelector("#bg");
const textColor = document.querySelector("#text");
const rightDiv = document.querySelector(".right");

btn.addEventListener("click" , createStickyNote);

function createStickyNote(){
   const text = note.value;
   
   if(text.trim().length===0)
   return alert("Please write  your note");

   const stickyNote = document.createElement("div");
   stickyNote.innerText = text;
   stickyNote.classList.add("note");

   
   const cross = document.createElement("span");
   cross.addEventListener("click", removeStickyNote);
   cross.innerHTML = '&times' ;
   cross.classList.add("close");
   stickyNote.append(cross);

   stickyNote.style.backgroundColor = bgColor.value;
   stickyNote.style.color = textColor.value;
  

   rightDiv.append(stickyNote);

  note.value = "";

}

// cross.addEventListener("click", removeStickyNote);

function removeStickyNote(event){
    event.target.parentElement.remove();
}