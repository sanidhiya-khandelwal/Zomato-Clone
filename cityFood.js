// makes search container visible on scroll in small screens
window.addEventListener('scroll', function () {
    var dishContainer = document.querySelector('.dish-sm');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        dishContainer.style.display = 'block';
    }
    else {
        dishContainer.style.display = 'none';
    }
})



// location code
var downArrow = document.querySelector('.down-arrow-img');
var detectCurrentLocation = document.querySelector('.detect-current-location')

var flag = 0;
downArrow.addEventListener('click', function () {
    if (flag == 0) {
        downArrow.style.transform = 'rotate(180deg)'
        detectCurrentLocation.style.visibility = 'visible';
        flag = 1;
    } else {
        downArrow.style.transform = 'rotate(0deg)'
        detectCurrentLocation.style.visibility = 'hidden';
        flag = 0;
    }

})

// category selection code
var deliveryBlock = document.querySelector('.delivery');
var diningOut = document.querySelector('.dining-out');
var nightLife = document.querySelector('.night-life');
var deliveryImage = document.querySelector('.delivery-image')
var diningOutImage = document.querySelector('.dining-out-image');
var nightLifeImage = document.querySelector('.night-life-image');

deliveryBlock.addEventListener('click', function () {
    deliveryBlock.style.borderBottom = "2px solid rgb(253, 74, 74)";
    diningOut.style.borderBottom = "none";
    nightLife.style.borderBottom = "none";
    deliveryImage.style.backgroundColor = "yellow";
    diningOutImage.style.backgroundColor = "rgb(248, 248, 248)";
    nightLifeImage.style.backgroundColor = "rgb(248, 248, 248)";
})

diningOut.addEventListener('click', function () {
    deliveryBlock.style.borderBottom = "none";
    diningOut.style.borderBottom = "2px solid rgb(253, 74, 74)";
    nightLife.style.borderBottom = "none";
    diningOutImage.style.backgroundColor = "rgb(229, 243, 243)";
    nightLifeImage.style.backgroundColor = "rgb(248, 248, 248)";
    deliveryImage.style.backgroundColor = "rgb(248, 248, 248)";

})

nightLife.addEventListener('click', function () {
    deliveryBlock.style.borderBottom = "none";
    diningOut.style.borderBottom = "none";
    nightLife.style.borderBottom = "2px solid rgb(253, 74, 74)";
    nightLifeImage.style.backgroundColor = "rgb(237, 244, 255)";
    deliveryImage.style.backgroundColor = "rgb(248, 248, 248)";
    diningOutImage.style.backgroundColor = "rgb(248, 248, 248)";
})

// filter box
var body = document.querySelector('body');
var filters = document.querySelector('.filters')
var filterBox = document.querySelector('.filter-box');
var allFilters = document.querySelector('.all-filters');
filterBox.addEventListener('click', function () {
    allFilters.style.display = 'block';
    // body.style.background = 'rgba(0, 0, 0, 0.4)';
    // filters.style.background = 'rgba(0, 0, 0, 0.3)';
    body.style.position = 'fixed';
})

var filterCloseButton = document.querySelector('.filter-close-icon');
filterCloseButton.addEventListener('click', () => {
    allFilters.style.display = 'none';
    body.style.background = 'none';
    body.style.position = 'static';
})

var sortByType = document.querySelector('.sort-by-type')
var popularityBox = document.querySelector('.popularity-box');
var ratingHighToLowBox = document.querySelector('.rating-high-to-low-box');
var deliveryTimeBox = document.querySelector('.delivery-time-box');
var costLowToHighBox = document.querySelector('.cost-low-to-high-box');
var costHighToLowBox = document.querySelector('.cost-high-to-low-box');

popularityBox.addEventListener('click', () => sortByType.textContent = 'Popularity');
ratingHighToLowBox.addEventListener('click', () => sortByType.textContent = 'Rating: High to Low');
deliveryTimeBox.addEventListener('click', () => sortByType.textContent = 'Delivery Time');
costLowToHighBox.addEventListener('click', () => sortByType.textContent = 'Cost: Low to High');
costHighToLowBox.addEventListener('click', () => sortByType.textContent = 'Cost: High to Low');

//only 1 input box should be clickable at one time
function handleCheckboxClick(checkboxId) {
    const checkboxes = document.querySelectorAll('.filter-option-box input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        if (checkbox.id !== checkboxId) {
            checkbox.checked = false;
        }
    })
}



var filter0 = document.querySelector('.filter-0');
var filter2 = document.querySelector('.filter-2');
var filter3 = document.querySelector('.filter-3');
var filter4 = document.querySelector('.filter-4');
var filter5 = document.querySelector('.filter-5')

var filter1Options = document.querySelector('.filter-1-options');
var filter2Options = document.querySelector('.filter-2-options');
var filter3Options = document.querySelector('.filter-3-options');
var filter4Options = document.querySelector('.filter-4-options');
var filter5Options = document.querySelector('.filter-5-options');

filter0.addEventListener('click', () => {
    filter1Options.style.display = 'block';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'white';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter2.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'flex';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'white';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter3.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'block';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'white';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter4.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'block';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'white';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter5.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'block';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'white';
})


// rating code
var ratingDisplay = document.querySelector('.rating-display');
var ratingAny = document.querySelector('.rate-circle-1');
var rating3_5 = document.querySelector('.rate-circle-2');
var rating4_0 = document.querySelector('.rate-circle-3');
var rating4_5 = document.querySelector('.rate-circle-4');

var rateLine1 = document.querySelector('.rate-line-1');
var rateLine2 = document.querySelector('.rate-line-2');
var rateLine3 = document.querySelector('.rate-line-3');

ratingAny.addEventListener('click', () => {
    ratingDisplay.textContent = 'Any';

    ratingAny.style.backgroundColor = 'rgb(226, 55, 68)';
    rateLine1.style.backgroundColor = 'rgb(226, 55, 68)';
    rating3_5.style.backgroundColor = 'rgb(226, 55, 68)';
    rateLine2.style.backgroundColor = 'rgb(226, 55, 68)';
    rating4_0.style.backgroundColor = 'rgb(226, 55, 68)';
    rateLine3.style.backgroundColor = 'rgb(226, 55, 68)';
    ratingAny.style.width = '1.2rem';
    ratingAny.style.height = '1.2rem';
    rating3_5.style.width = '1rem';
    rating3_5.style.height = '1rem';
    rating4_0.style.width = '1rem';
    rating4_0.style.height = '1rem';
    rating4_5.style.width = '1rem';
    rating4_5.style.height = '1rem';
})

rating3_5.addEventListener('click', () => {
    ratingDisplay.textContent = '3.5+';
    if (window.getComputedStyle(rating3_5).backgroundColor == 'rgb(226, 55, 68)') {
        ratingAny.style.backgroundColor = 'rgb(232, 232, 232)';
        rateLine1.style.backgroundColor = 'rgb(232, 232, 232)';
        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1.2rem';
        rating3_5.style.height = '1.2rem';
    }
    else {
        rating3_5.style.backgroundColor = 'rgb(226, 55, 68)';
        rateLine2.style.backgroundColor = 'rgb(226, 55, 68)';
        rating4_0.style.backgroundColor = 'rgb(226, 55, 68)';
        rateLine3.style.backgroundColor = 'rgb(226, 55, 68)';
        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1.2rem';
        rating3_5.style.height = '1.2rem';
        rating4_0.style.width = '1rem';
        rating4_0.style.height = '1rem';
        rating4_5.style.width = '1rem';
        rating4_5.style.height = '1rem';
    }


})

rating4_0.addEventListener('click', () => {
    ratingDisplay.textContent = '4.0+';

    if (window.getComputedStyle(rating4_0).backgroundColor === 'rgb(226, 55, 68)') {
        ratingAny.style.backgroundColor = 'rgb(232, 232, 232)';
        rateLine1.style.backgroundColor = 'rgb(232, 232, 232)';
        rating3_5.style.backgroundColor = 'rgb(232, 232, 232)';
        rateLine2.style.backgroundColor = 'rgb(232, 232, 232)';


        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1rem';
        rating3_5.style.height = '1rem';
        rating4_0.style.width = '1.2rem';
        rating4_0.style.height = '1.2rem';
    }
    else {
        rating4_0.style.backgroundColor = 'rgb(226, 55, 68)';
        rateLine3.style.backgroundColor = 'rgb(226, 55, 68)';
        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1rem';
        rating3_5.style.height = '1rem';
        rating4_0.style.width = '1.2rem';
        rating4_0.style.height = '1.2rem';
        rating4_5.style.width = '1rem';
        rating4_5.style.height = '1rem';
    }


})

rating4_5.addEventListener('click', () => {
    ratingDisplay.textContent = '4.5+';

    ratingAny.style.backgroundColor = 'rgb(232, 232, 232)';
    rateLine1.style.backgroundColor = 'rgb(232, 232, 232)';
    rating3_5.style.backgroundColor = 'rgb(232, 232, 232)';
    rateLine2.style.backgroundColor = 'rgb(232, 232, 232)';
    rating4_0.style.backgroundColor = 'rgb(232, 232, 232)';
    rateLine3.style.backgroundColor = 'rgb(232, 232, 232)';
    ratingAny.style.width = '1rem';
    ratingAny.style.height = '1rem';
    rating3_5.style.width = '1rem';
    rating3_5.style.height = '1rem';
    rating4_0.style.width = '1rem';
    rating4_0.style.height = '1rem';

    rating4_5.style.width = '1.2rem';
    rating4_5.style.height = '1.2rem';

})

//cost filter code


// cuisines display

var cuisines = [
    'Abruzzese', 'Aceh', 'Aegean', 'Afghan', 'Afghani', 'African',
    'Bakery', 'BBQ', 'Bengali', 'Bihari', 'Biryani', 'Burger',
    'Cake', 'Chinese', 'Coffee', 'Curry', 'Desserts', 'Dimsum',
    'French', 'Fish', 'Fried Chicken', 'Gujrati', 'Healthy Food', 'Hot Dogs',
    'Ice Cream', 'Indian', 'Japanese', 'Juices', 'Kashmiri', 'Kebab',
    'Korean', 'Momos', 'Mughlai', 'Paan', 'Pancake', 'Pasta',
    'Pastry', 'Pizza', 'Rajasthani', 'Roast Chicken', 'Rolls', 'Salad',
    'Sandwich', 'Seafood', 'Shake', 'Singaporean', 'Snacks', 'Sushi',
    'Tea', 'Thai', 'Tibetan', 'Turkish Pizza', 'Vegetarian', 'Waffle',
    'Yum Cha', 'Zambian'
]

var filter2OptionsCategoriesContainers = document.querySelector('.filter-2-options-categories-containers');
cuisines.forEach((item, idx) => {
    var box1 = document.createElement('div');
    box1.classList.add('box-1');

    var circle = document.createElement('div');
    circle.classList.add('circle');

    var circleContent = document.createElement('div');
    circleContent.classList.add('circle-content');

    circle.innerHTML = "";
    circleContent.textContent = item;

    box1.appendChild(circle);
    box1.appendChild(circleContent);

    filter2OptionsCategoriesContainers.appendChild(box1);

    var box = 1;
    box1.addEventListener('click', () => {
        if (box == 1) {
            circle.style.backgroundColor = 'rgb(239, 79, 95)';
            box = 0;
        } else {
            circle.style.backgroundColor = 'white';
            box = 1;
        }

    })
}

)

// show delivery restaurants code
var deliveryRestaurants = [
    {
        img: './assets/food/Al_zameer_rest.avif',
        discount: '40% OFF',
        restaurantName: 'Al Zameer',
        rating: '4.1',
        cuisine: 'North Indian, Mughlai',
        price: '₹150 for one',
        delieveryTime: '26 mins',
    },
    {
        img: './assets/food/bhaghat_halwai.avif',
        discount: '30% OFF',
        restaurantName: 'Bhaghat Halwai',
        rating: '4.3',
        cuisine: 'Street Food, Fast Food, Pizza, Sandwich, Chinese, South Indian, Shake, Beverages',
        price: '₹100 for one',
        delieveryTime: '35 mins',
    },
    {
        img: './assets/food/bhawna_sweets.avif',
        discount: '45% OFF',
        restaurantName: 'Bhawna Sweets',
        rating: '4.5',
        cuisine: 'Mithai, Desserts, Bakery',
        price: '₹300 for one',
        delieveryTime: '5 mins',
    },
    {
        img: './assets/food/Bikanerwala.avif',
        discount: '30% OFF',
        restaurantName: 'Bikanerwala',
        rating: '4.5',
        cuisine: 'Street Food, North Indian, Chinese, Mithai, South Indian, Fast Food, Desserts, Beverages',
        price: '₹200 for one',
        delieveryTime: '15 mins',
    },
    {
        img: './assets/food/Biryani_hotspot.avif',
        discount: '15% OFF',
        restaurantName: 'Biryani Hotspot',
        rating: '3.5',
        cuisine: 'Biryani, North Indian, Mughlai, Kebab',
        price: '₹350 for one',
        delieveryTime: '55 mins',
    },
    {
        img: './assets/food/cake_Company.avif',
        discount: '25% OFF',
        restaurantName: 'Cake Company',
        rating: '3.0',
        cuisine: 'Desserts, Bakery',
        price: '₹100 for one',
        delieveryTime: '20 mins',
    },
    {
        img: './assets/food/chopsticks.avif',
        discount: '45% OFF',
        restaurantName: 'Chopsticks',
        rating: '3.6',
        cuisine: 'Chinese, Momos, Fast Food, North Indian, Street Food',
        price: '₹100 for one',
        delieveryTime: '120 mins'
    },
    {
        img: './assets/food/karchi.avif',
        discount: '25% OFF',
        restaurantName: 'Karchi',
        rating: '5.0',
        cuisine: 'North Indian, Mughlai, Kebab, Biryani, Fast Food',
        price: '₹100 for one',
        delieveryTime: '90 mins',
    },
    {
        img: './assets/food/kfc.avif',
        discount: '35% OFF',
        restaurantName: 'KFC',
        rating: '3.9',
        cuisine: 'Burger, Fast Food, Biryani, Desserts, Beverages',
        price: '₹400 for one',
        delieveryTime: '30 mins',
    },
    {
        img: './assets/food/Kwality.avif',
        discount: '10% OFF',
        restaurantName: 'Kwality On Wheels',
        rating: '3.5',
        cuisine: 'North Indian, Chinese, Continental, Fast Food',
        price: '₹200 for one',
        delieveryTime: '60 mins',
    },
    {
        img: './assets/food/La_pinoz.avif',
        discount: '35% OFF',
        restaurantName: 'La Pinoz',
        rating: '4.9',
        cuisine: 'Pizza, Pasta, Italian, Fast Food',
        price: '₹200 for one',
        delieveryTime: '10 mins',
    },
    {
        img: './assets/food/Nazeer_foods.avif',
        discount: '15% OFF',
        restaurantName: 'Nazeer Foods',
        rating: '4.9',
        cuisine: 'North Indian, Fast Food, Biryani',
        price: '₹500 for one',
        delieveryTime: '50 mins',
    },
    {
        img: './assets/food/mcdonald.avif',
        discount: '10% OFF',
        restaurantName: 'Mcdonald',
        rating: '4.0',
        cuisine: 'Burger, Fast Food, Beverages',
        price: '₹300 for one',
        delieveryTime: '40 mins',
    },
    {
        img: './assets/food/royal_briyani.avif',
        discount: '10% OFF',
        restaurantName: 'Royal Briyani',
        rating: '4.0',
        cuisine: 'Biryani, Kebab, North Indian',
        price: '₹500 for one',
        delieveryTime: '45 mins',
    },
    {
        img: './assets/food/New_pizza_king.avif',
        discount: '20% OFF',
        restaurantName: 'New Pizza King',
        rating: '4.2',
        cuisine: 'Pizza',
        price: '₹400 for one',
        delieveryTime: '30 mins',
    },
    {
        img: './assets/food/pizzahut.avif',
        discount: '25% OFF',
        restaurantName: 'Pizzahut',
        rating: '3.0',
        cuisine: 'Pizza',
        price: '₹300 for one',
        delieveryTime: '55 mins',
    },
]
var deliveryRestaurantsContainer = document.querySelector('.deliveryRestaurants-container');

deliveryRestaurants.forEach((item, idx) => {
    var deliveryRestaurantsCard = document.createElement('div');
    deliveryRestaurantsCard.classList.add('deliveryRestaurants-card');

    var restaurantsImage = document.createElement('img');
    restaurantsImage.classList.add('foodImage');
    restaurantsImage.src = item.img;

    var discountContainer = document.createElement('div');
    discountContainer.classList.add('discount-container');

    var discountPercentage = document.createElement('p');
    discountPercentage.classList.add('discount-percentage');
    discountPercentage.textContent = item.discount;

    var deliveryRestaurantsDetails = document.createElement('div');
    deliveryRestaurantsDetails.classList.add('deliveryRestaurants-details');

    var deliveryRestaurantsName = document.createElement('div');
    deliveryRestaurantsName.classList.add('deliveryRestaurants-name');

    var restaurantName = document.createElement('b');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = item.restaurantName;

    var restaurantRatingContainer = document.createElement('div');
    restaurantRatingContainer.classList.add('restaurant-rating-container');


    var restaurantRating = document.createElement('b');
    restaurantRating.classList.add('restaurant-rating');
    restaurantRating.textContent = item.rating;

    var starIcon = document.createElement('p');
    starIcon.classList.add('star-icon')
    starIcon.innerHTML = '&#9734';
    starIcon.style.margin = '0 0 3px 2px'

    var cuisinePrice = document.createElement('div');
    cuisinePrice.classList.add('cuisine-price');

    var cuisine = document.createElement('p');
    cuisine.classList.add('cuisine');
    cuisine.textContent = item.cuisine;

    var price = document.createElement('div');
    price.classList.add('price');

    var priceForOne = document.createElement('p');
    priceForOne.classList.add('price-for-one');
    priceForOne.textContent = item.price;

    var time = document.createElement('div');
    time.classList.add('time');
    time.textContent = item.delieveryTime;

    var deliveryTime = document.createElement('b');
    deliveryTime.classList.add('delivery-time');

    deliveryRestaurantsCard.appendChild(restaurantsImage);
    discountContainer.appendChild(discountPercentage);
    deliveryRestaurantsCard.appendChild(discountContainer);

    deliveryRestaurantsName.appendChild(restaurantName);
    restaurantRatingContainer.appendChild(restaurantRating);
    restaurantRatingContainer.appendChild(starIcon);
    deliveryRestaurantsName.appendChild(restaurantRatingContainer);
    deliveryRestaurantsDetails.appendChild(deliveryRestaurantsName);

    cuisinePrice.appendChild(cuisine);
    price.appendChild(priceForOne);
    cuisinePrice.appendChild(price);
    deliveryRestaurantsDetails.appendChild(cuisinePrice);

    time.appendChild(deliveryTime);
    deliveryRestaurantsDetails.appendChild(time);

    deliveryRestaurantsCard.appendChild(deliveryRestaurantsDetails);

    deliveryRestaurantsContainer.appendChild(deliveryRestaurantsCard);

})

// footer code
var showCountry = document.querySelector('.show-country')
var countriesDropDown = document.querySelector('.countries-drop-down');
var showLanguages = document.querySelector('.show-language');
var languageDropDown = document.querySelector('.languages-drop-down')
var countiresAdded = false;



showCountry.addEventListener('click', () => {
    if (countriesDropDown.style.display === 'block') {
        countriesDropDown.style.display = 'none';
    } else {
        if (languageDropDown.style.display === 'block') {
            languageDropDown.style.display = 'none';
        }
        if (!countiresAdded) {
            countiresWithFlagName();
            countiresAdded = true;
        }

        countriesDropDown.style.display = 'block';
    }
})

var languagesAdded = false;
showLanguages.addEventListener('click', () => {
    if (languageDropDown.style.display === 'block') {
        languageDropDown.style.display = 'none';
    } else {
        if (countriesDropDown.style.display == 'block') {
            countriesDropDown.style.display = 'none';
        }
        if (!languagesAdded) {
            language();
            languagesAdded = true;
        }

        languageDropDown.style.display = 'block';
    }
})

//drop down for countires
var mainCountryName = document.querySelector('.country-name');
var countryFlag = document.querySelector('.country-flag')
function countiresWithFlagName() {


    var countries = [
        { src: './assets/icons/flags/Australia.png', countryName: 'Australia' },
        { src: './assets/icons/flags/Bahrain.png', countryName: 'Bahrain' },
        { src: './assets/icons/flags/Chile.png', countryName: 'Chile' },
        { src: './assets/icons/flags/Egypt.png', countryName: 'Egypt' },
        { src: './assets/icons/flags/Greece.png', countryName: 'Greece' },
        { src: './assets/icons/flags/India.png', countryName: 'India' },
        { src: './assets/icons/flags/Ireland.png', countryName: 'Ireland' },
        { src: './assets/icons/flags/Italy.png', countryName: 'Italy' },
        { src: './assets/icons/flags/japan.png', countryName: 'Japan' },
        { src: './assets/icons/flags/Jordan.png', countryName: 'Jordan' },
        { src: './assets/icons/flags/Kuwait.png', countryName: 'Kuwait' },
        { src: './assets/icons/flags/Malaysia.png', countryName: 'Malaysia' },
        { src: './assets/icons/flags/New Zealand.png', countryName: 'New Zealand' },
        { src: './assets/icons/flags/Peru.png', countryName: 'Peru' },
        { src: './assets/icons/flags/Romania.png', countryName: 'Romania' },
        { src: './assets/icons/flags/Saudi Arabia.png', countryName: 'Saudi Arabia' },
        { src: './assets/icons/flags/Switzerland.png', countryName: 'Switzerland' },
        { src: './assets/icons/flags/uk.png', countryName: 'UK' },
        { src: './assets/icons/flags/Vietnam.png', countryName: 'Vietnam' },
        { src: './assets/icons/flags/Yemen.png', countryName: 'Yemen' },
    ]


    function displayData(item, idx) {

        var countriesDropDownContainer = document.querySelector('.countries-drop-down-container');

        var flagWithName = document.createElement('div');
        flagWithName.classList.add('flag-with-name')

        var flagImage = document.createElement('img');
        var countryName = document.createElement('p');

        flagImage.src = item.src;
        countryName.textContent = item.countryName;

        flagWithName.appendChild(flagImage);
        flagWithName.appendChild(countryName);

        countriesDropDownContainer.appendChild(flagWithName);

        flagWithName.addEventListener('click', function () {
            countryFlag.setAttribute('src', flagImage.src)
            mainCountryName.textContent = flagWithName.textContent;

            countriesDropDown.style.display = 'none';
        })
    }


    countries.forEach((item, idx) => {
        displayData(item, idx)
    })
}

//drop down for languages
var showLanguageOnLanguageBox = document.querySelector('.show-language-on-language-box');
function language() {
    var languages = ['English', 'Türkçe', 'हिंदी', 'Português(BR)', 'Indonesian', 'Português(PT)', 'Español', 'Čeština', 'Slovenčina', 'Polish', 'Italian', 'Vietnamese']

    function displayData(item, idx) {

        var languagesDropDownContainer = document.querySelector('.languages-drop-down-container');

        var languagesWithName = document.createElement('div');
        languagesWithName.classList.add('language-with-name')

        var languagesName = document.createElement('p');
        languagesName.textContent = item;

        languagesWithName.appendChild(languagesName);

        languagesDropDownContainer.appendChild(languagesWithName);

        languagesName.addEventListener('click', function () {
            showLanguageOnLanguageBox.textContent = languagesName.textContent;
            languageDropDown.style.display = 'none';
        })
    }


    languages.forEach((item, idx) => {
        displayData(item, idx)
    })
}


// order on app notfication close
var footerDisclaimerSM = document.querySelector('.footer-disclaimer-sm');
var footerDisclaimerClose = document.querySelector('.close-notification')

footerDisclaimerClose.addEventListener('click', () => {
    footerDisclaimerSM.style.display = 'none';
})