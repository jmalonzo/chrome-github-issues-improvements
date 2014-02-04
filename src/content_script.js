(function main() {
  var comments = $(".comment-body");
  comments.each(function(i, v) {
    if (v.children.length == 1 && $(v.children[0]).text().length < 3) {
      $(v.children[0]).parents(".timeline-comment-wrapper").hide();
    }
  });
})();

