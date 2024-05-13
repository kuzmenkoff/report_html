
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];


function task9Execute() {
    tagCounts = countTags(tweets);
    console.log(tagCounts);
}

function countTags(tweets) {
    const tagCounts = {};
    tweets.forEach(tweet => {
        tweet.tags.forEach(tag => {
            if(tag in tagCounts) 
                tagCounts[tag] += 1;
            else
            tagCounts[tag] = 1;
        });
    });
    return tagCounts;
}
