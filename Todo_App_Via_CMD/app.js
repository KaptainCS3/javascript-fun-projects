setTimeout(() =>{
    let input = prompt("What will you like to do?");
    const todos = ["Welcome"];
    while(input !== 'quit' && input !== 'q'){
       if (input === 'list') {
            console.log("***********");
            for (let index of todos) {
                console.log(`${todos.indexOf(index)} : ${index}`);
            }
            console.log("***********");
        }
        else if(input === 'new'){
            const newTodos = prompt("What the new todos?");
            todos.push(newTodos);
            console.log(`${newTodos} added to the list`);
        }
    else if (input === 'del') {
          const item = prompt("Enter index to remove todos");
           const remove = todos.splice(item,1);
            console.log(`successfully remove ${remove[0]}`);
    
        }
        input = prompt("What will you like to do ?");
    }
        confirm("*** Do you want to quit? ***");
        console.log("***  Quiting the app :(  ***");
        },5000);