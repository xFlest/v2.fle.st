export function setStyleEmbedTweet() {
  function changeTwitterWidgetDesign() {
    const twitterWidget = $('iframe.twitter-timeline');
    const twitterWidgetContents = twitterWidget.contents();

    if (twitterWidget.length > 0 && twitterWidget[0].contentWindow.document.body.innerHTML !== "") {
      twitterWidgetContents.find('head').append(`
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet">
      <style>
      :root {
        --r: min(1rem, calc(var(--vmin, 100vmin) * 0.03))
      }
      .timeline-Widget {
        background-color: #0000;
        max-width: none !important;
        border-radius: 0 !important;
        padding-top: min(30px, 3vmin);
      }
      .timeline-Body {
        border: 0 !important
      }
      .timeline-TweetList-tweet {
        margin: 0;
        border: 0 !important;
        position: relative;
      }
      .timeline-TweetList-tweet:not(:first-child)::before {
        display: inline-block;
        position: absolute;
        width: 100%;
        content: '・・・・💛・・・・';
        text-align: center;
        color: #fff;
        font-size: calc(var(--r)*1.2) !important;
        top: calc(var(--r)*-3);
      }
      .timeline-Tweet {
        -webkit-tap-highlight-color:#0000;
        padding: 0 0 0 calc(var(--r)*4.8) !important;
        margin: 0 0 calc(var(--r)*5);
        background-color: #0000 !important;
        position: relative;
      }
      .timeline-Tweet-author {
        position: static !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .TweetAuthor-avatar {
        margin: 0 calc(var(--r)*.4) !important;
        width: calc(var(--r)*4) !important;
        height: calc(var(--r)*4) !important;
      }
      .Avatar {
        width: 100%;
        height: 100%;
      }
      .TweetAuthor-name {
        font-family: 'Zen Kaku Gothic New', sans-serif;
        color: #fff !important;
        font-size: calc(var(--r)*1.6) !important;
        line-height: calc(var(--r)*2) !important;
      }
      .TweetAuthor-name .Emoji {
        font-size: calc(var(--r)*1.4) !important;
      }
      .TweetAuthor-screenName {
        font-family: 'Zen Kaku Gothic New', sans-serif;
        color: #fae46d !important;
        font-size: calc(var(--r)*1.2) !important;
        line-height: calc(var(--r)*1.6) !important;
      }
      .timeline-Tweet-text {
        margin: 0 !important;
        color: #fff;
        font-family: 'Zen Kaku Gothic New', sans-serif;
        font-size: calc(var(--r)*1.5) !important;
        line-height: calc(var(--r)*1.6) !important;
        white-space: pre-line !important;
      }
      .timeline-Tweet-text a {
        color: #fae46d;
      }
      .timeline-Tweet-inReplyTo {
        padding: 0 !important;
        color: #fff !important;
      }
      .timeline-Tweet-media {
        margin: 4px 0 0 !important;
        border-radius: calc(var(--r)*1.2);
      }
      .TwitterCard-container {
        max-width: none;
        background-color: #F5F8FA88 !important;
      }
      .timeline-Tweet-retweetCredit {
        margin: 0 !important;
        color: #fff;
      }
      .Icon--retweetBadge {
        filter: hue-rotate(265deg) brightness(130%);
      }
      .Icon--playCircle {
        filter: hue-rotate(200deg) brightness(160%);
      }
      .TwitterCard .PollXChoice-footer span {
        padding: 0 !important;
      }
      .TwitterCard .EdgeButton.EdgeButton--secondary {
        border-radius: calc(var(--r)*.5) !important;
        border: 0 !important;
        background-color: #fae46d;
        padding: calc(var(--r)*.3) calc(var(--r)*.5) !important;
        color: #767676 !important;
        font-size: var(--r);
        font-weight: bold;
      }
      .timeline-LoadMore-prompt {
        border: solid calc(var(--vmin)*0.003) #fff9 !important;
        background-color: #0000 !important;
        transition: background-color .3s;
        color: #fae46d !important;
        -webkit-tap-highlight-color:#0000;
        margin: calc(var(--r)*-2) 0 calc(var(--r)*3);
        font-size: calc(var(--r)*1.2) !important;
        width: auto !important;
        padding: calc(var(--r)*.8) calc(var(--r)*1.6) !important;
      }
      .timeline-LoadMore-prompt.timeline-ShowMoreButton:hover {
        background-color: #fff9 !important;
      }
      .timeline-Header,
      .timeline-Body-notification,
      .timeline-InformationCircle,
      .timeline-Header-byline,
      .timeline-Tweet-Action,
      .timeline-Tweet-brand,
      .timeline-Tweet-metadata,
      .timeline-LoadMore-endOfTimelineMessage,
      .timeline-Footer,
      .PollXChoice-optionContainer,
      .PollXChoice-info > :not(.PollXChoice-vote) {
        display: none !important; 
      }
      </style>
      `);
      setFillHeighti();
      const tweet = document.getElementsByClassName('tweet-container')[0];
      tweet.style.opacity = '1';
    }
    else {
      setTimeout(function() {
        changeTwitterWidgetDesign();
      }, 350);
    }
  }
  function setFillHeighti() {
    const vh = $(window).height();
    const vw = $(window).width();
    const twitterWidget = $('iframe.twitter-timeline');
    const twitterWidgetContents = twitterWidget.contents();
    twitterWidgetContents.find(':root').css("--vh",`${vh}px`);
    if (vw > vh) {
      twitterWidgetContents.find(':root').css('--vmin', `${vh}px`);
    } else {
      twitterWidgetContents.find(':root').css('--vmin', `${vw}px`);
    }
  };
  $(window).resize(setFillHeighti);
  changeTwitterWidgetDesign();
}