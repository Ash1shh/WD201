const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
      arr=[]
   // Write the date check condition here and return the array of overdue items accordingly.
      for(let i=0;i<all.length;i++){
          if(all[i].dueDate===yesterday){
              //console.log(all[i])
              arr.push(all[i])
          }
      }
      return arr
  }

  const dueToday = () => {
      arr=[]
    // Write the date check condition here and return the array of todo items that are due today accordingly.
      for(let i=0;i<all.length;i++){
          if(all[i].dueDate===today){
              //console.log(all[i])
              arr.push(all[i])

          }
      }
      return arr

  }

  const dueLater = () => {
      arr=[]

    // Write the date check condition here and return the array of todo items that are due later accordingly.
      for(let i=0;i<all.length;i++){
          if(all[i].dueDate==tomorrow){
              arr.push(all[i])
          }
      }
      return arr
  }

  const toDisplayableList = (list) => {
      //console.log(list.length)
      str=""
    // Format the To-Do list here, and return the output string as per the format given above.
      for(let i=0;i<list.length;i++){
          if(list[i].completed===true){
              if(i===list.length-1){
                    str += "[ ] "+list[i].title
                    }
              else{
              str += "[x] "+list[i].title+"\n"

          }}
          else if(list[i].dueDate===yesterday){
              if(i===list.length-1){
                  str += "[ ] "+list[i].title+" "+yesterday
              }
              else{
              str += "[ ] "+list[i].title+" "+yesterday+"\n"
          }}
          else if(list[i].dueDate===tomorrow){
              if(i===list.length-1){
                  str += "[ ] "+list[i].title+" "+tomorrow
              }
              else{
              str += "[ ] "+list[i].title+" "+tomorrow+"\n"
          }}
          else{
              if(i===list.length-1){
                  str += "[ ] "+list[i].title
              }
              else{
              str += "[ ] "+list[i].title+"\n"

      }}}
      return str
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}
const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
module.exports = todoList;