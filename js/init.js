( function () {
    'use strict';

    Reveal.initialize( {
        width: '90%',
        height: '100%',
        controls: true,
        progress: true,
        history: true,
        center: true,
        slideNumber: true,
        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || 'slide', // none/fade/slide/convex/concave/zoom
        // Optional reveal.js plugins
        dependencies: [ {
            src: 'lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        }, {
            src: 'plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector( '[data-markdown]' );
            }
        }, {
            src: 'plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector( '[data-markdown]' );
            }
        }, {
            src: 'plugin/highlight/highlight.js',
            async: true,
            condition: function () {
                return !!document.querySelector( 'pre code' );
            },
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        }, {
            src: 'plugin/zoom-js/zoom.js',
            async: true
        }, {
            src: 'plugin/notes/notes.js',
            async: true
        } ]
    } );

} )();
