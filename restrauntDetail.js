document.addEventListener('DOMContentLoaded', function () {
    selectedRestauraunt = JSON.parse(localStorage.getItem('selectedRestauraunt'));
    console.log(selectedRestauraunt);

    //Fetching the City name from URL
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);
    const cityValue = params.get("city");
    const restaurantValue = params.get("restaurant");
    const capitalizedCity = cityValue.charAt(0).toUpperCase() + cityValue.slice(1);
    const restaurantName = restaurantValue.charAt(0).toUpperCase() + restaurantValue.slice(1);


    //Adding City Name wherever necessary
    var cityName = document.querySelector('.city-name');
    cityName.textContent = capitalizedCity;
    var cityNameInBreadcrumb = document.querySelector('.city-name-in-breadcrumb');
    cityNameInBreadcrumb.textContent = capitalizedCity;
    var restaurantNameInBreadcrumb = document.querySelector('.restaurant-name-in-breadcrumb');
    restaurantNameInBreadcrumb.textContent = restaurantName;
    // var deliveryRestaurantsHeaderCityName = document.querySelector('.deliveryRestaurants-Header-city-name');
    // deliveryRestaurantsHeaderCityName.textContent = capitalizedCity;

    // document.addEventListener('DOMContentLoaded', function () {
    //     var pageTitle = document.querySelector('.pageTitle');
    //     pageTitle.textContent += capitalizedCity;
    // })


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

    // page name on dom load
    var restaurantPageTitle = document.querySelector('.restaurant-page-title');
    restaurantPageTitle.textContent += restaurantName + ', ' + capitalizedCity;


    // makes search container visible on scroll in small screens
    window.addEventListener('scroll', function () {
        var dishContainer = document.querySelector('.dish-sm');
        var deliveryDiningContainerSM = document.querySelector('.delivery-dining-container-sm')
        var scrollPosition = window.scrollY;
        if (scrollPosition > 150) {
            dishContainer.style.display = 'block';
            deliveryDiningContainerSM.style.display = 'none';
        }
        else {
            dishContainer.style.display = 'none';
            deliveryDiningContainerSM.style.display = 'flex';
        }
    })


    // display restaurants images
    const [
        {
            restaurantImg1: restaurantImg1
        },
        {
            restaurantImg2: restaurantImg2
        },
        {
            restaurantImg3: restaurantImg3
        }
    ] = selectedRestauraunt.restaurantImgs;

    restaurantImg01 = restaurantImg1 !== '' ? restaurantImg1 : './assets/food/restaurant imgs/defaultRestrauntImage.webp'
    restaurantImg02 = restaurantImg2 !== '' ? restaurantImg2 : './assets/food/restaurant imgs/defaultRestrauntImage.webp'
    restaurantImg03 = restaurantImg3 !== '' ? restaurantImg3 : './assets/food/restaurant imgs/defaultRestrauntImage.webp'


    var restaurantImagesContainer = document.querySelector('.restaurant-images-container');

    var restaurantImageLeft = document.createElement('div');
    restaurantImageLeft.classList.add('restaurant-image-left');
    var restaurantImageLeftImg = document.createElement('img');
    restaurantImageLeftImg.src = restaurantImg01;
    restaurantImageLeft.appendChild(restaurantImageLeftImg);
    restaurantImagesContainer.appendChild(restaurantImageLeft);

    var restaurantImageCentre = document.createElement('div');
    restaurantImageCentre.classList.add('restaurant-image-centre');
    var restaurantImageCentreTop = document.createElement('div');
    restaurantImageCentreTop.classList.add('restaurant-image-centre-top');
    var restaurantImageCentreTopImg = document.createElement('img');
    restaurantImageCentreTopImg.src = restaurantImg02;
    restaurantImageCentreTop.appendChild(restaurantImageCentreTopImg);
    restaurantImageCentre.appendChild(restaurantImageCentreTop);

    var restaurantImageCentreBottom = document.createElement('div');
    restaurantImageCentreBottom.classList.add('restaurant-image-centre-bottom');
    var restaurantImageCentreBottomImg = document.createElement('img');
    restaurantImageCentreBottomImg.src = restaurantImg03;
    restaurantImageCentreBottom.appendChild(restaurantImageCentreBottomImg);
    restaurantImageCentre.appendChild(restaurantImageCentreBottom);
    restaurantImagesContainer.appendChild(restaurantImageCentre)

    var restaurantImageRight = document.createElement('div');
    restaurantImageRight.classList.add('restaurant-image-right');
    var restaurantImageRightImg = document.createElement('img');
    restaurantImageRightImg.src = './assets/food/restaurant imgs/view gallery image.avif';
    var viewgalleryText = document.createElement('p');
    viewgalleryText.classList.add('viewgallery');
    viewgalleryText.textContent = "View Gallery"
    restaurantImageRight.appendChild(restaurantImageRightImg);
    restaurantImageRight.appendChild(viewgalleryText);
    restaurantImageCentre.appendChild(restaurantImageRight);
    restaurantImagesContainer.appendChild(restaurantImageRight);


    //display hotel detail functionality
    var hotelName = document.querySelector('.hotel-name');
    hotelName.textContent = selectedRestauraunt.restaurantName;

    var diningRating = document.querySelector('.dining-rating');
    diningRating.textContent = selectedRestauraunt.rating;

    var cuisines = document.querySelector('.cuisines');
    cuisines.textContent = selectedRestauraunt.cuisine;

    var cityLocation = document.querySelector('.city-location');
    cityLocation.textContent = capitalizedCity;

    // more info functionlaity

    var reviewContainer = document.querySelector('.review-container');
    var timingsContainer = document.querySelector('.timings-container');
    var directionBookmarkShareContainer = document.querySelector('.direction-bookmark-share-container');
    var restaurantImagesContainer = document.querySelector('.restaurant-images-container');
    var restaurantImageLeft = document.querySelector('.restaurant-image-left');

    var moreInfoLink = document.querySelector('.more-info-link');
    moreInfoLink.addEventListener('click', () => {
        moreInfoLink.style.display = 'none';
        reviewContainer.style.display = 'flex';
        timingsContainer.style.display = 'flex';
        directionBookmarkShareContainer.style.display = 'flex';
        restaurantImagesContainer.style.display = 'flex';
        restaurantImageLeft.style.display = 'flex';
    })

    // restaurant options
    var overview = document.querySelector('.overview');
    var orderOnline = document.querySelector('.order-online');
    var reviews = document.querySelector('.reviews');
    var photos = document.querySelector('.photos');
    var menu = document.querySelector('.menu');
    orderOnline.style.color = "red";

    overview.addEventListener('click', () => {
        overview.style.borderBottom = "3px solid red";
        overview.style.color = 'red';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    orderOnline.addEventListener('click', () => {
        orderOnline.style.borderBottom = "3px solid red";
        orderOnline.style.color = "red";
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    reviews.addEventListener('click', () => {
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "3px solid red";
        reviews.style.color = 'red';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    photos.addEventListener('click', () => {
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "3px solid red";
        photos.style.color = 'red';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    menu.addEventListener('click', () => {
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "3px solid red";
        menu.style.color = 'red';
    })

    // cusines options
    // console.log(selectedRestauraunt.food);
    const cuisineMap = new Map();
    selectedRestauraunt.food.forEach(category => {
        const cuisineName = Object.keys(category)[0];
        const cusineCount = category[cuisineName].length;
        cuisineMap.set(cuisineName, cusineCount);
    });
    var orderOnlineOptions = document.querySelector('.order-online-options');
    cuisineMap.forEach((key, value) => {
        var cuisineCountHTML = document.createElement('b');
        cuisineCountHTML.classList.add('cuisine-count');
        cuisineCountHTML.textContent = ' ' + '(' + key + ')';

        var cusineNameHTML = document.createElement('p');
        cusineNameHTML.classList.add('cuisine-name');
        cusineNameHTML.textContent = value;

        cusineNameHTML.appendChild(cuisineCountHTML);
        orderOnlineOptions.append(cusineNameHTML);
    })





    // clearing the item from localStorage once it's retrieved
    // localStorage.removeItem('selectedRestauraunt');
});
