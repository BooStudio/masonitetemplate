/* Mix provides a clean, fluent API for defining some Webpack build steps for your Masonite
applications. By default, we are compiling the CSS file for the application as well as
bundling up all the JS files. */
const mix = require("laravel-mix");
const path = require("path");
require("mix-tailwindcss");

mix.js("resources/js/app.js", "storage/public/js")
    .sass("resources/css/app.scss", "storage/public/css")
    .vue()
    .version();

// ensure root directory of mix is project root
mix.setPublicPath(".");

// add an alias to js code
mix.alias({
    "@": path.resolve("resources/js/"),
});

// add version hash in production
if (mix.inProduction()) {
    mix.version();
}
// Disable compilation success notification
mix.disableSuccessNotifications();
