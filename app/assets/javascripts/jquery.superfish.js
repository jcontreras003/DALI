  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>simple-navigation-demo/rails3/public/javascripts/jquery.superfish.js at master · andi/simple-navigation-demo · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="5mYfnFYmICkF12lV05t5fQWxoLT9MwYqr5LOaRoyM1s=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-1ca028b3d367253d6faea58b3ece3f7338988880.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-0deb846406a5a3d3b30805f8e3faf2c689462c60.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-72a29e4af589ec57f5690fd106c507673caea495.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="62054cb04ed0972ba467ddd3ca77ccfc">

        <link data-pjax-transient rel='permalink' href='/andi/simple-navigation-demo/blob/32dc1de69721de237297d7b35f4ddb437d54f05b/rails3/public/javascripts/jquery.superfish.js'>
    <meta property="og:title" content="simple-navigation-demo"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/andi/simple-navigation-demo"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/e4ba9aca464538116f99ab12c68e67d6?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="simple-navigation-demo - This is a sample application demonstrating the use of the simple-navigation gem. There&#39;s code for Rails 2, Rails 3, Sinatra and Padrino."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="andi/simple-navigation-demo"/>

    <meta name="description" content="simple-navigation-demo - This is a sample application demonstrating the use of the simple-navigation gem. There&#39;s code for Rails 2, Rails 3, Sinatra and Padrino." />


    <meta content="19619" name="octolytics-dimension-user_id" /><meta content="877590" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/andi/simple-navigation-demo/commits/master.atom" rel="alternate" title="Recent Commits to simple-navigation-demo:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="https://github.com/signup">Sign up</a>
      <a class="button" href="https://github.com/login?return_to=%2Fandi%2Fsimple-navigation-demo%2Fblob%2Fmaster%2Frails3%2Fpublic%2Fjavascripts%2Fjquery.superfish.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="andi/simple-navigation-demo"
      data-branch="master"
      data-sha="10f200fe52045419fbf62267e0b9251bc187a766"
  >

    <input type="hidden" name="nwo" value="andi/simple-navigation-demo" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fandi%2Fsimple-navigation-demo"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/andi/simple-navigation-demo/stargazers">
        13
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fandi%2Fsimple-navigation-demo"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/andi/simple-navigation-demo/network" class="social-count">
        3
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/andi" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">andi</span>
                  </a></span> /
                <strong><a href="/andi/simple-navigation-demo" class="js-current-repository">simple-navigation-demo</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/andi/simple-navigation-demo/pulse" class="js-selected-navigation-item " data-selected-links="pulse /andi/simple-navigation-demo/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/andi/simple-navigation-demo" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /andi/simple-navigation-demo">Code</a></li>
    <li><a href="/andi/simple-navigation-demo/network" class="js-selected-navigation-item " data-selected-links="repo_network /andi/simple-navigation-demo/network">Network</a></li>
    <li><a href="/andi/simple-navigation-demo/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /andi/simple-navigation-demo/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/andi/simple-navigation-demo/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /andi/simple-navigation-demo/issues">Issues <span class='counter'>0</span></a></li>



    <li><a href="/andi/simple-navigation-demo/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /andi/simple-navigation-demo/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/andi/simple-navigation-demo/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /andi/simple-navigation-demo/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/andi/simple-navigation-demo/blob/master/rails3/public/javascripts/jquery.superfish.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/andi/simple-navigation-demo" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /andi/simple-navigation-demo">Files</a></li>
    <li><a href="/andi/simple-navigation-demo/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /andi/simple-navigation-demo/commits/master">Commits</a></li>
    <li><a href="/andi/simple-navigation-demo/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /andi/simple-navigation-demo/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:0bc78c903dcc55cb1b0d5dcd31c76667 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:0bc78c903dcc55cb1b0d5dcd31c76667 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/andi/simple-navigation-demo" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">simple-navigation-demo</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/andi/simple-navigation-demo/tree/master/rails3" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">rails3</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/andi/simple-navigation-demo/tree/master/rails3/public" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">public</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/andi/simple-navigation-demo/tree/master/rails3/public/javascripts" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">javascripts</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.superfish.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="rails3/public/javascripts/jquery.superfish.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/andi/simple-navigation-demo/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/andi/simple-navigation-demo/contributors/master/rails3/public/javascripts/jquery.superfish.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1334862346" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/andi/simple-navigation-demo/blob/32dc1de69721de237297d7b35f4ddb437d54f05b/rails3/public/javascripts/jquery.superfish.js" data-title="simple-navigation-demo/rails3/public/javascripts/jquery.superfish.js at master · andi/simple-navigation-demo · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>121 lines (112 sloc)</span>
                <span>3.713 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/andi/simple-navigation-demo/raw/master/rails3/public/javascripts/jquery.superfish.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/andi/simple-navigation-demo/blame/master/rails3/public/javascripts/jquery.superfish.js" class="button minibutton ">Blame</a>
                  <a href="/andi/simple-navigation-demo/commits/master/rails3/public/javascripts/jquery.superfish.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="cm">/*</span></div><div class='line' id='LC3'><span class="cm"> * Superfish v1.4.8 - jQuery menu widget</span></div><div class='line' id='LC4'><span class="cm"> * Copyright (c) 2008 Joel Birch</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Dual licensed under the MIT and GPL licenses:</span></div><div class='line' id='LC7'><span class="cm"> * 	http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC8'><span class="cm"> * 	http://www.gnu.org/licenses/gpl.html</span></div><div class='line' id='LC9'><span class="cm"> *</span></div><div class='line' id='LC10'><span class="cm"> * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC14'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">superfish</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">op</span><span class="p">){</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>		<span class="kd">var</span> <span class="nx">sf</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">superfish</span><span class="p">,</span></div><div class='line' id='LC17'>			<span class="nx">c</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">c</span><span class="p">,</span></div><div class='line' id='LC18'>			<span class="nx">$arrow</span> <span class="o">=</span> <span class="nx">$</span><span class="p">([</span><span class="s1">&#39;&lt;span class=&quot;&#39;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">arrowClass</span><span class="p">,</span><span class="s1">&#39;&quot;&gt; &amp;#187;&lt;/span&gt;&#39;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)),</span></div><div class='line' id='LC19'>			<span class="nx">over</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC20'>				<span class="kd">var</span> <span class="nx">$$</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">menu</span> <span class="o">=</span> <span class="nx">getMenu</span><span class="p">(</span><span class="nx">$$</span><span class="p">);</span></div><div class='line' id='LC21'>				<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">menu</span><span class="p">.</span><span class="nx">sfTimer</span><span class="p">);</span></div><div class='line' id='LC22'>				<span class="nx">$$</span><span class="p">.</span><span class="nx">showSuperfishUl</span><span class="p">().</span><span class="nx">siblings</span><span class="p">().</span><span class="nx">hideSuperfishUl</span><span class="p">();</span></div><div class='line' id='LC23'>			<span class="p">},</span></div><div class='line' id='LC24'>			<span class="nx">out</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC25'>				<span class="kd">var</span> <span class="nx">$$</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">menu</span> <span class="o">=</span> <span class="nx">getMenu</span><span class="p">(</span><span class="nx">$$</span><span class="p">),</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">op</span><span class="p">;</span></div><div class='line' id='LC26'>				<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">menu</span><span class="p">.</span><span class="nx">sfTimer</span><span class="p">);</span></div><div class='line' id='LC27'>				<span class="nx">menu</span><span class="p">.</span><span class="nx">sfTimer</span><span class="o">=</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC28'>					<span class="nx">o</span><span class="p">.</span><span class="nx">retainPath</span><span class="o">=</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">$$</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="nx">o</span><span class="p">.</span><span class="nx">$path</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC29'>					<span class="nx">$$</span><span class="p">.</span><span class="nx">hideSuperfishUl</span><span class="p">();</span></div><div class='line' id='LC30'>					<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">$path</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">$$</span><span class="p">.</span><span class="nx">parents</span><span class="p">([</span><span class="s1">&#39;li.&#39;</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">hoverClass</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)).</span><span class="nx">length</span><span class="o">&lt;</span><span class="mi">1</span><span class="p">){</span><span class="nx">over</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">$path</span><span class="p">);}</span></div><div class='line' id='LC31'>				<span class="p">},</span><span class="nx">o</span><span class="p">.</span><span class="nx">delay</span><span class="p">);</span>	</div><div class='line' id='LC32'>			<span class="p">},</span></div><div class='line' id='LC33'>			<span class="nx">getMenu</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$menu</span><span class="p">){</span></div><div class='line' id='LC34'>				<span class="kd">var</span> <span class="nx">menu</span> <span class="o">=</span> <span class="nx">$menu</span><span class="p">.</span><span class="nx">parents</span><span class="p">([</span><span class="s1">&#39;ul.&#39;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">menuClass</span><span class="p">,</span><span class="s1">&#39;:first&#39;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">))[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC35'>				<span class="nx">sf</span><span class="p">.</span><span class="nx">op</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">o</span><span class="p">[</span><span class="nx">menu</span><span class="p">.</span><span class="nx">serial</span><span class="p">];</span></div><div class='line' id='LC36'>				<span class="k">return</span> <span class="nx">menu</span><span class="p">;</span></div><div class='line' id='LC37'>			<span class="p">},</span></div><div class='line' id='LC38'>			<span class="nx">addArrow</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$a</span><span class="p">){</span> <span class="nx">$a</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">anchorClass</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$arrow</span><span class="p">.</span><span class="nx">clone</span><span class="p">());</span> <span class="p">};</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">serial</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC42'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">sf</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span><span class="nx">op</span><span class="p">);</span></div><div class='line' id='LC43'>			<span class="nx">o</span><span class="p">.</span><span class="nx">$path</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li.&#39;</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">pathClass</span><span class="p">,</span><span class="k">this</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">pathLevels</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC44'>				<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">addClass</span><span class="p">([</span><span class="nx">o</span><span class="p">.</span><span class="nx">hoverClass</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">bcClass</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">))</span></div><div class='line' id='LC45'>					<span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;li:has(ul)&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">pathClass</span><span class="p">);</span></div><div class='line' id='LC46'>			<span class="p">});</span></div><div class='line' id='LC47'>			<span class="nx">sf</span><span class="p">.</span><span class="nx">o</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">op</span> <span class="o">=</span> <span class="nx">o</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:has(ul)&#39;</span><span class="p">,</span><span class="k">this</span><span class="p">)[(</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">hoverIntent</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">disableHI</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;hoverIntent&#39;</span> <span class="o">:</span> <span class="s1">&#39;hover&#39;</span><span class="p">](</span><span class="nx">over</span><span class="p">,</span><span class="nx">out</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC50'>				<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">autoArrows</span><span class="p">)</span> <span class="nx">addArrow</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&gt;a:first-child&#39;</span><span class="p">,</span><span class="k">this</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC51'>			<span class="p">})</span></div><div class='line' id='LC52'>			<span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="o">+</span><span class="nx">c</span><span class="p">.</span><span class="nx">bcClass</span><span class="p">)</span></div><div class='line' id='LC53'>				<span class="p">.</span><span class="nx">hideSuperfishUl</span><span class="p">();</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>			<span class="kd">var</span> <span class="nx">$a</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">,</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC56'>			<span class="nx">$a</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">){</span></div><div class='line' id='LC57'>				<span class="kd">var</span> <span class="nx">$li</span> <span class="o">=</span> <span class="nx">$a</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">i</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">);</span></div><div class='line' id='LC58'>				<span class="nx">$a</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">i</span><span class="p">).</span><span class="nx">focus</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">over</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$li</span><span class="p">);}).</span><span class="nx">blur</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">out</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$li</span><span class="p">);});</span></div><div class='line' id='LC59'>			<span class="p">});</span></div><div class='line' id='LC60'>			<span class="nx">o</span><span class="p">.</span><span class="nx">onInit</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>		<span class="p">}).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC63'>			<span class="kd">var</span> <span class="nx">menuClasses</span> <span class="o">=</span> <span class="p">[</span><span class="nx">c</span><span class="p">.</span><span class="nx">menuClass</span><span class="p">];</span></div><div class='line' id='LC64'>			<span class="k">if</span> <span class="p">(</span><span class="nx">sf</span><span class="p">.</span><span class="nx">op</span><span class="p">.</span><span class="nx">dropShadows</span>  <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">msie</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">version</span> <span class="o">&lt;</span> <span class="mi">7</span><span class="p">))</span> <span class="nx">menuClasses</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">shadowClass</span><span class="p">);</span></div><div class='line' id='LC65'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">menuClasses</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">));</span></div><div class='line' id='LC66'>		<span class="p">});</span></div><div class='line' id='LC67'>	<span class="p">};</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>	<span class="kd">var</span> <span class="nx">sf</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">superfish</span><span class="p">;</span></div><div class='line' id='LC70'>	<span class="nx">sf</span><span class="p">.</span><span class="nx">o</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC71'>	<span class="nx">sf</span><span class="p">.</span><span class="nx">op</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC72'>	<span class="nx">sf</span><span class="p">.</span><span class="nx">IE7fix</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC73'>		<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">op</span><span class="p">;</span></div><div class='line' id='LC74'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">msie</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">version</span> <span class="o">&gt;</span> <span class="mi">6</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">dropShadows</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">animation</span><span class="p">.</span><span class="nx">opacity</span><span class="o">!=</span><span class="kc">undefined</span><span class="p">)</span></div><div class='line' id='LC75'>			<span class="k">this</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="nx">sf</span><span class="p">.</span><span class="nx">c</span><span class="p">.</span><span class="nx">shadowClass</span><span class="o">+</span><span class="s1">&#39;-off&#39;</span><span class="p">);</span></div><div class='line' id='LC76'>		<span class="p">};</span></div><div class='line' id='LC77'>	<span class="nx">sf</span><span class="p">.</span><span class="nx">c</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC78'>		<span class="nx">bcClass</span>     <span class="o">:</span> <span class="s1">&#39;sf-breadcrumb&#39;</span><span class="p">,</span></div><div class='line' id='LC79'>		<span class="nx">menuClass</span>   <span class="o">:</span> <span class="s1">&#39;sf-js-enabled&#39;</span><span class="p">,</span></div><div class='line' id='LC80'>		<span class="nx">anchorClass</span> <span class="o">:</span> <span class="s1">&#39;sf-with-ul&#39;</span><span class="p">,</span></div><div class='line' id='LC81'>		<span class="nx">arrowClass</span>  <span class="o">:</span> <span class="s1">&#39;sf-sub-indicator&#39;</span><span class="p">,</span></div><div class='line' id='LC82'>		<span class="nx">shadowClass</span> <span class="o">:</span> <span class="s1">&#39;sf-shadow&#39;</span></div><div class='line' id='LC83'>	<span class="p">};</span></div><div class='line' id='LC84'>	<span class="nx">sf</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC85'>		<span class="nx">hoverClass</span>	<span class="o">:</span> <span class="s1">&#39;sfHover&#39;</span><span class="p">,</span></div><div class='line' id='LC86'>		<span class="nx">pathClass</span>	<span class="o">:</span> <span class="s1">&#39;overideThisToUse&#39;</span><span class="p">,</span></div><div class='line' id='LC87'>		<span class="nx">pathLevels</span>	<span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC88'>		<span class="nx">delay</span>		<span class="o">:</span> <span class="mi">800</span><span class="p">,</span></div><div class='line' id='LC89'>		<span class="nx">animation</span>	<span class="o">:</span> <span class="p">{</span><span class="nx">opacity</span><span class="o">:</span><span class="s1">&#39;show&#39;</span><span class="p">},</span></div><div class='line' id='LC90'>		<span class="nx">speed</span>		<span class="o">:</span> <span class="s1">&#39;normal&#39;</span><span class="p">,</span></div><div class='line' id='LC91'>		<span class="nx">autoArrows</span>	<span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC92'>		<span class="nx">dropShadows</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC93'>		<span class="nx">disableHI</span>	<span class="o">:</span> <span class="kc">false</span><span class="p">,</span>		<span class="c1">// true disables hoverIntent detection</span></div><div class='line' id='LC94'>		<span class="nx">onInit</span>		<span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span> <span class="c1">// callback functions</span></div><div class='line' id='LC95'>		<span class="nx">onBeforeShow</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class='line' id='LC96'>		<span class="nx">onShow</span>		<span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class='line' id='LC97'>		<span class="nx">onHide</span>		<span class="o">:</span> <span class="kd">function</span><span class="p">(){}</span></div><div class='line' id='LC98'>	<span class="p">};</span></div><div class='line' id='LC99'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC100'>		<span class="nx">hideSuperfishUl</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC101'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">op</span><span class="p">,</span></div><div class='line' id='LC102'>				<span class="nx">not</span> <span class="o">=</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">retainPath</span><span class="o">===</span><span class="kc">true</span><span class="p">)</span> <span class="o">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">$path</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC103'>			<span class="nx">o</span><span class="p">.</span><span class="nx">retainPath</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC104'>			<span class="kd">var</span> <span class="nx">$ul</span> <span class="o">=</span> <span class="nx">$</span><span class="p">([</span><span class="s1">&#39;li.&#39;</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">hoverClass</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">),</span><span class="k">this</span><span class="p">).</span><span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">not</span><span class="p">(</span><span class="nx">not</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">hoverClass</span><span class="p">)</span></div><div class='line' id='LC105'>					<span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt;ul&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">().</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;visibility&#39;</span><span class="p">,</span><span class="s1">&#39;hidden&#39;</span><span class="p">);</span></div><div class='line' id='LC106'>			<span class="nx">o</span><span class="p">.</span><span class="nx">onHide</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$ul</span><span class="p">);</span></div><div class='line' id='LC107'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC108'>		<span class="p">},</span></div><div class='line' id='LC109'>		<span class="nx">showSuperfishUl</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC110'>			<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">op</span><span class="p">,</span></div><div class='line' id='LC111'>				<span class="nx">sh</span> <span class="o">=</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">c</span><span class="p">.</span><span class="nx">shadowClass</span><span class="o">+</span><span class="s1">&#39;-off&#39;</span><span class="p">,</span></div><div class='line' id='LC112'>				<span class="nx">$ul</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">hoverClass</span><span class="p">)</span></div><div class='line' id='LC113'>					<span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;&gt;ul:hidden&#39;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;visibility&#39;</span><span class="p">,</span><span class="s1">&#39;visible&#39;</span><span class="p">);</span></div><div class='line' id='LC114'>			<span class="nx">sf</span><span class="p">.</span><span class="nx">IE7fix</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$ul</span><span class="p">);</span></div><div class='line' id='LC115'>			<span class="nx">o</span><span class="p">.</span><span class="nx">onBeforeShow</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$ul</span><span class="p">);</span></div><div class='line' id='LC116'>			<span class="nx">$ul</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">animation</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">sf</span><span class="p">.</span><span class="nx">IE7fix</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$ul</span><span class="p">);</span> <span class="nx">o</span><span class="p">.</span><span class="nx">onShow</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$ul</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC117'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC118'>		<span class="p">}</span></div><div class='line' id='LC119'>	<span class="p">});</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.09423s from fe13.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/andi/simple-navigation-demo/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.09464' data-host='fe13'></span>
    
  </body>
</html>

