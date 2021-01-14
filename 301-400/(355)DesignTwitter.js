/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.userTweets = new Map();
  this.userFollowing = new Map();
  this.lastIndex = 1;
};

// time:  O(1)
// space: O(1)

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  let tweets = this.userTweets.get(userId);

  if (!tweets) {
    tweets = [];
    this.userTweets.set(userId, tweets);
  }

  tweets.unshift({
    id: tweetId,
    index: this.lastIndex
  });

  this.lastIndex++;
};

// time:  O(n)
// space: O(1)

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const followings = this.userFollowing.get(userId);
  let tweets = (this.userTweets.get(userId) || []).slice(0, 10);

  if (followings) {
    for (const uid of followings) {
      if (uid === userId) {
        continue;
      }

      const userTweets = this.userTweets.get(uid);

      if (userTweets) {
        tweets = tweets.concat(userTweets);
      }
    };
  }

  return tweets.sort((a, b) => b.index - a.index).map(tweet => tweet.id).slice(0, 10);
};

// time:  O(nlog(n))
// space: O(n)

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  let followings = this.userFollowing.get(followerId);

  if (!followings) {
    followings = new Set();
    this.userFollowing.set(followerId, followings);
  }

  followings.add(followeeId);
};

// time:  O(1)
// space: O(1)

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  const followings = this.userFollowing.get(followerId);

  if (followings) {
    followings.delete(followeeId);
  }
};

// time:  O(1)
// space: O(1)

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// ['TwitterpostTweet', 'getNewsFeed', 'follow', 'postTweet', 'getNewsFeed', 'unfollow', 'getNewsFeed'], [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
