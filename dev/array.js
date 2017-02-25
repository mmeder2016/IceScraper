var StoryArray = [{
        _id: "1",
        headline: "AAA",
        link: "AAALLL",
        __v: 0,
        comments: [
            "11",
            "22",
            "33"
        ]
    },
    {
        _id: "2",
        headline: "BBB",
        link: "BBBLLL",
        __v: 0,
        comments: [
            "11",
            "22"
        ]
    },
    {
        _id: "3",
        headline: "CCC",
        link: "CCCLLL",
        __v: 0,
        comments: ["11"]
    }
];

var CommentArray = [{
        _id: "11",
        body: "ZZZ",
        __v: 0
    },
    {
        _id: "22",
        body: "YYY",
        __v: 0
    },
    {
        _id: "33",
        body: "XXX",
        __v: 0
    }
];


// var sObj = JSON.stringify(StoryArray);

// for (var i = 0; i < CommentArray.length; i++) {
//     var cObj = JSON.stringify(CommentArray[i]);

//     sObj.replace(CommentArray[i]._id, cObj);
// }

// console.log(sObj);


var resObj = [];

for (var i = 0; i < StoryArray.length; i++) {
    var s = {
        _id: StoryArray[i]._id,
        headline: StoryArray[i].headline,
        link: StoryArray[i].link,
        comments: []
    };

    for (var j = 0; j < StoryArray[i].comments.length; j++) {
        for (var k = 0; k < CommentArray.length; k++) {
            if (StoryArray[i].comments[j] === CommentArray[k]._id) {
                s.comments.push(CommentArray[k]);
            }
        }
    }
    resObj.push(s);
    console.log('New Story')
}
console.log(resObj);

// StoryArray.forEach(story) {
//     story.comments.forEach(individual_comment) {
//         CommentArray.forEach(comment) {
//             if (individual_comment._id === comment._id) {
//                 individual_comment = comment;
//             }
//         }
//     }
// }

var strObj = JSON.stringify(resObj);
console.log(strObj);
process.exit();