jQuery(document).ready(() => {
  jQuery(".weeks").on("click", () => {
    jQuery(event.currentTarget)
      .siblings()
      .slideDown("fast");
  });

  jQuery("li").on("click", () => {
    jQuery(event.currentTarget).slideUp("fast");
  });
});
