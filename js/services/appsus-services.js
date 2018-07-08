// var notes = [
//     {id : idGen(),type : 'text',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',color:'#000080',isPinned:false},
//     {id : idGen(),type : 'text',content:'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',color:'#ffffff',isPinned:false},
//     {id : idGen(),type : 'text',content:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',color:'rgba(255, 255, 255, 0.623)',isPinned:false},
//     {id : idGen(),type : 'text',content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',color:'#444444',isPinned:false},
// ]

// saveToStorage('notes', notes)



function notesQuery(){
    var notesToRet = loadFromStorage('notes');
    return Promise.resolve(notesToRet);
}


function idGen() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

function getNoteById(id){
    var retNote = loadFromStorage('notes').find(note => note.id===id)
    return Promise.resolve(retNote)
}

function setNoteContent(id,text){
    var notes = loadFromStorage('notes');
    for (var i in notes){
        if (notes[i].id === id){
            notes[i].content = text
        }
    }
    saveToStorage('notes',notes);
    return Promise.resolve();
}

function deleteNote(id){
    var notes = loadFromStorage('notes');
    for (var i in notes){
        if (notes[i].id === id){
            notes.splice(i,1)
            break;
        }
    }
    saveToStorage('notes',notes);
    return Promise.resolve(notes);
}

function pinNote(id){
    var notes = loadFromStorage('notes');
    for (var i in notes){
        if (notes[i].id === id){
            notes[i].isPinned = !notes[i].isPinned;
            var note = notes[i]
            notes.splice(i,1)
            notes.unshift(note) 
            break;
        }
    }
    sortNotes();
    saveToStorage('notes',notes);
    return Promise.resolve(notes);
}

function addNote(text,color){
    var notes = loadFromStorage('notes');
    var newNote = {id: idGen(),type:'text',content:text,color:color,isPinned:false}
    notes.push(newNote);
    sortNotes();
    saveToStorage('notes',notes);
    return Promise.resolve(notes);
}

function setColor(id,color){
    var notes = loadFromStorage('notes');
    for (var i in notes){
        if (notes[i].id === id){
            notes[i].color = color
            break;
        }
    }
    saveToStorage('notes',notes);
    return Promise.resolve(notes);
}

function sortNotes(){
    var notes = loadFromStorage('notes');
    notes.sort((a,b)=>{return b.isPinned > a.isPinned})
    saveToStorage('notes',notes);
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

  export default {
    idGen,
    notesQuery,
    getNoteById,
    setNoteContent,
    deleteNote,
    addNote,
    setColor,
    pinNote
  }