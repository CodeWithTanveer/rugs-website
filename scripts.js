document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
    
    // Product Data
    const products = [
        {
            id: 1,
            title: "Hand Knotted Rug",
            price: 2499,
            originalPrice: 2999,
            image: "https://khushi-enterprises.com/assets/upload/category/4658.jpg",
            badge: "Bestseller"
        },
        {
            id: 2,
            title: "Hand Made Art",
            price: 1799,
            originalPrice: 2199,
            image: "https://khushi-enterprises.com/assets/upload/category/8492.jpg",
            badge: "New"
        },
        {
            id: 3,
            title: "Jute Rug",
            price: 1599,
            originalPrice: 1999,
            image: "https://khushi-enterprises.com/assets/upload/category/6786._AC_UF894,1000_QL80_",
             badge: "New"
        },
        {
            id: 4,
            title: "Loom Knotted Rugs",
            price: 1299,
            originalPrice: 1499,
            image: "https://khushi-enterprises.com/assets/upload/category/2081.jpg",
            badge: "Sale"
        },
        {
            id: 5,
            title: "Wall Hanging",
            price: 899,
            originalPrice: 1099,
            image: "https://khushi-enterprises.com/assets/upload/category/2376.jpg",
            badge: "Sale"
        },
        {
            id: 6,
            title: "Machine Made Carpet",
            price: 1199,
            originalPrice: 1399,
            image: "https://khushi-enterprises.com/assets/upload/category/1553.jpg",
            badge: "Popular"
        },
        {
            id: 7,
            title: "Pillows",
            price: 234,
            originalPrice: 1399,
            image: "https://itshomefurnishings.com/assest/uploads/carpets/823107_hotel-feel-fine-hollow-microfiber-pillow-224718.jpg",
            badge: "Sale"
        },
        {
            id: 8,
            title: "Cotton Towels",
            price: 289,
            originalPrice: 1399,
            image: "https://itshomefurnishings.com/assest/uploads/carpets/5360.jpg",
            badge: "Best Seller"
        }
    ];
    
    // Display Products
    const productsGrid = document.querySelector('.products-grid');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<span class="product-badge">${product.badge}</span>`;
        }
        
        productItem.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${badgeHTML}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsGrid.appendChild(productItem);
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
    
    prevBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) {
            newIndex = testimonials.length - 1;
        }
        showTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    }, 5000);
    
    // Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = [];
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            // Add to cart
            cartItems.push(product);
            updateCartCount();
            
            // Show feedback
            this.textContent = 'Added!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
    
    function updateCartCount() {
        cartCount.textContent = cartItems.length;
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input');
        const email = emailInput.value.trim();
        
        if (email) {
            // Here you would typically send the email to your server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });
});