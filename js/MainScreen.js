class MainScreen {
constructor(){
    this.title=createElement('h1','Hair Treatment');
    this.logoImage=createImg("images/LOGO.jpeg");
    this.contactUs=createButton("Contact Us");
    this.gallery=createButton("Gallery");
}

display(){
    this.title.position(width/2-130,20)
    this.title.style("font-size","40px")


    this.logoImage.position(50,100);
    this.logoImage.size(width/2,height-150);

    
    this.contactUs.position(width/2+200,height/2);
    this.contactUs.size(200,50)
    this.contactUs.style("font-size","30px");
    this.contactUs.style("background-color","#023919")
    this.contactUs.style("color","#ffffff");


    this.gallery.position(width/2+200,height/2+300);
    this.gallery.size(200,50)
    this.gallery.style("font-size","30px");
    this.gallery.style("background-color","#023919")
    this.gallery.style("color","#ffffff");

    this.contactUs.mousePressed(()=>{
        this.title.hide();
        this.logoImage.hide();
        this.contactUs.hide();

        contactScreen=new ContactUs();
        contactScreen.display();
    });

    this.gallery.mousePressed(()=>{
        this.title.hide();
        this.logoImage.hide();
        this.contactUs.hide();
        this.gallery.hide();

        galleryScreen=new Gallery();
        galleryScreen.display();
    });
 }

 showMainScreenOptions(){
    this.title.show();
    this.logoImage.show();
    this.contactUs.show();
    this.gallery.show();
 }
}