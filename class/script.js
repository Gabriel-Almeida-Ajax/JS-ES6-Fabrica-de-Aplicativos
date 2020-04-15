class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);

    }

}

class ToDoList extends List{
    constructor(){
        super();

        this.name = "Maria";
    }

    showName(){
        console.log(this.name);
    }

};

const myList = new toDoList();

document.getElementById('new').onclick = function(){
    myList.add("My list");
}

myList.showName();