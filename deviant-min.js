document.querySelectorAll("*").forEach(e=>{getComputedStyle(e).filter.includes("blur")&&("undefined"==typeof jQuery?(async()=>{await import("https://code.jquery.com/jquery-3.6.3.min.js")})().then(()=>{v(e)}):v(e))});function v(e){jQuery.getJSON(`https://backend.deviantart.com/oembed?url=${window.location.href}&format=jsonp&callback=?`,t=>{e.style.filter="none",e.parentElement.style.backgroundSize="cover",e.parentElement.style.backgroundRepeat="no-repeat",e.parentElement.style.backgroundImage=`url(${t.url})`,e.parentElement.parentElement.lastChild.remove(),e.remove()})}