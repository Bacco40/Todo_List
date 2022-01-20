import './style.css';

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

    function mainBuild(){
        let main=document.querySelector('.main');
        addTask();
        if(state==0){
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

    start();

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
                    start();
                })
            }
            
            let del=document.querySelectorAll('.delete');
            del.forEach((del)=>{
                del.addEventListener('click',()=>{
                    for(let i=0;i<index;i++){
                        if(myProjects[i].selection==del.id){
                            myProjects.splice(i,1);
                            state1=0;
                            index=index-1;
                        }
                    }
                    userSelection=0;
                    addProject();
                })
            })
        }else{
            userSelection=0;
            start();
        }
    }

    function addTask(){
        while(list.firstChild){
            list.removeChild(list.firstChild); 
        }
        for(let i=0;i<index1;i++){
            if(userSelection==myTasks[i].selection){
                let newTask=document.createElement('div');
                newTask.classList.add('Tasks');
                newTask.id = myTasks[i].name;
                let color="";
                if(myTasks[i].priority=="high"){
                    color="#DE4C4A";
                }else if(myTasks[i].priority=="medium"){
                    color="orange";
                }
                newTask.innerHTML=`<div class="taskName"><input class="checkbox" type="checkbox" id="${myTasks[i].name}">${myTasks[i].name}</div>
                                    <div class= "infoTask">${myTasks[i].date}
                                        <button class="edit" id="${myTasks[i].id}"><i class="fas fa-edit"></i></button>
                                        <i class="fas fa-flag" style="color:${color}"></i>
                                        <button class="delete_T" id="${myTasks[i].id}"><i class="fas fa-trash-alt"></i></button>
                                    </div>`;
                list.appendChild(newTask); 
            }
        }

        let del=document.querySelectorAll('.delete_T');
        del.forEach((del)=>{
            del.addEventListener('click',()=>{
                for(let i=0;i<index1;i++){
                    if(myTasks[i].id==del.id){
                        myTasks.splice(i,1);
                        index1=index1-1;
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
                addTask();
            })
            
        })
    }
    
    let btnAddT=document.querySelector('#addT');
    btnAddT.addEventListener('click', (ev)=>{
        ev.preventDefault();
        let T_name=document.querySelector('#T_name');
        let T_desc=document.querySelector('#T_desc');
        let T_priority=document.querySelector('#T_priority');
        let T_date=document.querySelector('#T_date');
        if(T_name.value!="" && T_desc!="" && T_priority!="null" && T_date!=""){
            let taskName=T_name.value;
            if(change==0){
                taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value,idCode);
                myTasks[index1]=taskName;
                index1=index1+1;
                addTask();
                idCode=idCode+1;   
            }else{
                for(let i=0;i<index1;i++){
                    taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value,toChange);
                    if(myTasks[i].id==toChange){
                        myTasks[i]=taskName;
                        addTask();
                        change=0;
                        toChange="";
                    }
                }
            }
            close("2");
        }else{alert("Please complete all the fields!")} 
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
            let p=projectName.value;
            p=new project(projectName.value);
            myProjects[index]=p;
            index=index+1;
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

})();