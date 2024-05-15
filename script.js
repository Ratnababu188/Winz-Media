document.addEventListener("DOMContentLoaded", function ()
{

    window.addEventListener("scroll", function ()
    {

        var navbar = document.querySelector('.navbar');
        var navContainer = document.querySelector('.nav-container');
        var height = navbar.offsetHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop >= height - 40)
        {
            navContainer.classList.add('solid-nav');
        } else
        {
            navContainer.classList.remove('solid-nav');
        }

    });

});

// card carosual

