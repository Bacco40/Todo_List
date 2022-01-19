import './style.css';

let content=document.querySelector("#content");
content=(()=>{
    let index=0;
    let myProjects=[];
    let selection=2;
    let myTasks=[];
    let index1=0;
    let projects=document.querySelector('.Projects');

    function addProject() {
        while(projects.firstChild){
            projects.removeChild(projects.firstChild); 
        }
        for(let i=0;i<index;i++){
            let newProjects=document.createElement('button');
            newProjects.classList.add('sideBtn');
            newProjects.style.cssText="display:flex;align-items:center;padding:5px 15px;"
            newProjects.id = myProjects[i].name;
            newProjects.value = selection;
            newProjects.innerHTML=`<i class="fas fa-tasks"></i>${myProjects[i].name}<div class= "btnDel"> <div class="delete" id="${myProjects[i].selection}"> <i class="fas fa-trash-alt" id="${myProjects[i].name}"></i></div></div>`;
            projects.appendChild(newProjects);
        }
        
        let del=document.querySelectorAll('.delete');
        del.forEach((del)=>{
            del.addEventListener('click',()=>{
                for(let i=0;i<index;i++){
                    if(myProjects[i].selection==del.id){
                        myProjects.splice(i,1);
                        index=index-1;
                    }
                }
                addProject();
            })
        })
    }

    class project{
        constructor(name){
            this.name=name;
            this.selection=selection;
        };
    }

    class task{
        constructor(name,description,date,priority){
            this.name=name;
            this.description=description;
            this.date=date;
            this.priority=priority;
            this.selection=selection;
        }
        addTask(name,description,date,priority){
            let list=document.querySelector('.list');
            let newTask=document.createElement('div');
            newTask.classList.add('Tasks');
            newTask.id = name;
            newTask.innerHTML=`<div class="taskName"><input class="checkbox" type="checkbox" id="${name}">${name}</div>
                                <div class= "infoTask">${date}
                                    <button class="edit" id="${name}"><i class="fas fa-edit"></i></button>
                                    <button class="delete_T" id="${name}"><i class="fas fa-trash-alt"></i></button>
                                </div>`;
            list.appendChild(newTask);
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

    let addP=document.querySelector('#addProject');
    addP.addEventListener('click',()=>{
        VisualizePopUp(addP.value);
    })

    let addT=document.querySelector('#addTask');
    addT.addEventListener('click',()=>{
        VisualizePopUp(addT.value);
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
            console.log(myProjects[index-1])
            close("1");
        }else{alert("Please enter a name!")}
    })

    let btnAddT=document.querySelector('#addT');
    btnAddT.addEventListener('click', (ev)=>{
        ev.preventDefault();
        let T_name=document.querySelector('#T_name');
        let T_desc=document.querySelector('#T_desc');
        let T_priority=document.querySelector('#T_priority');
        let T_date=document.querySelector('#T_date');
        if(T_name.value!="" && T_desc!="" && T_priority!="null" && T_date!=""){
            let taskName=T_name.value;
            taskName=new task(T_name.value,T_desc.value,T_date.value,T_priority.value);
            taskName.addTask(T_name.value,T_desc.value,T_date.value,T_priority.value);
            myTasks[index1]=taskName;
            index1=index1+1;
            close("2");
        }else{alert("Please complete all the fields!")} 
    })

    let closePopUp=document.querySelectorAll('#close');
    closePopUp.forEach((closePopUp)=>{
        closePopUp.addEventListener('click',(ev)=>{
            ev.preventDefault();
            close(closePopUp.value);
        })
    })

})();