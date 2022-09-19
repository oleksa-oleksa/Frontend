import React from "react"
import Sidebar from "../components/Sidebar"
import Editor from "../components/Editor"
import {data} from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you 
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {
    /* When the app first loads, initialize the notes state
     * with the notes saved in localStorage. You'll need to
     * use JSON.parse() to turn the stringified array back
     * into a real JS array.*/

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    /* Every time the `notes` array changes, save it 
     * in localStorage. You'll need to use JSON.stringify()
     * to turn the array into a string to save in localStorage.*/   
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    
    function updateNote(text) {
        // Put the most recently-modified
        // note to be at the top
        setNotes(oldNotes => {
            const newArray = []
            for(i = 0; i < oldNotes.length; i++) {
            // Loop over the original array
                // if the id matches
                if(oldNotes[i].id === currentNoteId) {
                    // put the updated note at the 
                    // beginning of the new array
                    newArray.unshift({ ...oldNotes[i], body: text }) }
                else {
                    // push the old note to the end
                    // of the new array
                    newArray.push(oldNotes[i])
                }
                
            }
            // return the new array
            return newArray
        })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
