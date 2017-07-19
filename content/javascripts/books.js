window.addEventListener("load", function(){

    var books = {
        '#pl': [
            {'name': 'Structure and Interpretation of Computer Programs (Scheme)',
             'id': 'sicp',
             'desc': 'Covers data structures, interpreters, functional programming, abstraction design, OOP, type heirachies, immutability, collections, and lazy streams. Instead of just providing text on those, it makes you build them using 350+ exercises. One of my highest recommendations. My opinion is that all serious professional programers who want to improve their skills in any language should work through this book.'
            },
            {'name': 'Programming Languages - Application And Interpretation (Typed Racket)',
             'id': 'pl',
             'desc': 'A deep dive on interpreters and language building. While reading the book, the exercises were converted from Racket to Typed Racket, which gave me a fascinating view on the value of a good type system for keeping a complex domain easy to understand.'
            },
            {'name': 'Haskell Programming From First Principles',
             'id': 'hpffp',
             'desc': 'An intro to Haskell AND an intro to programming with very gently sloping difficulty curve and exercises! I believe this is a fantastic book for the learner desiring more in Haskell or even starting programming for the first time.'
            },
            {'name': 'Let Over Lambda (Common Lisp, Forth)',
             'id': 'lol',
             'desc': 'No book has made me sit back and hold my pounding head more than Let Over Lambda. A deep dive into lisp macros, both reader and anaphoric. The final project is remaking Forth inside Common Lisp using macros. Yeah, you read that right.'
            },
            {'name': 'Clojure Programming',
             'id': 'cp',
             'desc': 'My favorite Clojure book of the three I have read. A great introduction to the language.'},
            {'name': 'F# 3.0',
             'id': 'fsharp',
             'desc': 'My favorite F# book of the several I have read. Recommended for anyone wanting to dive more into the language.'},
            {'name': 'Haskell And Yesod',
             'id': 'hay',
             'desc': 'I tried to read this book without any Haskell experience. Four years later I finished it, after stopping and starting it several times to learn more Haskell fundamentals. By the end, I had a much better grasp of the different ways the Haskell type system could be used to represent complex domains. The domains of CSS, JS, and HTML are all modeled in the type system in type-safe models.'},
            {'name': 'Javascript the Good Parts',
             'id': 'jstgp',
             'desc': 'A short book. Nuff\' said ;). I joke, this is an ESSENTIAL read for anyone who ever writes Javascript.'},
            {'name': 'Learn You a Haskell',
             'id': 'lyah',
             'desc': 'A short, humorous survey of a lot of Haskell. Afterwards, I really needed more substance and exercises to solidify my knowledge, but it helped me to get over my fear of spooky Haskell.'},
            {'name': 'Software Foundations (Coq)',
             'id': 'sfs',
             'desc': 'I am in the middle this book\'s exercises, but so far it is amazing. I cannot in good faith give it a bold recommendation until I have finished it, but right now it is tied with Let Over Lambda for mind-bending concepts. Until you have represented numbers as cons cells, which you then use to prove the commutivity of multiplication IN the type system, you haven\'t really felt brain pain ;)'},
            {'name': 'The Art of SQL',
             'id': 'taos',
             'desc': 'A great resource for learning the deeper parts of SQL.'}
        ],

        '#peep': [
            {'name': 'Reinventing Organizations',
             'id': 'reinvorg',
             'desc': 'Twelve case studies of companies who "self-regulate" and how they do it. These companies have fewer meetings, fewer managers, and report higher job satisfaction than their peer companies. The book finds trends in all tweleve and offers some suggestions for how to implement those trends. Ultimately a simple conclusion, but hard to put into practice. I found it indispensible for maintaining and improving a self-organizing team.'
            },

            {'name': 'Peopleware',
             'id': 'peopleware',
             'desc': 'A collection of many different bodies of research all composed into a straighforward and easy read. While the book doesn\'t dive too deep, it offers a lot of wisdom. Manditory reading for managers, and highly recommended for all developers.'
            },

            {'name': 'Good To Great',
             'id': 'goodtogreat',
             'desc': 'A set of case studies around companies that out-performed their competition and what trends made them different. In all cases it was servant leadership that was the defining factor. Has influenced my leadership styles immesurably.'
            },

            {'name': 'Becoming A Technical Leader',
             'id': 'becomtechlead',
             'desc': 'A fine read on the various aspects of gaining the trust of the organization and your peers.'
            },

            {'name': 'Emotional Intelligence 2.0',
             'id': 'emointl',
             'desc': 'Useful for gaining the terminology useful for being a good servant leader. Helped me think more about how I deal with emotions and confrontations in the workplace.'
            },

            {'name': 'How to Win Friends and Influence People',
             'id': 'winfriends',
             'desc': 'A manditory read for it\'s length and value.'
            },

            {'name': 'Managing Humans',
             'id': 'manhum',
             'desc': 'A humorous and easy read of a lot of stories experienced by the author.'
            },
        ],

        '#proj':[
            {'name': 'Art of Agile Development',
             'id': 'artagile',
             'desc': ''
            },

            {'name': 'Death March',
             'id': 'deathm',
             'desc': ''
            },

            {'name': 'Extreme Programming Explained',
             'id': 'xpexp',
             'desc': ''
            },

            {'name': 'Managerial Accounting',
             'id': 'manacc',
             'desc': ''
            },

            {'name': 'Mythical Man Month',
             'id': 'mythman',
             'desc': ''
            },

            {'name': 'Planning Extreme Programming',
             'id': 'planxp',
             'desc': ''
            },
        ],

        '#product':[
            {'name': 'Code Complete',
             'id': 'codecomp',
             'desc': ''
            },

            {'name': 'Productive Programmer',
             'id': 'prodprog',
             'desc': ''
            },

            {'name': 'Growing Object-Oriented Software Guided by Tests',
             'id': 'goos',
             'desc': ''
            },

            {'name': 'Harry Potter and the Methods of Rationality &#8224;',
             'id': 'hpmor',
             'desc': ''
            },

            {'name': 'How to Read a Book &#8224;',
             'id': 'howread',
             'desc': ''
            },

            {'name': 'Pragmatic Programmer',
             'id': 'pragprog',
             'desc': ''
            },

            {'name': 'The Passionate Programmer',
             'id': 'passion',
             'desc': ''
            },

            {'name': 'Working Effectively with Legacy Code',
             'id': 'wfwlc',
             'desc': ''
            },
        ],

        '#patterns':[
            {'name': 'Clean Code',
             'id': 'clean',
             'desc': 'A short, useful book of common patterns to make code easier to read. Much of the content of this book has seeped into the public consciousness of the developer community, but still worth reading.'
            },

            {'name': 'Algorithm Design Manual',
             'id': 'adm',
             'desc': 'Required reading for anyone not familiar with the underlying algorithms that make up most searching and sorting library functions. Also a great reference manual for advanced, infrequent algorithms.'
            },

            {'name': 'Propagation Networks: A Flexible and Expressive Substrate for Computation',
             'id': 'propnet',
             'desc': 'Fascinating thesis on a novel way to design constraint solvers using electric circuits as an underlying model.'
            },

            {'name': 'Design Patterns',
             'id': 'despat',
             'desc': 'A dangerous book for developers, since most attempt to use the patterns to explain their whole codebase, often with many misapplications. I recommend you never try to apply a pattern found within, only identify places where it already exists and name them such. Most codebases might only have one or two, and attempting to force any others causes poor code. Yet the book is a necessary read to be able to clearly communicate with others who have read and adopted it.'
            },

            {'name': 'Domain Driven Design',
             'id': 'ddd',
             'desc': 'One of the most dangerous books on this list, I recommend most developers read this only when they are confident they will not be persuaded to implement the patterns within without serious reflection. Some of the worst code I have ever seen was written directly after reading this book, in attempt to apply its patterns.'
            },

            {'name': 'Implementing Domain Driven Design',
             'id': 'iddd',
             'desc': ''
            },

            {'name': 'Patterns of Enterprise Application Architecture',
             'id': 'poeaa',
             'desc': ''
            },

            {'name': 'Refactoring',
             'id': 'refa',
             'desc': ''
            }
        ],
    };

    var bookIconAndDescList = [];

    var showBookDesc = function(bookIconId, bookDescId) {
        $.map(bookIconAndDescList, function(bookIds) {
            hideBookDesc(bookIds.bookIconId, bookIds.bookDescId);
        });
        $("#" + bookIconId).removeClass();
        $("#" + bookIconId).addClass("icon fa fa-minus-square-o");
        $("#" + bookDescId).show();
    };

    var hideBookDesc = function(bookIconId, bookDescId) {
        $("#" + bookIconId).removeClass();
        $("#" + bookIconId).addClass("icon fa fa-plus-square-o");
        $("#" + bookDescId).hide();
    };

    $.map(Object.keys(books), function(plId) {
        var pl = $(plId);
        $.map(books[plId], function(book) {
            var description = book['desc'];
            if( description) {
                var bookId = "#c-" + book['id'];
                var bookDescId = "d-" + book['id'];
                var bookIconId = "i-" + book['id'];
                var desc = $('<p class="bookDesc" hidden="true" id="' + bookDescId + '">').append(description);
                var $book = $(bookId);
                $book.addClass("onHover bookList");
                $book.prepend($('<span id="' + bookIconId + '" class="icon fa fa-plus-square-o">'));
                $book.append(desc);

                bookIconAndDescList.push({'bookIconId':bookIconId, 'bookDescId':bookDescId});

                $book.click(function() {
                    var $bookDesc = $("#" + bookDescId);
                    bookIconAndDescList.push($bookDesc);
                    if($bookDesc.is(":visible")) {
                        hideBookDesc(bookIconId, bookDescId);
                    } else {
                        showBookDesc(bookIconId, bookDescId);
                    }
                });
            }
        });
    });


});
