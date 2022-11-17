class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers){
        let returnValue = []
        footballPlayers.forEach(element => {
            let [name,age,value] = element.split("/")
            let el = this.invitedPlayers.find((ele) => ele.name === name)
            if(!el){
                this.invitedPlayers.push({name,age,value})
                returnValue.push(name)
            }
            else{
                if(value > el.value){
                    el.value = value
                }
            }
        });
        return "You successfully invite " + returnValue.join(", ") + "."
    }
    signContract(selectedPlayer){
        let [name, offer] = selectedPlayer.split("/")
        let el = this.invitedPlayers.find((ele) => ele.name === name)
        if(!el){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(offer < el.value){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${el.value - offer} million more are needed to sign the contract!`)
        }
        el.value = "Bought"
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    }
    ageLimit(name, age){
        let el = this.invitedPlayers.find((ele) => ele.name === name)
        if(!el){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(el.age < age){
            if(age - el.age < 5){
                return `${name} will sign a contract for ${age - el.age} years with ${this.clubName} in ${this.country}!`
            }
            //possible error
            else if(age - el.age > 5){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
        else{
            return `${name} is above age limit!`
        }

    }
    transferWindowResult(){
        let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name))
        let result = ["Players list:"] 
        sorted.forEach(element =>{
            result.push("Player "+element.name +"-"+element.value)
        })
        return result.join("\n")
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());






