// Invoke Fallback JS to retrieve the following libraries for the page.
fallback.load({
    // LOAD CSS bootstrap_css: [
    // 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    // 'css/bootstrap.min.css' ], custom_css: 'css/custom.css', animate_css: [
    // 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
    // 'css/animate.min.css' ], LOAD JS
    'jQuery': [
        'https://code.jquery.com/jquery-3.3.1.slim.min.js', './js/jquery-3.3.1.slim.min.js'
    ],
    'Popper': [
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', './js/popper.min.js'
    ],
    '$("body").modal': ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js', './js/bootstrap.min.js']
}, {
    shim: {
        'Popper': ['jQuery'],
        '$("body").modal': ['Popper']
    },
    callback: function (success, failed) {
        console.log("loaded!");
    }
});