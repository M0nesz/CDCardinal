$(document).ready(function(){
    // Get current page URL
    var currentUrl = window.location.href.split('/').pop(); 
    
    // Loop through each navbar link
    $('.navbar-nav .nav-link').each(function(){
        // Get the href attribute of the link
        var linkUrl = $(this).attr('href').split('/').pop(); // Get the link's page name
        
        // Check if the current page URL matches the link URL
        if(currentUrl === linkUrl){
            // Add 'active' class to the parent li element
            $(this).parent('li').addClass('active');
        }
    });
});