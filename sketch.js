    
  xCoord2 = 0;
  yCoord2 = height / 2;
    
    for (var i = 0; i < 20; i++) {
    xCoord1 = xCoord2;
    yCoord1 = yCoord2;
    xCoord2 = xCoord1 + int(random(-20, 20));
    yCoord2 = yCoord1 + int(random(-10, 20));
    strokeWeight(random(1, 3));
    strokeJoin(MITER);
    line(xCoord1, yCoord1, xCoord2, yCoord2);
frameRate(20);
      if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
      clear();
      xCoord2 = int(random(0, width));
      yCoord2 = 0;
      stroke(255, 255, random(0, 255));
    }
  }
  }
  
}
  
function mousePressed(){
  
  if (pageNum < numPages){
    pageNum++;
  }
  
 
  else{
    pageNum = 1;
  }
  
  
  console.log(pageNum);
}
