class Gallery {
    constructor(){
        this.title=createElement('h1','Gallery');
        this.nextButton=createButton("Next");
        this.backButton=createButton("Back");
        //this.nextImage = createImg("images/download.png");

    }
    display(){
        
        this.title.position(width/2-130,20);
        this.title.style("font-size","40px");

        // this.nextImage.position(width-100,height-100);
        // this.nextImage.size(70,70);

        this.nextButton.position(width/2+200,height/2);
        this.nextButton.size(200,50)
        this.nextButton.style("font-size","30px");
        this.nextButton.style("background-color","#023919")
        this.nextButton.style("color","#ffffff");

        this.backButton.position(100,200);
        this.backButton.size(200,50)
        this.backButton.style("font-size","30px");
        this.backButton.style("background-color","#023919")
        this.backButton.style("color","#ffffff");


        this.nextButton.mousePressed(()=>{
                this.spawnImages();

        });

        this.backButton.mousePressed(()=>{
                this.nextButton.hide();
                this.backButton.hide();
                homescreen.showMainScreenOptions();
        });

    }
    
    spawnImages() {
         var rand = Math.round(random(1,5));
         console.log(rand);
         setTimeout(() => {
                switch(rand) {
                case 1: this.galleryImage = createImg("images/pic1.jpeg");
                        this.galleryImage.position(width/2-500,height/2-250);
                        this.galleryImage.size(width/2,height/2);
                        break;
                case 2: this.galleryImage = createImg("images/pic2.jpeg"); 
                        this.galleryImage.position(width/2-500,height/2-250);
                        this.galleryImage.size(width/2,height/2);
                        break;
                case 3: this.galleryImage = createImg("images/pic3.jpeg");
                        this.galleryImage.position(width/2-500,height/2-250);
                        this.galleryImage.size(width/2,height/2);
                        break;
                case 4: this.galleryImage = createImg("images/pic4.jpeg");
                        this.galleryImage.position(width/2-500,height/2-250);
                        this.galleryImage.size(width/2,height/2);
                        break;
                case 5: this.galleryImage = createImg("images/pic5.jpeg");
                        this.galleryImage.position(width/2-500,height/2-250);
                        this.galleryImage.size(width/2,height/2);
                        break;
                default: break;
                }
        } , 1000);
        // //  pic1.scale = 0.3;
        //  picGroup.add(pic1);
         
    }
}
