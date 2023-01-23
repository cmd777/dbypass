document.querySelectorAll("*").forEach(element => {
    if (getComputedStyle(element).filter.includes("blur"))
    {
        if (typeof jQuery == "undefined")
        {
            (async ()=> {
                await import('https://code.jquery.com/jquery-3.6.3.min.js')
            })().then(()=> {
                // jQuery.noConflict();
                getIMG(element);
            })
        } else {
            getIMG(element);
        }
    }
})

function getIMG(element) {
    jQuery.getJSON(`https://backend.deviantart.com/oembed?url=${window.location.href}&format=jsonp&callback=?`, data => {
        element.style.filter = "none"
        element.parentElement.style.backgroundSize = "cover"
        element.parentElement.style.backgroundRepeat = "no-repeat"
        element.parentElement.style.backgroundImage = `url(${data.url})`
        element.parentElement.parentElement.lastChild.remove();
        element.remove();
    });
}