$(document).ready(function() {
    // Get the current path of the page
    var currentPath = window.location.pathname;
    const paths = currentPath.split("/");
    currentPath = "/" + paths[1];
    // Loop through each link in the navbar
    $('nav.navbar a').each(function() {
      // Get the href attribute of the link
      var linkPath = $(this).attr('href');
  
      // Check if the current path matches the link's path
      if (currentPath === linkPath) {
        // Add the "active" class to the parent list item
        $(this).closest('li').addClass('active');
      } else {
        // Remove the "active" class from the parent list item
        $(this).closest('li').removeClass('active');
      }
    });
  });
  