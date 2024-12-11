$('a.brand,a.work-link,a.cta-link,a.credit-link,a.nav-link,a.txt-link,a.nav-brand,a.project-link,.work-link,.mob-button').click(function (e) {
    e.preventDefault();        
    var goTo = this.getAttribute("href"); 

    setTimeout(function(){
         window.location = goTo;
    },1000);       
}); 



