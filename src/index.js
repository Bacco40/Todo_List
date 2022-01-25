import './style.css';
import isSameWeek from 'date-fns/isSameWeek';

let content=document.querySelector("#content");
content=(()=>{
    let index=0;
    let myProjects=[];
    let selection=2;
    let userSelection=0;
    let myTasks=[];
    let index1=0;
    let idCode=0;
    let projects=document.querySelector('.Projects');
    let list=document.querySelector('.list');
    let change=0;
    let toChange="";
    let home=document.querySelector('#Inbox');
    let today=document.querySelector('#Today');
    let week=document.querySelector('#Week');
    let state=0;
    let state1=0;
    let storageBase=0;
    let todays= new Date();
    todays.setHours(0,0,0,0);

    function storageAvailable(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    function checkStorage(){
        storageBase=localStorage.getItem('storageBase');
        storageBase=JSON.parse(storageBase);
        storageBase=parseInt(storageBase);
        if (storageAvailable('localStorage') && storageBase==1) {
            index=localStorage.getItem('index');
            index=JSON.parse(index);
            index=parseInt(index);
            myProjects=localStorage.getItem('myProjects');
            myProjects=JSON.parse(myProjects);
            selection=localStorage.getItem('selection');
            selection=JSON.parse(selection);
            selection=parseInt(selection);
            userSelection=localStorage.getItem('userSelection');
            userSelection=JSON.parse(userSelection);
            userSelection=parseInt(userSelection);
            myTasks=localStorage.getItem('myTasks');
            myTasks=JSON.parse(myTasks);
            index1=localStorage.getItem('index1');
            index1=JSON.parse(index1);
            index1=parseInt(index1);
            idCode=localStorage.getItem('idCode');
            idCode=JSON.parse(idCode);
            idCode=parseInt(idCode); 
        }else{
            storageBase=1;
            localStorage.setItem('storageBase', JSON.stringify(storageBase));
            localStorage.setItem('index', JSON.stringify(index));
            localStorage.setItem('myProjects', JSON.stringify(myProjects));;
            localStorage.setItem('selection', JSON.stringify(selection));
            localStorage.setItem('userSelection', JSON.stringify(userSelection));
            localStorage.setItem('myTasks', JSON.stringify(myTasks));
            localStorage.setItem('index1', JSON.stringify(index1));
            localStorage.setItem('idCode', JSON.stringify(idCode));
        }
    }

    checkStorage();
    start();
    addProject();

    function mainBuild(){
        let main=document.querySelector('.main');
        resetDetail();
        addTask();
        if(state==0){
            resetDetail();
            if(userSelection>2 || userSelection==0){
                let addButton=document.createElement('button');
                addButton.classList.add('addBtn');
                addButton.id="addTask";
                addButton.value="2";
                addButton.innerHTML=`<i class="fas fa-plus"></i>Add Task`;
                main.appendChild(addButton);
                addButton.addEventListener('click',()=>{
                    VisualizePopUp(addButton.value);
                })
                state=1;
            }
        }
        else if(state1==state){
            let remove=document.querySelector('#addTask');
            let trash=main.removeChild(remove);
            state=0;
        }
    } 
    
    function start() {
        let sideBtn=document.querySelectorAll('.sideBtn');
        let name=document.querySelector('#selected');
        sideBtn.forEach((sideBtn)=>{
            if(userSelection>2 || sideBtn.value>2){
                sideBtn.style.cssText="background-color: rgb(228, 227, 227);display:flex;align-items:center;padding:5px 15px;";
                if(sideBtn.value==userSelection){
                    sideBtn.style.cssText="background-color: rgb(209, 205, 205);display:flex;align-items:center;padding:5px 15px;";
                    name.textContent=sideBtn.id;
                }
            }else{
                sideBtn.style.cssText="background-color: rgb(228, 227, 227);";
                if(sideBtn.value==userSelection){
                    sideBtn.style.cssText="background-color: rgb(209, 205, 205);"
                    if(sideBtn.id=="Week"){
                        name.textContent="This week"
                    }else{name.textContent=sideBtn.id;} 
                }
            }
        })
        mainBuild();
    }

    home.addEventListener('click',()=>{
        userSelection=0;
        state1=0;
        start();
    })
    today.addEventListener('click',()=>{
        userSelection=1;
        state1=1;
        start();
    })
    week.addEventListener('click',()=>{
        userSelection=2;
        state1=1;
        start();
    })

    class project{
        constructor(name){
            this.name=name;
            this.selection=selection;
        };
    }

    class task{
        constructor(name,description,date,priority,id){
            this.name=name;
            this.description=description;
            this.date=date;
            this.priority=priority;
            this.id=id;
            this.selection=userSelection;
            this.status="to do";
            this.openDetail="0";
        }
    }

    function VisualizePopUp(value){
        let PopUp="";
        if(value=="1"){
            PopUp=document.querySelector('.projectPopUp');
            document.getElementById("form").reset();  
        }else{
            PopUp=document.querySelector('.todoPopUp');
            document.getElementById("form1").reset(); 
        }
        document.getElementById("content").style.cssText="opacity:60%;"
        PopUp.style.cssText="display:flex";
    }

    function close(value){
        let PopUp="";
        if(value=="1"){
            PopUp=document.querySelector('.projectPopUp');  
        }else{
            PopUp=document.querySelector('.todoPopUp');
        }
        document.getElementById("content").style.cssText="opacity:100%;"
        PopUp.style.cssText="display:none"; 
    }

    function addProject() {
        while(projects.firstChild){
            projects.removeChild(projects.firstChild); 
        }
        if(index!=0){
            for(let i=0;i<index;i++){
                let newProjects=document.createElement('button');
                newProjects.classList.add('sideBtn');
                newProjects.style.cssText="display:flex;align-items:center;padding:5px 15px;"
                newProjects.id = myProjects[i].name;
                newProjects.value = myProjects[i].selection;
                newProjects.innerHTML=`<i class="fas fa-tasks"></i>${myProjects[i].name}<div class= "btnDel"> <div class="delete" id="${myProjects[i].selection}"> <i class="fas fa-trash-alt" id="${myProjects[i].name}"></i></div></div>`;
                projects.appendChild(newProjects);
                state1=0;
                start();
                newProjects.addEventListener('click',()=>{
                    userSelection=myProjects[i].selection;
                    state1=0;
                    start();
                })
            }
            
            let del=document.querySelectorAll('.delete');
            del.forEach((del)=>{
                del.addEventListener('click',()=>{
                    for(let i=0;i<index;i++){
                        if(myProjects[i].selection==del.id){
                            for(let a=0;a<index1;a++){
                                if(myTasks[a].selection==myProjects[i].selection){
                                    myTasks.splice(a,1);
                                    localStorage.setItem('myTasks', JSON.stringify(myTasks));  
                                    index1=index1-1;
                                    localStorage.setItem('index1', JSON.stringify(index1));
                                    a--;
                                }
                            }
                            myProjects.splice(i,1);
                            localStorage.setItem('myProjects', JSON.stringify(myProjects));
                            state1=0;   
                            index=index-1;
                            localStorage.setItem('index', JSON.stringify(index));
                        }
                    }
                    if(userSelection!=0 && userSelection!=1 && userSelection!=2){
                        userSelection=0;
                    }
                    addProject();
                })
            })
        }else{
            if(userSelection!=0 && userSelection!=1 && userSelection!=2){
                userSelection=0;
            }
            start();
        }
    }

    function addTask(){
        while(list.firstChild){
            list.removeChild(list.firstChild); 
        }
        for(let i=0;i<index1;i++){
            let option=0;
            let taskDate=new Date(myTasks[i].date.replace(/-/g,'\/'));
            taskDate.setHours(0,0,0,0);
            if(userSelection==1 && taskDate.toDateString()==todays.toDateString()){
                option=1;
            }
            let sameWeek= isSameWeek(todays,taskDate);
            if(userSelection==2 && sameWeek==true){
                option=1;
            }
            if(userSelection==myTasks[i].selection || option==1){
                let newTask=document.createElement('div');
                newTask.classList.add('Tasks');
                newTask.id = myTasks[i].name;
                let color="";
                if(myTasks[i].priority=="high"){
                    color="#DE4C4A";
                }else if(myTasks[i].priority=="medium"){
                    color="orange";
                }
                newTask.innerHTML=`<input class="checkbox" type="checkbox" id="${myTasks[i].id}"><div class="taskName" id="${myTasks[i].id}">${myTasks[i].name}</div>
                                    <div class= "infoTask">${myTasks[i].date}
                                        <button class="edit" id="${myTasks[i].id}"><i class="fas fa-edit"></i></button>
                                        <button class="priority"><i class="fas fa-flag" style="color:${color}"></i></button>
                                        <button class="delete_T" id="${myTasks[i].id}"><i class="fas fa-trash-alt"></i></button>
                                    </div>`;
                if(myTasks[i].status=="done"){
                    newTask.style.cssText="text-decoration: line-through;opacity:60%;";
                }
                list.appendChild(newTask);
                if(myTasks[i].openDetail=="1"){
                    let taskDetail=document.createElement('div');
                    taskDetail.classList.add('taskDetail');
                    taskDetail.innerHTML=`<div class="rightDetail"><div class="info"><div class="tag">Title:</div><div class="details">${myTasks[i].name}</div></div>
                    <div class="info"><div class="tag">Due date:</div><div class="details">${myTasks[i].date}</div></div></div>
                    <div class="rightDetail"><div class="info"><div class="tag">Description:</div><div class="details">${myTasks[i].description}</div></div>
                    <div class="info"><div class="tag">Priority:</div><div class="details">${myTasks[i].priority}</div></div></div>`
                    list.appendChild(taskDetail);
                }  
            }
        }

        let del=document.querySelectorAll('.delete_T');
        del.forEach((del)=>{
            del.addEventListener('click',()=>{
                for(let i=0;i<index1;i++){
                    if(myTasks[i].id==del.id){
                        myTasks.splice(i,1);    
                        localStorage.setItem('myTasks', JSON.stringify(myTasks));
                        index1=index1-1;
                        localStorage.setItem('index1', JSON.stringify(index1));
                    }
                }
                addTask();
            })
        })

        let edit=document.querySelectorAll('.edit');
        edit.forEach((edit)=>{
            edit.addEventListener('click',()=>{
                for(let i=0;i<index1;i++){
                    if(myTasks[i].id==edit.id){
                        change=1;
                        toChange=myTasks[i].id;
                        VisualizePopUp("2");
                    }
                }
                resetDetail();
                addTask();
            })
            
        })

        let check=document.querySelectorAll('.checkbox');
        check.forEach((check)=>{
            check.addEventListener('click',()=>{
                for(let i=0;i<index1;i++){
                    if(myTasks[i].id==check.id){
                        if(myTasks[i].status=="to do"){
                            myTasks[i].status="done";   
                            localStorage.setItem('myTasks', JSON.stringify(myTasks));
                        }else{
                            myTasks[i].status="to do";
                            localStorage.setItem('myTasks', JSON.stringify(myTasks));
                        }
                    }
                }
                addTask();
            })
        })

        let taskName=document.querySelectorAll('.taskName');
        taskName.forEach((taskName)=>{
            taskName.addEventListener('click',()=>{
                for(let i=0;i<index1;i++){
                    if(myTasks[i].id==taskName.id){
                        if(myTasks[i].openDetail=="0"){
                            myTasks[i].openDetail="1"; 
                        }else{
                            myTasks[i].openDetail="0";
                        }
                    }
                } 
                addTask();
            })
        })
    }
    
    let btnAddT=document.querySelector('#addT');
    btnAddT.addEventListener('click', (ev)=>{
        ev.preventDefault();
        resetDetail();
        let T_name=document.querySelector('#T_name');
        let T_desc=document.querySelector('#T_desc');
        let T_priority=document.querySelector('#T_priority');
        let T_date=document.querySelector('#T_date');
        let taskDate=new Date(T_date.value.replace(/-/g,'\/'));
        taskDate.setHours(0,0,0,0);
        if(T_name.value!="" && T_desc!="" && T_priority!="null" && T_date!="" && taskDate>=todays){
            let taskName=T_name.value;
            if(change==0){
                taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value,idCode);
                myTasks[index1]=taskName;   
                localStorage.setItem('myTasks', JSON.stringify(myTasks));
                index1=index1+1;
                localStorage.setItem('index1', JSON.stringify(index1));
                addTask();
                idCode=idCode+1;   
                localStorage.setItem('idCode', JSON.stringify(idCode));
            }else{
                for(let i=0;i<index1;i++){
                    taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value,toChange);
                    if(myTasks[i].id==toChange){
                        myTasks[i]=taskName;    
                        localStorage.setItem('myTasks', JSON.stringify(myTasks));
                        addTask();
                        change=0;
                        toChange="";
                    }
                }
            }
            close("2");
        }else{alert("Please complete all the fields,and select a date in the future!")} 
    })

    let addP=document.querySelector('#addProject');
    addP.addEventListener('click',()=>{
        VisualizePopUp(addP.value);
    })

    let btnAddP=document.querySelector('#addP')
    btnAddP.addEventListener('click',(ev)=>{
        ev.preventDefault();
        let projectName=document.querySelector('#P_name');
        if(projectName.value!=""){
            selection=selection+1;  
            localStorage.setItem('selection', JSON.stringify(selection));
            let p=projectName.value;
            p=new project(projectName.value);
            myProjects[index]=p;    
            localStorage.setItem('myProjects', JSON.stringify(myProjects));
            index=index+1;
            localStorage.setItem('index', JSON.stringify(index));
            addProject();
            userSelection=selection;
            start();
            close("1");
        }else{alert("Please enter a name!")}
    })

    let closePopUp=document.querySelectorAll('#close');
    closePopUp.forEach((closePopUp)=>{
        closePopUp.addEventListener('click',(ev)=>{
            ev.preventDefault();
            close(closePopUp.value);
        })
    })

    function resetDetail() {
        for(let i=0;i<index1;i++){
            myTasks[i].openDetail="0"
        }
    }

})();