const inputName =  documentgetElementByID('inputName');
const inputFeedback =  documentgetElementByID('inputFeedback');
const btnInsert =  documentgetElementByID('btnInsert');

btnInsert.onclick  = function(){
    const name = inputName.value;
    const feedback = inputFeedback.value;

    if (name && feedback){
        localStorage.setItem(name,feedback);
        location.reload();
    }
}
for (let i = 0; i < localStorage.length;i++);{
    const name = localSotrage.key(i);
    const feedback = localStorage.getItem(key);
    
}