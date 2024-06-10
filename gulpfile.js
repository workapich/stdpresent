const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css/"));
}

function watchFiles() {
  watch("./sass/*.scss", css);
}

exports.buildCss = css;
exports.watch = series(css, watchFiles);
