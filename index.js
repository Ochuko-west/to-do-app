//declare variables
const toDoItems = document.querySelector('.to-do-items')
const userInput = document.getElementById('input')
const addToDo = document.getElementById('add-input')
const trashIcon = document.querySelector('.fas fa-trash')
const checkIcon = document.querySelector('fas fa-check-square')


 

function getItem() {
  listArr = JSON.parse(localStorage.getItem('to-do')) || []
  
}
getItem() 


//create function to addItem
function addItem(e) 
{
    //listArr = []
   // create elements to be displayed
    if(userInput.value === '' && !userInput.value)
    {
        alert('cannot be empty')
    }
    else if(userInput.value)
    {
      let itemDiv = document.createElement('div')
      let itemContent = document.createElement('input')
      itemContent.setAttribute('readonly', 'readonly')
      let iconDiv = document.createElement('div')
      let checkIcon  = document.createElement('i')
      let checkTextDiv = document.createElement('div')
      let trashTextDiv = document.createElement('div')
      let updTextDiv = document.createElement('div')
      let checkText = document.createElement('small')
      let trashText = document.createElement('small')
      let updText = document.createElement('small')
      let trashIcon = document.createElement('i')
      let updIcon = document.createElement('i')
      let saveIcon = document.createElement('i') 
    
      //attach style to div
      itemDiv.className = 'item'
      itemContent.className= 'item2'
      checkTextDiv.className = 'alt'
      trashTextDiv.className = 'alt2'
      updTextDiv.className = 'alt1'
      iconDiv.className = 'iconDiv'
      //itemDiv.innerHTML = '<div>'+userInput.value+'</div>'
      itemContent.value = userInput.value

      saveIcon.className = 'fa solid fa-circle-check'
      checkIcon.className = 'fas fa-check-square'
      checkText.textContent = 'Done'
      trashIcon.className = 'fas fa-trash'
      trashText.textContent = 'delete'
      updIcon.className = 'fa-solid fa-pen-to-square'
      updText.textContent = 'edit'
          
      
      //click event for checkicon
      checkIcon.addEventListener('click', ()=>
      {
          
          itemDiv.classList.toggle('item1')
          itemContent.classList.toggle('item22')
          checkText.classList.toggle ('check')
      })

      //hover on event for checkicon
      checkIcon.addEventListener('mouseover',()=>
      {
          checkIcon.classList.add('fa')
        
      })

      //hover out event for checkicon
      checkIcon.addEventListener('mouseleave',()=>
      {
          checkIcon.classList.remove('fa')
      })

      //click event for trashicon
      trashIcon.addEventListener('click',()=>
      {    
        console.log(listArr); 
        let del = itemContent.value
        console.log(del);
        let delval = listArr.indexOf(del)
        console.log(delval); 
        listArr.splice(delval,1)
        console.log(listArr); 
        //localStorage.removeItem('to-do')
         localStorage.setItem('to-do', JSON.stringify(listArr))
          itemDiv.remove()
      })

      //hover out event for trashicon
      trashIcon.addEventListener('mouseleave',()=>
      {
          trashIcon.classList.remove('fa')
      })

      //hover on event for trashicon
      trashIcon.addEventListener('mouseover',()=>
      {
        
          trashIcon.classList.add('fa')
      })

      //onclick event for update icon
      updIcon.addEventListener('click',(e)=>
      {
        console.log(itemDiv.textContent);
        checkIcon.classList.remove('check')
        checkTextDiv.classList.remove('check')
        itemDiv.classList.remove('item1')
        checkText.classList.remove ('check')
        iconDiv.classList.remove('check')
        itemContent.classList.remove('item22')
        itemContent.focus()
        itemContent.removeAttribute('readonly', 'readonly')
        iconDiv.appendChild(saveIcon)
        checkIcon.style.display = 'none'
        checkTextDiv.classList.remove('alt')
        checkTextDiv.classList.add('alttt')
        checkText.textContent = 'Delete'
        trashText.textContent = 'edit'
        trashTextDiv.classList.remove('alt2')
        trashTextDiv.classList.add('altt')
        updText.textContent = 'save'
        
      })

      //hover out event on updateicon
      updIcon.addEventListener('mouseleave',()=>{
          updIcon.classList.remove('fa')
      })

      //hover on event on updateicon
      updIcon.addEventListener('mouseover',()=>{
          updIcon.classList.add('fa')
      })

      //click event on saveIcon
      saveIcon.addEventListener('click', (e)=>{
          itemContent.setAttribute('readonly', 'readonly');
          saveIcon.remove()
          checkIcon.style.display = 'block'
          checkText.textContent = 'Done'
          checkTextDiv.classList.add('alt')
          checkTextDiv.classList.remove('alttt')
          trashText.textContent = 'delete'
          trashTextDiv.classList.add('alt2')
          trashTextDiv.classList.remove('altt')
          updText.textContent = 'edit'
      })

      //enter event to save edit on itemcontent
      itemContent.addEventListener('keydown', (e)=>{
          if (e.key === 'Enter'){
              itemContent.setAttribute('readonly', 'readonly');
              checkIcon.style.display = 'block'
              saveIcon.remove()
          }
      })

      
      //append icons to icondiv, append icon description to respective textdiv, append textdiv to icondiv
      
      iconDiv.appendChild(checkIcon)
      iconDiv.appendChild(trashIcon)
      iconDiv.appendChild(updIcon)
      checkTextDiv.appendChild(checkText)
      trashTextDiv.appendChild(trashText)
      updTextDiv.appendChild(updText)
      
      iconDiv.appendChild(checkTextDiv)
      iconDiv.appendChild(trashTextDiv)
      iconDiv.appendChild(updTextDiv)
      itemDiv.appendChild(itemContent)
      itemDiv.appendChild(iconDiv)
      toDoItems.appendChild(itemDiv)
      //toDoItems.appendChild(TextDiv))
     // toDoItems.appendChild(checkText)
      userInput.value = ''
      userInput.focus()


      // save to-do-items as obj and push to array
      let list = itemContent.value
     
      console.log(list);
      listArr?.push(list);
      console.log(listArr);

      //save to local storage
      localStorage.setItem('to-do', JSON.stringify(listArr))


     }
     getItem()
     //getUpdItem()
    }
    addToDo.addEventListener('click', addItem)
 
    function display(ev)
    {
      console.log(ev);
    
      let itemDiv = document.createElement('div')
      let itemContent = document.createElement('input')
      itemContent.setAttribute('readonly', 'readonly')
      let iconDiv = document.createElement('div')
      let checkIcon  = document.createElement('i')
      let checkTextDiv = document.createElement('div')
      let trashTextDiv = document.createElement('div')
      let updTextDiv = document.createElement('div')
      let checkText = document.createElement('small')
      let trashText = document.createElement('small')
      let updText = document.createElement('small')
      let trashIcon = document.createElement('i')
      let updIcon = document.createElement('i')
      let saveIcon = document.createElement('i') 
    
      //attach style to div
      itemDiv.className = 'item'
      itemContent.className= 'item2'
      checkTextDiv.className = 'alt'
      trashTextDiv.className = 'alt2'
      
      updTextDiv.className = 'alt1'
      
      iconDiv.className = 'iconDiv'
      //itemDiv.innerHTML = '<div>'+userInput.value+'</div>'
      itemContent.value = ev
    
      saveIcon.className = 'fa solid fa-circle-check'
      checkIcon.className = 'fas fa-check-square'
      checkText.textContent = 'Done'
      trashIcon.className = 'fas fa-trash'
      trashText.textContent = 'delete'
      updIcon.className = 'fa-solid fa-pen-to-square'
      updText.textContent = 'edit'
          
      
      //click event for checkicon
      checkIcon.addEventListener('click', ()=>
      {
          
          itemDiv.classList.toggle('item1')
          itemContent.classList.toggle('item22')
          checkText.classList.toggle ('check')
      })

      //hover on event for checkicon
      checkIcon.addEventListener('mouseover',()=>
      {
          checkIcon.classList.add('fa')
        
      })

      //hover out event for checkicon
      checkIcon.addEventListener('mouseleave',()=>
      {
          checkIcon.classList.remove('fa')
      })

      //click event for trashicon
      trashIcon.addEventListener('click',(e)=>
      {    
            console.log(listArr); 
            let del = itemContent.value
            console.log(del);
            let delval = listArr.indexOf(del)
            console.log(delval); 
            listArr.splice(delval,1)
            console.log(listArr); 
            localStorage.setItem('to-do', JSON.stringify(listArr))
            // localStorage.removeItem('to-do')
            // localStorage.setItem('upd', JSON.stringify(listArr))

         itemDiv.remove()
      })

      //hover out event for trashicon
      trashIcon.addEventListener('mouseleave',()=>
      {
          trashIcon.classList.remove('fa')
      })

      //hover on event for trashicon
      trashIcon.addEventListener('mouseover',()=>
      {
        
          trashIcon.classList.add('fa')
      })

      //onclick event for update icon
      updIcon.addEventListener('click',(e)=>
      {
        console.log(itemDiv.textContent);
        checkIcon.classList.remove('check')
        checkTextDiv.classList.remove('check')
        itemDiv.classList.remove('item1')
        checkText.classList.remove ('check')
        iconDiv.classList.remove('check')
        itemContent.classList.remove('item22')
        itemContent.focus()
        itemContent.removeAttribute('readonly', 'readonly')
        iconDiv.appendChild(saveIcon)
        checkIcon.style.display = 'none'
        checkTextDiv.classList.remove('alt')
        checkTextDiv.classList.add('alttt')
        checkText.textContent = 'Delete'
        trashText.textContent = 'edit'
        trashTextDiv.classList.remove('alt2')
        trashTextDiv.classList.add('altt')
        updText.textContent = 'save'
        
      })

      //hover out event on updateicon
      updIcon.addEventListener('mouseleave',()=>{
          updIcon.classList.remove('fa')
      })

      //hover on event on updateicon
      updIcon.addEventListener('mouseover',()=>{
          updIcon.classList.add('fa')
      })

      //click event on saveIcon
      saveIcon.addEventListener('click', (e)=>{
          itemContent.setAttribute('readonly', 'readonly');
          saveIcon.remove()
          checkIcon.style.display = 'block'
          checkText.textContent = 'Done'
          checkTextDiv.classList.add('alt')
          checkTextDiv.classList.remove('alttt')
          trashText.textContent = 'delete'
          trashTextDiv.classList.add('alt2')
          trashTextDiv.classList.remove('altt')
          updText.textContent = 'edit'
      })

      //enter event to save edit on itemcontent
      itemContent.addEventListener('keydown', (e)=>{
          if (e.key === 'Enter'){
              itemContent.setAttribute('readonly', 'readonly');
              checkIcon.style.display = 'block'
              saveIcon.remove()
          }
      })

      
      //append icons to icondiv, append icon description to respective textdiv, append textdiv to icondiv
      
      iconDiv.appendChild(checkIcon)
      iconDiv.appendChild(trashIcon)
      iconDiv.appendChild(updIcon)
      checkTextDiv.appendChild(checkText)
      trashTextDiv.appendChild(trashText)
      updTextDiv.appendChild(updText)
      
      iconDiv.appendChild(checkTextDiv)
      iconDiv.appendChild(trashTextDiv)
      iconDiv.appendChild(updTextDiv)
      itemDiv.appendChild(itemContent)
      itemDiv.appendChild(iconDiv)
      toDoItems.appendChild(itemDiv)




    }
        

                      
          

    listArr.forEach((e)=>{
      display(e)
    })


    // function clear(e) {
    //     listArr.indexOf()
    // }




function check(event){
    alert('help')
    
    event.target.style.color = 'Limegreen'
}

function trash(event) {
    alert("deleted")
    // let glo = document.getElementById()

    // event.closest("item").parentNode.removeChild(e.closest("item"))
    // console.log(event.target)

    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    
   
}