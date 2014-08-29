
// in rssTmpl use element.content for inside of modal in READ MORE link
var rssTmpl = [
  "<% _.each(entry, function(element, index, list){ %>",
    "<div class=\"large-4 medium-4 small-12 columns blogSpace\">",
      "<article class=\"post\">",
        "<h2><%= element.title %></h2>",
          "<p class=\"postDate\"><%= element.publishedDate.substring(0,17) %></p>",
          "<p class=\"postContent\"><%= element.contentSnippet %></p>",
          "<div class=\"artLink\">",
            "<a href=\"<%= element.link %>\">[READ MORE]</a>",
          "</div>",
      "</article>",
    "</div>",
  "<% }); %>"
].join("\n")
