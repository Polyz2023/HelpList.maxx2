import{_ as e,c as n,o as t,f as a}from"./index-NOgEg0-H.js";const d={},o=a(`<div class="container" data-v-5342ac7e><div class="d-flex justify-content-center align-items-center vh-100" data-v-5342ac7e><div class="alert alert-main" data-v-5342ac7e><div class="d-flex justify-content-center" data-v-5342ac7e><h4 data-v-5342ac7e>Script Examples</h4></div><hr data-v-5342ac7e><ol data-v-5342ac7e><li data-v-5342ac7e><strong data-v-5342ac7e>Image Slider Script</strong><pre data-v-5342ac7e><code class="language-javascript" data-v-5342ac7e>
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(&#39;.mySlides&#39;);
        slides.forEach((slide, index) =&gt; {
            slide.style.display = &#39;none&#39;;
        });
        slideIndex++;
        if (slideIndex &gt; slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = &#39;block&#39;;
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
            </code></pre></li><br data-v-5342ac7e><li data-v-5342ac7e><strong data-v-5342ac7e>Dropdown Menu Script</strong><pre data-v-5342ac7e><code class="language-javascript" data-v-5342ac7e>
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    let dropdown = document.querySelector(&#39;.dropdown&#39;);
    dropdown.addEventListener(&#39;click&#39;, function() {
        this.classList.toggle(&#39;show&#39;);
        let dropdownContent = this.querySelector(&#39;.dropdown-content&#39;);
        if (dropdownContent.style.display === &#39;block&#39;) {
            dropdownContent.style.display = &#39;none&#39;;
        } else {
            dropdownContent.style.display = &#39;block&#39;;
        }
    });
});

window.onclick = function(event) {
    if (!event.target.matches(&#39;.dropdown&#39;)) {
        let dropdowns = document.querySelectorAll(&#39;.dropdown-content&#39;);
        dropdowns.forEach((dropdown) =&gt; {
            if (dropdown.style.display === &#39;block&#39;) {
                dropdown.style.display = &#39;none&#39;;
            }
        });
    }
};
            </code></pre></li><br data-v-5342ac7e><li data-v-5342ac7e><strong data-v-5342ac7e>Modal Window Script</strong><pre data-v-5342ac7e><code class="language-javascript" data-v-5342ac7e>
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    let modal = document.getElementById(&#39;myModal&#39;);
    let btn = document.getElementById(&#39;myBtn&#39;);
    let span = document.getElementsByClassName(&#39;close&#39;)[0];

    btn.onclick = function() {
        modal.style.display = &#39;block&#39;;
    };

    span.onclick = function() {
        modal.style.display = &#39;none&#39;;
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = &#39;none&#39;;
        }
    };
});
            </code></pre></li><br data-v-5342ac7e><li data-v-5342ac7e><strong data-v-5342ac7e>Smooth Scrolling Script</strong><pre data-v-5342ac7e><code class="language-javascript" data-v-5342ac7e>
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    const links = document.querySelectorAll(&#39;a[href^=&quot;#&quot;]&#39;);
    links.forEach(link =&gt; {
        link.addEventListener(&#39;click&#39;, function(event) {
            event.preventDefault();
            const targetId = this.getAttribute(&#39;href&#39;);
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: &#39;smooth&#39;
                });
            }
        });
    });
});
            </code></pre></li><br data-v-5342ac7e><li data-v-5342ac7e><strong data-v-5342ac7e>Form Validation Script</strong><pre data-v-5342ac7e><code class="language-javascript" data-v-5342ac7e>
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    let form = document.getElementById(&#39;myForm&#39;);
    form.addEventListener(&#39;submit&#39;, function(event) {
        let isValid = true;
        let inputs = form.querySelectorAll(&#39;input[required]&#39;);
        inputs.forEach(input =&gt; {
            if (!input.value) {
                isValid = false;
                input.classList.add(&#39;error&#39;);
            } else {
                input.classList.remove(&#39;error&#39;);
            }
        });
        if (!isValid) {
            event.preventDefault();
            alert(&#39;Please fill in all required fields.&#39;);
        }
    });
});
            </code></pre></li></ol></div></div></div>`,1),l=[o];function c(i,s){return t(),n("main",null,l)}const v=e(d,[["render",c],["__scopeId","data-v-5342ac7e"]]);export{v as default};
