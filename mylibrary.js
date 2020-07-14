//hasCollided function which accepts two parameters, the bullet and the wall in this case

function hasCollided(lbullet, lwall){

    bulletRightEdge = lbullet.x+lbullet.width;
    wallLeftEdge = lwall.x;

    //When the right edge of the bullet is greater than or equal to the wall’s left edge, a collision has occurred and the computer detects it
  
    if(bulletRightEdge>=wallLeftEdge){
  
        return true
  
    }
    return false;
  
  
  }