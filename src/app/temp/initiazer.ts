export class Initiazer {
    async init() {
        
        const tasks = await fetch('http://localhost:3000/task/tasks', {method: 'GET'});
        // consoles.log(tasks.text());
        
        console.log(await tasks.json())
        
    }
}
