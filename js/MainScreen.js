class MainScreen {
constructor(){
    this.title=createElement('h1','Hair Treatment');
    this.image=createImg("images/LOGO.jpeg");
    this.contactUs=createButton("Contact Us");
}

display(){
    this.title.position(width/2-130,20)
    this.title.style("font-size","40px")


    this.image.position(50,100);

    
    this.contactUs.position(width/2+200,height/2);
    this.contactUs.size(200,50)
    this.contactUs.style("font-size","30px");
    this.contactUs.style("background-color","#023919")
    this.contactUs.style("color","#ffffff");

    this.contactUs.mousePressed(()=>{
        this.title.hide();
        this.image.hide();
        this.contactUs.hide();

        contactScreen=new ContactUs();
        contactScreen.display();
    })
}
}