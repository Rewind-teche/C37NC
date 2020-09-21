class Game{
    constructor(){}

    getState()
    {
       var getGameState = database.ref('gameState')
       getGameState.on("value",(data)=>{
           gameState = data.val()
       })
    }

    updateState(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }

    start()
    {
        if(gameState === 0)
        {
            player = new Player();
            
        }
        form = new Form()
        form.display();
        sp = createSprite(40,height/2,50,50)
        sp.addImage(roc)
    }

    play()
    {
        form.hide();    
        var dist = 16000
        var x
        switch(dist)
        {
            case 16000:background(back1,displayWidth*4,0,displayWidth*5,displayHeight)
            break;

            case 11999:background(back2,displayWidth*4,0,displayWidth*5,displayHeight)
            break;

            case 7999:background(back3,ddisplayWidth*4,0,displayWidth*5,displayHeight)
            break;

            case 3999:background(back4,displayWidth*4,0,displayWidth*5,displayHeight)
            break;

            default:break;
        }

        x = displayWidth - sp.distance
        sp.x = x;
        camera.position.y = displayHeight/2;
        camera.position.x = sp.x

        if(keyIsDown(UP_ARROW)){
            player.distance +=30
            player.update();
          }
    }
}