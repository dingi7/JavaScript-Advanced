function solve(){
    return {
        mage(name){
            let status = {
                name, 
                healt: 100,
                stamina: 100
            }
        },
        fighter(name){
            let status = {
                name, 
                healt: 100,
                stamina: 100
            }
        },
        cast(spell){
            console.log(`${this.mage.name} cast ${spell}`);
            this.mage.stamina--
        },
        fight(){
            console.log(`${this.fighter.name} slashes at the foe!`);
            this.fight.stamina--
        }
    }
}

let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")

scorcher.cast("thunder")

scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight()

console.log(scorcher2.stamina);

console.log(scorcher.mana);