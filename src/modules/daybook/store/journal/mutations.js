
// export const myAction = ( state ) => {

// }

export const setEntries = (state,entries) => {
 

  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = (state,newEntry) => {
  state.entries = state.entries.map(entry=>{
    if(entry.id === newEntry.id ) return newEntry
    return entry
  })
}

export const addEntry = (state,newEntry) => {
  state.entries = [newEntry,...state.entries]
}

export const deleteEntry = ( state, id ) => {
  state.entries = state.entries.filter(entry=>entry.id !== id)
}
