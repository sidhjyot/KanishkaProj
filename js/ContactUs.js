class ContactUs {
    constructor(){
        this.title=createElement('h1','Contact Details');
        this.image1=createImg("images/contactUs.png");
        this.image2=createImg("images/phoneNo1.png");
        this.image3=createImg("images/phoneNo2.png");

    }
    display(){
        
        this.title.position(width/2-130,20);
        this.title.style("font-size","40px");

        this.image1.position(50,height/2-100);
        this.image2.position(50,height/2-200);
        this.image3.position(50,height/2);

       
    }
}