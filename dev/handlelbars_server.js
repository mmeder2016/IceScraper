var express = require('express');
var exprhbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

var StoryList = [{
        _id: "58af5f4f4d2a1814e8b3c48a",
        headline: 'Conservative leaders to celebrate, show tension of Trump’s America',
        link: 'https://www.washingtonpost.com/powerpost/trumps-america-will-be-on-vivid-display-at-annual-conservative-gathering/2017/02/21/071db726-f7a5-11e6-9845-576c69081518_story.html',
        __v: 0,
        comments: [{
                _id: "58af5f764d2a1814e8b3c490",
                body: "mike was here one 11",
                __v: 0
            },
            {
                _id: "58af60ca816de121648bb5a1",
                body: "me second note 12",
                __v: 0
            }
        ]
    },
    {
        _id: "58af5f4f4d2a1814e8b3c48b",
        headline: 'Breitbart writer Milo Yiannopoulos resigns after CPAC boots him amid outrage over his pedophilia comments',
        link: 'https://www.washingtonpost.com/lifestyle/style/milo-yiannopoulos-resigns-from-breitbart-news/2017/02/21/0217c28-f7cc-11e6-be05-1a3817ac21a5_story.html',
        __v: 0,
        comments: [{
                _id: "58af5f764d2a1814e8b3c492",
                body: "mike was here one 21",
                __v: 0
            },
            {
                _id: "58af60ca816de121648bb5a3",
                body: "me second note 22",
                __v: 0
            }
        ]
    },
    {
        _id: "58af5f4f4d2a1814e8b3c48c",
        headline: 'Administration says deportation rules won’t lead to ‘mass roundups’ of people',
        link: 'https://www.washingtonpost.com/politics/trump-administration-seeks-to-prevent-panic-over-new-immigration-enforcement-policies/2017/02/21/a2a695a8-f847-11e6-bf01-d47f8cf9b643_story.html',
        __v: 0,
        comments: [{
                _id: "58af5f764d2a1814e8b3c494",
                body: "mike was here one 31",
                __v: 0
            },
            {
                _id: "58af60ca816de121648bb5a5",
                body: "me second note 32",
                __v: 0
            }
        ]
    },
    {
        _id: "58af5f4f4d2a1814e8b3c48d",
        headline: 'Sean Spicer demonstrated why there’s skepticism about Trump’s claims of tolerance',
        link: 'https://www.washingtonpost.com/news/politics/wp/2017/02/21/in-one-exchange-sean-spicer-demonstrated-why-there-skepticism-about-trumps-claims-of-tolerance/',
        __v: 0,
        comments: [{
                _id: "58af5f764d2a1814e8b3c496",
                body: "mike was here one 41",
                __v: 0
            },
            {
                _id: "58af60ca816de121648bb5a7",
                body: "me second note 42",
                __v: 0
            }
        ]
    },
    {
        _id: "58af5f4f4d2a1814e8b3c48e",
        headline: '33 days. 132 false or misleading claims.',
        link: 'https://www.washingtonpost.com/graphics/politics/trump-claims/',
        __v: 0,
        comments: [{
                _id: "58af5f764d2a1814e8b3c498",
                body: "mike was here one 51",
                __v: 0
            },
            {
                _id: "58af60ca816de121648bb5a9",
                body: "me second note 52",
                __v: 0
            }
        ]
    }
];

app.engine('handlebars', exprhbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.get('/stories', function(req, res) {
    //res.send(StoryList);
    res.render('index', { stories: StoryList });
});

app.listen(PORT);