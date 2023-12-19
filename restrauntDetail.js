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
        var deliveryDiningContainerSM = document.querySelector('.delivery-dining-container-sm');
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
    const cuisineMap = new Map();
    selectedRestauraunt.food.forEach(category => {
        const cuisineName = Object.keys(category)[0];
        const cusineCount = category[cuisineName].length;
        cuisineMap.set(cuisineName, cusineCount);
    });
    var orderOnlineOptions = document.querySelector('.order-online-options');
    cuisineMap.forEach((key, value1) => {
        var cuisineCountHTML = document.createElement('b');
        cuisineCountHTML.classList.add('cuisine-count');

        cuisineCountHTML.textContent = ' ' + '(' + key + ')';

        var cusineNameHTML = document.createElement('p');
        cusineNameHTML.classList.add('cuisine-name', 'cuisine-name-small-screen');
        cusineNameHTML.textContent = value1;
        cusineNameHTML.setAttribute('id', value1 + '1');
        cusineNameHTML.appendChild(cuisineCountHTML);
        orderOnlineOptions.append(cusineNameHTML);

        //scroll into view

        var screenWidth = window.innerWidth || document.documentElement.clientWidth;

        if (screenWidth <= 450) {
            var orderOnlineOptionsId = document.getElementById('order-online-options-id');
            console.log(orderOnlineOptionsId);
            orderOnlineOptionsId.classList.remove('order-online-options');
            orderOnlineOptionsId.classList.add('order-online-options-smallScreen');

            document.querySelector('.cuisine-count').remove();
            document.querySelector('.cuisine-name-small-screen').classList.remove('cuisine-name');
        }


        cusineNameHTML.addEventListener('click', () => {

            var cuisineNames = document.querySelectorAll('.cuisine-name');
            cuisineNames.forEach(function (item) {
                item.style.color = 'black';
                item.style.borderRight = "none";
                item.style.background = "none";
            })

            var cuisineName = document.getElementById(`${value1}1`);
            cuisineName.style.color = "red";
            cuisineName.style.borderRight = "3px solid rgb(239, 79, 95)";
            cuisineName.style.background = "linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 237, 239))";
            document.getElementById(value1).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });

    })




    //pure veg box display
    var vegOnlyContainer = document.querySelector('.veg-only-container');
    if (selectedRestauraunt.veg === false) {
        vegOnlyContainer.style.display = 'flex';
    }
    else {
        vegOnlyContainer.style.display = 'none';
    }

    //display dish details
    var onlineDishes = document.querySelector('.online-dishes');

    selectedRestauraunt.food.forEach((category) => {
        Object.entries(category).forEach(([categoryName, dishes]) => {
            var onlineDishContainer = document.createElement('div');
            onlineDishContainer.classList.add('online-dish-container');

            var leftCuisineName = document.createElement('h3');
            leftCuisineName.classList.add('left-cuisine-name');
            leftCuisineName.textContent = categoryName;
            leftCuisineName.setAttribute('id', categoryName);

            onlineDishContainer.appendChild(leftCuisineName);
            onlineDishes.appendChild(onlineDishContainer)
            dishes.forEach((dish, index) => {
                var dishContainer = document.createElement('div');
                dishContainer.classList.add('dish-container-new');

                //dish image
                var dishImgContainer = document.createElement('div');
                dishImgContainer.classList.add('dish-img-container');

                var dishImage = document.createElement('img');
                dishImage.classList.add('dish-img');
                dishImage.src = dish.foodImg;

                dishImgContainer.appendChild(dishImage);
                dishContainer.appendChild(dishImgContainer);

                //dish name
                var dishDetails = document.createElement('div');
                dishDetails.classList.add('dish-details');
                var dishName = document.createElement('p');
                dishName.classList.add('dishname');
                dishName.textContent = dish.foodName
                dishDetails.appendChild(dishName);


                //dish rating rating-votes
                var ratingVotes = document.createElement('div');
                ratingVotes.classList.add('rating-votes');

                var rating = document.createElement('div');
                rating.classList.add('rating');

                //dispay stars basd on food rating
                rates = dish.foodRating;
                halfRate = dish.foodRating / 10;

                if (!rates) {
                    var noRating = document.createElement('p');
                    noRating.textContent = 'No Rating';
                    rating.appendChild(noRating);
                }
                for (var i = 1; i < rates; i++) {
                    var starImg = document.createElement('img');
                    starImg.src = './assets/icons/full-yellow-star (1).png';
                    rating.appendChild(starImg);
                }
                if (halfRate) {
                    var starImg = document.createElement('img');
                    starImg.src = './assets/icons/half-yellow-star.png';
                    rating.appendChild(starImg);
                }
                ratingVotes.appendChild(rating);

                var votes = document.createElement('p');
                votes.classList.add('votes');
                votes.textContent = dish.foodVote;
                ratingVotes.appendChild(votes);
                dishDetails.appendChild(ratingVotes);

                //dish cost
                var dishCost = document.createElement('p');
                dishCost.classList.add('dish-cost');
                dishCost.textContent = dish.foodPrice;
                dishDetails.appendChild(dishCost);

                //dish contains
                var dishMadeFrom = document.createElement('p');
                dishMadeFrom.classList.add('dish-made-from');
                dishMadeFrom.textContent = dish.foodDescription;
                dishDetails.appendChild(dishMadeFrom);

                //Add button
                var addButton = document.createElement('div');
                addButton.classList.add('add-button');

                var addText = document.createElement('b');
                // addText.style.fontWeight = '100';
                addText.textContent = 'Add';
                addButton.appendChild(addText)

                var addSign = document.createElement('p');
                addSign.innerText = '+';
                addButton.appendChild(addSign)
                dishDetails.appendChild(addButton);

                // Remove button
                var addRemoveButton = document.createElement('div');
                addRemoveButton.classList.add('add-remove-button');

                var addSign = document.createElement('p');
                addSign.innerText = '+';
                addRemoveButton.appendChild(addSign)


                var countText = document.createElement('b');
                countText.classList.add('count');
                countText.style.fontWeight = '100';
                countText.textContent = '1';
                addRemoveButton.appendChild(countText);

                var subSign = document.createElement('p');
                subSign.innerText = '-';
                subSign.style.marginBottom = '0.3rem';
                addRemoveButton.appendChild(subSign);
                dishDetails.appendChild(addRemoveButton);

                //all appended
                dishContainer.appendChild(dishDetails);
                onlineDishContainer.appendChild(dishContainer);
                onlineDishes.appendChild(onlineDishContainer)
            })
        })

    })


    // clearing the item from localStorage once it's retrieved
    // localStorage.removeItem('selectedRestauraunt');
});
