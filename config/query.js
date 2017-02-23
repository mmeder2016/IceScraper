use test

db.washpost.insert(
    [{
            title: 'Conservative leaders to celebrate, show tension of Trump’s America',
            link: 'https://www.washingtonpost.com/powerpost/trumps-america-will-be-on-vivid-display-at-annual-conservative-gathering/2017/02/21/071db726-f7a5-11e6-9845-576c69081518_story.html'
        },
        {
            title: 'Breitbart writer Milo Yiannopoulos resigns after CPAC boots him amid outrage over his pedophilia comments',
            link: 'https://www.washingtonpost.com/lifestyle/style/milo-yiannopoulos-resigns-from-breitbart-news/2017/02/21/0217c28-f7cc-11e6-be05-1a3817ac21a5_story.html'
        },
        {
            title: 'Administration says deportation rules won’t lead to ‘mass roundups’ of people',
            link: 'https://www.washingtonpost.com/politics/trump-administration-seeks-to-prevent-panic-over-new-immigration-enforcement-policies/2017/02/21/a2a695a8-f847-11e6-bf01-d47f8cf9b643_story.html'
        },
        {
            title: 'Sean Spicer demonstrated why there’s skepticism about Trump’s claims of tolerance',
            link: 'https://www.washingtonpost.com/news/politics/wp/2017/02/21/in-one-exchange-sean-spicer-demonstrated-why-there-skepticism-about-trumps-claims-of-tolerance/'
        },
        {
            title: '33 days. 132 false or misleading claims.',
            link: 'https://www.washingtonpost.com/graphics/politics/trump-claims/'
        },
        {
            title: 'Trump’s new national security adviser is known as a soldier who can say ‘No, sir’',
            link: 'https://www.washingtonpost.com/world/national-security/trumps-new-national-security-adviser-a-soldier-who-can-say-no-sir/2017/02/21/0c05e696-f85e-11e6-be05-1a3817ac21a5_story.html'
        },
        {
            title: 'These are the American people Trump calls enemies of the American people',
            link: 'https://www.washingtonpost.com/opinions/these-are-the-american-people-trump-calls-enemies-of-the-american-people/2017/02/21/957b8bbc-f87a-11e6-be05-1a3817ac21a5_story.html'
        },
        {
            title: 'If college liberals are so naive, why did the campus right fall for Yiannopoulos?',
            link: 'https://www.washingtonpost.com/news/act-four/wp/2017/02/21/if-college-liberals-are-so-naive-why-did-the-campus-right-fall-for-yiannopoulos/'
        }
    ]
)

db.washpost.find({});