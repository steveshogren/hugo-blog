window.addEventListener("load", function(){

    var books = {
        '#peep': [
            {'name': 'Reinventing Organizations',
             'id': 'reinvorg',
             'bold': true,
             'desc': 'Twelve case studies of companies who "self-regulate" and how they do it. These companies have fewer meetings, fewer managers, and report higher job satisfaction than their peer companies. The book finds trends in all tweleve and offers some suggestions for how to implement those trends. Ultimately a simple conclusion, but hard to put into practice. I found it indispensible for maintaining and improving a self-organizing team.'
            },

            {'name': 'Peopleware',
             'id': 'peopleware',
             'bold': true,
             'desc': 'A collection of many different bodies of research all composed into a straighforward and easy read. While the book doesn\'t dive too deep, it offers a lot of wisdom. Manditory reading for managers, and highly recommended for all developers.'
            },

            {'name': 'Good To Great',
             'id': 'goodtogreat',
             'bold': true,
             'desc': 'A set of case studies around companies that out-performed their competition and what trends made them different. In all cases it was servant leadership that was the defining factor. Has influenced my leadership styles immesurably.'
            },

            {'name': 'Becoming A Technical Leader',
             'id': 'becomtechlead',
             'bold': false,
             'desc': 'A fine read on the various aspects of gaining the trust of the organization and your peers.'
            },

            {'name': 'Emotional Intelligence 2.0',
             'id': 'emointl',
             'bold': false,
             'desc': 'Useful for gaining the terminology useful for being a good servant leader. Helped me think more about how I deal with emotions and confrontations in the workplace.'
            },

            {'name': 'How to Win Friends and Influence People',
             'id': 'winfriends',
             'bold': false,
             'desc': 'A manditory read for it\'s length and value.'
            },

            {'name': 'Managing Humans',
             'id': 'manhum',
             'bold': false,
             'desc': 'A humorous and easy read of a lot of stories experienced by the author.'
            },
        ],
        '#proj':[
            {'name': 'Art of Agile Development',
             'id': 'artagile',
             'bold': true,
             'desc': ''
            },

            {'name': 'Death March',
             'id': 'deathm',
             'bold': false,
             'desc': ''
            },

            {'name': 'Extreme Programming Explained',
             'id': 'xpexp',
             'bold': false,
             'desc': ''
            },

            {'name': 'Managerial Accounting',
             'id': 'manacc',
             'bold': false,
             'desc': ''
            },

            {'name': 'Mythical Man Month',
             'id': 'mythman',
             'bold': false,
             'desc': ''
            },

            {'name': 'Planning Extreme Programming',
             'id': 'planxp',
             'bold': false,
             'desc': ''
            },
        ],
        '#product':[
            {'name': 'Code Complete',
             'id': 'codecomp',
             'bold': true,
             'desc': ''
            },

            {'name': 'Productive Programmer',
             'id': 'prodprog',
             'bold': true,
             'desc': ''
            },

            {'name': 'Growing Object-Oriented Software Guided by Tests',
             'id': 'goos',
             'bold': false,
             'desc': ''
            },

            {'name': 'Harry Potter and the Methods of Rationality &#8224;',
             'id': 'hpmor',
             'bold': false,
             'desc': ''
            },

            {'name': 'How to Read a Book &#8224;',
             'id': 'howread',
             'bold': false,
             'desc': ''
            },

            {'name': 'Pragmatic Programmer',
             'id': 'pragprog',
             'bold': false,
             'desc': ''
            },

            {'name': 'The Passionate Programmer',
             'id': 'passion',
             'bold': false,
             'desc': ''
            },

            {'name': 'Working Effectively with Legacy Code',
             'id': 'wfwlc',
             'bold': false,
             'desc': ''
            },
        ],
        '#patterns':[
            {'name': 'Clean Code',
             'id': 'clean',
             'bold': true,
             'desc': ''
            },

            {'name': 'Algorithm Design Manual',
             'id': 'adm',
             'bold': true,
             'desc': 'Required reading for anyone not familiar with the underlying algorithms that make up most searching and sorting library functions. Also a great reference manual for advanced, infrequent algorithms.'
            },

            {'name': 'Propagation Networks: A Flexible and Expressive Substrate for Computation',
             'id': 'propnet',
             'bold': true,
             'desc': 'Fascinating whitepaper on a novel way to design constraint solvers using electric circuits as an underlying model.'
            },

            {'name': 'Design Patterns',
             'id': 'despat',
             'bold': false,
             'desc': 'Probably my least favorite book on this whole list, but still a necessary read to be able to clearly communicate with others who have read and adopted it. I think it is a dangerous book for developers, as they attempt to use the patterns to explain their whole codebase, often with many misapplications.'
            },

            {'name': 'Domain Driven Design',
             'id': 'ddd',
             'bold': false,
             'desc': ''
            },

            {'name': 'Implementing Domain Driven Design',
             'id': 'iddd',
             'bold': false,
             'desc': ''
            },

            {'name': 'Patterns of Enterprise Application Architecture',
             'id': 'poeaa',
             'bold': false,
             'desc': ''
            },

            {'name': 'Refactoring',
             'id': 'refa',
             'bold': false,
             'desc': ''
            }
        ],
        '#pl': [
            {'name': 'Structure and Interpretation of Computer Programs (Scheme)',
             'id': 'sicp',
             'bold': true,
             'desc': 'Covers data structures, interpreters, functional programming, abstraction design, OOP, type heirachies, immutability, collections, and lazy streams. Instead of just providing text on those, it makes you build them using 350+ exercises. One of my highest recommendations. My opinion is that all serious professional programers who want to improve their skills in any language should work through this book.'
            },
            {'name': 'Programming Languages - Application And Interpretation (Typed Racket)',
             'id': 'pl',
             'bold': true,
             'desc': 'A deep dive on interpreters and language building. While reading the book, the exercises were converted from Racket to Typed Racket, which gave me a fascinating view on the value of a good type system for keeping a complex domain easy to understand.'
            },
            {'name': 'Haskell Programming From First Principles',
             'id': 'hpffp',
             'bold': true,
             'desc': 'An intro to Haskell AND an intro to programming with very gently sloping difficulty curve and exercises! I believe this is a fantastic book for the learner desiring more in Haskell or even starting programming for the first time.'
            },
            {'name': 'Let Over Lambda (Common Lisp, Forth)',
             'id': 'lol',
             'bold': true,
             'desc': 'No book has made me sit back and hold my pounding head more than Let Over Lambda. A deep dive into lisp macros, both reader and anaphoric. The final project is remaking Forth inside Common Lisp using macros. Yeah, you read that right.'
            },
            {'name': 'Clojure Programming',
             'id': 'cp',
             'bold': false,
             'desc': 'My favorite Clojure book of the three I have read. A great introduction to the language.'},
            {'name': 'F# 3.0',
             'id': 'fsharp',
             'bold': false,
             'desc': 'My favorite F# book of the several I have read. Recommended for anyone wanting to dive more into the language.'},
            {'name': 'Haskell And Yesod',
             'id': 'hay',
             'bold': false,
             'desc': 'I tried to read this book without any Haskell experience. Four years later I finished it, after stopping and starting it several times to learn more Haskell fundamentals. By the end, I had a much better grasp of the different ways the Haskell type system could be used to represent complex domains. The domains of CSS, JS, and HTML are all modeled in the type system in type-safe models.'},
            {'name': 'Javascript the Good Parts',
             'id': 'jstgp',
             'bold': false,
             'desc': 'A short book. Nuff\' said ;). I joke, this is an ESSENTIAL read for anyone who ever writes Javascript.'},
            {'name': 'Learn You a Haskell',
             'id': 'lyah',
             'bold': false,
             'desc': 'A short, humorous survey of a lot of Haskell. Afterwards, I really needed more substance and exercises to solidify my knowledge, but it helped me to get over my fear of spooky Haskell.'},
            {'name': 'Software Foundations (Coq)',
             'id': 'sfs',
             'bold': false,
             'desc': 'I am in the middle this book\'s exercises, but so far it is amazing. I cannot in good faith give it a bold recommendation until I have finished it, but right now it is tied with Let Over Lambda for mind-bending concepts. Until you have represented numbers as cons cells, which you then use to prove the commutivity of multiplication IN the type system, you haven\'t really felt brain pain ;)'},
            {'name': 'The Art of SQL',
             'id': 'taos',
             'bold': false,
             'desc': 'A great resource for learning the deeper parts of SQL.'}
        ]
    };

    $.map(Object.keys(books), function(plId) {
        var pl = $(plId);
        pl.empty();
        $.map(books[plId], function(book) {
            var name = book['name'];
            if (book['bold']) {
                name = $('<b>').append(name);
            }
            var bookId = "c-" + book['id'];
            var bookDescId = "d-" + book['id'];

            var desc = $('<p hidden="true" id="' + bookDescId + '">').append(book['desc']);
            pl.append($("<li id='" + bookId + "'>")
                      .append(name)
                      .append(desc));

            $("#" + bookId).click(function() {
                $("#" + bookDescId).toggle();
            });
        });
    });


});
