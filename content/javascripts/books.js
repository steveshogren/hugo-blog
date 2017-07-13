window.addEventListener("load", function(){

    var books = {
        '#pl': [
            {'name': 'Structure and Interpretation of Computer Programs (Scheme)',
             'bold': true,
             'desc': 'A fantastic dive into interpreters, functional programming, abstraction design, OOP, immutability, collections, and lazy streams. Includes over 300 exercises you can use to further solidify the lessons. Everyone should work through this gem! '
            },
            {'name': 'Programming Languages - Application And Interpretation (Typed Racket)',
             'bold': true,
             'desc': ''
            },
            {'name': 'Haskell Programming From First Principles',
             'bold': true,
             'desc': ''
            },
            {'name': 'Let Over Lambda (Common Lisp, Forth)',
             'bold': true,
             'desc': ''
            },
            {'name': 'Clojure Programming',
             'bold': false,
             'desc': ''},
            {'name':  'F# 3.0',
             'bold': false,
             'desc': ''},
            {'name':                'Haskell And Yesod',
             'bold': false,
             'desc': ''},
            {'name':                'Javascript the Good Parts',
             'bold': false,
             'desc': ''},
            {'name':                'Learn You a Haskell',
             'bold': false,
             'desc': ''},
            {'name':                'Software Foundations (Coq)',
             'bold': false,
             'desc': ''},
            {'name':                'The Art of SQL',
             'bold': false,
             'desc': ''}
        ]
    };

    var pl = $("#pl");
    pl.empty();
    $.map(books['#pl'], function(book) {
        var name = book['name'];
        if (book['bold']) {
            name = $('<b>').append(name);
        }
        pl.append($('<li>').append(name));
    });
    // $( "#c-sicp" ).click(function() {
    //     $("#d-sicp").toggle();
    // });



});;
