document.addEventListener('DOMContentLoaded', function() {
    // Product data with manual image paths
    const products = {
        shoes: [
            {
                id: 1,
                name: "Designer Sneakers",
                price: "customized",
                image: "shoes/1.jpg"
            },
            {
                id: 2,
                name: "Casual Loafers",
                price: "customized",
                image: "shoes/2.jpg"
            },
            // Continue for all 50 shoes
            {
                id: 3,
                name: "Athletic Running Shoes",
                price: "customized",
                image: "shoes/10.jpg"
            },
            {
                id: 4,
                name: "Other type",
                price: "customized",
                image: "shoes/2.jpg"
            },
            {
                id: 5,
                name: "Other type",
                price: "customized",
                image: "shoes/3.jpg"
            },
            {
                id: 6,
                name: "Other type",
                price: "customized",
                image: "shoes/4.jpg"
            },
            {
                id: 7,
                name: "Other type",
                price: "customized",
                image: "shoes/5.jpg"
            },
            {
                id: 8,
                name: "Other type",
                price: "customized",
                image: "shoes/6.jpg"
            },
            {
                id: 9,
                name: "Other type",
                price: "customized",
                image: "shoes/7.jpg"
            },
            {
                id: 10,
                name: "Other type",
                price: "customized",
                image: "shoes/8.jpg"
            },
            {
                id: 11,
                name: "Other type",
                price: "customized",
                image: "shoes/9.jpg"
            },
            {
                id: 12,
                name: "Other type",
                price: "customized",
                image: "shoes/11.jpg"
            },
            {
                id: 13,
                name: "Other type",
                price: "customized",
                image: "shoes/12.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/13.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/14.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/15.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/16.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/17.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/18.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/19.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/20.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/21.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/22.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/23.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/24.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/25.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/26.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/27.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/28.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/29.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/30.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/31.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/32.jpg"
            },
            {
                id: 1,
                name: "Other type",
                price: "customized",
                image: "shoes/33.jpg"
            },

            // Add remaining shoes up to shoe50
        ],
        clothing: [
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/1.jpg"
            },
            {
                id: 2,
                name: "Casual Jeans",
                price: "customized",
                image: "clothing/2.jpg"
            },
            // Continue for all 50 clothing items
            {
                id: 10,
                name: "Summer Dress",
                price: "customized",
                image: "clothing/3.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/4.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/5.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/6.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/7.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/8.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/9.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/10.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/11.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/12.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/13.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/14.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/15.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/16.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/17.jpg"
            },
            {
                id: 1,
                name: "other type",
                price: "customized",
                image: "clothing/18.jpg"
            },


            // Add remaining clothing up to clothing50
        ],
        bags: [
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/1.jpg"
            },
            {
                id: 2,
                name: "Bbags",
                price: "customized",
                image: "bags/2.jpg"
            },
            // Continue for all 50 bags
            {
                id: 10,
                name: "bags",
                price: "customized",
                image: "bags/3.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/4.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/5.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/6.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/7.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/8.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/9.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/10.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/11.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/12.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/13.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/14.jpg"
            },
            {
                id: 1,
                name: "bags",
                price: "$customized",
                image: "bags/15.jpg"
            },
            // Add remaining bags up to bag50
        ]
    };

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Generate product cards based on current page
    function generateProductCards() {
        // Check if we're on a category page or home page
        const path = window.location.pathname;
        const page = path.split("/").pop().replace('.html', '');
        
        if (page === 'shoes' || page === 'clothing' || page === 'bags') {
            // Category page - show all 50 products
            const productGrid = document.querySelector('.product-grid');
            const categoryProducts = products[page];
            
            // Clear existing content
            if (productGrid) productGrid.innerHTML = '';
            
            // Generate all products for this category
            categoryProducts.forEach(product => {
                const productCard = createProductCard(product, page);
                if (productGrid) productGrid.appendChild(productCard);
            });
        } else {
            // Home page - show 10 products per category
            const sections = ['shoes', 'clothing', 'bags'];
            
            sections.forEach(section => {
                const productGrid = document.querySelector(`#${section} .product-grid`);
                if (productGrid) {
                    // Clear existing content
                    productGrid.innerHTML = '';
                    
                    // Get first 10 products for this section
                    const sectionProducts = products[section].slice(0, 10);
                    
                    // Generate product cards
                    sectionProducts.forEach(product => {
                        const productCard = createProductCard(product, section);
                        productGrid.appendChild(productCard);
                    });
                }
            });
        }
    }
    
    // Create a product card element
    function createProductCard(product, category) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <div class="product-actions">
                    <a href="tel:2567081076043" title="Call us">
                        <i class="fas fa-phone"></i>
                    </a>
                    <a href="https://wa.me/2567081076043?text=Hi%20Kent%20Steps,%20I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}.%20Could%20you%20please%20provide%20more%20information%20and%20the%20price?" target="_blank" title="Chat on WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;
        
        return productCard;
    }
    
    // Initialize product display
    generateProductCards();
    
    // Form submission
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you shortly.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.product-card, .about-text, .about-image, .contact-info, .contact-form', {
        interval: 200
    });
});

// Simple ScrollReveal implementation
function ScrollReveal(options) {
    // ... (keep the same ScrollReveal implementation as before)
    return {
        reveal: function(selector, options = {}) {
            const localConfig = { ...config, ...options };
            const els = document.querySelectorAll(selector);
            
            addAnimations();
            
            Array.from(els).forEach(el => {
                el.setAttribute('data-scroll-reveal', '');
                elements.push({
                    el: el,
                    revealed: false
                });
            });
            
            init();
        }
    };
}