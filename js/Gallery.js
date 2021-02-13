class Gallery {
    constructor(){
        this.title=createElement('h1','Gallery');
        this.nextButton=createButton("Next");
        this.backButton=createButton("Back");
        this.galleryImage = createImg("images/dummy.jpeg");
        //this.nextImage = createImg("images/download.png");
    }
    display(){
        
        this.title.position(width/2-130,20);
        this.title.style("font-size","40px");

        this.galleryImage.position(width/2,height/2);
        this.galleryImage.size(width/4,height/4);

        this.nextButton.position(width/2+200,height-70);
        this.nextButton.size(200,50)
        this.nextButton.style("font-size","30px");
        this.nextButton.style("background-color","#023919")
        this.nextButton.style("color","#ffffff");

        this.backButton.position(80,150);
        this.backButton.size(200,50)
        this.backButton.style("font-size","30px");
        this.backButton.style("background-color","#023919")
        this.backButton.style("color","#ffffff");


        this.nextButton.mousePressed(()=>{
                this.spawnImages();

        });

        this.backButton.mousePressed(()=>{
                this.galleryImage.hide();
                this.hideGalleryElements();
                homescreen.showMainScreenElements();
        });

    }
    
    spawnImages() {
        var rand = Math.round(random(1,5));
        console.log(rand);
         
        setTimeout(() => {
        switch(rand) {
                case 1: this.galleryImage1 = createImg("images/pic1.jpeg");
                        break;
                case 2: this.galleryImage1 = createImg("images/pic2.jpeg"); 
                        break;
                case 3: this.galleryImage1 = createImg("images/pic3.jpeg");
                        break;
                case 4: this.galleryImage1 = createImg("images/pic4.jpeg");
                        break;
                case 5: this.galleryImage1 = createImg("images/pic5.jpeg");
                        break;
                default: break;
        }
        this.galleryImage1.position(width/2-200,height/2-100);
        this.galleryImage1.size(width/2,height/2);
       } , 1000);
        // //  pic1.scale = 0.3;
        //  picGroup.add(pic1);
        this.galleryImage1.hide();
    }

    hideGalleryElements(){
        this.title.hide();
        this.nextButton.hide();
        this.backButton.hide();
        this.galleryImage.hide();
        this.galleryImage1.hide();
    }
}
