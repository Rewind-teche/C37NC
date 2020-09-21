class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
    }

    update()
    {
        database.ref('gameState').set({
            name:this.name,
            distance:this.distance
        })
    }
}