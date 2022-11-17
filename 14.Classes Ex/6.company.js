class Company {
    constructor(){
        this.departments = {}
        this.avgSalary = {}
    }
    addEmployee(name,salary,pos,depart){
        if(!name || !salary || !pos || !depart || salary <= 0){
            throw new Error("Invalid input!")
        }
        if(!this.departments.hasOwnProperty(depart)){
            this.departments[depart] = []
        }
        let buff = {name,salary,pos}
        this.departments[depart].push(buff)
        if(!this.avgSalary.hasOwnProperty(depart)){
            this.avgSalary[depart] = salary
        }
        else{
            this.avgSalary[depart] += salary
        }
        return `New employee is hired. Name: ${name}. Position: ${pos}`
    }
    bestDepartment(){
        let bestSalary = 0
        let bestDepart = ""
        for(let [k,v] of Object.entries(this.avgSalary)){
            if(v / this.departments[k].length > bestSalary){
                bestSalary = v / this.departments[k].length
                bestDepart = k
            }
        }
        this.departments[bestDepart].sort((a,b) =>{
            if(a.salary > b.salary) return - 1
            if(a.salary < b.salary) return 1
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1 
        })
        let avgSal = bestSalary.toFixed(2)
        let out = `Best Department is: ${bestDepart}\nAverage salary: ${avgSal}\n`
        for(let i = 0; i < this.departments[bestDepart].length; i++){
            if(this.departments[bestDepart].length - i === 1){
                out += `${this.departments[bestDepart][i].name} ${this.departments[bestDepart][i].salary} ${this.departments[bestDepart][i].pos}`
            }
            else{
                out += `${this.departments[bestDepart][i].name} ${this.departments[bestDepart][i].salary} ${this.departments[bestDepart][i].pos}\n`
            }
        }
        return out
    }
}






let c = new Company();




c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// {name, salary, position}
