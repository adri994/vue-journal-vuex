import journalApi from '@/api/journalApi'

// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if(!data){
    
    commit('setEntries', [])
    return
  }

  const entries = Object.keys(data).map(key=>({id:key,...data[key]}))
  commit('setEntries', entries)
  
}

export const updateEntry = async ({ commit }, newEntry) => {
  const { id,...entry } = newEntry
  try {
    await journalApi.put(`/entries/${id}.json`,entry)
    commit('updateEntry', {...newEntry})   
  } catch (error) {
    console.log(error)
  }
}


export const createEntry = async ({ commit }, newEntry) => {
  const { date, text,picture } = newEntry
  const addEntry = {
    date,
    text,
    picture
  }
  try {
    const {data:{name:id} } = await journalApi.post('/entries.json',{...addEntry})
    commit('addEntry',{...addEntry,id})
    return id
  } catch (error) {
    console.log(error);    
  }
}

export const deleteEntry = async ({ commit }, id) => {
  try {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry',id)
  } catch (error) {
    console.log(error)
  }
}
