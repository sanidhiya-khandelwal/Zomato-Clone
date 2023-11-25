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
var filterBox = document.querySelector('.filter-box');
var allFilters = document.querySelector('.all-filters');
filterBox.addEventListener('click', function () {
    allFilters.style.display = 'block';
    body.style.background = 'rgba(0, 0, 0, 0.4)';
    body.style.position = 'fixed';
})

var filterCloseButton = document.querySelector('.filter-close-icon');
filterCloseButton.addEventListener('click', () => {
    allFilters.style.display = 'none';
    body.style.background = 'none';
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

// delivery restaurants code

var deliveryRestaurants = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}]


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

