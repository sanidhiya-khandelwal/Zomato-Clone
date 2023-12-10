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























    // clearing the item from localStorage once it's retrieved
    // localStorage.removeItem('selectedRestauraunt');
});
